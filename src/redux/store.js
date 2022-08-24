import { configureStore } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
import { filter } from 'redux/redusers';
import { contactsApi } from 'service/API';

export const store = configureStore({
  reducer: { [contactsApi.reducerPath]: contactsApi.reducer, filter },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  //logger,
});
