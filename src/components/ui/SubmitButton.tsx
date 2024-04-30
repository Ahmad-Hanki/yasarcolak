"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./button";
const SubmitButton = ({ message }: { message: string }) => {
  const { pending } = useFormStatus();
  let content;

  if (pending) {
    content = <Button disabled>{"Submitting..."}</Button>;
  } else content = <Button>{message}</Button>;
  return content;
};

export default SubmitButton;
