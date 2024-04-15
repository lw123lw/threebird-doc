const owner = 'lw123lw';  // 仓库所有者的用户名
const repo = 'threebird-doc';  // 仓库名称
const filePath = 'package.json';  // 文件路径

export const fetchVersion = async () => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
        headers: {
            Accept: 'application/vnd.github.v3.raw', // 请求原始内容
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const packageJson = await response.json();
    const version = packageJson.version;

    if (!version) return;

    const tagLineParagraph = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline');
    const docsVersionSpan = document.createElement('samp');
    docsVersionSpan.classList.add('version-tag');
    docsVersionSpan.innerText = `V${version}`; // 添加版本号前的 'V'
    tagLineParagraph?.appendChild(docsVersionSpan);
}