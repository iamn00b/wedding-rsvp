import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { AppColour } from '../../shared/constants/AppColour';

const Root = styled.div`
  padding: 0.65em;
  border: 1px solid ${AppColour.SECONDARY};
  border-radius: 5px;
  background: ${AppColour.SECONDARY}11;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background: ${AppColour.SECONDARY}44;
  }
`;

const InvisibleCheckbox = styled.input`
  &[type='radio'] {
    display: none;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

export type RSVPCheckboxProps = {
  id: string;
  value: string;
  name: string;
  onClick?: () => any;
  children: ReactNode;
};

function RSVPCheckbox(props: RSVPCheckboxProps) {
  const { children, id, name, value, onClick } = props;

  return (
    <Root onClick={onClick ? onClick : undefined}>
      <InvisibleCheckbox type="radio" name={name} id={id} value={value} />
      <Label htmlFor={id}>{children}</Label>
    </Root>
  );
}

export default RSVPCheckbox;
