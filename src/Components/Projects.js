import React ,{useEffect,useRef,useState} from "react";
import{Grid,TextControl,ImageDiv,Hr,Div,Span} from "../Styles/Projects.Style";
import ScrollHook from "../hooks/ScrollAnimateHook";
import {useSelector} from "react-redux";
import {motion } from "framer-motion"
import {Link } from "react-router-dom"

const Projects = ()=>{
    const dataS = useSelector(state => state.data.fetchApi);
    const [state, setState] = useState({
        a: false, b: false, c: false, d :false,
    });
    const { e, f, g, h } = ScrollHook(setState);

    //mouse hover code
    let list = useRef()
    const [hover, setHover] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        return () =>{
            document.removeEventListener("mousemove", onMouseMove);
        }
    }, []);

    const x  = position.x
    const y  = position.y
    const [pos ,setPos ] = useState({
        top:0,left:0
    })
    useEffect(()=>{
        const TopPos = (element) => element.getBoundingClientRect().top;
        const LeftPos = (element) => element.getBoundingClientRect().left;
        const Top = TopPos(list.current);
        const Left = LeftPos(list.current);

        setPos({
            top: Top,
            left: Left,
        });
    },[])
    const onMouseMove = (e) => {
        setPosition({x: e.pageX, y: e.pageY});
    };


    const Mapping = dataS.map(({name ,_id,images,Start})=>(
        <Grid
            initial ="initial"
            animate ="animate"
            key ={_id} state ={name} exit ="exit" >
            <Link to ={`${_id}`}>
                <Hr/>
                <article
                    ref ={list}
                >
                    <header>{Start}</header>
                    <ImageDiv
                        onMouseEnter={()=> setHover(true)}
                        onMouseLeave={()=> setHover(false)}
                    >
                        <img
                            src={images[1]} alt ={images[1]} />
                    </ImageDiv>
                    <TextControl>
                        <span>
                            &#x21b3;
                        </span>
                        <div>
                            <h1 >{name}</h1>
                        </div>
                    </TextControl>
                </article>
                <Span
                    initial={{opacity:0}}
                    animate ={{
                        display:hover ? "block" : "none",
                        x: x - pos.left ,
                        y : y - pos.top
                    }}
                >
                    <p>Explore</p>
                </Span>
            </Link>
        </Grid>
    ));

    return(
        <motion.section exit ="exit" >
            <Div ref={e} animate={state.a} >
                { Mapping[12]}
            </Div>
            <Div  ref={f } animate={state.b} >
                { Mapping[ 5 ] }
            </Div>
            <Div ref={g} animate={state.c}>
                { Mapping[ 0 ] }
            </Div>
            <Div  ref={h} animate={state.d}>
                { Mapping[ 2 ] }
            </Div>
        </motion.section>
    )
}

export default Projects;



