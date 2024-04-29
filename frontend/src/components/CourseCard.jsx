import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const getImage = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };
  return (
    <div className="flex flex-col bg-white gap-4 items-stretch w-1/4 rounded-[10px] [box-shadow:_0.3em_0.3em_1em_rgba(0,0,0,0.1)] px-4 py-6">
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${getImage(course.cover)})` }}
      ></div>

      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between p-4">
          <h2 className="text-[#252641] text-lg font-semibold">
            {course.title}
          </h2>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            role="button"
          >
            {course.level}
          </a>
        </div>

        <div className="flex justify-left items-center gap-4 p-4">
          <img
            src={getImage(course.teacher.profile_pic)}
            className="rounded-full w-12 h-12"
            alt=""
          />
          <h3 className="font-semibold text-xl">{course.teacher.name}</h3>
        </div>
        <p className="text-justify">{course.description}</p>
        <div className="flex justify-between p-4">
          <Button
            onClick={() => navigate(`/chapters/${course.id}`)}
            bgColor="bg-blue-600"
            color="text-white"
            content={"Start Course"}
          />
          <span>{course.chapters.length} Chapters</span>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
