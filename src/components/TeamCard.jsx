import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../assets/team-1-user-1.jpg";
import img2 from "../assets/team-1-user-2.jpg";
import img3 from "../assets/team-1-user-3.jpg";

const TeamCard = () => {
  return (
    <main className="flex items-center gap-8 pt-28">
      <div className="hover:scale-110 transition duration-300">
        <div>
          <img src={img1} alt="img1" className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#252B42] font-bold pt-8">Username</p>
          <p className="text-[#737373] text-sm font-bold pt-4">Profession</p>
        </div>
        <div className="flex gap-2 text-[#23A6F0] justify-center pt-[12px]">
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
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="hover:scale-110 transition duration-300">
        <div>
          <img src={img2} alt="img2" className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#252B42] font-bold pt-8">Username</p>
          <p className="text-[#737373] text-sm font-bold pt-4">Profession</p>
        </div>
        <div className="flex gap-2 text-[#23A6F0] justify-center pt-[12px]">
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
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="hover:scale-110 transition duration-300">
        <div>
          <img src={img3} alt="img3" className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#252B42] font-bold pt-8">Username</p>
          <p className="text-[#737373] text-sm font-bold pt-4">Profession</p>
        </div>
        <div className="flex gap-2 text-[#23A6F0] justify-center pt-[12px]">
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
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default TeamCard;
