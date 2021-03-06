import { createStore } from 'redux';

export const ACTIONS = {
    SET_ALL_AUTHORS: 'SET_ALL_AUTHORS',
    FILTER_AUTHORS: 'FILTER_AUTHORS',
    SET_ALL_POST:'SET_ALL_POST'
};

const initialState = {
    authors: [],
    api_authors: [],
    posts:[],
    api_posts: [],
};

function authorReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_ALL_AUTHORS: {
      const { authors } = action.payload;
      return {
        ...state,
        authors,
        api_authors: authors,
      };
    }
    case ACTIONS.SET_ALL_POST: {
      const { posts } = action.payload;
      return {
        ...state,
        posts,
        api_posts: posts,
      };
    }
    case ACTIONS.FILTER_AUTHORS: {
        const { search_keys } = action.payload;
        let authors = state.api_authors ;
        if(search_keys.title && search_keys.title !== 'All'){
            authors = state.api_authors.filter((item) => item.title === search_keys.title);
        }
        if(search_keys.firstName){
            authors = state.api_authors.filter((item) => item.firstName.toLowerCase().includes(search_keys.firstName.toLowerCase()));
        }
        if(search_keys.lastName){
            authors = state.api_authors.filter((item) => item.lastName.toLowerCase().includes(search_keys.lastName.toLowerCase()));
        }
        if(search_keys.email){
            authors = state.api_authors.filter((item) => item.email.toLowerCase().includes(search_keys.email.toLowerCase()));
        }
        return {
          ...state,
          authors,
        };
      }
    default:
      return state;
  }
}

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export function createReduxStore() {
  const store = createStore(authorReducer, enableReduxDevTools);
  return store;
}