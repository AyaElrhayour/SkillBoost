import BgHero from "../assets/courseshero.png";
import blueLogo from "../assets/blue_logo.png";
import Navigation from "../shared/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTopics } from "../features/topicSlice";
const CourseHero = ({ onSelectLevel, onSelectTopic, onSelectTitle }) => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.topics);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleLevelChange = (e) => {
    const level = e.target.value;
    setSelectedLevel(level);
    onSelectLevel(level); 
  };


  const handleTopicChange = (e) => {
    const topic = e.target.value;
    setSelectedTopic(topic);
    onSelectTopic(topic); 
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setSelectedTitle(title);
    onSelectTitle(title); 
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(fetchTopics());
  }, [selectedTopic]);

  return (
    <div className="bg-[#EEF5FF]">
      <Navigation
        logoSrc={blueLogo}
        textColor="text-[#001D6E]"
        margin="ml-80 mt-6 mb-8"
        showButtons={false}
      />
      <img src={BgHero} alt="" className="w-full" />
      <div className="relative bottom-44 left-64">
        <div className="flex flex-col items-stretch gap-3 ">
          <form className="max-w-5xl ">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                name="title"
                value={selectedTitle}
                onChange={handleTitleChange}
                className="block w-full p-4 pr-16 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-50 dark:placeholder-gray-400"
                placeholder="Find your course"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#49BBBD] font-medium rounded-full text-sm px-8 py-2 "
              >
                Search
              </button>
            </div>
          </form>

          <div className="max-w-5xl">
            <div className="flex gap-2">
              <select
                id="topic"
                name="topic_id"
                value={selectedTopic}
                onChange={handleTopicChange}
                className="block w-1/4 p-4 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-50 dark:placeholder-gray-400"
              >
                <option defaultValue={""}>Select topic</option>
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.name}
                  </option>
                ))}
              </select>

              <select
                id="level"
                name="level"
                value={selectedLevel}
                onChange={handleLevelChange}
                className="block w-1/4 p-4 ps-10 text-sm text-gray-900 border border-white rounded-full bg-gray-50 dark:placeholder-gray-400"
              >
                <option defaultValue={""}>Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="proficient">Proficient</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseHero;
