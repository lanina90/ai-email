import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import styles from './Button.module.scss'
import classNames from "classnames";


type LinkProps = Omit<NextLinkProps, 'href'> & {
  href: string;
  component: 'link';

};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  component?: 'button';
};

type CommonProps = {
  children: ReactNode;
  className?: string | null;
  variant?: 'filled' | 'text';
};

type Props  = CommonProps & (LinkProps | ButtonProps);

const Button: React.FC<Props> = props   => {
  const {
    children,
    className,
    component = 'button',
    variant = 'filled',
    ...otherProps
  } = props;

  const buttonClassNames = classNames(
    className,
    styles.button,
    styles[`button--${variant}`],
  );

  if (component === 'link') {
    const { href, ...linkProps } = otherProps as LinkProps;
    return (
      <Link href={href} {...linkProps} className={buttonClassNames}>
        {children}
      </Link>
    );
  }

  const buttonProps = otherProps as ButtonProps;
  return (
    <button type="button" className={buttonClassNames} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;