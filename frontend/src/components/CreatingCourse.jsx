import Button from "../shared/Button";
import Teachercard from "./Teachercard";

const CreatingCourse = () => {
  return (
    <div className="flex flex-col gap-8" id="courses">
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg text-[#333333] ">Your Courses </h2>
        <Button content={"Add New Course"} bgColor="bg-[#7FB5FF]" color="text-white" />
        
      </div>
      <div className="flex gap-16">
        <Teachercard />
        <Teachercard />
        <Teachercard />
        <Teachercard />
      </div>
    </div>
  );
};
export default CreatingCourse;
