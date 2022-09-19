import React from "react";
import { Grid, Avatar, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import LinkIcon from "@mui/icons-material/Link";

const DetailsCard = ({ user }) => {
  return (
    <Grid container spacing={1} style={{ padding: "40px" }}>
      <Grid container direction="column" item xs={6} spacing={1}>
        <Grid item xs={12}>
          <Avatar src={user.avatar_url} sx={{ width: 200, height: 200 }} />
          <br />
          <LinkIcon /> {user.html_url}
        </Grid>
        <Grid item xs={12} style={{ paddingLeft: "50px" }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {user.name}
                <br />
              </Typography>
              <Typography>{user.bio}</Typography>
              <Typography>
                <PlaceIcon /> {user.location}
              </Typography>
              {'"A benevolent smile"'}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsCard;
