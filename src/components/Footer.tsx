import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: 'primary.main',
        paddingBottom: 0,
		  position: 'fixed',
		  bottom: 0,
		}}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color='white' variant="h6">
					© Marina Lemak 2023
            </Typography>
          </Grid>
         </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 