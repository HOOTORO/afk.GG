# .venv\Scripts\Activate.ps1 & mkdocs --watch-theme


$old = Get-Content .\docs\theme\assets\json\hero.json | ConvertFrom-Json
$new = Get-Content .\docs\theme\assets\json\heroes.json | ConvertFrom-Json



$res = @()
$i = 0
foreach ($n in $new) {
  $icon = $n.icon.Split('/')[-1]
  $su = [PSCustomObject]@{
    id         = $n.id
    type       = $n.type
    class      = $n.class
    role       = $n.role
    slug       = $n.slug
    faction    = $n.faction
    isAwakened = $n.isAwakened
    name       = "dreaf$($i)"
    icon       = $n.icon
  }
  $i++
  foreach ($o in $old) {
    if ($o.icon.Split('/')[-1] -eq $icon) {
      $su.name = $o.name
    }
  }
  $res += $su
  
}

$res | Format-Table

$res | ConvertTo-Json > heroesN.json

# $max = 41
# foreach ($a in $aa) {
#   if ($a.id -lt 0) {
#     $a.id = $max
#     $max++
#   }
# }

# $aa | ConvertTo-Json > hero2.json
# $i = 1
# function iti {
#   $i++
#   return $i
# }
# $aa = Get-ChildItem .\docs\theme\assets\portraits\pets | Where-Object { $_.BaseName -notlike "*_basic" } | Select-Object -Property  @{ Name = 'name'; Expression = { $_.BaseName } }, @{ Name = 'id'; Expression = { [int](Join-String -Separator "" -InputObject $_.BaseName[-2..-1]) } }, `
# @{ Name = 'icon'; Expression = { $_.FullName.Substring(36).Replace('\', "/") } }  | ConvertTo-Json > pets.json


