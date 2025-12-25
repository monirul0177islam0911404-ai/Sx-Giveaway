import { auth, db } from "./firebase.js";
import { doc, getDoc, updateDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

auth.onAuthStateChanged(async u=>{
  if(!u) return;
  const ref=doc(db,"users",u.uid);
  const s=await getDoc(ref);
  tickets.innerText=s.data().tickets;
  balance.innerText=s.data().balance;
});

window.watchAd=async()=>{
  const u=auth.currentUser;
  const ref=doc(db,"users",u.uid);
  const s=await getDoc(ref);
  await updateDoc(ref,{tickets:s.data().tickets+2});
  alert("Ticket Added");
};
