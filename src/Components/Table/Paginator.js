import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from "../../Redux/filmSlice";
import './table.scss';

function Paginator({ pageCount }) {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const userInputs = useSelector((state) => state?.films);

    const changePage = (page) => {
        setCurrentPage(page)
        dispatch(getFilms({ page: page, ...userInputs }));
    }

    return (
        <div className="paginator">
            {pageCount?.map(page => <span className={`paginatorItem ${currentPage === page ? "active" : ""}`} key={page} onClick={() => changePage(page)}>{page}</span>)}
        </div>);
}

export default Paginator;
