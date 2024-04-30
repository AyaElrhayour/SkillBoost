import MyCard from "../shared/MyCard";
import design from "../assets/design.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTopics } from "../features/topicSlice";

const CourseCategories = () => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.topics);

  useEffect(() => {
    dispatch(fetchTopics())
  }, []);
  return (
    <div className="flex flex-col gap-4 mt-8 mb-16">
      <h2 className="font-semibold text-xl text-[#333333] ml-44">
        Choice favourite course from top category
      </h2>
      <div className="grid grid-cols-4 gap-4 mx-32 justify-items-center">
        {topics && topics.length > 0 ? (
          topics.map((topic) => (
            <MyCard
              key={topic.id} 
              width={"w-9/12"}
              title={topic.name}
              description={topic.description}
               
            />
          ))
        ) : (
          <p>waiting for topics to be loaded </p>
        )}
      </div>
    </div>
  );
};
export default CourseCategories;
