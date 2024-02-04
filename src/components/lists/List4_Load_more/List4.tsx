import React from 'react';
import { useGetPostsQuery } from '../../../api';
import './List4.css';
import useListNavigation from './hooks/useListNavigation';

type Post = {
  id: string;
  title: string;
  body: string;
};

const List4: React.FC = () => {
  const { page, goToPage } = useListNavigation('/list4/');
  const { data, error, isLoading } = useGetPostsQuery({ page, limit: 10 });

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className='List4'>
      <div className="pagination">
        <button onClick={() => goToPage(page > 2 ? page - 1 : 1)}>{"<"}</button>
        <button onClick={() => goToPage(page + 1)}>{">"}</button>
      </div>
      {data && data.map((post: Post) => (
        <div className='post' key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default List4;
