# tools
Some tools that I can reuse at some time

## json_merge
After trying to find an online json merge tool none did the merge that I wanted.
Basically this tool gets all keys from the left side that are not on the right side and adds those to a new output

Usage:
- node merge.js 'left_side_file1' 'right_side_file2'
- node merge.js 'left_side_file1' 'right_side_file2' 'merged.json'