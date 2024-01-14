import {createElement, forwardRef, ReactNode} from 'react';
import classNames from "classnames";
import styles  from './Container.module.scss'


type ContainerProps = {
  children: ReactNode;
  component: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, component, className, id,  ...props }, ref) =>
    createElement(
      component,
      {
        className: classNames(className, styles.container),
        ref,
        id,
        ...props
      },
      children
    )
);

Container.displayName = 'Container'


export default Container;