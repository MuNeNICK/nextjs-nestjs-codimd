import { gql } from '@apollo/client';
import PostType from '../interfaces/post';

export const POSTS_QUERY = gql`
  query {
    notes(
      orderBy: { 
        createdAt: desc 
      }
    ) {
      title
      content
      shortid
      createdAt
      updatedAt
    }
  }
`;

export interface PostsData {
  posts: PostType[];
}