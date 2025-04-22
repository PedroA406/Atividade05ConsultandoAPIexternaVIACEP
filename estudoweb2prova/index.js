const form = document.querySelector("form");
const cepInput = document.querySelector("#cep");
const addressSection = document.querySelector("#address");
form.addEventListener("submit", async (event) => {
// Evitando que a página recarregue ao submeter o formulário (ao pressionar Enter)
event.preventDefault();
// Obtendo o CEP digitado pelo usuário (substituindo um possível '-' por vazio)
const cep = cepInput.value.replace("-", "");
// Se o cep tiver tamanho 8
if (cep.length === 8) {
try {
const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
const data = await response.json();
if (data.erro !== "true") {
addressSection.innerHTML = `
<p>${data.logradouro}, ${data.bairro} - ${data.localidade}, ${data.uf}.</p
`;
} else {
alert(`Erro ao obter dados do endereço para o CEP ${cep}! 🚨 `);
}
} catch (error) {
alert(`Erro ao obter dados do endereço para o CEP ${cep}! 🚨 `);
}
}
});