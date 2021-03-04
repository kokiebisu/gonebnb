/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Check } from '@nextbnb/design/assets/svg/original';
import { $CARD } from '../constant/appearance';

const SetCard: React.FC<{}> = () => {
  return (
    <div
      css={{ borderRadius: 15 }}
      sx={{ border: '1px solid', borderColor: 'grey.300' }}
    >
      <div
        css={{
          width: '100%',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 8,
        }}
        sx={{
          bg: 'green.800',
        }}
      />
      <div css={{ padding: 15 }}>
        <div css={{ display: 'flex' }}>
          <div css={{ marginRight: 12 }}>
            <Check width={18} fill="#268A04" />
          </div>
          <div>
            <div css={{ marginBottom: 4 }}>
              <h3 css={{ fontSize: 16 }}>You're all set!</h3>
            </div>
            <div>
              <p css={{ fontSize: 14 }} sx={{ color: 'grey.600' }}>
                This helps us keep your account secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const set = (props) => {
  return {
    [$CARD.set]: {
      component: <SetCard {...props} />,
      css: {},
    },
  };
};