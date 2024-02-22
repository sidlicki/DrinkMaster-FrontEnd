import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, registerThunk, refreshThunk } from './auth.operations';

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      // .addCase(logOutThunk.fulfilled, () => {
      //   return initialState;
      // })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          // logOutThunk.pending,
          refreshThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          // logOutThunk.rejected,
          refreshThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

// const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
