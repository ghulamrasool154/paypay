import { Lato, Poppins, Manrope, Lexend_Deca } from "next/font/google";

export const fontLato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const fontManrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
});
export const fontPoppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const fontLexendDeca = Lexend_Deca({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend-deca",
  subsets: ["latin", "vietnamese"],
});
