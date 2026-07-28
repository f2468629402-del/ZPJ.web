import re

with open('data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

count = 0
def replace_path(match):
    global count
    count += 1
    return "getImagePath('" + match.group(1) + "')"

# Match single and double quoted /images/... paths
content = re.sub(r"'(\/images\/[^']+)'", replace_path, content)
content = re.sub(r'"(\/images\/[^"]+)"', replace_path, content)

# Add the import if not present
import_line = "import { getImagePath } from '@/lib/basePath';\n"
if "from '@/lib/basePath'" not in content:
    lines = content.split('\n')
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.startswith('import '):
            last_import_idx = i
    
    if last_import_idx >= 0:
        lines.insert(last_import_idx + 1, import_line.rstrip('\n'))
        content = '\n'.join(lines)

with open('data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Replaced {count} image paths in data/projects.ts')
