import { useState } from "react";

export function usePaginationHooks(data: any[], initialPage = 1, itemsPerPage = 20, paginationNumber = 2) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const paginationStart = currentPage > paginationNumber ? currentPage - paginationNumber : initialPage
    const paginationEnd = (currentPage + paginationNumber) > maxPage ? maxPage : currentPage + paginationNumber;

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    function jump(page) {
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    }

    return {next, prev, jump, currentData, maxPage, paginationStart, currentPage, paginationEnd};
}
