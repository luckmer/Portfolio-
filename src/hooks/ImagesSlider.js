import  {useState} from "react";


function ImgSlider(data){
    const Images = data[0].images;
    const [count, setCount] = useState(0);
    const [nextS, setNextS] = useState(0);


    const handlePrev = () =>{
        const reset = count === 0;
        const index = reset ? Images.length - 1 : count - 1;

        const resetNext = nextS === 0;
        const indexNext = resetNext ? Images.length - 1 : nextS - 2;

        setNextS(indexNext);
        setCount(index);
    };

    const handleNext = () =>{
        const reset = count === Images.length - 1;
        const index = reset ? 0 : count + 1;

        const resetS = nextS === Images.length - 1;
        const IndexNext = resetS ? 0 : nextS + 2;

        setNextS(IndexNext);
        setCount(index);
    };

    const Mapping = Images.slice(count, count + 1);
    const MapData = Mapping.length < 1 ? Images : Mapping;

    const MappingS = Images.slice(nextS, nextS + 1);
    const MapDataS = MappingS.length < 1 ? Images : MappingS;

    return { MapDataS, handlePrev, MapData, handleNext };
}

export default ImgSlider