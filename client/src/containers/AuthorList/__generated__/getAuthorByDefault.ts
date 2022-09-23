/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAuthorByDefault
// ====================================================

export interface getAuthorByDefault_getAuthor_books {
  __typename: "Book";
  id: string;
  title: string;
}

export interface getAuthorByDefault_getAuthor {
  __typename: "Author";
  bio: string | null;
  firstname: string | null;
  lastname: string | null;
  books: getAuthorByDefault_getAuthor_books[] | null;
}

export interface getAuthorByDefault {
  getAuthor: getAuthorByDefault_getAuthor | null;
}

export interface getAuthorByDefaultVariables {
  id?: string | null;
}
