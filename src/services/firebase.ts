import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import firebaseConfigs from "../configs/FireBase";
import { TPaciente } from "../utils/types/Paciente";

// Initialize Firebase
const app = initializeApp(firebaseConfigs);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addPaciente = async (
  userId: string,
  paciente: TPaciente
): Promise<void> => {
  const docRef = await addDoc(collection(db, "pacientes"), {
    ...paciente,
    userId,
    createdAt: new Date().toISOString(),
  });
  console.log(docRef);

  return;
};
