#!/bin/zsh
# echo > imgs.log
# echo > unsusedimages.log
cd docs
mdfn="infographics"
mdf="kb/$mdfn.md"
imgpath="assets/images/"
# echo "" > $mdfn.log
# echo "" > bs.log
destdir=$imgpath$mdfn
cp $mdf $mdfn.bs
if [ ! -d $destdir ] 
then
    mkdir $destdir
    echo "Dir: $destdir was created!"
fi

fcnt=$(find $destdir -maxdepth 1 -exec echo \; | wc -l | xargs)
mdlinks=("${(@f)$(grep --color -rwoh "\!.*(.*)" $mdf)}") 
# newl=("${(@f)$(grep --color -rwoh "\[.*(.*)" $mdfn.log)}") 
LINKS=()
# echo "$mdlinks"
# echo "$newl"
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

            # echo "$old" #>> $mdfn.log
            # rm $old

            fcnt=$(( $fcnt+1 ))
            #  sed didint fo good try to fix
            # echo "$res" >> bs.log
            # f=$res:q
            # r=$newl[$fcnt]
            # ff="${f/'\('/(})"
            # echo "rpl -> $ff vs $r"
            # pattern="s|$ff|$r|g"
            # sed -i -- $pattern $mdf
            # exit 0
        fi
    done
done


# echo "$mdlinks" > mdlinks.log
# echo "$LINKS" > LINKS.log 
# echo "$images" > images.log                             

# for img in $images
# do
#     if ! (($LINKS[(Ie)$img])); then
#             echo "$img not used!" >> unsusedimages.log
#     fi
# done
# /bin/ls -1U | wc -l

# cd docs/assets/images/
# echo "out: $fcnt \n $(ls)"


