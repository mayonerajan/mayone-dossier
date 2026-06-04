// app/JoinForm.tsx
"use client";

import React, { useActionState } from 'react';
import { joinNetworkAction } from './actions';

export default function JoinForm() {
  const [state, formAction, isPending] = useActionState(joinNetworkAction, { 
    success: false, 
    error: null 
  });

  if (state.success) {
    return (
      <div className="bg-emerald-950/20 border border-emerald-900 p-4 text-center w-full">
        <p className="text-emerald-400 font-bold tracking-widest uppercase text-xs font-mono">
          [ PROTOCOL ACCEPTED // VECTOR LOGGED ]
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form action={formAction} className="flex flex-col sm:flex-row gap-3">
        <input 
          type="email" 
          name="email"
          placeholder="SECURE EMAIL ADDRESS" 
          required
          disabled={isPending}
          className="bg-gray-900 border border-gray-700 text-white px-4 py-2 font-mono text-sm focus:outline-none focus:border-indigo-500 w-full sm:w-auto flex-grow disabled:opacity-50"
        />
        <button 
          type="submit" 
          disabled={isPending}
          className="px-6 py-2 bg-indigo-600 text-white font-bold hover:bg-indigo-500 text-sm font-mono transition-colors text-center whitespace-nowrap disabled:bg-indigo-900 disabled:cursor-not-allowed"
        >
          {isPending ? "TRANSMITTING..." : "JOIN NETWORK"}
        </button>
      </form>
      {state.error && (
        <p className="text-red-400 text-xs font-mono uppercase tracking-widest mt-3">
          [ ERROR: {state.error} ]
        </p>
      )}
    </div>
  );
}