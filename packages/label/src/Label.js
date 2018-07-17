import React from 'react';
import classNames from 'classnames';

const typeClasses = {
  primary: 'a-label--primary',
  secondary: 'a-label--secondary',
  success: 'a-label--success',
  warning: 'a-label--warning',
  danger: 'a-label--danger'
};

type LabelTypes = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

type Props = {
  type?: LabelTypes,
  className?: string,
  style?: object,
  children?: any
};

const Label = (props: Props) => {
  const { type, className, style = {}, children } = props
  const labelClass = classNames(
    'a-label',
    className,
    { [`${typeClasses[type]}`]: !!type },
  );

  return <span className={labelClass} style={style}>{children}</span>
}

export default Label;