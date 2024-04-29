import Sidebar from "../shared/Sidebar/Sidebar";
import AdminNavbar from "../shared/Navbars/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import UnapprovedPostCard from "../components/UnapprovedPostCard";
import { useEffect } from "react";
import { fetchPosts } from "../features/postsSlice";

const UnapprovedPosts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch()
  const unapprovedPosts =
    posts && posts.filter((post) => post.approved === false);

    useEffect(() => {
      dispatch(fetchPosts())
    }, [])
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className="flex flex-col gap-6 mx-16 bg-lightBlue-600 md:pt-32  pt-12">
          <h1 className="text-2xl font-semibold">Unapproved Posts</h1>
          <div className="flex flex-col gap-4">
            {unapprovedPosts &&
              unapprovedPosts.map((unnapprovedPost) => (
                <UnapprovedPostCard
                  unapprovedPost={unnapprovedPost}
                  key={unnapprovedPost.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UnapprovedPosts;
