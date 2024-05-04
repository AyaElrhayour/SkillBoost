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
  const { posts, loading } = useSelector((state) => state.posts);

  const approvedPosts = posts && posts.filter((post) => post.approved === true);
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
      {loading ? (
        <section class="bg-white dark:bg-gray-900 w-full">
          <div className="container px-6 py-10 mx-auto animate-pulse">
            <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

            <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="grid grid-cols-4 gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-center pt-4 px-8">
          {approvedPosts.map((post) => (
            <BlogCard
              onDeletePost={handleDeletePost}
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}

      {open ? <PostModal open={open} setOpen={setOpen} /> : ""}
    </div>
  );
};
export default RelatedBlog;
