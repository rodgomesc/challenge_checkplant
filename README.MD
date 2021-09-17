
# CHALLENGE CHECKPLANT
> this app as developed in a short period of time as a test for an employer that i worked in the past.

> About the employer app: a mobile application for large agro-rural producers to have metrics, reports, forecasts of everything that happens in the plantation."

> the test was done just to allow a user to create annotations and for each annotation create a marker on the map of the location where the user was at the moment, save notes locally even if you don't have internet, and allow sync with a backend when online.

# Tolls and Resources

> note: a video testing app was made and uploaded to youtube, the video can be accessed [in this link](https://youtu.be/X2LfaoEbJ40)

> nota: note: the **APK** of the application can be downloaded [in this link](https://github.com/rodgomesc/challenge_checkplant/releases/tag/v1.2.0) 


## technologies used
- javascript + typescript
- React-Native
- Styled Components
- Eslint + Prettier
- husky + commitlint + conventionalCommits
- semantic-release
- date-fns
- lootie
- conical-gradient-progress
- geolocation-service
- linear-gradient
- react-native-maps
- neomorph-shadows
- vector-icons
- redux
- redux-sagas
- redux persist
- reactotron
- uuid
- React Hooks
- Axios

...

## Organization and structure of folders

> The code was structured so that the application is fully reusable and scalable, the folder structure as follows:

```shell
.
├── App.tsx
├── assets
│   ├── animations
│   │   ├── done.json
│   │   ├── done2.json
│   │   ├── notFound.json
│   │   └── radar.json
│   └── img
│       ├── avatar.jpeg
│       ├── checkplant_original.png
│       ├── checkplant_white.png
│       ├── logo.png
│       ├── pin.svg
│       ├── pin_active.png
│       ├── pin_inactive.png
│       └── wave.png
├── components
│   ├── BottomBar
│   │   ├── BottonBarIcon
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── Map
│   │   ├── Marker
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── modals
│       ├── ModalCircularProgress
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── ModalNotFound
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── ModalOffline
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── ModalSucessfuly
│       │   ├── index.tsx
│       │   └── styles.ts
│       └── index.tsx
├── config
│   └── ReactotronConfig.ts
├── containers
│   ├── Home
│   │   └── index.tsx
│   ├── Login
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── Notes
│       ├── index.tsx
│       └── styles.ts
├── helpers
│   └── handlers.ts
├── routes
│   └── index.routes.tsx
├── services
│   └── api.ts
└── store
    ├── createStore.ts
    ├── index.ts
    └── modules
        ├── book
        │   ├── actions.ts
        │   ├── reducers.ts
        │   └── sagas.ts
        ├── rootReducer.ts
        └── rootSaga.ts
```

## steps to run the application

> ### note: the **APK** of the application can be downloaded [in this link](https://github.com/rodgomesc/challenge_checkplant/releases/tag/v1.2.0) making it unnecessary to follow the steps below

## How to install dependencies and run the project

```shell
# goto project folder
cd checkplant

# install the dependencies
yarn install

# start the android application
yarn android

# or start the ios application (if you are on mac)
yarn ios
```

# Screenshots
![01.jpg](https://i.loli.net/2020/06/04/p8E9m46HTMSOQUt.jpg)
![02.jpg](https://i.loli.net/2020/06/04/Z75UnvVGKbBcldD.jpg)
![03.jpg](https://i.loli.net/2020/06/04/zjkVDtGsF9fcOEA.jpg)
![04.jpg](https://i.loli.net/2020/06/04/9JRyq1rQMdjcaEs.jpg)
![05.jpg](https://i.loli.net/2020/06/04/34ZvWMboQBE9kSz.jpg)
![06.jpg](https://i.loli.net/2020/06/04/7re9SozcvlMaWy1.jpg)
![07.jpg](https://i.loli.net/2020/06/04/WSOUvZ6z3HwJB9y.jpg)
![08.jpg](https://i.loli.net/2020/06/04/iZSgA65FX7UPdEp.jpg)
![09.jpg](https://i.loli.net/2020/06/04/Zk25gClaIwGKLt3.jpg)



## Feedback
+55 64 98414-7972
