import React from 'react';
import axios from 'axios';

export default function LoginPageTest() {
  const url = 'https://api.mandarin.weniv.co.kr/';
  let token = '';
  const loginApiTest = () => {
    // 서버랑 통신해서 로그인 진행하는 함수

    // axios는 보통 option 객체로 통신
    const option = {
      url: 'https://api.mandarin.weniv.co.kr/user/login',
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      // axios는 body 가 data이다.
      data: {
        user: {
          email: 'testApi890@test.com',
          password: 'testApi890',
        },
      },
    };
    axios(option)
      .then((res) => {
        console.log(res);
        console.log(res.data.user.token);
        if (res.data.status === 422) {
          console.log('아이디 비밀번호 일치하지 않습니다.');
          return;
        }
        console.log(res.data.user.username + '님 안녕하세요');
        token = res.data.user.token;
      })
      .catch((err) => console.error(err));
  };

  // 나의 게시글 목록
  const getMyPostTest = () => {
    const option = {
      url: `${url}/post/testApi890/userpost`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    };
    axios(option)
      .then((res) => {
        const postList = res.data.post;
        console.log(res);
        console.log('then');
        if (postList.length === 0) {
          console.log('작성한 게시물이 없어요!!');
        } else {
          console.log(postList);
          postList.forEach((post) => {
            console.log('작성한 사람' + post.author.accoountname);
            console.log('내용물 :' + post.content);
          });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <button onClick={loginApiTest}>login</button>
      <button onClick={getMyPostTest}>게시물보기</button>
    </div>
  );
}
