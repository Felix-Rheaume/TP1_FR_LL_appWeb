function calculerFibonacci(nombre){
  if(nombre <= 1){
      return nombre;
  }
  return this.calculerFibonacci(nombre - 1) + this.calculerFibonacci(nombre - 2);
}

self.addEventListener('message', (message) =>{
  console.log(message.data)
})