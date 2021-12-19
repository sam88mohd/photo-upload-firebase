import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);

    uploadBytesResumable(storageRef, file).on(
      "state_changed",
      (snap) => {
        let percentages = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentages);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await getDownloadURL(storageRef);
        await addDoc(collection(db, "images"), {
          url,
          createdAt: serverTimestamp(),
        });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
