import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "./admin-firebase";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const saveRoll = async (rollName, rollSettings, shot) => {
  try {
    const docRef = await addDoc(collection(db, "rolls"), {
      rollname: rollName,
      metadata: {
        "film-stock": rollSettings["film-stock"],
        iso: rollSettings.iso,
        position: shot.position,
        aperture: shot.aperture,
        shutterspeed: shot.shutterspeed,
      },
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document", e);
  }
};
