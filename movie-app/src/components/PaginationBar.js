import React, { useState } from "react";

const PaginationBar = (props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  // if totalResults has less than 10 movieCards, display one page, else display total divided by 10 (rounded up)
  let pageNumbers =
    props.totalResults < 10 ? 1 : Math.ceil(props.totalResults / 10);
  pageNumbers = pageNumbers > 10 ? 10 : pageNumbers;

  const disablePageNumber = (activePageNumber) => {
    setCurrentPageNumber(activePageNumber);
    props.getNewPage(activePageNumber);
  };

  const returnPageNumbers = () => {
    return [...new Array(pageNumbers)].map((element, index) => {
      if (index + 1 === currentPageNumber) {
        return (
          <span
            role="button"
            aria-label={`page ${index + 1}`}
            tabIndex="-1"
            className="inactive"
            key={index}
          >
            {index + 1}
          </span>
        );
      } else {
        return (
          <span
            role="button"
            aria-label={`page ${index + 1}`}
            tabIndex="-1"
            className="active"
            type="click"
            key={index}
            onClick={() => disablePageNumber(index + 1)}
          >
            {index + 1}
          </span>
        );
      }
    });
  };

  return (
    <div className="paginationbar">
      <h3>{`totalResults: ${props.totalResults}, pages: ${pageNumbers}`}</h3>
      {returnPageNumbers()}
    </div>
  );
};

export default PaginationBar;
