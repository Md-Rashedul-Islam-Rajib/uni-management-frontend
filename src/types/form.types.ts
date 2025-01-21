import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

export type TFormConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
};

export type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;