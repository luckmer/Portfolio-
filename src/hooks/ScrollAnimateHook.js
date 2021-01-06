import {useEffect , useRef,useState} from "react";


export const ProjectsContextFilterHook = () =>{
    const [state, setState] = useState({
        one: false, two: false, three: false,four:false
    });

    const firstImg = useRef();
    const secondImg = useRef();
    const thirdImg = useRef();
    const FourImg = useRef();
    useEffect(() =>{
        const topPos = e => e.getBoundingClientRect().top;
        
        const FirstState = topPos(firstImg.current) - 500;
        const secondState = topPos(secondImg.current) - 300;
        const ThirdState = topPos(thirdImg.current)  ;
        const FourState = topPos(FourImg.current)  ;
    
        
        const onScroll = () =>{
            const scroll = Math.abs(document.body.getBoundingClientRect().top);

            if (FirstState <= scroll) {
                setState(state => ({...state, one:true}))
            }
            if (secondState <= scroll) {
                setState(state => ({...state, two:true}))
            }
            if (ThirdState <= scroll) {
                setState(state => ({...state, three:true}))
            }
            if (FourState <= scroll) {
                setState(state => ({...state, three:true}))
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [setState])
    
    return {firstImg,secondImg,thirdImg,FourImg,state}
}

export const TrueFalseScrollHook = () =>{
    const [ScrollAnimate,setScrollAnimate] =useState({
        one:false,two:false,three:false,four:false
    })
useEffect(()=>{
    const Scroll = () =>{
        const data = () => document.body.getBoundingClientRect().top
        const control = data();
        control >= -1000 ?
            setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, one: false })) :
            setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, one: true }));
        control >= -1750 ?
            setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, two: false })) :
            setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, two: true }));
        control >= -2500 ?
            setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, three: false })) :
            setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, three: true }));
        control >= -3100 ?
            setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, four: false })) :
            setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, four: true }));
    }
    document.addEventListener("scroll",Scroll)
    return ()=>document.removeEventListener("scroll",Scroll)
}, [])
    
    return {ScrollAnimate}
}