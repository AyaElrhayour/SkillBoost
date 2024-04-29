import BlogCard from "./BlogCard";
import Meet from "../assets/meet.png";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import PostModal from "./PostModal";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts } from "../features/postsSlice";

const RelatedBlog = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
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
        {posts && posts.map((post) => <BlogCard onDeletePost={handleDeletePost} key={post.id} post={post} />)}
      </div>
      {open ? <PostModal open={open} setOpen={setOpen} /> : ""}
    </div>
  );
};
export default RelatedBlog;
