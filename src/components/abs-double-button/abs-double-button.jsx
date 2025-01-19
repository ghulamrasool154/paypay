import React from "react";
import "./abs-double-button.css";
import { useRouter } from "next/navigation";
const AbsDoubleButton = () => {
  const router = useRouter();
  return (
    <div className="abs_baxiar_web_wrapper w-100">
      <button
        className="font-lato abs_baxiar_app"
        onClick={() => window.open("https://download.paypayhub.com", "_blank")}
      >
        Baixar o App
      </button>
      <button
        className="font-lato abs_pague_web"
        onClick={() => router.push("/pagamento")}
      >
        Pague via web
      </button>
    </div>
  );
};

export default AbsDoubleButton;
