param (
    [string]$process_forlder = "docs"
    # [Parameter(Mandatory=$true)][string]$DO
    # [string]$password = $( Read-Host "Input password, please" )
 )

 if (Test-Path $process_forlder) {
    #deletes a file or does something "bad"
    $res = Get-ChildItem $process_forlder -Filter *.md  -recurse | where {! $_.PSIsContainer}
    foreach ($file in $res)
    {   
        $fn = $file.BaseName
        "converted/${fn}.md"
        $fn+".md"

        # magick $file -colorspace YCbCr -quality 90 "converted/${fn}.jpg" 
        # rm -f $file   
        # mv -f $file ./converted
    }
    
}

# foreach ($r in $res) {
#     fn=$(basename -- "$r")
#     magick $r -colorspace YCbCr -quality 90 "converted/${fn%.*}.jpg"  
#     # rm -f $i   
# }