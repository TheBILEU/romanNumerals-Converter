//Foi criado uma váriavel chamada de "numerosENumerais" para representar os números e suas respectivos simbolos romanos

let numerosENumerais = [
//Usei da estrutura da em array para ornagizar
    // Abaixo utilizei de todas as combinações necessárias para que a conversão funcione
    {numero: 1000, romano: 'M'}, //0
    {numero: 900, romano: 'CM'}, //1
    {numero: 500, romano: 'D'}, //2
    {numero: 400, romano: 'CD'}, //3
    {numero: 100, romano: 'C'}, //4
    {numero: 90, romano: 'XC'}, //5
    {numero: 50, romano: 'L'}, //6
    {numero: 40, romano: 'XL'}, //7
    {numero: 10, romano: 'X'}, //8
    {numero: 9, romano: 'IX'}, //9
    {numero: 5, romano: 'V'}, //10
    {numero: 4, romano: 'IV'}, //11
    {numero: 1, romano: 'I'} //12
];


function conversao(numeroArabico){

    // Criei uma função para que quando eu for passar um número ele converta pro Romano
        //Foram criadas duas váriaveis, uma chamada de 'letraRomana', sendo de uma string vazia e a outra de 'numero' que recebe os números inteiros (Arábicos)
    let letraRomana = '';
    let numero = numeroArabico;


    //Eu criei um loop para que a função possa procurar o padrão nas combinações do meu array e descobrir o número e seu representativo em romano
    for (let i = 0; i < numerosENumerais.length; i++){
        //Criei uma condição para complementar o loop com o [i] que seria o conteúdo do array
        if (numerosENumerais[i].numero <= numero){
                //A varíavel 'numero' ira pegar o valor atual e subtrair pelo [i] numero do array correspondente
            numero = numero - numerosENumerais[i].numero;
                //A varíavel 'letraRomana' nesse momento é apenas uma string vazia e estarei somando ela com o conteúdo [i] que seria os algarismos romanos, como observado no array no topo
            letraRomana = letraRomana + numerosENumerais[i].romano

            //Existia um problema de ele dar um valor errado ou aproximado do que eu queria, e colocando 'i--' ele resolveu 
            i--;
        }
    }
    //Desta parte em diante eu utilizo do comando 'getElementById' para fazer com que ele pegue as id dos 'inputs' e do 'button'. Pegando o valor que eu digitei no 'input' ele o atribui para si, e clicando no 'button' (através do comando 'addEventListener ('click')') ele realiza a conversão de arábico para romano
    document.getElementById('inputRomano').value = letraRomana;
}

document.getElementById('converter').addEventListener('click', function(){
    let numero = document.getElementById('inputNumero').value;

    conversao(numero);
});

