import React,{useState} from "react";
import {
    Grid,HeaderContext,Img,Panel,
    ScrollDown,Context,Div,Scroll,
    Header,Img2,ImgX,Slider,Address,
    Next,Prev,DisplayContext
} from "../Styles/ProjectsContextFilter.Style";
import {useSelector} from "react-redux";
import { ImageSlide } from "../Export";

const ProjectsContextFilter = (props) =>{
    const [count, setCount] = useState(0);
    const data  = useSelector(state => state.data.fetchApi.find((i)=> i._id == props.match.params._id));
    const Images = data.images

    const { handlePrev, MapData, handleNext } = ImageSlide(count, Images, setCount);


    return  (
        <Grid exit ="exit">
            <Panel>
                <HeaderContext>
                    <h3>Project</h3>
                    <h3>Name</h3>
                </HeaderContext>
                <ScrollDown>
                    <Scroll/>
                    <Div/>
                </ScrollDown>
            </Panel>
            <Img src={Images[2]} alt="Girl in a jacket" >
            </Img>
            <Context>
                <Header>
                    <span>Behind The Scenes</span>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cill</p>
                </Header>
                <Img2>
                    <img src={Images[1]} alt={Images[1]}/>
                </Img2>
                <Header>
                    <span>Behind The Scenes</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cill</p>
                </Header>
                <ImgX>
                    <div>
                        <img src={Images[4]} alt={Images[2]}/>
                    </div>
                    <div>
                        <img src={Images[3]} alt={Images[3]}/>
                    </div>
                </ImgX>
                <Img2>
                    <img src={Images[4]} alt={Images[4]}/>
                </Img2>
                <Slider>
                    <Prev onClick = {handlePrev}>
                        <button>Prev</button>
                    </Prev>
                    <DisplayContext>
                        <img src={MapData} alt={MapData}/>
                    </DisplayContext>
                    <Next onClick = {handleNext}>
                        <button>Next</button>
                    </Next>
                </Slider>
            </Context>
            <Address>
                <div>
                    <p>Github</p>
                    <p>LinkedIn</p>
                    <p>Gmail</p>
                </div>
                <div><button/></div>
            </Address>
        </Grid>
    )
}

export default  ProjectsContextFilter;

