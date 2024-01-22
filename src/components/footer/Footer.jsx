import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 NEXT-JS. All rights reserved.</div>
        <div className={styles.social}>
          <Image src='/1.png' className={styles.icon}  width={15} height={15} alt="fb" />
          <Image src='/2.png' className={styles.icon}  width={15} height={15} alt="ig" />
          <Image src='/3.png' className={styles.icon}  width={15} height={15} alt="tt" />
          <Image src='/4.png' className={styles.icon}  width={15} height={15} alt="yt" />
        </div>
    </div>
  )
}

export default Footer