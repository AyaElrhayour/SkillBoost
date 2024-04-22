import BlogCard from "./BlogCard";
import Meet from "../assets/meet.png";

const RelatedBlog = () => {
  return (
  <div className="flex flex-col justify-center gap-6 py-8 bg-[#E2F0FF]">
    <div className="flex justify-around gap-[40rem]">
      <h2 className="font-semibold text-lg text-[#333333] ">Related Blog </h2>
      <a href="" className="text-[#7FB5FF] font-semibold">see all</a>
    </div>
    <div className="flex justify-center gap-16" >
    <BlogCard />
    <BlogCard CoverImg={Meet}/>
    </div>
  </div>
     );
};
export default RelatedBlog;
