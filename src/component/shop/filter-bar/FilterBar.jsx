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
        setItemsShowing([]);
        calculatingPages()
    }, [itemsPerPage])

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function calculatingPages(){
        let  b = Math.floor(products_list.length / itemsPerPage) , nestedItems = []; 

        for (let i = 1; i <= b; i++) {
            const start = (i - 1) * itemsPerPage;
            const end = i * itemsPerPage;
            nestedItems.push(products_list.slice(start, end));
        }
        nestedItems.push(products_list.slice(b*itemsPerPage , products_list.length ))
    
        setItemsShowing(nestedItems); 
    }
   
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
                            <span className="grid06">Showing {' '}
                                {
                                    (isActive.currentPage === 1 && pageNumber.page01 === 1) ?
                                        1 :
                                            (isActive.currentPage === 1) ?
                                                (pageNumber.page01-1)*itemsPerPage :
                                                (isActive.currentPage === 2) ?
                                                    (pageNumber.page02-1)*itemsPerPage :
                                                    (pageNumber.page03-1)*itemsPerPage
                                }
                                {' – '}
                                { 
                                    (isActive.currentPage === 1 && pageNumber.page01 === 1) ?
                                        itemsPerPage :
                                            (isActive.currentPage === 1) ?
                                                (pageNumber.page01)*itemsPerPage :
                                                (isActive.currentPage === 2) ?
                                                    (pageNumber.page02)*itemsPerPage :
                                                    (isActive.currentPage === 3 ) && (pageNumber.page03 === itemsShowing.length) ?
                                                        products_list.length :    
                                                        pageNumber.page03*itemsPerPage   
                                } of {products_list.length} results</span>
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
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
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

            <ProductItems itemsShowing={itemsShowing?.[(isActive.currentPage === 1 ? pageNumber.page01 : (isActive.currentPage === 2?  pageNumber.page02 : pageNumber.page03))-1]} />

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
                    className={`page01 ${isActive.currentPage === 1 && 'active'}`}
                    onClick={() =>  setIsActive({  next: false , currentPage: 1 , prev: false })}
                >
                    {pageNumber.page01}
                </span>
                <span 
                    className={`page02 ${isActive.currentPage === 2 && 'active'}`}
                    onClick={() =>  setIsActive({  next: false , currentPage: 2 , prev: false })}
                >
                    {pageNumber.page02}
                </span>
                <span
                    className={`page03 ${isActive.currentPage === 3 && 'active'}`}
                    onClick={() =>  setIsActive({  next: false , currentPage: 3 , prev: false })}
                >
                    {pageNumber.page03}
                </span>
                <span 
                    className={`next ${isActive.next && 'active'} ${itemsShowing.length === pageNumber.page03 && isActive.currentPage === 3 && 'inactive'}`}
                    onClick={() => {

                        if(isActive.currentPage === 1)
                            setIsActive({  next: true , currentPage: 2 , prev: false })
                        else if(isActive.currentPage === 2)
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

            <div className="slider-container">
                
            </div>
        </div>
        
    )
} 