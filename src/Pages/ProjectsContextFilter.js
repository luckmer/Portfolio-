import React from "react";
import{Grid, Header, Main, Context,Card, Padding, ImgPanelS, CardR, PaddingTwo, ImgPanel,
    Text,TextContext,HeaderText,DivText
} from "../Styles/ProjectsContextFilter.Style";
import MoreProjectsTemplate from "../Components/MoreProjectsTemplate"
import {useSelector} from "react-redux";
import HeaderData from "../Components/Header"
import {motion} from "framer-motion";


const ProjectsContextFilter = (props) =>{
    const data = useSelector((state) =>
    state.data.fetchApi.filter((i) => i.name === props.match.params._id));
    window.onbeforeunload = function () { window.scrollTo(0, 0); };
    const Images = data.map(({ images }) => images[0]);
    
    return (
        <Grid exit='exit'
        initial='initial'
        animate='animate'
        >
            <Header >
                <HeaderData data={Images} />
            </Header>
            <TextContext>
                <div>
                    <h1>8</h1>
                </div>
                <Text>
                    <HeaderText>
                        <h3>Project Name:</h3>
                    </HeaderText>
                    <DivText>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation</h2>
                    </DivText>
                </Text>
            </TextContext>
            <Main>
                <Context>
                    <div>
                        <Card >
                            <Padding>
                                    <ImgPanelS Img={Images}>
                                        <motion.div
                                            whileHover={{scale:.98}}
                                            transition={{
                                                delay: 0.2,
                                                x: {
                                                    type: "spring", stiffness: 100,
                                                },
                                                default: {
                                                    duration: 1
                                                },
                                            }}
                                        />
                                    </ImgPanelS>
                            </Padding>
                        </Card>
                    </div>
                    <div>
                        <CardR>
                            <Padding>
                                <ImgPanelS Img={Images}>
                                    <motion.div
                                    whileHover={{scale:0.98,  }}
                                    style={{ width: "100%" }}
                                        transition={{
                                        delay: 0.2,
                                        x: {
                                            type: "spring", stiffness: 100,
                                        },
                                        default: {
                                            duration: 1
                                        },
                                    }}
                                    />
                                </ImgPanelS>
                            </Padding>
                        </CardR>
                    </div>
                </Context>
            </Main>
            <Main>
                <Card>
                    <Padding>
                        <div>
                            <PaddingTwo >
                                <motion.img src={Images} alt={Images}
                                whileHover={{ scale: .98  }}
                                transition={{
                                    delay: 0.2,
                                    x: {
                                        type: "spring", stiffness: 100,
                                    },
                                    default: {
                                        duration: 1
                                    },
                                }}
                                />
                            </PaddingTwo>
                            <PaddingTwo  >
                                <motion.img src={Images} alt={Images}
                                whileHover={{ scale: .98  }}
                                transition={{
                                    delay: 0.2,
                                    x: {
                                        type: "spring", stiffness: 100,
                                    },
                                    default: {
                                        duration: 1
                                    },
                                }}
                                />
                            </PaddingTwo>
                        </div>
                    </Padding>
                </Card>
                <Card >
                    <Padding>
                        <PaddingTwo>
                            <ImgPanel >
                                <motion.img src={Images} alt={Images}
                                    whileHover={{ scale: .98 }}
                                    transition={{
                                        delay: 0.2,
                                        x: {
                                            type: "spring", stiffness: 100,
                                        },
                                        default: {
                                            duration: 1
                                        },
                                    }}
                                />
                            </ImgPanel>
                        </PaddingTwo>
                    </Padding>
                </Card>
            </Main>
            <MoreProjectsTemplate props={props} />
        </Grid>
    );
}

export default  ProjectsContextFilter;


