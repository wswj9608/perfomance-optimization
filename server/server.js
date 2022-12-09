const express = require("express")
const cors = require("cors")
const app = express()
const port = 8080
const path = require("path")

const header = {
  setHeaders: (res, path) => {
    res.setHeader(
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate"
    )
    res.setHeader("Expires", "-1")
    res.setHeader("Pragma", "no-cache")
  },
}

app.use(cors())

app.use(express.static(path.join(__dirname, "../build"), header))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"))
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
