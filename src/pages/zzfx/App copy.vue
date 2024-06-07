<template>
  <div ref="codeMirror" class="code"></div>
  <button @click="addText('名称')">测试数据</button>
  <button @click="getEditorDoc">获取数据</button>

  <div class="box">
    <div class="left">
      <span>LEFT</span>
      <div class="resize-handle" @mousedown="onMouseDown" @mouseleave="onMouseLeave"></div>
    </div>
    <div class="right">RIGHT</div>
  </div>
</template>

<script setup>
import { EditorView, minimalSetup, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import { MatchDecorator, WidgetType, keymap, placeholder } from '@codemirror/view'
import { Decoration, ViewPlugin, ViewUpdate } from '@codemirror/view'
import { defaultKeymap, insertTab, standardKeymap } from '@codemirror/commands'

let codeMirror = ref(null)

let doc = `console.log(2222)`
const addText = () => {
  let val = { name: '测试数据年就开了', id: '222' }
  if (codeMirror.value) {
    editor.dispatch({
      changes: {
        from: editor.state.selection.main.head,
        to: editor.state.selection.main.head,
        insert: `[[${val.id}.${val.name}]]`
      },
      // 光标位置
      selection: {
        anchor: editor.state.selection.main.head + val.name.length + 5 + val.id.length
      }
    })
    // 聚焦
    editor.focus()
  }
}

const getEditorDoc = () => {
  console.log(editor.state.doc)
  return editor.state.doc.toString()
  // return (editorView.value as EditorView).contentDOM.textContent;
}

let editor
onMounted(() => {
  class PlaceholderWidget extends WidgetType {
    constructor(name) {
      super()
      this.name = name
    }
    eq(other) {
      return this.name == other.name
    }
    toDOM() {
      let elt = document.createElement('span')
      elt.style.cssText = `
        background-color: rgba(54, 133, 242, .1);
        color: #3685f2;
        display: inline-block;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#1a3685f2,endColorstr=#1a3685f2);
        line-height: 16px;
        margin: 0 1px;
        padding: 0 2px;`
      elt.textContent = this.name
      return elt
    }
    ignoreEvent() {
      return false
    }
  }

  const placeholderMatcher = new MatchDecorator({
    // regexp: /\[\[(\w+)\]\]/g, // 原有逻辑
    regexp: /\[\[(.+?)\]\]/g, //支持中文
    decoration: match =>
      Decoration.replace({
        widget: new PlaceholderWidget(match[1])
      })
  })

  let a

  const placeholders = ViewPlugin.fromClass(
    class {
      placeholders
      constructor(view) {
        this.placeholders = placeholderMatcher.createDeco(view)
      }
      update(update) {
        this.placeholders = placeholderMatcher.updateDeco(update, this.placeholders)
      }
    },
    {
      decorations: instance => instance.placeholders,
      provide: plugin =>
        EditorView.atomicRanges.of(view => {
          return view.plugin(plugin)?.placeholders || Decoration.none
        })
    }
  )

  function indentCurrentLine(editor) {
    // 获取当前光标位置的行号
    const cursor = editor.state.selection.main.head
    const line = cursor.line

    // 缩进行
    editor.indentLine(line, 'add')
  }

  const indentWithTab = [
    {
      key: 'Tab',
      preventDefault: true,
      run: insertTab
    },
    {
      key: 'Shift-Tab',
      preventDefault: true,
      run: indentCurrentLine
    }
  ]

  if (codeMirror.value) {
    editor = new EditorView({
      state: EditorState.create({
        doc: 'Dear [[name]],\nYour [[item]] is on its way. Please see [[order]] for details.\n',
        extensions: [
          placeholders,
          placeholder('请输入'),
          minimalSetup,
          keymap.of([...standardKeymap, ...indentWithTab])
        ]
      }),
      parent: codeMirror.value
    })
  }
})

// 自由拉伸逻辑左侧区域
let onMouseDown = e => {
  if (e.target.classList.contains('resize-handle')) {
    document.onmousemove = e => {}
  }
}

let onMouseLeave = e => {
  console.log(e)
  document.onmousemove = null
}
</script>

<style lang="scss" scoped>
.box {
  height: 500px;
  display: flex;
  border: 1px solid #000;
  .left {
    width: 200px;
    border-right: 1px solid #ccc;
    position: relative;
    .resize-handle {
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }
  }
  .right {
    flex: 1;
  }
}
</style>
