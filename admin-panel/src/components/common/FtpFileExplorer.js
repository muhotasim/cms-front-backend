import { Button, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import { File, Folder, Loader } from 'react-feather';
import { explorer } from '../../services/file-explorer.service';
const FtpFileExplorer = (props)=>{
    const [exploreLoc, setExploreLoc] = useState('');
    const [fileNFolders, setFilesNFolders] = useState([]);
    const [loading,setLoading] = useState(false);
    const [selected,setSelect] = useState(null);
    const onBack= ()=>{
        let tempELoc = exploreLoc.split('/');
        tempELoc.pop();
        setExploreLoc(tempELoc.join('/'));
    }
    const onFolderClick = (name)=>{
        let tempELoc = exploreLoc.split('/');
        tempELoc.push(name);
        setExploreLoc(tempELoc.join('/'));
    }

    const getData = async ()=>{
        try{
            setLoading(true);
            const response = await explorer({ extra_loc: exploreLoc });
            if(response?.data?.statusCode==200){
                setFilesNFolders(response.data.data.data);
                console.log(response.data.data.data)
                setLoading(false);
            }else{
                setLoading(false);
            }
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getData();
    },[exploreLoc])
    return <div>
        <div className='file-explorer'>
            {loading?<div>
                <Loader size={50} className="spiner" color='#0d47a1'/>
            </div>:<div>
            <ul>
            {exploreLoc?<li className='folder'  onClick={()=>{onBack();}} type="link">...</li>:null}
            {fileNFolders.map((item,index)=>{
                if(item.type==="file"){
                    return <li className='folder' key={index} ><Checkbox checked={item.file_loc==selected} onClick={()=>{setSelect(item.file_loc==selected?null:item.file_loc)}}/> <span ><File size={14} color="#0d47a1"/> {item.file}</span></li>
                }
                return <li className='folder' key={index}><Checkbox checked={item.file_loc==selected} onClick={()=>{setSelect(item.file_loc==selected?null:item.file_loc)}}/> <span onClick={()=>onFolderClick(item.name)}> <Folder size={14} color="#fdd835"/> {item.file} </span></li>
            })}
            </ul>
                </div>}
            

        </div>
    </div>
}

export default FtpFileExplorer;