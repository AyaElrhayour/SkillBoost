import React, { useEffect, useState } from "react";
import img1 from "../assets/Group124.png";
import Button from "../shared/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectChapter } from "../features/chaptersSlice";
import Navigation from "../shared/Navigation";
import blueLogo from "../assets/blue_logo.png";

const ChapterContent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { id } = useParams();
  const chapter = useSelector((state) => state.chapters.selectedChapter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(selectChapter(id))
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const getImage = (img) => {
    return `http://localhost:8000/storage/${img}`;
  };

  return (

    <div className="relative">
      
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex  items-center justify-between ">
        <div className="px-8 w-full fixed flex justify-between">
          <h4 className="text-2xl font-bold ">{chapter && chapter.course.title}</h4>
          <Button bgColor="bg-blue-100" content={"Back"} onClick={() => navigate(-1)} />
        </div>
        <div
          className={`h-1 mt-16 bg-indigo-500 transition-all duration-300 ease-in-out`}
          style={{ width: `${scrollPercentage}%`, left: 0 }}
        />
      </div>
      <div className=" flex gap-20 pt-20  px-48">
        <div className="w-2/3">
          <h2 className="text-5xl font-bold mb-8">{chapter && chapter.title}</h2>

          <p className="mb-4">
            {chapter && chapter.content}
          </p>
          
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
        </div>
        <div className=" w-1/3 flex flex-col gap-4 ">
          <img src={chapter && getImage(chapter.attachment)} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;
