/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addDefaultAuthor
// ====================================================

export interface addDefaultAuthor_addAuthor {
  __typename: "Author";
  id: string;
  lastname: string | null;
  firstname: string | null;
  middlename: string | null;
  bio: string | null;
}

export interface addDefaultAuthor {
  addAuthor: addDefaultAuthor_addAuthor;
}
