import React from 'react';
import { useGetPostsQuery } from '../../../api';
import './List3.css';
import useListNavigation from './hooks/useListNavigation';

type Post = {
  id: string;
  title: string;
  body: string;
};

const List3: React.FC = () => {
  const { page, goToPage } = useListNavigation('/list3/');
  const { data, error, isLoading } = useGetPostsQuery({ page, limit: 10 });

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className='List3'>
      <div className="pagination">
        <button onClick={() => goToPage(page > 2 ? page - 1 : 1)}>{"<"}</button>
        <button onClick={() => goToPage(page + 1)}>{">"}</button>
      </div>
      {data && data.map((post: Post) => (
        <div className='post' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default List3;
