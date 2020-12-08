import React from "react";
import {Grid , NavBarContext , Hr} from "../Styles/NavBar.Style";


const NavBar = () =>{
    return(
        <Grid>
            <NavBarContext>
                <ul>
                    <li>Piotr Goik </li>
                </ul>
                <ul>
                    <li>Portfolio</li>
                </ul>
                <ul>
                    <li>
                        Contact
                    </li>
                </ul>
            </NavBarContext>
            <Hr>
                <hr/>
            </Hr>
        </Grid>
    )
}
export default  NavBar;