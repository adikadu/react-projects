import { configureStore, createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
  name: "experience",
  initialState: {},
  reducers: {
    initializeData(state, action) {
      return action.payload;
    },
    changeCurrentActive(state, action) {
      state.currentActive = action.payload;
    },
  },
});

export const experienceActions = experienceSlice.actions;

const store = configureStore({
  reducer: experienceSlice.reducer,
});

export const getExperienceAction = () => {
  return async (dispatch) => {
    const res = await fetch("https://course-api.com/react-tabs-project");
    const data = await res.json();
    dispatch(
      experienceActions.initializeData({
        info: data,
        currentActive: data[0].id,
      })
    );
  };
};

export default store;
