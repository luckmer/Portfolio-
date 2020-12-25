import {useEffect , useRef,useState} from "react";

const  ScrollHook = () => {
    const [state, setState] = useState({
        a: false, b: false, c: false, d :false,main:false
    });
    const
        e = useRef(null), f = useRef(null),
        g = useRef(null), h = useRef(null);

    useEffect(() => {
        const topPos = e => e.getBoundingClientRect().top;

        const
            i = Math.abs(topPos(e.current) - 400), j = Math.abs(topPos(f.current) - 400),
            k = Math.abs(topPos(g.current) - 400), l = Math.abs(topPos(h.current) - 400);

        const onScroll = () => {
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
    }, [setState]);


    return { e, f, g, h ,state};
}
export default ScrollHook;
