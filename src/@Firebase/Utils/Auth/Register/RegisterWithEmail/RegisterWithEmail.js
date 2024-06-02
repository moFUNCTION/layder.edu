import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { auth, firestore_db, storage } from "../../../../Config/Config";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export class RegisterWithEmail {
  #collection = "users";
  constructor({ username, email, password, image, interests, role, age }) {
    this.displayName = username;
    this.email = email;
    this.password = password;
    this.image = image;
    this.interests = interests;
    this.role = role;
    this.age = age;
  }
  async #uploadImage({ file }) {
    const path = `users/${file.name + v4()}`;
    const imageRef = ref(storage, path);
    const uploadReq = await uploadBytes(imageRef, file);
    const URL = await getDownloadURL(uploadReq.ref);
    return { URL, path };
  }
  async #SaveToFirestore({ imageURL, path, userId }) {
    const userRef = doc(firestore_db, this.#collection, userId);
    const data = {
      displayName: this.displayName,
      email: this.email,
      photoURL: imageURL,
      role: this.role,
      interests: this.interests,
      age: Number(this.age),
      createdAt: serverTimestamp(),
    };
    if (path) {
      data.photoPath = path;
    }
    const req = await setDoc(userRef, data);
  }
  async requist() {
    const signUpRequist = await createUserWithEmailAndPassword(
      auth,
      this.email,
      this.password
    );
    if (!this.image) {
      const saveToDbReq = await this.#SaveToFirestore({
        userId: signUpRequist.user.uid,
        imageURL: `https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=${Math.random().toString()}`,
      });
      return signUpRequist;
    }
    const { URL, path } = await this.#uploadImage({ file: this.image });
    const saveToDbReq = await this.#SaveToFirestore({
      userId: signUpRequist.user.uid,
      imageURL: URL,
      path,
    });
    return signUpRequist;
  }
}
