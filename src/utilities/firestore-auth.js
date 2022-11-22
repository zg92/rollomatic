import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./admin-firebase";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const createUser = async (email, password) => {
  if (!email || !password) return;
  await createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email, password) => {
  if (!email || !password) return;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return e;
  }
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const logoutUser = async () => {
  await signOut(auth);
};
