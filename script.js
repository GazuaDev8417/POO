const form = document.querySelector('#form')
const yourName = document.querySelector('#yourName')
const age = document.querySelector('#age')
const job = document.querySelector('#job')




class Person{
    constructor(name, age, job, study){
        this.name = name
        this.age = age
        this.job = job
        this.study = study
    }

    toStudy(){
        window.open(`https://www.google.com/search?q=${this.study}&sourceid=chrome&ie=UTF-8`, '_blank')
    }

    searchForJob(){
        window.open(`https://www.google.com/search?q=${this.job}&sourceid=chrome&ie=UTF-8`, '_blank')
    }
}




form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const person = {
        name: yourName.value,
        age: age.value,
        job: job.value,
        study: study.value
    }

    localStorage.setItem('person', JSON.stringify(person))
    location.reload()
})


const person = JSON.parse(localStorage.getItem('person'))
let fran

if(person){
    fran = new Person(person.name, person.age, person.job, person.study)

    displayPerson(fran)    
}

function displayPerson(person){
    document.getElementById('personDiv').innerHTML = `
        <h2>Informações do indivíduo</h2>
        <p><strong>Nome:</strong> ${person.name}</p>
        <p><strong>Idade:</strong> ${person.age}</p>
        <p><strong>Profissão:</strong> ${person.job}</p>
        <p><strong>Estuda:</strong> ${person.study}</p>
        <div>
            <button id="searchBtn">Pesquisar</button>
            <button id="jobBtn">Trabalho</button>
        </div>
    `
    document.getElementById('searchBtn').addEventListener('click', ()=>{
        person.toStudy()
    })

    document.getElementById('jobBtn').addEventListener('click', ()=>{
        person.searchForJob()
    })
}



