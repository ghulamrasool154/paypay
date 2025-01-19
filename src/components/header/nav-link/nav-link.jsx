"use client";
import Link from "next/link";
import React from "react";
import "./nav-link.css";
import { usePathname } from "next/navigation";
const NavLink = ({ name, href, handleClosed }) => {
  const path = usePathname();
  let isActive = path === href ? "is-active-header" : "fw-medium";
  return (
    <>
      {handleClosed ? (
        <li className="item" onClick={handleClosed}>
          <Link
            href={href}
            className={`nav-item font-lato d-block text-decoration-none ${isActive}`}
          >
            {name}
          </Link>
        </li>
      ) : (
        <li className="item">
          <Link
            href={href}
            className={`nav-item font-lato d-block text-decoration-none ${isActive}`}
          >
            {name}
          </Link>
        </li>
      )}
    </>
  );
};

export default NavLink;
