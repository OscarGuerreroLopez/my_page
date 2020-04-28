/** @jsx jsx */

import { FC, ElementType, ReactNode } from "react";
import { Heading, Text as RebassText } from "rebass";
import { jsx } from "theme-ui";

const colors = {
  primary: "#000",
  secondary: "#565656",
  accent: ["#428EFE", "#9062b3"],
  success: "#40B439",
  danger: "#F9584F",
  warning: "#FFBB51",
  ghost: "#E5E5E5",
  disabled: "#BDBDBD",
  grey: ["#333333", "#4F4F4F", "#828282", "#BDBDBD", "#E0E0E0", "#F2F2F2"],
  white: ["#fff"],
  modes: {
    dark: {
      primary: "#fff",
      secondary: "#f00",
      white: "#000",
    },
  },
};

type Color = keyof typeof colors;

interface IText {
  as: ElementType<any>;
  children: ReactNode;
  color?: Color;
  hoverColor?: Color;
  textTransform?: "capitalize" | "lowercase" | "none" | "uppercase";
  textAlign?:
    | "center"
    | "end"
    | "justify"
    | "left"
    | "match-parent"
    | "right"
    | "start";
}

const Title: FC<IText> = ({
  children,
  as,
  color,
  hoverColor,
  textTransform,
  textAlign,
}) => {
  let fontSize;

  switch (as) {
    case "h1":
      fontSize = [3, 4, 5];
      break;
    case "h2":
      fontSize = [2, 3, 4];
      break;
    case "h3":
      fontSize = [1, 2, 3];
      break;
    case "h4":
      fontSize = 2;
      break;
    case "h5":
      fontSize = 1;
      break;
    case "h6":
      fontSize = 0;
      break;
    default:
      fontSize = 0;
      break;
  }

  const SX = {
    color,
    ":hover": {
      color: hoverColor,
    },
    textTransform,
    fontSize,
    textAlign,
    fontFamily: "body",
  };

  return (
    <Heading as={as} sx={SX}>
      {children}
    </Heading>
  );
};

type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Pick<T, TRequired>;

type TextPropsTypes = OptionalExceptFor<IText, "children">;

const Text = (props: TextPropsTypes): JSX.Element => {
  const { as } = props;
  return (
    <RebassText
      as="p"
      variant={as === "strong" ? "strong" : "body"}
      fontSize={[2, 2, 3, 3, 3, 5, 5]}
      {...props}
    />
  );
};

export { Title, Text };
