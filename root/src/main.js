import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

export const firebaseConfig = {
  apiKey: "AIzaSyD26pN13-Ym5hKKSPYNzVvSC1FJXzoc4-E",
  authDomain: "management-for-something.firebaseapp.com",
  projectId: "management-for-something",
  storageBucket: "management-for-something.appspot.com",
  messagingSenderId: "184600959843",
  appId: "1:184600959843:web:2cfb86b5257c168818d156",
  measurementId: "G-6R7012RMDC",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
console.log(app.name)