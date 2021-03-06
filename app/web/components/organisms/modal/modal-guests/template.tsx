import { Input } from "@atoms";

export const GuestsModalTemplate = (): JSX.Element => {
  return (
    <div>
      <div>
        <Input
          variant="counter"
          type="guests"
          title="Adults"
          subtitle="Ages 13 or above"
        />
      </div>
      <div style={{ height: 1, width: "100%", backgroundColor: "#EBEBEB" }} />
      <div>
        <Input
          variant="counter"
          type="guests"
          title="Children"
          subtitle="Ages 2 - 12"
        />
      </div>
      <div style={{ height: 1, width: "100%", backgroundColor: "#EBEBEB" }} />
      <div>
        <Input
          variant="counter"
          type="guests"
          title="Infants"
          subtitle="Under 2"
        />
      </div>
    </div>
  );
};
