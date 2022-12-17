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
            <button id="add-diagnosis" @click="createDiagnosis">
                <h3>Add Diagnosis</h3>
            </button>
            <h1 id="list-diagnoses">List of Diagnoses:</h1>
            <div 
            id="diagnoses-list" 
            :key="diagnose.id" 
            v-for="diagnose in diagnoses" 
            @click="navigateItem(diagnose.id)"
            >
                    <h6>Diagnosis:</h6>
                    <h4>{{diagnose.name}}</h4>
                    <h6>Possible cause:</h6>
                    <h4>{{diagnose.possible_cause}}</h4>
                    <h6>Treatment:</h6>
                    <h4>{{diagnose.treatment}}</h4>
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
            },
            async createDiagnosis(e) {
                e.preventDefault()
                const data = {name: this.name, possible_cause: this.possible_cause, treatment: this.treatment}
                await axios.post(`${URL}/diagnosis/new`, data)
                this.diagnoses = [...this.diagnoses, data]
                this.name = ""
                this.possible_cause = ""
                this.treatment = ""    
            },
            navigateItem(id) {
                this.$router.push(`/diagnosis/${id}`)
            }
        }
    }
</script>

<style>
    #diagnoses-list{
        outline-style: groove;
        outline-color: rgba(0, 0, 0, 0.724);
        cursor: pointer;
    }
    #add-diagnosis{
        cursor: pointer;
    }
    #edit-button{
        margin:40px 10px 40px 10px;
        font-size:30px;
        cursor: pointer;
    }
    #delete-button{
        margin:40px 0px 40px 0px;
        padding: 5px 0px 5px 0px;
        font-size: 20px;
        cursor: pointer;
    }
    #list-diagnoses{
        color:black
    }
</style>