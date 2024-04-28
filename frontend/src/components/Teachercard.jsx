import Teacher from "../assets/teacher.png";
import Button from "../shared/Button";
import { deleteCourse } from "../features/coursesSlice";
import { useDispatch } from "react-redux";
import CoursePopup from "./CoursePopup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Teachercard = ({ CoverImg = Teacher, course }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDeleteCourse = (id) => {
    dispatch(deleteCourse(id))
      .then(() => {
        setDeleted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCourseCover = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };
  return (
    <div className="flex flex-col bg-white gap-4 items-stretch  rounded-[10px] [box-shadow:_0.3em_0.3em_1em_rgba(0,0,0,0.1)] px-4 py-6">
      <div
        className="h-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${getCourseCover(course.cover)})` }}
      ></div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-[#252641] text-m font-bold">{course.title}</h2>

        <p className="text-m font-semibold  text-[#3f4176]">
          {course.topic ? course.topic.name : "N/A"}| {course.level}
        </p>

        <p className="text-sm">{course.description}</p>

        <p
          className="text-m text-gray-400 underline cursor-pointer "
          onClick={() => navigate(`/chapters/${course.id}`)}
        >
          {" "}
          Chapters
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center pt-4">
          <Button
            content={"Edit"}
            color="text-white"
            bgColor="bg-green-300"
            onClick={() => setOpen(true)}
          />
          <Button
            content={"Delete"}
            color="text-white"
            bgColor="bg-red-700"
            onClick={() => handleDeleteCourse(course.id)}
          />
        </div>
      </div>
      {open ? (
        <CoursePopup open={open} setOpen={setOpen} course={course} />
      ) : (
        ""
      )}
    </div>
  );
};
export default Teachercard;
