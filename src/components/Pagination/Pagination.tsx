// Generated with util/create-component.js
import React from "react";
import { PaginationProps } from "./Pagination.types";
import "./Pagination.scss";
import { BEM } from "../../libs/BEM";
import { usePaginationHooks } from "../../hooks/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination(props: PaginationProps) {
    const bem = new BEM("Pagination", {});
    bem.Append(props.className);
    const usePagination = usePaginationHooks(props.rows, props.activePage, props.itemsPerPage);
    const rows = [];
    const Item = ({index = 1, preview = false, next = false, onClick}: any) => {
        const classNames = [];
        const active = usePagination.currentPage == index;
        let disabled = false;
        if (preview && (index == usePagination.currentPage)) {
            disabled = true;
        }
        if (next && (usePagination.maxPage == usePagination.currentPage)) {
            disabled = true;
        }
        active && classNames.push("active");
        disabled && classNames.push("disable");
        return (
            <li onClick={!disabled ? onClick : null} className={classNames.length > 0 ? classNames.join(" ") : null}>
                <a href="">
                    {preview && <FontAwesomeIcon icon={faArrowLeft}/>}
                    {!(preview || next) && index}
                    {next && <FontAwesomeIcon icon={faArrowRight}/>}
                </a>
            </li>
        );
    }

    if (usePagination.paginationStart > 1) {
        rows.push(<Item index={"..."} key={"start_1"}/>);
    }

    for (let i = usePagination.paginationStart; i <= usePagination.paginationEnd; i++) {
        if (i == usePagination.maxPage || i == 1) continue;
        rows.push(<Item onClick={() => usePagination.jump(i)} index={i} key={i}/>);
    }

    if (usePagination.paginationEnd < usePagination.maxPage) {
        rows.push(<Item key={"start_2"} index={"..."}/>);
    }

    return (
        <nav className={bem.toString()}>
            <ul>
                <Item preview onClick={() => usePagination.prev()}/>
                <Item index={1} onClick={() => usePagination.jump(1)}/>
                {rows}
                <Item index={usePagination.maxPage} onClick={() => usePagination.jump(usePagination.maxPage)}/>
                <Item next onClick={() => usePagination.next()}/>
            </ul>
        </nav>
    );
}