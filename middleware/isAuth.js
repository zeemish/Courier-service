const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "pd_JWTSecret_123");
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.id;

  console.log("userId ---------------->", req.userId);
  next();
};

// module.exports = (req, res, next) => {
//   try {
//     const token = req.header("x-auth-token");
//     if (!token) return res.status(403).send("Access denied.");

//     const decoded = jwt.verify(token, "MyJWTSecret");
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).send("Invalid token");
//   }
// };
