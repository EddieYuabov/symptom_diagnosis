<template>
    <div>
        <h1>Edit "{{symptoms.symptom}}""</h1>
    </div>
    <div>
        <form>
            <div>
                <input @input="handleChange" :value="newSymptom" name="newSymptom"/>
                <br/>
                <br/>
                <button>
                    <h3>Edit Symptom</h3>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
const URL = 'http://localhost:3001/home'
export default {
    name: 'EditSymptom',
    data: () => ({
            newSymptom : '',
            symptoms: []
        }),
        mounted: function(){
            this.getSymptom()
        },
        methods: {
            handleChange(e) {
                this[e.target.name] = e.target.value
            },
            async getSymptom(){
                const response = await axios.get(`${URL}/symptoms/${this.$route.params.symptom_id}`)
                this.symptoms = response.data
                console.log(this.symptoms)
            },
        }
}
</script>

<style>

</style>