import { ButtonProps } from "@/interfaces/landing";
import classNames from "classnames";
const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const classes = classNames(
    "bg-blue-600 text-white font-semibold transition duration-200 hover:bg-blue-700",
    sizeClasses[size],
    shape,
    className
  );

  return <button className={classes}>{title}</button>;
};

export default Button;
