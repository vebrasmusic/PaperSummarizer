const pdfInput = document.getElementById("pdfInput");
const htmlOutput = document.getElementById("htmlOutput");
const copyButton = document.getElementById("copyButton");
const htmlUrl = document.getElementById("htmlUrl");

pdfInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("pdf", file);

  try {
    const response = await fetch("http://45.32.90.120:8000/convert", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Failed to convert PDF to HTML.");

    const url = await response.text();
    htmlUrl.value = url;
    copyButton.disabled = false;
  } catch (error) {
    console.error(error);
    htmlOutput.innerHTML = "<p>Error: Failed to convert PDF to HTML.</p>";
  }
});

copyButton.addEventListener("click", () => {
  htmlUrl.select();
  document.execCommand("copy");
});
