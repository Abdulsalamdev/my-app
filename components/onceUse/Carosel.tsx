import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "@mantine/carousel";

export function Carosel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      maw={320}
      mx="auto"
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
