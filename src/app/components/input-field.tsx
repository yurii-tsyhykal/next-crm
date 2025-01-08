import React from 'react';

export interface InputFieldProps {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className=" mb-2 text-base font-normal text-gray-900 border border-solid border-gray-300 rounded"
        >
          {label}
        </label>
      )}
    </div>
  );
}
