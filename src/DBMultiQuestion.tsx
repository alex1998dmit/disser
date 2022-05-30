import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { useState } from "react";

const DBMultiQuestion = ({ label, options, name }: any) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isStrict, setIsNotStrict] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ value: "" });
  const handleOnActive = () => {
    setIsActive((prev) => !prev);
  };

  const handleOnStrict = () => {
    setIsNotStrict((prev) => !prev);
    // setIsAdded(false);
  };

  const onSelectHandle = (_, value) => {
    console.log(value);
    // setSelectedValue({ value: value.props.value, label: value.props.label });
    // setIsAdded(false);
  };

  const onSave = () => {
    setIsAdded(true);
    console.log(name, { selectedValue, isStrict });
  };

  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        border: "1px solid gray",
        borderLeft: 0,
        borderRight: 0,
        pb: 3,
        mb: 1,
        mt: 1
      }}
    >
      <Grid item xs={12} sx={{ pb: 3 }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={!isActive} onClick={handleOnActive} />}
            label="Неважно"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isStrict}
                onClick={handleOnStrict}
                disabled={!isActive}
              />
            }
            label="Строго равно"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            disabled={!isActive}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedValue.value}
            label={label}
            onChange={onSelectHandle}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button disabled={isAdded} onClick={onSave}>
          {isAdded ? "Добавлено" : "Добавить параметр"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default DBMultiQuestion;
