import React from 'react';
import { twMerge } from 'tailwind-merge';
import { customFontSizes } from '~/lib/utils';

interface props
  extends React.HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function P(props: props) {
  const defaultFontSize = customFontSizes('sm');
  const defaultClassName = `${defaultFontSize} text-pretty text-customSecondary-950 dark:text-customPrimary-50`;
  return (
    <p
      {...props}
      className={twMerge(defaultClassName, props.className)}
    ></p>
  );
}