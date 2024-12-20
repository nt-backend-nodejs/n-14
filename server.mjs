import http from "node:http";
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

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === "/users" && method === "GET") {
    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(users));
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
  } else if (url === "/users/1" && method === "GET") {
    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(users[0]));
    response.end();
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
  }
  // if (url === "/" && method === "GET") {
  //   response.writeHead(200, { "content-type": "application/json" });
  //   response.write(
  //     JSON.stringify({
  //       method: request.method,
  //       url: request.url,
  //       headers: request.headers,
  //     })
  //   );
  //   response.end();
  // } else if (url === "/user" && method === "GET") {
  //   response.writeHead(200, { "content-type": "application/json" });
  //   response.write(
  //     JSON.stringify({
  // name: "AZIZBEK",
  // age: 12,
  // gender: "MALE",
  //     })
  //   );
  //   response.end();
  // }
  // if (url === "/product" && method === "GET") {
  //   response.writeHead(200, { "content-type": "application/json" });
  //   response.write(
  //     JSON.stringify({
  //       type: "LAPTOP",
  //       name: "MACBOOK",
  //       version: "M3",
  //       make: "CHINA",
  //       cycle: 20,
  //       price: 2000,
  //     })
  //   );
  //   response.end();
  // }

  // response.writeHead(200, { "content-type": "application/json" });
  // response.write(
  //   JSON.stringify({
  //     method: request.method,
  //     url: request.url,
  //     headers: request.headers,
  //   })
  // );
  // response.end();
});

server.listen(5000, () => {
  console.log(`Server running on port http://localhost:5000`);
});

// localhost:4000

//hostname:PORT/resourse
//127.0.0.1:
//localhost:
