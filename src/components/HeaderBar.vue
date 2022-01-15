<template>
    <div class="header-bar">
        <div class="bar-content">
            <div class="title">电电影视</div>
            <div class="menu">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click.prevent>
                        Hover me
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <a href="javascript:;">1st menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">2nd menu item</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'HeaderBar',
    setup() {

    }
})
</script>
<style lang="scss" scoped>
.header-bar {
    background-color: palegoldenrod;
}
.bar-content {
    width: 100%;
    box-sizing: border-box;
    background-color: palegreen;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title {
    color: #3a8fb7;
    font-size: 40px;
}
</style>