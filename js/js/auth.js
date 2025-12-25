import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.register = async () => {
  const email = emailInp.value;
  const pass = passInp.value;
  const phone = phoneInp.value;
  const pin = pinInp.value;

  if(pass.length < 8) return alert("Password min 8");

  const u = await createUserWithEmailAndPassword(auth, email, pass);

  await setDoc(doc(db,"users",u.user.uid),{
    email, phone, pin,
    tickets: 10,
    balance: 0
  });

  location.href="dashboard.html";
};

window.login = async () => {
  await signInWithEmailAndPassword(auth,emailInp.value,passInp.value);
  location.href="dashboard.html";
};
