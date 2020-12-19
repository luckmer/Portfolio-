import React,{useEffect} from "react";
import {Grid, ContactPanel,HeaderStyle,Span,HideText} from "../Styles/Home.style";
import { useTransform, useViewportScroll } from "framer-motion"
import {firstName,letter} from "../Animations/Home.animation";
import {setScroll } from "../Reducers/DataControl"
import {useDispatch, useSelector} from "react-redux";
import{Projects,AboutMe} from "../Export";
const Home = () =>{

    const dispatch = useDispatch();
    const select = useSelector(state => state.data.ScrollOn);
    const { scrollYProgress } = useViewportScroll();

    const handleScrollDown = () =>{
        window.scroll({top:1500});
    }

    const  disableScroll = () =>  {
        document.body.style.overflow = 'hidden';
        window.onbeforeunload = function () {
            window.scrollTo ( 0 , 0 );
        }
    }

    const  enableScroll = () =>  {
        document.body.style.overflow = null;
    }

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
    useEffect(() => {
        select === false ? disableScroll() : enableScroll()
    }, [select]);


    return(
        <>
            <Grid
                initial='initial'
                animate='animate'
                onAnimationComplete={() => dispatch(setScroll({set: true}))}>
                <HeaderStyle variants={firstName}  style ={{opacity:scale}}  >
                    <HideText  >
                        <Span variants={letter}  >\Simple/Guy/</Span>
                    </HideText>
                    <HideText >
                        <Span variants={letter}>&\Creative</Span>
                    </HideText>
                    <HideText  >
                        <Span variants={letter}  >developer/</Span>
                    </HideText>
                    <Span onClick ={handleScrollDown } variants={letter}> &#x2193;</Span>
                </HeaderStyle>
                <ContactPanel >
                    <h1>LinkedIn</h1>
                    <h1>Github</h1>
                    <h1>Email</h1>
                </ContactPanel>
                <Projects/>
                <AboutMe/>
            </Grid>
        </>

    )
}

export default Home;

