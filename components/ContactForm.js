'use client';

import { useState } from 'react';
import styles from '@/styles/story.module.css';

const TOPICS = ['Editorial question', 'Product submission', 'Partnership', 'Press', 'Something else'];

const EMPTY = { name: '', email: '', topic: TOPICS[0], message: '' };

/**
 * 联系表单。校验通过后在页面上确认，不把内容发到服务器。
 * @returns {JSX.Element}
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  /**
   * @param {import('react').ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>} event
   */
  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event
   */
  function onSubmit(event) {
    event.preventDefault();
    const next = {};
    if (values.name.trim().length < 2) next.name = 'Tell us who to answer.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'That email does not look usable.';
    if (values.message.trim().length < 12) next.message = 'A sentence or two is enough, but not less.';
    setErrors(next);
    setSent(Object.keys(next).length === 0);
  }

  if (sent) {
    return (
      <div className={styles.success} role="status">
        <h3>Noted.</h3>
        <p>The desk has your message and will reply at {values.email}.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label className={styles.field}>
        <span>Name</span>
        <input name="name" value={values.name} onChange={update} autoComplete="name" />
        {errors.name ? <small className={styles.fieldError}>{errors.name}</small> : null}
      </label>
      <label className={styles.field}>
        <span>Email</span>
        <input name="email" type="email" value={values.email} onChange={update} autoComplete="email" />
        {errors.email ? <small className={styles.fieldError}>{errors.email}</small> : null}
      </label>
      <label className={styles.field}>
        <span>Topic</span>
        <select name="topic" value={values.topic} onChange={update}>
          {TOPICS.map((topic) => <option key={topic}>{topic}</option>)}
        </select>
      </label>
      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" value={values.message} onChange={update} />
        {errors.message ? <small className={styles.fieldError}>{errors.message}</small> : null}
      </label>
      <button className="btn btn-primary" type="submit">Send</button>
    </form>
  );
}
