# URL Shortener Project

## Overview
URL Short is a straightforward project developed using the BERM (Bun-Express-React-MongoDB) stack. This web application serves the purpose of converting long URLs into shorter, more manageable links for users. The project's primary goal was to familiarize the developer with Bun, a recently released JavaScript runtime, package manager, bundler, and test runner. Bun, created by Jarred Sumner, is designed as a drop-in replacement for Node.js, offering a unique approach to JavaScript development. Unlike Node.js and Deno, which rely on the V8 JavaScript engine, Bun utilizes JavaScriptCore to simplify the development, testing, and bundling of JavaScript and TypeScript projects and make it a valuable tool for web developers.

For more information about Bun, please visit the [Bun website](https://bun.sh).

## Getting Started

### Installation
To set up the project and its dependencies, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies using the following command:

   ```bash
   bun install
   ```

### Running the Backend
To start the backend server, use the following command:

```bash
bun run app.cjs 
```

### Running the Frontend
To run the frontend part of the application, navigate to the "front-end" directory and execute the following command:

```bash
cd front-end
npm run start
```

<strong>Note: </strong>
<ol>
   <li>Please ensure that you run the backend server before starting the frontend to enable seamless communication. </li>
   <li> Add the .env file with your database connection string and replace the one in connectDB file.</li>
</ol>


## License
This project is licensed under the MIT License, which means you are free to use and modify it according to your needs. For more details, please refer to the [LICENSE](LICENSE) file.

## Project Duration
The development of this project was completed in approximately 8 hours, demonstrating the efficiency of the BERM stack and the Bun runtime.

## Known Issues
While developing this project, some challenges were encountered, including:

- **New Package Manager**: As Bun is a relatively new package manager, there was some confusion regarding basic file types and project structure.

- **Build Process**: Difficulties were faced during the build process in the front end, highlighting the learning curve associated with using Bun.

- **Deployment**: Deploying the project to Heroku or other hosting platforms proved challenging and requires further exploration.

## Conclusion
URL Shortener is a practical example of how the BERM stack and the innovative Bun runtime can be used to create efficient web applications. Despite the minor challenges faced during development, this project showcases the potential of Bun as a valuable tool for web developers seeking a new approach to JavaScript development.
