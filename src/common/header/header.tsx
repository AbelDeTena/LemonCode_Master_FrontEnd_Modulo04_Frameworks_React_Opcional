import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/index";
import { Button } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ gap: 20 }}>
        <Link to={switchRoutes.kitties}>
          <Button variant="contained" color="secondary">
            Kitties
          </Button>
        </Link>
        <Link to={switchRoutes.puppies}>
          <Button variant="contained" color="secondary">
            Puppies
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
