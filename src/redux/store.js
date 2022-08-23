import { configureStore } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
//import { contactsReducer } from 'redux/contactsSlice';
import { contactsApi } from 'service/API';

export const store = configureStore({
  reducer: { [contactsApi.reducerPath]: contactsApi.reducer },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  //logger,
});
