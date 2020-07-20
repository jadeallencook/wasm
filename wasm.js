window.wasm = (
  filename,
  memory = { initial: 256, maximum: 256 },
  table = {
    initial: 1,
    maximum: 1,
    element: 'anyfunc',
  }
) =>
  fetch(filename)
    .then((response) => response.arrayBuffer())
    .then((bytes) =>
      WebAssembly.instantiate(bytes, {
        env: {
          memory: new WebAssembly.Memory(memory),
          table: new WebAssembly.Table(table),
        },
      })
    )
    .then((obj) => obj.instance.exports)
    .catch((error) => error);
