#!/bin/zsh
cd docs/converted
for n in Screenshot_*
do 
    echo "$n"
    newname="$(echo "$n" | cut -c21-)"
    mv "$n" "$newname"
done
