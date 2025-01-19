import Spinner from "@/components/UI/spinner/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="loading position-fixed d-flex justify-content-center align-items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
