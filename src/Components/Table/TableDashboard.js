import React, { useMemo } from "react";
import { useDispatch } from 'react-redux';
import { fetchFilms } from '../../Redux/filmSlice';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getPageCount } from "../../helper";
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
            checkbox: false
        }
    });

    const pageCount = useMemo(
        () => getPageCount(totalResults),
        [totalResults]
    );

    const onSubmit = () => {
        dispatch(fetchFilms(`s=${getValues('searchTerm')}`))
    };

    return (<div className="tableDashboard">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("searchTerm", { required: true })}
                placeholder="Jot something down"
            />

            <input {...register("checkbox")} type="radio" value='Films' /><label>Films</label>
            <input {...register("checkbox")} type="radio" value='Series' /><label>Series</label>
            <input {...register("checkbox")} type="radio" value='Episodes' /><label>Episodes</label>

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
