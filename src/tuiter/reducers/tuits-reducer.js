import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';
import {deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
};

const initialState = {
  tuits: [],
  loading: false
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
          .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload
        },
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
        },
    [findTuitsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }
  },

  reducers: { }
});

export const {createTuit, deleteTuit, updateTuitLikes} = tuitsSlice.actions;
export default tuitsSlice.reducer;