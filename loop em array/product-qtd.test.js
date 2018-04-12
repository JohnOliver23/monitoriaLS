const cart = require('./product');
describe('cart Tool', () => {
  const produtos = [
    {
      nome: 'Bicicleta',
      preco: 1200.0
    },
    {
      nome: 'Capacete',
      preco: 450.0
    }
  ]
  it('counting total cart to be 1650', () => {
    expect(cart.total(produtos)).toBe(1650.0);
  });
  
  it('filtering products with a price greater than 1000', () => {
    expect(cart.gtThousand(produtos)).toEqual(['Bicicleta']);
  });
  
  
});
