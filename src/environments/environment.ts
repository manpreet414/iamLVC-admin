// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// config: {
// "APP_NAME": "Holistic",
//   "BASE_URL": "http://localhost:4000/",
//   "API_URL": "http://localhost:4000/api/v1/"
// }

    


export const environment = {
  production: false,
  envName: "devLocal",
  config: {
	APP_NAME: "Holistic",
	  SOCKET_URL: "http://localhost:4001",
    BASE_URL: "http://localhost:4001",
    API_URL: "http://localhost:4001/api/v1/",
    uploadPath: "http://localhost:4001/uploadedFiles/"
    /*SOCKET_URL: "http://172.24.0.176:4001",
    BASE_URL: "http://172.24.0.176:4001/",
    API_URL: "http://172.24.0.176:4001/api/v1/",
    uploadPath: "http://172.24.0.176:4001/uploadedFiles/"*/
  
  }
};
