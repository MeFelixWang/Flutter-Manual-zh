<template>
    <div class="example">
        <div class="example-code">
            <div class="example-code-text" ref="code">
                <slot name="code"></slot>
            </div>
            <i @click="copyCode" class="example-btn iconfont">&#xe744;</i>
        </div>
        <div class="example-img">
            <slot name="img"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExampleLayout",
        methods: {
            //复制代码
            copyCode() {
                let code = this.$refs.code;
                this.$copyText(code.innerText).then(function (e) {
                    console.log(e)
                }, function (e) {
                    console.log(e)
                })
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';
        src: url('//at.alicdn.com/t/font_974820_5lig41mbxgs.eot');
        src: url('//at.alicdn.com/t/font_974820_5lig41mbxgs.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_974820_5lig41mbxgs.woff') format('woff'),
        url('//at.alicdn.com/t/font_974820_5lig41mbxgs.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_974820_5lig41mbxgs.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    .example {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #eaecef;
        border-radius: 5px;
    }

    .example-code, .example-img {
        height: 500px;
        padding: 15px;
        flex: 1;
        position: relative;
    }

    .example-code {
        overflow: scroll;
    }

    .example-img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .example-btn {
        background-color: transparent;
        border: none;
        color: #3eaf7c;
        position: absolute;
        font-size: 20px;
        top: 15px;
        right: 15px;
        transition: 0.3s all;
        opacity: 0;
        cursor: pointer;
        outline: none;
        font-weight: 400;
    }

    .example-code:hover .example-btn {
        opacity: 1;
    }

</style>