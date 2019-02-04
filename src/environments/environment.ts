// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrlBackend: 'https://kudos-apim-jmu6m5q6suefk.azure-api.net/v2',
  apiUrlBackendCors: 'https://kudos-apim-jmu6m5q6suefk.azure-api.net/kudos-func-jmu6m5q6suefk/corsTest?name=chybaTK',
  appInsightsConfig: {
    instrumentationKey: '11e0b7ef-2ac3-43a0-ae89-1a44e8e2ae4e',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
