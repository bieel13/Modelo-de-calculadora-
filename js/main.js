function Calculadora() {
  this.display = document.querySelector(".display");
  this.inicia = () => {
    this.clicaBotoes();
  };
  this.clicaBotoes = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;
      if (element.classList.contains("btn-num")) this.addNum(element);
      if (element.classList.contains("btn-clear")) this.limpaNum();
      if (element.classList.contains("btn-dell")) this.deletaNum();
      if (element.classList.contains("btn-eq")) this.realizaConta();
    });
  };
  this.addNum = (element) => {
    this.display.value += element.innerText;
  };
  this.limpaNum = () => {
    this.display.value = "";
  };
  this.deletaNum = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Conta Invalida");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alerta("Conta Invalida");
      return;
    }
  };
}
const calculadora = new Calculadora();
calculadora.inicia();
