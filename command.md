## Command

I want you to act as a Senior Frontend developer. I will describe a project details you will code project with this tools: Create React App, yarn, Redux Toolkit, typescript, and axios. write the folderstructure for the project before you start. Do not write explanations. My first request is to build a simple personality test application, that takes 3-5 different questions, maps them into a score and produces a personality trait of either Introvert or Extrovert.


```bash
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Question.tsx
│   │   ├── Quiz.tsx
│   │   ├── Result.tsx
│   │   └── ...
│   ├── interfaces
│   │   ├── Answer.ts
│   │   ├── Question.ts
│   │   └── ...
│   ├── pages
│   │   ├── Home.tsx
│   │   └── ...
│   ├── store
│   │   ├── index.ts
│   │   ├── quizSlice.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   ├── global.css
│   └── ...
├── package.json
└── ...

```


## Here's a brief explanation of what each folder contains:

- ``components``: This folder contains all the reusable components used throughout the application.
- ``interfaces``: This folder contains all the interfaces used to define the types for the data in the application.
- ``pages``: This folder contains all the pages of the application. In this case, it only contains the Home page.
- ``store``: This folder contains the Redux store configuration and quizSlice file which defines the state and actions related to the quiz.
- ``App.tsx``: This is the main component of the application that renders all the other components.
- ``index.tsx``: This is the entry point of the application.
- ``global.css``: This file contains global styles for the application.