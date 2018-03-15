import authReducer from '../../reducers/auth.js';
import uuid from 'uuid';

test("should set uid for LOGIN", () => {
  const id = uuid();
  const action = {type: "LOGIN", uid: id};
  const currentState = {};
  const state = authReducer(currentState, action);
  expect(state.uid).toBe(id);
});

test("should clear uid for LOGOUT", () => {
  const id = uuid();
  const action = {type: "LOGOUT"};
  const currentState = {uid: id};
  const state = authReducer(currentState, action);
  expect(state).toEqual({});
});