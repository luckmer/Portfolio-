import {useEffect,useState} from "react";


export const MousePosition = () =>{
    const [position , setPosition ] = useState({x:0 , y :0});
    const [click , setClick ] = useState(false);
    useEffect(()=>{
        const data = e => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove",data);
        document.addEventListener("mousedown",()=> setClick(true))
        return () =>{
            window.removeEventListener("mousemove", data);
            document.addEventListener("mouseup",()=> setClick(false))        }
    })
    return {position, click}
}