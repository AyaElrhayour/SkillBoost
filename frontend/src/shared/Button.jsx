const Button = ({
  border = "border-transparent",
  bgColor = "bg-white",
  color = "text-[#001D6E]",
  content,
  height = "h-auto",
  onClick,
  radius = "rounded-full",
  width = "w-auto",
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-l font-semibold px-6 py-2 ${border} ${bgColor} ${color} ${radius} ${width} ${height}`}
    >
      {content}
    </button>
  );
};

export default Button;