import Link from 'next/link';
import React from 'react';

export default function login() {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/login">
        <a>login</a>
      </Link>
      login
    </div>
  );
}
