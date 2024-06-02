import React, { useEffect, useReducer } from "react";
import { GetUserReducer, INITIAL_STATE } from "./Reducer/GetUserReducer";
import {
  collection,
  doc,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, firestore_db } from "../../Config/Config";
import { onAuthStateChanged } from "firebase/auth";
export const useAuth = () => {
  const [user, dispach] = useReducer(GetUserReducer, INITIAL_STATE);
  const HandleError = (err) => {
    dispach({
      type: "FETCH_ERROR",
      payload: err,
    });
  };
  const getUserDataFromFirestore = (userId) => {
    const userRef = query(
      collection(firestore_db, "users"),
      where("__name__", "==", userId),
      limit(1)
    );

    onSnapshot(
      userRef,
      (snapshot) => {
        dispach({
          type: "FETCH_SUCCESS",
          payload: snapshot.docs.map((doc) => {
            return doc.data();
          })[0],
        });
      },
      (err) => {
        HandleError(err.code.message || err.message);
      }
    );
  };
  const getUser = () => {
    dispach({
      type: "FETCH_START",
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserDataFromFirestore(user.uid);
      } else {
        dispach({
          type: "FETCH_SUCCESS",
          payload: undefined,
        });
      }
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return user;
};
