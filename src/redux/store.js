import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import commentsReducer from "./comments/commentsSlice";

const userInputPersistConfig = {
  key: "userInput",
  storage,
  whitelist: "userInput",
};

const persistedCommentsReducer = persistReducer(
  userInputPersistConfig,
  commentsReducer
);

export const store = configureStore({
  reducer: {
    comments: persistedCommentsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
