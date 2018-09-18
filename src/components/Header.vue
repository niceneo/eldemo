<template>
    <el-row>
        <el-col :span="20">
            <div class="head-wrap"><i class="el-icon-info"></i>Element</div>
        </el-col>
        <el-col :span="4">
             <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    赵子龙<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="setting">设置</el-dropdown-item>
                    <el-dropdown-item disabled>我的信息</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout" command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
        </el-col>
    </el-row>
</template>
<script>
export default {
    methods: {
        handleCommand(command){
            this.$message(command)
        },
        logout(command){
            this.$message("click logout")
        }
    }
    
}
</script>
<style scoped>

</style>