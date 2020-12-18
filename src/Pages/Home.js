import React from "react";
import {Grid, ContactPanel,HeaderStyle,Span} from "../Styles/Home.style";
import{Projects,AboutMe} from "../Export";

const Home = () =>{

    const handleScrollDown = () =>{
        window.scroll({top:1500,behavior:"smooth"});
    }
    return(
        <Grid  >
            <HeaderStyle >
                <Span  >\Simple/Guy/</Span>
                <Span>&\Creative</Span>
                <Span>developer/</Span>
                <Span onClick ={handleScrollDown}> &#x2193;</Span>
            </HeaderStyle>
            <ContactPanel >
                <h1>LinkedIn</h1>
                <h1>Github</h1>
                <h1>Email</h1>
            </ContactPanel>
            <Projects/>
            <AboutMe/>
        </Grid>
    )
}

export default Home;

