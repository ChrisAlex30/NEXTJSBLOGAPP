import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{ cache: 'no-store' })
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

export async function generateMetadata ({params}) {

  const data=await getData(params.id)

  return{
      title: data.title,
      description: data.desc,
  }
}

const BlogPost = async({params}) => {
    const data=await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
            </h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Alex</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, libero? Eligendi maxime tempora accusamus quidem doloremque expedita, quisquam explicabo, autem saepe animi, nostrum et distinctio tenetur incidunt commodi ab beatae!
         Molestiae alias quasi eius quibusdam laudantium velit facere fugiat ducimus neque suscipit aliquid ipsa voluptatem accusantium laborum quisquam porro, eveniet pariatur nisi. Eos hic quasi porro. Eaque doloremque facere repellat?
         Consectetur quas voluptatem laborum reiciendis sed modi facilis minus adipisci non dicta! Iure laborum at, sed totam perferendis ad, vel atque, voluptas optio deserunt aut commodi architecto itaque explicabo temporibus.
         Corporis officia nostrum necessitatibus repudiandae quas culpa ad non sapiente, atque vitae earum iure inventore? Sint fugiat voluptates vitae error facere, eos illo in id aperiam cum necessitatibus ad pariatur?
         Cum quibusdam mollitia repellendus corrupti expedita, facere consequatur saepe at numquam minima hic deserunt a similique eius voluptatibus iste ex impedit! Deleniti, placeat culpa. Quo ratione voluptatum delectus error consequatur.
        </p>
      </div>
    </div>
  );
}

export default BlogPost