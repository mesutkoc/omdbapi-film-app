import React, { useMemo } from "react";
import { useSelector } from 'react-redux';
import { getPageCount } from "../../helper";
import Paginator from "./Paginator";

import './table.scss';

function TableDashboard() {
    const data = useSelector((state) => state.films);
    const totalResults = data?.films?.totalResults;

    const pageCount = useMemo(
        () => getPageCount(totalResults),
        [totalResults]
    );

    return (<div className="tableDashboard">
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
                            <td>{film?.Title}</td>
                            <td>{film?.Type}</td>
                            <td>{film?.Year}</td>
                            <td>{film?.imdbID}</td>
                        </tr>)
                }
            </tbody>
        </table>
        <div className="resultFooter">
            {data?.films?.totalResults} films found.
            {totalResults > 10 && <Paginator pageCount={pageCount} />}
        </div>

    </div>);
}

export default TableDashboard;
