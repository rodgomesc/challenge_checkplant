
# CHALLENGE CHECKPLANT

# Ferramentas e Recursos

> nota: foi feito um video testando app e enviado para o youtube, o video pode ser acessado [nesse link](https://youtu.be/X2LfaoEbJ40) OBS: o video não é listado **publicamente**

> nota: o download do apk pode ser feito através deste [link](https://drive.google.com/file/d/1PfeG9pXX_nYEDK3FmXrlF5EVJIJedzg3/view?usp=sharing)



## Tecnologias Utilizadas
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

## Da organização e estrutura de pastas

> O código foi estrututurado de forma que toda aplicação seja totalmente reutilizável e escalável, a estrutura de pastas conforme abaixo:

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

## Passos para rodar a aplicação

> ### nota: o **APK** do aplicativo pode ser baixado [nesse link](https://drive.google.com/file/d/1PfeG9pXX_nYEDK3FmXrlF5EVJIJedzg3/view?usp=sharing) ou na raiz do arquivo zipado em anexo evitando a necessidade dos passos abaixo.

## Instalar as Dependencias e Executar

```shell
# entre na pasta do projeto
cd checkplant

# instale as dependências
yarn install

# inicie a aplicação no android
yarn android

# inicie a aplicação no ios
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

- aguardo feedback: 064 98414-7972
