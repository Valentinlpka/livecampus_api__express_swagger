const crypto = require("crypto");

const apiKeysDB = new Map();

const createApiKey = (clientName) => {
  const randomBuffer = crypto.randomBytes(32);
  console.log("randBuff", randomBuffer);

  const plainAPIKey = `lc_live_${randomBuffer.toString("hex")}`;

  console.log("plain key", plainAPIKey);

  const hashedApiKey = crypto
    .createHash("sha256")
    .update(plainAPIKey)
    .digest("hex");

  console.log("hashed key", hashedApiKey);
  apiKeysDB.set(hashedApiKey, {
    client: clientName,
    createdAt: new Date().toISOString(),
  });

  return plainAPIKey;
};

const checkClientApiKey = (APIkey) => {
  const hashedApiKey = crypto.createHash("sha256").update(APIkey).digest("hex");
  const client = apiKeysDB.get(hashedApiKey);
  return client;
};

module.exports = { createApiKey, checkClientApiKey };
