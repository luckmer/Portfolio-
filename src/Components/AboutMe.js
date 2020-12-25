import React from "react";
import {Grid,SocialContact} from "../Styles/AboutMe.Style";

const AboutMe = ()=>{

    const handleScrollUp = () => {
        window.scrollTo ( { top : 0 , behavior : "smooth" } );
    }

    return(
        <Grid>
            <hr/>
            <SocialContact>
                <ul>
                    <li>
                        <button onClick={handleScrollUp}>Back to Top</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://piotrsebastiangoik@gmail.com" >
                            MAIL
                        </a>
                    </li>
                    <li>
                        <a href ="https://www.linkedin.com/in/piotr-goik-9403a01b7/">
                            LINKEDIN
                        </a>
                    </li>
                    <li >
                        <a href="https://github.com/luckmer" >
                            GITHUB
                        </a>
                    </li>
                </ul>
            </SocialContact>
        </Grid>
    )
}

export default  AboutMe;
