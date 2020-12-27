import {useSelector} from "react-redux";

export const  NexProjectData = (props) =>  {
    const NextDataFilter  = useSelector(state => state.data.fetchApi.filter((i )=>i.name ));

    let NextProject = +props.match.params.name,
        resetY = +props.match.params.name - 1 === NextDataFilter.length - 1,
        totalValue = resetY ? +props.match.params.name[0] - 1 : NextProject;
    return  NextDataFilter[totalValue];
}
