import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({page = 1, limit = 10}) => `posts?_page=${page}&_limit=${limit}`,
    }),
  }),
});

export const { useGetPostsQuery } = jsonPlaceholderApi;
