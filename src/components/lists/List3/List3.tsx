import React from 'react';
import { useGetPostsQuery } from '../../../api';
import './List3.css';

type ListProps = {
  page: number;
}

type Post = {
  id: string;
  title: string;
  body: string;
};

const List3: React.FC<ListProps> = ({ page }: ListProps) => {
  const { data, error, isLoading } = useGetPostsQuery({ page, limit: 10 });

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className='List3'>
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
