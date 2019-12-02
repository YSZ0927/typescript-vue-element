<template>
    <div class="upload-img">
        <el-upload
            :action="uploadUrl"
            multiple
            ref="upload"
            name="file"
            :file-list="fileList"
            :on-exceed="limitHandle"
            :on-success="upSuccess"
            :on-error="upError"
            list-type="picture-card"
            :limit="limit">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                    <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url" alt="">
                    <span class="el-upload-list__item-actions">
                        <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                        >
                        <i class="el-icon-zoom-in"></i>
                        </span>
                        <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                        >
                        <i class="el-icon-download"></i>
                        </span>
                        <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                        >
                        <i class="el-icon-delete"></i>
                        </span>
                    </span>
                </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component({})
    export default class uploadImg extends Vue {
        @Prop({ default: '' }) private paramKey!: String;

        private dialogImageUrl: String = '';

        private dialogVisible: Boolean = false;

        private disabled: Boolean = false;

        private limit: Number = 5;

        private fileList: Object[] = [];

        private imgList: Object[] = [];

        private fileData: Object = new FormData();


        private uploadUrl: String = '/api/upload/uploadImg';

        private handleRemove() {
        }

        private handlePictureCardPreview() {
        }

        private handleDownload() {
        }

        private limitHandle() {
            console.log('chaole');
        }

        private upSuccess(res: any) {
            const self: any = this;
            const param: any = {};
            self.imgList.push(res.data);
            param[self.paramKey] = self.imgList.join(',');
            self.$emit('changeImg', param);
        }

        private upError(err: any) {
            console.log(err);
        }

        private uploadSubmit() {
            const self: any = this;
            self.$refs.upload.submit();
        }
    }
</script>
