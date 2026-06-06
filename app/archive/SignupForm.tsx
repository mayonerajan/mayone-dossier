'use client';

import { useState } from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setMessage('You\u2019re on the list. The book is where this is going.');
        setEmail('');
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setMessage(data?.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <p className="font-mono text-sm text-indigo-300 text-center">{message}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 max-w-sm bg-gray-900 border border-gray-700 text-white px-4 py-3 text-sm rounded focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-white text-gray-900 px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Joining\u2026' : 'Send Me the First Chapter'}
      </button>
      {status === 'error' && (
        <p className="font-mono text-xs text-red-400 mt-2 sm:absolute sm:mt-14">{message}</p>
      )}
    </form>
  );
}
