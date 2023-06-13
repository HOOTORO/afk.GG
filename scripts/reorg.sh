#!/bin/zsh
# echo > imgs.log
# echo > unsusedimages.log
cd docs
# mdfn="th-retirement"
mdf="blog/$mdfn.md"
imgpath="assets/images/"
# echo "" > $mdfn.log
# echo "" > bs.log
destdir=$imgpath$mdfn

if [ ! -d $destdir ] 
then
    mkdir $destdir
    echo "Dir: $destdir was created!"
fi

# fcnt=$(find $destdir -maxdepth 1 -exec echo \; | wc -l | xargs)
fcnt=0
mdlinks=("${(@f)$(grep --color -rwoh "\!.*(.*)" $mdf)}") 
newl=("${(@f)$(grep --color -rwoh "\[.*(.*)" $mdfn.log)}") 
LINKS=()

# echo "$newl"
for str in $mdlinks  
do
    # https://regex101.com/r/86fzFp/1
    # if [[ $str =~ '[(].*/(.*)[)]' ]] && res=$match[1]; then
    if [[ $str =~ '[!](.*/.*)[)]' ]] && res=$match[1] && [[ $res != *"http"* ]]; then
        fcnt=$(( $fcnt+1 ))

        npt="$destdir/$fcnt.$res:e"
        mdref="[$res:t:r](../$npt)"
        old=$(echo $res | cut -d'/' -f2-)
        echo "$mdref" >> $mdfn.log
        f=$res:q
        ff="${f/'\('/(})"
        pattern="s|$ff|$mdref|g"
        mv $old $npt
        sed -i -- $pattern $mdf

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


