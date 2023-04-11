const pdfInput = document.getElementById("pdfInput");
const htmlOutput = document.getElementById("htmlOutput");

pdfInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("pdf", file);

  try {
    // Replace "YOUR_BACKEND_API_URL" with the actual URL of your backend API on the Vultr server.
    const response = await fetch("http://45.32.90.120:8000/convert", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Failed to convert PDF to HTML.");

    const htmlContent = await response.text();
    htmlOutput.innerHTML = htmlContent;
  } catch (error) {
    console.error(error);
    htmlOutput.innerHTML = "<p>Error: Failed to convert PDF to HTML.</p>";
  }
});
