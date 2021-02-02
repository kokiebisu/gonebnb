/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "../../../atoms/input/web";

/**
 * Renders the /become-a-host/title
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const TitleCreate: React.FC<{ data?: any; setData?: any }> = ({
  data = { title: "Title here" },
  setData,
}) => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: "gray__2" }}>
          Create a title for your listing
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: "gray__2" }}>
          Catch guests' attention with a listing title that highlights what
          makes your place special.
        </p>
      </div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
          <Input
            variant={$Input.LIMIT}
            limit={50}
            value={data.title}
            handleChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};