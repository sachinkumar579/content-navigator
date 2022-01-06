import { Fragment } from "react";
import upload from './upload.png'
import './UploadDocument.css'

const UploadDocument=(props)=> {

    const columnNames = ["Column1","Column2","Column3","Column4","Column5","Column6","Column7"];
    
       return <Fragment>
            <div className='backdrop'></div>
            <div className="modal"> 
            <div className="upload">
            <button type="button" className="close" title="Close" onClick={()=> props.close(false)}>
             <span>&times;</span>
            </button> 
                <h3>Enter all fields</h3>
            {columnNames.map((data,index)=>{
            return ( 
            <input type="text" placeholder={columnNames[index]} key={index}/>)      
            })}
            <input type="file" id="file" name="filename"></input> 
            <button type="button" className="close" title="Upload" >
             <img src={upload}>
             </img> 
            </button>

            </div>
            </div>
       </Fragment>



}

export default UploadDocument;