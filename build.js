const fs = require('fs');

const pages = [
  { name: 'index.html', title: 'Łukasz Bagnowski - Hydraulik Łowicz', heading: 'Profesjonalna Hydraulika i Pompy Ciepła', desc: 'Rozprowadzanie wody, kanalizacja, montaż pomp ciepła. Solidnie i terminowo.' },
  { name: 'uslugi.html', title: 'Usługi - Łukasz Bagnowski', heading: 'Nasze Usługi', desc: 'Kompleksowe instalacje sanitarne, wodne, grzewcze.' },
  { name: 'recenzje.html', title: 'Recenzje - Łukasz Bagnowski', heading: 'Opinie Klientów', desc: 'Zobacz, co mówią o nas klienci z Łowicza i okolic.' },
  { name: 'kontakt.html', title: 'Kontakt - Łukasz Bagnowski', heading: 'Kontakt', desc: 'Zadzwoń bezpośrednio: 889 987 681.' },
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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; }
    </style>
</head>
<body class="text-slate-800 antialiased min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">

    <!-- Navbar -->
    <header class="w-full bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="text-2xl font-extrabold text-blue-600 tracking-tight text-center">Łukasz Bagnowski<span class="block text-sm font-normal text-slate-500 mt-1">Usługi Hydrauliczne</span></div>
            <nav class="flex flex-wrap justify-center gap-x-6 gap-y-4 text-base font-semibold text-slate-600">
                <a href="index.html" class="hover:text-blue-600 transition">Główna</a>
                <a href="uslugi.html" class="hover:text-blue-600 transition">Usługi</a>
                <a href="realizacje.html" class="hover:text-blue-600 transition">Realizacje</a>
                <a href="recenzje.html" class="hover:text-blue-600 transition">Recenzje</a>
                <a href="faq.html" class="hover:text-blue-600 transition">FAQ</a>
                <a href="kontakt.html" class="hover:text-blue-600 transition">Kontakt</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow max-w-7xl mx-auto w-full px-6 py-16 md:py-24 flex flex-col items-center text-center">
        
        <h1 class="text-4xl md:text-6xl font-extrabold mb-8 text-slate-900 leading-tight max-w-4xl">${p.heading}</h1>
        
        ${p.name === 'index.html' ? `
            <p class="text-xl md:text-2xl text-slate-600 mb-16 max-w-3xl leading-relaxed">
                Specjalizujemy się w instalacjach wodno-kanalizacyjnych i montażu nowoczesnych pomp ciepła. Gwarantujemy fachowe doradztwo i precyzję na terenie Łowicza i okolic.
            </p>
            
            <a href="tel:889987681" class="inline-flex justify-center items-center w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl shadow-xl shadow-blue-600/20 text-xl font-bold hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all duration-200 mb-24">
                Zadzwoń: 889 987 681
            </a>

            <!-- Services -->
            <section class="w-full mb-24">
                <h2 class="text-3xl font-bold mb-12 text-slate-900">Zakres Usług</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
                        <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Instalacje Wodno-Kanalizacyjne</h3>
                        <p class="text-slate-600 text-lg leading-relaxed">Trwałe i bezpieczne układy rozprowadzania ciepłej i zimnej wody. Kompleksowe wykonawstwo w nowych i remontowanych budynkach.</p>
                    </div>
                    <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
                        <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Pompy Ciepła</h3>
                        <p class="text-slate-600 text-lg leading-relaxed">Dobór, profesjonalny montaż i serwis nowoczesnych pomp ciepła. Ciesz się ekologicznym i oszczędnym ogrzewaniem.</p>
                    </div>
                </div>
            </section>

            <!-- Portfolio preview -->
            <section class="w-full">
                <h2 class="text-3xl font-bold mb-12 text-slate-900">Ostatnie Realizacje</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="aspect-video bg-slate-200 rounded-3xl flex items-center justify-center text-slate-500 font-medium text-lg">Miejsce na zdjęcie 1</div>
                    <div class="aspect-video bg-slate-200 rounded-3xl flex items-center justify-center text-slate-500 font-medium text-lg">Miejsce na zdjęcie 2</div>
                </div>
                <div class="mt-10">
                    <a href="realizacje.html" class="text-blue-600 font-bold text-lg hover:underline">Zobacz więcej realizacji &rarr;</a>
                </div>
            </section>
        ` : ''}

        ${p.name === 'faq.html' ? `
            <div class="w-full max-w-3xl text-left space-y-8 mt-12">
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h3 class="font-bold text-xl text-slate-900 mb-4">Ile trwa montaż pompy ciepła?</h3>
                    <p class="text-slate-600 text-lg leading-relaxed">Zazwyczaj od 2 do 5 dni roboczych, w zależności od specyfiki budynku.</p>
                </div>
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h3 class="font-bold text-xl text-slate-900 mb-4">Czy działacie poza Łowiczem?</h3>
                    <p class="text-slate-600 text-lg leading-relaxed">Tak, obsługujemy Łowicz i okolice w promieniu do 30 kilometrów.</p>
                </div>
            </div>
        ` : ''}
    </main>

    <!-- Footer -->
    <footer class="w-full bg-slate-900 text-slate-400 py-12 px-6 text-center mt-auto">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-sm md:text-base">&copy; 2026 Łukasz Bagnowski - Usługi Hydrauliczne. Łowicz.</p>
            <div class="flex space-x-8">
                <a href="#" class="hover:text-white transition font-medium">Facebook</a>
                <a href="#" class="hover:text-white transition font-medium">Instagram</a>
            </div>
        </div>
    </footer>
</body>
</html>`;

pages.forEach(p => fs.writeFileSync('lukasz-bagnowski/' + p.name, template(p)));
