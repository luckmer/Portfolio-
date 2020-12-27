import React,{useState,useEffect} from "react";
import {Section,Grid,Slider,Header,Space} from "../Styles/AllProjects.Style";
import {FilterMapOptions} from "../Components/FilterMapOptions";
import SmoothScrollUpDown from "../hooks/SmoothScrollUpDown";
import {ParallaxEffect} from "../Components/ParallaxEffect";
import FilterProjectData from "../hooks/FilterProjectData";
import {useSelector} from "react-redux";

const TotalProjects = () => {
    const scroll = useSelector(state => state.data);
    const [openFilter ,setOpenFilter] = useState(false)
    const[dataFilter, setDataFilter ] = useState("")
    const [ScrollAnimate,setScrollAnimate] =useState({
        one:false,two:false,three:false,four:false
    })
    const { Tilt, options } = ParallaxEffect();
    const {handleScrollUp } = SmoothScrollUpDown();
    FilterProjectData(dataFilter)
    const { FilterOptions, Map, handleClick } = FilterMapOptions(
        setOpenFilter, openFilter, setDataFilter, scroll, Tilt, options );

    
    useEffect(()=>{
        const Scroll = () =>{
            const data = () => document.body.getBoundingClientRect().top
            const control = data();
            control >= -1000 ?
                setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, one: false })) :
                setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, one: true }));
            control >= -1750 ?
                setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, two: false })) :
                setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, two: true }));
            control >= -2500 ?
                setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, three: false })) :
                setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, three: true }));
            control >= -3100 ?
                setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, four: false })) :
                setScrollAnimate(ScrollAnimate => ({ ...ScrollAnimate, four: true }));
        }
        document.addEventListener("scroll",Scroll)
        return ()=>document.removeEventListener("scroll",Scroll)
    },[])

    return (
        <>
            {openFilter ? FilterOptions :" "}
            <Section >
                <Header animate ={scroll.navProjectScroll} >
                    <h1>WORK</h1>
                    <h6>Fill free to scroll </h6>
                </Header>
                <Space>
                    <Grid animate ={ScrollAnimate.one}>
                        {Map[0]}
                        {Map[1]}
                        {Map[2]}
                    </Grid>
                    <Grid animate ={ScrollAnimate.two}>
                        {Map[3]}
                        {Map[4]}
                        {Map[5]}
                    </Grid>
                    <Grid animate ={ScrollAnimate.three}>
                        {Map[6]}
                        {Map[7]}
                        {Map[8]}
                    </Grid>
                    <Grid animate ={ScrollAnimate.four}>
                        {Map[9]}
                        {Map[10]}
                        {Map[11]}
                    </Grid>
                    <Grid animate ={false}>
                        {Map[12]}
                    </Grid>
                </Space>
                <Slider>
                    <div>
                        <button onClick={handleClick}>
                            <hr/>
                            <hr/>
                            <hr/>
                        </button>
                    </div>
                    <h6>2020 projects have fun </h6>
                    <div>
                        <button onClick={handleScrollUp}>
                            <hr/>
                        </button>
                    </div>
                </Slider>
            </Section>
        </>
    )
}

export default TotalProjects;

