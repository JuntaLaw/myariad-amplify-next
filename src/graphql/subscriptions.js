/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onCreateNote(filter: $filter, owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onUpdateNote(filter: $filter, owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onDeleteNote(filter: $filter, owner: $owner) {
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
export const onCreateNoteConnection = /* GraphQL */ `
  subscription OnCreateNoteConnection(
    $filter: ModelSubscriptionNoteConnectionFilterInput
    $owner: String
  ) {
    onCreateNoteConnection(filter: $filter, owner: $owner) {
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
export const onUpdateNoteConnection = /* GraphQL */ `
  subscription OnUpdateNoteConnection(
    $filter: ModelSubscriptionNoteConnectionFilterInput
    $owner: String
  ) {
    onUpdateNoteConnection(filter: $filter, owner: $owner) {
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
export const onDeleteNoteConnection = /* GraphQL */ `
  subscription OnDeleteNoteConnection(
    $filter: ModelSubscriptionNoteConnectionFilterInput
    $owner: String
  ) {
    onDeleteNoteConnection(filter: $filter, owner: $owner) {
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
export const onCreateNotebookOutput = /* GraphQL */ `
  subscription OnCreateNotebookOutput(
    $filter: ModelSubscriptionNotebookOutputFilterInput
    $owner: String
  ) {
    onCreateNotebookOutput(filter: $filter, owner: $owner) {
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
export const onUpdateNotebookOutput = /* GraphQL */ `
  subscription OnUpdateNotebookOutput(
    $filter: ModelSubscriptionNotebookOutputFilterInput
    $owner: String
  ) {
    onUpdateNotebookOutput(filter: $filter, owner: $owner) {
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
export const onDeleteNotebookOutput = /* GraphQL */ `
  subscription OnDeleteNotebookOutput(
    $filter: ModelSubscriptionNotebookOutputFilterInput
    $owner: String
  ) {
    onDeleteNotebookOutput(filter: $filter, owner: $owner) {
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
export const onCreateGeneratedImage = /* GraphQL */ `
  subscription OnCreateGeneratedImage(
    $filter: ModelSubscriptionGeneratedImageFilterInput
    $owner: String
  ) {
    onCreateGeneratedImage(filter: $filter, owner: $owner) {
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
export const onUpdateGeneratedImage = /* GraphQL */ `
  subscription OnUpdateGeneratedImage(
    $filter: ModelSubscriptionGeneratedImageFilterInput
    $owner: String
  ) {
    onUpdateGeneratedImage(filter: $filter, owner: $owner) {
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
export const onDeleteGeneratedImage = /* GraphQL */ `
  subscription OnDeleteGeneratedImage(
    $filter: ModelSubscriptionGeneratedImageFilterInput
    $owner: String
  ) {
    onDeleteGeneratedImage(filter: $filter, owner: $owner) {
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
