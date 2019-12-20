var gTerra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;

var peso = prompt("Digite o Peso (Newton) do objeto na Terra");

var planeta = prompt("De qual planeta deseja saber o Peso: Marte ou Júpiter)?"); 

var pesofinal;

if(planeta == "marte"){
pesofinal = (peso / gTerra) * gMarte;

document.write("O peso deste objeto em Marte é: " + pesofinal);

/* Respostas devem alcançar variações de digitação, como início com caixa alta e baixa */

} else if(planeta == "Marte"){
    pesofinal = (peso / gTerra) * gMarte;
    
    document.write("O peso deste objeto em Marte é: " + pesofinal);

}else if(planeta == "júpiter") {
pesofinal = (peso/ gTerra) * gJupiter;

document.write("O peso deste objeto em Júpiter é: " + pesofinal);

/* Respostas do usuário que possuem acento sempre devem incluir opção de reposta sem acento! Redução de frustração do usuário! */

}else if(planeta == "jupiter") {
    pesofinal = (peso / gTerra) * gJupiter;
    
    document.write("O peso deste objeto em Júpiter é: " + pesofinal);

}else if(planeta == "Júpiter") {
    pesofinal = (peso/ gTerra) * gJupiter;
    
    document.write("O peso deste objeto em Júpiter é: " + pesofinal);
    
    /* Respostas do usuário que possuem acento sempre devem incluir opção de reposta sem acento! Redução de frustração do usuário! */
    
    }else if(planeta == "Jupiter") {
        pesofinal = (peso / gTerra) * gJupiter;
        
        document.write("O peso deste objeto em Júpiter é: " + pesofinal);

} else{
    document.write("Não posso calcular o peso neste planeta");

}