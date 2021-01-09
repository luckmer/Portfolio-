import React, { useEffect,useState,createRef} from "react";
import locomotiveScroll from "locomotive-scroll";
import {Section,Galery,Card,Header,Text,Number,Title,Footer} from "../Styles/AllProjects.Style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const TotalProjects = () => {
    const scroll = useSelector(state => state.data);
    const [height, setheight] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const scrollRef = createRef();
    const style = React.useRef()

    useEffect(() => {
        const Scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            direction: "horizontal",
            lerp: 0.06
        });
    Scroll.on("scroll", (window) =>{
        skewScrolling(window)
    })
    },[scrollRef]);


    useEffect(() => {
        function Resize() {
            setheight({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", Resize);
        return () => window.removeEventListener("resize", Resize);
    }, []);
    const data = {
        ease: 0.1,
        current: 0,
        last: 0,
        rounded: 0,
        test:0
    };
    
    const skewScrolling = (Window) =>{
        data.current = Window.scroll.x
        data.last += (data.current - data.last) * data.ease
        data.rounded = Math.round(data.last * 100) / 100
        const diff = data.current - data.rounded;
        const acc = diff / height.height;
        const velo =+ acc
        const skew = velo * 25.5
        const allImgs = [...document.querySelectorAll('img')];
        allImgs.forEach(el => el.style.transform = ` skewX(${-skew}deg) `);
    }

    
    return (
    <main  data-scroll-container data-horizontal="true"  ref ={scrollRef} >
        <Section  ref ={style} initial ="initial" exit ="exit " animate ="animate" id ="style" >
            <Galery >
                    {scroll.fetchApi.map(({images,name,numb,_id,filter}) => (
                        <Card key ={name}>
                        <Header  data-scroll data-scroll-speed="1.5">
                            <div>
                                <Number>{numb}</Number>
                            </div>
                            <div>
                                <Title>{name}</Title>
                            </div>
                        </Header>
                        <div>
                            <div>
                                <Link to={`${name}/${_id}`}>
                                    <img src={images} alt={images} />
                                </Link>
                            </div>
                        </div>
                        <section>
                            <Text>
                                <div/>
                                <div >  
                                    <Footer>
                                        <span>{filter} </span>
                                    </Footer>
                                </div>
                            </Text>
                        </section>
                    </Card>
                ))}
            </Galery>
        </Section>
    </main>
    )
}


export default TotalProjects