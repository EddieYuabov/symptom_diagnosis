<template>
    <div>
        <h1>Website</h1>
        <form @submit="handleSubmit">
            <label></label>
            <input @input="handleChange" :value="searchQuery" name="searchQuery"/>
            <button @click="handleSubmit">Search</button>
            <br/>
        </form>
        <br/>
        <!-- {{results}} -->
    </div>
</template>

<script>
    export default {
        name: 'InputComp',
        props: {
            header:{
                type: String,
                required: true
            }
        },
        data: ()=>({
            searchQuery: '',
            results : []
        }),
        methods: {
            handleChange(e) {
                this[e.target.name] = e.target.value
            },
            handleSubmit(e){
                e.preventDefault()
                this.results = [...this.results, this.searchQuery]
                this.searchQuery = ''
            }
        }
    }
</script>

<style>
    h1 {
        color: #80cbc4;
        -webkit-text-stroke: .3px rgb(0, 0, 0);
        font-size: 50px;
    }
</style>