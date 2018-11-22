# JWT and JWKS

Example of generate and verify tokens for talk

# Execute example

## Generate Keys

Generate private key

```

openssl genrsa  -out ./keys/privkey.pem 3072

```

Public key from private key

```

openssl rsa -in ./keys/privkey.pem  -pubout -out ./keys/privkey.pub

```


## Generate JWKS

```

npm run generate-jwks

```


## Generate example JWT token 

```

npm run generate-jwt


```


## Test Server with JWK and JWT tokens

```

npm run serve


```

## Do request

```

curl -X GET \
  http://localhost:3000/me \
  -H 'Authorization: <token>' 

```

You will obtain the content of token.

