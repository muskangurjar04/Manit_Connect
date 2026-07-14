import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../libs/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,

  params: {
    folder: "offer_letters",

    resource_type: "raw",

    allowed_formats: ["pdf"],
  },
});

const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter(req, file, cb) {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF allowed"));
    }
  },
});

export default upload;