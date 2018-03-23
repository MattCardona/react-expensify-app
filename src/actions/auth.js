import {firebase, googleAuthProvider, githubAuthProvider} from '../firebase/firebase.js';

export const login = (uid) => ({
  type: 'LOGIN',
  uid: uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginGithub = () => {
  return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider);
  }
}

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
};