import React , {useState , useEffect }from "react";
import './FilterBar.scss';
import { LuFilter } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineViewDay } from "react-icons/md";
import ProductItems from "../../home/product-items/ProductItems";
import { products_list } from "../../../helpers/constants";


export default function FilterBar(){
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });


    const [ itemsPerPage , setItemsPerPage ] = useState(16);
    const [ itemsShowing , setItemsShowing ] = useState(products_list.slice(0 , itemsPerPage))
    const [ isActive , setIsActive ] = useState({
        next:  false , page01 : true , page02 : false , page03 : false , prev: false 
    })

    useEffect(() =>{
        setItemsShowing(products_list.slice(0, itemsPerPage))
    }, [itemsPerPage])

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        
        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className='container'>
            <div className="filterBar-container">
                <div className="filter-view">
                    <LuFilter className="grid01" />
                    <span className="grid02">Filter</span>
                    <CgMenuGridO className="grid03"/>
                    <MdOutlineViewDay className="grid04"/>
                    { 
                        windowSize.width > 425 &&
                        <>
                            <span className="grid05">|</span> 
                            <span className="grid06">Showing 1–{itemsPerPage} of {products_list.length} results</span>
                        </>
                    }
                </div>

                <div className="sort-by">
                    <div className="range">
                        <label>Show</label>
                        <input
                            type="number"
                            className="grid02"
                            placeholder="16"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(e.target.value)}
                            min={8}
                            max={16}
                        />
                    </div>
                    <div className="text">
                        <label className="grid03">Short by</label>
                        <input type="text" className="grid04" placeholder="Default" />
                    </div>
                </div>
            </div>

            <ProductItems itemsShowing={itemsShowing} />

            <div className="pagination-container">
                <span 
                    className={`previous ${isActive.page01 && 'hide'} ${isActive.prev && 'active'} `} 
                    onClick={() => {
                        if(isActive.page02)
                            setIsActive({  next: false , page01 : true , page02 : false , page03 : false , prev: true })
                        else if(isActive.page03)
                            setIsActive({ next: false , page01 : false , page02 : true , page03 : false , prev: true })
                    }}
                >
                    Prev
                </span>
                <span 
                    className={`page01 ${isActive.page01 && 'active'}`}
                    onClick={() =>  setIsActive({  next: false , page01 : true , page02 : false , page03 : false , prev: false })}
                >
                    1
                </span>
                <span 
                    className={`page02 ${isActive.page02 && 'active'}`}
                    onClick={() =>  setIsActive({  next: false , page01 : false , page02 : true , page03 : false , prev: false })}
                >
                    2
                </span>
                <span
                    className={`page03 ${isActive.page03 && 'active'}`}
                    onClick={() =>  setIsActive({  next: false , page01 : false , page02 : false , page03 : true , prev: false })}
                >
                    3
                </span>
                <span 
                    className={`next ${isActive.next && 'active'}`}
                    onClick={() => {
                        if(isActive.page01)
                            setIsActive({  next: true , page01 : false , page02 : true , page03 : false , prev: false })
                        else if(isActive.page02)
                            setIsActive({  next: true , page01 : false , page02 : false , page03 : true , prev: false })
                        else if(isActive.page03)
                            setIsActive({ next: true , page01 : true , page02 : false , page03 : false , prev: false })
                    }}
                >
                    Next
                </span>
            </div>
        </div>
        
    )
} 