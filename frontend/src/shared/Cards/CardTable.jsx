import PropTypes from "prop-types";
import TableDropdown from "../Dropdowns/TableDropdown";
import Button from "../Button";
import TopicPopup from "../TopicPopup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopics,
  deleteTopic,
  updateTopic,
} from "../../features/topicSlice";

export default function CardTable({ color }) {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.topics);
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    dispatch(fetchTopics());
  }, [addOpen, deleted, selectedTopic]);

  const handleDeleteTopic = (id) => {
    dispatch(deleteTopic(id))
      .then(() => {
        setDeleted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateTopic = (topic) => {
    setSelectedTopic(topic);
    setOpen(true);
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex justify-between ">
            <h2 className="font-semibold text-lg text-[#333333] ">
              All Topics{" "}
            </h2>
            <Button
              content={"Add New Topics"}
              bgColor="bg-[#7FB5FF]"
              color="text-white"
              onClick={() => setAddOpen(true)}
            />
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "w-1/3 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Topic
                </th>
                <th
                  className={
                    "w-1/3 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Desciption
                </th>
                <th
                  className={
                    "w-1/3 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {topics.length > 0 ? (
                topics.map((topic) => (
                  <tr key={topic.id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {topic.name}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {topic.description}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <Button
                        content={"Edit"}
                        color="text-white"
                        bgColor="bg-green-300"
                        onClick={() => handleUpdateTopic(topic)}
                      />
                      <Button
                        content={"Delete"}
                        color="text-white"
                        bgColor="bg-red-700"
                        onClick={() => handleDeleteTopic(topic.id)}
                      />
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex"></div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <TableDropdown />
                    </td>
                  </tr>
                ))
              ) : (
                <div>no topics found</div>
              )}
            </tbody>
          </table>
        </div>
        {addOpen ? <TopicPopup open={addOpen} setOpen={setAddOpen} /> : ""}
        {open ? (
          <TopicPopup
            open={open}
            setOpen={setOpen}
            topic={selectedTopic}
            setTopic={setSelectedTopic}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
