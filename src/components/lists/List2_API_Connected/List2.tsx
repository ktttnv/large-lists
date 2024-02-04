import { useGetPostsQuery } from '../../../api';
import './List2.css';

type Post = {
  id: string;
  title: string;
  body: string;
};

const List2 = () => {
  const { data, error, isLoading } = useGetPostsQuery({ page: 1, limit: 20 });

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className='List2'>
      {data && data.map((post: Post) => (
        <div className='post' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default List2;
