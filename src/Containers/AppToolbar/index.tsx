import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../Constants";
import { toggleTheme } from "../../Features/Counter/counterSlice";
import { routePaths } from "../../Router/paths";

interface IReferences {
  aboutRef: any;
  expRef: any;
  projRef: any;
  contactRef: any;
}
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  references: IReferences;
}

const drawerWidth = 240;
const navItems = ["About", "Exprience", "Projects", "Contact", "Counter"];

export const AppToolbar = (props: Props) => {
  const { window, references } = props;
  const { aboutRef, expRef, projRef, contactRef } = references;
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavClicked = (item: string) => {
    switch (item) {
      case "About":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Exprience":
        expRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Counter":
        navigate(routePaths.Counter.countPath());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        color="default"
        component="nav"
        style={{
          backgroundColor: theme.palette.mode === "light" ? "#DEBA9D" : "",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <p>Open drawer</p>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            align="left"
            fontFamily={"Segoe UI Symbol"}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
            onClick={() => navigate("/")}
          >
            <span style={{ cursor: "pointer" }}>TAYYAB</span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={(e) => dispatch(toggleTheme())}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color:
                    pathname?.replace("/", "") === item.toLowerCase()
                      ? colors.orange
                      : theme.palette.mode !== "light"
                      ? "#fff"
                      : "#000",
                }}
                onClick={() => handleNavClicked(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
