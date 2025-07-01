import { useState } from "react"
import './PaginationBar.scss' ;

export default function PaginationBar({
    isActive ,
    pageNumber ,
    setPageNumber ,
    itemsShowing ,
    setIsActive
}){
    return (
        <div className="pagination-container">
            <span 
                className={`previous ${isActive.prev && 'active'} ${ pageNumber.page01 === 1 && isActive.currentPage === 1 && 'inactive'}`} 
                onClick={() => {
                    if(isActive.currentPage === 2)
                        setIsActive({  next: false , currentPage: 1 , prev: true })
                    else if(isActive.currentPage === 3)
                        setIsActive({ next: false , currentPage: 2 , prev: true })
                    else if ( isActive.currentPage === 1 )
                        if( pageNumber.page01 > 1 )
                            setPageNumber({  page01 : (pageNumber.page01 - 1) , page02 : (pageNumber.page02 - 1) , page03 : (pageNumber.page03 - 1)})
                }}
            >
                Prev
            </span>
            <span 
                className={`page01 ${isActive.currentPage === 1 && 'active'} ${itemsShowing.length < 1 && "inactive" }`}
                onClick={() =>  {
                    if(itemsShowing.length >= 1)
                        setIsActive({  next: false , currentPage: 1 , prev: false })
                }}
            >
                {pageNumber.page01}
            </span>
            <span 
                className={`page02 ${isActive.currentPage === 2 && 'active'} ${itemsShowing.length < 2 && "inactive" }`}
                onClick={() => {
                    if(itemsShowing.length >= 2)
                        setIsActive({  next: false , currentPage: 2 , prev: false })
                }}
            >
                {pageNumber.page02}
            </span>
            <span
                className={`page03 ${isActive.currentPage === 3 && 'active'} ${itemsShowing.length < 3 && "inactive" }`}
                onClick={() => {
                    if(itemsShowing.length >= 3)  
                        setIsActive({  next: false , currentPage: 3 , prev: false })
                }}
            >
                {pageNumber.page03}
            </span>
            <span 
                className={`next ${isActive.next && 'active'} ${itemsShowing.length === pageNumber.page03 && isActive.currentPage === 3 && 'inactive'}`}
                onClick={() => {
                    
                    if(isActive.currentPage === 1 && itemsShowing.length > 1)
                        setIsActive({  next: true , currentPage: 2 , prev: false })
                    else if(isActive.currentPage === 2 && itemsShowing.length > 2)
                        setIsActive({  next: true , currentPage: 3 , prev: false })
                    else if(isActive.currentPage === 3){
                        if( itemsShowing.length > 3 && itemsShowing.length !== pageNumber.page03 ){
                            setPageNumber({  page01 : (pageNumber.page01 + 1) , page02 : (pageNumber.page02 + 1) , page03 : (pageNumber.page03 + 1)})
                            setIsActive({ next: true , currentPage: 3 , prev: false })
                        }else if( itemsShowing.length === pageNumber.page03 ){

                        }
                    }
                }}
            >
                Next
            </span>
        </div>
    )
} 