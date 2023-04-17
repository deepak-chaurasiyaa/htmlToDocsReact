import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

const MyComponent = () => {
  const handleDownload = async () => {
    // Read the HTML template file
    const template = `<!DOCTYPE html>
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

    // Convert the template content to a Uint8Array
    const uint8Array = new TextEncoder().encode(template);

    // Create a Blob from the Uint8Array
    const templateBlob = new Blob([uint8Array], { type: "application/octet-stream" });

    // Load the template Blob into the docxtemplater instance and explicitly set the mimetype
    const doc = new Docxtemplater();
    doc.loadZip(templateBlob, { mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });

    // Set the data to replace the placeholders in the template
    const data = {
      name: "John Doe",
    };
    doc.setData(data);

    // Render the document
    doc.render();

    // Generate the .docx file as a Blob
    const generatedDocument = doc.getZip().generate({ type: "blob" });

    // Save the generated document as a file
    saveAs(generatedDocument, "my_document.docx");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download .docx</button>
    </div>
  );
};


export default MyComponent