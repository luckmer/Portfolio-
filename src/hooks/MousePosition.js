import {useEffect,useState} from "react";


export const MousePosition = () =>{
    const [position, setPosition] = useState({x: 0, y: 0});
    const [click, setClick] = useState(false);

    useEffect(() => {
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



    return {position, click}
}