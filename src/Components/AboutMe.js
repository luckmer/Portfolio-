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
                    <li onClick={handleScrollUp}>
                        <a data-text="Back">Back to Top</a>
                    </li>
                </ul>
                <ul>
                    <li >
                        <a href="https://piotrsebastiangoik@gmail.com" data-text="MAIL">
                            MAIL
                        </a>
                    </li>
                    <li >
                        <a href ="https://www.linkedin.com/in/piotr-goik-9403a01b7/"
                           data-text="LINKEDIN">
                            LINKEDIN
                        </a>
                    </li>
                    <li >
                        <a href="https://github.com/luckmer"
                           data-text="GITHUB">
                            GITHUB
                        </a>
                    </li>
                </ul>
            </SocialContact>
        </Grid>
    )
}

export default  AboutMe;
