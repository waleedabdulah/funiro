import React , {useState , useEffect} from 'react';
import './FilterBar.scss';
import { LuFilter } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineViewDay } from "react-icons/md";
import { useWindowSize } from '../../context/ui-adjustment-context/UIAdjustmentContext';

export default function FilterBar({
    isActive,
    pageNumber,
    itemsShowing,
    setItemsShowing,
    setPageNumber,
    products_list
}){
    const [showFilterDropdown , setShowFilterDropdown ] = useState(false);
    const [ filters , setFilters ] = useState({ isNewProduct : false , isDiscountedItems : false})
    const [ itemsPerPage , setItemsPerPage ] = useState(16);
                
    const windowSize = useWindowSize();

    useEffect(() =>{
        setItemsShowing([]);
        calculatingPages()
    }, [itemsPerPage, filters ])

    function calculatingPages(){
        let nestedItems = []; 
        let c = products_list.filter((item) => {
            if(filters.isDiscountedItems && filters.isNewProduct && item.discountPercentage > 0 && item.isNewProduct){
                return item
            }else if(filters.isDiscountedItems && !filters.isNewProduct && item.discountPercentage > 0 ){
                return item
            }else if(!filters.isDiscountedItems && filters.isNewProduct && item.isNewProduct ){
                return item
            } 
        })

        if(c.length === 0 && (!filters.isDiscountedItems && !filters.isNewProduct))
            c =  products_list
        
        let b = c ;
        c = Math.floor(c.length /itemsPerPage)
        for (let i = 1; i <= c; i++) {
            const start = (i - 1) * itemsPerPage;
            const end = i * itemsPerPage;
            nestedItems.push(b.slice(start, end));
        }
        nestedItems.push(b.slice(c*itemsPerPage))
    
        setItemsShowing(nestedItems); 
    }
    
    
    return(
        <div className="filterBar-container">
            <div className="filter-view">
                <>
                    <LuFilter 
                        onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                        className="grid01"
                    />
                    {
                        showFilterDropdown &&
                        <div
                            style={{
                                position: "absolute",
                                left: windowSize.width > 500 ? "100px" : '20px',
                                backgroundColor: "#fff",
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                width: '150px',
                                marginTop: '20px',
                                padding: '10px' ,
                                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                zIndex: 100,
                            }}
                        >
                            <div
                                onClick={() => setFilters({ ...filters , isDiscountedItems : !filters.isDiscountedItems})}
                                style={{
                                cursor: "pointer",
                                backgroundColor: filters.isDiscountedItems ? "black" : "white",
                                color: filters.isDiscountedItems ? "white" : "black",
                                }}
                            >
                                Discounted Items
                            </div>
                            <div
                                onClick={() => setFilters({ ...filters , isNewProduct : !filters.isNewProduct})}
                                style={{
                                cursor: "pointer",
                                backgroundColor: filters.isNewProduct ? "black" : "white",
                                color: filters.isNewProduct ? "white" : "black",
                                }}
                            >
                                New Items
                            </div>
                        </div>
                    }
                </>
                <span className="grid02">Filter</span>
                <CgMenuGridO className="grid03"/>
                <MdOutlineViewDay className="grid04"/>
                { 
                    windowSize.width > 425 &&
                    <>
                        <span className="grid05">|</span> 
                        <span className="grid06">Showing {' '}
                            {   
                                isActive.currentPage === 1 ? 
                                ((pageNumber.page01-1)*itemsPerPage)+1:
                                    isActive.currentPage === 2 ?
                                        ((pageNumber.page02-1)*itemsPerPage)+1 :
                                        ((pageNumber.page03-1)*itemsPerPage)+1
                            }
                            {' – '}
                            { 
                                isActive.currentPage === 1 ? 
                                ((pageNumber.page01)*itemsPerPage):
                                    isActive.currentPage === 2 ?
                                        ((pageNumber.page02)*itemsPerPage) :
                                        ((pageNumber.page02)*itemsPerPage)+itemsShowing[pageNumber.page03-1]?.length 
                                
                            } of {products_list?.length} results
                        </span>
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
                        onChange={(e) => {
                            let value = Number(e.target.value);
                            if( e?.target?.value && value >= 8 && value <= 16 && value !== itemsPerPage){
                                if (value <= 8){ 
                                    setItemsPerPage(8);
                                    setPageNumber({
                                        page01 : 1 ,
                                        page02 : 2 ,
                                        page03 : 3
                                    })
                                }else if (value >= 16){ 
                                    setItemsPerPage(16);
                                    setPageNumber({
                                        page01 : 1 ,
                                        page02 : 2 ,
                                        page03 : 3
                                    })
                                }
                                else setItemsPerPage(Number(e.target.value));
                            }
                        }}                          
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
    )
}