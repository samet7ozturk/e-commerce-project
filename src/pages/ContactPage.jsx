import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/contact-page-1.png";

import svg1 from "../assets/submit-request-button.svg";
import svg2 from "../assets/down-arrow.svg";
import svg3 from "../assets/try-it-free-now-button.svg";

const ContactPage = () => {
  return (
    <main className=" font-montserrat">
      <Header />
      <div className="flex flex-wrap xl:flex-nowrap px-[10%]">
        <div className="flex flex-col justify-center text-center xl:text-start px-[4%]">
          <p className="text-[#252B42] font-bold">CONTACT US</p>
          <h1 className="text-[#252B42] text-[40px] xl:text-[58px] font-bold pt-8">
            Get in touch today!
          </h1>
          <p className="text-[#737373] pt-8">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="text-[#252B42] text-2xl font-bold pt-[36px]">
            Phone ; +451 215 215
          </p>
          <p className="text-[#252B42] text-2xl font-bold pt-[21px]">
            Fax : +451 215 215
          </p>
          <div className="flex items-center gap-4 text-[#252B42] pt-10 justify-center xl:justify-start">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="flex justify-end pt-16 xl:pt-0">
          <img src={img1} alt="img1" />
        </div>
      </div>
      <div className="px-[10%] bg-[#FAFAFA] xl:bg-white pt-14 xl:pt-20 pb-[70px] xl:pb-0">
        <div className="flex flex-col items-center">
          <p className="text-[#252B42] font-bold">VISIT OUR OFFICE</p>
          <h1 className="text-[#252B42] text-[40px] xl:text-[58px] font-bold pt-8">
            We help small businesses with big ideas
          </h1>
        </div>
        <div className="flex justify-center flex-col xl:flex-row">
          <div className="flex flex-col items-center py-16 w-[328px] bg-white">
            <FontAwesomeIcon
              icon={faPhone}
              className="w-[72px] h-[72px] text-[#23A6F0]"
            />
            <p className="text-[#252B42] text-sm font-bold pt-4">
              georgia.young@example.com
            </p>
            <p className="text-[#252B42] text-sm font-bold pt-2">
              georgia.young@ple.com
            </p>
            <p className="text-[#252B42] font-bold pt-4">Get Support</p>
            <img
              src={svg1}
              alt="svg1"
              className="pt-4 cursor-pointer hover:scale-110 transition duration-200"
            />
          </div>
          <div className="flex flex-col items-center py-16 w-[328px] bg-[#252B42]">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-[72px] h-[72px] text-[#23A6F0]"
            />
            <p className="text-white text-sm font-bold pt-4">
              georgia.young@example.com
            </p>
            <p className="text-white text-sm font-bold pt-2">
              georgia.young@ple.com
            </p>
            <p className="text-white font-bold pt-4">Get Support</p>
            <img
              src={svg1}
              alt="svg1"
              className="pt-4 cursor-pointer hover:scale-110 transition duration-200"
            />
          </div>
          <div className="flex flex-col items-center py-16 w-[328px] bg-white">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-[72px] h-[72px] text-[#23A6F0]"
            />
            <p className="text-[#252B42] text-sm font-bold pt-4">
              georgia.young@example.com
            </p>
            <p className="text-[#252B42] text-sm font-bold pt-2">
              georgia.young@ple.com
            </p>
            <p className="text-[#252B42] font-bold pt-4">Get Support</p>
            <img
              src={svg1}
              alt="svg1"
              className="pt-4 cursor-pointer hover:scale-110 transition duration-200"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-[76px] pb-[68px]">
        <img src={svg2} alt="svg2" />
        <p className="text-[#252B42] font-bold pt-4">
          WE Can't WAIT TO MEET YOU
        </p>
        <p className="text-[#252B42] text-[58px] font-bold pt-2">Let’s Talk</p>
        <img
          src={svg3}
          alt="svg3"
          className="pt-2 cursor-pointer hover:scale-110 transition duration-200"
        />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
