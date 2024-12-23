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
    } catch (error) {}
  }
});

server.listen(5000, () => {
  console.log(`Server running on port http://localhost:5000`);
});

// localhost:4000

//hostname:PORT/resourse
//127.0.0.1:
//localhost:
