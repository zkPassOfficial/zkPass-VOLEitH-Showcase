### generate stop
```
npm i protobufjs-cli

pbjs -t static-module -w commonjs -o bundle.js garble.proto circuits.proto core.proto zk.proto

pbts -o bundle.d.ts bundle.js

```