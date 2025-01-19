"use client";
import React, { useEffect, useState } from "react";
import "./ajuda.css";
import AbsAccordian from "@/components/abs-accordian/abs-accordian";
import ContactInfo from "@/components/contact-info/contact-info";
import axios from "axios";
import AbsHelpCards from "@/components/abs-help-cards/abs-help-cards";
const AjudaPage = () => {
  const [accData, setAccData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSerachedData] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [icons, setIcons] = useState([
    {
      icons: "/assets/images/ajuda/user.png",
    },
    {
      icons: "/assets/images/ajuda/plan.png",
    },
    {
      icons: "/assets/images/ajuda/payment.png",
    },
    {
      icons: "/assets/images/ajuda/barcode.png",
    },
    {
      icons: "/assets/images/ajuda/plus.png",
    },
    {
      icons: "/assets/images/ajuda/sheild.png",
    },
  ]);
  const _handleSlug = (e) => {
    let newName = e.slug;
    router.push(`/help/category/${newName}`);
  };
  const _handleSerachInput = (e) => {
    setSearchInput(e.target.value);
  };
  const _handleKeyFunction = (e) => {
    if (e.key === "Enter") {
      console.log(searchInput, "seach input");
      axios
        .get(
          `https://api-site.paypayhub.com/main/v1/faq/question/search?term=${searchInput}`
        )
        .then((resp) => {
          console.log(resp);
          setSerachedData(resp.data);
          setToggleBtn(true);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    axios
      .get(`https://api-site.paypayhub.com/main/v1/faq/category`)
      .then((resp) => {
        setCardData(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const _handleDynamiclist = (e, name) => {
    console.log(e, "all value");
    let newName = e.slug;
    const formattedSlug = newName.replace(/\s+/g, "-");
    let newFormatedSlug = formattedSlug.toLowerCase();
    router.push(`/help/question/${newName}`);
  };
  return (
    <>
      <section className="help_wrapper">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="help_top_section">
                <p>Central de Ajuda PayPay</p>
                <h5>Como podemos ajudar?</h5>
                <div className="help_area_input">
                  <input
                    className="form-control "
                    placeholder="Pesquisar"
                    value={searchInput}
                    onChange={_handleSerachInput}
                    onKeyDown={(e) => _handleKeyFunction(e)}
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {toggleBtn ? (
        <>
          <div className="container-xxl">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                {searchedData.length > 0 ? (
                  <div className="tabs_heading_results">
                    <h5>Resultados</h5>
                  </div>
                ) : (
                  ""
                )}

                {searchedData.length > 0 ? (
                  searchedData.map((e, idx) => {
                    return (
                      <>
                        <AbsListingCategory
                          item={e}
                          key={idx}
                          headingName={e.title}
                          _handleDynamiclist={(e) => _handleDynamiclist(e)}
                        />
                      </>
                    );
                  })
                ) : (
                  <>
                    <p className="error_msg_api">
                      Nenhum resultado encontrado. Por favor, verifique!
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <section className="second_wrapper">
            <div className="container-xxl">
              <div className="row help_second_section justify-content-center">
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <div className="row justify-content-center">
                    {cardData.map((e, idx) => {
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                          <AbsHelpCards
                            item={e}
                            icons={icons[idx].icons}
                            heading={e.title}
                            para={e.subtitle}
                            _handleSlug={() => _handleSlug(e)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="third_wrapper">
            <div className="container-xxl">
              <div className="row justify-content-center ">
                <div className="col-lg-9">
                  <div className="access_">
                    <h5>Acesso rápido</h5>
                  </div>
                  <AbsAccordian />
                </div>
              </div>

              <ContactInfo />
            </div>
          </section>
        </>
      )}
      {searchedData.length > 0 ? (
        <>
          <div className="container-xxl">
            <ContactInfo />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AjudaPage;
