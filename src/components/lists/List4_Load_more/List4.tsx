import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../../../api';
import './List4.css';
import useLoadMoreNavigation from './hooks/useLoadMoreNavigation';

type Post = {
  id: string;
  title: string;
  body: string;
};

const List4: React.FC = () => {
  const { page, loadMore } = useLoadMoreNavigation();
  const { data, error, isLoading, isFetching } = useGetPostsQuery({ page, limit: 10 });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data]);

  const handleLoadMore = () => {
    loadMore();
  }

  if (isLoading && page === 1) return <div className='loading'>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className='List4'>
      {posts.map((post: Post) => (
        <div className='post' key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      {isFetching && <div className='loading'>Loading more...</div>}
      <button onClick={handleLoadMore} disabled={isFetching}>Load More</button>
    </div>
  );
};

export default List4;
