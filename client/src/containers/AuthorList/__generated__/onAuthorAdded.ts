/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onAuthorAdded
// ====================================================

export interface onAuthorAdded_authorAdded {
  __typename: "Author";
  id: string;
  lastname: string | null;
  firstname: string | null;
  middlename: string | null;
}

export interface onAuthorAdded {
  authorAdded: onAuthorAdded_authorAdded | null;
}
