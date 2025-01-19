import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./contact-info.css";
const ContactInfo = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="contact_info">
            <h5>Ainda está com dúvida?</h5>
            <p>
              Caso não não tenha encontrado a resposta para sua dúvida em nossa
              Central de Ajuda, ficaremos felizes em ajudar diretamente.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center last_info_area">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="whatsapp_web text-center">
                <Image
                  src={"/assets/images/ajuda/whatsapp.png"}
                  alt=""
                  className="img-fluid"
                  width={64}
                  height={64}
                />
                <h5>+55 (48) 3199-1606</h5>
                <p>
                  ou{" "}
                  <span>
                    {" "}
                    <Link
                      href="https://wa.me/554831991606"
                      className="whatsa_app_linke"
                      target="blank"
                    >
                      clique aqui
                    </Link>
                  </span>
                  para ser direcionado
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="email text-center">
                <Image
                  src={"/assets/images/ajuda/emaiil.png"}
                  alt=""
                  className="img-fluid"
                  width={64}
                  height={64}
                />

                <Link href="mailto:contato@paypayhub.com">
                  <p>contato@paypayhub.com</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
