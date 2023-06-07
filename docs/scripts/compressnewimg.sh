#!/bin/zsh

fcnt=$(find docs/assets/images/ -maxdepth 1 -exec echo \; | wc -l | xargs)
for file in $(ls newmemes) 
do  
    targetpath=docs/assets/images/$fcnt.jpg
    echo "![$file:t:r]($targetpath)" >> docs/assets/images/new.md
    magick newmemes/$file -colorspace YCbCr -quality 90 $targetpath 
    fcnt=$(( $fcnt+1 ))
done

# /bin/ls -1U | wc -l

# cd docs/assets/images/
# echo "out: $fcnt \n $(ls)"