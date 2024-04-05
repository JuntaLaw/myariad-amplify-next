// src/graphql/API.js
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './queries';
import * as mutations from './mutations';
import * as subscriptions from './subscriptions';

export const fetchNotebooks = async () => {
  try {
    const { data } = await API.graphql(graphqlOperation(queries.listNotebooks));
    return data.listNotebooks.items;
  } catch (error) {
    console.error("fetchNotebooks error:", error);
    throw error;
  }
};

export const createNotebook = async (title) => {
  try {
    const { data } = await API.graphql(graphqlOperation(mutations.createNotebook, { input: { title } }));
    return data.createNotebook;
  } catch (error) {
    console.error("createNotebook error:", error);
    throw error;
  }
};

export const updateNotebook = async (id, title) => {
  try {
    const { data } = await API.graphql(graphqlOperation(mutations.updateNotebook, { input: { id, title } }));
    return data.updateNotebook;
  } catch (error) {
    console.error("updateNotebook error:", error);
    throw error;
  }
};

export const deleteNotebook = async (id) => {
  try {
    await API.graphql(graphqlOperation(mutations.deleteNotebook, { input: { id } }));
  } catch (error) {
    console.error("deleteNotebook error:", error);
    throw error;
  }
};

export const fetchCardNotes = async (notebookId) => {
  try {
    const { data } = await API.graphql(graphqlOperation(queries.listNotes, { filter: { notebookId: { eq: notebookId } } }));
    return data.listNotes.items;
  } catch (error) {
    console.error("fetchCardNotes error:", error);
    throw error;
  }
};

export const createCardNote = async (notebookId, title, content) => {
  try {
    const { data } = await API.graphql(graphqlOperation(mutations.createNote, { input: { notebookId, title, content } }));
    return data.createNote;
  } catch (error) {
    console.error("createCardNote error:", error);
    throw error;
  }
};

export const updateCardNote = async (id, title, content) => {
  try {
    const { data } = await API.graphql(graphqlOperation(mutations.updateNote, { input: { id, title, content } }));
    return data.updateNote;
  } catch (error) {
    console.error("updateCardNote error:", error);
    throw error;
  }
};

export const deleteCardNote = async (id) => {
  try {
    await API.graphql(graphqlOperation(mutations.deleteNote, { input: { id } }));
  } catch (error) {
    console.error("deleteCardNote error:", error);
    throw error;
  }
};