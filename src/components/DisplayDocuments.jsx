import { Fragment, useState } from "react"
import DisplayDocCount from "./DisplayDocCount"
import './DisplayDocument.css'
import EditDocument from "./EditDocument"
import SearchDocuments from "./SearchDocuments"
import UploadDocument from "./UploadDocument"

const DisplayDocuments =()=>{

    const tableData = {columnnames:["Column1","Column2","Column3","Column4","Column5","Column6","Column7"],
           values : [["data1","data2","data3","data4","data5","data6","data7"],
           ["data6","data7","data8","data9","data10","data6","data7"],
           ["data1","data1","data1","data1","data1","data6","data7"],
           ["data1","data1","data1","data1","data1","data6","data7"],
           ["data1","data1","data1","data1","data1","data6","data7"],
           ["data1","data1","data1","data1","data1","data6","data7"],
           ["data1","data1","data1","data1","data1","data6","data7"],
           ["data1","data1","data1","data1","data1","data6","data7"],
           ["data1","data1","data1","data1","data1","data6","data7"],
           ["data1","data1","data1","data1","data1","data6","data7"]]
        }

    const [editDocument,setEditDocument] = useState('')
    const [tableDataState, setTableDataState] = useState(tableData)
    const [uploadState,setUploadState] = useState(false)

    const editDocumentHandler =()=>{
        setEditDocument('')
    }

    const onSearchDocumentHandler =(text)=>{
          const values = tableData.values.filter((data,index)=>{  let isPresent = false ;  data.forEach(data=>{ if(data==text) isPresent=true}) ; return isPresent})
          setEditDocument(false)
          setTableDataState(prevData=> {return {columnnames:prevData.columnnames, values:values}})
    }

    const onUploadHandler = (state)=>{
        setUploadState(state)
    }

    const onEditHandler =() =>{
        setEditDocument(false)
        console.log('call Edit REST API')
    }


    return (<Fragment>
     { false && <div className="top">
        <span className="name">Hi Sachin</span> <a href="" className="logout">Logout</a>
    </div>}

    {uploadState && <UploadDocument close={onUploadHandler}></UploadDocument>}

     <div className="search-upload-bar">
     <SearchDocuments search={onSearchDocumentHandler}></SearchDocuments>
     <button onClick={()=>{onUploadHandler(true)}} className="upload"> UPLOAD</button>
     </div>
     

      <div className="content-container">
      <div className="document-section">
      <table className="table">
      <thead><tr>
      { 
      tableDataState.columnnames.map((data,index)=><th key={index}>{data}</th>)
      }
      </tr></thead>
      <tbody>
      {
      tableDataState.values.map((data,index)=><tr key={index} onClick={()=>{setEditDocument(data)}}>{data.map((data,index)=><td key={index}>{data}</td>)}</tr>)                
      }
      </tbody>
      </table>
      </div>

      { editDocument && <div className="edit-document"> <EditDocument attributes={editDocument} close={editDocumentHandler} edit={onEditHandler}></EditDocument></div>}
      </div>
    
    </Fragment>)
}

export default DisplayDocuments