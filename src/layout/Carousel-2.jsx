import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/slide-1.jpg";

export function Carousel2() {
  return (
    <Carousel transition={{ duration: 2 }}>
      <img
        src={img1}
        alt="image 1"
        className="h-[calc(100vh_-_134px)] w-full object-cover"
      />
      <img
        src={img1}
        alt="image 2"
        className="h-[calc(100vh_-_134px)] w-full object-cover"
      />
      <img
        src={img1}
        alt="image 3"
        className="h-[calc(100vh_-_134px)] w-full object-cover"
      />
    </Carousel>
  );
}
