import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"


const router= Router()

router.route("/register").post(
    upload.fields([
        {
            name : "avatar",
            maxCount : 1
        },
        {
            name : "coverImage",
            maxCount : 1
        }
    ]),
    registerUser)
// router.post("/register",
//   upload.any(),
//   (req, res) => {
//     console.log("req.body:", req.body);
//     console.log("req.files:", req.files);
//     return res.status(200).json({ ok: true });
//   }
// )

export default router