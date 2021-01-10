import { Padding, TextPanel } from "../Styles/MoreProjectsTemplate.Style";
import { Main, Control, CardS, ImgPanel, Text } from "../Styles/CardS";
import {firstNameS , letter ,ButtonLetter} from "../Animations/Home.animation"
import { motion } from "framer-motion";
function HeaderData({ data }){
    
    

    return (
        <Main
        initial='initial'
            animate='animate'
            exit ="exit"
        >
            <CardS>
                <Padding>
                    <div>
                        <ImgPanel
                            Img={data}
                            style={{ width: 0 }}
                            animate={{ width: "100%" }}
                            exit = {{opacity:0}}
                            transition={{
                                delay: 1.3,
                                x: {
                                    type: "spring", stiffness: 100,
                                },
                                default: {
                                    duration: 2
                                },
                            }}
                        >
                            <div />
                        </ImgPanel>
                    </div>
                    <TextPanel>
                        <Text>
                        <motion.div variants={firstNameS}>
                            <motion.h3 variants ={letter}>2</motion.h3>
                            <motion.h3 variants ={letter}>0</motion.h3>
                            <motion.h3 variants ={letter}>2</motion.h3>
                            <motion.h3 variants ={letter}>0</motion.h3>
                        </motion.div>
                        <motion.div variants={firstNameS}>
                            <motion.h3 variants={letter}>UI/ </motion.h3>
                            <motion.h3 variants={letter}>U</motion.h3>
                            <motion.h3 variants={letter}>X &nbsp;</motion.h3>
                            <motion.h3 variants={letter}>d</motion.h3>
                            <motion.h3 variants={letter}>e</motion.h3>
                            <motion.h3 variants={letter}>s</motion.h3>
                            <motion.h3 variants={letter}>i</motion.h3>
                            <motion.h3 variants={letter}>g</motion.h3>
                            <motion.h3 variants={letter}>n</motion.h3>
                        </motion.div>
                    </Text>
                    </TextPanel>
                </Padding>
            </CardS>
            <Control variants={firstNameS}>
                <motion.button variants={ButtonLetter} >
                    <motion.p variants={ButtonLetter}>&#10005;</motion.p>
                </motion.button>
            </Control>
        </Main>
    );
}

export default HeaderData
