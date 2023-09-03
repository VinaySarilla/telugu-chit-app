import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEp1dRJ_SeQfQBeP3nLwwz3t4oig5H9-Q",
  authDomain: "telugu-bc-13876.firebaseapp.com",
  projectId: "telugu-bc-13876",
  storageBucket: "telugu-bc-13876.appspot.com",
  messagingSenderId: "537671751834",
  appId: "1:537671751834:web:1d455d7a466b05bf97a723",
  measurementId: "G-JHGPJR612H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getMonths = async (setMonths) => {
  const q = query(collection(db, "months"));

  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    data.push(doc.data());
    console.log(doc.id, " => ", doc.data());
  });

  setMonths(data);
  //   console.log(snapshot.docs.map((doc) => doc.data()));
};

export const getUsers = async (setUsers) => {
  const q = query(collection(db, "users"));

  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    data.push(doc.data());
    console.log(doc.id, " => ", doc.data());
  });

  setUsers(data);
  //   console.log(snapshot.docs.map((doc) => doc.data()));
};

export const getBCData = async (setBCData) => {
    const q = query(collection(db, "bcData"));
    
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
    
        data.push(doc.data());
        console.log(doc.id, " => ", doc.data());
    });
    
    setBCData(data);
    //   console.log(snapshot.docs.map((doc) => doc.data()));
}

export const createCurrentMonthBC = async (data) => {
  setDoc(doc(db, "bcData", `${data.id}`), {
    ...data,
  });

  const frankDocRef = doc(db, "users", `${data.id}`);

  const done = updateDoc(frankDocRef, {
    status: "completed",
  });

  return done;

  //   setDoc(doc(db, "users", `${data.id}`), {
  //     status: "completed",
  //   });
};
