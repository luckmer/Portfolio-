import {useEffect,useRef,useState} from "react"
import {MousePosition} from "./MousePosition";

const OnHoverScrollAnimation = (hover) =>{

    const { position } = MousePosition();
    const x = position.x;
    const y = position.y;

    const list = useRef();
    const [pos, setPos] = useState({
        top: null,  left: null,
    });

    useEffect(() => {
        const TopPos = (element) => element.getBoundingClientRect().top;
        const LeftPos = (element) => element.getBoundingClientRect().left;
        const Top = TopPos(list.current);
        const Left = LeftPos(list.current);

        setPos({
            top: Top,
            left: Left,
        });
    }, [hover]);

    return {pos,x,y,list}
}
export default  OnHoverScrollAnimation