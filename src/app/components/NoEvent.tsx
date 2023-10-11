import React, { FC } from "react";
import Image from "next/image";
import { Typography, Box, Button } from "@mui/material";

interface Props {
  handleClick: () => void;
}

const NoEvent: FC<Props> = ({ handleClick }) => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 500,
          width: "100%",
          padding: "0 22px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src="/no-event.svg" width="239" height="118" alt="" />
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#C4C4C4",
            fontSize: "1.25rem",
            marginTop: "20px",
          }}
        >
          No events yet
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "100px",
          maxWidth: 500,
          width: "100%",
          padding: "0 22px",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={handleClick}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 400,
          }}
        >
          Create new event
        </Button>
      </Box>
    </>
  );
};

export default NoEvent;
