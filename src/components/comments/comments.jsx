import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
  const status = 'authenticated';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {/* if user isn't logged in, send them to login page */}
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Post</button>
        </div>
      ) : (
        <Link href="/login"> Login to write a comment </Link>
      )}
      {/* start: comment section  */}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>03.15.2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            inventore assumenda repellendus voluptatum labore numquam pariatur
            laudantium placeat quis provident enim a alias quod, nobis, optio
            quas eius doloremque temporibus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
