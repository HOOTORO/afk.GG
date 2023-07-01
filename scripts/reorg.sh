#!/bin/zsh
cd docs
mdfn="infographics"
mdf="kb/$mdfn.md"
imgpath="assets/images/"
destdir=$imgpath$mdfn
cp $mdf $mdfn.bs
if [ ! -d $destdir ] 
then
    mkdir $destdir
    echo "Dir: $destdir was created!"
fi

fcnt=$(find $destdir -maxdepth 1 -exec echo \; | wc -l | xargs)
mdlinks=("${(@f)$(grep --color -rwoh "\!.*(.*)" $mdf)}") 

LINKS=()

for str in $mdlinks  
do
    parts=(${(s/|/)str})
    for pt in $parts
    do
    # echo "$str"
    # https://regex101.com/r/86fzFp/1
    # if [[ $str =~ '[(].*/(.*)[)]' ]] && res=$match[1]; then
        if [[ $pt =~ '[!](.*/.*)[)]' ]] && res=$match[1] && [[ $res != *"http"* ]]; then

            npt="$destdir/$fcnt.$res:e"
            mdref="[$res:t:r](../$npt)"
            old=$(echo $res | cut -d'/' -f2-)
            f=$res:q
            ff="${f/'\('/(})"
            pattern="s|$ff|$mdref|g"
            echo "$pattern" >> $mdfn.log
            mv $old $npt
            sed -i -- $pattern $mdf

            fcnt=$(( $fcnt+1 ))
        fi
    done
done
