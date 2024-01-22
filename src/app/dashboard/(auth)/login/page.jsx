"use client"
import Button from '@/components/button/Button'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from "./page.module.css";
import React from 'react'

const Login = () => {

  const router = useRouter();
  const session=useSession()

  if(session.status==="loading")
  return <p>Loading...</p>

  if(session.status==="authenticated")
  return router?.push("/dashboard")


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("Credentials",{email,password})
  };


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
       
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>LOGIN</button>
      </form>
<button onClick={()=>signIn("google")} >LOGIN WITH GOOGLE</button>
    </div>
  )
}

export default Login