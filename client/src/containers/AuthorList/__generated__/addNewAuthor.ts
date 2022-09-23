/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewAuthorInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addNewAuthor
// ====================================================

export interface addNewAuthor_addAuthor {
  __typename: "Author";
  id: string;
  lastname: string | null;
  firstname: string | null;
  middlename: string | null;
  bio: string | null;
}

export interface addNewAuthor {
  addAuthor: addNewAuthor_addAuthor;
}

export interface addNewAuthorVariables {
  author: NewAuthorInput;
}
