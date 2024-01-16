import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/User/userSlice";
import movieSlice from "../features/movies/movieSlice";

const Store = configureStore({
  reducer: {
    userSlice: userSlice,
    movieSlice: movieSlice,
  },
});

export default Store;
