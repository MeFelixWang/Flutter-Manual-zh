<template>
    <div class="example">
        <div class="example-code">
            <div class="example-code-text" ref="code">
                ceshi
                <slot name="code"></slot>
            </div>
            <button type="button" @click="copyCode">
                复制
                <!--<img src="~public/copy.svg" alt="">-->
            </button>
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
                console.log(this.$refs.code);
                let code = this.$refs.code;
                document.execCommand(code.innerText);
            }
        }
    }
</script>

<style scoped>
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
    }

    .example-code {
        overflow: scroll;
    }

    .example-img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .example-img img {
        max-width: 100%;
        max-height: 100%;
    }
</style>