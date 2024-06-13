import React, { useEffect } from "react";
import { useState } from "react";
import "./pagination.css";
import * as Icons from "react-bootstrap-icons";
const Pagination = ({ pageNo, setPageNo, noOfPages }) => {
  const [activepage, setActivePage] = useState(pageNo);
  useEffect(() => {
    setActivePage(pageNo);
  });
  const getPagestoDisplay = () => {
    const totalPages = Array.from({ length: noOfPages }, (_, i) => i + 1);
    if (noOfPages <= 5) {
      return totalPages;
    }

    const startPage = Math.max(1, Math.min(activepage - 4, noOfPages - 6));
    const endPage = Math.min(noOfPages, startPage + 6);

    return totalPages.slice(startPage - 1, endPage);
  };

  function handlePage(pn) {
    setPageNo(pn);
    setActivePage(pn);
  }
  function handlePageButton(intent) {
    if (intent === "previous" && pageNo > 1) {
      setPageNo((prev) => prev - 1);
      setActivePage(pageNo - 1);
    }
    if (intent === "next" && pageNo < noOfPages) {
      setPageNo((prev) => prev + 1);
      setActivePage(pageNo + 1);
    }
  }
  const pagesToDisplay = getPagestoDisplay();
  return noOfPages <= 1 ? (
    <></>
  ) : (
    <div className="pagination">
      <ul>
        {activepage !== 1 && (
          <li onClick={() => handlePageButton("previous")}>
            <Icons.ArrowLeftCircle className="actionbutton" size={26} />
          </li>
        )}
        {pagesToDisplay.map((m, i) => (
          <li
            onClick={() => handlePage(m)}
            className="pages"
            id={activepage === m ? "active" : ""}
            key={i + m}
          >
            {m}
          </li>
        ))}
        {activepage !== noOfPages && (
          <li onClick={() => handlePageButton("next")}>
            <Icons.ArrowRightCircle className="actionbutton" size={26} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
