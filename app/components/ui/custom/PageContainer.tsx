import React from 'react';
import { twMerge } from 'tailwind-merge';
interface Props extends React.HTMLAttributes<HTMLElement> {}
export function PageContainer({
  children,
  className,
  ...props
}: Props) {
  const animatedTransition =
    'animate-fade animate-once animate-duration-500 animate-ease-in animate-normal animate-fill-backwards';
  return (
    <article
      className={twMerge(animatedTransition, className)}
      {...props}
    >
      {children}
    </article>
  );
}