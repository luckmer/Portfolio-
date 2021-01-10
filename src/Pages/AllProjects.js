import {Section,Galery,Card,Header,Text,Number,Title,Footer} from "../Styles/AllProjects.Style";
import { firstName, letter } from "../Animations/Home.animation";
import AllProjectsParallax from "../hooks/AllProjectsParallax"
import { Link } from "react-router-dom";

const TotalProjects = () =>{
    const { scrollRef, style, scroll } = AllProjectsParallax();

    
    return (
    <main  data-scroll-container data-horizontal="true"  ref ={scrollRef} >
        <Section  ref ={style} initial ="initial" exit ="exit " animate ="animate" id ="style"   >
            <Galery  variants = {firstName}>
                    {scroll.fetchApi.map(({images,name,numb,_id,filter}) => (
                        <Card key ={name} variants ={letter}>
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


