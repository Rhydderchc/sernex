# sernex
The Open Source Sernex Api

# Documentation

## Endpoints
The sernex api has various endpoints, for application interface, it uses an api token(WIP) for session validation,
here are all the endpoints:

**Lyrics**

```https://sernex.tech/api/v1/lyrics?song=SONG_NAME&artist=ARTIST_NAME```

Returns
```{
song:"SONG_NAME",
artist:"ARTIST_NAME",
lyrics:"LYRICS..."
}
