const cart = require('./productQTD');
describe('cart Tool', () => {
  const products = [
    {
      id: 1,
      preco: 10.0,
      qtd: 2
    },
    {
      id: 2,
      preco: 10.0,
      qtd: 2
    },
    {
      id: 3,
      preco: 10.0,
      qtd: 2
    },
    {
      id: 4,
      preco: 10.0,
      qtd: 0
    }
  ]
  it('filtering greater than zero', () => {
    expect(cart.gtZero(products)).toEqual(
      [
        {
          id: 1,
          preco: 10.0,
          qtd: 2
        },
        {
          id: 2,
          preco: 10.0,
          qtd: 2
        },
        {
          id: 3,
          preco: 10.0,
          qtd: 2
        }
      ]
    
  )
  });
  
   xit('calculating subtotal', () => {
    expect(cart.subTotal(products)).toEqual(
      [
        {
          id: 1,
          subtotal: 20.0
        },
        {
          id: 2,
          subtotal: 20.0
        },
        {
          id: 3,
          subtotal: 20.0
        },
        {
          id: 4,
          subtotal: 0.0
        }
      ]
    
  )
  });
  
  xit('calculating total', () => {
    expect(cart.total(products)).toBe(60.0)
  });
  
  
  
});
