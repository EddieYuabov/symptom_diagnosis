<template>
<div>
    <h1>Diagnoses</h1>
    <form>
        <div>
            <label>Name: </label>
            <input @input="handleChange" :value="name" name="name"/>
            <br/>
            <br/>
            <label>Possible Cause: </label>
            <input @input="handleChange" :value="possible_cause" name="possible_cause"/>
            <br/>
            <br/>
            <label>Treatment: </label>
            <input @input="handleChange" :value="treatment" name="treatment"/>
            <br/>
            <br/>
            <button>
                <h3>Add Diagnosis</h3>
            </button>
            <h1>List of Diagnoses:</h1>
            <div id="diagnoses-list" :key="diagnose.id" v-for="diagnose in diagnoses">
                    <h6>Diagnosis:</h6>
                    <h4>{{diagnose.name}}</h4>
                    <h6>Possible cause:</h6>
                    <h4>{{diagnose.possible_cause}}</h4>
                    <h6>Treatment:</h6>
                    <h4>{{diagnose.treatment}}</h4>
                    <button id="edit-button">&#9998;</button>
                    <button id="delete-button">&#128465;</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios'
const URL = 'http://localhost:3001/home'
    export default {
        name: 'DiagnosisComponent',
        data:()=> ({
            name: '',
            possible_cause: '',
            treatment: '',
            diagnoses: []
        }),
        mounted: function(){
            this.getAllDiagnoses()
        },
        methods:{
            handleChange(e) {
                this[e.target.name] = e.target.value
            },
            async getAllDiagnoses (){
                const response = await axios.get(`${URL}/diagnosis`)
                this.diagnoses = response.data
                console.log(this.diagnoses)
            }
        }
    }
</script>

<style>

</style>