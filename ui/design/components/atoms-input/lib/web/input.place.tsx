/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef, useState } from 'react';
import { Checked } from '@nextbnb/design/assets/svg/original';
import { ChevronDown, ChevronTop } from '@nextbnb/design/assets/svg/regular';
import { $INPUT } from '../constant/appearance';
import useOnClickOutside from '@nextbnb/design/hooks/useOnClickOutside';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} changePlace - Change the place type
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
const PlaceInput: React.FC<{
  value?: string;
  direction?: string;
  errors?: boolean;
  changePlace?: (type: string) => void;
}> = ({ value = null, direction, errors = false, changePlace }) => {
  const [inputValue, setInputValue] = useState('Entire place');
  const containerRef = useRef<any>();
  const [expanded, setExpanded] = useState(false);

  const handleDisplayingValue = (value) => {
    if (typeof value === 'string' && changePlace) {
      return changePlace(value);
    }
    setInputValue(value);
  };

  const displayingValue = typeof value === 'string' ? value : inputValue;

  useOnClickOutside(containerRef, () => {
    if (expanded) {
      setExpanded(!expanded);
    }
  });

  const renderShape = () => {
    switch (direction) {
      case 'top':
        return {
          borderBottom: '1px solid',
          borderLeft: '1px solid',
          borderRight: '1px solid',
          borderColor: 'grey.400',
          borderBottomRadius: 10,
        };

      case 'bottom':
        return {
          borderTop: '1px solid',
          borderLeft: '1px solid',
          borderRight: '1px solid',
          borderColor: 'grey.400',
          borderTopRadius: 10,
        };
      default:
        return {
          border: '1px solid',
          borderColor: 'grey.400',
          borderRadius: 10,
        };
    }
  };

  return (
    <div
      ref={containerRef}
      css={{
        height: 50,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <div
        css={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
        sx={{
          ...renderShape(),
          ...(expanded && { border: '2px solid', borderColor: 'black' }),
        }}
      >
        <div
          css={{
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bg: 'transparent',
            padding: 0,
            width: '100%',
            border: 'none',
            fontSize: 16,
            fontWeight: 300,
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <div>
            <label
              css={{
                position: 'absolute',
                left: 0,
                top: 15,
                cursor: 'pointer',
                padding: '0 12px',
                fontSize: 14,
                color: 'grey.800',
                fontWeight: 100,
              }}
              htmlFor="place"
            >
              {displayingValue}
            </label>
          </div>
          <div
            sx={{
              paddingRight: '15px',
            }}
          >
            {expanded ? <ChevronTop width={13} /> : <ChevronDown width={13} />}
          </div>
        </div>
        {expanded && (
          <div
            css={{
              width: '100%',
              position: 'absolute',
              top: 48,
              zIndex: 60,
            }}
          >
            <div
              css={{
                borderRadius: 6,
                backgroundColor: 'white',
                border: '1px solid lightgray',
                padding: 16,
                boxShadow:
                  'rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important',
              }}
            >
              <div>
                <div
                  css={{
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: '100%',
                    bg: 'transparent',
                  }}
                  onClick={() => {
                    handleDisplayingValue('Entire place');
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3
                        style={{ textAlign: 'left' }}
                        css={{
                          fontSize: 14,
                        }}
                      >
                        Entire place
                      </h3>
                    </div>
                    <div>
                      <p css={{ fontSize: 13, textAlign: 'left' }}>
                        Guests have the whole place to themselves--there's a
                        private entrance and no shared spaces. A bedroom,
                        bathroom, and kitchen and usually included.
                      </p>
                    </div>
                  </div>
                  {displayingValue === 'Entire place' && (
                    <div css={{ display: 'flex', alignItems: 'center' }}>
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  css={{
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: '100%',
                    bg: 'transparent',
                  }}
                  onClick={() => {
                    handleDisplayingValue('Private room');
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3 css={{ textAlign: 'left', fontSize: 14 }}>
                        Private room
                      </h3>
                    </div>
                    <div>
                      <p css={{ fontSize: 13, textAlign: 'left' }}>
                        Guests have their own private room for sleeping. Other
                        areas could be shared.
                      </p>
                    </div>
                  </div>
                  {displayingValue === 'Private room' && (
                    <div css={{ display: 'flex', alignItems: 'center' }}>
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  css={{
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: '100%',
                    bg: 'transparent',
                  }}
                  onClick={() => {
                    handleDisplayingValue('Shared room');
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3 css={{ textAlign: 'left', fontSize: 14 }}>
                        Shared room
                      </h3>
                    </div>
                    <div>
                      <p css={{ fontSize: 13, textAlign: 'left' }}>
                        Guests sleep in a bedroom or a common area that could be
                        shared with others.
                      </p>
                    </div>
                  </div>
                  {displayingValue === 'Shared room' && (
                    <div css={{ display: 'flex', alignItems: 'center' }}>
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const place = (props) => {
  return {
    [$INPUT.place]: {
      component: <PlaceInput {...props} />,
      css: {},
    },
  };
};