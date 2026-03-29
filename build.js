const fs = require('fs');

const pages = [
  { name: 'index.html', title: 'Łukasz Bagnowski - Usługi Hydrauliczne Łowicz', heading: 'Profesjonalna Hydraulika i Pompy Ciepła w Łowiczu', desc: 'Rozprowadzanie wody, kanalizacja, montaż pomp ciepła. Solidnie i terminowo.' },
  { name: 'uslugi.html', title: 'Usługi - Łukasz Bagnowski', heading: 'Nasze Usługi', desc: 'Kompleksowe instalacje sanitarne, wodne, grzewcze.' },
  { name: 'recenzje.html', title: 'Recenzje - Łukasz Bagnowski', heading: 'Opinie Klientów', desc: 'Zobacz, co mówią o nas klienci z Łowicza i okolic.' },
  { name: 'kontakt.html', title: 'Kontakt - Łukasz Bagnowski', heading: 'Skontaktuj się z nami', desc: 'Zadzwoń bezpośrednio: 889 987 681.' },
  { name: 'faq.html', title: 'FAQ - Łukasz Bagnowski', heading: 'Często Zadawane Pytania', desc: 'Odpowiedzi na najczęstsze pytania dotyczące instalacji.' },
  { name: 'realizacje.html', title: 'Realizacje - Łukasz Bagnowski', heading: 'Nasze Realizacje', desc: 'Galeria wykonanych instalacji i montaży.' }
];

const template = (p) => `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${p.desc}">
    <title>${p.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-800 font-sans antialiased min-h-screen flex flex-col">
    <nav class="w-full bg-white shadow-sm p-6 flex justify-between items-center">
        <div class="text-xl font-bold tracking-tight">Łukasz Bagnowski</div>
        <div class="space-x-4">
            <a href="index.html" class="hover:text-blue-600">Główna</a>
            <a href="uslugi.html" class="hover:text-blue-600">Usługi</a>
            <a href="realizacje.html" class="hover:text-blue-600">Realizacje</a>
            <a href="recenzje.html" class="hover:text-blue-600">Recenzje</a>
            <a href="faq.html" class="hover:text-blue-600">FAQ</a>
            <a href="kontakt.html" class="hover:text-blue-600">Kontakt</a>
        </div>
    </nav>
    <main class="flex-grow max-w-5xl mx-auto w-full p-8 md:p-16">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">${p.heading}</h1>
        ${p.name === 'index.html' ? `
            <p class="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                Minimalizm, precyzja, wieloletnie doświadczenie. Specjalizujemy się w rozprowadzaniu wody (ciepła/zimna), kanalizacji oraz montażu nowoczesnych pomp ciepła. Działamy na terenie Łowicza i okolic.
            </p>
            <a href="tel:889987681" class="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
                Zadzwoń teraz: 889 987 681
            </a>
            <div class="mt-20">
                <h2 class="text-2xl font-bold mb-4">Dlaczego my?</h2>
                <p class="text-gray-600 leading-relaxed mb-4">Tworzymy instalacje, które przetrwają lata. Zastosowanie najlepszych materiałów, terminowość i czystość pracy to nasze priorytety.</p>
            </div>
        ` : ''}
        ${p.name === 'faq.html' ? `
            <div class="space-y-6 mt-8">
                <div><h3 class="font-bold text-lg">Ile trwa montaż pompy ciepła?</h3><p class="text-gray-600">Zazwyczaj od 2 do 5 dni roboczych, w zależności od specyfiki budynku.</p></div>
                <div><h3 class="font-bold text-lg">Czy działacie poza Łowiczem?</h3><p class="text-gray-600">Skupiamy się na Łowiczu i najbliższej okolicy do 30 km.</p></div>
                <div><h3 class="font-bold text-lg">Jakie rury stosujecie do wody?</h3><p class="text-gray-600">Pracujemy na atestowanych systemach PEX oraz miedzi, dostosowując się do budżetu i wymogów technicznych.</p></div>
            </div>
        ` : ''}
    </main>
    <footer class="w-full border-t p-8 text-center text-gray-500 flex flex-col items-center">
        <p>&copy; 2026 Łukasz Bagnowski - Usługi Hydrauliczne. Łowicz.</p>
        <div class="flex space-x-6 mt-4">
            <a href="#" class="hover:text-black">Facebook</a>
            <a href="#" class="hover:text-black">Instagram</a>
        </div>
    </footer>
</body>
</html>`;

pages.forEach(p => fs.writeFileSync('lukasz-bagnowski/' + p.name, template(p)));
