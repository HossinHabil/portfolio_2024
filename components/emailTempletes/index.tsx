export const replyTemplate = (name: string) => {
  return `
<html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #333333;
                margin-top: 0;
            }
            p {
                color: #666666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Thank you ${name} for contacting me</h2>
            <p>I will get back to you as soon as possible</p>
        </div>
    </body>
</html>
`;
};
