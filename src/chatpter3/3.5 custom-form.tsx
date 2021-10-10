import React, { PropsWithChildren, PropsWithRef } from 'react';

type RecursivePartial<T> = T extends object ? {
  [P in keyof T]?: T[P] extends (infer U)[] 
    ? RecursivePartial<U>[]
    : T[P] extends object
      ? RecursivePartial<T[P]>
      : T[P];
} : any;

// NOTICE: RecursivePartial is a generic tool
export interface FormInstance<Values = any> {
  getFieldsValue(): Values;
  setFieldsValue: (value: RecursivePartial<Values>) => void;
  validateFields: () => Promise<Values>;
}

export interface FormProps<Values = any> {
  name: string;
  form?: FormInstance<Values>;
  layout?: Record<string, any>;
  onFinish?: (values: Values) => void;
}

export type CustomFormProps<Values = any>
  = PropsWithRef<PropsWithChildren<FormProps<Values>>>;

const CustomForm: <Values = any>(
  props: CustomFormProps<Values>
) => React.ReactElement = (props) => {
  // TODO: implements functions of form component
  if (props.children) {
    return <>{props.children}</>;
  }
  return <div />;
}

export default CustomForm;

export {
  useCustomForm
} from './3.6 custom-use-form';
