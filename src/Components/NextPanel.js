import styled from "styled-components";
import { motion } from "framer-motion";
import { transition } from "../Animations/Home.animation";


const Panel = styled(motion.div)`
    height:100vh;
    width: 100vw;
    position: absolute;
    z-index: 11;
    background-color: #1d1d1d;
`

export const SwitchPage = () =>
{
    return (
        <Panel
        transition={{ ...transition, duration: 2, times: [0, .5, 1] }}
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight] }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }} 
        ></Panel>
    )
}