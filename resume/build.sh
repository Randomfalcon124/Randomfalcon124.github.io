#!/usr/bin/env bash
# Renders every resume variant to assets/. Usage: bash resume/build.sh
set -e
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
DIR="$(cd "$(dirname "$0")" && pwd -W 2>/dev/null || dirname "$0")"
OUT="$DIR/../assets"
for v in aero robotics; do
  name="$(echo "${v:0:1}" | tr a-z A-Z)${v:1}"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$OUT/AkshayPatil_Resume_$name.pdf" "file:///$DIR/index.html?v=$v" >/dev/null 2>&1
  echo "wrote assets/AkshayPatil_Resume_$name.pdf"
done
