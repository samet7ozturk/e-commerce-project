import img1 from "../assets/featured-posts-1.png";
import img2 from "../assets/featured-posts-2.png";
import img3 from "../assets/featured-posts-3.png";
import PostCard from "../components/PostCard";

const FeaturedPost = () => {
  return (
    <main className="flex flex-col px-[10%] pb-28">
      <div className="flex flex-col items-center pt-28 pb-6">
        <p className="text-[#23A6F0] text-sm font-bold pb-2">Practice Advice</p>
        <h2 className="text-[#252B42] text-[40px] font-bold pb-2">
          Featured Posts
        </h2>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 pt-14">
        <div className="hover:scale-110 transition duration-300">
          <img src={img1} alt="img1" />
          <PostCard />
        </div>
        <div className="hover:scale-110 transition duration-300">
          <img src={img2} alt="img2" />
          <PostCard />
        </div>
        <div className="hover:scale-110 transition duration-300">
          <img src={img3} alt="img3" />
          <PostCard />
        </div>
      </div>
    </main>
  );
};

export default FeaturedPost;
