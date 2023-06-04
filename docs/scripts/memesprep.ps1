param (
    [string]$process_forlder = "docs/images/memes"
    # [Parameter(Mandatory=$true)][string]$DO
    # [string]$password = $( Read-Host "Input password, please" )
 )

 if (Test-Path $process_forlder) {
    #deletes a file or does something "bad"
    $res = Get-ChildItem $process_forlder  -recurse | where {! $_.PSIsContainer}
    foreach ($file in $res)
    {   
        $fn = $file.BaseName
        # "converted/${fn}.md"
        $file
        magick $file -colorspace YCbCr -quality 90 "docs/converted/${fn}.jpg" 
        Add-Content ./docs/_coolstory/meme.md  "`n![](../converted/$fn.jpg)"
        # rm -f $file   
        # mv -f $file ./converted
    }
    
}

# foreach ($r in $res) {
#     fn=$(basename -- "$r")
#     magick $r -colorspace YCbCr -quality 90 "converted/${fn%.*}.jpg"  
#     # rm -f $i   
# }