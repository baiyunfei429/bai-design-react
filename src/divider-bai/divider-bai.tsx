import React from 'react';
import type Props from './interface';

const defaultProps = {};

const DividerBai: React.FC<Props> = (userProps) => {
  const props = { ...defaultProps, ...userProps };

  return <div {...props}>DividerBai</div>;
};

export default DividerBai;
