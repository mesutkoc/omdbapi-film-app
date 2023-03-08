import React from "react";
import { useDispatch } from 'react-redux';
import { getFilms } from '../../Redux/filmSlice';
import { useForm } from "react-hook-form";
import { setFilter } from "../../Redux/filmSlice";
import { INITIAL_SEARCH_TERM } from "../../constants";

function FilterForm() {
    const dispatch = useDispatch();
    const { register, handleSubmit, getValues } = useForm({
        defaultValues: {
            searchTerm: INITIAL_SEARCH_TERM,
            filter: false,
            year: ''
        }
    });
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
            <label><input {...register("filter")} type="radio" value='movie' />Movies</label>
            <label><input {...register("filter")} type="radio" value='series' />Series</label>
            <label><input {...register("filter")} type="radio" value='episode' />Episodes</label>
            <label><input type="submit" value="Search" /></label>
        </form>
    </div>);
}

export default FilterForm;
