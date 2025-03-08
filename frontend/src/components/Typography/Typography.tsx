import React from 'react';
import './Typography.scss';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'normal-bold' | 'normal' | 'normal-black' | 'normal-small'  | 'title'  | 'title-mid'  | 'title-small' | 'subtitle' | 'title-bolder';
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  return <div className={`typography ${variant}`}>{children}</div>;
};

export default Typography;
