import React, { useState } from 'react';

export default function PasswordGate({ password, children }) {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  if (unlocked) return <>{children}</>;

  return (
    <div>
      <input
        type="password"
        placeholder="輸入密碼"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && setUnlocked(input === password)}
      />
      <button onClick={() => setUnlocked(input === password)}>
        解鎖
      </button>
      {input && input !== password && <p>密碼錯誤</p>}
    </div>
  );
}