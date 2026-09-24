const fs = require('fs');
const path = require('path');

const rootDirectory = __dirname;
const outputFile = path.join(rootDirectory, 'pages.json');

function findHtmlFiles(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    const htmlFiles = [];

    for (const entry of entries) {
        if (entry.name === 'node_modules' || entry.name === '.git') continue;

        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            htmlFiles.push(...findHtmlFiles(fullPath));
        } else if (
            entry.isFile() &&
            entry.name.toLowerCase().endsWith('.html') &&
            fullPath !== path.join(rootDirectory, 'index.html')
        ) {
            const relativePath = path.relative(rootDirectory, fullPath)
                .split(path.sep)
                .join('/');

            htmlFiles.push({ name: relativePath, path: relativePath });
        }
    }

    return htmlFiles;
}

const pages = findHtmlFiles(rootDirectory).sort((a, b) =>
    a.path.localeCompare(b.path)
);

fs.writeFileSync(outputFile, JSON.stringify(pages, null, 2) + '\n');
console.log(`Added ${pages.length} HTML pages to pages.json`);
