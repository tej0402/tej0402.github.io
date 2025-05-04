---
layout: default
title: Contact
permalink: /contact/
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form - tejkumar.in</title>
  <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
  <script type="text/javascript">
    (function(){
      emailjs.init("1kDAKHzbt5RQNhIoe"); 
    })();
  </script>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #fff;
      padding: 30px;
      text-align: center;
    }

    h1 {
      font-size: 36px;
      color: #000;
      margin-bottom: 10px;
    }

    p.subtitle {
      font-size: 18px;
      margin-bottom: 40px;
    }

    form {
      max-width: 600px;
      margin: 0 auto;
      background: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .input-group {
      display: flex;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      overflow: hidden;
    }

    .input-group span {
      background: #2196F3;
      color: white;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .input-group input,
    .input-group textarea {
      flex: 1;
      padding: 10px;
      border: none;
      outline: none;
      font-size: 16px;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    button {
      background-color: #2196F3;
      color: white;
      padding: 12px 25px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      width: 100%;
    }

    button:hover {
      background-color: #1976D2;
    }
  </style>
</head>
<body>


  <p class="subtitle">Have questions? I have answers.<br>Ask me anything...I'm just a click away! :)</p>

  <form id="contact-form">
    <div class="input-group">
      <span>&#128100;</span>
      <input type="text" name="from_name" placeholder="Enter Your Name" required>
    </div>

    <div class="input-group">
      <span>&#128231;</span>
      <input type="email" name="reply_to" placeholder="Enter Your Email" required>
    </div>

    <div class="input-group">
      <span>&#9993;</span>
      <textarea name="message" placeholder="Enter Your Message" required></textarea>
    </div>

    <button type="submit">Submit</button>
  </form>

  <script>
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_ucjzbp8', 'template_98j8uow', this)
        .then(() => {
          alert('Message sent successfully!');
          this.reset();
        }, (error) => {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS Error:', error);
        });
    });
  </script>

</body>
</html>
