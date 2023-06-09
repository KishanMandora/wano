import React from "react";

type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

export default Button;
