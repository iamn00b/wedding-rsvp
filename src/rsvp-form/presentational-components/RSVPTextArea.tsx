import React, { HTMLProps, RefObject, useState, ChangeEvent } from 'react';
import { animated } from 'react-spring';
import styled from '@emotion/styled';
import { AppColour } from '../../shared/constants/AppColour';

const TextArea = styled(animated.textarea)`
  display: block;
  border: none;
  background: none;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  margin-bottom: 0.5em;
  color: ${AppColour.SECONDARY};
  padding: 10px 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${AppColour.SECONDARY};
    padding: 5px 0;
    border-bottom: 1px solid ${AppColour.SECONDARY};
    opacity: 0.35;
  }

  &:focus {
    outline: none;
  }
`;

const RSVPTextArea = React.forwardRef(
  (
    props: HTMLProps<HTMLTextAreaElement>,
    ref: RefObject<HTMLTextAreaElement>
  ) => {
    const [rows, setRows] = useState(1);
    const minRows = 1;
    const maxRows = 10;

    // https://codepen.io/Libor_G/pen/eyzwOx
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24;

      const previousRows = event.target.rows;
      event.target.rows = minRows; // reset number of rows in textarea

      const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

      if (currentRows === previousRows) {
        event.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        event.target.rows = maxRows;
        event.target.scrollTop = event.target.scrollHeight;
      }

      const rows = currentRows < maxRows ? currentRows : maxRows;
      setRows(rows);

      if (props.onChange) {
        props.onChange(event);
      }
    };

    return (
      <TextArea {...props} ref={ref} rows={rows} onChange={handleChange} />
    );
  }
);

export default RSVPTextArea;
