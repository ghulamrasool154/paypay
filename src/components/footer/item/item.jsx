import Link from "next/link";
import React from "react";
import "./item.css";

const Item = ({ link }) => {
  return (
    <li className="footer-links">
      <Link
        href={link.link}
        className="item font-lato fw-normal text-decoration-none"
      >
        {link.title}
      </Link>
    </li>
  );
};

export default Item;
