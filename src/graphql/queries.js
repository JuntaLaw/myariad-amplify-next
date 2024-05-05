/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNoteCard = /* GraphQL */ `
  query GetNoteCard($id: ID!) {
    getNoteCard(id: $id) {
      id
      title
      content
      notebookID
      nextCardID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listNoteCards = /* GraphQL */ `
  query ListNoteCards(
    $filter: ModelNoteCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoteCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        notebookID
        nextCardID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotebook = /* GraphQL */ `
  query GetNotebook($id: ID!) {
    getNotebook(id: $id) {
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
export const listNotebooks = /* GraphQL */ `
  query ListNotebooks(
    $filter: ModelNotebookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotebooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const noteCardsByNotebookID = /* GraphQL */ `
  query NoteCardsByNotebookID(
    $notebookID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    noteCardsByNotebookID(
      notebookID: $notebookID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        notebookID
        nextCardID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
