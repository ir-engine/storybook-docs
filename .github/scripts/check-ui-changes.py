import sys


added, modified, removed = sys.argv[1:]
all_changes = added.split() + modified.split() + removed.split()

for file in all_changes:
    if "/ui/" in file:
        sys.exit(1)

sys.exit(0)
