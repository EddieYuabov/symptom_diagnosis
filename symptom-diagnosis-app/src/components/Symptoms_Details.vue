<template>
    <div>
        <h1>{{symptoms.symptom}}</h1>
        <button id="edit-button">&#9998;</button>
        <button id="delete-button" @click="deleteSymptom">&#128465;</button>
    </div>
</template>

<script>
import axios from 'axios'
const URL = 'http://localhost:3001/home'
export default {
        name: 'SymptomsDetails',
        data: () => ({
            symptoms: []
        }),
        mounted: function(){
            this.getSymptom()
        },
        methods: {
            async getSymptom(){
                const response = await axios.get(`${URL}/symptoms/${this.$route.params.symptom_id}`)
                this.symptoms = response.data
            },
            async deleteSymptom(e){
                e.preventDefault()
                await axios.delete(`${URL}/symptoms/${this.$route.params.symptom_id}`)
                this.$router.push(`/symptoms`)
            }
        }
}
</script>

<style>

</style>