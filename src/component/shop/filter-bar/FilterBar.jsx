import React , {useState , useEffect }from "react";
import './FilterBar.scss';
import { LuFilter } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineViewDay } from "react-icons/md";

export default function FilterBar(){
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

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
                        <span className="grid06">Showing 1–16 of 32 results</span>
                    </>
                }
            </div>

            <div className="sort-by">
                <div className="range">
                    <label >Show</label>
                    <input type="number" className="grid02" placeholder="16"/>
                </div>
                <div className="text">
                    <label className="grid03">Short by</label>
                    <input type="text" className="grid04" placeholder="Default" />
                </div>
            </div>
        </div>
    )
} 