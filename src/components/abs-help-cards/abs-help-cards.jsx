import React from "react";
import "./abs-help-cards.css";
import Image from "next/image";
const AbsHelpCards = (props) => {
  const { icons, heading, para, _handleSlug, item } = props;
  return (
    <div className="cards_wrapper" onClick={() => _handleSlug(item)}>
      <Image src={icons} alt="" />
      <h4>{heading}</h4>
      <p>{para}</p>
    </div>
  );
};

export default AbsHelpCards;
