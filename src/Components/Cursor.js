import {MousePosition} from "../hooks/MousePosition";
import classNames from "classnames";
import React from "react";

const Cursor = () =>{
    const position = MousePosition();

    const cursor = classNames('cursor',{
        'clicked': position.click
    });

    return <div className={cursor} style={ {
        left: position.position.x,
        top:position.position.y}} >
    </div>
}
export default  Cursor