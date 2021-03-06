import React, {useState} from 'react';
import Pagination from "react-bootstrap/Pagination";
import './MoviePagination.scss'

const CN = 'movie-pagination';
export const MoviePagination = (props) => {
    const { currentPage, pageCount, onPageClick, portionSize } = props;

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount/portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionNumber = (portionNumber-1) * portionSize+1;
    const rightPortionNumber = portionNumber * portionSize;

    const prevHandler = () => {
        setPortionNumber(portionNumber-1);
    };

    const nextHandler = () => {
        setPortionNumber(portionNumber+1);
    };

    const activePage = (page) => {
        console.log(page);
        if ( page === currentPage ) {
            return (
                <span className="sr-only">(current)</span>
            )
        }
    };

    return (
            <div className={`${CN}__page-link d-flex`}>
                {/*<Pagination*/}
                {/*    activePage={currentPage}*/}
                {/*    itemsCountPerPage={10}*/}
                {/*    totalItemsCount={pageCount}*/}
                {/*    pageRangeDisplayed={5}*/}
                {/*    onChange={onPageClick(currentPage)}*/}
                {/*/>*/}
                <Pagination>
                    {/*<Pagination.First />*/}
                    {
                        portionNumber > 1 &&  <Pagination.Prev onClick={ (e)=>{
                            prevHandler();
                        } } />
                    }
                    {
                        pages
                            .filter( item => {
                                // console.log(item,leftPortionNumber,rightPortionNumber);
                                return  item >= leftPortionNumber && item <= rightPortionNumber
                            })
                            .map((item, index) => (
                                // <li className={`page-item ${CN}__${ currentPage === item ? 'activePage' : '' }`}
                                //     key={index}
                                //     onClick={onPageClick(item)}
                                //     aria-current={`${ currentPage === item ? 'page' : '' }`}
                                // >
                                //     {
                                //         item === currentPage
                                //             ?
                                //             <span className={`${CN}__p-link`}>
                                //                 {
                                //                     item
                                //                 }
                                //                 {
                                //                     activePage(item)
                                //                 }
                                //             </span>
                                //             :
                                //             <a className={`${CN}__p-link`} href="#">
                                //                 {
                                //                     item
                                //                 }
                                //             </a>
                                //
                                //     }
                                // </li>
                                    <Pagination.Item
                                        key={index}
                                        onClick={onPageClick(item)}
                                        active={item === currentPage}
                                        // className={`${CN}__${item === currentPage ? 'active' : ''}`}
                                    >
                                        {item}
                                    </Pagination.Item>
                        ))
                    }
                    {
                        portionCount > portionNumber &&  <Pagination.Next onClick={(e)=>{
                            nextHandler();
                        }} />
                    }
                    {/*<Pagination.Last />*/}
                </Pagination>
                </div>
        );
};
