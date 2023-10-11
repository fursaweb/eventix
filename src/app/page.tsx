"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, FC } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    });
  }, [router]);

  return <main className=""></main>;
}
