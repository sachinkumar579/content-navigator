import { Fragment, useRef } from "react"
import './SearchDocument.css'

const SearchDocuments=(props)=>{

    let searchText = useRef('searchTxt')

    return <Fragment>
        <form className="wrap">
         <div className="search">
         <input type="text" className="searchTerm" placeholder="Search documents..." ref={searchText}/>
         <button type="submit" className="searchButton" onClick={(e)=> { e.preventDefault(); props.search(searchText.current.value)}}>
         <i className="fa fa-search"></i>
         </button>
         </div>
        </form>
    </Fragment>
}

export default SearchDocuments