import {useRef,useEffect,useState} from "react"
import MouseScrollHook from "./MouseScrollHook";


const HoverTextView = () =>{

    const {position } = MouseScrollHook()
    let list = useRef()
    const x  = position.x
    const y  = position.y

    const [pos, setPos] = useState({ top: 0, left: 0 })
    
useEffect(()=>{
    const TopPos = (element) => element.getBoundingClientRect().top;
    const LeftPos = (element) => element.getBoundingClientRect().left;
    const Top = TopPos(list.current);
    const Left = LeftPos(list.current);
    setPos({
        left: Left,
        top :Top
    });
},[])


return {x,y,pos,list}
}
export default  HoverTextView