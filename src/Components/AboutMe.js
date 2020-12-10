import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const Grid = styled.section `
  padding: 20rem 0 0 0 ;
`
const Text = styled.div `
  font-weight: bold;
  font-size: 4.5vw;
  color:#1d1d1d;
  text-align: left;
  margin: .75rem 0 1em;
  line-height: 1.2;font-family: 'Playfair Display', serif;
  letter-spacing: 7px;
`
const AboutText = styled.div`
  font-weight: bold;
  font-size: 4vw;
  color: #1d1d1d;
  margin-right: 5em;
  text-align: left;
  
`

const Contact = styled.div `
  padding: 4em 0 15em 0;
  h1{
    font-size: 2em;
    padding:  0 0 20px 0 ;
  }
  span{
    padding: 0 20px 0 20px;
    font-size: 2em;
    font-weight: bold;
  }
`
const Back = styled.div `
  padding: 0 0 4em 0;
  text-align: center;
  font-size: 5vw;
  line-height: 5vw;
  a{
    color: black;
    text-decoration: none;
  }
`
const SocialContact = styled.div `
  padding: 0 0 5em 0 ;
  display: flex;
  div{
    width: 100%;
    
  }

`
const X = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BackToTop = styled(X) `
  align-items: flex-end;
  justify-content: flex-end;
  button{
    width: 100px;
    background-color: #1d1d1d;
    color: white;
    border-radius:100px;
    height: 100px;
  }
  p{
    margin-bottom: 2vw;
    font-family: 'Neue World',sans-serif;
    font-size: 1vw;
    line-height: 0.25vw;
  
  }
`

const AboutMe = ()=>{
    return(
        <Grid>
            <Text>
                <h1>About</h1>
            </Text>
            <AboutText>
                <h1>
                    I'm Piotr born in Poland, I try to learn and discover new things every day,but work is not the only
                    thing that fills my day I love to delve deeper into space issues.
                </h1>
            </AboutText>
            <Contact>
                <h1>Contact</h1>
                <span>Github</span>
                <span>LinkedIn</span>
                <span>Email</span>
            </Contact>
            <Back>
                <div>
                    <Link to={"/projects"}>
                        <h1>All Projects</h1>
                    </Link>
                </div>
            </Back>
            <SocialContact>
                <BackToTop>
                    <p>TOP</p>
                    <button>.</button>
                </BackToTop>
            </SocialContact>
        </Grid>
    )
}

export default  AboutMe;
