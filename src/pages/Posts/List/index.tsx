import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Spinner from "components/Spinner";
import UseInfiniteScroll from "hooks/useInfiniteScroll";
import PostsService from "services/posts";
import PostListElement from "./Element";
import { useStyles } from "./styles";

const PostsListPage: React.FunctionComponent = () => {
  const { data, loading, error, hasMore } = UseInfiniteScroll(
    PostsService.fetchPosts
  );
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {loading && <Spinner />}

      <div className={classes.header}>
        <Typography variant="h5">Lista artykułów</Typography>
      </div>
      {error && <Typography>Coś poszło nie tak</Typography>}
      <Grid container direction="column" spacing={3} alignItems="center">
        {data.map((post) => (
          <Grid sm={10} lg={10} item key={post.id}>
            <PostListElement post={post} />
          </Grid>
        ))}
      </Grid>
      {!hasMore && (
        <Typography className={classes.articlesEndText} color="textSecondary">
          Koniec artykułów
        </Typography>
      )}
    </div>
  );
};

export default PostsListPage;
