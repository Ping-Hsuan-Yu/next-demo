"use client";

import { Formik, Form, useField, Field } from "formik";
import { object, string } from "yup";
import { HTMLInputTypeAttribute } from "react";

interface FormValuesType {
  lastName: string;
  firstName: string;
  userId: string;
  email: string;
}

export default function FormikDemo() {
  const validationSchema = object({
    lastName: string().required("請填寫必填欄位"),
    firstName: string().required("請填寫必填欄位"),
    userId: string()
      .matches(/^[A-Z][0-9]{9}$/, "請輸入正確格式身分證字號")
      .required("請填寫必填欄位"),
    email: string().required("請填寫必填欄位").email("請輸入正確email格式"),
  });

  return (
    <Formik
      initialValues={{ lastName: "", firstName: "", userId: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="border border-stone-50 dark:border-stone-500 shadow-md rounded-lg max-w-xl">
        <div className="bg-blue-800 dark:bg-blue-400 h-3 rounded-t-md"></div>
        <div className="p-11">
          <h1 className="text-2xl font-bold leading-loose tracking-wider mb-6">
            個資蒐集器
          </h1>
          <div className="flex flex-col gap-7">
            <div className="flex gap-2">
              <LabeledInputField label="姓" name="lastName" type="text" />
              <LabeledInputField label="名" name="firstName" type="text" />
            </div>
            <LabeledInputField
              label="身分證字號"
              name="userId"
              type="text"
              caption="非本國人請填護照號碼"
            />
            <LabeledInputField label="Email" name="email" type="email" />
            <div className="flex flex-col gap-1 grow">
              <label htmlFor={`select`} className="tracking-wider">
                {`Select`}
              </label>
              <Field
                as="select"
                id="select"
                name="select"
                className="px-2 py-2 w-full border border-stone-300 rounded outline-blue-800 caret-blue-800 placeholder:text-stone-400 disabled:bg-stone-200 disabled:text-stone-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Field>
            </div>
          </div>
          <div className="mt-11 flex gap-3 justify-end">
            <button
              type="reset"
              className="px-3.5 py-1 rounded  border border-stone-400 hover:border-blue-800 dark:hover:border-blue-400 text-stone-400 hover:text-blue-800 dark:hover:text-blue-400 tracking-wider"
            >
              重設
            </button>
            <button
              type="submit"
              className="px-3.5 py-1 rounded bg-blue-800 dark:bg-blue-400 border border-blue-800 dark:border-blue-400 text-white tracking-wider hover:bg-transparent hover:text-blue-800 dark:hover:text-blue-400"
            >
              送出
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

const LabeledInputField = ({
  label,
  type,
  caption,
  ...props
}: {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  caption?: string;
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1 grow">
      <label htmlFor={props.name} className="tracking-wider">
        {label}
      </label>
      <input
        id={props.name}
        type={type}
        {...field}
        {...props}
        className="px-3 py-2 w-full border border-stone-300 rounded outline-blue-800 caret-blue-800 dark:outline-blue-400 dark:caret-blue-400 placeholder:text-stone-400 disabled:bg-stone-200 disabled:text-stone-500"
      />
      {(caption || meta.error) && (
        <span className="text-xs text-stone-600 dark:text-stone-400">
          {caption}{" "}
          {meta.error && meta.touched && (
            <span className="text-xs text-red-400">{meta.error}</span>
          )}
        </span>
      )}
    </div>
  );
};
