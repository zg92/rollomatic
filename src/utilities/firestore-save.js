import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { firebaseConfig } from "./admin-firebase";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getDate = () => {
  return new Date().toLocaleString().split(",")[0];
};

export const saveRoll = async (user, rollName, rollSettings, shotsList) => {
  if (!user) return;
  const userDocRef = doc(db, "users", user);

  const structuredData = {
    metaData: {
      rollName: rollName,
      date: getDate(),
      filmStock: rollSettings["film-stock"],
      iso: rollSettings.iso,
    },
    rollData: [...shotsList],
  };

  try {
    await setDoc(doc(userDocRef, "rolls", rollName), structuredData);
  } catch (e) {
    console.log("Error adding document", e);
  }
};

export const getRolls = async (user) => {
  const userDocRef = collection(db, "users", user, "rolls");
  try {
    return await getDocs(userDocRef);
  } catch (e) {
    console.log(e);
  }
};
