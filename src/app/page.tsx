"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@mui/material";
import { auth } from "../firebase";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    });
  });

  return <main className=""></main>;
}
