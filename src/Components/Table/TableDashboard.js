import React, { useMemo } from "react";
import { useSelector } from 'react-redux';
import { getPageCount } from "../../helper";
import { Link } from "react-router-dom";
import TableFooter from "./TableFooter";
import FilterForm from "./FilterForm";
import './table.scss';

function TableDashboard() {
    const data = useSelector((state) => state.films);
    const totalResults = data?.films?.totalResults;

    const pageCount = useMemo(
        () => getPageCount(totalResults),
        [totalResults]
    );

    return (<div className="tableDashboard">
        <FilterForm></FilterForm>
        <div>
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
                    {data?.films?.Search?.map((film, index) =>
                        <tr key={film?.imdbID}>
                            <td>{index + 1}</td>
                            <td><Link to={`/filmdetail/i=${film?.imdbID}`}>{film?.Title}</Link></td>
                            <td>{film?.Type}</td>
                            <td>{film?.Year}</td>
                            <td>{film?.imdbID}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <TableFooter totalResults={totalResults} pageCount={pageCount} data={data}></TableFooter>
    </div>);
}

export default TableDashboard;
