import MyCard from "../shared/MyCard";
import design from "../assets/design.png";
import development from "../assets/development.png";
import databases from "../assets/databases.png";
import business from "../assets/business.png";
import photpgraphy from "../assets/photpgraphy.png";

const CourseCategories = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 mb-16">
      <h2 className="font-semibold text-xl text-[#333333] ml-44">
      Choice favourite course from top category
      </h2>
    <div className="grid grid-cols-4 gap-4 mx-32 justify-items-center">
      
      <MyCard width={"w-9/12"} 
        title={" Online Billing, Invoicing, & Contracts"}
        description={
          "Simple and secure control of your organization’s"
        }
        document={design}
      />
      <MyCard width={"w-9/12"} 
        title={" Online Billing, Invoicing, & Contracts"}
        description={
          "Simple and secure control of your organization’s"
        }
        document={development}
      />
      <MyCard width={"w-9/12"} 
        title={" Online Billing, Invoicing, & Contracts"}
        description={
          "Simple and secure control of your organization’s"
        }
        document={databases}
      />
      <MyCard width={"w-9/12"} 
        title={" Online Billing, Invoicing, & Contracts"}
        description={
          "Simple and secure control of your organization’s"
        }
        document={business}
      />
      <MyCard width={"w-9/12"} 
        title={" Online Billing, Invoicing, & Contracts"}
        description={
          "Simple and secure control of your organization’s"
        }
        document={photpgraphy}
      />
      <MyCard width={"w-9/12"} 
        title={" Online Billing, Invoicing, & Contracts"}
        description={
          "Simple and secure control of your organization’s"
        }
        document={databases}
      />
      <MyCard width={"w-9/12"} 
        title={" Online Billing, Invoicing, & Contracts"}
        description={
          "Simple and secure control of your organization’s"
        }
        document={business}
      />
      <MyCard width={"w-9/12"} 
        title={" Online Billing, Invoicing, & Contracts"}
        description={
          "Simple and secure control of your organization’s"
        }
        document={design}
      />
    </div>
    </div>
  );
};
export default CourseCategories;
