/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAuthorsWithoutBooks
// ====================================================

export interface getAuthorsWithoutBooks_allAuthors_books {
  __typename: "Book";
  id: string;
  title: string;
}

export interface getAuthorsWithoutBooks_allAuthors {
  __typename: "Author";
  id: string;
  lastname: string | null;
  firstname: string | null;
  books: getAuthorsWithoutBooks_allAuthors_books[] | null;
}

export interface getAuthorsWithoutBooks {
  allAuthors: getAuthorsWithoutBooks_allAuthors[];
}

export interface getAuthorsWithoutBooksVariables {
  withoutBooks?: boolean | null;
}
