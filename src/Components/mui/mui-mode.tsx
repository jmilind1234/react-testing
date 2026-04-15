import { Typography, useTheme } from "@mui/material";

function MuiMode(){
    const theme= useTheme();
    return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
}

export default MuiMode;