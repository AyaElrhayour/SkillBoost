import account from "../assets/account.png";

const Account = () => {
  return (
    <div className="flex items-center mr-48">
      <img src={account} alt="" />
      <span className="text-[#001D6E] font-semibold">Lina</span>
    </div>
  );
};

export default Account;
