import { Button, Grid, Typography } from "@mui/material";

const SearchFooter = () => {
  return (
    <Grid
      container
      // justifyContent="flex-end"
      alignContent="center"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "white",
        padding: "16px",
        // border: '1px solid',
        zIndex: 2
      }}
    >
      <Grid item container justifyContent="flex-start" xs={6}>
        <Button variant="contained">Поиск</Button>
      </Grid>
    </Grid>
  );
};

export default SearchFooter;
