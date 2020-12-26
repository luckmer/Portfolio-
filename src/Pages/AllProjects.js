import React,{useState,useEffect,useRef} from "react";
import {Section,Grid,Card,Slider,Header,Div,FilterSection,CardImage,Space} from "../Styles/AllProjects.Style";
import SmoothScrollUpDown from "../hooks/SmoothScrollUpDown";
import {Link} from "react-router-dom"
import VanillaTilt from "vanilla-tilt";
import FilterProjectData from "../hooks/FilterProjectData";
import {useSelector} from "react-redux";


const TotalProjects = () => {
    const scroll = useSelector(state => state.data);
    const [openFilter ,setOpenFilter] = useState(false)
    const[dataFilter, setDataFilter ] = useState("")
    const {handleScrollUp } = SmoothScrollUpDown();
    FilterProjectData(dataFilter)
    const handleClick = () =>{
        setOpenFilter(!openFilter)
    }
    let data =["All","Games","Design"]



    const Tilt = props => {
        const { options, ...rest } = props;
        const tilt = useRef(null);
        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);
        return <div ref={tilt} {...rest} />;
    };

    const options = {
        scale: 1,
        speed: 100,
        max: 5
    };

    const FilterOptions = (
        <FilterSection>
            <Div>
                <h6>2020 projects have fun </h6>
                <div>
                    {data.map((d,i)=>(
                        <address key ={d} onClick={handleClick}>
                            <p onClick={()=>setDataFilter(d)}>{d}</p>
                            <span >{i +1}</span>
                        </address>
                    ))}
                    <p onClick={handleClick}>X</p>
                </div>
            </Div>
        </FilterSection>
    )

    const Map =scroll.filteredData.map(({_id,name,images}) => (
        <Card  key={ _id }>
            <h1>{name}</h1>
            <Tilt options={options}>
                <CardImage>
                    <Link to ={`/${name}`}>
                        <img src ={images[3]} alt ={images[3]}/>
                    </Link>
                </CardImage>
            </Tilt>
        </Card>
    ))

    const [ScrollAnimate,setScrollAnimate] =useState({
        one:false,two:false,three:false,four:false
    })

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