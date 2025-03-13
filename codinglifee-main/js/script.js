document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Atualiza a URL sem recarregar a página
            history.pushState(null, null, targetId);
        });
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('scrollSobreNos').addEventListener('click', function() {
//         document.getElementById('sobrenos').scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('verMaisBtn').addEventListener('click', function() {
        var extraText = document.querySelector('.extra-text');
        var ellipsis = document.getElementById('ellipsis');
        
        if (extraText.style.display === 'none' || extraText.style.display === '') {
            extraText.style.display = 'inline';
            ellipsis.style.display = 'none'; // Esconde o "..."
            this.style.display = 'none'; // Esconde o botão
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var mybutton = document.getElementById("backToTopBtn");

    // Quando o usuário rola para baixo 20px da parte superior do documento, mostre o botão
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Quando o usuário clica no botão, rola para a seção #home
    mybutton.addEventListener('click', function() {
        document.getElementById('home').scrollIntoView({behavior: 'smooth'});
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menuIcon');
    var closeBtn = document.getElementById('closeBtn');
    var mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    var mobileMenuLinks = document.querySelectorAll('.mobile-menu li a');

    // Abrir o menu mobile
    menuIcon.addEventListener('click', function() {
        mobileMenuOverlay.style.width = '100%';
    });

    // Fechar o menu mobile
    closeBtn.addEventListener('click', function() {
        mobileMenuOverlay.style.width = '0%';
    });

    // Fechar o menu mobile ao clicar em um link
    mobileMenuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenuOverlay.style.width = '0%';
        });
    });
});