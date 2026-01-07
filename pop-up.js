document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONFIGURAÇÕES ---
    const modalID = 'promoModal';
    const closeBtnID = 'btnClose';
    const actionBtnID = 'btnAction';
    
    // Nome da chave
    const campanhaKey = 'popup_visita_diaria'; 
    
    // Tempo em milissegundos para mostrar de novo (24 horas)
    // Se quiser testar rápido, troque 24 * ... por 1000 * 60 (1 minuto)
    const tempoExpiracao = 24 * 60 * 60 * 1000; 

    // --- SELETORES ---
    const modal = document.getElementById(modalID);
    const closeBtn = document.getElementById(closeBtnID);
    const actionBtn = document.getElementById(actionBtnID);

    // --- FUNÇÕES ---

    const fecharModal = () => {
        if (!modal) return;
        modal.classList.remove('show');
        setTimeout(() => { modal.style.display = 'none'; }, 400);

        // Grava A HORA ATUAL (Timestamp) que fechou
        const agora = new Date().getTime();
        localStorage.setItem(campanhaKey, agora.toString());
    };

    const abrirModal = () => {
        if (!modal) return;
        modal.style.display = 'flex';
        setTimeout(() => { modal.classList.add('show'); }, 100);
    };

    // --- LÓGICA INTELIGENTE (VERIFICA O TEMPO) ---
    
    const ultimaVezVisto = localStorage.getItem(campanhaKey);
    const agora = new Date().getTime();

    // Se nunca viu OU (Se agora - ultima vez > 24h)
    if (!ultimaVezVisto || (agora - parseInt(ultimaVezVisto)) > tempoExpiracao) {
        setTimeout(abrirModal, 1);
    }

    // --- EVENTOS ---
    if (closeBtn) closeBtn.addEventListener('click', fecharModal);
    if (actionBtn) actionBtn.addEventListener('click', fecharModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) fecharModal();
    });
});