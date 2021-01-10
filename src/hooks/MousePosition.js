import {useEffect,useState} from "react";


export const MousePosition = () =>{
    const [position, setPosition] = useState({x: 0, y: 0});
    const [click, setClick] = useState(false);
    const [Hover, setHover] = useState(false);
    useEffect(() =>{
        
            document.querySelectorAll("a,span,h1,h2,h3,h4,h5,h6,p,ul,li").forEach(el => {
            el.addEventListener("mouseover", () => setHover(true));
            el.addEventListener("mouseout", () => setHover(false));
            });
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", ()=>setClick(true));
        document.addEventListener("mouseup",()=> setClick(false));
        return () =>{
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mousedown", ()=> setClick(true));
            document.removeEventListener("mouseup",()=> setClick(false));
        }
    }, []);


    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    };



    return {position, click,Hover}
}