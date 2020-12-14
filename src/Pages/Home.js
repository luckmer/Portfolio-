import React from "react";
import {Grid, ContactPanel,HeaderStyle,Span} from "../Styles/Home.style";
import ScrollHook from "../hooks/ScrollHook";
import{Projects,AboutMe} from "../Export";

const Home = () =>{
    const {lastScrollTop,bodyOffset} = ScrollHook();

    const handleScrollDown = () =>{
        window.scroll({top:1500,behavior:"smooth"});
    }
    return(
        <Grid style ={{transform:`translate3d(0, -${ bodyOffset /9}px,0)` }}>

            <HeaderStyle style ={{transform:`translate3d(0, -${ bodyOffset /19 }px,0) skewY(${ lastScrollTop }deg)`}}>
                <Span
                >Simple Guy + </Span>
                <Span
                >Creative developer</Span>
                <Span onClick ={handleScrollDown}> -></Span>
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

