import React from "react";
import {
  createTheme,
  ThemeProvider,
  Tooltip as TooltipMaterialUI,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          color: "#FFFFFF",
          backgroundColor: "#0047BB",
          background: "#0047BB",
          arrow: "#0047BB",
          fontWeight: "400",
          textAlign: "center",
        },
        arrow: {
          color: "#0047BB",
        },
      },
    },
  },
});

export default function Tooltip({
  children,
  title,
}: {
  children?: any;
  title: string;
}) {
  return (
    <ThemeProvider theme={theme}>
      <TooltipMaterialUI
        title={title}
        className="TooltipArrow"
        placement="top"
        arrow
      >
        {children}
      </TooltipMaterialUI>
    </ThemeProvider>
  );
}