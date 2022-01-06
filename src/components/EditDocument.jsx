import { Fragment } from "react"
import './EditDocument.css'

const EditDocument=(props)=>{
    const columnNames = ["Column1","Column2","Column3","Column4","Column5","Column6","Column7"];
    const attributes = props.attributes;

     return (<Fragment>
          <button type="button" className="close" title="Close" onClick={()=> props.close()}>
             <span>&times;</span>
          </button> 
          {columnNames.map((data,index)=>{
            return (<div key={index} className="edit-metadata">
            <label>{data}</label> 
            <input type="text" placeholder={attributes[index]}/>
            </div>)      
          })}
          <button className="apply" title="Apply changes" onClick={props.edit}>APPLY</button> 
     </Fragment>)
}

export default EditDocument