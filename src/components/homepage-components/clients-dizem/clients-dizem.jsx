import React from "react";
import "./clients-dize.css";
import Image from "next/image";
const ClientDizem = () => {
  return (
    <section className="clients_dizem_wrapper">
      <div className="paypay-width pad-custom-80">
        <div className="container-full">
          <div className="row ">
            <div className="col-12">
              <h4 className="font-lexend-deca clients_dizem_header">
                O que os nossos clientes dizem
              </h4>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="clients_cards">
                <div className="first_card_client">
                  <Image
                    src={"/assets/images/homepage/comas.png"}
                    alt=""
                    width={49}
                    height={49}
                  />
                  <h5 className="font-lato ">
                    <span>
                      {" "}
                      Conseguimos economizar 10% na compra das embalagens para
                      Ifood{" "}
                    </span>
                    , negociamos 6 meses de volume e pagamento no Pix, depois
                    <span> paguei o Pix em 6x na PayPay.</span> Reduzimos o CMV
                    e pagamos conforme vendemos.
                  </h5>
                  <div className="d-flex logo_section_client">
                    <Image
                      src={"/assets/images/homepage/breadPide.png"}
                      alt=""
                      height={52}
                      width={52}
                    />
                    <div className="name_and_demo">
                      <h2 className="font-poppins ">Hugo</h2>
                      <p className="font-lato">BreadPide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="clients_cards">
                <div className="first_card_client second_card_bg">
                  <Image
                    src={"/assets/images/homepage/dark_green.png"}
                    alt=""
                    width={49}
                    height={49}
                  />
                  <h5 className="font-lato ">
                    <span>
                      Todo mês economizo 16% da taxa de franquia pagando com
                      PayPay
                    </span>
                    ,no cartão, e ainda ganho milhas para viajar nas férias.
                  </h5>
                  <div className="d-flex logo_section_client">
                    <Image
                      src={"/assets/images/homepage/umas.png"}
                      alt=""
                      height={52}
                      width={52}
                    />
                    <div className="name_and_demo">
                      <h2 className="font-poppins ">Bruno</h2>
                      <p className="font-lato">Unhas Carioca</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="clients_cards">
                <div className="first_card_client">
                  <Image
                    src={"/assets/images/homepage/comas.png"}
                    alt=""
                    width={49}
                    height={49}
                  />
                  <h5 className="font-lato ">
                    <span>Economizei R$10.000 na marcenaria</span>, da minha
                    loja nova com a PayPay,
                    <span>
                      agando a vista para o fornecedor e parcelando em 12x.
                    </span>
                    Isso liberou o caixa para outros gastos.
                  </h5>
                  <div className="d-flex logo_section_client">
                    <Image
                      src={"/assets/images/homepage/eagle.png"}
                      alt=""
                      height={52}
                      width={52}
                    />
                    <div className="name_and_demo">
                      <h2 className="font-poppins ">Caio</h2>
                      <p className="font-lato">Oakberry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientDizem;
