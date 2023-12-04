const { db } = require("../utils");
const { BaseModel } = require("./base")
function Content() {

}
Content.prototype.tableName = "contents";

Content.prototype.get = async function ({ title, status, getCount, perPage = 20, page = 1 }) {

    let offset = (parseInt(perPage) * (parseInt(page) - 1))
    let count = null;
    if (getCount == 1) {
        count = (await this.db(this.tableName)
            .where(function(){
                if(status){
                    this.where('status', 'like', '%' + status + '%')
                }
            })
            .where(function(){
                if(title){
                    this.where('title', 'like', '%' + title + '%')
                }
            })
            .count('id as c').first())['c'];
    }
    const data = await this.db(this.tableName)
    .where(function(){
        if(status){
            this.where('status', 'like', '%' + status + '%')
        }
    })
    .where(function(){
        if(title){
            this.where('title', 'like', '%' + title + '%')
        }
    })
    .orderBy('id','DESC')
    .limit(perPage, { skipBinding: true })
    .offset(offset)

    const response = {
        data
    }
    if (getCount == 1) response.count = count;
    return response;
}
// 'JSON_OBJECT("id", files.id, "uri": files.uri)'
Content.prototype.getById = async function (id) {
    return await this.db(this.tableName)
    .select([this.tableName+'.*'])
    .where(this.tableName+'.id', id).first()
}

Content.prototype.create = async function ({ title, details, feature_category, status, master_location, categories = [], tags = [] }) {
    const id = await this.db(this.tableName).insert({
        title, details, feature_category, status, master_location,
        created_at: new Date(),
        updated_at: new Date(),
    })
    await this.db("content_tags").insert(tags.map(d=>({tag_id:d,content_id:id})))
    await this.db("content_categories").insert(categories.map(d=>({category_id:d,content_id:id})))
    return this.getById(id)
}

Content.prototype.update = async function (id, { title, details, feature_category, status, master_location,  categories = [], tags = [] }) {

    return await this.db.transaction(async function(trx){
        await trx("content_tags").where("content_id", id).del();
        await trx("content_categories").where("content_id", id).del();

        await trx("content_tags").insert(tags.map(d=>({tag_id:d,content_id:id})));
        await trx("content_categories").insert(categories.map(d=>({category_id:d,content_id:id})));
        
        await trx(this.tableName).where('id', id).update({
            title, details, feature_category, status, master_location,
            updated_at: new Date(),
        });
    })
}

Content.prototype.delete = async function (id) {
    let tb = this.tableName;
    return await this.db.transaction(async function(trx){
        // await trx.from('section_content').where('content_id', id).del()
        return await trx.from(tb).where('id', id).del();
    })
    
}

Object.setPrototypeOf(Content.prototype, BaseModel.prototype)

module.exports = { Content }