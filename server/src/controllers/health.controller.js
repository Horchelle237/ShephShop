
export const getHealth = (_request, response) => {
  response.json({
    status: 'ok',
    message: 'API StephShop opérationnelle'
  })
}
