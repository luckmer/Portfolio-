import React from "react";
import {useSelector} from "react-redux";


const ProjectsContextFilter = ({match}) =>{

    const {_id} = match.params
    const apiDataView = useSelector(state =>
        state.data.fetchApi.find(details =>
            details._id === _id
        ),
    );
    return(
        <div>

        </div>
    )
}

export default  ProjectsContextFilter;