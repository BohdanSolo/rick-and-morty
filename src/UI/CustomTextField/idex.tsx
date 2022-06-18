import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

type CustomTextFieldTyped = {
  name: string;
  label: string;
  type: string;
  isToggleVisibility: boolean;
};

const CustomTextField: React.FC<CustomTextFieldTyped> = ({
  name,
  label,
  type,
  isToggleVisibility,
}) => {

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [field, mata] = useField(name);

  const setVisibleCondition = (): JSX.Element | null => {
      if (passwordVisible && isToggleVisibility) {
          return <VisibilityOffIcon/>;
      }
      if (!passwordVisible && isToggleVisibility) {
          return <VisibilityIcon/>;
      }
      return null;
  };

    const setTypeCondition = (): string => {
        if (type === "password" && isToggleVisibility) {
            return !passwordVisible ? "password" : "text";
        }
        return type;
    };

    return (
        <TextField
            variant="outlined"
            required
            type={setTypeCondition()}
            label={label}
            fullWidth
            sx={{marginBottom: "30px"}}
            {...field}
            error={!!(mata && mata.touched && mata.error)}
            helperText={mata && mata.touched && mata.error ? mata.error : ""}
            InputProps={{
                endAdornment: (
                    <InputAdornment
                        position="end"
                        onClick={() => setPasswordVisible((prev) => !prev)}
                        sx={{cursor: "pointer"}}
                    >
                        {setVisibleCondition()}
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default CustomTextField;
