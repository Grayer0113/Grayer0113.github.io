本地部署指南：

```zsh
sudo pacman -S nodejs npm
git clone https://github.com/Grayer0113/Grayer0113.github.io.git Website-Doc
cd Website-Doc
npm install
npm run docs:dev
```

在浏览器中打开 http://localhost:5173/ 即可

你也可以使用 `apt/brew/scoop`，只需自行替换安装命令。