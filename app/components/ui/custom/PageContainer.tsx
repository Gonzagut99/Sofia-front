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
    const spacing = 'p-2 md:p-4 lg:p-12 xl:p-16 pt-[74px] md:pt-[90px] lg:pt-[80px]';
  return (
    <article
      className={twMerge(animatedTransition, spacing, className)}
      {...props}
    >
      {children}
    </article>
  );
}