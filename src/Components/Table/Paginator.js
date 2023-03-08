import React from "react";
import { useDispatch } from 'react-redux';
import { getTodoAsync } from "../../Redux/filmSlice";
import './table.scss';

function Paginator({ pageCount, searchTerm }) {
    const dispatch = useDispatch();
    const onHandle = (count) => {
        dispatch(getTodoAsync(`s=${searchTerm}&page=${count}`));
    }

    return (
        <div className="paginator">
            {pageCount?.map(count => <span className="paginatorItem" key={count} onClick={() => onHandle(count)}>{count}</span>)}
        </div>);
}

export default Paginator;
