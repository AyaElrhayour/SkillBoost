import CourseCard from "./CourseCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourses, getByLevel, getByTitle, getByTopic } from "../features/coursesSlice";

const Nextlesson = ({ selectedLevel, selectedTopic, selectedTitle }) => {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedLevel) {
      dispatch(getByLevel(selectedLevel));
    } else if (selectedTopic) {
      dispatch(getByTopic(selectedTopic));
    } else if(selectedTitle) {
      dispatch(getByTitle(selectedTitle))
    }else {
      dispatch(fetchCourses());
    }
  }, [selectedLevel, selectedTopic, selectedTitle]);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-around gap-[40rem]">
        <h2 className="font-semibold text-lg text-[#333333] ">
          Ready for your next lesson?
        </h2>
      </div>
      <div className="flex gap-12 justify-center">
        {courses &&
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </div>
  );
};
export default Nextlesson;
