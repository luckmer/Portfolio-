import React from "react";
import {Grid , NavBarContext , Hr} from "../Styles/NavBar.Style";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <Grid>
            <NavBarContext>
                <ul>
                    <Link to={"/"}>
                        <li>Piotr Goik </li>
                    </Link>
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