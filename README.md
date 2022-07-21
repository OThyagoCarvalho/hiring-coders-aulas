# Collection of Classes taken during Hiring Coders #3 bootcamp

### GAMAGIT:

Notes:
- (NOT OPTIMAL) Used setLocalStorage to send informations from one page to another instead of using the Context API;

### GRAPHQL:

Notes:
- Used pnpm package manager via ` npm install pnpm -g `
- Used project scopes and managed them from the root folder e.g:  ` pnpm --filter "@dev-demands/server" install cors `


### NODE: 

Notes:
  - hello Node (sets up a basic server and listens to port and hostname returning a string)
  - practice NPM (sets up a server which returns answers to very specific questions asked via query strings. uses query-string module)
  - practice JS (sets up a server and simulates a basic api with create, update and delete user functionalities)
    - notes: 
      * parses url and user query search to create an object; using conditionals to determine wheter the user wants to update, create or remove an information 
  - webProtocols (creates a booking service backend from scratch)
    - notes:
      * intriduces Docker (image (postgresql), volume(perpetuates data), and containers)
      * introduces Postbird client, a PostgreSQL GUI (must connect to host:port previously defined in the docker container config file)
      * introduces ORM (object Relational Mapper) using Sequelize for PostgreSQL
      * Introduces Security Best Practices with password hashing with BCRYPT
      * Introduces JWT Concept and Configuration