export function hashValue(value) {
  return btoa(value + "secret"); // Simple base64 encoding with a secret
}

export function VerifyHash(hash, value) {
  return hash === hashValue(value);
}
