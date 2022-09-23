import { gql } from '@apollo/client'

export const GET_BOOK_BY_ID = gql`
  query getBook($id: ID!) {
    getBook(id: $id) {
      id
      description
      title
      pubDate
      author {
        id
        lastname
        firstname
      }
      comments {
        author
        text
      }
    }
  }
`

export const ADD_BOOK_COMMENT_MUTATION = gql`
  mutation addNewComment($bookId: ID!, $author: String!, $text: String!) {
    addComment(comment: { bookId: $bookId, author: $author, text: $text }) {
      id
    }
  }
`

export const BOOK_COMMENT_ADDED = gql`
subscription onCommentAdded {
  commentAdded {
    author
    text
  }
}
`

// export const CREATE_COMMENT = gql`
//   mutation createComment($bookId: ID!, $author: String!, $text: String!) {
//     addComment(comment: { bookId: $bookId, author: $author, text: $text }) {
//       id
//     }
//   }
// `;

// export const COMMENT_ADDED = gql`
//   subscription onCommentAdded {
//     commentAdded {
//       book {
//         id
//       }
//       author
//       text
//     }
//   }
// `;
