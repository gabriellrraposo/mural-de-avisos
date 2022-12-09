module.exports = {
    posts: [
        {
            id: 0,
            title: "teste",
            description: "descrição teste"
        } 
    ],

    //Retorna todos os avisos
    getAll() {
        return this.posts
    },

    //Cria um novo aviso
    newPost(title, description) {
        this.posts.push({id: generateId(), title, description})
    },
}

//Gera um id aleatório
let generateId = () => {
    return Math.random().toString(36).substring(2, 9) //Determina o primeiro e o último índice
} //O 36 no toString significa que está na base 36 (possui todos os números e letras)