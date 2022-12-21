<template>
    <div>
        <h1>Track Your Symptoms and Diagnoses</h1>
        <h4>Please fill out the form to continue</h4>
        <form>
            <div>
                <label class="label">Name:</label>
                <input @input="handleChange" :value="name" name="name"/>
                <br/>
            </div>
            <div>
                <label class="label">Age:</label>
                <input id="name-input" @input="handleChange" :value="age" name="age"/>
                <br/>
            </div>
            <div>
                <label class="label">Gender:</label>
                <button id="male-button" @click="handleMaleChange">Male</button>
                <button id="female-button" @click="handleFemaleChange">Female</button>
                <br/>
            </div>
            <button class="next-button" @click="$router.push('/symptoms')">Next</button>
            <br/>
        </form>
        <br/>
    </div>
</template>

<script>
    export default {
        name: 'InputComponent',
        data: ()=>({
            name: '',
            age: '',
            gender: ''
        }),
        methods: {
            handleChange(e) {
                this[e.target.name] = e.target.value
            },
            handleMaleChange(e){
                e.preventDefault()
                this.gender = "Male"
            },
            handleFemaleChange(e){
                e.preventDefault()
                this.gender = "Female"
            }
        }
    }
</script>

<style>
    h1 {
        color: #80cbc4;
        -webkit-text-stroke: .3px rgb(0, 0, 0);
        font-size: 50px;
    }
    .label{
        color:black;
        font-size: 23px;
        padding-right:10px;
    }
    .next-button{
        margin-top: 50px;
        padding: 3px 15px 3px 15px;
        background-color:rgb(231, 231, 231);
        font-size:23px;
        cursor: pointer;
    }
    #name-input{
        margin-left: 19px;
    }
    #male-button{
        font-size: 20px;
        cursor: pointer;
        padding: 0px 10px 0px 10px;
        margin-right: 10px;
    }
    #male-button:focus{
        background-color: rgb(181, 181, 181);
        padding: 5px 15px 5px 15px
    }
    #female-button{
        font-size: 20px;
        cursor: pointer;
        padding: 0px 10px 0px 10px;
    }
    #female-button:focus{
        background-color: rgb(181, 181, 181);
        padding: 5px 15px 5px 15px
    }
</style>