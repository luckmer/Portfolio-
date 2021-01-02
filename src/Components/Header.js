import React from 'react'
import styled from "styled-components"
import {Padding,TextPanel,Number} from "../Styles/MoreProjectsTemplate.Style";

const CardS = styled.div`
position: relative;
display: block;
width: 80vw;
margin-right: 1.5vw;
`

const ImgPanel = styled.div ` 
div{
    display: flex;
    width: 49vw;
    height: 36vw;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    margin: auto;
    width: 100%;
    height: 30vw;
    background-image: url(${({ Img }) => Img });
}
`
const Main =styled.div `
    display: flex;
    justify-content:space-between;
    width: 100%;
`

const Text = styled.div `
display: flex;
padding-right: 1vw;
padding-bottom: 1vw;
flex-direction: column;
justify-content: space-between;
h3{
    padding-top: 1vw;
    float: left;
    color: #1d1d1d;
    font-size: 4vw;
    line-height: 3vw;
}
`
const Control = styled.div`
    width:10%;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    align-items:center;
    button{
        width: 70px;
        height: 70px;
        font-size:30px;
        fnt-weight:bold;
        background-color:#eaeaea;
        border:1px solid #333;
        border-radius: 100px;
    }
`
function HeaderData({data}) {
    return (
        <Main>
        <Control>
                <button>
                    <p>&#10005;</p>
                </button>
        </Control>
            <CardS>
                
                <Padding>
                    <div>
                        <ImgPanel Img ={data}>
                            <div  ></div>
                        </ImgPanel>
                    </div>
                    <TextPanel >
                    <Text>
                        <div>
                            <h3>
                                2020
                            </h3>
                        </div>
                        <div>
                            <h3>
                                UI/UX design
                            </h3>
                        </div>
                    </Text>
                </TextPanel>
                </Padding>
            </CardS>
        </Main>
    )
}

export default HeaderData
