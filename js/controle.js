let contador = 0;

let input = document.getElementById("tarefa");
let adicionar = document.getElementById("add");
let main = document.getElementById("areaLista");

function addTarefa(){
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        ++contador;
        // contador vai adicionando id em numeros cada vem q aperta em adicionar +1
        let novoItem = `<div class="item" id ="${contador}">
        <div class="item-icone" onclick="marcarTarefa(${contador})">
            <i class="material-symbols-outlined" id="icone_${contador}">
                circle
            </i>
        </div>
        <div class="item-nome" onclick="marcarTarefa(${contador})">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})"><i class="material-symbols-outlined">
                delete
            </i> deletar</button>
        </div>
    </div>`
    
    main.innerHTML += novoItem
    input.value= ""
    input.focus();
    }
}
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class')
    if(classe == "item"){
        item.classList.add('clicado')

        var icone = document.getElementById('icone_'+id);
        icone.innerText = "check_circle";
        item.parentNode.appendChild(item);
        
    }
    else{
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_'+id);
        icone.innerText = "circle"

    }
}


// fazendo a tecla entrer funcionar
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        // vai impedir o entrer de fazer outras coisas alem do que foi pedido
        event.preventDefault();
        // para o quando clicar no entre como tivesse clicando no botão
        adicionar.click();
    }
})