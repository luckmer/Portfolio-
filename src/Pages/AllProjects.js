import React from "react";
import {useSelector} from "react-redux";
import {Section,Grid,Card,Slider} from "../Styles/AllProjects.Style";

const TotalProjects = () => {
    const dataS = useSelector(state => state.data.fetchApi);

    return (
        <Section >
            <Grid>
                { dataS.map(({_id, name}) => (
                    <Card key={ _id } >
                        <h1>{ name }</h1>
                    </Card>
                )) }
            </Grid>
            <Slider>
                <div>
                    <button>filter</button>
                </div>
                <div>
                    <button>Scroll Up</button>
                </div>
            </Slider>
        </Section>
    )
}

export default TotalProjects;