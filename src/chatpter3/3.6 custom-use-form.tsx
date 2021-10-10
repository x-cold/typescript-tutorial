import React from 'react';
import { useForm as useRcForm } from 'rc-field-form';
import { FormInstance } from './3.5 custom-form';

export const useCustomForm = <Values extends Record<string, any>>(
  form?: FormInstance<Values>
): [FormInstance<Values>] => {
  if (form) {
    return [form];
  }
  // NOTICE: return rc-form instance
  const [rcForm] = useRcForm<Values>();
  return [rcForm];
};
