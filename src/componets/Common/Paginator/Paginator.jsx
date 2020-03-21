import React, {useState} from 'react';
import Icon from "@mdi/react";
import { mdiArrowLeft } from '@mdi/js';
import pg from './Paginator.module.css'
import { mdiArrowRight } from '@mdi/js';
import cn from 'classnames'

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionsPagesNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionsPagesNumber = portionNumber * portionSize;


    return <div className={pg.nav}>
        {portionNumber > 1 && <span className={pg.btn} onClick={() =>
            setPortionNumber(portionNumber - 1)}>
            <Icon  path={mdiArrowLeft} size='16px' color='#673ab7'/>
        </span>}

                {pages
                .filter(p => p >= leftPortionsPagesNumber && p <= rightPortionsPagesNumber)
                .map(p => {
                return <span key={p} className={cn({[pg.page]: currentPage === p})}
                             onClick={() => onPageChange(p)}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <span className={pg.btn} onClick={() => {
                setPortionNumber(portionNumber + 1)}}>
                <Icon path={mdiArrowRight}   size='16px' color='#673ab7'/>
            </span>
        }
    </div>
}

export default Paginator;
