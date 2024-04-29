import { useDispatch } from "react-redux";
import Button from "../shared/Button";
import { approvePost } from "../features/postsSlice";

const UnapprovedPostCard = ({ unapprovedPost }) => {
  const dispatch = useDispatch();
  const handleApprovePost = () => {
    dispatch(approvePost(unapprovedPost.id));
  };
  const getUserImage = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };

  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {unapprovedPost.created_at.split("T")[0]}
        </span>
        <a
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          role="button"
        >
          {unapprovedPost.topic.name}
        </a>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          role="link"
        >
          {unapprovedPost.title}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {unapprovedPost.content}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={() => handleApprovePost()}
          content={"Approve"}
          bgColor="bg-green-600"
          color="text-white"
        />

        <div className="flex items-center">
          <img
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            src={getUserImage(unapprovedPost.user.profile_pic)}
            alt="avatar"
          />
          <a
            className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
            role="link"
          >
            {unapprovedPost.user.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnapprovedPostCard;
