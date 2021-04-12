import { getWorkContent } from './logic/logic.work';

export interface WorksCardProps {
  work?: string;
}

const WorksCard: React.FC<WorksCardProps> = ({ work = 'design' }) => {
  const works = getWorkContent();
  return (
    <div>
      <div className="block sm:flex items-center">
        <div className="w-full sm:w-1/2">
          <img src={works[work].imgUrl} alt="works image" />
        </div>
        <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <h3>{works[work].title}</h3>
          </div>
          <div>
            <p className="text-sm">{works[work].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const works = (props) => {
  return {
    works: {
      component: <WorksCard {...props} />,
      style: '',
    },
  };
};
