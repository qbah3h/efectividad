Always include git commit command after code changes. 
Behavior: Include a ready-to-run git commit command after every code change. 
Format: git commit -m "<commit_message> [AI]"

Error found:
git add -A && git commit -m "Translate document to English and rename file [AI]"
At line:1 char:12
+ git add -A && git commit -m "Translate document to English and rename ...
+            ~~
The token '&&' is not a valid statement separator in this version.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : InvalidEndOfLine

Solution:
git add -A; git commit -m "Translate document to English and rename file [AI]"