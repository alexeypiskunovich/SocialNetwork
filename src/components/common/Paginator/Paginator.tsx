import React, { useState } from "react";
import style from './Paginator.module.css';

type PropsType={
    totalUsersCount:number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber:number)=>void
    portionSize?:number
}

let Paginator: React.FC<PropsType> = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>//Кнопка "Prev": Отображается, если номер порции больше 1. При нажатии уменьшает portionNumber на 1, переходя к предыдущей порции.
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    const pageClass = currentPage === p ? style.selectedPage : style.pageNumber;//pageClass: Устанавливает класс для каждой страницы. Если currentPage совпадает с номером страницы p, используется класс selectedPage, иначе — pageNumber.
                    return (
                        <span
                            className={pageClass}
                            key={p}
                            onClick={() => { onPageChanged(p) }}
                        >
                            {p}
                        </span>
                    );
                })}
                
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
            }
        </div>
    );
}

export default Paginator;