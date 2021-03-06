const express = require("express");
const morgan = require("morgan");
const errorMiddleware = require("./middleware/error");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");

const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());
app.use(mongoSanitize());

//Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const donor = require("./routes/donorRoute");
const appointment = require("./routes/appointmentRoute");
const doctor = require("./routes/doctorRoute");
const review = require("./routes/reviewRoute");
const report = require("./routes/reportRoute");
const article = require("./routes/articleRoute");
// const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", donor);
app.use("/api/v1", doctor);
app.use("/api/v1", appointment);
app.use("/api/v1", review);
app.use("/api/v1", report);
app.use("/api/v1", article);
// app.use("/api/v1", payment);

// error handler middleware
app.use(errorMiddleware);

app.get("/", (req, res) => res.send("Hello from doctor-meet server"));

module.exports = app;
