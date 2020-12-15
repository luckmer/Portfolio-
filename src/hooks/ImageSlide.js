const  ImageSlide = (count, Images, setCount) =>  {
    const handlePrev = () =>
    {
        const reset = count === 0;
        const index = reset ? Images.length - 1 : count - 1;
        setCount(index);
    };
    const handleNext = () =>
    {
        const reset = count === Images.length - 1;
        const index = reset ? 0 : count + 1;
        setCount(index);
    };
    const Mapping = Images.slice(count, count + 1);
    const MapData = Mapping.length < 1 ? Images : Mapping;
    return { handlePrev, MapData, handleNext };
}

export default ImageSlide
