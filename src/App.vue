<template>
  <div id="app">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning" @click="dialogVisible = true">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="showViewerEvent">确 定</el-button>
      </span>
    </el-dialog>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showViewer: false,
      viewerVisible: false,
      dialogVisible: false,
      imgIndex: 0,
      imgDataList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  },
  methods: {
    showViewerEvent() {
      this.$PreviewPic({
        zIndex: 9999, // 组件的zIndex值 默认为2000

        index: 0, // 展示第几张图片 默认为0

        list: this.imgDataList, // 需要展示图片list

        onClose: i => {
          // 关闭时的回调

          console.log(i);
        },

        onSelect: i => {
          // 点击某张图片的回调

          console.log(i);
        }
      });
    },
    closeViewer() {
      this.showViewer = false;
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
