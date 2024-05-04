import { useState } from "react";
import CourseCategories from "../components/CourseCategories";
import CourseHero from "../components/CourseHero";
import CourseOnline from "../components/CourseOnline";
import Nextlesson from "../components/Nextlesson";
import Footer from "../shared/Footer";

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
  };
  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };
  const handleSelectTitle = (title) => {
    setSelectedTitle(title);
  };
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <CourseHero
        onSelectLevel={handleSelectLevel}
        onSelectTopic={handleSelectTopic}
        onSelectTitle={handleSelectTitle}
      />
      <Nextlesson
        selectedLevel={selectedLevel}
        selectedTopic={selectedTopic}
        selectedTitle={selectedTitle}
      />
      <CourseCategories />
      <CourseOnline />
      <Footer />
    </div>
  );
};
export default Courses;
