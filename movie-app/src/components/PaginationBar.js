import React, { useState } from "react";

const PaginationBar = (props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  // if totalResults has less than 10 movieCards, display one page, else display total divided by 10 (rounded up)
  let pageNumbers =
    props.totalResults < 10 ? 1 : Math.ceil(props.totalResults / 10);
  pageNumbers = pageNumbers > 10 ? 10 : pageNumbers;

  const disablePageNumber = (activePageNumber) => {
    setCurrentPageNumber(activePageNumber);
    props.setLoading(true);
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
        
        <nav>
            <ul>
                {
                    [...new Array(pageNumbers)].map((element, index) => {
                        if (index + 1 === currentPageNumber) {
                            // return (<span role='button' aria-label={`page ${index+1}`} tabindex="-1" className='inactive' key={index}>{index+1}</span>)
                            return (<li key={index}>
                                        <a className='inactive'> {index+1} </a>
                                    </li>)
                        } else {
                            // return (<span role='button' aria-label={`page ${index+1}`} tabindex="-1" className='active' type="click" key={index} onClick={() => disablePageNumber(index + 1)}>{index+1}</span>)

                            return (<li key={index} >
                                        <a className='active' onClick={() => disablePageNumber(index + 1)}> {index+1} </a>
                                    </li>)
                        } 
                    })
                }
            </ul>
        </nav>
    
    );
}

export default PaginationBar;
