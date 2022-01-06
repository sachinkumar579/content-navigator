import file from './file.png'
import { Fragment } from 'react'
import './DisplayDocCount.css'

const DisplayDocCount=()=>{
   
     return (<Fragment>
          <div className="total-count"> 
             <div><img src={file}></img></div>                     
             <span>Total files</span> <span>20</span>
          </div>
     </Fragment>)    
}

export default DisplayDocCount