document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi un gestore di eventi a tutti i link nel menu di navigazione
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link
            var targetId = this.getAttribute('href').substring(1); // Ottieni l'ID della sezione di destinazione
            var targetSection = document.getElementById(targetId); // Ottieni la sezione di destinazione
            scrollToSection(targetSection); // Esegui la funzione di animazione
        });
    });

    // Funzione per animare lo scroll verso la sezione di destinazione
    function scrollToSection(targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
});
