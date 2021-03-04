/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const HomesLayout: React.FC<{
  title?: string;
  children?: React.ReactNode;
  spread?: boolean;
}> = ({ title = "Title here", children, spread = false }) => {
  return (
    <div css={{ padding: "32px 0" }}>
      <div>
        <div>
          <div css={{ marginBottom: 32 }}>
            {title && <h1 css={{ fontSize: 40 }}>{title}</h1>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};