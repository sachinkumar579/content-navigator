import { Fragment } from "react"
import './DisplayCategories.css' 

const DisplayCategories = () =>{

    const categories = [{name:"Item One Categories",category:["Item One Name"]},
    {name:"Item Two Categories",category:["Item Two Name","Item Two Name"]},
    {name:"Item Three Categories",category:["Item Three Name","Item Three Name","Item Three Name"]}]

    return (<Fragment>
    { false && <div className="top">
        <span className="name">Hi Sachin</span> <a href="" className="logout">Logout</a>
    </div>}

    <div className="header">
        <span>Content Navigator</span>
    </div>

    {categories.map((data,index)=>{
    return (    
    <div className="business-area" key ={index}>
      <p>{data.name}</p>
      <div className="business-name-wrapper">           
          {data.category.map((dataCategory,index)=>{
            return (
               <a href="search" key={index}>   
               <div className="business-name" key={index}> 
                  <span>{dataCategory}</span>
               </div>
               </a>  
        )})}
        </div>
    </div>
    )})
   }
  </Fragment>)
}

export default DisplayCategories