#!/bin/zsh

src=$(ls ~/HOOTSMAN/up/memes/)
dest=docs/assets/images/meme

fcnt=$(find $dest -maxdepth 1 -exec echo \; | wc -l | xargs)

for nm in ~/HOOTSMAN/up/memes/*
do
if [[ "$nm:e" == "png" ]] then
    np="$dest/$fcnt.jpg"
    echo "$np"
    magick $nm -colorspace YCbCr -quality 80 $np
    fcnt=$(( $fcnt+1 ))
fi
done