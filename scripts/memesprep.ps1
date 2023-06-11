# param (
    # [string]$process_forlder = "newmemes"
    # [Parameter(Mandatory=$true)][string]$DO
    # [string]$password = $( Read-Host "Input password, please" )
#  )


 $targetDir = Get-ChildItem "docs/assets/images"

 Write-Output "$pwd/$targetDir"

#  $lastIndex
#  if (Test-Path $process_forlder) {
#     #deletes a file or does something "bad"
#     $res = Get-ChildItem $process_forlder  -recurse | where {! $_.PSIsContainer}
#     foreach ($file in $res)
#     {   
#         $fn = $file.BaseName
#         # "converted/${fn}.md"
#         $file
#         magick $file -colorspace YCbCr -quality 90 "docs/assets/images/${fn}.jpg" 
#         Add-Content ./docs/unusedimgames.md  "`n![](../converted/$fn.jpg)"
#         # rm -f $file   
#         # mv -f $file ./converted
#     }
    
# }

# foreach ($r in $res) {
#     fn=$(basename -- "$r")
#     magick $r -colorspace YCbCr -quality 90 "converted/${fn%.*}.jpg"  
#     # rm -f $i   
# }