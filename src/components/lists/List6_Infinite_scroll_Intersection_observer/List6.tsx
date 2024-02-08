import React, { useState, useEffect } from 'react';
import { useGetPostsQuery } from '../../../api';
import './List6.css';
import useLoadMoreNavigation from './hooks/useLoadMoreNavigation';
import { useInView } from 'react-intersection-observer';

type Post = {
  id: string;
  title: string;
  body: string;
};

const List6: React.FC = () => {
  const { page, loadMore } = useLoadMoreNavigation();
  const { data, error, isLoading, isFetching } = useGetPostsQuery({ page, limit: 10 });
  const [posts, setPosts] = useState<Post[]>([]);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => {
        const newPostIds = new Set(prevPosts.map((post) => post.id));
        const newPosts = data.filter((newPost: Post) => !newPostIds.has(newPost.id));
        return [...prevPosts, ...newPosts];
      });
    }
  }, [data]);

  useEffect(() => {
    if (inView && !isFetching) {
      loadMore();
    }
  }, [inView, isFetching, loadMore]);

  if (isLoading && page === 1) return <div className='loading'>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className='List6'>
      {posts.map((post: Post) => (
        <div className='post' key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      {isFetching && <div className='loading'>Loading more...</div>}
      <div ref={ref} style={{ height: '1px' }}></div>
    </div>
  );
};

export default List6;
