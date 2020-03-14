import React from "react";
import pr from  './Preloader.module.css'
import preloader from "../../../assets/img/loader.svg";

const Preloader = (props) => {
    return <div className={props.preloader}><img src={preloader} className={pr.inPreloader }/></div>
}
export default Preloader;