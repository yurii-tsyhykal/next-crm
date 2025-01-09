import Image from 'next/image';
import React from 'react';

export interface LogoUploaderProps
  extends Partial<Omit<React.ReactHTMLElement<HTMLInputElement>, 'type'>> {
  label?: string;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div>
      {label && <p className="font-normal text-base text-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className=" flex flex-col items-center justify-center w-44 h-44 rounded-full bg-white border border-slate-900 border-dashed"
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/public/icons/upload.svg"
          alt="upload"
        />
      </label>
    </div>
  );
}
