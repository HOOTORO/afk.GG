#!/bin/zsh

# images=$(ls docs/assets/images)
images=$(ls docs/converted)
mdlinks=("${(@f)$(grep --color -rwho "\!.*(.*)" docs/**/*.md)}") 

# echo "$images"
for str in $mdlinks  #$(grep --color -rwh "\!.*(.*)" docs/**/*.md)
do
    # echo "Full str: $str"
    if [[ $str =~ '[(].*/(.*)[)]$' ]] && res=$match[1]; then
        echo "CAPTURED: $res"
        if ! (($images[(Ie)$res])); then
             echo "File $res UNused!"
        fi
    fi
done

# /bin/ls -1U | wc -l

# cd docs/assets/images/
# echo "out: $fcnt \n $(ls)"


