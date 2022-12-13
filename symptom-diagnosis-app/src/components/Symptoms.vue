<template>
<div>
    <br/>
    <h1>What are your symptoms?</h1>
    <form>
            <div id="grid">
                <input id="input-symptom" @input="handleChange" :value="symptom" name="symptom"/>
                <br/>
                <br/>
                <button>
                    <h3>Add Symptom</h3>
                </button>
                <div>
                    <!-- <h1>{{symptoms}}</h1> -->
                </div>
            </div>
        </form>
</div>
</template>

<script>
import axios from 'axios'
const URL = 'http://localhost:3001/home'
    export default {
        name: 'SymptomComponent',
        data: ()=>({
            symptom: '',
            symptoms: []
        }),
        mounted: function(){
            this.getAllSymptoms()
        },
        methods: {
            handleChange(e) {
                this[e.target.name] = e.target.value
            },
            async getAllSymptoms (){
                const response = await axios.get(`${URL}/symptoms`)
                console.log(response)
            }
        }
    }
</script>

<style>
    #input-symptom{
        padding: 5px 15px 5px 15px;
    }
</style>