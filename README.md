# Browserified Version of Zokrates

1. `npm run build`
2. Copy lib folder to public directory in react app
3. Add `<script type="text/javascript" src="./lib/zokrates.bundle.js"></script>` to index.html
4. Function `initialize` is now accessible as `zokratesInitialize` globally in any react file
   i.e.

```js
zokratesInitialize().then((zokratesProvider) => {
  //blahblahblah
})
```
