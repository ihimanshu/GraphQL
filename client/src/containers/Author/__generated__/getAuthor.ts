/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAuthor
// ====================================================

export interface getAuthor_getAuthor_books {
  __typename: "Book";
  id: string;
  pubDate: any | null;
  description: string;
  title: string;
}

export interface getAuthor_getAuthor {
  __typename: "Author";
  id: string;
  bio: string | null;
  firstname: string | null;
  lastname: string | null;
  middlename: string | null;
  books: getAuthor_getAuthor_books[] | null;
}

export interface getAuthor {
  getAuthor: getAuthor_getAuthor | null;
}

export interface getAuthorVariables {
  id: string;
}
