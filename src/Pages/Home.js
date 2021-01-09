import React, { useEffect } from "react";
import {Grid, ContactPanel,HeaderStyle,Span,HideText} from "../Styles/Home.style";
import {disableScroll,enableScroll} from "../hooks/LockScrollAfterAnimation";
import {firstName,letter} from "../Animations/Home.animation";
import {useDispatch, useSelector} from "react-redux";
import {setScroll } from "../Reducers/DataControl"
import{Projects,AboutMe} from "../Export";
import { Panels } from "../Components/Panels";


const Home = () =>{
    const dispatch = useDispatch();
    const select = useSelector(state => state.data.ScrollOn);



    useEffect(() => {
        select === false ? disableScroll() : enableScroll()
    }, [select]);



    return (
        <>
            <Panels/>
            <Grid
                initial='initial'
                animate='animate'
                exit ="exit"
                onAnimationComplete={() => dispatch(setScroll({set: true}))}>
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
                    <ContactPanel >
                        <h1>Selected Work</h1>
                        <h6>2020</h6>
                    </ContactPanel>
                </HeaderStyle>
                <Projects/>
                <AboutMe/>
            </Grid>
        </>
    )
}
export default Home;

