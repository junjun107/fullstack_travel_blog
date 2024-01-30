const jwt = require("jsonwebtoken");

function getIdFromToken(authorization) {
  //check http request headers for authorization
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  //verify the token. Token was signed with _id, SECRET, duration
  const token = authorization.split(" ")[1];
  const { _id } = jwt.verify(token, process.env.SECRET);

  return _id;
}
module.exports = getIdFromToken;
