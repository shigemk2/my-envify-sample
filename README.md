# my-envify-sample

https://github.com/hughsk/envify

```sh
$ browserify src/example.js -t [ envify --GIT_HASH $(git rev-parse HEAD) ] > dist/example.js
```
