import { ReactNode } from "react";
enum buttonVarientClass {
  primary = "rounded-full bg-gradient-to-r from-indigo-400 via-red-400 to-orange-400 px-5 py-1 text-sm font-medium text-black",
  outline = "rounded-full border-[1.5px] border-black px-5 py-1 text-sm font-medium text-black",
}
interface ButtonInterface {
  children: ReactNode;
  className?: string;
  varient?: keyof typeof buttonVarientClass;
  restProps?: any;
}
const Button = ({
  children,
  className,
  varient = "primary",
  ...restProps
}: ButtonInterface) => {
  return (
    <button
      type="button"
      className={`transition-all duration-200 hover:scale-110 hover:text-white ${buttonVarientClass[varient]} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
