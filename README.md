# PDF-to-HTML Converter

This repository contains the source code for a PDF-to-HTML conversion web application. The application allows users to upload PDF files and receive the converted HTML output. It consists of a Python script for PDF-to-HTML conversion, a Flask web application as the back-end, Nginx for serving static files and acting as a reverse proxy, and a front-end built with HTML, CSS, and JavaScript.

## Overview

The application has the following components:

1. **PDF-to-HTML Conversion**: The core function of the application is to convert PDF files to HTML format. The Python script (`pdf_to_html.py`) uses the `pdf2htmlEX` library to perform this conversion.

2. **Flask Web Application**: The Flask web application (`app.py`) serves as the back-end interface for receiving and processing incoming PDF files. It listens for incoming POST requests containing PDF files and calls the Python script to perform the conversion. Once the conversion is complete, the Flask application returns the resulting HTML content to the client.

3. **Nginx**: Nginx is a web server and reverse proxy server. In this application, Nginx serves two main purposes:

   a. **Serving Static Files**: Nginx is responsible for serving static files, such as HTML, CSS, or JavaScript files, that make up the front-end interface of the application.

   b. **Reverse Proxy**: Nginx acts as a reverse proxy, forwarding incoming requests from clients to the Flask application running on a different port (e.g., port 8000).

4. **Client-side (Front-end)**: The front-end of the application is built using HTML, CSS, and JavaScript. It provides users with an interface to upload PDF files and receive the converted HTML output.

5. **CORS Configuration**: CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to prevent unauthorized access to resources from different origins. In this application, the server is configured to allow requests from specific origins, enabling the front-end to communicate with the back-end without encountering CORS-related errors.

## Installation

To set up and run the application, follow these steps:

1. Install the required dependencies:
```
pip install -r requirements.txt
```

2. Configure Nginx by copying the provided `nginx.conf` file to the appropriate location (e.g., `/etc/nginx/sites-available/`) and creating a symbolic link in the `sites-enabled` directory:

```
sudo cp nginx.conf /etc/nginx/sites-available/pdf_to_html
sudo ln -s /etc/nginx/sites-available/pdf_to_html /etc/nginx/sites-enabled/
```

3. Restart Nginx to apply the changes:

```
sudo service nginx restart
```


4. Run the Flask application:

```
python app.py
```

5. Access the application in your web browser by navigating to the server's IP address or domain name.

## Usage

To use the application, simply upload a PDF file using the provided file input on the front-end interface. After submitting the file, the application will process the PDF and return the converted HTML output. You can then view or download the resulting HTML file.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please submit a pull request with your proposed changes.




