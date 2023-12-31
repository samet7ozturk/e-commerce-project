import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/editors-pick-1.png";
import img2 from "../assets/editors-pick-2.png";
import img3 from "../assets/editors-pick-3.png";
import img4 from "../assets/editors-pick-4.png";
import img5 from "../assets/editors-pick-mobile-1.png";
import img6 from "../assets/editors-pick-mobile-2.png";
import img7 from "../assets/editors-pick-mobile-3.png";
import img8 from "../assets/editors-pick-mobile-4.png";

const EditorsPick = () => {
  return (
    <main className="bg-[#FAFAFA]">
      <div className="flex flex-col items-center pt-20 pb-12 h-1/5">
        <h2 className="text-[#252B42] text-2xl font-bold pb-2">
          EDITOR'S PICK
        </h2>
        <p className="text-[#737373] text-sm font-normal">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center pb-20 h-4/5">
        <div className="relative">
          <img src={img1} alt="img1" className="w-full hidden xl:block" />
          <img src={img5} alt="img5" className="w-full block xl:hidden" />
          <div className="absolute top-[85%] left-8 w-[32%] h-12 inset-0 flex items-center justify-center bg-white hover:scale-110 hover:drop-shadow-lg transition duration-300 hover:bg-white/80">
            <div className="text-center">
              <Link
                to="/details1"
                className="text-[#252B42] font-bold hover:underline"
              >
                MEN
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img2} alt="img2" className="w-full hidden xl:block" />
          <img src={img6} alt="img6" className="w-full block xl:hidden" />
          <div className="absolute top-[85%] left-8 w-[50%] h-12 inset-0 flex items-center justify-center bg-white hover:scale-110 hover:drop-shadow-lg transition duration-300 hover:bg-white/80">
            <div className="text-center">
              <Link
                to="/details2"
                className="text-[#252B42] font-bold hover:underline"
              >
                WOMAN
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img src={img3} alt="img3" className="w-full hidden xl:block" />
            <img src={img7} alt="img7" className="w-full block xl:hidden" />
            <div className="absolute top-[70%] left-4 w-[70%] h-12 inset-0 flex items-center justify-center bg-white hover:scale-110 hover:drop-shadow-lg transition duration-300 hover:bg-white/80">
              <div className="text-center">
                <Link
                  to="/details3"
                  className="text-[#252B42] font-bold hover:underline"
                >
                  ACCESSORIES
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={img4} alt="img4" className="w-full hidden xl:block" />
            <img src={img8} alt="img8" className="w-full block xl:hidden" />
            <div className="absolute top-[70%] left-4 w-[50%] h-12 inset-0 flex items-center justify-center bg-white hover:scale-110 hover:drop-shadow-lg transition duration-300 hover:bg-white/80">
              <div className="text-center">
                <Link
                  to="/details4"
                  className="text-[#252B42] font-bold hover:underline"
                >
                  KIDS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditorsPick;
