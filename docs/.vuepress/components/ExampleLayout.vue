<template>
    <div class="example">
        <div class="example-code">
            <slot name="code"></slot>
        </div>
        <div class="example-img">
            <slot name="img"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExampleLayout"
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