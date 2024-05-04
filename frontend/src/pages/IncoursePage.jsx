import { useDispatch, useSelector } from "react-redux";
import { selectCourse } from "../features/coursesSlice";
import { useParams } from "react-router-dom";
import ChapterCard from "../components/ChapterCard";
import { useEffect, useState } from "react";
import Navigation from "../shared/Navigation";
import blueLogo from "../assets/blue_logo.png";

const IncoursePage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const course = useSelector((state) => state.courses.selectedCourse);

  useEffect(() => {
    dispatch(selectCourse(id));
  }, []);

  const getImage = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };

  return (
    <>
      <Navigation
        logoSrc={blueLogo}
        textColor="text-[#001D6E]"
        margin="ml-80 "
        showButtons={false}
      />

      {course && (
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${getImage(course.cover)})` }}
        >
          <div className="relative  py-12  flex flex-col gap-4 bg-black bg-opacity-50">
            <h1 className="text-5xl text-center text-white font-bold">
              {course.title}
            </h1>
            <p className="text-xl text-center text-white font-semibold">
              {course.topic ? course.topic.name : "N/A"}| {course.level}
            </p>
            <div className="flex justify-center items-center gap-4 pb-1 ">
              <img
                src={getImage(course.teacher.profile_pic)}
                className="rounded-full w-12 h-12"
                alt=""
              />
              <h3 className="font-semibold text-white text-xl">
                {course.teacher.name}
              </h3>
            </div>
          </div>
        </div>
      )}

      <span className="relative  top-10 left-20 text-2xl font-semibold text-blue-400 ">
        {course && course.chapters ? course.chapters.length : 0} Chapters
      </span>

      <div className=" grid gap-4 mx-12 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center pt-8">
        {course && course.chapters && (
          course.chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))
        )}
      </div>
    </>
  );
};

export default IncoursePage;