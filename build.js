const fs = require('fs');

const pages = [
  { name: 'index.html', title: 'Łukasz Bagnowski - Hydraulik Łowicz', heading: 'Nowoczesna hydraulika i pompy ciepła.' },
  { name: 'o-nas.html', title: 'O nas - Łukasz Bagnowski', heading: 'Kilka słów o nas.' },
  { name: 'uslugi.html', title: 'Usługi - Łukasz Bagnowski', heading: 'Zakres naszych usług.' },
  { name: 'realizacje.html', title: 'Realizacje - Łukasz Bagnowski', heading: 'Nasze realizacje.' },
  { name: 'recenzje.html', title: 'Recenzje - Łukasz Bagnowski', heading: 'Co mówią klienci.' },
  { name: 'faq.html', title: 'FAQ - Łukasz Bagnowski', heading: 'Częste pytania.' },
  { name: 'kontakt.html', title: 'Kontakt - Łukasz Bagnowski', heading: 'Skontaktuj się z nami.' }
];

const template = (p) => `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Outfit', sans-serif; background-color: #ffffff; color: #171717; }
    </style>
</head>
<body class="antialiased min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">

    <header class="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <a href="index.html" class="text-xl font-normal text-emerald-900 tracking-wide text-center">
                Łukasz Bagnowski<br><span class="text-sm font-light text-neutral-500">Usługi Hydrauliczne</span>
            </a>
            <nav class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-light text-neutral-600">
                <a href="index.html" class="hover:text-emerald-800 transition">Główna</a>
                <a href="o-nas.html" class="hover:text-emerald-800 transition">O nas</a>
                <a href="uslugi.html" class="hover:text-emerald-800 transition">Usługi</a>
                <a href="realizacje.html" class="hover:text-emerald-800 transition">Realizacje</a>
                <a href="recenzje.html" class="hover:text-emerald-800 transition">Recenzje</a>
                <a href="faq.html" class="hover:text-emerald-800 transition">FAQ</a>
                <a href="kontakt.html" class="hover:text-emerald-800 transition">Kontakt</a>
            </nav>
        </div>
    </header>

    <main class="flex-grow max-w-6xl mx-auto w-full px-6 py-24 md:py-32 flex flex-col items-center text-center">
        
        <h1 class="text-4xl md:text-5xl font-light mb-12 text-neutral-900 tracking-tight max-w-3xl leading-tight">${p.heading}</h1>
        
        ${p.name === 'index.html' ? `
            <p class="text-lg md:text-xl font-light text-neutral-500 mb-16 max-w-2xl leading-relaxed">
                Minimalizm w formie, precyzja w działaniu. Zajmujemy się profesjonalnymi instalacjami wodno-kanalizacyjnymi oraz montażem pomp ciepła na terenie Łowicza i okolic.
            </p>
            
            <a href="tel:889987681" class="inline-flex justify-center items-center bg-emerald-900 text-white px-10 py-4 rounded-full text-lg font-light hover:bg-emerald-800 transition-all duration-300 mb-32 tracking-wide">
                Zadzwoń: 889 987 681
            </a>

            <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left">
                <div>
                    <h3 class="text-xl font-normal text-emerald-900 mb-6">Instalacje Wodne</h3>
                    <p class="text-neutral-500 font-light leading-relaxed">Kompleksowe rozprowadzanie wody i kanalizacji. Dbamy o każdy detal, gwarantując bezawaryjność na lata.</p>
                </div>
                <div>
                    <h3 class="text-xl font-normal text-emerald-900 mb-6">Pompy Ciepła</h3>
                    <p class="text-neutral-500 font-light leading-relaxed">Nowoczesne i ekologiczne systemy grzewcze. Czysty montaż, pełne doradztwo i optymalizacja kosztów.</p>
                </div>
            </div>
        ` : ''}

        ${p.name === 'o-nas.html' ? `
            <div class="w-full max-w-2xl text-left">
                <p class="text-neutral-500 font-light leading-relaxed mb-8 text-lg">Jesteśmy zespołem doświadczonych instalatorów z Łowicza. Wierzymy, że dobrze wykonana praca nie wymaga poprawek. Stawiamy na czystość, terminowość i najlepsze materiały dostępne na rynku.</p>
                <p class="text-neutral-500 font-light leading-relaxed text-lg">Nasze doświadczenie obejmuje zarówno nowoczesne budownictwo, jak i modernizacje starszych obiektów.</p>
            </div>
        ` : ''}

        ${p.name === 'uslugi.html' ? `
            <div class="w-full max-w-3xl text-left space-y-16">
                <div class="border-t border-neutral-100 pt-8">
                    <h3 class="text-2xl font-normal text-emerald-900 mb-4">Woda i Kanalizacja</h3>
                    <p class="text-neutral-500 font-light leading-relaxed">Projektowanie i wykonawstwo przyłączy, wewnętrznych instalacji sanitarnych. Używamy miedzi, PEX i sprawdzonych systemów zaciskowych.</p>
                </div>
                <div class="border-t border-neutral-100 pt-8">
                    <h3 class="text-2xl font-normal text-emerald-900 mb-4">Ogrzewanie i Pompy Ciepła</h3>
                    <p class="text-neutral-500 font-light leading-relaxed">Dobór urządzeń do zapotrzebowania budynku. Montaż ogrzewania podłogowego, grzejnikowego oraz pomp ciepła wiodących producentów.</p>
                </div>
            </div>
        ` : ''}

        ${p.name === 'realizacje.html' ? `
            <div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <div class="aspect-square bg-neutral-50 rounded-3xl flex items-center justify-center text-neutral-300 font-light">Zdjęcie realizacji 1</div>
                <div class="aspect-square bg-neutral-50 rounded-3xl flex items-center justify-center text-neutral-300 font-light">Zdjęcie realizacji 2</div>
                <div class="aspect-square bg-neutral-50 rounded-3xl flex items-center justify-center text-neutral-300 font-light">Zdjęcie realizacji 3</div>
                <div class="aspect-square bg-neutral-50 rounded-3xl flex items-center justify-center text-neutral-300 font-light">Zdjęcie realizacji 4</div>
            </div>
        ` : ''}

        ${p.name === 'recenzje.html' ? `
            <div class="w-full max-w-3xl text-left space-y-16 mt-8">
                <div>
                    <p class="text-neutral-500 font-light leading-relaxed text-lg italic">"Szybko, czysto i profesjonalnie. Pompa ciepła działa bez zarzutu."</p>
                    <p class="mt-4 text-emerald-900 font-normal">— Jan, Łowicz</p>
                </div>
                <div>
                    <p class="text-neutral-500 font-light leading-relaxed text-lg italic">"Pan Łukasz poprawiał instalację po poprzedniej ekipie. Pełen profesjonalizm i dbałość o detale."</p>
                    <p class="mt-4 text-emerald-900 font-normal">— Anna, Skierniewice</p>
                </div>
            </div>
        ` : ''}

        ${p.name === 'faq.html' ? `
            <div class="w-full max-w-3xl text-left space-y-12 mt-8">
                <div>
                    <h3 class="font-normal text-xl text-emerald-900 mb-4">Ile czasu zajmuje montaż pompy ciepła?</h3>
                    <p class="text-neutral-500 font-light leading-relaxed">Standardowo od 2 do 5 dni, w zależności od przygotowania kotłowni i wielkości budynku.</p>
                </div>
                <div>
                    <h3 class="font-normal text-xl text-emerald-900 mb-4">W jakim rejonie świadczycie usługi?</h3>
                    <p class="text-neutral-500 font-light leading-relaxed">Głównie w Łowiczu i okolicach w promieniu do 30-40 kilometrów.</p>
                </div>
            </div>
        ` : ''}

        ${p.name === 'kontakt.html' ? `
            <div class="w-full max-w-md text-left mt-8">
                <p class="text-neutral-500 font-light leading-relaxed mb-8">Zadzwoń do nas, aby umówić się na wycenę. Jesteśmy dostępni od poniedziałku do piątku.</p>
                <div class="bg-neutral-50 p-8 rounded-3xl">
                    <p class="text-sm font-light text-neutral-400 mb-2">Telefon kontaktowy</p>
                    <p class="text-2xl font-normal text-emerald-900 mb-8">889 987 681</p>
                    
                    <p class="text-sm font-light text-neutral-400 mb-2">Social Media</p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-emerald-900 hover:text-emerald-700 font-light transition">Facebook</a>
                        <a href="#" class="text-emerald-900 hover:text-emerald-700 font-light transition">Instagram</a>
                    </div>
                </div>
            </div>
        ` : ''}

    </main>

    <footer class="w-full py-12 px-6 text-center mt-auto border-t border-neutral-100">
        <p class="text-sm font-light text-neutral-400 tracking-wide">&copy; 2026 Łukasz Bagnowski - Usługi Hydrauliczne.</p>
    </footer>
</body>
</html>`;

pages.forEach(p => fs.writeFileSync('lukasz-bagnowski/' + p.name, template(p)));
