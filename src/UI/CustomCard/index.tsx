import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CustomCardProps {
  name: string;
  image: string;
  status: string;
  height: number | string;
  children?: any;
}

const CustomCard: React.FC<CustomCardProps> = ({
  name,
  image,
  status,
  children,
  height,
}) => {
  return (
    <Card sx={{ width: 300, height: height }}>
      <CardActionArea sx={{ paddingBottom: "0px", marginBottom: "0px" }}>
        <CardMedia component="img" height="300" image={image} alt={name} />
        <CardContent
          sx={{
            paddingBottom: "0px",
            marginBottom: "0px",
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="secondary"
            fontWeight="bold"
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color:
                status === "Dead"
                  ? "red"
                  : status === "unknown"
                  ? "#a29d9d"
                  : "#56ca3a",
            }}
          >
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
        {children}
    </Card>
  );
};

export default CustomCard;
