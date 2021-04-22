import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
  {
      getPosts {
      id
      body
      likeCount
      commentCount
      createdAt
      username
      comments{
        id
        username
        body
      }
      likes{
        id
        username
      }
    }
  }
`;