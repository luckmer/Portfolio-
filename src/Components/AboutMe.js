import React,{useState} from "react";
import {Link} from "react-router-dom";
import {Grid,Text,Contact,Back,SocialContact,BackToTop,AboutText} from "../Styles/AboutMe.Style";

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
            <Back>
                <div>
                    <Link to={"/projects"}>
                        <h1>All Projects</h1>
                    </Link>
                </div>
            </Back>
            <SocialContact>
                <BackToTop className="dsa" style={{ display: scroll ? "block" : "none" }}>
                    <p>TOP</p>
                    <button onClick={handleScrollUp}/>
                </BackToTop>
            </SocialContact>
        </Grid>
    )
}

export default  AboutMe;
