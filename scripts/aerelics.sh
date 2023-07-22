#!/bin/zsh
# echo > imgs.log

# images=("${(@f)$(ls docs/assets/images/th-retirement)}")
# src=docs/assets/images/rumarket
# dest=uas/test
src=docs/theme/assets/ae/relic
step=10
out=output
id=0
# if [ ! -d $out ]; then
#   mkdir -p $out
# fi

for d in $src/*; do
    for f in $d/*; do
        # echo "$f"
        id=$(expr $id + 1)
        rel=${f:t:r}
        echo "{ id: $id, name: '$rel[18,22]' , tier: $d:t:r , icon: '${f:gs/docs\/theme/\/afk.GG}', cost: 0, recipe: 0 },"
        # magick $img -colorspace YCbCr -quality 85 $dest/$img:t:r.jpg
        # for f in $fg/*; do
        #   magick convert $b $f -gravity Center -geometry 100x100+0+0 -composite "$out/$b:r:t-$f:r:t.png"
        # echo "$b:r:t"
    done
done
