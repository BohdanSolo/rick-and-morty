import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { UIContext } from "../UIContext";

type CustomButtonProps = {
  dirty: boolean;
  isValid: boolean;
  text: string;
};

const CustomButton = ({text, dirty, isValid,}: CustomButtonProps): JSX.Element => {

  const { alert } = useContext(UIContext);
    return (
        <Button
            disabled={!isValid || !dirty || alert.show} // Using alert.show, because isSubmiting from Formik doesn't work properly
            fullWidth
            type="submit"
            sx={{
                lineHeight: "40px",
                color: "white",
                fontSize: "15px",
                backgroundColor: "#57b742",
                "&:hover": {backgroundColor: "#439932"},
            }}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
