#!/bin/bash
set -e
shopt -s expand_aliases

alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"

chrome --headless --disable-gpu --print-to-pdf http://localhost:3000/checklists/n549sr --print-to-pdf=../export/n549sr.pdf