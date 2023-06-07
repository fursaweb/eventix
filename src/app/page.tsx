"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@mui/material";
import Dashboard from "./(pages)/dashboard/page";
import Signup from "./(pages)/signup/page";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [isUserLog, setUserLog] = useState<boolean>(false);

  const router = useRouter();

  const isUserLoggedIn = () => {
    if (!isUserLog) router.push("/signup");
  };

  useEffect(() => {
    isUserLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className="">
        <Container maxWidth="sm">
          <h1>main</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}
