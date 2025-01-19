import React, { useEffect, useState } from "react";
import Spinner from "../UI/spinner/spinner";
import "./abs-accordian.css";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";

const AbsAccordian = () => {
  const [loading, setLoading] = useState(false);
  const [accData1, setAccData1] = useState([]);
  const [accData2, setAccData2] = useState([]);
  const [accData3, setAccData3] = useState([]);
  const [accData4, setAccData4] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api-site.paypayhub.com/main/v1/faq/question/quick-access`)
      .then((resp) => {
        console.log(resp.data);
        setAccData1(resp.data[0]);
        setAccData2(resp.data[1]);
        setAccData3(resp.data[2]);
        setAccData4(resp.data[3]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <>
        {loading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : (
          <div className="accordian_wrapper">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {accData1?.title}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {ReactHtmlParser(accData1?.message)}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {accData2?.title}
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {ReactHtmlParser(accData2?.message)}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {accData3?.title}
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {ReactHtmlParser(accData3?.message)}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    {accData4?.title}
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {ReactHtmlParser(accData4?.message)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default AbsAccordian;
