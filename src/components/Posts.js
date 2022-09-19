import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Grid container spacing={1} style={{ padding: "40px" }}>
      <Grid container direction="column" item xs={6} spacing={1}>
        {posts.map((post) => (
          <Grid
            key={post.id}
            container
            direction="column"
            item
            xs={2}
            spacing={1}
          >
            <Card sx={{ minWidth: 175, maxWidth: 600 }} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.name}
                </Typography>
                <Typography variant="h6">{post.description}</Typography>
                <br />
                <Button variant="contained">{post.language}</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>

    // <ul className="list-group mb-4">
    //   {posts.map((post) => (
    //     <li key={post.id} className="list-group-item">
    //       {post.name}
    //     </li>
    //   ))}
    // </ul>
  );
};

export default Posts;
