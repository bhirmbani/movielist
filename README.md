## Movielist
Nextjs React app to show list of movies and other features such as:
- filtering
- detail

### Project structure
- **components**: to host individual ui component
- **libs**: module that manage our application interaction with outside application/party. example: api fetcher, analytics, etc.
- **utils**: module that only used by our application.
- **modules**: our application logic separated by module. example: movie list module, movie detail, etc.
- ***type.d.ts***: typescript definition.
- ***atom.ts***: to store our application state.

### How to run locally
**Prerequisite**
- node js version >= 16.13.0

- clone this repository https://github.com/bhirmbani/movielist.git

- `npm install`
  
- npm run dev

- create .env file in the root with this content:

```
NEXT_PUBLIC_MOVIEDB_URL=https://api.themoviedb.org/3/
NEXT_PUBLIC_MOVIEDB_IMG=http://image.tmdb.org/t/p/w500
NEXT_PUBLIC_MOVIEDB_APIKEY_V4=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjJiYWE5ZTIzMTcxYTU2NTVmNGQ4NmFmMTAxMmNhNCIsInN1YiI6IjVhZDU1MGY0MGUwYTI2NjBiOTAwYjYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zd-PEv9lW8YRzUTuyGNnzOIwkHNrVcMfVQZm_Bq1gYA
```

### How to run test
`npm run test`