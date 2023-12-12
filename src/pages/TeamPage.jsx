import Header from "../components/Header";
import Footer from "../components/Footer";

import svg1 from "../assets/right-arrow-2.svg";
import svg2 from "../assets/try-it-free-now-button.svg";
import svg3 from "../assets/twitter-logo.svg";
import svg4 from "../assets/facebook-logo.svg";
import svg5 from "../assets/instagram-logo.svg";
import svg6 from "../assets/linkedin-logo.svg";
import img1 from "../assets/team-page-1.png";
import img2 from "../assets/team-page-2.png";
import img3 from "../assets/team-page-3.png";
import img4 from "../assets/team-page-4.png";
import img5 from "../assets/team-page-5.png";
import TeamCard from "../components/TeamCard";

const TeamPage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <div className="flex flex-col items-center ">
        <p className="text-[#737373] font-bold pt-14">WHAT WE DO</p>
        <p className="text-[#252B42] text-[58px] font-bold pt-[12px]">
          Innovation tailored for you
        </p>
        <div className="flex flex-row gap-4 pt-6 pb-16">
          <p className="text-[#252B42] text-sm font-bold">Home</p>
          <img src={svg1} alt="svg1" />
          <p className="text-[#BDBDBD] text-sm font-bold">Shop</p>
        </div>
      </div>
      <div className="flex gap-2">
        <img src={img1} alt="img1" className="cursor-pointer" />
        <div className="flex flex-col gap-2">
          <img src={img2} alt="img2" className="cursor-pointer" />
          <img src={img3} alt="img3" className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2">
          <img src={img4} alt="img4" className="cursor-pointer" />
          <img src={img5} alt="img5" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col items-center pt-28 pb-[137px]">
        <h1 className="text-[#252B42] text-[40px] font-bold">Meet Our Team</h1>
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <div className="flex flex-col items-center pt-20 pb-[90px]">
        <h2 className="text-[#252B42] text-[40px] font-bold">
          Start your 14 days free trial
        </h2>
        <p className="text-[#737373] text-sm pt-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <div className="pt-8">
          <img
            src={svg2}
            alt="svg2"
            className="cursor-pointer hover:scale-110 transition duration-200"
          />
        </div>
        <div className="flex gap-4 pt-10">
          <img src={svg3} alt="svg3" className="cursor-pointer" />
          <img src={svg4} alt="svg4" className="cursor-pointer" />
          <img src={svg5} alt="svg5" className="cursor-pointer" />
          <img src={svg6} alt="svg6" className="cursor-pointer" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TeamPage;
