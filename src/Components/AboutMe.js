import React,{useState} from "react";
import {Link} from "react-router-dom";
import {Grid,Text,Contact,SocialContact,BackToTop,AboutText} from "../Styles/AboutMe.Style";

const AboutMe = ()=>{

    const [ scroll , setScroll ] = useState ( false );
    const handleScrollUp = () => {
        window.scrollTo ( { top : 0 , behavior : "smooth" } );
    }
    window.addEventListener ( "scroll" , () => {
        window.pageYOffset > 1000 ? setScroll ( true ) : setScroll ( false )
    } )

    return(
        <Grid>
            <Text>
                <h1>About</h1>
            </Text>
            <AboutText>
                <h1>
                    I'm Piotr born in Poland, I try to learn and discover new things every day,but work is not the only
                    thing that fills my day I love to delve deeper into space issues.
                </h1>
            </AboutText>
            <Contact>
                <h1>Contact</h1>
                <span>Github</span>
                <span>LinkedIn</span>
                <span>Email</span>
            </Contact>
            <SocialContact>
                <hr/>
                <BackToTop className="dsa" style={{ display: scroll ? "block" : "none" }}>
                    <button onClick={handleScrollUp}>Back to Top</button>
                </BackToTop>
            </SocialContact>
        </Grid>
    )
}

export default  AboutMe;
