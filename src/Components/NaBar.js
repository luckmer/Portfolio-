import {Grid , NavBarContext , Hr} from "../Styles/NavBar.Style";
import {useSelector , useDispatch} from "react-redux";
import {setNavView } from "../Reducers/DataControl";
import {Link} from "react-router-dom";

const NavBar = () =>{
    const scroll = useSelector(state => state.data.NavBarScroll);
    const dispatch = useDispatch();

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
                    <Link to ="/Contact">
                        <li>
                            Contact
                        </li>
                    </Link>
                    <Link to ="/projects">
                        <li>
                            Cases
                        </li>
                    </Link>
                </ul>
            </NavBarContext>
        </Grid>
    )
}
export default  NavBar;