import React from "react";
import {useSelector} from "react-redux";
import{Grid,TextControl,ImageDiv,Hr} from "../Styles/Projects.Style";

const Projects = ()=>{
    const dataS = useSelector(state => state.data.fetchApi);
    const Mapping = dataS.map(({name ,_id,images,Start})=>(
        <Grid key ={_id} state ={name} exit ="exit">
            <Hr/>
            <article>
                <header>{Start}</header>
                <ImageDiv>
                    <img src={images[1]} />
                </ImageDiv>
                <TextControl>
                    <span>
                        &#x21b3;
                    </span>
                    <h1>{name}</h1>
                </TextControl>
            </article>
        </Grid>
    ));

    return(
        <section>
            { Mapping[12]}
            { Mapping[ 5 ] }
            { Mapping[ 0 ] }
            { Mapping[ 2 ] }
            <Hr/>
        </section>
    )
}

export default Projects;

