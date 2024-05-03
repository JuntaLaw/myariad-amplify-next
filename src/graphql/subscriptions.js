/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNoteCard = /* GraphQL */ `
  subscription OnCreateNoteCard($filter: ModelSubscriptionNoteCardFilterInput) {
    onCreateNoteCard(filter: $filter) {
      id
      title
      content
      notebookID
      createdAt
      updatdAt
      order
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNoteCard = /* GraphQL */ `
  subscription OnUpdateNoteCard($filter: ModelSubscriptionNoteCardFilterInput) {
    onUpdateNoteCard(filter: $filter) {
      id
      title
      content
      notebookID
      createdAt
      updatdAt
      order
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNoteCard = /* GraphQL */ `
  subscription OnDeleteNoteCard($filter: ModelSubscriptionNoteCardFilterInput) {
    onDeleteNoteCard(filter: $filter) {
      id
      title
      content
      notebookID
      createdAt
      updatdAt
      order
      updatedAt
      __typename
    }
  }
`;
export const onCreateNotebook = /* GraphQL */ `
  subscription OnCreateNotebook($filter: ModelSubscriptionNotebookFilterInput) {
    onCreateNotebook(filter: $filter) {
      id
      title
      userId
      createdAt
      updatedAt
      NoteCards {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateNotebook = /* GraphQL */ `
  subscription OnUpdateNotebook($filter: ModelSubscriptionNotebookFilterInput) {
    onUpdateNotebook(filter: $filter) {
      id
      title
      userId
      createdAt
      updatedAt
      NoteCards {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteNotebook = /* GraphQL */ `
  subscription OnDeleteNotebook($filter: ModelSubscriptionNotebookFilterInput) {
    onDeleteNotebook(filter: $filter) {
      id
      title
      userId
      createdAt
      updatedAt
      NoteCards {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
