
// 미들웨어 요청과 응답 사이에 위치함
const loginCheck = (req, res, next) => {
  const userLogin = true;
  if(userLogin) {
    console.log('미들웨어')
    next(); // (req, res)=>{} 함수 실행
  } else {
    res.status(400).json({
      message: 'login fail!!'
    })
  }
}

module.exports = loginCheck;