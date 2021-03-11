import { createSlice } from '@reduxjs/toolkit';
export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    authors: [],
    cloneAuthors: [],
    filters: {},
  },
  reducers: {
    authorsReceived(state, action) {
      const authors = action.payload;
      state.authors = authors;
      state.cloneAuthors = authors;
      return state;
    },
    authorsFiltering(state, action) {
      const { search_keys } = action.payload;
      let authors = state.cloneAuthors;
      if (search_keys.title && search_keys.title !== 'All') {
        authors = state.cloneAuthors.filter(
          (item) => item.title === search_keys.title,
        );
      }
      if (search_keys.firstName) {
        authors = state.cloneAuthors.filter((item) =>
          item.firstName
            .toLowerCase()
            .includes(search_keys.firstName.toLowerCase()),
        );
      }
      if (search_keys.lastName) {
        authors = state.cloneAuthors.filter((item) =>
          item.lastName
            .toLowerCase()
            .includes(search_keys.lastName.toLowerCase()),
        );
      }
      if (search_keys.email) {
        authors = state.cloneAuthors.filter((item) =>
          item.email.toLowerCase().includes(search_keys.email.toLowerCase()),
        );
      }
      state.authors = authors;
      state.filters = search_keys;
    },
  },
});

export const { authorsReceived, authorsFiltering } = authorSlice.actions;

export const authorSelector = (state) => state.author;
