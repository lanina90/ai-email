import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import Image from "next/image";
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
  variant?: 'filled' | 'text' | 'icon';
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
        {variant === 'icon' && <Image src='/images/icons/play.svg' alt='security' height={16} width={16}/>}
      </Link>
    );
  }

  const buttonProps = otherProps as ButtonProps;
  return (
    <button type="button" className={buttonClassNames} {...buttonProps}>
      {children}
      {variant === 'icon' && <Image src='/images/icons/play.svg' alt='security' height={16} width={16}/>}

    </button>
  );
};

export default Button;