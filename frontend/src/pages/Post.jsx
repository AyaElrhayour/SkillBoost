import { useParams } from "react-router-dom";
import Sidebar from "../shared/Sidebar/Sidebar";
import AdminNavbar from "../shared/Navbars/AdminNavbar";
import BlogCard from "../components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectPost } from "../features/postsSlice";

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.selectedPost);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("post id" + id);
    dispatch(selectPost(id));
  }, [id, dispatch]);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className="flex flex-col gap-6 mx-16 bg-lightBlue-600 md:pt-32  pt-12">
          {post && <BlogCard post={post} />}
        </div>
      </div>
    </>
  );
};

export default Post;
