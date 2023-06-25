#!/bin/zsh
# cd docs/converted
# for n in Screenshot_*
# do 
#     echo "$n"
#     newname="$(echo "$n" | cut -c21-)"
#     mv "$n" "$newname"
# done

dir="unused-assets"
fileName=""

for f in $(find $dir/);
do
    fileName="$(basename "$f")"
    if [[ $fileName =~ \([.\w{3}]\) ]]
    then
        # echo "filename => $fileName:r"
        # unu=("${(@f)$(grep --color -rwoh "\!.*(.*)" $x)}") 
        grep -irnwo --include=\*.md "$fileName:r" docs/ru >> used.log
    fi
done