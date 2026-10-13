#!/bin/bash
# Patch three@0.165.0 to add back sRGBEncoding (removed in r162, needed by @designcodeio/threeui)
THREEFILE="node_modules/.pnpm/three@0.165.0/node_modules/three/build/three.module.js"
if [ -f "$THREEFILE" ] && ! grep -q "sRGBEncoding" "$THREEFILE"; then
  # Cross-platform sed: detect GNU vs BSD
  if sed --version 2>/dev/null | grep -q GNU; then
    sed -i 's/^export { /const sRGBEncoding = 3001;\nconst LinearEncoding = 3000;\nexport { sRGBEncoding, LinearEncoding, /' "$THREEFILE"
  else
    sed -i '' "s/^export { /const sRGBEncoding = 3001;\\
const LinearEncoding = 3000;\\
export { sRGBEncoding, LinearEncoding, /" "$THREEFILE"
  fi
  echo "Patched three@0.165.0: added sRGBEncoding"
fi

CONSTFILE="node_modules/.pnpm/three@0.165.0/node_modules/three/src/constants.js"
if [ -f "$CONSTFILE" ] && ! grep -q "sRGBEncoding" "$CONSTFILE"; then
  printf '\nexport const sRGBEncoding = 3001;\nexport const LinearEncoding = 3000;\n' >> "$CONSTFILE"
  echo "Patched three@0.165.0 constants.js"
fi
