import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


 cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
 });

 const uploadOnCloudinary = async (localFilePath) => {
    try {
        const result = await cloudinary.uploader.upload(localFilePath, {
            folder: "uploads",
        });
        fs.unlinkSync(localFilePath); // Delete the local file after upload
        return result.secure_url; // Return the URL of the uploaded image
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }           
 }

