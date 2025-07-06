import React from "react";
import './Loader.scss';
import FuniroLogo from "./FuniroLogo";

export default function Loader(){

    return (
        <div className="logo_container">
            <div className="logo_animator">
                <FuniroLogo height={300} width={300} />
            </div>
        </div>

    )
}