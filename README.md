# 18.1 Статическая и динамическая типизация в языках программирования

Репозиторий с примерами типичных ошибок,
которые можно было бы отловить на этапе компиляции,
если использовать **TypeScript** (язык со статической типизацией)
вместо **JavaScript** (языка с динамической типизацией)

## Описание ошибок
### 18.1.1 Неявное приведение типов
JavaScript за нас пытается делать приведение типов там, где умеет,
но нас это не всегда устраивает. TypeScript же,
как и положено языку со статической типизацией, ругается на конструкции,
где JavaScript бы выполнил неявное приведение.
Это позволяет нам отловить такие ситуации и либо выполнить явное приведение там,
где это нужно, либо заметить, что тут не должно быть приведения типов и где-то закралась ошибка.

Так и в примере с простейшим калькулятором для двух чисел мы пытаемся выполнять операции
с числами из тегов `<input>`, но, несмотря на то, что указан атрибут `type="number"`,
`input.value` всё равно будет строкой, а мы работаем с ним как с числом и получаем
не ожидаемое поведение при попытке сложить два значения. Вместо суммы двух чисел мы получаем конкатенацию строк.

Подробнее про неявное приведение типов в JavaScript можно почитать тут: https://habr.com/ru/company/ruvds/blog/347866/ 

### 18.1.2 Неправильное название поля

Ещё одна из частых ошибок, работа с полем, которого не существует.
В данном случае, мы получим undefined, при работе с которым произойдёт неявное приведение типа к строке,
и мы получим совсем не то, что ожидали

### 18.1.3 Использование объектных обёрток вместо приведения типа

В JavaScript для явного приведения типов используются функции `Boolean`, `Number`, `String` и другие,
которые также могут быть использованы в качестве конструктора объектной обёртки над примитивом.
В данном примере, вместо приведения строки к типу `boolean`, мы получаем объектную обёртку
класса `Boolean`, которая при неявном приведении к `boolean` при проверке всегда даёт положительный результат.
Таким образом, мы никогда не покажем пользователю сообщение о том, что поле обязательно после начала редактирования.
Это не самая очевидная ошибка, которую к тому же и при тестировании сложно обнаружить,
автоматически может быть замечена с помощью статической типизации.

Более подробно про объектные обёртки можно почитать тут: https://developer.mozilla.org/ru/docs/Glossary/Primitive#обёртки_примитивных_типов_в_javascript 

## Работа с репозиторием
### Установка
```shell
$ yarn install
```

### Запуск
```shell
$ yarn start
```

### Компиляция TypeScript
```shell
$ yarn run compile
```

Для запуска версии с TypeScript следует после компиляции закомментировать
строку в HTML с подключением javascript.js и раскомментировать строку
с подключением typescript.js, после чего запустить проект