import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import styles from './section.module.scss';
import { Card } from '../../atoms/card/card.component';
import { Button } from '../../../components/atoms/button/button.component';
import sectionStyles from './section.module.scss';
import { ChevronLeft, ChevronRight } from '../../../public/svg/regular';
import { AvailableSectionProps } from './props';
import section from './section.module.scss';

export const AvailableSection: React.FC<AvailableSectionProps> = ({
  availables = [
    {
      date: 'Tue., Nov. 10',
      from: '1:00 a.m. ',
      to: '3:00 a.m. ',
      standard: 'PST',
      price: 31,
    },
    {
      date: 'Tue., Nov. 10',
      from: '1:00 a.m. ',
      to: '3:00 a.m. ',
      standard: 'PST',
      price: 31,
    },
    {
      date: 'Tue., Nov. 10',
      from: '1:00 a.m. ',
      to: '3:00 a.m. ',
      standard: 'PST',
      price: 31,
    },
    {
      date: 'Tue., Nov. 10',
      from: '1:00 a.m. ',
      to: '3:00 a.m. ',
      standard: 'PST',
      price: 31,
    },
    {
      date: 'Tue., Nov. 10',
      from: '1:00 a.m. ',
      to: '3:00 a.m. ',
      standard: 'PST',
      price: 31,
    },
  ],
}) => {
  const [width, setWidth] = useState(500);
  const containerRef = useRef<HTMLDivElement>();
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const evaluateColumns = () => {
    if (width > 1128) {
      return 5;
    } else if (width > 1028) {
      return 4;
    } else if (width > 728) {
      return 3;
    } else {
      return 2;
    }
  };

  const displayingColumns = evaluateColumns();

  const handleRef = () => {
    if (containerRef.current && containerRef.current.getBoundingClientRect()) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleRef);
    handleRef();
    return () => {
      window.removeEventListener('resize', handleRef);
    };
  });

  const previous = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const next = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div
        ref={containerRef}
        className={[
          layout['flex'],
          layout['items-center'],
          layout['justify-between'],
        ].join(' ')}>
        <div className={[space['m-v--16']].join(' ')}>
          <h3 className={[font['size--20']].join(' ')}>
            Choose from available dates
          </h3>
        </div>
        <div className={[layout['flex'], layout['items-center']].join(' ')}>
          <div className={[space['m-h--4']].join(' ')}>
            <Button
              type='paginate'
              direction='left'
              onPress={previous}
              disable={state.activeSlide === 0}
            />
          </div>
          <div className={[space['m-h--4']].join(' ')}>
            <Button
              type='paginate'
              direction='right'
              onPress={next}
              disable={
                state.activeSlide ===
                Math.ceil(availables.length / displayingColumns) - 1
              }
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          width: width * (availables.length / displayingColumns),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}>
        <div style={{ display: 'flex' }}>
          {availables.map((available, index) => {
            return (
              <div
                style={{ width: width / displayingColumns }}
                key={index}
                className={[section['w__nearby']].join(' ')}>
                <div className={[space['m-b--10'], space['m-r--16']].join(' ')}>
                  <Card
                    type='available'
                    date={available.date}
                    from={available.from}
                    to={available.to}
                    standard={available.standard}
                    price={available.price}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={[space['m-t--32']].join(' ')}>
        <Button type='border' title='See more dates' />
      </div>
    </div>
  );
};