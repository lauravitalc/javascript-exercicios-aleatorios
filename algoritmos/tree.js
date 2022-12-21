let arvore = {
    left:{
        left: undefined,
        right: {
            value:3
        },
        value: 2
    },
    right: undefined,
    value: 10
}

// Vem primeiro
function preOrder(tree){
    console.log(tree.value)
    tree.left && preOrder(tree.left) // Se tiver algo no tree.left, vai pro lado esquerdo
    tree.right && preOrder(tree.right) // Se tiver algo no tree.right, vai pro lado direito
}
function inOrder(tree){
    tree.left && inOrder(tree.left) // Vai para esquerda primeiro
    console.log(tree.value)
    tree.right && inOrder(tree.right) // Vai pra direita
}
function posOrder(tree){
    tree.left && posOrder(tree.left) 
    tree.right && posOrder(tree.right) 
    console.log(tree.value)
}

console.log('preOrder')
preOrder(arvore)

console.log('inOrder')
inOrder(arvore)

console.log('posOrder')
posOrder(arvore)