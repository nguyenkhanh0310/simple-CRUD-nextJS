"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from 'react-bootstrap/Button';

export default function Facebook() {
  const router = useRouter();

  const handleBtn = () => {
    // alert("me");
    router.push("/");
  };

  return (
    <div>
      Facebook page
      <div>
        <Button variant="success">Hỏi dân IT</Button>
        <button onClick={() => handleBtn()}>Back Home</button>
      </div>
    </div>
  );
}
