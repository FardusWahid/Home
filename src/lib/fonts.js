import { Poppins, Oswald, Francois_One, Space_Mono, Roboto} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const one = Francois_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const space = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});
