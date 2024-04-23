import calander from "../assets/calander.png";
import people from "../assets/people.png";
import document from "../assets/document.png";
import MyCard from "../shared/MyCard";

const Description = () => {
  return (
    <div className="flex flex-col my-8 gap-6">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-[#001D6E]">
          All-In-One Cloud Software.
        </h2>
        <p className="text-xl text-wrap w-1/2 text-center text-[#696984]">
          SkillBoost is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-16 mx-20 justify-items-center">
        <MyCard
          title={" Online Billing, Invoicing, & Contracts"}
          description={
            "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
          }
          document={document}
        />

        <MyCard
          document={calander}
          title={"Easy Scheduling & Attendance Tracking"}
          description={
            "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
          }
        />
        <MyCard
          document={people}
          title={"Customer Tracking"}
          description={
            "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization"
          }
        />
      </div>
    </div>
  );
};
export default Description;
