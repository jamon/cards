#!/bin/sh
cd soy/
java -jar ../tools/SoyToJsSrcCompiler.jar  --useCommonJsAsyncDef --dependencies "lib/soyutils.js" --outputPathFormat "../www/view/{INPUT_DIRECTORY}/{INPUT_FILE_NAME_NO_EXT}.js" `find . -name '*.soy'`
cd -

