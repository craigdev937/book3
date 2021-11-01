import express from "express";
import logger from "morgan";
import helmet from "helmet";
import { trim } from "./middleware/trim.js";
import { bookRt } from "./routes/bookRt.js";

(() => {
    const app = express();
    app.use(helmet());
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(logger("dev"));
    app.use(trim);
    app.use("/api", bookRt);
    const port = process.env.PORT || 9000
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();




