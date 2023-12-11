import svg1 from "../assets/clock.svg";
import svg2 from "../assets/statistics.svg";
import svg3 from "../assets/right-arrow.svg";

const PostCard = () => {
  return (
    <main className="w-[349px] px-[7%] border border-[#EFEFEF] shadow-lg">
      <div className="flex flex-col">
        <div className="flex gap-4 pt-6 pb-[10px]">
          <p className="text-[#737373] cursor-pointer hover:text-[#8EC2F2] text-xs">
            Google
          </p>
          <p className="text-[#737373] cursor-pointer hover:text-[#8EC2F2] text-xs">
            Trending
          </p>
          <p className="text-[#737373] cursor-pointer hover:text-[#8EC2F2] text-xs">
            New
          </p>
        </div>
        <h2 className="text-[#252B42] text-xl pb-[10px]">
          Loudest à la Madison #1 (L'integral)
        </h2>
        <p className="text-[#737373] text-sm pb-4">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between pt-[10px]">
          <div className="flex gap-2">
            <img src={svg1} alt="svg1" />
            <p className="text-[#737373] text-xs">22 April 2021</p>
          </div>
          <div className="flex gap-2">
            <img src={svg2} alt="svg2" />
            <p className="text-[#737373] text-xs">10 comments</p>
          </div>
        </div>
        <div className="flex gap-4 mt-[26px] mb-[36px] cursor-pointer">
          <p className="text-[#737373] text-sm font-bold hover:underline">
            Learn More
          </p>
          <img src={svg3} alt="svg3" />
        </div>
      </div>
    </main>
  );
};

export default PostCard;
