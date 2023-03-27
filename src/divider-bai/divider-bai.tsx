import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const DividerBai: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>DividerBai</>;
  };

  export default DividerBai;
