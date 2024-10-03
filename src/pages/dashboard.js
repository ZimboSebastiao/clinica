import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import styled from "styled-components";
import { styled } from "@mui/material/styles";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

const customSidebarStyle = {
  backgroundColor: "#3f51b5", // Cor de fundo da barra lateral
  color: "white", // Cor do texto
  width: "240px", // Largura customizada
};

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  // colorSchemes: { light: true, dark: true },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#bfcf11",
          paper: "#bfcf11",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#2d2e24",
          paper: "#2d2e24",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "monospace", // Fonte personalizada
    span: {
      fontSize: "12rem",
      fontWeight: "bold",
      color: "yellow",
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <StyledBox
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <StyledTypography>Dashboard content for {pathname}</StyledTypography>
    </StyledBox>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState("/dashboard");

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slots={{
          toolbarAccount: () => (
            <div style={customSidebarStyle}>
              Minha barra lateral customizada
            </div>
          ),
        }}
      >
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: blueviolet;
`;

const StyledTypography = styled(Typography)`
  font-size: 1.5rem; // Tamanho da fonte
  color: #333; // Cor do texto
  background-color: red;
`;

export default DashboardLayoutBasic;
