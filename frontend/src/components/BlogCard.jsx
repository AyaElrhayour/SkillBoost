import Teacher from "../assets/teacher.png";
import Cookies from "js-cookie";
import Eye from "../assets/eyeIcon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dropdown } from "flowbite-react";

const BlogCard = ({
  CoverImg = Teacher,
  post,
  show = true,
  single = false,
  onDeletePost
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = Cookies.get("user_id");
  const getUserImage = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };

  const handleDeletePost = () => {
    onDeletePost(post.id);
  };
  return (
    <div className="flex flex-col bg-white gap-4 items-stretch  rounded-[10px] [box-shadow:_0.3em_0.3em_1em_rgba(0,0,0,0.1)] px-4 py-6">
      {post.user_id == userId && !single ? (
        <Dropdown inline label="">
          <Dropdown.Item>
            <span
              onClick={handleDeletePost}
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </span>
          </Dropdown.Item>
        </Dropdown>
      ) : (
        ""
      )}

      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${getUserImage(post.img)})` }}
      ></div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-[#252641] text-lg font-semibold">{post.title}</h2>
        <div className="flex justify-left items-center gap-4 p-4">
          <img
            src={getUserImage(post.user.profile_pic)}
            className="rounded-full w-12 h-12"
            alt=""
          />
          <h3 className="font-semibold text-xl">{post.user.name}</h3>
        </div>

        <p>{post.content}</p>
        {show ? (
          <div className="flex items-center">
            <img src={Eye} alt="" />
            <span
              className="cursor-pointer"
              onClick={() => navigate(`/post/${post.id}`)}
            >
              Read more
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default BlogCard;
