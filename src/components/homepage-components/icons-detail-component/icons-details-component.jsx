import Image from "next/image";
import React, { useState } from "react";
import "./icons-detail-component.css";
const IconsDetailsComponent = () => {
  const [iconsDetail, iconsDetails] = useState([
    {
      icon: "/assets/images/homepage/Truck.png",
      detail: "Fornecedores",
    },
    {
      icon: "/assets/images/homepage/Two-user.png",
      detail: "Colaboradores",
    },
    {
      icon: "/assets/images/homepage/bank.png",
      detail: "Impostos",
    },
    {
      icon: "/assets/images/homepage/drop.png",
      detail: "Contas de consumo",
    },
  ]);
  return (
    <section className="icons_section_detail_wrapper ">
      <div className="paypay-width pad-custom-80">
        <div className="container-full">
          <div className="row justify-content-between first_web_section_icon_detail">
            <div className="icons-left-detail ">
              <h4 className="lexend-deca-normal pague-heading">
                Pague <br /> qualquer
                <br /> conta com <br />a PayPay
              </h4>
            </div>
            {iconsDetail.map((e, idx) => {
              return (
                <div className="col lg:col-lg-6" key={idx}>
                  <div className="icons-area d-flex align-items-center">
                    <div className="icons_wrapper">
                      <Image
                        src={e.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="img-fluid icons"
                      />
                    </div>
                    <h4 className="font-lato detail_icon">{e.detail}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row second_web_section_icon_detail">
            <div className="icons-left-detail col-12">
              <h4 className="lexend-deca-normal pague-heading">
                Pague <br /> qualquer
                <br /> conta com <br />a PayPay
              </h4>
            </div>
          </div>
          <div className="second_web_section_icon_detail w-100">
            <div className="row justify-content-between  d-flex">
              {iconsDetail.map((e, idx) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-2" key={idx}>
                    <div className="icons-area d-flex align-items-center">
                      <div className="icons_wrapper">
                        <Image
                          src={e.icon}
                          alt=""
                          width={40}
                          height={40}
                          className="img-fluid icons"
                        />
                      </div>
                      <h4 className="font-lato detail_icon">{e.detail}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconsDetailsComponent;
