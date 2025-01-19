import Image from "next/image";
import React from "react";

const ModelBody = ({ children, title, src, icontype }) => {
  let types = icontype ? "alert-icon" : "whats-icon";
  return (
    <main className="code-body">
      <div
        className={`${types} icons mx-auto d-flex justify-content-center align-items-center`}
      >
        <Image src={src} alt="scanner" width={25} height={25} />
      </div>

      <h2 className="font-lato fw-bold code-title m-0">{title}</h2>
      {children}
    </main>
  );
};

export default ModelBody;
