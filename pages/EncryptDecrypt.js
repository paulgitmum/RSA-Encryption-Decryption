import React from 'react'

function Encryption({encrypt, decrypt}) {
  
  return (
    <div>
        <p>encrypted Value: {encrypt} </p>
        <p>Decrypted Value: {decrypt} </p>
    </div>
  )
}

export default Encryption

