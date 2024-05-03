/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNoteCard = /* GraphQL */ `
  mutation CreateNoteCard(
    $input: CreateNoteCardInput!
    $condition: ModelNoteCardConditionInput
  ) {
    createNoteCard(input: $input, condition: $condition) {
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
export const updateNoteCard = /* GraphQL */ `
  mutation UpdateNoteCard(
    $input: UpdateNoteCardInput!
    $condition: ModelNoteCardConditionInput
  ) {
    updateNoteCard(input: $input, condition: $condition) {
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
export const deleteNoteCard = /* GraphQL */ `
  mutation DeleteNoteCard(
    $input: DeleteNoteCardInput!
    $condition: ModelNoteCardConditionInput
  ) {
    deleteNoteCard(input: $input, condition: $condition) {
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
export const createNotebook = /* GraphQL */ `
  mutation CreateNotebook(
    $input: CreateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    createNotebook(input: $input, condition: $condition) {
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
export const updateNotebook = /* GraphQL */ `
  mutation UpdateNotebook(
    $input: UpdateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    updateNotebook(input: $input, condition: $condition) {
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
export const deleteNotebook = /* GraphQL */ `
  mutation DeleteNotebook(
    $input: DeleteNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    deleteNotebook(input: $input, condition: $condition) {
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
