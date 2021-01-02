import {useSelector} from "react-redux";

export const FilterNextPrevProject = (props) => {

    const NextDataFilter = useSelector(state => state.data.fetchApi.filter((i) => i.name));
    let NextProject = +props.match.params.name,
        PrevProject = +props.match.params.name + 1,
        resetY = +props.match.params.name - 1 === NextDataFilter.length - 1,
        totalValue = resetY ? +props.match.params.name[0] - 1 : NextProject,
        PrevValue = resetY ? +props.match.params.name[0] : PrevProject;
    const NextProjectData = NextDataFilter[totalValue];
    const PrevProjectData = NextDataFilter[PrevValue];
    return { NextProjectData, PrevProjectData };
}