import React,{useState} from "react";
import {Grid,Panel, HeaderContext,ScrollDown,Scroll,Div,Img,
    Context, Header,Img2,ImgX,Img3,NextProjectStyle,Address
} from "../Styles/ProjectsContextFilter.Style";
import {useSelector} from "react-redux";
import ScrollHook from "../hooks/ScrollAnimateHook";
import {Link } from "react-router-dom"
import {NexProjectData} from "../hooks/NextProjectData";
import ImagesSlider from "../Components/ImagesSlider";
import {ParallaxEffect} from "../Components/ParallaxEffect";


const ProjectsContextFilter = (props) =>{
    const [open,setOpen] = useState(false)
    const data  = useSelector(state => state.data.fetchApi.filter((i )=>i.name === props.match.params._id ));
    const {e,f,g,h,state} =ScrollHook()
    let NextProjectValue = NexProjectData(props);
    const HandleOpenImage = () => setOpen(!open)
    const Images = data[0].images
    const ScrollImages = ImagesSlider(Images);

    const {Tilt,options } = ParallaxEffect();

    return  (
        <>
            {open ? ScrollImages : ""}
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
                    <Img   animate ={state.main} src={Images[0]} alt={ Images}/>
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
                        <Img3 ref ={f} animate ={state.b}
                              onClick = {()=>HandleOpenImage()}
                        >
                            <img src={Images[4]} alt={Images[4]}/>
                        </Img3>
                        <Img3 ref ={g} animate ={state.c}
                              onClick = {()=>HandleOpenImage()}
                        >
                            <img src={Images[4]} alt={Images[4]}/>
                        </Img3>
                    </ImgX>
                    <Img2 ref ={h} animate ={state.d}
                          onClick = {()=>HandleOpenImage}
                    >
                        <img src={Images[0]} alt={Images[0]}/>
                    </Img2>
                </Context>
                <NextProjectStyle  >
                    <h6>Next Project</h6>
                    <Tilt options ={options}>
                        <Link  to={`/${NextProjectValue.name}/${NextProjectValue._id}`}>
                            <img src ={NextProjectValue.images[0]} alt ={NextProjectValue.images[0]} />
                        </Link>
                    </Tilt>
                </NextProjectStyle>
                <Address>
                    <div>
                        <p>Github</p>
                        <p>LinkedIn</p>
                        <p>Gmail</p>
                    </div>
                </Address>
            </Grid>
        </>

    )
}

export default  ProjectsContextFilter;


