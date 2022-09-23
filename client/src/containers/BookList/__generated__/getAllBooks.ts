/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllBooks
// ====================================================

export interface getAllBooks_allBooks_author {
  __typename: "Author";
  firstname: string | null;
  lastname: string | null;
}

export interface getAllBooks_allBooks {
  __typename: "Book";
  id: string;
  title: string;
  author: getAllBooks_allBooks_author;
}

export interface getAllBooks {
  allBooks: getAllBooks_allBooks[];
}
