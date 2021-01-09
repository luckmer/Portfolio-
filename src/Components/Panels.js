import React from "react";
import { LeftPanel, RightPanel } from "../Styles/Home.style";
import { transition } from "../Animations/Home.animation";

export const Panels = () =>
{
    return (
        <>
            <LeftPanel
                transition={{ ...transition, duration: 2, times: [0, .5, 1] }}
                initial={{ height: 0 }}
                animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
                exit="exit"/>
            <RightPanel
                transition={{ ...transition, duration: 2, times: [0, .5, 1] }}
                initial={{ height: 0 }}
                animate={{ height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight] }}
                exit="exit" />
        </>
    );
};


