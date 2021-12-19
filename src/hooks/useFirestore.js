import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFirestore = (collect) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, collect), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsubscribe();
  }, [collect]);

  return { docs };
};

export default useFirestore;
