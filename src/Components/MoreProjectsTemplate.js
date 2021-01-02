import React from 'react'
import {FilterNextPrevProject} from "../hooks/NextProjectData";
import {Link} from "react-router-dom"
import {Article,H,Header,Main,ImgPanel,Padding,Footer,FooterData,Card,Text,TextPanel,Number} from "../Styles/MoreProjectsTemplate.Style";


const  MoreProjectsTemplate = ({props}) =>  {

    const { NextProjectData, PrevProjectData } = FilterNextPrevProject(props);

    return (
        <Article >
            <Header >
                <div><h3>MORE</h3></div>
                <div><span>PROJECTS</span></div>
            </Header>
            <section >
                <Main >
                    <Link to={`/${NextProjectData.name}/${NextProjectData._id}`}>
                        <Card >
                            <Padding>
                                <div>
                                    <ImgPanel >
                                        <img src={NextProjectData.images[0]} alt={NextProjectData.images[0]} />
                                    </ImgPanel>
                                </div>
                                <TextPanel >
                                    <Text>
                                        <div>
                                            <h3>
                                                {NextProjectData.name}
                                            </h3>
                                        </div>
                                        <div>
                                            <h3>
                                                {NextProjectData.filter}
                                            </h3>
                                        </div>
                                    </Text>
                                    <Number>{NextProjectData.numb}</Number>
                                </TextPanel>
                            </Padding>
                        </Card>
                    </Link>
                    <Link to={`/${PrevProjectData.name}/${PrevProjectData._id}`}>
                        <Card >
                            <Padding>
                                <div>
                                    <ImgPanel >
                                        <img src={PrevProjectData.images[0]} alt={PrevProjectData.images[0]} />
                                    </ImgPanel>
                                </div>
                                <TextPanel>
                                    <Text>
                                        <div>
                                            <h3>
                                                {PrevProjectData.name}
                                            </h3>
                                        </div>
                                        <div>
                                            <h3>
                                                {PrevProjectData.filter}
                                            </h3>
                                        </div>
                                    </Text>
                                    <Number>{PrevProjectData.numb}</Number>
                                </TextPanel>
                            </Padding>
                        </Card>
                    </Link>
                </Main>
            </section>
            <Footer>
                <FooterData>
                    <div>
                        <div>
                            <h3> Map</h3>
                        </div>
                        <div>
                            <ul>
                                <li>Contact</li>
                                <li>Cases</li>
                                <li>Home</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3> Social</h3>
                        </div>
                        <div>
                            <ul>
                                <li>LINKEDIN</li>
                                <li>GITHUB</li>
                                <li>MAIL</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span>
                            <H>
                                &#x21b3;
                            </H>
                        </span>
                    </div>
                </FooterData>
            </Footer>
        </Article>
    )
}

export default MoreProjectsTemplate
