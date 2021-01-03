import React ,{useState} from "react";
import{Grid,TextControl,ImageDiv,Hr,Div,Span} from "../Styles/Projects.Style";
import {ScrollHook} from "../hooks/ScrollAnimateHook";
import {useSelector} from "react-redux";
import {motion } from "framer-motion"
import {Link } from "react-router-dom"
import HoverTextView from "../hooks/HoverTextView";

const Projects = ()=>{

    const dataS = useSelector(state => state.data.fetchApi);
    const { e, f, g, h,state } = ScrollHook();
    const {x,y,pos,list} = HoverTextView()
    const [hover, setHover] = useState(false);


    const Mapping = dataS.map(({name ,_id,images,Start})=>(
        <Grid
            initial ="initial"
            animate ="animate"
            key ={_id} state ={name} exit ="exit" >
            <Link to={`${name}/${_id}`}>
                <Hr/>
                <article ref ={list}>
                    <header>{Start}</header>
                    <ImageDiv
                        onMouseEnter={()=> setHover(true)}
                        onMouseLeave={()=> setHover(false)}>
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
                        opacity : hover ? 1 : 0,
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
        <motion.section exit ="exit"  >
            <Div
                
                ref={e} animate={state.a} >
                { Mapping[12]}
            </Div>
            <Div
                ref={f} animate={state.b} >
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



