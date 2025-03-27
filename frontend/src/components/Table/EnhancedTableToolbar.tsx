import { FC } from "react";
import { EnhancedTableToolbarProps } from "./interface/interface";
import { Button, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { getActionConfig } from "../../utils/getIconButtonStyle";

const EnhancedTableToolbar: FC<EnhancedTableToolbarProps> = ({ numSelected, tableName, onAdd }) => {
  const theme = useTheme();
  const deleteSx = getActionConfig(theme, "delete");
  const addSx = getActionConfig(theme, "add");
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          {tableName}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title={deleteSx.tooltip}>
          <IconButton sx={deleteSx.sx}>{deleteSx.icon}</IconButton>
        </Tooltip>
      ) : (
        onAdd && (
          <Tooltip title={addSx.tooltip}>
            <Button variant="contained" color="secondary" onClick={onAdd}>
              {addSx.icon}
            </Button>
          </Tooltip>
        )
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
