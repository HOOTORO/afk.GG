#!/bin/zsh

src=$(ls ~/HOOTSMAN/up/memes/)
dest=docs/assets/images/meme
imgpath="assets/images/"

fcnt=$(find $dest -maxdepth 1 -exec echo \; | wc -l | xargs)
memes=$(ls docs/assets/images/meme)

# echo "" > $mdfn.log
# echo "" > bs.log
destdir=$imgpath$mdfn
cp $mdf $mdfn.bs
if [ ! -d $destdir ] 
then
    mkdir $destdir
    echo "Dir: $destdir was created!"
fi

for nm in ~/HOOTSMAN/up/memes/*
do
if [[ "$nm:e" == "png" ]] then
    np="$dest/$fcnt.jpg"
    echo "$np"
    magick $nm -colorspace YCbCr -quality 80 $np
    fcnt=$(( $fcnt+1 ))
fi
done
echo -e $memes | jq -R . | jq -s '{"memes": .}' > docs/memes.json

fcnt=$(find docs/assets/newconv -maxdepth 1 -exec echo \; | wc -l | xargs)
for file in $(ls docs/converted)
do  
    targetpath=docs/assets/newconv/$file
    echo "![$file:t:r]($targetpath)" >> docs/assets/newconv/new.md
    magick docs/converted/$file -colorspace YCbCr -quality 80 $targetpath
    fcnt=$(( $fcnt+1 ))
done

# /bin/ls -1U | wc -l

# cd docs/assets/images/
# echo "out: $fcnt \n $(ls)"