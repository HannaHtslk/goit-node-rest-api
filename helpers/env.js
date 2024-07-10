import "dotenv/config";

const env = (name, dafeultValue) => {
  const value = process.env[name];

  if (value) return value;
  if (dafeultValue) return dafeultValue;

  throw new Error(`Missing provess.env[${name}]`);
};
export default env;
