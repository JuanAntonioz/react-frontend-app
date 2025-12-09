import type { ComponentPropsWithoutRef, ElementType } from 'react';

import styles from './button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

export type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'className'>;

export const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps<T>) => {
  const Component = (as ?? 'button') as ElementType;
  const classes = [styles.Button, variantClass[variant], className]
    .filter(Boolean)
    .join(' ');

  return <Component className={classes} {...rest} />;
};
