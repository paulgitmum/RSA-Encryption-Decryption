# RSA Encryption, Decryption 
## Key Generation

We use the crypto standard library for generating the keys:

`const crypto = require("crypto");`

// generate publickey and private key

`const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
});`



// The publicKey and privateKey variables will be used for encryption and decryption respectively

## Encryption

// This is the data we want to encrypt

`const data = "my secret data";`

`const encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  // We convert the data string to a buffer using `Buffer.from`
  Buffer.from(data)
);`

`console.log("encypted data: ", encryptedData.toString("base64"));`

## Decryption

// To decrypt the data, we need to use same hashing function and padding scheme that we used for encryption. 

`const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  encryptedData
);`


`console.log("decrypted data: ", decryptedData.toString());`
