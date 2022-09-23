/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllAuthors
// ====================================================

export interface getAllAuthors_allAuthors_books {
  __typename: "Book";
  id: string;
  title: string;
}

export interface getAllAuthors_allAuthors {
  __typename: "Author";
  id: string;
  lastname: string | null;
  firstname: string | null;
  books: getAllAuthors_allAuthors_books[] | null;
}

export interface getAllAuthors {
  allAuthors: getAllAuthors_allAuthors[];
}
