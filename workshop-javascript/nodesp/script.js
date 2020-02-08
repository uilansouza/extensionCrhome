const personalValues ={
    email:"uilan.souza@gmail.com",
    name: "Uilan",
    contact:'11989578',
    links:"https://uol.com.br",
    bio:"O melhor site que existe"
}

const $$ = element =>document.querySelectorAll(element)
const fields = $$('[aria-label]')

for(const element of fields){ // varre dentro do elemento
    const value = element.getAttribute('aria-label')
    if(/(e-mail|email)/.test(value)){
        element.value = personalValues.email
    }

    if(/(nome)/.test(value)){
        element.value = personalValues.name
    }

    if(/(contato)/i.test(value)){
        element.value = personalValues.contact
    }
    
    if(/biografia/i.test(value)){
        element.value = personalValues.bio
    }
    if(/(github|linkedin|blog)/i.test(value)){
        element.value = personalValues.links
    }
 }