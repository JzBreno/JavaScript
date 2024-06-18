

document.getElementById('resumo').innerHTML = "Sou um estudante de Ciência da Computação com experiência em estágio de gestão de projetos. Tenho conhecimentos em análise de dados e domínio em Python e suas bibliotecas essenciais, como NumPy, Pandas e Matplotlib. Minha trajetória acadêmica e profissional me capacitou a integrar habilidades técnicas com competências de gestão, permitindo-me abordar desafios complexos de forma sistemática e eficiente. Estou motivado a expandir meu conhecimento em análise de dados e me especializar em visão computacional, com o objetivo de trabalhar como desenvolvedor nessa área e aplicar minhas habilidades em projetos relevantes e inovadores"
document.getElementById('yearsold').innerHTML = 24
document.getElementById('work').innerHTML = 'estudo Ciencias da computação no Instituto Federal do Ceará ou em outro lugar'
document.getElementById('anoenome').innerHTML = '2024 José Breno'
document.getElementById('butaoinsta').innerHTML = 'Instagram'

function salvarvalores(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
    var mensagemErro = document.getElementById("mensagemErro")
    console.log('email: ', email)
    console.log('senha: ', senha)
    mensagemErro.textoConten = ''
    alert('Nome: ' + email + '\nEmail: ' + senha);
    if (!email && !senha){
        mensagemErro.textoContent = 'Por favor preencha os campos correamente'

    } else if (!nome) {
        mensagemErro.textContent = 'Por favor, preencha o campo Nome.';
    } else if (!email) {
        mensagemErro.textContent = 'Por favor, preencha o campo Email.';
    } else {
        // Opcional: Mostrar os valores na página
        alert('Nome: ' + email + '\nEmail: ' + senha);
    }
}
