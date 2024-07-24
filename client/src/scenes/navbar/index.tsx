import FlexBetween from "@/components/FlexBetween";
import { Box, Typography,  } from "@mui/material";
import { useState } from "react";
import PixIcon from "@mui/icons-material/Pix";
import { Link } from "react-router-dom";
import { grey, blue } from "@mui/material/colors";

// type Props = {};

const Navbar = () => {
  // const palette = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color="grey">
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>
      {/* Right Side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: blue[300] } }}>
          <Link
            to="/addData"
            onClick={() => setSelected("addData")}
            style={{
              color: selected === "dashboard" ? "inherit" : grey[700],
              textDecoration: "inherit",
            }}
          >
            Add Data
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: blue[300] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : grey[700],
              textDecoration: "inherit",
            }}
          >
            Dash Board
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: blue[300] } }}>
          <Link
            to="/prediction"
            onClick={() => setSelected("prediction")}
            style={{
              color: selected === "prediction" ? "inherit" : grey[700],

              textDecoration: "inherit",
            }}
          >
            Prediction
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};
export default Navbar;
