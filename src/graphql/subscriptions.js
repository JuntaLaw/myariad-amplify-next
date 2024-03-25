/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
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
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
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
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
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
      owner {
        id
        username
        email
        password
        createdAt
        updatedAt
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
export const onUpdateNotebook = /* GraphQL */ `
  subscription OnUpdateNotebook(
    $filter: ModelSubscriptionNotebookFilterInput
    $owner: String
  ) {
    onUpdateNotebook(filter: $filter, owner: $owner) {
      id
      title
      owner {
        id
        username
        email
        password
        createdAt
        updatedAt
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
export const onDeleteNotebook = /* GraphQL */ `
  subscription OnDeleteNotebook(
    $filter: ModelSubscriptionNotebookFilterInput
    $owner: String
  ) {
    onDeleteNotebook(filter: $filter, owner: $owner) {
      id
      title
      owner {
        id
        username
        email
        password
        createdAt
        updatedAt
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $notebook: String
  ) {
    onCreateNote(filter: $filter, notebook: $notebook) {
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
        __typename
      }
      createdAt
      updatedAt
      notebookNotesId
      noteGeneratedImageId
      __typename
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $notebook: String
  ) {
    onUpdateNote(filter: $filter, notebook: $notebook) {
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
        __typename
      }
      createdAt
      updatedAt
      notebookNotesId
      noteGeneratedImageId
      __typename
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote(
    $filter: ModelSubscriptionNoteFilterInput
    $notebook: String
  ) {
    onDeleteNote(filter: $filter, notebook: $notebook) {
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
        __typename
      }
      createdAt
      updatedAt
      notebookNotesId
      noteGeneratedImageId
      __typename
    }
  }
`;
export const onCreateNoteConnection = /* GraphQL */ `
  subscription OnCreateNoteConnection(
    $filter: ModelSubscriptionNoteConnectionFilterInput
    $sourceNote: String
  ) {
    onCreateNoteConnection(filter: $filter, sourceNote: $sourceNote) {
      id
      sourceNote {
        id
        title
        content
        createdAt
        updatedAt
        notebookNotesId
        noteGeneratedImageId
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
        __typename
      }
      order
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNoteConnection = /* GraphQL */ `
  subscription OnUpdateNoteConnection(
    $filter: ModelSubscriptionNoteConnectionFilterInput
    $sourceNote: String
  ) {
    onUpdateNoteConnection(filter: $filter, sourceNote: $sourceNote) {
      id
      sourceNote {
        id
        title
        content
        createdAt
        updatedAt
        notebookNotesId
        noteGeneratedImageId
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
        __typename
      }
      order
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNoteConnection = /* GraphQL */ `
  subscription OnDeleteNoteConnection(
    $filter: ModelSubscriptionNoteConnectionFilterInput
    $sourceNote: String
  ) {
    onDeleteNoteConnection(filter: $filter, sourceNote: $sourceNote) {
      id
      sourceNote {
        id
        title
        content
        createdAt
        updatedAt
        notebookNotesId
        noteGeneratedImageId
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
        __typename
      }
      order
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateNotebookOutput = /* GraphQL */ `
  subscription OnCreateNotebookOutput(
    $filter: ModelSubscriptionNotebookOutputFilterInput
    $notebook: String
  ) {
    onCreateNotebookOutput(filter: $filter, notebook: $notebook) {
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
      __typename
    }
  }
`;
export const onUpdateNotebookOutput = /* GraphQL */ `
  subscription OnUpdateNotebookOutput(
    $filter: ModelSubscriptionNotebookOutputFilterInput
    $notebook: String
  ) {
    onUpdateNotebookOutput(filter: $filter, notebook: $notebook) {
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
      __typename
    }
  }
`;
export const onDeleteNotebookOutput = /* GraphQL */ `
  subscription OnDeleteNotebookOutput(
    $filter: ModelSubscriptionNotebookOutputFilterInput
    $notebook: String
  ) {
    onDeleteNotebookOutput(filter: $filter, notebook: $notebook) {
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
      __typename
    }
  }
`;
export const onCreateGeneratedImage = /* GraphQL */ `
  subscription OnCreateGeneratedImage(
    $filter: ModelSubscriptionGeneratedImageFilterInput
    $notebookOutput: String
  ) {
    onCreateGeneratedImage(filter: $filter, notebookOutput: $notebookOutput) {
      id
      notebookOutput {
        id
        title
        content
        pdfUrl
        createdAt
        updatedAt
        notebookNotebookOutputsId
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
        __typename
      }
      imageUrl
      createdAt
      updatedAt
      notebookOutputGeneratedImagesId
      generatedImageNoteId
      __typename
    }
  }
`;
export const onUpdateGeneratedImage = /* GraphQL */ `
  subscription OnUpdateGeneratedImage(
    $filter: ModelSubscriptionGeneratedImageFilterInput
    $notebookOutput: String
  ) {
    onUpdateGeneratedImage(filter: $filter, notebookOutput: $notebookOutput) {
      id
      notebookOutput {
        id
        title
        content
        pdfUrl
        createdAt
        updatedAt
        notebookNotebookOutputsId
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
        __typename
      }
      imageUrl
      createdAt
      updatedAt
      notebookOutputGeneratedImagesId
      generatedImageNoteId
      __typename
    }
  }
`;
export const onDeleteGeneratedImage = /* GraphQL */ `
  subscription OnDeleteGeneratedImage(
    $filter: ModelSubscriptionGeneratedImageFilterInput
    $notebookOutput: String
  ) {
    onDeleteGeneratedImage(filter: $filter, notebookOutput: $notebookOutput) {
      id
      notebookOutput {
        id
        title
        content
        pdfUrl
        createdAt
        updatedAt
        notebookNotebookOutputsId
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
        __typename
      }
      imageUrl
      createdAt
      updatedAt
      notebookOutputGeneratedImagesId
      generatedImageNoteId
      __typename
    }
  }
`;
