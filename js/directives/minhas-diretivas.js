//as diretivas devem ter um escopo isolado para nao interferir no contexto da view
//para aplicar o ppio da reutilizacao
//ela deve trabalhar isoladamente, receber o dado que precisa e fazer o seu trabalho
angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
    //se usa camelCase p o nome da directive mas na marcacao
    //HTML se usa meu-painel

    var ddo = {};
    
    //restringir a forma de uso da diretiva
    //A attribute
    //E element
    //Comentario
    ddo.restrict = 'AE';
    ddo.transclude = true;

    //o atributo titulo no html é a interfaz de comunicacao com o escopo privado da diretiva
    //qdo o atributo tem o mesmo nome que a propriedad do escopo privado posso colocar so o @
    //  <meu-painel titulo="@{{foto.titulo}}">
    //    </meu-painel>
    
   //a AE processa o valor e passa como String p o escopo da diretiva
    ddo.scope = {
        
        //titulo = "@titulo"
        //estou copiando o valor como string do atributo titulo
        //porem qdo o nome do atributo na marcacao é igual ao da propriedade no escopo
        //posso deixar so o @
        titulo : '@'
    };

    ddo.templateUrl = "js/directives/meu-painel.html";

    //Directive Definition Object, é a diretiva configurada
    return ddo;
});


   






