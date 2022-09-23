/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBook
// ====================================================

export interface getBook_getBook_author {
  __typename: "Author";
  id: string;
  lastname: string | null;
  firstname: string | null;
}

export interface getBook_getBook_comments {
  __typename: "Comment";
  author: string;
  text: string;
}

export interface getBook_getBook {
  __typename: "Book";
  id: string;
  description: string;
  title: string;
  pubDate: any | null;
  author: getBook_getBook_author;
  comments: (getBook_getBook_comments | null)[] | null;
}

export interface getBook {
  getBook: getBook_getBook | null;
}

export interface getBookVariables {
  id: string;
}
