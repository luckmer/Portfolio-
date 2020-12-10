import React from "react";
import {Grid, ContactPanel,HeaderStyle,Span} from "../Styles/Home.style";

import{Projects,AboutMe} from "../Export";
const Home = () =>{
    return(
        <Grid>
            <HeaderStyle>
                <Span>Simple Guy + </Span>
                <Span>Creative developer</Span>
            </HeaderStyle>
            <ContactPanel>
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

