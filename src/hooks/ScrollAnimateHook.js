import {useEffect , useRef,useState} from "react";

export const  ScrollHook = () => {
    const [state, setState] = useState({
        a: false, b: false, c: false, d :false,main:false
    });


    const [ScrollValue ,setScrollValue ]  = useState(document.body.getBoundingClientRect().top)
    const
        e = useRef(null), f = useRef(null),
        g = useRef(null), h = useRef(null);

    useEffect(() => {
        const topPos = e => e.getBoundingClientRect().top;

        const
            i = Math.abs(topPos(e.current) - 300), j = Math.abs(topPos(f.current) ),
            k = Math.abs(topPos(g.current)), l = Math.abs(topPos(h.current) );

        const onScroll = () => {
            setScrollValue(document.body.getBoundingClientRect().top)
            const a = Math.abs(document.body.getBoundingClientRect().top);
            if (i < a)
                setState(state => ({ ...state, a: true }));
            if (j < a)
                setState(state => ({ ...state, b: true }));
            if (k < a)
                setState(state => ({ ...state, c: true }));
            if (l < a)
                setState(state => ({ ...state, d: true }));
            a >= 300 ?
                setState(state => ({ ...state, main: true })) :
                setState(state => ({ ...state, main: false }));
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [setState,setScrollValue]);


    return { e, f, g, h ,state,ScrollValue};
}


export const ProjectsContextFilterHook = () =>{
    const [state, setState] = useState({
        one: false, two: false, three: false
    });

    const firstImg = useRef();
    const secondImg = useRef();
    const thirdImg = useRef();

    useEffect(() =>{
        const topPos = e => e.getBoundingClientRect().top;
        
        const FirstState = topPos(firstImg.current) - 500;
        const secondState = topPos(secondImg.current) - 300;
        
        const ThirdState = topPos(thirdImg.current)  ;
        
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
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [setState])
    
    return {firstImg,secondImg,thirdImg,state}
}