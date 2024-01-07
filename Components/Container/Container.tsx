import {createElement, forwardRef, ReactNode} from 'react';
import classNames from "classnames";
import styles  from './Container.module.scss'


type ContainerProps = {
  children: ReactNode;
  component: keyof JSX.IntrinsicElements;
  className?: string;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, component, className, ...props }, ref) =>
    createElement(
      component,
      {
        className: classNames(className, styles.container),
        ref,
        ...props
      },
      children
    )
);

Container.displayName = 'Container'


export default Container;