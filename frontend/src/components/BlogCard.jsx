import Teacher from "../assets/teacher.png";
import Account from "../shared/Account";
import Eye from "../assets/eyeIcon.png";
import { useNavigate } from "react-router-dom";
const BlogCard = ({ CoverImg = Teacher, post }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white gap-4 items-stretch w-1/3 rounded-[10px] [box-shadow:_0.3em_0.3em_1em_rgba(0,0,0,0.1)] px-4 py-6">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${CoverImg})` }}
      ></div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-[#252641] text-lg font-semibold">{post.title}</h2>
        <Account />
        <p>{post.content}</p>
        <div className="flex items-center">
          <img src={Eye} alt="" />
          <span
            className="cursor-pointer"
            onClick={() => navigate(`/post/${post.id}`)}
          >
            Read more
          </span>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
