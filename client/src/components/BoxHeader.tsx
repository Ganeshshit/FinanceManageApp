import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
type Props = {
  subTitle: String;
  sideText: String;
  title: String;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subTitle, sideText }: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}

        <Box width="100%">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6">{subTitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography>{sideText}</Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
