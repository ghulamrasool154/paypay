import { payemetOptions } from "@/data/pagemento";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SelectOption = ({ type }) => {
  return (
    <ul className="list-unstyled m-0 d-flex gap-3 right-form-select-options mb-4 flex-column flex-sm-row">
      {payemetOptions.map((option, index) => {
        let isActive =
          option.type === type ? "is-active-green " : "disable-green ";
        return (
          <li key={index} className="w-100 right-form-select-option">
            <Link
              href={option.link}
              className={`${isActive} d-flex align-items-center justify-content-center w-100 text-decoration-none`}
            >
              <Image
                width={30}
                height={30}
                src={option.src}
                alt={option.title}
              />
              <h2 className="ms-2 mb-0 fw-semibold font-lato opti-title">
                {option.title}
              </h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SelectOption;
