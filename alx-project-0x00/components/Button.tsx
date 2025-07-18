import { ButtonProps } from "@/interfaces/index";
// import classNames from "classnames";
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return <button className={styles}>{title}</button>;
};
export default Button;
