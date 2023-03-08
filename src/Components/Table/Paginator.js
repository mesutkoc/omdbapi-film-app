import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from "../../Redux/filmSlice";
import './table.scss';

function Paginator({ pageCount }) {
    const dispatch = useDispatch();
    const userInputs = useSelector((state) => state?.films);

    const onHandle = (page) => {
        dispatch(getFilms({ page: page, ...userInputs }));
    }

    return (
        <div className="paginator">
            {pageCount?.map(page => <span className="paginatorItem" key={page} onClick={() => onHandle(page)}>{page}</span>)}
        </div>);
}

export default Paginator;
