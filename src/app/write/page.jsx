'use client';
import Image from 'next/image';
import styles from './writePage.module.css';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const WritePage = () => {
  // open container only when clicked
  const [open, setOpen] = useState(false);
  // value for react quill editor
  const [value, setValue] = useState('');
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.open}>
            <button className={styles.button}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>{' '}
            <button className={styles.button}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>{' '}
            <button className={styles.button}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;

// input, button, text editor