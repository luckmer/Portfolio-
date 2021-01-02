import React, { useEffect } from "react";
import { Grid, ContactPanel, HeaderStyle, Span, HideText, LeftPanel, RightPanel } from "../Styles/Home.style";
import { disableScroll, enableScroll, handleScrollDown } from "../hooks/LockScrollAfterAnimation";
import { firstName, letter, transition } from "../Animations/Home.animation";
import { useDispatch, useSelector } from "react-redux";
import { setScroll } from "../Reducers/DataControl"
import { Projects, AboutMe } from "../Export";




const Home = () =>
{
    const dispatch = useDispatch();
    const select = useSelector(state => state.data.ScrollOn);



    useEffect(() =>{
        select === false ? disableScroll() : enableScroll();
    }, [select]);


    return (
        <>
            <Panels />
            <Grid
                initial='initial'
                animate='animate'
                exit="exit"
                onAnimationComplete={() => dispatch(setScroll({ set: true }))}>
                <HeaderStyle variants={firstName} >
                    <HideText  >
                        <Span variants={letter}> Simple Guy </Span>
                    </HideText>
                    <HideText >
                        <Span variants={letter}> & Creative </Span>
                    </HideText>
                    <HideText  >
                        <Span variants={letter}> developer </Span>
                    </HideText>
                    <Span onClick={handleScrollDown} variants={letter}>
                        <small>&#x2193;</small>
                    </Span>
                    <ContactPanel >
                        <h1>Selected Work</h1>
                        <h6>2020</h6>
                    </ContactPanel>
                </HeaderStyle>
                <Projects />
                <AboutMe />
            </Grid>
        </>
    )
}
const Panels = () =>{
    return (
        <>
            <LeftPanel
                transition={{ ...transition, duration: 2, times: [0, .5, 1] }}
                initial={{ height: 0 }}
                animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
                exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
            />
            <RightPanel
                transition={{ ...transition, duration: 2, times: [0, .5, 1] }}
                initial={{ height: 0 }}
                animate={{ height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight] }}
                exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
            />
        </>
    )
}
export default Home;


