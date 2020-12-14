import {useEffect,useState} from "react"
import useWindowSize from "../hooks/WindowSize"

export default function ScrollHook() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(0);
    const size = useWindowSize();

    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
    };

    useEffect(() =>{
        requestAnimationFrame(() => skewScrolling());
    }, []);

    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

    const skewScrolling = () =>{
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = data.previous * 100 / 100;
        const roundedData = data.rounded
        const difference = data.current - data.rounded;
        const acceleration = difference / size.width;
        const velocity = +acceleration;
        const VelocityData  = velocity * 9.5;
        setLastScrollTop(VelocityData)
        setBodyOffset(roundedData)
        requestAnimationFrame(() => skewScrolling());
    };
    return {lastScrollTop,bodyOffset}
}