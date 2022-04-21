# 18.1 Статическая и динамическая типизация в языках программирования

Репозиторий с примерами типичных ошибок,
которые можно было бы отловить на этапе компиляции,
если использовать **TypeScript** (язык со статической типизацией)
вместо **JavaScript** (языка с динамической типизацией)

## Установка
```shell
$ yarn install
```

## Запуск
```shell
$ yarn start
```

## Компиляция TypeScript
```shell
$ yarn run compile
```

Для запуска версии с TypeScript следует после компиляции закомментировать
строку в HTML с подключением javascript.js и раскомментировать строку
с подключением typescript.js, после чего запустить проект