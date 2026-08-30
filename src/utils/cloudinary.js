import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


 cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
 });

 const uploadOnCloudinary = async (localFilePath) => {
    try {
         if (!localFilePath) {
            throw new Error("Local file path is required");
        }
        const response = await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
        console.log("file is uploaded on cloudinary");
        return response; // Return the URL of the uploaded file
    } catch (error) {
        fs.unlinkSync(localFilePath); // Delete the local file in case of an error
        console.error("Error uploading file to Cloudinary:", error);
        throw error; // Rethrow the error to be handled by the caller
    }           
 }
 export {uploadOnCloudinary}

