import {useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux";
import {setFilteredData} from "../Reducers/DataControl"

const FilterProjectData = (dataFilter) =>{
    const dispatch = useDispatch()
    const dataS = useSelector(state => state.data);

    useEffect(()=>{
        let filterS = dataS.fetchApi.slice();
        if(dataFilter){
            filterS = filterS.filter((item) =>
                item.filter
                    .toLowerCase()
                    .includes(
                        dataFilter
                            .toLowerCase()
                            .trim()
                    ),
            );
        }
        if(!filterS.length){
            filterS = dataS.fetchApi
        }
        dispatch(setFilteredData({data:filterS}))
    },[dataS.fetchApi,dispatch,dataFilter])

}
export default  FilterProjectData;