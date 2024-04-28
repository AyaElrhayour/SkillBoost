import account from "../assets/account.png";

const Account = ({
  mrgn ="mr-48"
}) => {
  return (
    <div className={`flex items-center ${mrgn}`}>
      <img src={account} alt="" />
      <span className="text-[#001D6E] font-semibold">Lina</span>
    </div>
  );
};

export default Account;
