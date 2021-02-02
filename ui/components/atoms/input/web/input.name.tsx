/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { styleLabel, styleContainer, styleInput } from "./styling.text";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - Handles event triggered
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const NameInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  name?: "first" | "last";
  errors?: boolean;
}> = ({
  handleChange,
  value,
  direction,
  name = "firstname",
  errors = false,
}) => {
  const names: { [name: string]: string } = {
    firstname: "First name",
    lastname: "Last name",
  };
  const [fieldActive, setFieldActive] = useState(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case "top":
        return {
          borderBottom: "1px solid",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: "white__3",
          borderBottomRadius: 10,
        };
      case "bottom":
        return {
          borderTop: "1px solid",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: "white__3",
          borderTopRadius: 10,
        };
      default:
        return {
          border: "1px solid",
          borderColor: "white__3",
          borderRadius: 10,
        };
    }
  };

  return (
    <div
      css={{
        height: 60,
        position: "relative",
        padding: "6px 12px",
        alignItems: "center",
        ...renderShape(),
        // ...styleContainer(errors, fieldActive, value),
      }}
    >
      <div
        css={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <input
          autoFocus={true}
          id={name}
          name={name}
          type="text"
          onChange={handleChange}
          value={value}
          onFocus={activateField}
          onBlur={deactivateField}
          css={{
            padding: 0,
            width: "100%",
            display: "block",
            border: "none",
            fontSize: 16,
            fontWeight: 300,
            "::placeholder": {
              color: "black",
            },
            position: "relative",
            top: 0,
            outline: "none",
            paddingTop: 20,
            color: "rgb(104, 104, 104)",
            ...styleInput(errors, fieldActive, value),
          }}
          placeholder={fieldActive ? names[name] : undefined}
        />
        <label
          htmlFor={name}
          style={{ position: "absolute" }}
          css={{
            color: "gray__1",
            fontWeight: 100,
            transition: "all 150ms ease-in",
            fontSize: 16,
            top: 12,
            // ...styleLabel(errors, fieldActive, value, value),
          }}
        >
          {names[name]}
        </label>
      </div>
    </div>
  );
};