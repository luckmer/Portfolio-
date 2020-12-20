import React,{useState} from "react"

const SmoothScrollUpDown = () =>{
    const [ scroll , setScroll ] = useState ( false );

    const handleScrollUp = () => {
        window.scrollTo ( { top : 0 , behavior : "smooth" } );
    }

    window.addEventListener ( "scroll" , () => {
        window.pageYOffset > 1000 ? setScroll ( true ) : setScroll ( false )
    } )

    return{scroll,handleScrollUp}
}
export default  SmoothScrollUpDown