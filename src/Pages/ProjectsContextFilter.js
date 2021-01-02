import React from "react";
import {Grid,Header,Main,Context,Card,Padding,ImgPanelS,CardR,DivTest,PaddingOne,PaddingTwo,ImgPanel} from "../Styles/ProjectsContextFilter.Style";
import {useSelector} from "react-redux";
import MoreProjectsTemplate from "../Components/MoreProjectsTemplate"
import HeaderData from "../Components/Header"
import ImgSlider from "../Components/ImagesSlider"


const ProjectsContextFilter = (props) =>{
    const data  = useSelector(state => state.data.fetchApi.filter((i )=>i.name === props.match.params._id ));
    const { MapDataS, handlePrev, MapData, handleNext } = ImgSlider(data);
    
    return  (
        <Grid exit="exit">
            <Header>
                <HeaderData data ={MapDataS} />
            </Header>
            <div>
            <h1>Add text </h1>
            </div>
            <Main>
            <Context>
                <div>
                    <Card>
                        <Padding>
                            <ImgPanelS Img ={MapDataS}>
                                <div/>
                            </ImgPanelS>
                        </Padding>
                    </Card>
                </div>
                <div>
                    <CardR>
                        <Padding>
                            <ImgPanelS Img ={MapDataS}>
                                <div/>
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
                    <DivTest>
                        <PaddingOne >
                                <img src={MapDataS} alt={MapDataS}/>
                        </PaddingOne>
                    </DivTest>
                    <DivTest>
                        <PaddingTwo onClick={handlePrev} >
                        <img src={MapData} alt={MapData} />
                        </PaddingTwo>
                    </DivTest>
                </div>
            </Padding>
            </Card>
        <Card>
            <Padding>
                <div>
                    <ImgPanel onClick={handleNext} >
                    <img src={MapData} alt={MapData} />
                    </ImgPanel>
                </div>
            </Padding>
        </Card>
        </Main>
        <MoreProjectsTemplate props ={props} />
    </Grid>
    )
}

export default  ProjectsContextFilter;


