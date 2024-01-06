import { ReactNode, createElement } from 'react';
import classNames from 'classnames';
import styles from './Typography.module.scss';

type Props = {
  children: ReactNode;

  component: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
  variant:
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'footer'
    | 'footer-mail'
    | 'footer-end'

  className?: string;
};

const Typography = ({ children, variant, component, className }: Props) =>
  createElement(
    component,
    { className: classNames(className, styles[`text-${variant}`]) },
    children
  );

export default Typography;