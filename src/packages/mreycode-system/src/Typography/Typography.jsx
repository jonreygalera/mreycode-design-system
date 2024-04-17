import React from 'react'
import PropTypes from 'prop-types';
import TypographyStyle from './Typography.module.css';
import { clsx } from 'clsx';
import typographyVariants from '../types/typographyVariants';

const ElementTag = [  'h1','h2','h3', 'h4', 'h5','h6'];

const Typography = ({
  variant = 'subtitle1', 
  children,
  style,
  className
}) => {
  let Component = typographyVariants[variant];
  const defaultClassName = TypographyStyle[`mreycode-typography-${Component}`];
  Component = ElementTag.includes(variant) ? Component : 'p';

  return (
    <Component 
      style={style} 
      className={clsx(className, defaultClassName)}
    >
      {children}
    </Component>
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(typographyVariants)),
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Typography;