import React , {useEffect, useState}from "react";
import './ProductItemsContainer.scss';
import ProductItems from "../../home/product-items/ProductItems";
import PaginationBar from "../../pagination-bar/PaginationBar";
import FilterBar from "../../filter-bar/FilterBar";

export default function ProductItemsContainer(){
    const [ itemsShowing , setItemsShowing ] = useState([])
    const [ pageNumber , setPageNumber ] = useState({
        page01 : 1 ,
        page02 : 2 ,
        page03 : 3
    })
    const [ isActive , setIsActive ] = useState({
        next:  false ,
        currentPage: 1 ,
        prev: false 
    })

    useEffect(() =>{
        setIsActive({
            next:  false ,
            currentPage: 1 ,
            prev: false 
        })
    },[])

    return (
        <div className='container'>
            <FilterBar 
                isActive={isActive}
                itemsShowing={itemsShowing}
                setItemsShowing={setItemsShowing}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />

            <ProductItems 
                itemsShowing={  
                                itemsShowing?.[(isActive.currentPage === 1 ?
                                    pageNumber.page01 : 
                                    (isActive.currentPage === 2?  
                                        pageNumber.page02 : 
                                        pageNumber.page03))-1]
                            } 
            />

            <PaginationBar
                isActive={isActive}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                setIsActive={setIsActive}
                itemsShowing={itemsShowing}
            />

        </div>
    )
} 