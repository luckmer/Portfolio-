import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";

const Section = styled.section `
  padding: 4em 11em 0 11em;
`
const Grid = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`
const Card = styled.div `
  width: calc((100vw/2 - 190px) * .5);
  height: calc((100vw/1.8 ) * .5);
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: black;
  &&:nth-child(3n - 1){
    margin: 11vw 50px 50px 50px;
  }
  h1{
    color: white;
    padding: 0 0 40px 0 ;
  }
  
`
const Slider = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4em 0 7em 0;
`
const TotalProjects = () =>{

    const data = useSelector(state=>state.data.fetchApi);

    return(
        <Section>
            <Grid>
                {data.map(({_id,name,link})=>(
                    <Card key ={_id}>
                        <h1>{name}</h1>
                    </Card>
                ))}
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

export  default  TotalProjects;