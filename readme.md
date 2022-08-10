# Bun.js Start

## Bun.js Install
```shell
curl -fsSL https://bun.sh/install | bash
```

## Zig Install
```shell
# Custom path for the custom zig install
mkdir -p ~/.bun-tools

# Requires jq & grab latest binary
curl -o zig.tar.gz -sL https://github.com/oven-sh/zig/releases/download/jul1/zig-macos-$(uname -m).tar.gz

# This will extract to $HOME/.bun-tools/zig
tar -xvf zig.tar.gz -C $HOME/.bun-tools/

# Make sure it gets trusted
xattr -dr com.apple.quarantine .bun-tools/zig/zig
```

## Zig Set Config - zsh
```shell
echo 'export PATH="$HOME/.bun-tools/zig:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

## Zig set Config - bash
```shell
echo 'export PATH="$HOME/.bun-tools/zig:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```

[bun.js 공식문서](https://bun.sh/)