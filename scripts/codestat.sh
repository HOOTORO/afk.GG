#!/bin/zsh

# Define a timestamp function
timestamp() {
  date +"updated -> %D %T" # current time
}

R=`timestamp`

DATA=$(find . -type d \( -path ./node_modules -o -path ./site \) -prune -o -name '*.ts' -o -name '*.scss' -o -name '*.py' -o -name '*.sh' -o -name '*.j2' -o -name '*.html' | xargs wc -l)

echo "<|--------------|>\n\t$R\n$DATA\n<|--------------|>\n" > codestat.log

# date +"updated -> %D %T" >> codestat.log
# find .. -name '*.go' | xargs wc -l >> codestat.log