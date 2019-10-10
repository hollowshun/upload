<template>
  <div class="view">
    <div class="item" v-for="(item,index) in formList" :key="index">
      <div style="font-size: 14px; color: #606266;line-height: 40px;">相关图片资料</div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="(file, fileList)=>{return handleRemove(file, fileList, index)}"
        :limit="5"
        :on-exceed="onExceed"
        :file-list="item.pics"
        :on-success="(response, file, fileList)=>{return onSuccess(response, file, fileList, index)}"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
      <el-form label-position="top" label-width="80px" :model="item">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="活动名称">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动链接">
              <el-input v-model="item.content"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button type="danger" @click="delItem(index)" style="margin-bottom:20px">删除</el-button>
    </div>
    <el-button type="success" @click="addItem" style="width:1000px">添加活动</el-button>
    <el-button type="primary" @click="saveItem" style="margin-top:20px;margin-left:0;">保存活动</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      formList: [{ pics: [] }]
    };
  },
  methods: {
    // 上传图片
    onSuccess(response, file, fileList, idx) {
      // 这里是element的上传地址，对应的name,url,自己打印fileList对照
      this.formList[idx].pics.push({ name: file.name, url: file.url });
    },
    // 移除图片
    handleRemove(file, fileList, idx) {
      let Pics = this.formList[idx].pics;
      Pics.forEach((item, index) => {
        if (file.name == item.name) {
          Pics.splice(index, 1);
        }
      });
    },
    // 查看图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onExceed(file, fileList) {
      this.$message({
        type: "warning",
        message: "最多上传5张"
      });
    },
    // 添加活动
    addItem() {
      this.formList.push({ pics: [] });
    },
    // 删除活动
    delItem(idx) {
      if (this.formList.length > 1) {
        this.formList.splice(idx, 1);
      } else this.formList = [{ pics: [] }];
    },
    // 保存活动
    saveItem() {
      this.$message({
        type: "success",
        message: "保存成功,可以刷新下试试回显效果"
      });
      console.log(this.formList);
      localStorage.setItem("formList", JSON.stringify(this.formList));
    }
  },
  created() {
    this.formList = JSON.parse(localStorage.getItem("formList")) || [
      { pics: [] }
    ];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  width: 1000px;
  margin: 0 auto;
}
.item {
  width: 100%;
}
</style>
