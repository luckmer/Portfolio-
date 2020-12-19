import React from "react";
import {Grid , NavBarContext , Hr} from "../Styles/NavBar.Style";
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {setNavView } from "../Reducers/DataControl";
const NavBar = () =>{
    const dispatch = useDispatch();
    const scroll = useSelector(state => state.data.NavBarScroll);

    window.addEventListener("scroll", () => {
        window.pageYOffset < 100 ?
            dispatch(setNavView({scroll :true})) :
            dispatch(setNavView({scroll :false}));
    });

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