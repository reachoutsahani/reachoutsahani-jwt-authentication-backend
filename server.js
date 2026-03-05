require("dotenv").config();   // 👈 sabse upar

const connectDB = require("./src/db/db");
const app = require("./src/app");

connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});