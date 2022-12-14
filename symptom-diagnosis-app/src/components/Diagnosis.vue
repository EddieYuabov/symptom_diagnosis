<template>
<div>
    <h1>Diagnoses</h1>
    <form>
        <div>
            <input @input="handleChange" :value="diagnosis" name="diagnosis"/>
            <br/>
            <br/>
            <button>
                <h3>Add Diagnosis</h3>
            </button>
            <h1>List of Diagnoses:</h1>
            <div>

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
            diagnosis: '',
            diagnoses: []
        }),
        mounted: function(){

        },
        methods:{
            handleChange(e) {
                this[e.target.name] = e.target.value
            },
            async getAllDiagnoses (){
                const response = await axios.get(`${URL}/diagnosis`)
                this.diagnoses = response.data
            }
        }
    }
</script>

<style>

</style>