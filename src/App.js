import React from 'react';
import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

const MyComponent = () => {
  const kk = `<!DOCTYPE html>
    <html>
      <head>
        <title>Hello, World!</title>
      </head>
      <body>
        <h1 style="color:red; font-size: 15px;">commencement Date: ${new Date()}</h1>
        <h1 style="color:blue; font-size: 15px;">commencement Heading: Deepak Chaurasiya</h1>
        <h1 style="color:blue; font-size: 15px;">copies To: Learning</h1>
    </div>
      </body>
    </html>`;

  const saveDocx = async () => {
    console.log('hell');
    const data = await asBlob(kk);
    saveAs(data, 'file.docx');
  };

  return (
    <div>
      <button id="genDocx" onClick={saveDocx}>
        Click to Download
      </button>
    </div>
  );
};

export default MyComponent;
