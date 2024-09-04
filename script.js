// Adiciona funcionalidade ao botão "Comprar Ingresso"
document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-ticket');
    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('Você será redirecionado para a página de pagamento.');
            // Redirecionar para a página de pagamento ou iniciar o processo de compra
            // window.location.href = 'payment.html';
        });
    }
});
