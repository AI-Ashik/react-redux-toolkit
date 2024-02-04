import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id}>
                {" "}
                {/* Assuming each post has a unique 'id' property */}
                <h5>Title : {post.title}</h5>
                <p>Description : {post.body}</p>{" "}
                {/* Changed 'h5' to 'p' assuming it represents the body of the post */}
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsView;
