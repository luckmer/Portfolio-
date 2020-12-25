import {useState} from "react"
import {setProjectView} from "../Reducers/DataControl";
import {useDispatch} from "react-redux";

const SmoothScrollUpDown = () =>{
    const [ scroll , setScroll ] = useState ( false );
    const dispatch = useDispatch();

    const handleScrollUp = () => {
        window.scrollTo ( { top : 0 , behavior : "smooth" } );
    }

    window.addEventListener ( "scroll" , () => {
        window.pageYOffset > 1000 ? setScroll ( true ) : setScroll ( false )
    } )


    window.addEventListener("scroll", () => {
        window.pageYOffset < 100 ?
            dispatch(setProjectView({scroll :false})) :
            dispatch(setProjectView({scroll :true}));
    });


    return{scroll,handleScrollUp}
}
export default  SmoothScrollUpDown