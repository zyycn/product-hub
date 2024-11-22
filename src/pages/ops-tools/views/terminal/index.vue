<script setup lang="ts">
import { FitAddon } from '@xterm/addon-fit'
import { WebglAddon } from '@xterm/addon-webgl'
import { Terminal } from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css'

const xterm = new Terminal({
  cursorInactiveStyle: 'bar',
  cursorStyle: 'bar',
  cursorWidth: 4,
  fontFamily: '"Cascadia Code", Menlo, monospace',
  cursorBlink: true,
  theme: {
    foreground: '#F8F8F8',
    background: '#1d1e1f',
    black: '#1E1E1D',
    brightBlack: '#262625',
    red: '#CE5C5C',
    brightRed: '#FF7272',
    green: '#5BCC5B',
    brightGreen: '#72FF72',
    yellow: '#CCCC5B',
    brightYellow: '#FFFF72',
    blue: '#5D5DD3',
    brightBlue: '#7279FF',
    magenta: '#BC5ED1',
    brightMagenta: '#E572FF',
    cyan: '#5DA5D5',
    brightCyan: '#72F0FF',
    white: '#F8F8F8',
    brightWhite: '#FFFFFF'
  }
})

const initTeminal = () => {
  // 使用CANVAS渲染
  const webglAddon = new WebglAddon()
  // 适配DOM插件
  const fitAddon = new FitAddon()

  // 加载插件
  xterm.loadAddon(webglAddon)
  xterm.loadAddon(fitAddon)

  // 挂载Xterm
  xterm.open(document.getElementById('xterm') as HTMLDivElement)

  // 适配
  fitAddon.fit()

  // 命令提示符
  const promptSuffix = 'OPSTools@XTerm:~# '

  // 命令
  let command = ''

  interface Commands {
    [key: string]: {
      f: () => void
    }
  }

  const commands: Commands = {}

  // 欢迎词
  xterm.writeln(
    [
      'Performance',
      '    Xterm.js is the frontend component that powers many terminals including',
      '                           \x1b[3mVS Code\x1b[0m, \x1b[3mHyper\x1b[0m and \x1b[3mTheia\x1b[0m!',
      '',
      ' ┌ \x1b[1mFeatures\x1b[0m ──────────────────────────────────────────────────────────────────┐',
      ' │                                                                            │',
      ' │  \x1b[31;1mApps just work                         \x1b[32mPerformance\x1b[0m                        │',
      ' │   Xterm.js works with most terminal      Xterm.js is fast and includes an  │',
      ' │   apps like bash, vim and tmux           optional \x1b[3mWebGL renderer\x1b[0m           │',
      ' │                                                                            │',
      ' │  \x1b[33;1mAccessible                             \x1b[34mSelf-contained\x1b[0m                     │',
      ' │   A screen reader mode is available      Zero external dependencies        │',
      ' │                                                                            │',
      ' │  \x1b[35;1mUnicode support                        \x1b[36mAnd much more...\x1b[0m                   │',
      ' │   Supports CJK 語 and emoji \u2764\ufe0f            \x1b[3mLinks\x1b[0m, \x1b[3mthemes\x1b[0m, \x1b[3maddons\x1b[0m,            │',
      ' │                                          \x1b[3mtyped API\x1b[0m, \x1b[3mdecorations\x1b[0m            │',
      ' │                                                                            │',
      ' └────────────────────────────────────────────────────────────────────────────┘',
      ''
    ].join('\n\r')
  )

  // 输入
  const prompt = () => {
    command = ''
    xterm.write(`\r\n${promptSuffix}`)
  }

  // 初始化命令提示符
  prompt()

  // 滚动到底部
  document.querySelector('.xterm')?.addEventListener('wheel', e => {
    if (xterm.buffer.active.baseY > 0) {
      e.preventDefault()
    }
  })

  // 执行命令
  const runCommand = (xterm: Terminal, text: string) => {
    const command = text.trim().split(' ')[0]
    if (command.length > 0) {
      xterm.writeln('')

      if (command in commands) {
        commands[command].f()
        return
      }
      xterm.writeln(`${command}: command not found`)
    }
    prompt()
  }

  // 输入命令
  xterm.onData(e => {
    switch (e) {
      case '\u0003': // Ctrl+C
        xterm.write('^C')
        prompt()
        break
      case '\r': // Enter
        runCommand(xterm, command)
        command = ''
        break
      case '\u007F': // Backspace (DEL)
        // Do not delete the prompt
        if (xterm.buffer.active.baseY > prompt.length) {
          xterm.write('\b \b')
          if (command.length > 0) {
            command = command.slice(0, command.length - 1)
          }
        }
        break
      default: // Print all other characters for demo
        if ((e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7e)) || e >= '\u00a0') {
          command += e
          xterm.write(e)
        }
    }
  })
}

nextTick(() => {
  initTeminal()
})
</script>

<template>
  <div class="terminal flex">
    <el-card class="terminal-container h-[calc(100vh-130px)] flex-1 bg-[#1d1e1f]!" shadow="never">
      <div id="xterm" class="h-full" />
    </el-card>
    <el-card class="ml-15px w-260px" shadow="never"></el-card>
  </div>
</template>

<style scoped lang="scss">
:deep(.xterm) {
  .xterm-viewport {
    scrollbar-width: none;
  }
}

.terminal {
  .terminal-container {
    :deep(.el-card__body) {
      height: 100%;
    }
  }
}
</style>
