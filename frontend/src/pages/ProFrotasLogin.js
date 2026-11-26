import React from 'react';
import blingHtml from './bling_login_raw';

export default function ProFrotasLogin() {
  return <iframe srcDoc={blingHtml} title="Login" style={{ width: '100vw', height: '100vh', border: 'none', display: 'block' }} />;
}
