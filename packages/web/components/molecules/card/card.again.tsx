import { Icon, $Icon } from '@icons';

const AgainCard: React.FC<{}> = () => {
  return (
    <div className="rounded-lg border border-gray-300">
      <div className="p-4">
        <div className="flex">
          <div className="mr-3">
            <div className="p-2 rounded-full bg-red-600">
              <Icon
                variant={$Icon.SEMANTIC}
                semanticType="exclamation"
                width={18}
                fill="white"
              />
            </div>
          </div>
          <div>
            <div className="mb-1">
              <h3 className="text-base">Let's try that again</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                There isn’t an account associated with this email address.
                Please try another email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const again = (props) => {
  return {
    again: {
      component: <AgainCard {...props} />,
      style: '',
    },
  };
};
