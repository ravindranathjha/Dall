import FileSaver from "file-saver";

// index.js in utils is a script which exports reusable functions globally


import { surpriseMePrompts } from '../constants/index';

export function getRandomPrompt(prompt) {
    // Setting a random index number from the length of SupriseMePrompt length
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  // selecting the msg from random prompt using the random number retrived above
  const randomPrompt = surpriseMePrompts[randomIndex];
// ensuring that the same random prompt is not called twice if it is,
//  the func is called again
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo){
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}