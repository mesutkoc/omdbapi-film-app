import { FILM_COUNT_FOR_PER_PAGE } from "./constants";

const getPageCount = (totalResults) => {
    const pageNumber = [];
    const pageCount = Math.ceil(totalResults / FILM_COUNT_FOR_PER_PAGE);
    for (let count = 1; count < pageCount + 1; count++) {
        pageNumber.push(count)
    }
    return pageNumber;
}

const getSearchTerm = (userInputs) => {
    if (userInputs?.filter && !userInputs?.page) {
        return `s=${userInputs?.searchTerm}&type=${userInputs?.filter}`;
    }
    if (userInputs?.page && userInputs?.filter) {
        return `s=${userInputs?.searchTerm}&type=${userInputs?.filter}&page=${userInputs?.page}`;
    }
    if (!userInputs?.filter) {
        return `s=${userInputs?.searchTerm}&page=${userInputs?.page}`
    }
    return `s=${userInputs?.searchTerm}`
}

const getRating = (rating) => {
    const ratingString = rating?.map(rate => `*${rate?.Source}: ${rate?.Value} `)
    return ratingString;
}

export { getPageCount, getSearchTerm, getRating }