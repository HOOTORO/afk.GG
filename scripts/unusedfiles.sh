#!/bin/zsh
# echo > imgs.log
echo > unsusedimages.log

images=("${(@f)$(ls docs/converted)}") # $(ls docs/converted)
mdlinks=("${(@f)$(grep --color -rwo "\!.*(.*)" docs/**/*.md)}") 
LINKS=()

for str in $mdlinks  #$(grep --color -rwh "\!.*(.*)" docs/**/*.md)
do
    # https://regex101.com/r/86fzFp/1
    if [[ $str =~ '[(].*/(.*)[)]' ]] && res=$match[1]; then
        # echo "CAPTURED: $res"
        LINKS+=$res
        # if ! (($images[(Ie)$res])); then
        #      echo "$str dead link!" >> deadlink.log
        # fi
    fi
done

echo "$mdlinks" > mdlinks.log
echo "$LINKS" > LINKS.log 
echo "$images" > images.log                             

for img in $images
do
    if ! (($LINKS[(Ie)$img])); then
            echo "$img not used!" >> unsusedimages.log
    fi
done
# /bin/ls -1U | wc -l

# cd docs/assets/images/
# echo "out: $fcnt \n $(ls)"


