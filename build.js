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
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Roboto', sans-serif; }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 antialiased min-h-screen flex flex-col">
    <nav class="w-full bg-white shadow-md p-4 flex flex-wrap justify-between items-center sticky top-0 z-50">
        <div class="text-2xl font-black text-blue-700 tracking-tight w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">Łukasz Bagnowski</div>
        <div class="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-sm sm:text-base font-medium">
            <a href="index.html" class="hover:text-blue-600 px-2 py-1">Główna</a>
            <a href="uslugi.html" class="hover:text-blue-600 px-2 py-1">Usługi</a>
            <a href="realizacje.html" class="hover:text-blue-600 px-2 py-1">Realizacje</a>
            <a href="recenzje.html" class="hover:text-blue-600 px-2 py-1">Recenzje</a>
            <a href="faq.html" class="hover:text-blue-600 px-2 py-1">FAQ</a>
            <a href="kontakt.html" class="hover:text-blue-600 px-2 py-1">Kontakt</a>
        </div>
    </nav>
    <main class="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-8">
        <h1 class="text-3xl sm:text-5xl font-extrabold mb-6 text-gray-900 border-b-4 border-blue-600 inline-block pb-2">${p.heading}</h1>
        ${p.name === 'index.html' ? `
            <p class="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
                Precyzja i niezawodność od lat. Specjalizujemy się w instalacjach wodno-kanalizacyjnych i montażu nowoczesnych pomp ciepła. Gwarantujemy fachowe doradztwo na terenie Łowicza i okolic.
            </p>
            <div class="text-center sm:text-left mb-12">
                <a href="tel:889987681" class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg text-lg font-bold hover:bg-blue-700 transition w-full sm:w-auto">
                    Zadzwoń teraz: 889 987 681
                </a>
            </div>

            <section class="mb-12">
                <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">Zakres Usług</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 class="text-xl font-bold text-blue-700 mb-2">Instalacje Wodne i Kanalizacyjne</h3>
                        <p class="text-gray-600">Rozprowadzanie ciepłej i zimnej wody. Tworzymy trwałe i bezpieczne układy dla domów.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 class="text-xl font-bold text-blue-700 mb-2">Montaż Pomp Ciepła</h3>
                        <p class="text-gray-600">Dobór, montaż i serwis. Efektywne i ekologiczne ogrzewanie Twojego budynku.</p>
                    </div>
                </div>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">Nasze Realizacje</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500 font-bold">Zdj. Instalacja 1</div>
                    <div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500 font-bold">Zdj. Pompa Ciepła 1</div>
                    <div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500 font-bold">Zdj. Kotłownia 1</div>
                </div>
            </section>
        ` : ''}
        ${p.name === 'faq.html' ? `
            <div class="space-y-6 mt-8">
                <div class="bg-white p-6 rounded shadow-sm border border-gray-100"><h3 class="font-bold text-lg text-blue-700">Ile trwa montaż pompy ciepła?</h3><p class="text-gray-600 mt-2">Zazwyczaj od 2 do 5 dni roboczych, w zależności od specyfiki budynku.</p></div>
                <div class="bg-white p-6 rounded shadow-sm border border-gray-100"><h3 class="font-bold text-lg text-blue-700">Czy działacie poza Łowiczem?</h3><p class="text-gray-600 mt-2">Skupiamy się na Łowiczu i najbliższej okolicy do 30 km.</p></div>
            </div>
        ` : ''}
    </main>
    <footer class="w-full bg-gray-900 text-white p-8 text-center flex flex-col items-center">
        <p>&copy; 2026 Łukasz Bagnowski - Usługi Hydrauliczne. Łowicz.</p>
        <div class="flex space-x-6 mt-4">
            <a href="#" class="hover:text-blue-400 font-bold">Facebook</a>
            <a href="#" class="hover:text-blue-400 font-bold">Instagram</a>
        </div>
    </footer>
</body>
</html>`;

pages.forEach(p => fs.writeFileSync('lukasz-bagnowski/' + p.name, template(p)));
