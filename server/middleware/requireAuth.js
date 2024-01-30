const User = require("../models/userModel");
const getIdFromToken = require("../utils");

const requireAuth = async (req, res, next) => {
  //verify user is authenticated
  //req -> headers -> authorization
  const { authorization } = req.headers;
  const _id = getIdFromToken(authorization);
  try {
    //verify the token. Token was signed with _id, SECRET, duration
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
