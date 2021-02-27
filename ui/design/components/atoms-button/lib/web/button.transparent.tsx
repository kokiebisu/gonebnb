/** @jsxRuntime classic */
/** @jsx jsx */
import { $Button } from '..';
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.transparent';

/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
const TransparentButton: React.FC<{
  inverse?: boolean;
  content?: any;
}> = ({ inverse = false, content = 'Button' }) => {
  return (
    <div
      css={web.wrapper}
      sx={inverse ? theme.wrapper.inverse : theme.wrapper.plain}
    >
      {content}
    </div>
  );
};

export const transparent = (props) => {
  return {
    [$Button.TRANSPARENT]: {
      component: <TransparentButton {...props} />,
      css: {
        bg: 'transparent',
      },
    },
  };
};
