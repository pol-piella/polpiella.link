export default function handler(request, response) {
  const { name } = request.query;
  console.log("Hello there!")
  response.status(200).send(`Hello ${name}!`);
}