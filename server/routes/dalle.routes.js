import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E 2.0 ROUTES" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.images.generate({
      model: "dall-e-3", // or "dall-e-2"({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      // response_format: "b64_json",
    });
    const imageUrl = response.data[0].url;
    console.log("ImageURL", imageUrl);

    // ⬇️ THIS is the missing step
    const imgRes = await fetch(imageUrl);
    // console.log("Image Fetching", imgRes);
    const mimeType = imgRes.headers.get("content-type") || "image/png";
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const base64 = buffer.toString("base64");
    // console.log(base64);
    res.status(200).json({
      photo: base64,
      mimeType,
      dataUrl: `data:${mimeType};base64,${base64}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!!" });
  }
});

export default router;
