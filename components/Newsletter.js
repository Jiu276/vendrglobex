'use client';

import { useState } from 'react';
import styles from '@/styles/home.module.css';

/**
 * 首页简报登记。只在浏览器里确认，不提交到服务器。
 * @returns {JSX.Element}
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event
   */
  function onSubmit(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter an email the desk can reply to.');
      setDone(false);
      return;
    }
    setError('');
    setDone(true);
  }

  return (
    <section className={styles.section} style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.news}>
          <div>
            <p className="kicker">Dispatch</p>
            <h2>One note when the desk ships something.</h2>
            <p className={styles.dek}>No daily drip. A letter when a review is actually finished.</p>
          </div>
          {done ? (
            <p className={styles.note}>You are on the list. We will write when there is something worth the paper.</p>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label className="sr-only" htmlFor="desk-email">Email</label>
              <input
                id="desk-email"
                type="email"
                value={email}
                placeholder="you@studio.com"
                onChange={(event) => setEmail(event.target.value)}
              />
              <button className="btn btn-primary" type="submit">Join</button>
              {error ? <p className={styles.error}>{error}</p> : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
