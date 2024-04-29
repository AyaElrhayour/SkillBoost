import { useParams } from "react-router-dom";
import Sidebar from "../shared/Sidebar/Sidebar";
import AdminNavbar from "../shared/Navbars/AdminNavbar";
import BlogCard from "../components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createComment,
  deleteComment,
  selectPost,
} from "../features/postsSlice";
import Button from "../shared/Button";
import Cookies from "js-cookie";
import { Dropdown } from "flowbite-react";

const Post = () => {
  const { id } = useParams();
  const userId = Cookies.get("user_id");
  const post = useSelector((state) => state.posts.selectedPost);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    content: "",
    post_id: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const getUserImage = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };

  const addComment = () => {
    dispatch(createComment(inputs));
  };

  const handleDeleteComment = (commentID) => {
    dispatch(deleteComment(commentID));
  };
  useEffect(() => {
    dispatch(selectPost(id));
  }, [id, dispatch]);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className="flex flex-col gap-6 mx-16 bg-lightBlue-600 md:pt-32  pt-12">
          {post && <BlogCard show={false} post={post} single={true} />}
          <div className="flex justify-center gap-4 items-center p-4">
            <img
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src={post && getUserImage(post.user.profile_pic)}
              alt="avatar"
            />

            <input
              type="text"
              name="content"
              onChange={handleChange}
              placeholder="Type your comment"
              className="block border-2 mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />

            <Button
              onClick={() => addComment()}
              bgColor="bg-blue-600"
              color="text-white"
              content={"Post"}
            />
          </div>

          <div className="flex flex-col gap-4 mt-8">
            {post &&
              post.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex justify-left gap-4 items-center p-4"
                >
                  <img
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src={
                      post &&
                      comment &&
                      comment.user &&
                      getUserImage(comment.user.profile_pic)
                    }
                    alt="avatar"
                  />
                  <p className="text-justify">{comment.content}</p>
                  {comment.user_id == userId ? (
                    <Dropdown className="float-right" inline label="">
                      <Dropdown.Item>
                        <span
                          onClick={() => handleDeleteComment(comment.id)}
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </span>
                      </Dropdown.Item>
                    </Dropdown>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
