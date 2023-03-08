import React from 'react';

export default function Button ({ children, url, theme, className }: any) {
  let buttonStyle;
  switch (theme) {
    case 'SECONDARY':
      buttonStyle = 'border-solid border-purple-900 text-purple-900 hover:text-white hover:bg-purple-900'
      break;
    default:
      buttonStyle = 'bg-purple-900 text-white hover:border-solid hover:border-purple-900 hover:text-purple-900 hover:bg-transparent'
      break;
  }

  return (
    <a href={url} className={`inline-block h-10 leading-10 px-8 mt-4 rounded-full border transition ease-in-out ${buttonStyle} duration-300 ${className}`}>{children}</a>
  )
}