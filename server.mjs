import http from "node:http";
import fs from "node:fs/promises";

const users = [
  {
    name: "AZIZBEK",
    age: 12,
    gender: "MALE",
  },
  {
    name: "XAMIDULLO",
    age: 33,
    gender: "MALE",
  },
];

const server = http.createServer(async (request, response) => {
  const url = request.url;
  const method = request.method;
  const params = request.url.split("/")[2];
  const query = request.url.split("?")[1];
  let obj = {};
  console.log({ url, method, params, query });

  if (query) {
    const arr = query.split("&");
    arr.forEach((str) => {
      const item = str.split("=");
      obj[item[0]] = item[1];
    });
    console.log(obj);
  }
  if (url === "/users" && method === "GET") {
    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(users));
    response.end();
    return;
  } else if (url === `/users/${params}` && method === "GET") {
    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(users[params - 1]));
    response.end();
  } else if (url === "/users" && method === "POST") {
    let body = [];
    request.on("data", function (chunk) {
      body.push(chunk);
    });
    request.on("end", function () {
      const user = JSON.parse(body.join(""));
      console.log(user);

      users.push(user);
      response.writeHead(200, { "content-type": "application/json" });
      response.write(JSON.stringify(users));
      response.end();
    });
  } else if (url === "/users/1" && method === "PUT") {
    let body = [];
    request.on("data", function (chunk) {
      body.push(chunk);
    });
    request.on("end", function () {
      const user = JSON.parse(body.join(""));

      users[0] = user;
      response.writeHead(200, { "content-type": "application/json" });
      response.write(JSON.stringify(users));
      response.end();
    });
  } else if (url === "/users/1" && method === "DELETE") {
    users.splice(0, 1);
    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(users));
    response.end();
  } else if (url === "/" && method === "GET") {
    try {
      const content = await fs.readFile("./index.html", "utf-8");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(content);
      response.end();
    } catch (error) {
      const content = await fs.readFile("./404.html", "utf-8");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(content);
      response.end();
    }
  } else if (url === "/picture" && method === "GET") {
    try {
      const content = await fs.readFile("./image.png");
      response.writeHead(200, { "content-type": "image/png" });
      response.write(content);
      response.end();
    } catch (error) {
      const content = await fs.readFile("./404.html", "utf-8");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(content);
      response.end();
    }
  } else if (url === "/image" && method === "GET") {
    try {
      const content = await fs.readFile("./coding.jpg");
      response.writeHead(200, { "content-type": "image/jpeg" });
      response.write(content);
      response.end();
    } catch (error) {
      const content = await fs.readFile("./404.html", "utf-8");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(content);
      response.end();
    }
  } else if (url === "/video" && method === "GET") {
    try {
      const content = await fs.readFile("./data.mp4");
      response.writeHead(200, { "content-type": "video/mp4" });
      response.write(content);
      response.end();
    } catch (error) {
      const content = await fs.readFile("./404.html", "utf-8");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(content);
      response.end();
    }
  }  else if (url === "/gif" && method === "GET") {
    try {
      const content = await fs.readFile("./node_dog1_proto.gif");
      response.writeHead(200, { "content-type": "image/gif" });
      response.write(content);
      response.end();
    } catch (error) {
      const content = await fs.readFile("./404.html", "utf-8");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(content);
      response.end();
    }
  }  else if (url === "/pdf" && method === "GET") {
    try {
      const content = await fs.readFile("./express-home-work.pdf");
      response.writeHead(200, { "content-type": "application/pdf" });
      response.write(content);
      response.end();
    } catch (error) {
      const content = await fs.readFile("./404.html", "utf-8");
      response.writeHead(200, { "content-type": "test/html" });
      response.write(content);
      response.end();
    }
  }  else if (url === "/camera" && method === "GET") {
    try {
      const content = await fs.readFile("./camera.html");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(content);
      response.end();
    } catch (error) {
      const content = await fs.readFile("./404.html", "utf-8");
      response.writeHead(200, { "content-type": "test/html" });
      response.write(content);
      response.end();
    }
  }

  const content = await fs.readFile("./404.html", "utf-8");
  response.writeHead(200, { "content-type": "text/html" });
  response.write(content);
  response.end();
});

server.listen(5000, () => {
  console.log(`Server running on port http://localhost:5000`);
});

// localhost:4000

//hostname:PORT/resourse
//127.0.0.1:
//localhost:
