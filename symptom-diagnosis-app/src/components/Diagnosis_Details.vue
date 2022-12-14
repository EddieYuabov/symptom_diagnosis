<template>
    <div>
        <div>
        <h1>{{diagnoses.name}}</h1>
        <h3>{{diagnoses.possible_cause}}</h3>
        <h4>{{diagnoses.treatment}}</h4>
        </div>
        <button id="edit-button">&#9998;</button>
        <button id="delete-button" @click="deleteSymptom(symptom.id)">&#128465;</button>
    </div>
</template>

<script>
import axios from 'axios'
const URL = 'http://localhost:3001/home'
export default {
        name: 'DiagnosisDetails',
        data: () => ({
            diagnoses: []
        }),
        mounted: function(){
            this.getDiagnosis()
        },
        methods: {
            async getDiagnosis(){
                const response = await axios.get(`${URL}/diagnosis/${this.$route.params.diagnosis_id}`)
                this.diagnoses = response.data
                console.log(this.diagnoses)
            }
        }
}
</script>

<style>
    #edit-button{
        margin:40px 10px 40px 10px;
        padding:10px 15px 10px 15px;
        font-size:30px;
        cursor: pointer;
    }
    #delete-button{
        padding:16px 15px 10px 15px;
        font-size: 20px;
        cursor: pointer;
    }
</style>
