const express = require('express')
const app = express()
const port = 3000

// "public" 폴더를 정적 루트로 설정하기 !!
app.use(express.static("public"))

app.listen(port, () => {
  console.log(`서~버~가 시~작~되~~~었~~~~습~니다~~~~(feat. 전동준) http://localhost:${port}`)
})