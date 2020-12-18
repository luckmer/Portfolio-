import React,{useState} from "react";
import {Grid , NavBarContext , Hr} from "../Styles/NavBar.Style";
import {Link} from "react-router-dom";

const NavBar = () =>{
    const [scroll, setScroll] = useState(false)
    let prevScroll = window.pageYOffset;

    window.addEventListener("scroll", () => {
        window.pageYOffset < 100 ? setScroll(true) : setScroll("");
    });
    console.log(scroll)


    return(
        <Grid  animate ={scroll} >
            <NavBarContext>
                <ul>
                    <Link to={"/"}>
                        <li>Piotr Goik </li>
                    </Link>
                </ul>
                <ul>
                    <li>
                        Contact
                    </li>
                    <Link to ="/projects">
                        <li>
                            Cases
                        </li>
                    </Link>
                </ul>
            </NavBarContext>
            <Hr>
                <hr/>
            </Hr>
        </Grid>
    )
}
export default  NavBar;