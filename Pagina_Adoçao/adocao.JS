document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.adopt').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const breed = card?.querySelector('.breed')?.textContent?.trim() || 'este animal';
        alert(`Obrigado! Você escolheu adotar: ${breed}`);
      });
    });
  });