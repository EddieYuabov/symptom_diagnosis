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
                <div>

                </div>
            </div>
        </form>
</div>
</template>

<script>
    export default {
        name: 'SymptomComponent',
        data: ()=>({
            symptom: '',
            symptoms: []
        }),
        methods: {
            handleChange(e) {
                this[e.target.name] = e.target.value
            },
            getAllSymptoms(){
                
            }
        }
    }
</script>

<style>
    #input-symptom{
        padding: 5px 15px 5px 15px;
    }
</style>