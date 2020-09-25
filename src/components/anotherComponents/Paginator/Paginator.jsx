import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({currentPage, totalUsersCount, pageSize, onChangePage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            {pages.map(p => {
                return <span className={styles.boxForNum}>
                        <span className={currentPage === p && styles.selectedPage}
                              onClick={e => {
                                  onChangePage(p);
                              }}>{p}</span>
                    </span>
            })}
        </div>

}

export default Paginator;