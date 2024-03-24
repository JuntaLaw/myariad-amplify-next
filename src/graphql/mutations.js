/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createNotebook = /* GraphQL */ `
  mutation CreateNotebook(
    $input: CreateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    createNotebook(input: $input, condition: $condition) {
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
export const updateNotebook = /* GraphQL */ `
  mutation UpdateNotebook(
    $input: UpdateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    updateNotebook(input: $input, condition: $condition) {
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
export const deleteNotebook = /* GraphQL */ `
  mutation DeleteNotebook(
    $input: DeleteNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    deleteNotebook(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createNoteConnection = /* GraphQL */ `
  mutation CreateNoteConnection(
    $input: CreateNoteConnectionInput!
    $condition: ModelNoteConnectionConditionInput
  ) {
    createNoteConnection(input: $input, condition: $condition) {
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
export const updateNoteConnection = /* GraphQL */ `
  mutation UpdateNoteConnection(
    $input: UpdateNoteConnectionInput!
    $condition: ModelNoteConnectionConditionInput
  ) {
    updateNoteConnection(input: $input, condition: $condition) {
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
export const deleteNoteConnection = /* GraphQL */ `
  mutation DeleteNoteConnection(
    $input: DeleteNoteConnectionInput!
    $condition: ModelNoteConnectionConditionInput
  ) {
    deleteNoteConnection(input: $input, condition: $condition) {
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
export const createNotebookOutput = /* GraphQL */ `
  mutation CreateNotebookOutput(
    $input: CreateNotebookOutputInput!
    $condition: ModelNotebookOutputConditionInput
  ) {
    createNotebookOutput(input: $input, condition: $condition) {
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
export const updateNotebookOutput = /* GraphQL */ `
  mutation UpdateNotebookOutput(
    $input: UpdateNotebookOutputInput!
    $condition: ModelNotebookOutputConditionInput
  ) {
    updateNotebookOutput(input: $input, condition: $condition) {
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
export const deleteNotebookOutput = /* GraphQL */ `
  mutation DeleteNotebookOutput(
    $input: DeleteNotebookOutputInput!
    $condition: ModelNotebookOutputConditionInput
  ) {
    deleteNotebookOutput(input: $input, condition: $condition) {
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
export const createGeneratedImage = /* GraphQL */ `
  mutation CreateGeneratedImage(
    $input: CreateGeneratedImageInput!
    $condition: ModelGeneratedImageConditionInput
  ) {
    createGeneratedImage(input: $input, condition: $condition) {
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
export const updateGeneratedImage = /* GraphQL */ `
  mutation UpdateGeneratedImage(
    $input: UpdateGeneratedImageInput!
    $condition: ModelGeneratedImageConditionInput
  ) {
    updateGeneratedImage(input: $input, condition: $condition) {
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
export const deleteGeneratedImage = /* GraphQL */ `
  mutation DeleteGeneratedImage(
    $input: DeleteGeneratedImageInput!
    $condition: ModelGeneratedImageConditionInput
  ) {
    deleteGeneratedImage(input: $input, condition: $condition) {
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
