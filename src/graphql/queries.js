/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      password
      notebooks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        password
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
      owner {
        id
        username
        email
        password
        createdAt
        updatedAt
        owner
        __typename
      }
      notes {
        nextToken
        __typename
      }
      notebookOutputs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userNotebooksId
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
        userNotebooksId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      title
      content
      notebook {
        id
        title
        createdAt
        updatedAt
        userNotebooksId
        __typename
      }
      sourceConnections {
        nextToken
        __typename
      }
      targetConnections {
        nextToken
        __typename
      }
      generatedImage {
        id
        imageUrl
        createdAt
        updatedAt
        notebookOutputGeneratedImagesId
        generatedImageNoteId
        owner
        __typename
      }
      createdAt
      updatedAt
      notebookNotesId
      noteGeneratedImageId
      owner
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
        notebookNotesId
        noteGeneratedImageId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNoteConnection = /* GraphQL */ `
  query GetNoteConnection($id: ID!) {
    getNoteConnection(id: $id) {
      id
      sourceNote {
        id
        title
        content
        createdAt
        updatedAt
        notebookNotesId
        noteGeneratedImageId
        owner
        __typename
      }
      targetNote {
        id
        title
        content
        createdAt
        updatedAt
        notebookNotesId
        noteGeneratedImageId
        owner
        __typename
      }
      order
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listNoteConnections = /* GraphQL */ `
  query ListNoteConnections(
    $filter: ModelNoteConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoteConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order
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
export const getNotebookOutput = /* GraphQL */ `
  query GetNotebookOutput($id: ID!) {
    getNotebookOutput(id: $id) {
      id
      title
      notebook {
        id
        title
        createdAt
        updatedAt
        userNotebooksId
        __typename
      }
      content
      pdfUrl
      generatedImages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      notebookNotebookOutputsId
      owner
      __typename
    }
  }
`;
export const listNotebookOutputs = /* GraphQL */ `
  query ListNotebookOutputs(
    $filter: ModelNotebookOutputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotebookOutputs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        pdfUrl
        createdAt
        updatedAt
        notebookNotebookOutputsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGeneratedImage = /* GraphQL */ `
  query GetGeneratedImage($id: ID!) {
    getGeneratedImage(id: $id) {
      id
      notebookOutput {
        id
        title
        content
        pdfUrl
        createdAt
        updatedAt
        notebookNotebookOutputsId
        owner
        __typename
      }
      note {
        id
        title
        content
        createdAt
        updatedAt
        notebookNotesId
        noteGeneratedImageId
        owner
        __typename
      }
      imageUrl
      createdAt
      updatedAt
      notebookOutputGeneratedImagesId
      generatedImageNoteId
      owner
      __typename
    }
  }
`;
export const listGeneratedImages = /* GraphQL */ `
  query ListGeneratedImages(
    $filter: ModelGeneratedImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeneratedImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUrl
        createdAt
        updatedAt
        notebookOutputGeneratedImagesId
        generatedImageNoteId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
