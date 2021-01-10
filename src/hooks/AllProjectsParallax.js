import { useEffect, useState,createRef } from "react"
import { useSelector } from "react-redux";
import locomotiveScroll from "locomotive-scroll";

function AllProjectsParallax(){
    const scroll = useSelector(state => state.data);
    const [height, setheight] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const scrollRef = createRef();
    const style = createRef();

    useEffect(() =>{
        const Scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            direction: "horizontal",
            lerp: 0.06
        });
        Scroll.on("scroll", (window) =>
        {
            skewScrolling(window);
        });
    }, [scrollRef]);



    useEffect(() =>{
        function Resize()
        {
            setheight({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", Resize);
        return () => window.removeEventListener("resize", Resize);
    }, []);

    const data = {
        ease: 0.1,
        current: 0,
        last: 0,
        rounded: 0,
        test: 0
    };

    const skewScrolling = (Window) =>
    {
        data.current = Window.scroll.x;
        data.last += (data.current - data.last) * data.ease;
        data.rounded = Math.round(data.last * 100) / 100;
        const diff = data.current - data.rounded;
        const acc = diff / height.height;
        const velo = +acc;
        const skew = velo * 25.5;
        const allImgs = [...document.querySelectorAll('img')];
        allImgs.forEach(el => el.style.transform = ` skewX(${ -skew }deg) `);
    };
    return { scrollRef, style, scroll };
}

export default AllProjectsParallax