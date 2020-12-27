import React , {useEffect , useRef} from "react";
import VanillaTilt from "vanilla-tilt";

export const  ParallaxEffect = () =>{

    const Tilt = props => {
        const { options, ...rest } = props;
        const tilt = useRef(null);
        useEffect(() =>
        {
            VanillaTilt.init(tilt.current, options);
        }, [options]);
        return <div ref={tilt} {...rest} />;
    };

    const options = {
        scale: 1,
        speed: 100,
        max: 5
    };
    return { Tilt, options };
}
