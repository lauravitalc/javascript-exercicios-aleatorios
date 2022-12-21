const arvore = {}

// Inserção na arvore
function insert(tree, value){
    // Verificar se arvore já tem valores
    if(tree.value){
        if(value > tree.value){
            insert(tree.right, value)
        } else {
            insert(tree.left, value)
        }
    } else {
        tree.value = value
        tree.right = {}
        tree.left = {}
    }
}

insert(arvore, 10)
//console.log(arvore)

insert(arvore, 11)
//console.log(arvore)

insert(arvore, 8)
//console.log(arvore)

insert(arvore, 4)
//console.log(arvore)

// -----------------------------------

function search(tree, value){
    // Se minha árvore não tem um valor, ou o valor dele é o mesmo que eu quero passar, me retorne o valor da arvore, seja ele undefined, ou não.
    if(!tree.value || tree.value === value){
        return tree.value
    }
    // Se o valor é menor, só pode estar do lado esquerdo.
    if(value < tree.value){
        return search(tree.left,value)
    }
    return search(tree.right,value)
}

console.log(search(arvore, 10))
console.log(search(arvore, 14))
console.log(search(arvore, 8))

// o(log n)
