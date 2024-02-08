import React, { useState, useEffect, useRef } from 'react';
import './List7.css';
import { useGetPostsQuery } from '../../../api';

type Post = {
  id: string;
  title: string;
  body: string;
};

const ITEM_HEIGHT = 150; // Высота одного элемента списка
const BUFFER_SIZE = 0; // Количество элементов за пределами видимой области

const List7: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const { data, error, isLoading, isFetching } = useGetPostsQuery({ page: 1, limit: 100 });

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const handleScroll = () => {
    if (listRef.current) {
      const scrollTop = listRef.current.scrollTop;
      const startIndex = Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER_SIZE;
      setVisibleStartIndex(Math.max(0, startIndex));
    }
  };

  // useEffect(() => {
  //   listRef.current?.addEventListener('scroll', handleScroll);

  //   return () => {
  //     listRef.current?.removeEventListener('scroll', handleScroll);
  //   };
  // });

  const getVisibleCount = () => {
    if (listRef.current) {
      return Math.ceil(listRef.current.clientHeight / ITEM_HEIGHT);
    }
    return 0;
  };

  const visiblePosts = posts.slice(
    visibleStartIndex,
    visibleStartIndex + getVisibleCount() + 2 * BUFFER_SIZE
  );

  const paddingTop = visibleStartIndex * ITEM_HEIGHT;
  const paddingBottom = (posts.length - visiblePosts.length - visibleStartIndex) * ITEM_HEIGHT;

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className='List7' onScroll={handleScroll} ref={listRef} style={{ overflowY: 'auto', maxHeight: '700px', border: '1px solid green' }}>
      <div style={{ paddingTop, paddingBottom }}>
        {visiblePosts.map((post: Post) => (
          <div className='post' key={post.id} style={{ height: `${ITEM_HEIGHT}px` }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      {(isFetching || isLoading) && <div className='loading'>Loading more...</div>}
    </div>
  );
};

export default List7;
