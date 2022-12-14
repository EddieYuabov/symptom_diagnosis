<template>
    <div>
        <div>
        <h1>{{diagnoses.name}}</h1>
        <h3>{{diagnoses.possible_cause}}</h3>
        <h4>{{diagnoses.treatment}}</h4>
        </div>

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

</style>
