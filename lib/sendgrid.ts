import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendCodeByEmail(to: string, code: number) {
  return await sgMail.send({
    to, // Change to your recipient
    from: "marcosreuquendiaz@gmail.com", // Change to your verified sender
    subject: `Tu código de ingreso a Mentees`,
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <style type="text/css">
          body,
          p,
          div {
            font-family: arial, helvetica, sans-serif;
            font-size: 14px;
          }
          body {
            color: #000000;
          }
          body a {
            color: #1188e6;
            text-decoration: none;
          }
          p {
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div
          style="
            background-color: #5c63d7;
            font-family: courier, monospace;
            font-size: 60px;
            height: 100px;
          "
        ></div>
        <div>
          <h1 style="text-align: center">Hello!</h1>
          <h2 style="text-align: center">This is your access code to Mentees:</h2>
        </div>
        <div>
          <h1 style="text-align: center; margin-top: 50px; margin-bottom: 50px">
            <span
              style="
                color: #5c63d7;
                font-family: courier, monospace;
                font-size: 60px;
                font-weight: 700;
              "
            >
              <strong>${code}</strong>
            </span>
          </h1>
        </div>
        <div
          style="
            background-color: #5c63d7;
            font-family: courier, monospace;
            font-size: 80px;
            height: 100px;
          "
        ></div>
      </body>
    </html>
    
    `,
  });
}
export async function sendSuggestionByEmail(
  name: String,
  lastname: String,
  email: String,
  suggestion: String
) {
  return await sgMail.send({
    to: "mentees.proyect@gmail.com",
    from: "marcosreuquendiaz@gmail.com", // Change to your verified sender
    subject: `Nueva sugerencia`,
    html: `
    <!DOCTYPE html>
      <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <style type="text/css">
          body,
          p,
          div {
            font-family: arial, helvetica, sans-serif;
            font-size: 14px;
          }
          body {
            color: #000000;
          }
          body a {
            color: #1188e6;
            text-decoration: none;
          }
          p {
            margin: 0;
            padding: 0;
          }
          .suggestion{
            margin: auto;
            width: 500px;
          }
          .email{
            margin-top: 55px;
          }
        </style>
      </head>
      <body>
        <div
          style="
            background-color: #5c63d7;
            font-family: courier, monospace;
            font-size: 60px;
            height: 100px;
          "
        ></div>
        <div>
          <h1 style="text-align: center">Hello!</h1>
          <h2 style="text-align: center">Han enviado una sugerencia de ${
            name + " "
          } ${lastname} :</h2>
        </div>
        <div>
          <h1 style="text-align: center; margin-top: 50px; margin-bottom: 50px">
            <span
              style="
                color: #5c63d7;
                font-family: courier, monospace;
                font-size: 60px;
                font-weight: 700;
              "
            >
              <p class="suggestion">
                ${suggestion}
              </p>
            </span>
            <p class="email">Email de ${name + " "} ${lastname}: ${email}</p>
          </h1>
        </div>
        <div
          style="
            background-color: #5c63d7;
            font-family: courier, monospace;
            font-size: 80px;
            height: 100px;
          "
        ></div>
      </body>
    </html>
    
    `,
  });
}
