#!/bin/zsh

dir="unused-assets"
fileName=""

for f in $(find $dir/);
do
    fileName="$(basename "$f")"
    if [[ $fileName =~ \([.\w{3}]\) ]]
    then
        grep -irnwo --include=\*.md "$fileName:r" docs/ru >> used.log
    fi
done