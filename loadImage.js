// saveImageAsSnack.js
import axios from 'axios';
import { sequelize, Snack } from './server/models/db.js';  // Adjust the path as needed
import fs from 'fs';
import path from 'path';

const imageUrl = 'https://bitebyte-ftri47.s3.amazonaws.com/Acorn-with-brown-hat-on-transparent-background-PNG.png';

const saveImageAsSnack = async () => {
  try {
    // Fetch the image
    const response = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'arraybuffer',
    });

    // Convert the image to a buffer
    const imageBuffer = Buffer.from(response.data, 'binary');

    // Save the snack with the image buffer
    await Snack.create({
      user_id: 1, // Replace with a valid user ID
      name: 'Acorn Snack',
      photo_url: 'https://bitebyte-ftri47.s3.amazonaws.com/Acorn-with-brown-hat-on-transparent-background-PNG.png',
      category: 'Nut',
      rating: 5.0,
      comment: 'A delicious acorn snack with a brown hat.',
      image: imageBuffer,
    });

    console.log('Snack with image saved successfully!');
  } catch (error) {
    console.error('Error saving snack with image:', error);
  } finally {
    await sequelize.close();
  }
};

saveImageAsSnack();
