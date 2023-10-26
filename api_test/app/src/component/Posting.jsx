import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Posting() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const baseUrl = 'https://api.mandarin.weniv.co.kr/';
  const token = localStorage.getItem('token');

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };
  const upload = async (token) => {
    try {
      const url = `${baseUrl}user/myinfo`;
      const option = {
        url: url,
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(option);
      const res = await axios(option);
      console.log(res);
      const username = res.data.user.username;
      const newData = {
        username,
        comment,
      };
      setCommentList((prevState) => {
        const copyData = [...commentList];
        copyData.push(newData);
        return copyData;
      });
      console.log(commentList);
    } catch (error) {
      console.error(error);
    }
  };
  const commentSubmit = (e) => {
    e.preventDefault();
    upload(token);
  };

  // console.log(token);
  return (
    <>
      <h1>게시물 작성페이지</h1>
      <section>
        <ol>
          {commentList.map((el) => {
            return (
              <li>
                {el.username} : {el.comment}
              </li>
            );
          })}
        </ol>
      </section>
      <section>
        <form onSubmit={commentSubmit}>
          <div></div>
          <div>
            <label htmlFor="postInput"></label>
            <input
              type="text"
              id="postInput"
              placeholder="댓글작성"
              value={comment}
              onChange={onChangeComment}
            />
          </div>
          <button>개시</button>
        </form>
      </section>
    </>
  );
}
