# Arch Linux 安装使用教程

***在阅读本教程前，请仔细阅读该页面的说明。***

## Arch Linux 简介

- Arch Linux 是一个独立开发的 x86-64 通用 GNU/Linux 发行版，用途广泛，足以适合任何使用人员。Arch 的开发注重简单性、极简主义和代码优雅。作为一个最小的基础系统安装，Arch 由用户配置，通过仅安装其所需的内容来组装他们自己的理想环境。Arch 迄今为止并不提供 GUI 配置程序，大多数系统配置是通过从 shell 编辑简单的文本文件。Arch 努力保持领先地位，通常提供大多数软件的最新稳定版本。

- Arch Linux 使用自己的 Pacman 包管理器，它将简单的二进制包与易于使用的包构建系统结合起来。从官方 Arch 软件到用户自己的个人包，再到来自第三方的包，用户可以轻松管理和自定义。存储库系统还允许用户轻松构建和维护自己的自定义构建脚本、包和存储库，从而鼓励社区发展和贡献。

- 最小的 Arch 基础包集位于简化的 [core] 存储库中。此外，官方的 [extra] 和 [multilib] 存储库提供了数千个高质量的软件包来满足您的软件需求。Arch 还提供 Arch Linux User Repository (AUR)，其中包含超过 49,000 个构建脚本，用于使用 Arch Linux 包含的 makepkg 应用程序从源代码编译可安装的软件包。

- Arch Linux 使用“滚动发布”系统，允许一次性安装和永久软件升级。从一个“版本”升级到下一个“版本”，通常不需要重新安装 Arch Linux 系统。通过发出一个命令，Arch 系统就能保持最新。

- Arch Linux 努力使其软件包尽可能接近原始上游软件。仅在必要时才应用补丁，以确保应用程序能够与安装在最新的 Arch 系统上的其它软件包一起正确编译和运行。

- 总而言之：Arch Linux 是一个多功能、简单的发行版，旨在满足有能力的 Linux® 用户的需求。它功能强大，且易于管理，使其成为服务器和工作站的理想发行版。如果您认同 GNU/Linux 发行版的愿景，那么我们欢迎并鼓励您自由的使用它、参与其中并为社区做出贡献。欢迎来到 Arch Linux！

## 行文风格说明

- 在文中，如果你看到一个软件带有 <sup>EULA</sup> 上标，那么代表它是一个专有软件。除非实在没有代替品，我们不会推荐专有软件。

- 在文中，如果你看到一个软件带有 <sup>AUR</sup> 上标，那么代表它是一个来自 AUR 仓库的软件，这些软件由用户进行维护，官方不保证其稳定性。

- 在文中，如果你看到如下内容，代表需要删除红色内容，添加绿色内容，省略号表示中间、之前、之后省略许多无需更改内容。

```diff
......
这是一行需要删除的内容 // [!code --]
......
这是一行需要增加的内容 // [!code ++]
......
```

- 如无特殊说明，在 CLI 环境下默认使用 `nano` 编辑器，在 GUI 环境下默认使用 `Kate` 进行编辑。

## 注意事项

- 本文默认使用 UEFI + GPT 进行安装，传统 BIOS 安装方式不做陈述。

- 部分指令并不能直接执行，请参考命令说明。

- 本文默认使用 `nvme0n1` 作为硬盘名，如果你的硬盘不是 NVMe 协议，它可能会叫做 `sda` 等名字，请自行查询。

- 本文默认你有一定的 Linux 与电脑基础，一些操作如果你看不懂请自行查询。

## 参考内容

- [Arch Linux - 关于 Arch](https://archlinux.org/about)
