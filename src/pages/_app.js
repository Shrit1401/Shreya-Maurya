import "@/styles/globals.css";
import SwiperCore, { Autoplay } from "swiper";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

export default function App({ Component, pageProps }) {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <CustomCursor
        targets={["a", ".project"]}
        customClass="z-10"
        dimensions={30}
        fill="#FFF"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      />
      <Component {...pageProps} />
    </div>
  );
}
