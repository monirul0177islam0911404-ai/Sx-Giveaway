import { db } from "./firebase.js";
import { collection, getDocs, updateDoc, doc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const ws=await getDocs(collection(db,"withdraws"));
ws.forEach(w=>{
  list.innerHTML+=`
  <li>${w.data().uid} ৳${w.data().amount}
  <button onclick="pay('${w.id}')">Paid</button></li>`;
});

window.pay=async(id)=>{
  await updateDoc(doc(db,"withdraws",id),{status:"Paid"});
  alert("Done");
};
