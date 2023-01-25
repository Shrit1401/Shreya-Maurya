import "@/styles/globals.css";
import SwiperCore, { Autoplay } from "swiper";

export default function App({ Component, pageProps }) {
  SwiperCore.use([Autoplay]);
  return <Component {...pageProps} />;
}
