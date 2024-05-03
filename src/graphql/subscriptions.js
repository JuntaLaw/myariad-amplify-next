/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNoteCard = /* GraphQL */ `
  subscription OnCreateNoteCard(
    $filter: ModelSubscriptionNoteCardFilterInput
    $owner: String
  ) {
    onCreateNoteCard(filter: $filter, owner: $owner) {
      id
      title
      content
      notebookID
      createdAt
      updatdAt
      position
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateNoteCard = /* GraphQL */ `
  subscription OnUpdateNoteCard(
    $filter: ModelSubscriptionNoteCardFilterInput
    $owner: String
  ) {
    onUpdateNoteCard(filter: $filter, owner: $owner) {
      id
      title
      content
      notebookID
      createdAt
      updatdAt
      position
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteNoteCard = /* GraphQL */ `
  subscription OnDeleteNoteCard(
    $filter: ModelSubscriptionNoteCardFilterInput
    $owner: String
  ) {
    onDeleteNoteCard(filter: $filter, owner: $owner) {
      id
      title
      content
      notebookID
      createdAt
      updatdAt
      position
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateNotebook = /* GraphQL */ `
  subscription OnCreateNotebook(
    $filter: ModelSubscriptionNotebookFilterInput
    $owner: String
  ) {
    onCreateNotebook(filter: $filter, owner: $owner) {
      id
      title
      createdAt
      updatedAt
      NoteCards {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onUpdateNotebook = /* GraphQL */ `
  subscription OnUpdateNotebook(
    $filter: ModelSubscriptionNotebookFilterInput
    $owner: String
  ) {
    onUpdateNotebook(filter: $filter, owner: $owner) {
      id
      title
      createdAt
      updatedAt
      NoteCards {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onDeleteNotebook = /* GraphQL */ `
  subscription OnDeleteNotebook(
    $filter: ModelSubscriptionNotebookFilterInput
    $owner: String
  ) {
    onDeleteNotebook(filter: $filter, owner: $owner) {
      id
      title
      createdAt
      updatedAt
      NoteCards {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
