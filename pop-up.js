document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONFIGURAÇÕES ---
    const modalID = 'promoModal';
    const closeBtnID = 'btnClose';
    const actionBtnID = 'btnAction';
    
    // Nome da chave para controle de exibição
    const campanhaKey = 'popup_visita_diaria'; 
    
    // Tempo para mostrar de novo: 1 hora
    const tempoExpiracao = 1 * 60 * 60 * 1000; 

    // --- SELETORES ---
    const modal = document.getElementById(modalID);
    const closeBtn = document.getElementById(closeBtnID);
    const actionBtn = document.getElementById(actionBtnID);

    // --- FUNÇÕES ---

    const fecharModal = () => {
        if (!modal) return;
        modal.classList.remove('show');
        setTimeout(() => { 
            modal.style.display = 'none'; 
        }, 400);

        const agora = new Date().getTime();
        localStorage.setItem(campanhaKey, agora.toString());
    };

    const abrirModal = () => {
        if (!modal) return;
        modal.style.display = 'flex';
        setTimeout(() => { 
            modal.classList.add('show'); 
        }, 100);
    };

    // --- LÓGICA DE EXIBIÇÃO ---
    
    const ultimaVezVisto = localStorage.getItem(campanhaKey);
    const agora = new Date().getTime();

    // Se nunca viu OU se já passou o tempo de expiração (1h)
    if (!ultimaVezVisto || (agora - parseInt(ultimaVezVisto)) > tempoExpiracao) {
        setTimeout(abrirModal, 1000); 
    }

    // --- EVENTOS ---
    if (closeBtn) closeBtn.addEventListener('click', fecharModal);
    if (actionBtn) actionBtn.addEventListener('click', fecharModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) fecharModal();
    });
});