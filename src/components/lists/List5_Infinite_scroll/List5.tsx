import React, { useState, useEffect, useCallback } from 'react';
import { useGetPostsQuery } from '../../../api';
import './List5.css';
import useLoadMoreNavigation from './hooks/useLoadMoreNavigation';

type Post = {
  id: string;
  title: string;
  body: string;
};

const List5: React.FC = () => {
  const { page, loadMore } = useLoadMoreNavigation();
  const { data, error, isLoading, isFetching } = useGetPostsQuery({ page, limit: 10 });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      const newPosts = data.filter((newPost: Post) => !posts.some((post) => post.id === newPost.id));
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }
  }, [data, posts]);

  const isScrollingNearBottom = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    return scrollTop + clientHeight > scrollHeight - 100;
  };

  const handleScroll = useCallback(() => {
    if (isScrollingNearBottom() && !isFetching) {
      loadMore();
    }
  }, [isFetching, loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isLoading && page === 1) return <div className='loading'>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className='List5'>
      {posts.map((post: Post) => (
        <div className='post' key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      {isFetching && <div className='loading'>Loading more...</div>}
    </div>
  );
};

export default List5;