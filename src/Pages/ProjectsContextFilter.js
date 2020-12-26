import React,{useState} from "react";
import {
    Grid,HeaderContext,Img,Panel,
    ScrollDown,Context,Div,Scroll,
    Header,Img2,ImgX,Slider,Address,
    Next,Prev,DisplayContext,Img3,Img4
} from "../Styles/ProjectsContextFilter.Style";
import {useSelector} from "react-redux";
import { ImageSlide } from "../Export";
import ScrollHook from "../hooks/ScrollAnimateHook";

const ProjectsContextFilter = (props) =>{
    const [count, setCount] = useState(0);
    const data  = useSelector(state => state.data.fetchApi.filter((i )=>i.name === props.match.params._id ));


    const Images = data.map(({images})=>images)
    const { handlePrev, MapData, handleNext } = ImageSlide(count, Images, setCount);
    const {e,f,g,h,state} =ScrollHook()
    const Map1 =  data.map((({images})=>images[2] ));
    const Map2 =  data.map((({images})=>images[2] ));
    const Map3 =  data.map((({images})=>images[2] ));

    return  (
        <Grid exit ="exit">
            <Panel animate ={state.main}>
                <HeaderContext>
                    <h3>Project</h3>
                    <h3>Name</h3>
                </HeaderContext>
                <ScrollDown>
                    <Scroll/>
                    <Div/>
                </ScrollDown>
            </Panel>
            <div >
                <Img   animate ={state.main} src={Images} alt={ Images}/>
            </div>
            <Context>
                <Header>
                    <span>Behind The Scenes</span>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cill</p>
                </Header>
                <Img2 ref ={e} animate ={state.a}>
                    <img src={Images} alt={Images}/>
                </Img2>
                <Header>
                    <span> -About </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cill</p>
                </Header>
                <ImgX>
                    <Img3 ref ={f} animate ={state.b} >
                        <img src={Images} alt={Images}/>
                    </Img3>
                    <Img4 ref ={g} animate ={state.c}>
                        <img src={Images} alt={Images}/>
                    </Img4>
                </ImgX>
                <Img2 ref ={h} animate ={state.d}>
                    <img src={Images} alt={Images}/>
                </Img2>
                <Slider>
                    <Prev onClick = {handlePrev}>
                        <button>Prev</button>
                    </Prev>
                    <DisplayContext>
                        <img src={MapData +1 } alt={MapData}/>
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

