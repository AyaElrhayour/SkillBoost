import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts } from "../features/postsSlice";
import Cookies from "js-cookie";
import BlogCard from "../components/BlogCard";
import { useEffect } from "react";
import AdminNavbar from "../shared/Navbars/AdminNavbar";
import Sidebar from "../shared/Sidebar/Sidebar";

const MyPosts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const userId = Cookies.get("user_id");
  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const userPosts =
    posts && posts.filter((post) => post.user_id === parseInt(userId));
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className="flex flex-col gap-6 mx-16 bg-lightBlue-600 md:pt-32  pt-12">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl font-semibold">My Posts</h1>
            <p></p>
          </div>
          {posts && posts.map((post) => <BlogCard onDeletePost={handleDeletePost} show={false} key={post.id} post={post} />)}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
