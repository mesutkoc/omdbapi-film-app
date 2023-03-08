import React, { useMemo } from "react";
import { useDispatch } from 'react-redux';
import { getFilms } from '../../Redux/filmSlice';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getPageCount } from "../../helper";
import { setFilter } from "../../Redux/filmSlice";
import { INITIAL_SEARCH_TERM } from "../../constants";
import Paginator from "./Paginator";

import './table.scss';
import { Link } from "react-router-dom";

function TableDashboard() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.films);
    const totalResults = data?.films?.totalResults;

    const { register, handleSubmit, getValues } = useForm({
        defaultValues: {
            searchTerm: INITIAL_SEARCH_TERM,
            filter: false,
            year: ''
        }
    });

    const pageCount = useMemo(
        () => getPageCount(totalResults),
        [totalResults]
    );

    const onSubmit = () => {
        const userInputs = getValues();

        dispatch(setFilter(userInputs));
        dispatch(getFilms(userInputs))
    };

    return (<div className="tableDashboard">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("searchTerm", { required: true })}
                placeholder="Jot something down"
            />

            <input {...register("filter")} type="radio" value='movie' /><label>Movies</label>
            <input {...register("filter")} type="radio" value='series' /><label>Series</label>
            <input {...register("filter")} type="radio" value='episode' /><label>Episodes</label>

            <input type="submit" value="Search" />
        </form>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Year</th>
                    <th>Imdb Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.films?.Search?.map((film, index) =>
                        <tr key={film?.imdbID}>
                            <td>{index + 1}</td>
                            <td><Link to={`/filmdetail/i=${film?.imdbID}`}>{film?.Title}</Link></td>
                            <td>{film?.Type}</td>
                            <td>{film?.Year}</td>
                            <td>{film?.imdbID}</td>
                        </tr>)
                }
            </tbody>
        </table>
        <div className="resultFooter">
            {data?.films?.totalResults} films found.
            {totalResults > 10 && <Paginator pageCount={pageCount} searchTerm={getValues('searchTerm')} />}
        </div>

    </div>);
}

export default TableDashboard;
