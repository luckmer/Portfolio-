import styled from "styled-components";

export const Section = styled.section`
  padding: 4em 11em 0 11em;
`
export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  width: calc((100vw / 2 - 190px) * .5);
  height: calc((100vw / 1.8) * .5);
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: black;

  &&:nth-child(3n - 1) {
    margin: 11vw 50px 50px 50px;
  }

  h1 {
    color: white;
    padding: 0 0 40px 0;
  }

`
export const Slider = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4em 0 7em 0;
`