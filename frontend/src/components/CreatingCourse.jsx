import { useDispatch, useSelector } from "react-redux";
import Button from "../shared/Button";
import Teachercard from "./Teachercard";
import { useEffect, useState } from "react";
import {  fetchCourses } from "../features/coursesSlice";
import CoursePopup from "./CoursePopup";

const CreatingCourse = () => {
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [addOpen, open]);


  return (
    <div className="flex flex-col gap-8" id="courses">
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg text-[#333333] ">Your Courses </h2>
        <Button
          content={"Add New Course"}
          bgColor="bg-[#7FB5FF]"
          color="text-white"
          onClick={() => setAddOpen(true)}
        />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center pt-4">
        {courses &&
          courses.map((course) => (
            <Teachercard key={course.id} course={course} />
          ))}
      </div>
      {addOpen ? <CoursePopup open={addOpen} setOpen={setAddOpen} /> : ""}
        
    </div>

    
  );
};
export default CreatingCourse;
