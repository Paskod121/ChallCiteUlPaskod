document.addEventListener('DOMContentLoaded', () => {
    // Effets de survol et interactions des boutons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.opacity = '0.9';
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', () => {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        });
    });

    // Gestion de la connexion
    const connectBtn = document.querySelector('.connect-btn');
    const loginOptions = document.getElementById('login-options');
    const loginSubmitBtn = loginOptions.querySelector('.login-submit');
    const loginResetBtns = loginOptions.querySelectorAll('.login-reset');

    // Affichage/masquage des options de connexion
    connectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        loginOptions.classList.toggle('show');
    });

    // Fermeture des options de connexion en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!loginOptions.contains(e.target) && !connectBtn.contains(e.target)) {
            loginOptions.classList.remove('show');
        }
    });

    // Gestion de la soumission du formulaire de connexion
    loginSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const identifiant = loginOptions.querySelector('input[type="text"]').value;
        const motDePasse = loginOptions.querySelector('input[type="password"]').value;

        // Validation simple (à remplacer par une validation côté serveur)
        if (identifiant.trim() === '' || motDePasse.trim() === '') {
            alert('Veuillez saisir un identifiant et un mot de passe');
            return;
        }

        // Simulation d'une connexion (à remplacer par une vraie logique de connexion)
        console.log('Tentative de connexion', { identifiant, motDePasse });
        alert('Connexion en cours de développement');
    });

    // Gestion des boutons de réinitialisation
    loginResetBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = btn.textContent.includes('Identifiant') ? 'identifiant' : 'mot de passe';
            alert(`Réinitialisation du ${type} - Fonctionnalité en développement`);
        });
    });

    // Gestion de la sidebar
    const homeButton = document.querySelector('button.home');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const closeSidebarBtn = document.querySelector('.close-sidebar');

    // Ouverture de la sidebar
    homeButton.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    });

    // Fermeture de la sidebar par le bouton de fermeture
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });

    // Fermeture de la sidebar en cliquant sur l'overlay
    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });

    // Gestion des éléments de menu de la sidebar
    const sidebarMenuItems = document.querySelectorAll('.menu-item');
    sidebarMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Retirer la classe active de tous les éléments
            sidebarMenuItems.forEach(mi => mi.classList.remove('active'));
            
            // Ajouter la classe active à l'élément cliqué
            item.classList.add('active');
        });
    });

    // Mise à jour dynamique des dates (exemple)
    function updateDates() {
        const currentYear = new Date().getFullYear();
        const academicYearSpan = document.querySelector('.announcement .highlight b');
        if (academicYearSpan) {
            academicYearSpan.textContent = `${currentYear} - ${currentYear + 1}`;
        }
    }
    updateDates();
});