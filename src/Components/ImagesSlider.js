import React , {useState} from "react";
import {ImageSlide} from "../Export";
import {DisplayContext , Next , Prev , Slider} from "../Styles/ProjectsContextFilter.Style";
import styled from "styled-components";

const ScrollDiv = styled.div `
    z-index: 10;
    position: fixed;
    width: 100vw;
    color: black;
    height: 100vh;
`

const Background = styled.div `
    background-color: black;
    opacity: 90%;
    position: absolute;
    width: 100%;
    height: 100%;
`

const  ImagesSlider = (Images) =>  {
    const [count, setCount] = useState(0);
    const { handlePrev, MapData, handleNext } = ImageSlide(count, Images, setCount);

    return  (
        <ScrollDiv>
            <Background />
            <Slider>
                <Prev onClick={handlePrev}>
                    <div />
                </Prev>
                <DisplayContext>
                    <img src={MapData + 1} alt={MapData} />
                </DisplayContext>
                <Next onClick={handleNext}>
                    <div />
                </Next>
            </Slider>
        </ScrollDiv>
    );
}

export default ImagesSlider