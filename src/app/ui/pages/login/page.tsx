import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "smpark's portfolio",
  description: 'smpark의 포트폴리오 페이지입니다. 소개, 스킬, 경력 등을 알 수 있어요. :)',
};

const LoginPage = () => {
  return (
    <div>
      <h1>Welcome to Next.js 13 App</h1>
      <p>This is the home page of your Next.js application.</p>
    </div>
  );
};

export default LoginPage;
