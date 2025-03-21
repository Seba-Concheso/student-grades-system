import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FC,  } from "react";
import { Link } from "react-router-dom";


const AppRouter: FC = () => {
 
  return (
    <div>
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
        </Toolbar>
      </AppBar>
    
    </div>
  );
};

export default AppRouter;
