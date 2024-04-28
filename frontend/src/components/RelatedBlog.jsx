import BlogCard from "./BlogCard";
import Meet from "../assets/meet.png";
import Cookies from "js-cookie";
import { useState } from "react";
import PostModal from "./PostModal";

const RelatedBlog = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center gap-6 py-8 bg-[#E2F0FF]">
      <div className="flex justify-around gap-[40rem]">
        <h2 className="font-semibold text-lg text-[#333333] ">Related Blog </h2>
        {Cookies.get("token") ? (
          <p
            onClick={() => setOpen(true)}
            className="text-[#7FB5FF] font-semibold cursor-pointer"
          >
            add a post
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-center gap-16">
        <BlogCard />
        <BlogCard CoverImg={Meet} />
      </div>
      {open ? <PostModal open={open} setOpen={setOpen} /> : ""}
    </div>
  );
};
export default RelatedBlog;
