import React from "react";
import {useSelector} from "react-redux";
import{Section,Grid,Text} from "../Styles/Projects.Style";
import {Link} from "react-router-dom";

const Projects = ()=>{
    const dataS = useSelector(state => state.data.fetchApi);

    const Mapping = dataS.map(({name ,_id})=>(
        <Grid key ={_id} state ={name}>
            <Text id={_id}  >
                <Link to={`${_id}`}>
                    <h1>{name}</h1>
                    <h2  className={name}>{name}</h2>
                </Link>
            </Text>
        </Grid>
    ));

    return(
        <Section>
            { Mapping[12]}
            { Mapping[ 7 ] }
            { Mapping[ 5 ] }
            { Mapping[ 0 ] }
            { Mapping[ 2 ] }
        </Section>
    )
}

export default Projects;

