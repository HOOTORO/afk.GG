
$mtcs = Select-String -Path ./docs/_coolstory/meme.md '!\[.*\]\(.*\)'

$columns = 2
"|history | in | memes |`n| :--- | :--- | :--- |" > docs/_coolstory/mnd.md
$cnt = 0
$row = ""
$arr = @()
foreach($y in $mtcs){
    $ss = $y.Matches.Get(0).Value.Split("|")
    # $ss.Count
    if ($ss.Count -gt 1) {
        foreach ($s in $ss) {
            $arr += $s.Trim()    
        }
    } else {
        $arr += $ss
    }

}

foreach ($m in $arr) {
    if ($cnt -lt $columns) {
        $row += "| $m" 
        $cnt++
    } else {
        "$row | $m |" >> docs/_coolstory/mnd.md
        $row =""
        $cnt = 0
    }
}

# New-Item -ItemType "file" -Path "docs/hh.md" $md 