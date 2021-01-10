import {MousePosition} from "../hooks/MousePosition";
import classNames from "classnames";

const Cursor = () =>{
    const {position,Hover,click} = MousePosition();
    console.log(Hover)
    
    console.log(position)
    const cursor = classNames('cursor', {
        'clicked': click,
        'TEXT': Hover
    });

    return <div className={cursor} style={ {
        left: position.x,
        top:position.y}}
    >
    </div>
}
export default  Cursor