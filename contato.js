         function enviarWhatsApp(event) {
            event.preventDefault();

            const nome = encodeURIComponent(document.getElementById('nome').value.trim());
            const contato = encodeURIComponent(document.getElementById('contato').value.trim());
            const mensagem = encodeURIComponent(document.getElementById('mensagem').value.trim());

            const texto = `Olá! Meu nome é *${nome}*%0AContato: ${contato}%0A%0A${mensagem}%0A%0A(Enviado pelo site Novembro Azul)`;
            const numeroWhatsApp = "5511999999999";

            const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

            window.open(url, '_blank');
        }