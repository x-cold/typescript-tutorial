import React, { CSSProperties } from 'react';
import { Input, InputProps } from 'antd';

// NOTICE: bordered can't be set by props
interface Props extends Omit<InputProps, 'bordered'> {
  customProps: string;
  // @override
  // NOTICE: CustomInput doesn't support checkbox type
  type: Exclude<InputProps['type'], 'checkbox'>;
  style: CSSProperties;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    targetValue?: string
  ) => void;
}

const CustomInput: React.FC<Props> = (props) => {
  const { onChange, ...restProps } = props;
  return <Input
    {...restProps}
    bordered
    onChange={onChange}
  />;
}

export default CustomInput;
