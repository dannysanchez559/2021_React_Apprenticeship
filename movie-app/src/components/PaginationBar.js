import React, { useState } from 'react';

const PaginationBar = ({ totalResults, setLoading, getNewPage }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  // if totalResults has less than 10 movieCards, display one page, else display total divided by 10 (rounded up)
  let pageNumbers = totalResults < 10 ? 1 : Math.ceil(totalResults / 10);
  pageNumbers = pageNumbers > 10 ? 10 : pageNumbers;

  const disablePageNumber = (activePageNumber) => {
    setCurrentPageNumber(activePageNumber);
    setLoading(true);
    getNewPage(activePageNumber);
  };

  return (
    <nav>
      <ul>
        {[...new Array(pageNumbers)].map((element, index) => {
          if (index + 1 === currentPageNumber) {
            return (
              <li key={index + 1}>
                <a
                  aria-label={`page ${index + 1}`}
                  className="inactive"
                  onClick={(event) => event.preventDefault()}
                >
                  {' '}
                  {index + 1}{' '}
                </a>
              </li>
            );
          } else {
            return (
              <li key={index + 1}>
                <a
                  aria-label={`page ${index + 1}`}
                  className="active"
                  onClick={(event) => {
                    event.preventDefault();
                    return disablePageNumber(index + 1);
                  }}
                >
                  {' '}
                  {index + 1}{' '}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default PaginationBar;
