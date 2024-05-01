import { useDispatch } from "react-redux";
import Button from "../shared/Button";
import { deleteChapter } from "../features/coursesSlice";
import { useNavigate } from "react-router-dom";

const ChapterCard = ({ chapter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteChapter = (id) => {
    dispatch(deleteChapter(id))
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {chapter.created_at.split("T")[0]}
        </span>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          index="0"
          role="link"
        >
          {chapter.title}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {chapter.content}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span
          onClick={() => navigate(`/chapter/${chapter.id}`)}
          className="text-blue-600 dark:text-blue-400 hover:underline"
          tabIndex="0"
          role="link"
        >
          Read more
        </span>

        <div className="flex items-center">
          <Button
            content={"Delete"}
            color="text-white"
            bgColor="bg-red-700"
            onClick={() => handleDeleteChapter(chapter.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
