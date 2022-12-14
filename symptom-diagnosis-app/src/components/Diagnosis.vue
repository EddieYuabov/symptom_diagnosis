<template>
<div>
    <h1>Diagnoses</h1>
    <form>
        <div>
            <input/>
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
    export default {
        name: 'DiagnosisComponent',
        data:()=> ({
            diagnosis: '',
            diagnoses: []
        }),
        mounted: function(){

        },
        methods:{
            
        }
    }
</script>

<style>

</style>