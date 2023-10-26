import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function JoinPage() {
  const baseUrl = 'https://api.mandarin.weniv.co.kr/';
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeAccountname = (e) => {
    setAccountname(e.target.value);
  };

  const join = async () => {
    const url = `${baseUrl}user`;

    try {
      const option = {
        url: url,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        data: {
          user: {
            username,
            email,
            password,
            accountname,
          },
        },
      };
      console.log(option.data);
      const res = await axios(option);
      console.log(res);

      if (res.data.status === 422) {
        throw new Error(res.response.message);
      }

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <h2>이메일로 회원가입</h2>
        <div>
          <label htmlFor="emailInput">이메일</label>
          <input
            id="emailInput"
            name="email"
            placeholder="이메일 주소를 알려주세요."
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="passwordInput">비밀번호</label>
          <input
            id="passwordInput"
            name="password"
            placeholder="비밀번호를 알려주세요."
            value={password}
            onChange={onChangePassword}
          />
        </div>
      </section>
      <section>
        <h2>프로필 설정</h2>
        <div>
          <label htmlFor="profileImg"></label>
          <img alt="" src="" srcSet="" id="imagePre" />
          <input
            type="file"
            id="profileImg"
            name="image"
            className="ir"
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="userNameInput">사용자 이름</label>
          <input
            type="text"
            id="userNameInput"
            name="username"
            placeholder="2~10자 이내여야 합니다."
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div>
          <label htmlFor="userIdInput">계정 Id</label>
          <input
            type="text"
            id="userIdInput"
            name="accountName"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
            value={accountname}
            onChange={onChangeAccountname}
          />
        </div>
        <div>
          <label htmlFor="userIntroInput">소개</label>
          <input
            type="text"
            id="userIntroInput"
            name="intro"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요."
          />
        </div>
        <button type="button" onClick={join}>
          웰핏 회원가입
        </button>
      </section>
    </>
  );
}
