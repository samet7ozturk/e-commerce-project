import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../assets/slide-1.jpg";

export function Carousel1() {
  return (
    <Carousel transition={{ duration: 2 }}>
      <div className="relative">
        <img
          src={img1}
          alt="image 1"
          className="h-[calc(100vh_-_134px)] w-full object-cover"
        />
        <div className="absolute -left-0 xl:-left-[10%] inset-0 grid h-full w-full place-items-center">
          <div className="w-3/5 text-center xl:text-start xl:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-base font-bold"
            >
              SUMMER 2020
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-[40px] xl:text-6xl"
            >
              NEW COLLECTION
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 text-xl">
              We know how large objects will act, but things on a small scale.
            </Typography>
            <div className="bg-[#2DC071] w-[221px] h-[61px] cursor-pointer flex justify-center gap-2 rounded-md hover:scale-110 transition duration-200">
              <p className="flex text-white text-2xl font-bold items-center">
                SHOP NOW
              </p>
            </div>
          </div>
        </div>
      </div>
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
