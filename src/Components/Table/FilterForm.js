import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getFilms } from '../../Redux/filmSlice';
import { useForm } from "react-hook-form";
import { setFilter } from "../../Redux/filmSlice";
import { INITIAL_SEARCH_TERM } from "../../constants";

function FilterForm() {
    const dispatch = useDispatch();
    const [value, setValue] = useState();

    const { register, handleSubmit, getValues } = useForm({
        defaultValues: {
            searchTerm: INITIAL_SEARCH_TERM,
            filter: false,
            year: ''
        }
    });

    const checkedButton = (e) => {
        if (e.target.value === value) {
            setValue("");
        } else {
            setValue(e.target.value);
        }
    }

    const onSubmit = () => {
        const userInputs = getValues();

        dispatch(setFilter(userInputs));
        dispatch(getFilms(userInputs))
    };

    return (<div className="filterForm">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input
                className="searchInput"
                {...register("searchTerm", { required: true })}
                placeholder="Jot something down" />
            <label><input {...register("filter")} type="radio" value='movie' checked={value === 'movie'} onClick={(e) => checkedButton(e)} />Movies</label>
            <label><input {...register("filter")} type="radio" value='series' checked={value === 'series'} onClick={(e) => checkedButton(e)} />Series</label>
            <label><input {...register("filter")} type="radio" value='episode' checked={value === 'episode'} onClick={(e) => checkedButton(e)} />Episodes</label>
            <label><input type="submit" value="Search" /></label>
        </form>
    </div>);
}

export default FilterForm;
