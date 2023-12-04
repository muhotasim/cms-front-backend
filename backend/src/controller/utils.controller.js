const fs = require('fs');
const { extname, join } = require('path');
const path = require('path');
const { responseBuilder } = require('../utils');
const getLogs =async (req, res, next)=>{
    try{
        let files = fs.readdirSync(path.join(__dirname,'../../log'))
        return res.send(responseBuilder(200,{ data:files,  }, "Fetching the log data was successful"))
    }catch(e){
        return next(e)
    }
}
const removeLogs =async (req, res, next)=>{
    try{
        let files = fs.unlinkSync(path.join(__dirname,'../../log/'+req.params.filename));
        return res.send(responseBuilder(200,{ data: files  }, "Removing the  Log: "+req.params.filename+" was successful"))
    }catch(e){
        return next(e)
    }
}
const readLog =async (req, res, next)=>{
    try{
        let files = fs.readFileSync(path.join(__dirname,'../../log/'+req.params.filename), {encoding:'utf8', flag:'r'});
        return res.send(responseBuilder(200,{ data: files  }, "Reading the Log: "+req.params.filename+" was successful"))
    }catch(e){
        return next(e)
    }
}


const readDirectory =async (req, res, next)=>{
    try{
        const { extra_loc } = req.query;
        const selectedLoc = req.app.locals.settings['FTP_DIRECTORY'].value + (extra_loc?extra_loc:'');
        let filesNFolders = fs.readdirSync(selectedLoc)
        let processedFilesNFolders = filesNFolders.map(d=>{
            let mime = extname(d).replace(".","")
            let name = d.replace("."+mime,"");
            return {
                mime,
                name,
                file: mime?(name+'.'+mime):name,
                type: mime?"file":"folder",
                file_loc: join(selectedLoc, d)
            };
        })
        return res.send(responseBuilder(200,{ data: processedFilesNFolders  }, "Fetching the directory files was successful"))
    }catch(e){
        return next(e)
    }
}


module.exports = { getLogs, readLog, removeLogs, readDirectory };