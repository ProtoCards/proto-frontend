import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

export const doSignOut = () =>
  auth.signOut()

let currentUser

auth.onAuthStateChanged(function(user) {
  currentUser = user
});
console.log("current user:", currentUser)

export {currentUser}
