/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.paginate';
import { ChevronLeft, ChevronRight } from '@nextbnb/design/assets/svg/regular';
import { $Button } from '..';

/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {boolean} disable - Whether if the button is disabled or not
 */
const PaginateButton: React.FC<{
  direction?: string;
  disable?: boolean;
  size?: number;
}> = ({ direction = 'left', disable = false, size = 8 }) => {
  const icons: { [icon: string]: JSX.Element } = {
    left: (
      <ChevronLeft
        width={10}
        stroke={`${disable ? 'lightgray' : 'black'}`}
        strokeWidth={5}
      />
    ),
    right: (
      <ChevronRight
        width={10}
        stroke={`${disable ? 'lightgray' : 'black'}`}
        strokeWidth={5}
      />
    ),
  };
  return (
    <div>
      <div css={web.wrapper} sx={theme.wrapper}>
        {icons[direction]}
      </div>
    </div>
  );
};

export const paginate = (props) => {
  return {
    [$Button.PAGINATE]: {
      component: <PaginateButton {...props} />,
      css: {},
    },
  };
};
