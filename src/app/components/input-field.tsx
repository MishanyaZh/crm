'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  is?: 'input' | 'select';
  children?: React.ReactNode;
}

export default function InputField({
  label,
  id,
  is = 'input',
  children,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      {is === 'select' ? (
        <Field
          as="select"
          id={id}
          {...rest}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        >
          {children}
        </Field>
      ) : (
        <Field
          as="input"
          id={id}
          {...rest}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        />
      )}
    </div>
  );
}
