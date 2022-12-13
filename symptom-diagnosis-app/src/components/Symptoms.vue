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
                <h1 id="symptoms">List of symptoms:</h1>
                <div :key="symptom.id" v-for="symptom in symptoms">
                    <h4>{{symptom.symptom}}</h4>
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
                this.symptoms = response.data
                console.log(this.symptoms)
            }
        }
    }
</script>

<style>
    #input-symptom{
        padding: 5px 15px 5px 15px;
    }
    #symptoms{
        color:rgb(47, 47, 47);
    }
</style>