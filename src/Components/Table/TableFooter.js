import React from "react";
import Paginator from "./Paginator";

function TableFooter({ totalResults, pageCount, data }) {
    return (
        <div className="resultFooter">
            {totalResults > 0 && <span>{`Total result: ${totalResults}`}</span>}
            {totalResults > 10 && <Paginator pageCount={pageCount} searchTerm={data?.searchTerm} />}
        </div>);
}

export default TableFooter;
