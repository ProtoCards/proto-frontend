import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

export const doSignOut = () =>
  auth.signOut()

export const getUser =  () => {
  return new Promise(function (resolve, reject) {
    auth.onAuthStateChanged(function (user) {
      resolve(user);
    });
  });
}
