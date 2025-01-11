import Image from 'next/image';
import React from 'react';

export interface LogoUploaderProps
  extends Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>> {
  label?: string;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="font-normal text-base text-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className=" flex flex-col items-center justify-center w-40 h-40 rounded-full bg-white border border-slate-900 border-dashed cursor-pointer"
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/upload.svg"
          alt="upload"
        />
        {placeholder && <p className="text-sm text-gray-500">{placeholder}</p>}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
}
