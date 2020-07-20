# WASM

Easily export functions written in C and import them into JavaScript.

## Getting Started

Let's first create a simple C program that exports an "add" function:

```c
#include <webassembly.h>

export int add(int a, int b) {
  return a + b;
}
```

Next we will need to import WASM into the head of our HTML file and then use WASM to import our function:

```html
<head>
  <script src="wasm.js"></script>
</head>
<body>
  <script>
    wasm('program.wasm').then(({ add } ) => {
      console.log(add(1, 2)); // 3
    });
  </script>
</body>
```

Now let's convert the C file to WASM and launch a local dev server by running:

```ssh
npm start
```

## NPM Start

When you run "npm start" you're actually running these two commands:

```ssh
npx wa compile -o program.wasm program.c
php -S localhost:8080
```

The first one will compile "program.c" into "program.wasm".

The second command will launch a PHP server on port 8080.

**I'm currently working on adding a Node server with live reload.**