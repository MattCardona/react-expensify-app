import {login, logout} from '../../actions/auth.js';
import uuid from 'uuid';

test("should login with id", () => {
  const id = uuid();
  const action = login(id);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: id
  });
});

test("should call logout", () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});