#!/bin/zsh

fcnt=$(find docs/assets/newconv -maxdepth 1 -exec echo \; | wc -l | xargs)
for file in $(ls docs/converted)
do  
    targetpath=docs/assets/newconv/$file
    echo "![$file:t:r]($targetpath)" >> docs/assets/newconv/new.md
    magick docs/converted/$file -colorspace YCbCr -quality 90 $targetpath
    fcnt=$(( $fcnt+1 ))
done

# /bin/ls -1U | wc -l

# cd docs/assets/images/
# echo "out: $fcnt \n $(ls)"