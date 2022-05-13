const express = require('express')
const path = require("path")
const app = express()
const port = 8000;



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

const strCutter = (str) => {
  let returnStr = "";
  for (let i = 2; i < str.length; i += 3) {
    returnStr += str[i]
  }
  return returnStr
}

let strToCut = "iamyourlyftdriver"

console.log(strCutter(strToCut))

