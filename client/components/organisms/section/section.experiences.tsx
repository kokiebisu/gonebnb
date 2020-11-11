import React from 'react';
import { ExperiencesSectionProps } from './props';
import font from '../../../styles/font.module.scss';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';
import space from '../../../styles/space.module.scss';

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = () => {
  const experiences = ['hosts', 'activities', 'global'];
  return (
    <div className={[space['m-v--32']].join(' ')}>
      <div className={[space['m-b--24']].join(' ')}>
        <h3 className={[font['size--32']].join(' ')}>
          Airbnb Online Experiences
        </h3>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 15,
        }}>
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <Bullet type='experience' experienceType={experience} />
            </div>
          );
        })}
      </div>
    </div>
  );
};