<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn modal-default-button" @click="$emit('close')">OK</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "ModalWindow",
}
</script>

<style lang="scss" scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    max-width: 450px;
    margin: 0px auto;
    padding: 12px 25px;
    padding: 20px 30px;
    background-color: #fff;
    transition: all 0.3s ease;
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #666666;
    border: 3px solid #2094E6;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.33);
}
.modal-body {
    margin: 20px 0;
}
.modal-footer {
    display: flex;
    justify-content: flex-end;
}
.modal-default-button {
    width: auto;
    padding: 5px;
}
</style>