class ValidaFormulario {
  constructor() {
    //pegar formulario
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }
  eventos() {
    //Adicionar evento de submit
    this.formulario.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    //Não deixar o formulário ser enviado
    e.preventDefault();
    // console.log('Formulário não enviado...');
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert('Formulário enviado');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;
    //Pegar valor das senhas do formlulário
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');
    //Ver se senhas são iguais
    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campo senha e repetir senha precisão ser iguais.');
      this.criaErro(
        repetirSenha,
        'Campo senha e repetir senha precisão ser iguais.'
      );
    }
    //Ver se senhas tem quantidade certa de caracteres
    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
    }
    return valid;
  }

  camposSaoValidos() {
    let valid = true;
    for (let erroText of this.formulario.querySelectorAll('.error-text')) {
      erroText.remove();
    }
    //pegar todos os campos com a classe validar
    for (let campo of this.formulario.querySelectorAll('.validar')) {
      //Pegar o innerText do elemento anterior ao elemento campo
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode está em branco`);
        valid = false;
      }

      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }
  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;
    //Ver quantidade de caracteres do usuário
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
      valid = false;
    }
    //Ver se usuário tem letra e números
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        'Nome de usuário precisa conter letras e/ou números.'
      );
      valid = false;
    }
    return valid;
  }
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }
    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    //Inserir elemento criado "depois" do campo
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();
