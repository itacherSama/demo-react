import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';
let Paginator = ({currentPage, totalItemsCount, pageSize, onChangePage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNum = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNum = portionNumber * portionSize;

    return (<div className={styles.paginator}>

        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Prev</button>}
        {pages
            .filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={e => {
                                 onChangePage(p);
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>Next</button>}
    </div>)

}

export default Paginator;