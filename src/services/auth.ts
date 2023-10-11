import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { auth } from "../firebase";

class UserAuth {
  signUpUser(email: string, password: string, router: any): void {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // Redirect to dashboard
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  signInUser(email: string, password: string, router: any) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Redirect to dashboard
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  logOutUser(router: AppRouterInstance) {
    signOut(auth)
      .then(() => {
        // Logged out & redirect to dashboard
        router.push("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  sendResetEmail(email: string) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Email was sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}

const userAuth = new UserAuth();
export default userAuth;
