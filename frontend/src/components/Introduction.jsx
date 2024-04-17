import { Card } from "flowbite-react";
import student from "../assets/student.png";
import teacher from "../assets/teacher.png";
import Button from "../shared/Button";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-8">
      <h2 className="text-3xl font-bold text-center">
        <span className="text-[#001D6E]">What is </span>
        <span className="text-[#7FB5FF]">SkillBoost</span>
      </h2>
      <p className="text-center text-wrap w-2/4">
        SkillBoost is a platform that allows educators to create online classes
        where by they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>
      <div className="flex justify-center items-center gap-16">
        <Card className="max-w-sm relative box-shadow:none border-none w-80 h-56 bg-cover bg-center" style={{backgroundImage: 'url(src/assets/teacher.png)'}}>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h4 className="text-white font-semibold">For Instructors</h4>
              <div className="flex justify-center mt-2">
                <Button
                  color="text-white"
                  bgColor="trasparent"
                  border="border border-1 border-white"
                  content={"Start a class today"}
                />
              </div>
            </div>
          </div>
        </Card>
        <Card className="max-w-sm relative box-shadow:none border-none w-80 h-56 bg-cover bg-center" style={{backgroundImage: 'url(src/assets/student.png)'}}>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h4 className="text-white font-semibold">For Students</h4>
              <div className="flex justify-center mt-2">
                <Button
                  color="text-white"
                  bgColor="bg-[#7FB5FF]"
                  content={"Enter Access Code"}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Introduction;
