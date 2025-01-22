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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolver?: any;
};

export type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

export type TSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};