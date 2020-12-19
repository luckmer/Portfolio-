import React ,{useState} from "react";
import {useSelector} from "react-redux";
import{Grid,TextControl,ImageDiv,Hr,Div} from "../Styles/Projects.Style";
import ScrollHook from "../hooks/ScrollAnimateHook";


const Projects = ()=>{
    const dataS = useSelector(state => state.data.fetchApi);

    const [state, setState] = useState({
        a: false, b: false, c: false, d :false,
    });

    const { e, f, g, h } = ScrollHook(setState);

    const Mapping = dataS.map(({name ,_id,images,Start})=>(
        <Grid key ={_id} state ={name} exit ="exit" >
            <Hr/>
            <article>
                <header>{Start}</header>
                <ImageDiv>
                    <img src={images[1]} alt ={images[1]} />
                </ImageDiv>
                <TextControl>
                    <span>
                        &#x21b3;
                    </span>
                    <div>
                        <h1>{name}</h1>
                    </div>
                </TextControl>
            </article>
        </Grid>
    ));

    return(
        <section >
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
        </section>
    )
}

export default Projects;


