import axios from "axios";
import { POSTS_URL } from "constants/apiURL";
import * as I from "./interfaces";

const LIMIT = 10;

const PostsService = () => {
  const fetchPosts = async (page: number) : Promise<I.FetchPostsReturn> => {
    try {
      const { data, headers } = await axios.get<I.SinglePost[]>(POSTS_URL, {
        params: {
          _page: page,
          _limit: LIMIT,
        },
      });

      return {
        data,
        total: +headers["x-total-count"],
      };
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  return {
    fetchPosts,
  };
};

export default PostsService();
