

function cambiar(){
    let seleccionado =document.getElementById('ordenar').value

if(seleccionado == "menor"){
   document.querySelector('.menor').classList.add('show') 
   document.querySelector('.menor').classList.remove('hidden')

   document.querySelector('.mayor').classList.add('hidden')
   document.querySelector('.mayor').classList.remove('show')

} else{
    document.querySelector('.menor').classList.add('hidden') 
    document.querySelector('.menor').classList.remove('show') 

   document.querySelector('.mayor').classList.add('show')
   document.querySelector('.mayor').classList.remove('hidden')

}
 
}

document.querySelector('.filter-button').addEventListener('click', () => {
   let links= document.querySelector('.links-filter');
   links.classList.toggle('block')
 
})



