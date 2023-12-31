const { Content } = require('../model/Content');
const { responseBuilder, hashMake, Validator } = require("../utils");
const content = new Content()

const index = async (req, res, next) => {
    try {
        const { title, status, perPage = 20, page = 1, getCount } = req.query;
        return res.status(200).send(responseBuilder(200, await content.get({ title, status, getCount, perPage, page }), 'Successfully fetched data'))
    } catch (e) {
        return next(e);
    }
}
const create = async (req, res, next) => {
    const { title, details, feature_category, status, master_location, categories, tags  } = req.body;
    const validator = await Validator([
        {
            key: 'title',
            message: 'invalid title',
            required: true
        },
        {
            key: 'details',
            message: 'invalid details',
            required: true
        },
        {
            key: 'status',
            message: 'invalid status',
            test: /(0|1)/,
        },
    ], { title, details, feature_category, status, master_location })
    if (!validator.isAcceptable) {
        return res.status(400).send(responseBuilder(400, {}, validator.messages))
    }
    try {
        return res.status(200).send(responseBuilder(200, await content.create({ title, details, feature_category, status, master_location, categories: categories.split(","), tags: tags.split(",") }), 'Content has been created successfully'))
    } catch (e) {
        return next(e);
    }
}
const get = async (req, res, next) => {
    try {
        let response = await content.getById(req.params.id)
        if(response) return res.status(200).send(responseBuilder(200, response, 'Content has been fetched successfully'))
        return next(404)
    } catch (e) {
        return next(e);
    }
}
const update = async (req, res, next) => {

    try {
        const { title, details, feature_category, status, master_location,categories, tags } = req.body;
        //'slider','post','address','package','popular-package','client'
        const validator = await Validator([
            {
                key: 'title',
                message: 'invalid title',
                required: true
            },
            {
                key: 'details',
                message: 'invalid details',
                required: true
            },
            {
                key: 'status',
                message: 'invalid status',
                test: /(0|1)/,
            },
        ], { title, details, feature_category, status, master_location })
        if (!validator.isAcceptable) {
            return res.status(400).send(responseBuilder(200, {}, validator.messages))
        }
        const response = await content.update(req.params.id, { title, details, feature_category, status, master_location, categories: categories.split(","), tags: tags.split(",") })
        if(response)return res.status(200).send(responseBuilder(200, response, 'Content has been updated successfully'))
        return next(404);
    } catch (e) {
        return next(e);
    }
}
const remove = async (req, res, next) => {
    try {
        let removedData = await content.delete(req.params.id);
        if(removedData==1) return res.status(200).send(responseBuilder(200, removedData, 'Content has been removed successfully'))
        return next();
    } catch (e) {
        return next(e);
    }
}

module.exports = { index, create, get, update, remove };