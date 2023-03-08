import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  background-color: teal;

  > * + * {
    margin-top: 1rem;
  }
`

export default function Blurb ({ children, ...rest }) {
  return (
    <Text className={''} {...rest}>
      {children}
    </Text>
  )
}

// Issue about adding styles for children with Tailwind