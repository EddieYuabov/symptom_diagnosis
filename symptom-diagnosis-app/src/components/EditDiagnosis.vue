<template>
    <div>
        <h1>Edit {{diagnosis.name}} diagnosis</h1>
    </div>
    <div>
        <form>
            <label>Name: </label>
            <input @input="handleChange" :value="newName" name="newName"/>
            <br/>
            <br/>
            <label>Possible cause: </label>
            <input @input="handleChange" :value="newPossibleCause" name="newPossibleCause"/>
            <br/>
            <br/>
            <label>Treatment: </label>
            <input @input="handleChange" :value="newTreatment" name="newTreatment"/>
            <br/>
            <br/>
            <button @click="editDiagnosis">
                Edit Diagnosis
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
const URL = 'http://localhost:3001/home'
export default {
    name: "EditDiagnosis",
    data: () => ({
            newName: '',
            newPossibleCause: '',
            newTreatment: '',
            diagnosis: []
        }),
        mounted: function(){
            this.getDiagnosis()
        },
        methods: {
            handleChange(e) {
                this[e.target.name] = e.target.value
            },
            async getDiagnosis(){
                const response = await axios.get(`${URL}/diagnosis/${this.$route.params.diagnosis_id}`)
                this.diagnosis = response.data
                console.log(this.diagnosis)
            },
            async editDiagnosis(e){
                e.preventDefault()
                const data = {name: this.newName, possible_cause: this.newPossibleCause, treatment: this.newTreatment}
                await axios.put(`${URL}/diagnosis/${this.$route.params.diagnosis_id}`, data)
                this.$router.push(`/diagnoses`)
            }
        }
}
</script>

<style>

</style>