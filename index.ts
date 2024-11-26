import express from "express";
import dotenv from "dotenv";
import userRoutes from "./src/infrastructure/controller/routes/user.routes";
import helmet from "helmet";

dotenv.config();
const app = express();

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
        },
    },
}));

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", userRoutes)

app.listen(PORT, () => {
    console.log("Server running in port:", PORT)
}).on("error", (error) => {
    throw new Error(error.message)
})