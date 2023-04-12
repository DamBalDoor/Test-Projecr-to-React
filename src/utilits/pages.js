export const getPageCount = (totalCount, limits) => {
    return Math.ceil(totalCount / limits)
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    return result;
}