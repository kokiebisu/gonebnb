/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { $CARD } from '../constant/appearance';

/**
 * Renders the available card component
 * @param {string} date - The date which the experience is available
 * @param {string} from - The time which the experience starts
 * @param {string} to - The time which the experience ends
 * @param {string} standard - The time standard
 * @param {number} price - The price of the experience
 */
const AvailableCard: React.FC<{
  date?: string;
  from?: string;
  to?: string;
  standard?: string;
  price?: number;
}> = ({
  date = 'Tue., Nov. 10',
  from = '1:00 a.m. ',
  to = '3:00 a.m. ',
  standard = 'PST',
  price = 31,
}) => {
  return (
    <div
      sx={{ border: '1px solid', borderColor: 'grey.400' }}
      css={{ padding: 24, borderRadius: 6 }}
    >
      <div css={{ marginBottom: 6 }}>
        <h3 css={{ fontSize: 15 }}>{date}</h3>
      </div>
      <div>
        <p css={{ fontSize: 14 }}>
          {from} - {to} {standard}
        </p>
      </div>
      <div css={{ margin: '8px 0' }}>
        <u css={{ fontSize: 14 }}>Book for a private group</u>
      </div>
      <div css={{ margin: '16px 0' }}>
        <span css={{ fontSize: 15 }}>
          <b>${price}</b>
        </span>
        <span css={{ fontSize: 15 }}> /person</span>
      </div>
      <div css={{ display: 'inline-block' }}>
        <Button variant={$BUTTON.primary} size="sm" title="Choose" />
      </div>
    </div>
  );
};

export const available = (props) => {
  return {
    [$CARD.available]: {
      component: <AvailableCard {...props} />,
      css: {},
    },
  };
};