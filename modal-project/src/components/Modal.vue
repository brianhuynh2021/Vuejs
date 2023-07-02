<template>
    
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme==='sale' }">
            <!-- <h1>{{ header }} - {{ ok }}</h1>
            <p> {{ text }}</p> -->
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        // props: ['header', 'text', 'ok', 'theme'],
        props: ['theme'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>
<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 150px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0, 0.25);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: #03cfb4;
        border: none;
        padding: 0;
    }

    .modal p {
        font-style: normal;
    }

    .modal.sale {
        background: rgb(227, 75, 75);
        color: white;
    }

    .modal.sale h1 {
        color: white;
    }
</style>