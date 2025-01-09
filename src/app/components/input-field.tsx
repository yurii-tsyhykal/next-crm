'use client';

import { Field } from 'formik';
import React from 'react';

export interface InputFieldProps {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className=" mb-2 text-base font-normal text-gray-900 "
        >
          {label}
        </label>
      )}
      <Field
        id={id}
        className="border border-solid border-gray-300 rounded shadow-custom shadow-white"
      />
    </div>
  );
}
