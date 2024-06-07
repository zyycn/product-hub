<template>
  <div id="app">
    <div class="container">
      <div class="left-panel" :style="{ width: leftWidth + 'px' }">Left Panel</div>
      <div class="divider">
        <div class="drag-handle" @mousedown="startDragHorizontal"></div>
      </div>
      <div class="right-panel">
        <div class="top-panel" :style="{ height: topHeight + 'px' }">Top Panel</div>
        <div class="divider-horizontal">
          <div class="drag-handle-horizontal" @mousedown="startDragVertical"></div>
        </div>
        <div class="bottom-panel">Bottom Panel</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      leftWidth: 200, // 初始左边宽度为200px
      topHeight: 700, // 初始右侧上部高度为200px
      dragging: false,
      startX: 0,
      startY: 0,
      startLeftWidth: 200,
      startTopHeight: 200,
      direction: '' // 'horizontal' or 'vertical'
    }
  },
  methods: {
    startDragHorizontal(event: MouseEvent) {
      this.dragging = true
      this.startX = event.clientX
      this.startLeftWidth = this.leftWidth
      this.direction = 'horizontal'
      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.stopDrag)
      document.body.classList.add('no-select')
    },
    startDragVertical(event: MouseEvent) {
      this.dragging = true
      this.startY = event.clientY
      this.startTopHeight = this.topHeight
      this.direction = 'vertical'
      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.stopDrag)
      document.body.classList.add('no-select')
    },
    onDrag(event: MouseEvent) {
      if (this.dragging) {
        if (this.direction === 'horizontal') {
          const deltaX = event.clientX - this.startX
          let newLeftWidth = this.startLeftWidth + deltaX
          if (newLeftWidth < 200) newLeftWidth = 200
          if (newLeftWidth > 800) newLeftWidth = 800
          this.leftWidth = newLeftWidth
        } else if (this.direction === 'vertical') {
          const deltaY = event.clientY - this.startY
          let newTopHeight = this.startTopHeight + deltaY
          if (newTopHeight < 200) newTopHeight = 200
          if (newTopHeight > 800) newTopHeight = 800
          this.topHeight = newTopHeight
        }
      }
    },
    stopDrag() {
      this.dragging = false
      this.direction = ''
      document.removeEventListener('mousemove', this.onDrag)
      document.removeEventListener('mouseup', this.stopDrag)
      document.body.classList.remove('no-select')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.left-panel {
  overflow: auto;
  height: 100%;
}

.right-panel {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.top-panel {
  overflow: auto;
}

.bottom-panel {
  flex-grow: 1;
  overflow: auto;
}

.divider {
  width: 10px;
  background-color: #ccc;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drag-handle {
  width: 4px;
  height: 50px;
  background-color: #888;
  cursor: ew-resize;
  position: absolute;
}

.divider-horizontal {
  height: 10px;
  background-color: #ccc;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drag-handle-horizontal {
  width: 50px;
  height: 4px;
  background-color: #888;
  cursor: ns-resize;
  position: absolute;
}

/* 禁止文本选择 */
.no-select {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
