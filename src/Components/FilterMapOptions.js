import {Card , CardImage , Div , FilterSection} from "../Styles/AllProjects.Style";
import {Link} from "react-router-dom";
import React from "react";

export const  FilterMapOptions = (setOpenFilter, openFilter, setDataFilter, scroll, Tilt, options) => {
    const handleClick = () =>setOpenFilter(!openFilter);
    let data = ["All", "Games", "Design"];

    const FilterOptions = (
        <FilterSection>
            <Div>
                <h6>2020 projects have fun </h6>
                <div>
                    {data.map((d, i) => (
                        <address key={d} onClick={handleClick}>
                            <p onClick={() => setDataFilter(d)}>{d}</p>
                            <span>{i + 1}</span>
                        </address>
                    ))}
                    <p onClick={handleClick}>X</p>
                </div>
            </Div>
        </FilterSection>
    );

    const Map = scroll.filteredData.map(({ _id, name, images }) => (
        <Card key={_id}>
            <h1>{name}</h1>
            <Tilt options={options}>
                <CardImage>
                    <Link to={`/${ name }/${ _id }`}>
                        <img src={images[3]} alt={images[3]} />
                    </Link>
                </CardImage>
            </Tilt>
        </Card>
    ));
    return { FilterOptions, Map, handleClick };
}

