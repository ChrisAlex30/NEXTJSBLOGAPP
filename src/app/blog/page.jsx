import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData() {
  
  const res = await fetch('http://localhost:3000/api/posts',{ cache: 'no-store' })
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

const Blog = async() => {
  const data=await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((d)=>{
          return (
      <Link href={`/blog/${d._id}`} className={styles.container} key={d._id}>
          <div className={styles.imageContainer}>
            <Image
              src={d.img}
              alt=''
              height={400}
              width={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{d.title}</h1>
            <p className={styles.desc}>{d.desc}</p>
          </div>
      </Link>
          )
    })}
     
    </div>
  )
}

export default Blog