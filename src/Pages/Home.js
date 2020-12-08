import React from "react";
import {Grid, ContactPanel,HeaderStyle,Span} from "../Styles/Home.style";

const Home = () =>{
    return(
        <Grid>
            <HeaderStyle>
                <Span>Self tough</Span>
                <Span>programmer & </Span>
                <Span>Creative developer</Span>
            </HeaderStyle>
            <ContactPanel>
                <h1>LinkedIn</h1>
                <h1>Github</h1>
                <h1>Email</h1>
            </ContactPanel>
        </Grid>
    )
}

export default Home;

