import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { SinglePost } from "services/posts/interfaces";
import { useStyles } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

export interface PostListElementProps {
  post: SinglePost;
}

const PostListElement: React.FunctionComponent<PostListElementProps> = ({
  post,
}) => {
  const classes = useStyles();
  const { title, thumb, date, url, excerpt } = post;

  return (
    <ScrollAnimation
      duration={0.45}
      offset={120}
      animateOnce
      animateIn="fadeIn"
    >
      <Paper className={classes.wrapper}>
        <a className={classes.image} href={url}>
          <img src={thumb} alt={title} />
        </a>
        <Typography className={classes.link} component={Link} to={thumb}>
          {title}
        </Typography>
        <Typography className={classes.excerpt}>{excerpt}</Typography>
        <div className={classes.date}>{date}</div>
      </Paper>
    </ScrollAnimation>
  );
};

export default PostListElement;
