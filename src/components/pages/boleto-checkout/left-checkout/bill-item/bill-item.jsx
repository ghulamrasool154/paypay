"use client";
import React, { useState } from "react";
import "./bill-item.css";
import BillItemDetail from "../bill-item-detail/bill-item-detail";
const BillItem = ({ element }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpenDetail = () => setIsOpened(!isOpened);

  const rotate = isOpened ? "rotate" : "no";

  return (
    <>
      <li className="d-flex justify-content-between align-items-center bil-list">
        <div className="item-1 w-100">
          <p className="font-lato fw-medium m-0 td d-inline-block status-item">
            <span className={`d-inline-block ${element.status}`}></span>
            {element.status}
          </p>
        </div>
        <div className="item-2 w-100">
          <p className="font-lato fw-medium m-0 td">
            {element.beneficiaryName}
          </p>
        </div>
        <div className="item-3 w-100">
          <p className="font-lato fw-medium m-0 td">{element.dueDate}</p>
        </div>
        <div className="item-4 w-100">
          <p className="font-lato fw-medium m-0 td">
            <span className="fw-semibold">R$ {element.value}</span>
          </p>
        </div>
        <div className="item-5 w-100">
          <div className="d-flex align-items-center justify-content-center gap-4">
            <div className="delete-icons cursor-pointer">
              <i className="fa-regular fa-trash-can"></i>
            </div>
            <div
              className={`down-arrwo cursor-pointer ${rotate}`}
              onClick={handleOpenDetail}
            >
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </li>
      {isOpened && <BillItemDetail element={element} />}
    </>
  );
};

export default BillItem;
