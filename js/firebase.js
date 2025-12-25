const firebaseConfig = {
  apiKey: "AIzaSyAagqWoZFEDYbaFzlxdZ8uS3C6C7JtR2Xw",
  authDomain: "giveaway-ff1bc.firebaseapp.com",
  projectId: "giveaway-ff1bc",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
