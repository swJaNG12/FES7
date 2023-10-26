import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const baseUrl = 'https://api.mandarin.weniv.co.kr/';
  const [email, setInputEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const login = async () => {
    try {
      const url = `${baseUrl}user/login`;
      const option = {
        url: url,
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        data: {
          user: {
            email,
            password,
          },
        },
      };
      const res = await axios(option);
      if (res.data.status === 422) {
        throw new Error(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const submitLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <h1>로그인</h1>
      <section>
        <h2>이메일 비밀번호 입력하는 곳</h2>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            placeholder="이메일 입력"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            type="text"
            placeholder="비밀번호 입력"
            value={password}
            onChange={onChangePassword}
          />
          <button>로그인</button>
        </form>
      </section>
    </>
  );
}
