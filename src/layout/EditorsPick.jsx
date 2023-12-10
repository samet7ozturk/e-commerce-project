import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/editors-pick-1.png";
import img2 from "../assets/editors-pick-2.png";
import img3 from "../assets/editors-pick-3.png";
import img4 from "../assets/editors-pick-4.png";

const EditorsPick = () => {
  return (
    <main className="h-[770px] bg-[#FAFAFA]">
      <div className="flex flex-col items-center pt-20 pb-12">
        <h2 className="text-[#252B42] text-2xl font-bold">EDITOR'S PICK</h2>
        <p className="text-[#737373] text-sm font-normal">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="relative">
          <img src={img1} alt="Image 1" className="w-full" />
          <div className="absolute w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
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
          <img src={img2} alt="Image 2" className="w-full" />
          <div className="absolute w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
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
            <img src={img3} alt="Image 3" className="w-full" />
            <div className="absolute w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
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
            <img src={img4} alt="Image 4" className="w-full" />
            <div className="absolute  w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
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
