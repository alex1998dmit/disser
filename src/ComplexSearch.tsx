import { Button, Drawer, Grid, TextField, Typography } from "@mui/material";
import { multiOptionsQuest } from "./utils/DBQuestions";
import DBMultiQuestion from "./DBMultiQuestion";
import { useState } from "react";

const ComplexSearch = () => {
  const [args, setArgs] = useState({});

  const onSaveHandle = (key: string, params: Array<any>) => {};

  return (
    <Grid container>
      <Grid item xs={6} container alignItems="center" alignContent="center">
        <Typography fontWeight="bold">СУБД 1</Typography>
      </Grid>
      <Grid item container xs={6} justifyContent="flex-end">
        <Button variant="contained">+ СУБД</Button>
      </Grid>
      <Grid item xs={12}>
        {multiOptionsQuest.map((question, index) => (
          <DBMultiQuestion
            key={index}
            label={question.label}
            options={question.options}
            name={question.name}
          />
        ))}
      </Grid>
      <Drawer />
    </Grid>
  );
};

export default ComplexSearch;
