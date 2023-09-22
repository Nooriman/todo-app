import { Button, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import LeftDrawer from "../components/Main/LeftDrawer";
import "../style/Main.css";
import RightDrawer from "../components/Main/RightDrawer";
import { Add } from "@mui/icons-material";

export default function Main() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState<boolean>(false);

  const handleCloseDrawer = (data: boolean) => {
    setDrawerOpen(data);
  };

  const handleCloseRightDrawer = (data: boolean) => {
    setIsRightDrawerOpen(data);
  };

  const date = new Date();
  const todayDate = date.getDate();

  return (
    <div style={{ padding: "20px", height: "100vh" }}>
      {drawerOpen && (
        <LeftDrawer open={drawerOpen} onClose={handleCloseDrawer} />
      )}

      <div className={drawerOpen ? "isDrawerOpen" : ""}>
        {!drawerOpen && (
          <IconButton onClick={() => setDrawerOpen((prev) => !prev)}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h3">TODAY</Typography>
        <div
          style={{
            border: "solid 1px #e9e9e9",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          {todayDate}
        </div>

        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ textAlign: "left" }}
        >
          <Add />
          Add Task
        </Button>
        <Button onClick={() => setIsRightDrawerOpen(true)}>open Right</Button>
        {isRightDrawerOpen && (
          <RightDrawer
            open={isRightDrawerOpen}
            onClose={handleCloseRightDrawer}
          />
        )}
      </div>
    </div>
  );
}
