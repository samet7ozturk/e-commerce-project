import Header from "../components/Header";
import Footer from "../components/Footer";

import img1 from "../assets/about-page-1.png";
import img2 from "../assets/about-page-2.png";
import img3 from "../assets/about-page-3.png";
import svg1 from "../assets/get-quote-now-button.svg";
import svg2 from "../assets/video-button.svg";
import svg3 from "../assets/hooli.svg";
import svg4 from "../assets/lyft.svg";
import svg5 from "../assets/vector.svg";
import svg6 from "../assets/stripe.svg";
import svg7 from "../assets/aws.svg";
import svg8 from "../assets/reddit.svg";
import TeamCard from "../components/TeamCard";

const AboutPage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <div className="flex px-[10%]">
        <div className="flex flex-col w-1/2 justify-center">
          <p className="text-[#252B42] font-bold">ABOUT COMPANY</p>
          <h1 className="text-[#252B42] text-[58px] font-bold pt-8">
            ABOUT US
          </h1>
          <p className="text-[#737373] pt-8">
            We know how large objects will act, but things on a small scale
          </p>
          <div>
            <img
              src={svg1}
              alt="svg1"
              className="cursor-pointer pt-8 hover:scale-110 transition duration-200"
            />
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <img src={img1} alt="img1" />
        </div>
      </div>
      <div className="flex flex-col px-[12%] pb-12">
        <p className="text-[#E74040] text-sm pt-12">Problems trying</p>
        <div className="flex gap-8">
          <p className="text-[#252B42] text-2xl font-bold pt-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
          <p className="text-[#737373] text-sm pt-6">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex pt-20 pb-20 justify-evenly">
        <div className="flex flex-col text-center">
          <p className="text-[#252B42] text-[58px] font-bold">15K</p>
          <p className="text-[#737373] font-bold">Happy Customers</p>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-[#252B42] text-[58px] font-bold">150K</p>
          <p className="text-[#737373] font-bold">Monthly Visitors</p>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-[#252B42] text-[58px] font-bold">15</p>
          <p className="text-[#737373] font-bold">Countries Worldwide</p>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-[#252B42] text-[58px] font-bold">100+</p>
          <p className="text-[#737373] font-bold">Top Partners</p>
        </div>
      </div>
      <div className="relative flex justify-center py-28">
        <img src={img2} alt="img2" className="rounded-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2">
          <img
            src={svg2}
            alt="svg2"
            className="cursor-pointer pt-8 hover:scale-110 transition duration-150"
          />
        </div>
      </div>
      <div className="flex flex-col items-center pt-[110px] pb-[145px]">
        <h2 className="text-[#252B42] text-[40px] font-bold">Meet Our Team</h2>
        <p className="text-[#737373] text-sm pt-[12px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <TeamCard />
      </div>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-[#252B42] text-[40px] font-bold pt-[75px]">
            Big Companies Are Here
          </h2>
          <p className="text-[#737373] text-sm pt-6">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex pt-[72px] pb-32 items-center justify-evenly">
          <div>
            <img
              src={svg3}
              alt="svg3"
              className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
            />
          </div>
          <div>
            <img
              src={svg4}
              alt="svg4"
              className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
            />
          </div>
          <div>
            <img
              src={svg5}
              alt="svg5"
              className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
            />
          </div>
          <div>
            <img
              src={svg6}
              alt="svg6"
              className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
            />
          </div>
          <div>
            <img
              src={svg7}
              alt="svg7"
              className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
            />
          </div>
          <div>
            <img
              src={svg8}
              alt="svg8"
              className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#2A7CC7] flex">
        <div className="flex flex-col justify-center px-[10%]">
          <p className="text-white font-bold">WORK WITH US</p>
          <h2 className="text-white text-[40px] font-bold pt-[20px]">
            Now Let’s grow Yours
          </h2>
          <p className="text-white text-sm pt-[20px]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <div className="border rounded-lg w-[130px] h-[52px] mt-6 flex items-center justify-center hover:scale-110 cursor-pointer transition duration-300">
            <p className="text-white text-sm font-bold">Button</p>
          </div>
        </div>
        <div>
          <img src={img3} alt="img3" className="" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
