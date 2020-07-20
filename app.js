wasm('program.wasm').then(({ add }) => {
  document.getElementById('output').innerText = add(1, 2);
});
