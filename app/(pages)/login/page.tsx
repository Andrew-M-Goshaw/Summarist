"use client";

import { FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase/init";
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e. currentTarget);

    try {
      await signInWithEmailAndPassword(
        auth,
        String(data.get("email")),
        String(data.get("password"))
      );
      router.push("/for-you");
    } catch {
      alert("Invalid email or password");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}