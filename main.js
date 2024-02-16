const form = document.getElementById('form-deposito');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numA = document.getElementById('num a');
    const numB = document.getElementById('num b');
    const msgSuccess = `O número ${numB.value} é maior que o número ${numA.value}, assim o formulário é válido`;
    const msgError = `O número ${numB.value} é menor ou igual ao número ${numA.value}, assim o fórmulário é inválido`;

    if (numB.value>numA.value) {
        alert(msgSuccess);
    } else {
        alert(msgError);
    }
})