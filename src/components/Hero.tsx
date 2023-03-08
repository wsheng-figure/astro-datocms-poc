import React from 'react';
import Button from './Button';
import AstroButton from './AstroButton.astro';
import { Markdown } from 'astro-remote';

const Blurb = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
)

export default function Hero ({ content }) {
  console.log(content)
  return (
    // <section>
    //   {content}
    // </section>
    <Markdown content={content} components={{ AstroButton }} />
  )
}