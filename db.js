const dataWithoutIndexes = {
  posts: [
    {
      title:
        "Kwarantanny o 30 proc. w dwa dni. Czy wpłynie to na gospodarkę? Czy czeka nas lockdown? [ROZMOWA]",
      thumb: "https://oko.press/images/2020/10/KH200508_020.jpg",
      date: "2020-10-23 10:15:53",
      excerpt:
        "Codziennie śledzimy epidemiczne statystyki i słusznie patrzymy na nie z coraz większym niepokojem. Liczba nowych odnotowanych zakażeń, zajętych…",
      url:
        "https://oko.press/kwarantanny-o-30-proc-w-dwa-dni-czy-wplynie-to-na-gospodarke-czy-czeka-nas-lockdown-rozmowa",
    },
    {
      title:
        "Rządzą nami fundamentaliści. Wykorzystali pandemię, żeby kobiety nie mogły wyjść na ulice. Ale wyjdą",
      thumb:
        "https://oko.press/images/2020/10/Gabriela-Morawska-Stanecka_TK.jpg",
      date: "2020-10-23 08:00:28",
      excerpt:
        "PiS dopiął swego. TK orzekł 22 października 2020 roku, że aborcje ze względu na ciężkie, nieuleczalne, a także śmiertelne wady płodów są…",
      url:
        "https://oko.press/rzadza-nami-fundamentalisci-wykorzystali-pandemie-zeby-kobiety-nie-mogly-wyjsc-na-ulice-ale-wyjda",
    },
    {
      title:
        "To my z OKO.press byliśmy menelami, którzy napadli na sędzię Pawłowicz",
      thumb: "https://oko.press/images/2020/10/DSC_0826.jpg",
      date: "2020-10-23 09:20:39",
      excerpt:
        '„Oni są bezkarni, oni mówią, że mają jakąś wolność, że im wolno chodzić, pytać, jakiś suweren, nie wiadomo co, no bandyterka zwykła" -…',
      url:
        "https://oko.press/to-my-z-oko-press-jestesmy-menelami-ktorzy-napadli-na-sedzie-pawlowicz",
    },
    {
      title:
        "Protest w Warszawie po zakazaniu aborcji. Tłum idzie pod dom Kaczyńskiego [AKTUALIZOWANY]",
      thumb: "https://oko.press/images/2020/10/Po-wyroku2.jpg",
      date: "2020-10-23 00:07:27",
      excerpt:
        "Protest relacjonują Dominika Sitnicka, Hanna Szukalska i Anton Ambroziak.\r\n\r\nDominika: Zaczęło się o 19:00 pod Trybunałem Konstytucyjnym, było t…",
      url:
        "https://oko.press/protest-w-warszawie-po-zakazaniu-aborcji-tlum-idzie-pod-dom-kaczynskiego",
    },
    {
      title:
        'Drugi lockdown czy cała Polska w „czerwonej strefie"? I czy leci z nami pilot? [WYKRESY]',
      thumb: "https://oko.press/images/2020/10/20201018_raport-pandemia.png",
      date: "2020-10-22 21:40:37",
      excerpt:
        "W ciągu ostatniej doby na COVID-19 zmarło 168 osób, z których 137 miało choroby współistniejące. To najwyższa liczba od początku epidemii i…",
      url:
        "https://oko.press/drugi-lockdown-czy-cala-polska-w-czerwonej-strefie-i-czy-leci-z-nami-pilot-wykresy",
    },
    {
      title:
        "PiS odrzucił społeczną kandydatkę na Rzecznika Praw Obywatelskich. Nie udzielono jej głosu",
      thumb: "https://oko.press/images/2020/10/Rudzinska.jpg",
      date: "2020-10-22 19:08:04",
      excerpt:
        "„Sejm nie wybrał RPO. A ja nie poddaję się. Zdecydowałam się kandydować nie dla polityków, nie dla sławy, a w imię troski o obywateli. 3 mi…",
      url:
        "https://oko.press/pis-odrzucil-spoleczna-kandydatke-na-rzecznika-praw-obywatelskich-nie-udzielono-jej-glosu",
    },
    {
      title:
        "Katolicki radykał, współpracownik Marka Jurka dostał miliony złotych od Ziobry i Glińskiego",
      thumb: "https://oko.press/images/2020/10/20200830_fundacja.jpg",
      date: "2020-10-02 07:51:16",
      excerpt:
        "„Nasza propozycja i ponowne wezwanie do obozu rządzącego: wypowiedzieć konwencję stambulską. Zaproponowaliśmy dokument z inicjatywy Marka Jurk…",
      url: "https://oko.press/muza-dei-jurek-ziobro-glinski",
    },
    {
      title:
        "Polska piekłem kobiet. PiS i Trybunał Julii Przyłębskiej wprowadzili zakaz aborcji",
      thumb: "https://oko.press/images/2020/10/20201022_aborcja-wyrok-tk.jpg",
      date: "2020-10-22 15:47:35",
      excerpt:
        'Upolityczniony Trybunał Konstytucyjny stwierdził dziś podczas posiedzenia, że aborcja ze względu na "duże prawdopodobieństwo ciężkiego i nieo…',
      url:
        "https://oko.press/polska-pieklem-kobiet-pis-i-trybunal-julii-przylebskiej-wprowadzili-zakaz-aborcji",
    },
    {
      title:
        "Lista hańby. Oto posłowie PiS i Konfederacji, którzy doprowadzili do zakazu aborcji w Polsce",
      thumb: "https://oko.press/images/2020/10/Bosak-Konfederacja.jpg",
      date: "2020-10-22 17:26:29",
      excerpt:
        "Dziś, 22 października 2020 roku, Trybunał Konstytucyjny wydał wyrok w sprawie dopuszczalności przerwania ciąży ze względów embriopatologiczny…",
      url:
        "https://oko.press/lista-hanby-oto-poslowie-pis-i-konfederacji-ktorzy-doprowadzili-do-zakazu-aborcji-w-polsce",
    },
    {
      title:
        "Cudowne rozmnożenie. Ministerstwo wielokrotnie powiększyło dorobek naukowy ministra Czarnka",
      thumb: "https://oko.press/images/2020/10/Przemyslaw-Czarnek-1.jpg",
      date: "2020-10-22 13:41:35",
      excerpt:
        "O dorobku naukowym nowego ministra edukacji i nauki Przemysława Czarnka pisaliśmy w OKO.press parokrotnie (np. tutaj i tutaj). Po oficjalnym zaprzys…",
      url:
        "https://oko.press/ministerstwo-powiekszylo-dorobek-naukowy-ministra-czarnka",
    },
    {
      title:
        "72 proc. Polek i Polaków przeciwko Kaczyńskiemu. Chcą lepszej ochrony wartości Unii",
      thumb: "https://oko.press/images/2020/10/SK200528_0102732.jpg",
      date: "2020-10-21 18:08:52",
      excerpt:
        'Parlament Europejski we wtorek 20 października wieczorem opublikował wstępne wyniki badania Kantar "Opinia publiczna w UE w czasach COVID-19". Wyni…',
      url:
        "https://oko.press/gotowy-72-proc-polek-i-polakow-chce-lepszej-ochrony-wartosci-unii",
    },
    {
      title:
        "Kompromitacja prokuratury Ziobry. Izba Dyscyplinarna nie uchyliła immunitetu sędzi Majcher z Opola",
      thumb: "https://oko.press/images/2020/10/DSC_0260.jpg",
      date: "2020-10-21 22:25:28",
      excerpt:
        "Izba Dyscyplinarna swoje orzeczenie wydała w środę 21 października o godzinie 20, po trwającym kilka godzin posiedzeniu. Jej orzeczenie jest osta…",
      url:
        "https://oko.press/kompromitacja-prokuratury-ziobry-izba-dyscyplinarna-nie-uchylila-immunitetu-sedzi-majcher-z-opola",
    },
    {
      title:
        "Aborcja? Nie pytamy o powód. W zagranicznych klinikach Polki odzyskują godność [WYWIAD]",
      thumb: "https://oko.press/images/2020/10/Aborcja-nie-policja.jpg",
      date: "2020-10-21 20:03:21",
      excerpt:
        "Magdalen Chrzczonowicz, OKO.press: W holenderskiej klinice Beahuis &amp; Bloemenhove w Heemstede dziennie przerywają ciążę dwie Polki. Tylko w tej…",
      url:
        "https://oko.press/aborcja-nie-pytamy-o-powod-w-zagranicznych-klinikach-polki-odzyskuja-godnosc-wywiad",
    },
    {
      title:
        "Zakaz aborcji w Trybunale. Czy ktoś naprawdę wierzy, że embrion jest w pełni człowiekiem?",
      thumb: "https://oko.press/images/2020/10/Przylebska.jpg",
      date: "2020-10-22 11:59:50",
      excerpt:
        "Dziś, 22 października, sędziowie i dublerzy Trybunału Konstytucyjnego mają zdecydować, czy embriopatologiczna przesłanka legalnego przerywania…",
      url:
        "https://oko.press/zakaz-aborcji-czy-ktos-naprawde-wierzy-ze-embrion-jest-w-pelni-czlowiekiem",
    },
    {
      title:
        'Bezocze, mózg poza czaszką, zarośnięcie przełyku. "Brzydkie dzieci" z wadami wrodzonymi, które trzeba będzie rodzić',
      thumb: "https://oko.press/images/2018/03/plodymartwetrupki.png",
      date: "2018-03-28 15:38:05",
      excerpt:
        'Przy okazji debaty wokół projektu Kai Godek "Zatrzymaj aborcję" w mediach rozpoczął się tradycyjny festiwal przerzucania się oskarżeniami o mo…',
      url:
        "https://oko.press/bezocze-mozg-poza-czaszka-zarosniecie-przelyku-brzydkie-dzieci-wadami-wrodzonym",
    },
    {
      title:
        "Trybunał w czarnych kapturach. Wywiad o aborcji z prof. Węgrzynem, specjalistą medycyny płodu",
      thumb: "https://oko.press/images/2020/10/20201021_wywiad-wady-plodu.jpg",
      date: "2020-10-21 20:32:19",
      excerpt:
        '"Wciąż mamy lekarzy - nawet w Warszawie - którzy ze względu na światopogląd zniechęcają kobiety w ciąży do wykonywania USG i innych badań p…',
      url: "https://oko.press/trybunal-w-czarnych-kapturach-wywiad-o-aborcji",
    },
    {
      title:
        "Sędzia nie zgodziła się na areszt dla syna Krauzego. Teraz dostaje groźby: lewacka kur.., obić ci mordę?",
      thumb: "https://oko.press/images/2020/10/sa-20130722-1077.jpg",
      date: "2020-10-21 16:33:28",
      excerpt:
        "Sędzia Ewa Mielcarek z wydziału karnego Sądu Rejonowego w Gdyni o areszcie dla syna biznesmena Ryszarda Krauzego decydowała w sobotę 17 paździer…",
      url:
        "https://oko.press/sedzia-nie-zgodzila-sie-na-areszt-dla-syna-krauzego-teraz-dostaje-grozby-lewacka-kur-obic-ci-morde",
    },
    {
      title:
        'Trybunał ośmiela fundamentalistów. Jeżdżą nowe busy z hasłami o "ofiarach aborcji" i "morderczyniach"',
      thumb: "https://oko.press/images/2020/10/JN201020_20101204.jpg",
      date: "2020-10-22 08:18:30",
      excerpt:
        '20 października 2020 Fundacja "Pro-prawo do życia", dwa dni przed spodziewanym w czwartek 22 października wyrokiem Trybunału Konstytucyjnego w spr…',
      url:
        "https://oko.press/trybunal-osmiela-fundamentalistow-jezdza-nowe-busy-z-haslami-o-ofiarach-aborcji-i-morderczyniach",
    },
    {
      title: "COVID-19 w Sejmie. Cztery zasłony dymne premiera Morawieckiego",
      thumb: "https://oko.press/images/2020/10/SK201021_0126199.jpg",
      date: "2020-10-21 23:04:46",
      excerpt:
        "W środę 21 października Mateusz Morawiecki przedstawił długo wyczekiwaną informację o stanie przygotowań państwa na drugą falę koronawirusa…",
      url:
        "https://oko.press/covid-19-w-sejmie-cztery-zaslony-dymne-premiera-morawieckiego",
    },
    {
      title:
        "Europosłowie popędzają Komisję Europejską: dlaczego nie bronicie sędziów Morawiec, Tulei, Majcher?",
      thumb:
        "https://oko.press/images/2019/12/B941AE11-1650-6244-AFDD-46A44F602622.jpg",
      date: "2020-10-22 07:41:11",
      excerpt:
        "Europosłowie piszą do wiceprzewodniczącej Komisji Europejskiej Věry Jourovej i komisarza ds. sprawiedliwości Didiera Reyndersa w sprawie sędzi…",
      url: "https://oko.press/europoslowie-apel-morawiec-tuleya-majcher",
    },
    {
      title:
        "Nawet przy lockdownie, gospodarka ucierpi mniej niż wiosną. Eksperci optymistami",
      thumb: "https://oko.press/images/2020/10/20201021-ekonomia-covid2.jpg",
      date: "2020-10-21 14:30:36",
      excerpt:
        "Wicepremier Jacek Sasin mówił w sierpniu: „Nie ma mowy o tym, aby wracać do takiego powszechnego lockdownu”. Ale Jacek Sasin znany jest z teg…",
      url: "https://oko.press/gospodarka-w-drugiej-fali",
    },
    {
      title:
        "Cała Polska w czerwonej strefie? 10 tys. nowych zakażeń, ponad 9 tys. chorych w szpitalu [WYKRESY]",
      thumb: "https://oko.press/images/2020/10/20201021_raport-pandemia.jpg",
      date: "2020-10-21 21:35:42",
      excerpt:
        'Czeka nas wszystkich najprawdopodobniej „czerwona strefa" – czyli zakaz organizowania uroczystości rodzinnych i innych imprez, szkoły średnie i…',
      url: "https://oko.press/szpital-narodowy-werbuje-lockdown-w-czechach",
    },
    {
      title:
        "Ziobro z tarczą, Kaczyński – z nosem na kwintę. Co zrobi prezes PiS? [ANALIZA DORNA]",
      thumb: "https://oko.press/images/2020/10/20201021_ziobro-kaczynski-1.jpg",
      date: "2020-10-21 12:00:03",
      excerpt:
        "Jarosław Kaczyński zetknął się z dwoma powiązanymi ze sobą problemami o takiej wadze, że razem składają się one na całkiem poważny kryzys…",
      url:
        "https://oko.press/ziobro-z-tarcza-kaczynski-z-nosem-na-kwinte-co-zrobi-prezes-pis-analiza-dorna",
    },
    {
      title:
        "Zgony - 107, zakażenia - ponad 9 tys. Koronawirus w natarciu, TVP ma winnego: opozycję [FAKTY, WYKRESY]",
      thumb: "https://oko.press/images/2020/10/20201020_raport-pandemia.jpg",
      date: "2020-10-20 21:31:51",
      excerpt:
        "Po weekendowym spadku liczby testów, a więc w efekcie również liczby zdiagnozowanych pozytywnych przypadków (swoją drogą wraz z rozwojem epidem…",
      url:
        "https://oko.press/zgony-107-zakazenia-ponad-9-tys-koronawirus-w-natarciu",
    },
    {
      title:
        "4,8 mln osób wyszło w Polsce z ubóstwa od 2008 roku. Kryzys cofnie nas o lata?",
      thumb: "https://oko.press/images/2020/10/SA-090518-1030.jpg",
      date: "2020-10-21 07:34:04",
      excerpt:
        "Pokaźnej ilości danych na temat zmniejszania się ubóstwa daje nam opublikowany właśnie raport EAPN Polska „Poverty Watch 2020”.\r\n\r\nEAPN (Eur…",
      url: "https://oko.press/od-2008-roku-polska-zredukowala-ubostwo-o-48-mln",
    },
    {
      title:
        "Akcja „Anihilacja RPO” odwołana. Bunt w Trybunale Przyłębskiej narasta",
      thumb: "http://oko.press/images/2017/05/PiS_TrybunalKonstytucyjny.jpg",
      date: "2020-10-21 08:30:16",
      excerpt:
        "Sędzią sprawozdawcą w sprawie jest – chyba na złość Adamowi Bodnarowi – Stanisław Piotrowicz. Sprawie przewodniczy Julia Przyłębska, a w…",
      url:
        "https://oko.press/akcja-anihilacja-rpo-odwolana-bunt-w-trybunale-przylebskiej-narasta",
    },
    {
      title:
        "Związek zawodowy Trzaskowskiego ma bronić podatku liniowego. Gdzie tu solidarność?",
      thumb: "https://oko.press/images/2020/10/Trzaskowski2.jpg",
      date: "2020-10-20 20:37:22",
      excerpt:
        "Podczas sobotniej inauguracji ruchu „Wspólna Polska” Trzaskowski zapowiedział założenie związku zawodowego „Nowa Solidarność”.\r\n\r\nZwią…",
      url:
        "https://oko.press/zwiazek-zawodowy-trzaskowskiego-ma-bronic-podatku-liniowego-gdzie-tu-solidarnosc",
    },
    {
      title:
        "Wybory w Wiedniu: jak pokonać prawicowych populistów? Austriaccy socjaldemokraci mają na to przepis",
      thumb: "https://oko.press/images/2020/10/vienna-3651186_1920.jpg",
      date: "2020-10-19 22:30:12",
      excerpt:
        "W wyborach do władz stolicy Austrii wyraźnie zwycięstwo odnieśli socjaldemokraci, którzy od dawna stanowią główną siłę polityczną w austri…",
      url: "https://oko.press/wybory-w-wiedniu-kleska-prawicowych-populistow",
    },
    {
      title:
        "Unia zakaże „wege burgerów”? Parlament Europejski o krok od absurdu",
      thumb: "https://oko.press/images/2020/10/JP200305_107.jpg",
      date: "2020-10-20 19:31:36",
      excerpt:
        "Od 2013 roku w Unii Europejskiej funkcjonują przepisy, które zakazują używania na opakowaniach produktów roślinnych określeń takich jak mleko…",
      url: "https://oko.press/unia-zakaz-wege-burgery",
    },
    {
      title:
        "Bardzo prosty przewodnik po COVID-19. Po ludzku o tym, co zrobić, gdy mamy wirusa w domu",
      thumb: "https://oko.press/images/2020/10/korona-w-domu.jpg",
      date: "2020-10-20 08:32:58",
      excerpt:
        "Skąd wiedzieliśmy, że to COVID-19?\r\nW szkole naszych dzieci na COVID-19 zachorował jeden z nauczycieli. Szkoła zareagowała wzorcowo i kiedy nauc…",
      url:
        "https://oko.press/bardzo-prosty-przewodnik-po-covid-19-po-ludzku-o-tym-co-zrobic-gdy-mamy-wirusa-w-domu",
    },
    {
      title: "Demonstracja siły. Czarnek odwołuje współpracowniczkę Zalewskiej",
      thumb: "https://oko.press/images/2020/10/JO200922_2291103.jpg",
      date: "2020-10-20 18:00:57",
      excerpt:
        "„Dzisiaj cały czas w polskim systemie edukacji jest bardzo wiele takich treści, co do których polskie rodziny mają ogromne wątpliwości, czy ch…",
      url:
        "https://oko.press/demonstracja-sily-czarnek-odwoluje-wspolpracowniczke-zalewskiej",
    },
    {
      title: "Eksperci: oto 15 rażących błędów rządu w walce z koronawirusem",
      thumb: "https://oko.press/images/2020/10/MJJ200608_030104726.jpg",
      date: "2020-10-20 17:00:56",
      excerpt:
        '„To jest rozmowa na długie godziny. Tyle jest błędów" – zapowiada dr Paweł Grzesiowski, immunolog, pediatra. Faktycznie lista jest długa.\r\nZ…',
      url:
        "https://oko.press/eksperci-oto-15-razacych-bledow-rzadu-w-walce-z-koronawirusem",
    },
    {
      title:
        '"Mamy nieść ulgę, a nie cierpienie". 600 lekarek przeciw zaostrzeniu prawa aborcyjnego',
      thumb: "https://oko.press/images/2020/10/Czarny-protest3.jpg",
      date: "2020-10-20 14:18:33",
      excerpt:
        "22 października 2020 Trybunał Konstytucyjny ma rozstrzygnąć, czy przerywanie ciąży z powodów embriopatologicznych, czyli gdy istnieje duże pra…",
      url:
        "https://oko.press/mamy-niesc-ulge-a-nie-cierpienie-600-lekarek-przeciw-zaostrzeniu-prawa-aborcyjnego",
    },
    {
      title:
        "PiS przegrał w Sejmie. Ziobro, Kaczyński, Gowin i Morawiecki się spóźnili",
      thumb: "https://oko.press/images/2020/10/SK201020_0125678.jpg",
      date: "2020-10-20 13:15:58",
      excerpt:
        "Wtorkowe, przyspieszone posiedzenie 20 października 2020 miało mieć trzy główne punkty:\r\n\r\n \tpierwsze czytanie nowej ustawy covidowej;\r\n \tinforma…",
      url:
        "https://oko.press/pis-przegral-w-sejmie-ziobro-kaczynski-gowin-i-morawiecki-spoznili-sie",
    },
    {
      title: "Migranci? Niech toną. Taki sygnał wysyła Unia Europejska",
      thumb: "https://oko.press/images/2020/10/Daniel-Sea-Watch.jpg",
      date: "2020-10-20 12:12:45",
      excerpt:
        "Od początku 2020 roku na Morzu Śródziemnym zginęło 675 osób, które próbowały dotrzeć do Europy.\r\n\r\nW 2015 roku, gdy zaczęto mówić o tzw.…",
      url: "https://oko.press/migranci-niech-tona",
    },
    {
      title:
        "Za 7 tygodni Polska do urn? PiS ryzykuje zdrowiem Suwerena, który lekceważy wirusa [Sondaż OKO.press]",
      thumb: "https://oko.press/images/2020/05/20200512_szumowski-.jpg",
      date: "2020-05-12 20:07:52",
      excerpt:
        "Projekt ustawy o szczególnych zasadach wyborów ogłoszony przez  PiS (ustami Jadwigi Emilewicz) budzi zasadnicze wątpliwości prawne (analiza tuta…",
      url:
        "https://oko.press/za-7-tygodni-do-urn-pis-ryzykuje-zdrowiem-suwerena-sondaz-oko-press",
    },
    {
      title: "Koronawirus w Hiszpanii – czy to już początek drugiej fali?",
      thumb:
        "https://oko.press/images/2020/07/turistas-sagrada-familia-coronavirus-2.jpg",
      date: "2020-07-29 13:39:03",
      excerpt:
        "Sławomir Zagórski, OKO.press: Jak oceniacie obecną sytuację? \r\n\r\nPiotr: Jesteśmy trochę zmartwieni czy to już zapowiadana druga fala.\r\n\r\nAgnies…",
      url:
        "https://oko.press/koronawirus-w-hiszpanii-czy-to-juz-poczatek-drugiej-fali",
    },
    {
      title:
        "Szczepionek na grypę jak na lekarstwo. Sprawdzamy, skąd w takim razie dobre samopoczucie rządu",
      thumb:
        "https://oko.press/images/2020/09/MD-Szczepienia-dla-seniorow-3.jpg",
      date: "2020-09-17 22:00:43",
      excerpt:
        "Jednym z tematów poruszanych w ciągu ostatnich dni w wielu domach jest brak szczepionek przeciw grypie. Wiadomo, Polak jest przekorny. Jeśli szczep…",
      url:
        "https://oko.press/szczepionek-na-grype-jak-na-lekarstwo-sprawdzamy-skad-w-takim-razie-dobre-sampoczucie-rzadu",
    },
    {
      title:
        "Testy na COVID-19 za 60 mln zł., które nie testują. Lepiej rzucić monetą [DOKUMENTY MIN. ZDROWIA]",
      thumb: "https://oko.press/images/2020/09/testy-koronawirus.jpg",
      date: "2020-09-23 14:39:54",
      excerpt:
        "Instrukcja nosi datę 16 września 2020 r. Skierowana jest do dyrektorów podmiotów leczniczych i zawiera założenia stosowania testów antygenowych…",
      url:
        "https://oko.press/testy-na-covid-19-za-60-mln-zl-ktore-nie-testuja-lepiej-rzucic-moneta-dokumenty-min-zdrowia",
    },
    {
      title:
        "W Polsce zachęcająco mało przypadków, w Chinach nowy szczep świńskiej grypy [WYKRESY, FAKTY]",
      thumb: "https://oko.press/images/2020/06/20200630_koronawirus-raport.jpg",
      date: "2020-07-01 00:20:04",
      excerpt:
        "Odpukać w niemalowane drzewo – trend w ilości nowych przypadków jest wciąż zachęcający. W ciągu ostatniej doby wykryto ich tylko 239.\r\n\r\n&nb…",
      url:
        "https://oko.press/w-polsce-malo-przypadkow-w-chinach-nowy-wirus-swinskiej-grypy",
    },
    {
      title:
        "Epidemiolog: Mamy epidemię dwóch prędkości, dlaczego nie poczekano z odmrażaniem Górnego Śląska?",
      thumb: "https://oko.press/images/2020/05/pobieranie-wymazu.jpg",
      date: "2020-05-27 22:12:52",
      excerpt:
        "Miłada Jędrysik: Pisze do nas mnóstwo ludzi z pytaniami: to w końcu ta epidemia wygasa, czy nie wygasa? Czują się bardzo zagubieni. \r\nProf. Mar…",
      url:
        "https://oko.press/epidemiolog-mamy-epidemie-dwoch-predkosci-dlaczego-nie-poczekano-z-odmrazaniem-gornego-slaska",
    },
    {
      title:
        "Kłamstwo bawarskie Szumowskiego: wybory bez wpływu na zakażenia. Sam sobie zaprzecza i myli landy",
      thumb: "https://oko.press/images/2020/05/20200506_bawaria-szumowski.jpg",
      date: "2020-05-06 18:37:51",
      excerpt:
        "Minister zdrowia - i coraz wyraźniej to widać, polityk PiS - w środowej (6 maja) Rzeczpospolitej bronił karkołomnej tezy, że wybory koresponden…",
      url: "https://oko.press/klamstwo-bawarskie-szumowskiego",
    },
    {
      title:
        '"Potrzeba maseczek była oczywista już w styczniu. Powinniśmy produkować je w milionach"',
      thumb: "https://oko.press/images/2020/05/maseczka.jpg",
      date: "2020-05-13 12:56:14",
      excerpt:
        "Nasz rozmówca prof. Tyll Krueger, pracuje na Wydziale Elektroniki Politechniki Wrocławskiej, mieszka w Polsce od 8 lat\r\n\r\nSławomir Zagórski: Zaczn…",
      url:
        "https://oko.press/prof-krueger-koronawirus-maseczki-zapotrzebowanie",
    },
    {
      title:
        "Europa się budzi? Luksemburg i Niemcy przyjęły 59 młodych uchodźców z greckich obozów",
      thumb: "https://oko.press/images/2020/05/latawcewMorii@TessaKraan.jpg",
      date: "2020-05-15 09:10:13",
      excerpt:
        "Na wieść o pierwszych przypadkach zakażenia koronawirusem 1 kwietnia w greckim obozie dla uchodźców Ritsona wybucha panika. Ośrodek na północ…",
      url:
        "https://oko.press/luksemburg-i-niemcy-przyjely-59-mlodych-uchodzcow-z-greckich-obozow",
    },
    {
      title:
        "COVID-19 pogorszy sytuację kobiet. Są bardziej narażone na zakażenie, utratę pracy, przemoc domową",
      thumb: "https://oko.press/images/2020/05/17032020-126rg.jpg",
      date: "2020-05-17 13:24:52",
      excerpt:
        "Pandemia COVID-19 pogorszy sytuację wszystkich obywateli, ale nie w demokratyczny sposób. W nieproporcjonalnym stopniu uderzy w kobiety, pogłębiaj…",
      url:
        "https://oko.press/covid-19-pogorszy-sytuacje-kobiet-sa-bardziej-narazone-na-zakazenie-utrate-pracy-przemoc-domowa",
    },
    {
      title:
        "Lekarz ze szpitala jednoimiennego: Ten wirus to mały pikuś, zagraża tylko niektórym [ROZMOWA]",
      thumb: "https://oko.press/images/2020/05/szpital-woloska.jpg",
      date: "2020-05-19 13:49:00",
      excerpt:
        "Od początku epidemii rozmawiam z lekarzami, którzy czynnie uczestniczą w walce z koronawirusem. To pierwszy głos profesjonalisty, który na całą…",
      url:
        "https://oko.press/lekarz-ten-wirus-to-maly-pikus-zagraza-tylko-niektorym",
    },
    {
      title:
        'Ubezpieczenie widmo. "Rząd gra na zwłokę, a właściwie na zwłoki". Medycy pytają, odpowiedzi nie ma',
      thumb: "https://oko.press/images/2019/06/AGR181104_8.jpg",
      date: "2020-05-19 19:09:40",
      excerpt:
        'Nie tylko pielęgniarki protestują i domagają się wyjaśnień bulwersującej sprawy "ubezpieczeń widmo" dla personelu medycznego, który ucierpia?…',
      url:
        "https://oko.press/ubezpieczenie-widmo-rzad-gra-na-zwloke-a-wlasciwie-na-zwloki-medycy-pytaja-odpowiedzi-nie-ma",
    },
    {
      title:
        "W kryzysie rząd oddał politykę gospodarczą lobbystom korporacji i organizacjom pracodawców",
      thumb: "https://oko.press/images/2020/05/Morawiecki2.jpg",
      date: "2020-05-20 15:14:59",
      excerpt:
        "Kryzys spowodowany epidemią koronawirusa i środkami zapobiegawczymi podjętymi przez rządy to gigantyczne wyzwanie dla społeczeństwa i gospodarki…",
      url:
        "https://oko.press/w-kryzysie-rzad-oddal-polityke-gospodarcza-lobbystom",
    },
    {
      title:
        "W Polsce skok zakażeń, za wcześnie poluzowaliśmy? Świat: koniec mrzonek o odporności zbiorowej [WYKRESY, MAPY]",
      thumb: "https://oko.press/images/2020/05/20200520_koronawirus-raport.jpg",
      date: "2020-05-21 00:17:30",
      excerpt:
        "W klimacie otwierania gospodarki i pośpiechu przed wyborami, które PiS chce ogłosić już na 28 czerwca, ministerstwo zdrowia podało, że 20 maja…",
      url:
        "https://oko.press/w-polsce-skok-zakazen-za-wczesnie-poluzowalismy-swiat-koniec-mrzonek-o-odpornosci-zbiorowej-wykresy-mapy",
    },
    {
      title:
        "Prezydent Duda: uratowaliśmy 2,5 mln miejsc pracy. Skąd te dane? Z żyrandola",
      thumb: "https://oko.press/images/2020/05/Duda-Morawiecki.jpg",
      date: "2020-05-21 09:19:40",
      excerpt:
        "Rząd od początku mówił: celem kolejnych „tarcz antykryzysowych” jest ochrona miejsc pracy. Nie minęły dwa miesiące od uchwalenia pierwszej…",
      url:
        "https://oko.press/prezydent-duda-uratowalismy-25-mln-miejsc-pracy-skad-te-dane-z-zyrandola",
    },
    {
      title:
        "Gospodarka i kultura odmrożone, maseczki idą do kieszeni. Tylko zakażenia nie chcą spadać",
      thumb: "https://oko.press/images/2020/05/Odmrażanie.jpg",
      date: "2020-05-27 17:08:05",
      excerpt:
        "Na środowej - 27 maja -konferencji prasowej premier Mateusz Morawiecki wraz z ministrem kultury Piotrem Glińskim ogłosił, że:\r\n\r\n \tod soboty 30 m…",
      url:
        "https://oko.press/odmrazanie-gospodarka-i-kultura-maseczki-ida-do-kieszeni",
    },
    {
      title:
        "Rząd wygasza zakazy, ale epidemia nie gaśnie. Więcej hospitalizacji, dużo zakażeń poza Śląskiem [WYKRESY, FAKTY]",
      thumb: "https://oko.press/images/2020/05/20200527_koronawirus-raport.jpg",
      date: "2020-05-28 00:34:36",
      excerpt:
        "Rząd zagrał va banque. 27 maja premier ogłosił znoszenie kolejnych obostrzeń. Najbardziej zaskakujące, choć zapowiadane od kilku dni, jest wyco…",
      url:
        "https://oko.press/rzad-wygasza-zakazy-ale-epidemia-nie-gasnie-wiecej-hospitalizacji-duzo-zakazen-poza-slaskiem-mapy-wykresy",
    },
    {
      title:
        "Morawiecki o koronawirusie w Sejmie: półprawdy, fałsz i morze demagogii, by utopić opozycję",
      thumb: "https://oko.press/images/2020/06/morawiecki.jpg",
      date: "2020-06-04 18:49:30",
      excerpt:
        "Sejmowe wystąpienie Mateusza Morawieckiego 4 czerwca 2020 było odsłoną kampanii wyborczej ubiegającego się o reelekcję Andrzeja Dudy. OKO.press…",
      url: "https://oko.press/morawiecki-o-koronawirusie-w-sejmie",
    },
    {
      title:
        "Koronawirus w UE: już tylko w Polsce i Szwecji rośnie liczba aktywnych przypadków",
      thumb: "https://oko.press/images/2020/06/20200604_koronawirus-raport.jpg",
      date: "2020-06-05 00:07:59",
      excerpt:
        "Według danych ministerstwa zdrowia w ciągu ostatniej doby zanotowano 361 nowych przypadków SARS-CoV-2, zmarły 2 osoby, wyzdrowiało 213. Średnia…",
      url:
        "https://oko.press/koronawirus-w-ue-juz-tylko-w-polsce-i-szwecji-rosnie-liczba-aktywnych-przypadkow",
    },
    {
      title:
        "Ognisko na weselu, ognisko na pogrzebie. W ciągu doby aż 30 zgonów na COVID-19 [WYKRESY, FAKTY]",
      thumb: "https://oko.press/images/2020/06/20200618_koronawirus-raport.jpg",
      date: "2020-06-19 00:07:23",
      excerpt:
        "Czwartek, 18 czerwca przyniósł 314 nowych wykrytych zakażeń. To jeden z najniższych wyników od początku czerwca.\r\n\r\n&nbsp;\r\n\r\nNajwięcej przypa…",
      url:
        "https://oko.press/ognisko-na-weselu-ognisko-na-pogrzebie-w-ciagu-doby-az-30-zgonow-na-covid-19-wykresy-fakty",
    },
    {
      title:
        "Pandemia na świecie przyśpiesza, USA wykupuje zapas leku na COVID-19 [WYKRESY, FAKTY]",
      thumb: "https://oko.press/images/2020/07/20200701_koronawirus-raport.jpg",
      date: "2020-07-01 23:35:09",
      excerpt:
        "To już ostatni z codziennych raportów na temat epidemii koronawirusa w Polsce.\r\nI my chcielibyśmy w wakacje odpocząć od wrednego patogenu. A powa…",
      url: "https://oko.press/raport-1-lipca-pandemia-na-swiecie-przyspiesza",
    },
    {
      title:
        '10 dni po wyborach wzrost zakażeń, a miała być "epidemia w odwrocie".  W Ameryce wirus robi, co chce',
      thumb: "https://oko.press/images/2020/07/20200723_koronawirus-raport.jpg",
      date: "2020-07-23 20:32:44",
      excerpt:
        "23 lipca ministerstwo zdrowia poinformowało o 418 nowych zakażeniach. To najwięcej od ponad miesiąca, kiedy 17 czerwca 2020 ich liczba wyskoczyła…",
      url: "https://oko.press/10-dni-po-wyborach-wzrost-zakazen",
    },
    {
      title:
        "584 zakażenia, drugi wynik od początku epidemii. Epidemia wraca na południe Europy. A u nas?",
      thumb: "https://oko.press/images/2020/07/20200725_koronawirus-raport.jpg",
      date: "2020-07-25 15:56:34",
      excerpt:
        "Ministerstwo Zdrowia podało 25 lipca, że nowych zakażeń koronawirusem jest 584. Więcej było tylko raz, 6 czerwca 2020 (599).\r\npo\r\n&nbsp;\r\n\r\nNiep…",
      url:
        "https://oko.press/584-zakazenia-drugi-wynik-od-poczatku-epidemii-epidemia-wraca-na-poludnie-europy-a-u-nas",
    },
    {
      title:
        "Nauczyć się żyć z tym wirusem - mówi OKO.press prof. Flisiak, wybitny specjalista chorób zakaźnych",
      thumb: "https://oko.press/images/2020/07/JW200323_304.jpg",
      date: "2020-07-25 22:52:08",
      excerpt:
        "Ministerstwo Zdrowia podało 25 lipca, że nowych zakażeń koronawirusem jest aż 584. Więcej było tylko raz, 6 czerwca 2020 (599).\r\n\r\nMinisterstwo…",
      url:
        "https://oko.press/nauczyc-sie-zyc-z-tym-wirusem-mowi-oko-press-prof-flisiak-wybitny-specjalista-chorob-zakaznych",
    },
    {
      title:
        "Koronawirus nie do okiełznania, rekordy zakażeń. Przydałby się nowy Szumowski, byle nie Karczewski",
      thumb: "https://oko.press/images/2020/07/szumowski11.jpg",
      date: "2020-07-31 18:51:05",
      excerpt:
        "Piątek 31 lipca przyniósł największy w historii polskiej epidemii wzrost liczby osób zakażonych - 657. Już w czwartek padł smutny rekord (615)…",
      url: "https://oko.press/rekordy-zakazen-przydalby-sie-nowy-szumowski",
    },
    {
      title:
        "Cztery wesela i pogrzeb? Pojutrze Zgromadzenie Narodowe (600 osób). A w kraju rekordy zakażeń",
      thumb: "https://oko.press/images/2020/08/Zgromadzenie-narodowe.jpg",
      date: "2020-08-04 14:59:18",
      excerpt:
        "Co najmniej 600 osób zgromadzi się w czwartek 6 sierpnia w budynku Sejmu, by uczcić inaugurację drugiej prezydentury Andrzeja Dudy. Żaden z klub?…",
      url:
        "https://oko.press/cztery-wesela-i-pogrzeb-jutro-zgromadzenie-narodowe-600-osob-a-w-kraju-rekordy-zakazen",
    },
    {
      title:
        'Doradca rządu ds. epidemii ujawnia: "W resorcie zdrowia nikt nas nie słucha, to traci sens"',
      thumb: "https://oko.press/images/2020/08/Łukasz-Szumowski.jpg",
      date: "2020-08-04 19:00:16",
      excerpt:
        "Sławomir Zagórski, OKO.press: Zajmuje się pan naukowo przebiegiem epidemii koronawirusa i doradza polskiemu rządowi. Rozmawialiśmy na ten temat 2…",
      url:
        "https://oko.press/doradca-rzadu-ds-epidemii-w-resorcie-zdrowia-nikt-nie-slucha",
    },
    {
      title:
        '"Takiego kryzysu jeszcze nie było": manifestacja pracowników ochrony zdrowia w Warszawie',
      thumb: "https://oko.press/images/2020/08/BO6A9711.jpg",
      date: "2020-08-09 08:04:52",
      excerpt:
        "W sobotę 8 sierpnia w Warszawie odbył się protest pracowników ochrony zdrowia. W manifestacji wzięło udział blisko 400 osób – lekarzy, piel?…",
      url:
        "https://oko.press/takiego-kryzysu-jeszcze-nie-bylo-manifestacja-pracownikow-ochrony-zdrowia-w-warszawie",
    },
    {
      title:
        "Wirus nam się wymyka: Polacy nie wiedzą, gdzie się zarażają. Na świecie walka o szczepionkę [WYKRESY]",
      thumb: "https://oko.press/images/2020/08/20200819_koronawirus-raport.jpg",
      date: "2020-08-19 22:07:18",
      excerpt:
        "Na 10 dni przed rozpoczęciem roku szkolnego nie widać wyraźnych sygnałów uspokojenia trendu wznoszącego epidemii, który obserwujemy od miesiąc…",
      url:
        "https://oko.press/w-polsce-transmisja-pozioma-wirusa-na-swiecie-walka-o-szczepionke",
    },
    {
      title:
        "Odwrót od neoliberalizmu w USA. Walka z bezrobociem równie ważna jak niska inflacja",
      thumb: "https://oko.press/images/2020/09/Bezrobocie-w-USA.png",
      date: "2020-09-26 16:20:43",
      excerpt:
        "Jerome Powell, szef amerykańskiej Rezerwy Federalnej (Fed), ogłosił odejście od przestrzegania ścisłego celu inflacyjnego i skupienie się w wi?…",
      url:
        "https://oko.press/odwrot-od-neoliberalizmu-w-usa-walka-z-bezrobociem-rownie-wazna-jak-niska-inflacja",
    },
    {
      title:
        "Rząd zapewnia o tysiącach wolnych łóżek, lekarze alarmują: powoli się zatykamy. A liczba zakażeń rośnie",
      thumb: "https://oko.press/images/2020/09/koronawirus-zakaz.jpg",
      date: "2020-09-28 22:40:20",
      excerpt:
        "Sytuacja związana z epidemią wywołaną przez koronawirus zmienia się na naszych oczach. Co prawda trudno było oczekiwać, że po poluzowaniu kole…",
      url:
        "https://oko.press/rzad-zapewnia-o-tysiacach-wolnych-lozek-lekarze-alarmuja",
    },
    {
      title:
        "Pandemia czy plandemia? Na co naprawdę umierają ludzie i kto ma w tym interes? OKO.press sprawdza",
      thumb: "https://oko.press/images/2020/09/20200827_mit3-plandemia-.png",
      date: "2020-09-30 15:15:41",
      excerpt:
        "Przypadki SARS-CoV-2 rosną lawinowo w całej Europie. W Polsce nie tylko mamy rekordy nowych przypadków, ale lawinowo wzrastają hospitalizacje:…",
      url: "https://oko.press/plandemia-oko-press-sprawdza-teorie-spiskowa",
    },
    {
      title:
        "Mamy ponad dwa razy więcej zgonów na 100 tys. mieszkańców niż Włochy. Eksplozja epidemii w liczbach",
      thumb: "https://oko.press/images/2020/10/20201007_raport-pandemia.png",
      date: "2020-10-07 15:40:37",
      excerpt:
        "Ministerstwo Zdrowia poinformowało w środę 7 października o śmierci na COVID-19 aż 75 osób w wieku od 40 do 93 lat. Osiem z nich, w tym najmło…",
      url: "https://oko.press/rekord-epidemii-zmarlo-75-osob",
    },
    {
      title:
        '„Boję się, że niedługo będę musiała wybierać, kogo przyjąć do szpitala". Relacja z nocnego dyżuru',
      thumb: "https://oko.press/images/2020/10/SOR.jpg",
      date: "2020-10-08 16:27:09",
      excerpt:
        "Jesienny wzrost zachorowań na COVID-19 zaskoczył rząd. Okazało się, że przygotowania do jesiennej strategii walki z koronawirusem były niewysta…",
      url: "https://oko.press/brak-lozek-w-szpitalach-relacja-z-nocnego-dyzuru",
    },
    {
      title:
        'Od soboty cała Polska żółtą strefą. A wiceminister zdrowia: „Pandemia jest pod kontrolą" [WYKRESY]',
      thumb: "https://oko.press/images/2020/10/20201008_raport-pandemia.png",
      date: "2020-10-08 20:50:55",
      excerpt:
        'Od soboty 10 października poczujemy się trochę jak na wiosnę – cały kraj znajdzie się w zagrożonej koronawirusem „żółtej strefie". Do te…',
      url: "https://oko.press/od-soboty-cala-polska-w-zoltej-strefie",
    },
    {
      title:
        '5300 zakażeń, Polska już 13. na świecie. 1019 szkół dotkniętych epidemią. Morawiecki: "ponad 100"',
      thumb: "https://oko.press/images/2020/10/20201010_raport-pandemia.png",
      date: "2020-10-10 17:38:55",
      excerpt:
        "Rekord nowych przypadków, sporo zgonów, coraz więcej osób na kwarantannie. W piątek 9 października minister zdrowia przyznał w TVN24, że epide…",
      url:
        "https://oko.press/5300-zakazen-polska-juz-13-na-swiecie-1019-szkol-dotknietych-epidemia-morawiecki-ponad-100",
    },
    {
      title:
        "Szwedzki sen: czy jest sens walczyć z koronawirusem tak, jak robiła to Szwecja? A raczej – czy był?",
      thumb:
        "https://oko.press/images/2020/10/Anders_Tegnell_in_2020_14_av_15.jpg",
      date: "2020-10-11 08:29:17",
      excerpt:
        '„Model szwedzki": na początek kilka podstawowych faktów\r\n\r\n \tSzwecja nie wprowadziła na wiosnę ścisłego lockdownu, jak wszystkie inne kraje eu…',
      url:
        "https://oko.press/czy-jest-sens-walczyc-z-koronawirusem-tak-jak-szwecja",
    },
    {
      title:
        "Statystycy pomagają walczyć z COVID-19. Co można wyczytać z dotychczasowych danych?",
      thumb: "https://oko.press/images/2020/10/JW201001_2102701.jpg",
      date: "2020-10-11 14:12:49",
      excerpt:
        "MOCOS [MOdeling COronavirus Spread] to grupa skupiająca naukowców różnych uczelni, a nawet krajów, założona przez prof. Tylla Krugera z Politec…",
      url: "https://oko.press/gotowe-statystycy-pomagaja-walczyc-z-covid-19",
    },
    {
      title:
        "Czego zabraknie najpierw? Respiratorów, tlenu, łóżek? Personelu? Pędzimy ku katastrofie",
      thumb: "https://oko.press/images/2020/10/MW160630_028.jpg",
      date: "2020-10-12 07:25:58",
      excerpt:
        '"Można odnieść wrażenie, że rządzący w ogóle nie brali pod uwagę gorszego scenariusza. Teraz, gdy obserwujemy wyczerpywanie się sił i środ…',
      url: "https://oko.press/nie-ma-miejsc-na-intensywnej-terapii",
    },
    {
      title:
        "PAN: Będzie coraz gorzej, jeżeli nie będziemy solidarni. 16 zaleceń na czas pandemii",
      thumb: "https://oko.press/images/2020/10/GS201001_5102101.jpg",
      date: "2020-10-12 09:33:11",
      excerpt:
        "XXXIII. COVID-19. Stanowisko 3 Zespołu ds COVID-19 przy Prezesie PAN\r\n\r\nPierwsza fala COVID-19 przeszła przez Polskę łagodniej niż w innych kraja…",
      url:
        "https://oko.press/pan-bedzie-coraz-gorzej-jezeli-nie-bedziemy-solidarni-16-zalecen-na-czas-pandemii",
    },
    {
      title:
        "Poseł PiS ogłasza cud: jeden dzień obostrzeń i już mamy spadek zachorowań!",
      thumb: "https://oko.press/images/2020/10/Mosinski.jpg",
      date: "2020-10-13 14:55:30",
      excerpt:
        "W sierpniu Ministerstwo Zdrowia wprowadziło podział podział kraju na trzy strefy zagrożenia koronawirusem. W zależności od liczby wykrytych nowy…",
      url: "https://oko.press/mosinski-spadek-zachorowan",
    },
    {
      title:
        'Lekarz z SOR: „Jestem w miejscu, gdzie ciśnienie jest największe, widzę, że to się na dniach zawali"',
      thumb: "https://oko.press/images/2020/10/JP201014_001028614.jpg",
      date: "2020-10-14 15:16:49",
      excerpt:
        "Kilka dni temu dr Stanisław Górski, lekarz pracujący na SOR na południu Polski, napisał w mediach społecznościowych, że dotychczasowa strategi…",
      url: "https://oko.press/lekarz-z-sor-widze-ze-to-sie-na-dniach-zawali",
    },
    {
      title:
        "Na samym COVID-zie często się nie kończy. Może być jeszcze POST-COVID",
      thumb:
        "https://oko.press/images/2020/10/20201016-mlodzi-starzy-covid-2.jpg",
      date: "2020-10-17 07:32:16",
      excerpt:
        "O tym, że ciężkie przechorowanie na COVID-19 związane z pobytem w szpitalu wywołuje często najróżniejsze powikłania słyszymy już od dawna.…",
      url:
        "https://oko.press/na-samym-covid-zie-czesto-sie-nie-konczy-moze-byc-jeszcze-post-covid",
    },
    {
      title:
        "Na Stadionie Narodowym szpital, szykujemy się na 20 tys. zakażeń. W Walii drugi lockdown, kto następny?",
      thumb: "https://oko.press/images/2020/10/20201019_raport-pandemia.png",
      date: "2020-10-19 21:15:41",
      excerpt:
        'Nieoficjalne informacje o szpitalach „polowych" pojawiły się już w niedzielę, ale ostateczną informację na ich temat przekazał minister zdrow…',
      url: "https://oko.press/szpitale-polowe-w-kazdym-wojewodztwie",
    },
    {
      title:
        "Pytają Przyłębską: odpowie pani za wszystkie tragedie? Za dwa dni TK może zakazać aborcji",
      thumb: "https://oko.press/images/2020/10/BO6A9506.jpg",
      date: "2020-10-20 11:33:49",
      excerpt:
        "22 października Trybunał Konstytucyjny ma rozstrzygnąć, czy przerywanie ciąży z powodów embriopatologicznych (gdy istnieje duże prawdopodobie?…",
      url:
        "https://oko.press/pytaja-przylebskiej-odpowie-pani-za-wszystkie-tragedie",
    },
    {
      title: "Zwały węgla w Polsce sięgają już 20 mln ton. Co dalej?",
      thumb: "https://oko.press/images/2020/10/Halemba2.jpg",
      date: "2020-10-20 09:59:03",
      excerpt:
        "Zapasy węgla kamiennego przy kopalniach przekroczyły już 7,9 mln ton i są największe od 5 lat, chociaż już dawno kopalnie miały się nimi „z…",
      url:
        "https://oko.press/zwaly-wegla-w-polsce-siegaja-juz-20-mln-ton-co-dalej",
    },
    {
      title: "Dlaczego ten Polak mnie opluł?",
      thumb: "https://oko.press/images/2020/10/DSC_4829.jpg",
      date: "2020-10-20 08:02:19",
      excerpt:
        "Piotr Pacewicz, OKO.press: Co się stało w centrum Warszawy na Mokotowskiej 16/20, blisko Placu Zbawiciela, we wtorek 13 października?\r\n\r\nZuzanna Kr…",
      url: "https://oko.press/dlaczego-ten-polak-mnie-oplul",
    },
    {
      title:
        '"Polki to też Europejki, będziemy bronić ich praw". Europarlamentarzyści przeciw zakazowi aborcji',
      thumb: "https://oko.press/images/2020/10/20201019_162419.jpg",
      date: "2020-10-19 20:17:30",
      excerpt:
        "22 października 2020 Trybunał Konstytucyjny Julii Przyłębskiej ma wydać wyrok w sprawie konstytucyjności przerywania ciąży ze względu na cię…",
      url:
        "https://oko.press/polki-to-tez-europejki-bedziemy-bronic-ich-praw-europarlamentarzysci-przeciw-zakazowi-aborcji",
    },
    {
      title:
        "Tak sąd zdruzgotał prokuraturę w sprawie Giertycha i innych. Znamy szczegóły orzeczenia",
      thumb: "https://oko.press/images/2020/10/Wkurwione_20180802_LC_024.jpg",
      date: "2020-10-19 19:47:16",
      excerpt:
        "Na areszt nie zgodził się poznański sąd późnym wieczorem w sobotę 17 października. Puścił wolno biznesmena Ryszarda Krauzego oraz cztery inn…",
      url:
        "https://oko.press/tak-sad-rozjechal-prokurature-w-sprawie-giertycha",
    },
    {
      title:
        "Tym razem to nie minister Czarnek mówił rzeczy dziwne i nieprawdziwe. Wyręczył go prezydent Duda",
      thumb: "https://oko.press/images/2020/10/duda-uniwersytet.jpg",
      date: "2020-10-19 18:25:27",
      excerpt:
        "Wprawdzie bohaterem wydarzenia był nowy minister Czarnek, ale - tym razem - to nie on mówił rzeczy dziwne, oburzające i nieprawdziwe. Ministra wyr…",
      url:
        "https://oko.press/tym-razem-to-nie-minister-czarnek-mowil-rzeczy-dziwne-i-nieprawdziwe",
    },
    {
      title:
        "Bzdura wiceministra Budy: jeśli zwierzęta będą za mało cierpiały, to mięso nie będzie koszerne",
      thumb: "https://oko.press/images/2020/10/buda1.jpg",
      date: "2020-10-19 15:34:36",
      excerpt:
        "13 października poseł PiS i wiceminister rozwoju Waldemar Buda występował na posiedzeniu Senatu jako przedstawiciel wnioskodawców „Piątki dla…",
      url:
        "https://oko.press/bzdura-wiceministra-budy-jesli-zwierzeta-beda-za-malo-cierpialy-to-mieso-nie-bedzie-koszerne",
    },
    {
      title:
        "Już 1050 organizacji popiera Rudzińską-Bluszcz na RPO. Jutro głosowanie",
      thumb: "https://oko.press/images/2020/10/SK200917_0120498.jpg",
      date: "2020-10-19 14:11:18",
      excerpt:
        "Na stanowisku RPO wciąż zasiada dr hab. Adam Bodnar, chociaż jego kadencja skończyła się ponad miesiąc temu. Lista organizacji społecznych pop…",
      url:
        "https://oko.press/juz-1050-organizacji-popiera-rudzinska-bluszcz-na-rpo-jutro-glosowanie",
    },
    {
      title:
        "Będzie powtórka głosowania nad kandydatką na Rzecznika Praw Obywatelskich",
      thumb:
        "https://oko.press/images/2020/09/RudzinskaBluszcznakorytarzusejmowym.jpeg",
      date: "2020-09-17 23:20:18",
      excerpt:
        "Kiedy wszystkie reflektory były zwrócone na kłócących się Ziobrę i Kaczyńskiego, a opinia publiczna wyczekiwała głosowania nad „piątką d…",
      url:
        "https://oko.press/bedzie-powtorka-glosowania-nad-kandydatka-na-rzecznika-praw-obywatelskich",
    },
    {
      title:
        '„Posłowie, poprzyjcie społeczną kandydatkę na RPO". List 700 organizacji',
      thumb: "https://oko.press/images/2020/09/SK200807_0115909.jpg",
      date: "2020-09-15 12:01:33",
      excerpt:
        "„Wybór Rzecznika [Praw Obywatelskich], który jest niezależny od polityków, to warunek konieczny, by zadbać o osoby najsłabsze, sprawiedliwoś?…",
      url: "https://oko.press/rudzinska-bluszcz-poparcie-700-organizacji",
    },
    {
      title:
        "Mec. Dubois: Nie wiemy, jakie dokumenty CBA zabrało z kancelarii Romana Giertycha",
      thumb: "https://oko.press/images/2020/10/dubois.jpg",
      date: "2020-10-19 12:31:26",
      excerpt:
        "Daniel Flis, OKO.press: W sobotę  17 października sąd odrzucił wniosek prokuratury o areszt dla biznesmena Ryszarda Krauzego i współpracownikó…",
      url: "https://oko.press/dubois-giertych-tajemnica-adwokacka",
    },
    {
      title:
        "Atak na uczelnie wyższe. PiS proponuje wolność przez wykluczenie [Widzę to tak]",
      thumb: "https://oko.press/images/2020/06/Czarnek.jpg",
      date: "2020-10-19 10:33:29",
      excerpt:
        "Po wyborach partia rządząca zaczyna walkę o uczelnie wyższe. Wybuch kolejnej fali pandemii odłożył w czasie nadchodzące zmiany, ale nie sprawi…",
      url:
        "https://oko.press/atak-na-uczelnie-wyzsze-pis-proponuje-wolnosc-przez-wykluczenie-widze-to-tak",
    },
    {
      title:
        "Szumowski zaraził się dwa razy koronawirusem? A może testy są do niczego? Wszystko o testowaniu",
      thumb: "https://oko.press/images/2020/10/IGC_PAN_LC_20201014_0008.jpg",
      date: "2020-10-18 19:37:18",
      excerpt:
        '28 września Onet poinformował, że były minister zdrowia Łukasz Szumowski jest zakażony SARS-CoV-2. Dzień później „Super Express" złapał S…',
      url: "https://oko.press/szumowski-i-test-na-koronawirusa",
    },
    {
      title:
        "TVP nie chce ujawnić płac prezenterów, bo... ktoś mógłby podkupić Holecką. Sąd: Tłumaczcie się lepiej",
      thumb:
        "https://oko.press/images/2020/10/Zrzut-ekranu-2020-10-18-o-00.39.16.png",
      date: "2020-10-18 15:49:30",
      excerpt:
        "Poseł Adam Szłapka chciał wiedzieć, jak TVP wydaje 1,12 mld zł, które media państwowe dostały w 2019 roku. Domagał się między innymi ujawni…",
      url: "https://oko.press/tvp-nie-chce-ujawnic-plac-prezenterow",
    },
    {
      title:
        'Sędzia Morawiec pozbawiona immunitetu: "Łapię oddech i zbieram siły do walki" [WYWIAD]',
      thumb: "https://oko.press/images/2020/10/JP200921_001027801.jpg",
      date: "2020-10-18 08:21:24",
      excerpt:
        'Piotr Pacewicz, OKO.press: Napisaliśmy, że "pod osłoną nocy" została pani 12 października 2020 pierwszym niepokornym sędzią pozbawionym immuni…',
      url: "https://oko.press/sedzia-morawiec-lapie-oddech",
    },
    {
      title:
        '"Rząd oczekuje od nas heroizmu, od siebie nie daje nic" - nauczycielka z wiejskiej szkoły w czerwonej strefie',
      thumb: "https://oko.press/images/2020/10/TSS200901_191310.jpg",
      date: "2020-10-17 21:59:55",
      excerpt:
        "OKO.press rozmawia z nauczycielką wiejskiej szkoły podstawowej na Mazowszu. W sobotę 17 października powiat, w którym znajduje się placówka tra…",
      url:
        "https://oko.press/rzad-oczekuje-od-nas-heroizmu-od-siebie-nie-daje-nic-nauczycielka-z-wiejskiej-szkoly-w-czerwonej-strefie",
    },
    {
      title:
        "Start Wspólnej Polski. Trzaskowski obiecuje związek zawodowy samozatrudnionych i granty klimatyczne",
      thumb: "https://oko.press/images/2020/10/Zrzut-ekranu-593.png",
      date: "2020-10-17 20:24:33",
      excerpt:
        "W sobotę 17 października 2020 o 13:00 odbyła się inauguracja zapowiadanego od miesięcy nowego ruchu Rafała Trzaskowskiego. Na początku konferen…",
      url: "https://oko.press/trzaskowski-ruch-wspolna-polska",
    },
    {
      title:
        "W sobotę 9,6 tys. zakażeń, choruje już 73,5 tys. Przegrywamy bitwę o łóżka i respiratory [RAPORT]",
      thumb: "https://oko.press/images/2020/10/20201017_raport-pandemia.png",
      date: "2020-10-17 18:00:57",
      excerpt:
        "Sobota 17 października przyniosła fatalne wiadomości.\r\n\r\n \tRekordowo dużo, blisko 10 tys. nowych zakażeń wirusem SARS-CoV-2.\r\n \tRekordowy dobowy…",
      url:
        "https://oko.press/96-tys-nowych-zakazen-choruje-juz-735-tys-przegrywamy-bitwe-o-lozka-i-respiratory-raport",
    },
    {
      title:
        'Czy może nas uratować odporność zbiorowa? Deklaracja z Great Barrington i jej „wrogowie"',
      thumb: "https://oko.press/images/2020/10/POGO201016_16101607.jpg",
      date: "2020-10-17 16:29:28",
      excerpt:
        'W ciężkich czasach potrzebujemy światełka w tunelu. Wielu z nas znalazło go w „Deklaracji z Great Barrington" – apelu amerykańskich naukowc?…',
      url: "https://oko.press/deklaracja-z-great-barrington-i-jej-wrogowie",
    },
    {
      title:
        "Biskup Janiak ostatecznie zrezygnował z urzędu. Kaliskie seminarium zamknięte",
      thumb: "https://oko.press/images/2020/10/lg_32078.jpg",
      date: "2020-10-17 15:25:20",
      excerpt:
        'W południe 17 października 2020 nuncjatura apostolska w Polsce wydała komunikat: "Ojciec Święty Franciszek przyjął rezygnację biskupa kaliskie…',
      url: "https://oko.press/biskup-janiak-zrezygnowal",
    },
    {
      title:
        "Prokuratura uderza w Giertycha. Nie można go aresztować, więc pozbawiono go prawa wykonywania zawodu",
      thumb: "https://oko.press/images/2020/10/MJJ190829_001050530.jpg",
      date: "2020-10-17 14:17:31",
      excerpt:
        "Zawieszenie byłego lidera LPR w obowiązkach adwokata Prokuratura Regionalna w Poznaniu ogłosiła na krótkiej konferencji w sobotę 17 październik…",
      url:
        "https://oko.press/prokuratura-uderza-w-giertycha-nie-mozna-go-aresztowac-wiec-pozbawiono-go-prawa-wykonywania-zawodu",
    },
    {
      title:
        "Szkoła i koronawirus. Czy minister Czarnek podoła epidemii? [PODCAST]",
      thumb: "https://oko.press/images/2020/04/20200410-anton-maciek.jpg",
      date: "2020-10-18 14:31:32",
      excerpt:
        "Ministerstwo Edukacji Narodowej wprowadziło niespodziewanie nowe rozwiązania dla szkół. Od poniedziałku 19 października szkoły ponadpodstawowe…",
      url:
        "https://oko.press/szkola-i-koronawirus-czy-minister-czarnek-podola-epidemii-podcast",
    },
    {
      title:
        "PiS „unarodowi” humanistykę na uniwersytetach? Wiceministra Gawin ujawnia",
      thumb: "https://oko.press/images/2020/10/gawin2.jpg",
      date: "2020-10-17 10:35:39",
      excerpt:
        "Wystąpienie dr hab. Magdaleny Gawin, wiceministry w Ministerstwie Kultury, podczas kongresu „Polska Wielki Projekt” (10 października) historycy…",
      url: "https://oko.press/pis-unarodowi-humanistyke-na-uniwersytetach",
    },
    {
      title:
        "Niebezpieczna fantazja Glińskiego. Premierze, postkomuniści i zagranica nie przejęli polskich mediów",
      thumb: "https://oko.press/images/2020/10/Glinski.jpg",
      date: "2020-10-19 07:29:47",
      excerpt:
        "Wicepremier Piotr Gliński mówił o mediach w RMF24 rano 13 października. Całej rozmowy można odsłuchać na stronie radia. Gliński komentował d…",
      url:
        "https://oko.press/postkomunisci-i-zagranica-nie-przejeli-polskich-mediow",
    },
    {
      title: "Siedlecka: PiS traktuje Trybunał jak prawną prostytutkę",
      thumb: "https://oko.press/images/2019/10/Przyłębska-Piotrowicz.jpg",
      date: "2020-10-19 08:43:41",
      excerpt:
        "Najpierw PiS w kolejnej „tarczy” chciał dodać do kodeksu karnego specjalny przepis zapewniający bezkarność władzy. Opozycja jeździła za to…",
      url:
        "https://oko.press/siedlecka-pis-traktuje-trybunal-jak-prawna-prostytutke",
    },
    {
      title:
        "W Polsce szpitale na kilka dni przed wypełnieniem, Remdesivir jednak nie działa? [WYKRESY, LICZBY]",
      thumb: "https://oko.press/images/2020/10/20201016_raport-pandemia.png",
      date: "2020-10-16 22:19:21",
      excerpt:
        "W piątek 16 października resort zdrowia poinformował o śmierci aż 132 osób zakażonych SARS-CoV-2 (z których 120 miało choroby współistniej?…",
      url: "https://oko.press/brak-miejsc-w-szpitalach",
    },
    {
      title:
        '"To perwersyjna afirmacja śmierci i cierpienia". Komisja sejmowa grilluje wniosek do TK o aborcji',
      thumb: "https://oko.press/images/2020/10/Komisja.png",
      date: "2020-10-16 21:56:18",
      excerpt:
        "W piątek 16 października sejmowa Komisja ustawodawcza debatowała nad projektem stanowiska Sejmu w sprawie delegalizacji aborcji z przyczyn embriopa…",
      url: "https://oko.press/komisja-ustawodawcza-aborcja-tk",
    },
    {
      title:
        'Branża fitness zapowiada protest. "Rząd nas zamyka w dwa dni, bez uprzedzenia"',
      thumb: "https://oko.press/images/2020/10/LA_06042017_11.jpg",
      date: "2020-10-16 21:31:47",
      excerpt:
        "Właściciele klubów fintess zapowiadają w sobotę 17 października protest w Warszawie. Pomimo zakazu zgromadzeń i nowych obostrzeń. Tego dnia Wa…",
      url:
        "https://oko.press/silownie-zamkniete-branza-fitness-zapowiada-protest",
    },
    {
      title:
        "Prokuratura chce dopaść Giertycha. Przedstawiła mu zarzuty w szpitalu, gdy ten nie reagował",
      thumb: "https://oko.press/images/2020/10/giertych5.jpg",
      date: "2020-10-16 20:29:33",
      excerpt:
        "Prokuratura nie zwalnia tempa w sprawie adwokata i byłego lidera LPR Romana Giertycha, który w latach 2005-2007 był wicepremierem i ministrem eduka…",
      url:
        "https://oko.press/prokuratura-chce-dopasc-giertycha-przedstawila-mu-zarzuty-w-szpitalu-gdy-ten-nie-reagowal",
    },
    {
      title:
        "100 zł za komentarz w sieci, 1000 zł za artykuł. Jak ludzie Bosaka zarabiali w kampanii wyborczej",
      thumb: "https://oko.press/images/2020/10/20201015_Bosak.png",
      date: "2020-10-16 19:19:52",
      excerpt:
        "Dzwonimy do Andrzeja Kaniewskiego, wiceprezesa łódzkich struktur Ruchu Narodowego, w 2019 roku kandydata Konfederacji do Sejmu.\r\n\r\nZgodnie z umową,…",
      url:
        "https://oko.press/100-zl-za-komentarz-w-sieci-1000-zl-za-artykul-jak-ludzie-bosaka-zarabiali-w-kampanii-wyborczej",
    },
    {
      title:
        "Laboratoria nie nadążają za epidemią. Śmierć w karetce, bo brakuje miejsc dla chorych [RAPORT]",
      thumb: "https://oko.press/images/2020/10/AST201012_009.jpg",
      date: "2020-10-18 17:38:55",
      excerpt:
        "Liczbą dnia jest 22,9 proc. To odsetek wyników pozytywnych spośród wykonanych w Polsce w ciągu ostatniej doby testów na SARS-CoV-2 (8 536 z 37 2…",
      url: "https://oko.press/laboratoria-nie-nadazaja-za-epidemia",
    },
    {
      title:
        "Metoda „małych kroków” nie przyniosła skutku. Niech KE skarży do TSUE za systemowe naruszanie wartości",
      thumb: "https://oko.press/images/2020/06/P041907-996021.jpg",
      date: "2020-10-18 21:35:08",
      excerpt:
        '"Komisja Europejska musi podejść całościowo do przypadków podważania zasady praworządności przez państwa członkowskie. Do Trybunału Sprawie…',
      url:
        "https://oko.press/niech-ke-skarzy-do-tsue-za-systemowe-naruszanie-wartosci",
    },
    {
      title:
        "Przemoc przeciwko kwiatom. Dokąd prowadzi państwowy terror w Białorusi? Analizujemy sytuację",
      thumb: "https://oko.press/images/2020/10/JN516472-1.jpg",
      date: "2020-10-18 20:30:28",
      excerpt:
        "Kolejne dowody bestialskich działań, kolejne trudne do wyobrażenia liczby poszkodowanych i kolejne historie zwyczajnych ludzi, którzy bez winy sta…",
      url:
        "https://oko.press/przemoc-przeciwko-kwiatom-dokad-zaprowadzi-panstwowy-terror-w-bialorusi",
    },
    {
      title:
        'Sprzeciw RPO. Nie chce, by w jego sprawie w TK orzekali były poseł PiS Piotrowicz i sędzia "dubler"',
      thumb: "https://oko.press/images/2019/12/Bodnar.jpg",
      date: "2020-10-17 13:21:40",
      excerpt:
        "Posłowie PiS Marek Ast i Przemysław Czarnek 17 września 2020 poprosili, by Trybunał Konstytucyjny wypowiedział się na temat konstytucyjności pr…",
      url:
        "https://oko.press/rpo-nie-chce-by-w-jego-sprawie-w-tk-orzekali-byly-posel-pis-piotrowicz-i-sedzia-dubler",
    },
    {
      title:
        "Czy ktoś w ogóle rządzi Polską? Ekspert: władza bawi się urzędami, a państwo dryfuje",
      thumb: "https://oko.press/images/2020/10/Kaczynski-maska.jpg",
      date: "2020-10-16 17:49:27",
      excerpt:
        '"Koalicja rządowa wykazuje niesamowitą dezynwolturę wobec zasad rządzenia publicznego. Nie przedstawiła uzasadnienia dla projektu zmian organizac…',
      url:
        "https://oko.press/czy-ktos-w-ogole-rzadzi-polska-ekspert-wladza-bawi-sie-urzedami-a-panstwo-dryfuje",
    },
    {
      title:
        "Blamaż prokuratury Ziobry ws. Giertycha. Kim jest sędzia, która nie zgodziła się na areszty?",
      thumb: "https://oko.press/images/2020/10/Wkurwione_20180802_LC_023.jpg",
      date: "2020-10-18 11:38:41",
      excerpt:
        "To duży cios dla narracji Prokuratury Regionalnej w Poznaniu i dla prorządowych mediów, które od czwartku 15 października robiły wokół tej spr…",
      url: "https://oko.press/blamaz-prokuratury-ziobry-ws-giertycha",
    },
    {
      title:
        "Czy Franciszek to lewicowy ekstremista? A może zysk to nie wszystko? Rozmowa o świecie po pandemii",
      thumb: "https://oko.press/images/2020/10/Ilu_Wywiad_Lepieniewska.jpg",
      date: "2020-10-18 13:30:41",
      excerpt:
        'Na początku października 2020 papież Franciszek wydał encyklikę "Fratelli Tutti" (o braterstwie i przyjaźni społecznej), która przez część…',
      url: "https://oko.press/czy-franciszek-to-lewicowy-ekstremista",
    },
    {
      title:
        "Makowski: Polacy chcą państwa, które działa, na które człowiek może liczyć [DEBATA OKO.PRESS]",
      thumb: "https://oko.press/images/2020/10/SK191219_0074004.jpg",
      date: "2020-10-17 11:50:51",
      excerpt:
        "Prowadzimy w OKO.press dyskusję o polskiej opozycji: jakie powinna mieć priorytety, wizję, strategię, by w 2023 roku mieć szansę na przejęcie w…",
      url:
        "https://oko.press/makowski-polacy-chca-panstwa-ktore-dziala-na-ktore-czlowiek-moze-liczyc-debata-oko-press",
    },
    {
      title:
        "Adwokaci i sędziowie po zatrzymaniu Giertycha murem stają w obronie tajemnicy adwokackiej",
      thumb: "https://oko.press/images/2020/10/Giertych3.jpg",
      date: "2020-10-16 15:59:48",
      excerpt:
        "Zatrzymanie Romana Giertycha w czwartek 15 października rozgrzało środowisko prawników w Polsce. Bo tak jak ważna jest niezawisłość i niezale?…",
      url:
        "https://oko.press/adwokaci-i-sedziowie-po-zatrzymaniu-giertycha-murem-staja-w-obronie-tajemnicy-adwokackiej",
    },
    {
      title:
        "Prezydent Płocka z PO promuje konferencję z udziałem Ordo Iuris, kurator Nowak i eksperta z Radia Maryja",
      thumb: "https://oko.press/images/2020/10/TN181025_027.jpg",
      date: "2020-10-16 18:48:06",
      excerpt:
        'W czwartek 15 października odbyła się w Płocku konferencja „Państwo dla rodziny – rodzina dla państwa", organizowana przez Stowarzyszenie na…',
      url:
        "https://oko.press/prezydent-plocka-z-po-promuje-konferencje-z-udzialem-ordo-iuris-kurator-nowak-i-eksperta-z-radia-maryja",
    },
    {
      title:
        'Pielęgniarki zapłacą za kryzys w szpitalach. "A przecież gdyby nie my, system już dawno by padł"',
      thumb:
        "https://oko.press/images/2018/06/z17513679VPielegniarka-i-polozna-To-odrebne-zawody-nie-tyl.jpg",
      date: "2020-10-16 14:12:04",
      excerpt:
        'Ministerstwo Zdrowia szykuje się do zmiany zasad finansowania podwyżek dla pielęgniarek i położnych. Do tej pory tzw. "zembalowe", wywalczone w 2…',
      url: "https://oko.press/pielegniarki-zaplaca-za-kryzys-w-szpitalach",
    },
    {
      title:
        '"Wieziemy pacjenta kowidowego przez SOR. Kupa ludzi. A my przez środek tłumu" [RELACJA RATOWNIKA]',
      thumb: "https://oko.press/images/2020/10/karetka2.jpg",
      date: "2020-10-16 12:46:19",
      excerpt:
        "Kiedy rozmawiamy po raz pierwszy, w czwartek po południu, mój rozmówca, ratownik medyczny, jedzie karetką wiozącą pacjentkę z zagrożeniem życ…",
      url:
        "https://oko.press/ratownik-medyczny-wieziemy-pacjenta-kowidowego-przez-sor",
    },
    {
      title:
        'Babcia Polska do Kaczyńskiego: "Gdzie jest wrak, facet?". "Postanowiłam cała poświęcić się ulicy"',
      thumb: "https://oko.press/images/2020/10/20201015_babcia.png",
      date: "2020-10-15 18:43:03",
      excerpt:
        'Piotr Pacewicz, OKO.press: "Gdzie jest wrak prezesie Polski, pod Trybunał Stanu pójdziesz, facet" - krzyknęła pani Kaczyńskiemu prosto w twarz. F…',
      url:
        "https://oko.press/babcia-polska-do-kaczynskiego-gdzie-jest-wrak-facet-postanowilam-cala-poswiecic-sie-ulicy",
    },
    {
      title:
        "Ponad 6 mln zł dla fundacji o. Rydzyka na kampanie o prawdzie historycznej i bezpieczeństwie w rodzinie",
      thumb:
        "https://oko.press/images/2020/10/Ziobro-na-27.-urodzinach-Radia-Maryja.jpg",
      date: "2020-10-16 07:38:45",
      excerpt:
        "Fundusz Sprawiedliwości od lat hojnie dotuje Fundację Lux Veritatis, której szefem jest o. Tadeusz Rydzyk oraz założoną przez niego Wyższą Szk…",
      url: "https://oko.press/ponad-6-mln-zl-dla-fundacji-rydzyka",
    },
    {
      title:
        "Czarnek pozwany za homofobiczne słowa w TVP i Radiu Maryja. Prawnik z UW domaga się przeprosin",
      thumb: "https://oko.press/images/2018/10/JO241017_110.jpg",
      date: "2020-10-16 10:15:39",
      excerpt:
        "Prof. Jakub Urbanik z wydziału prawa Uniwersytetu Warszawskiego, zaangażowany w walkę o prawa osób LGBT, pozywa ministra edukacji in spe Przemysł…",
      url:
        "https://oko.press/czarnek-pozwany-za-homofobiczne-slowa-w-tvp-i-radiu-maryja-prawnik-z-uw-domaga-sie-przeprosin",
    },
    {
      title:
        "Kaczyński grozi wetem budżetu UE. To pozbawi całą Europę pieniędzy na walkę z koronakryzysem",
      thumb: "https://oko.press/images/2020/10/DZ200926121889-1.jpg",
      date: "2020-10-16 08:47:00",
      excerpt:
        "„Będzie weto. Jeśli groźby i szantaże będą utrzymane, to my będziemy twardo bronili żywotnego interesu Polski. Weto. Non possumus. I tak bę…",
      url: "https://oko.press/kaczynski-zapowiada-weto-budzetu-ue",
    },
    {
      title:
        "Miliony złotych od państwa na „pajęczynę” o. Rydzyka. Liczymy pieniądze, pokazujemy zdjęcia z drona",
      thumb:
        "https://oko.press/images/2020/09/Park-Pamieci-Narodowej-Rydzyk-Lux-Veritatis.png",
      date: "2020-09-25 07:21:32",
      excerpt:
        "Gdy w 2017 roku o. Tadeusz Rydzyk ogłosił w Radiu Maryja pomysł budowy Parku Pamięci Narodowej, mówił, że chce, by był on gotowy na setną roc…",
      url: "https://oko.press/miliony-pajeczyna-rydzyka",
    },
    {
      title:
        "OKO.press z Koroną Równości! Nagrodzono też Wandę Traczyk-Stawską, Agnieszkę Dziemianowicz-Bąk, Atlas Nienawiści",
      thumb: "https://oko.press/images/2020/09/20200927_204524.jpg",
      date: "2020-09-27 20:43:39",
      excerpt:
        '„Tę nagrodę traktujemy jako nagrodę za oczywistość. Mam nadzieję, że za rok się spotkamy i będzie lepiej" - mówiła Magdalena Chrzczonowic…',
      url: "https://oko.press/oko-press-z-korona-rownosci",
    },
    {
      title: "OKO.press nominowane do Korony Równości. Głosowanie trwa!",
      thumb: "https://oko.press/images/2020/09/4op-18.jpg",
      date: "2020-09-03 09:55:25",
      excerpt:
        'KPH: "OKO.press wnikliwie i z oddaniem analizuje wydarzenia dotyczące społeczności LGBT w Polsce. W lutym 2020 redakcja wysłała 52 »donosy« do…',
      url:
        "https://oko.press/oko-press-nominowane-do-korony-rownosci-glosownie-trwa",
    },
    {
      title:
        "Koronawirus w Czechach. W Pradze szykują się na najgorsze i budują szpital polowy",
      thumb: "https://oko.press/images/2020/10/Babis-Prymula.jpg",
      date: "2020-10-16 09:31:40",
      excerpt:
        "Jak wynika z informacji ministerstwa zdrowia w 10-milionowych Czechach, w czwartek przybyło rekordowe 9 720 nowych potwierdzonych przypadków zachoro…",
      url:
        "https://oko.press/koronawirus-w-czechach-w-pradze-szykuja-sie-na-najgorsze",
    },
    {
      title:
        "Mec. Dubois: Giertych mówił mi, że ma dowody obciążające jedną z najwyższych osób w państwie",
      thumb: "https://oko.press/images/2020/10/Giertych.jpg",
      date: "2020-10-15 21:52:21",
      excerpt:
        '"Oczywiście nie można wydawać wyroków przed orzeczeniem. Ale można dokonywać analizy zdarzeń poprzez posługiwanie się logiką, rozumem i doś…',
      url:
        "https://oko.press/mec-dubois-giertych-mowil-mi-ze-ma-dowody-obciazajace-jedna-z-najwyzszych-osob-w-panstwie",
    },
    {
      title:
        "Strefa czerwona dla 70 proc. Polaków. Ograniczenia w edukacji, komunikacji, handlu [FAKTY, LICZBY]",
      thumb: "https://oko.press/images/2020/10/20201015_raport-pandemia.png",
      date: "2020-10-15 20:42:28",
      excerpt:
        '"Przestaliśmy się dystansować" - stwierdził dziś (15 października) na konferencji premier Mateusz Morawiecki (uczestniczył zdalnie, jest w kwar…',
      url:
        "https://oko.press/strefa-czerwona-dla-70-proc-polakow-ograniczenia-w-edukacji-komunikacji-handlu-fakty-liczby",
    },
    {
      title:
        "Ujawniamy: osłabiony Kaczyński zmienia front, Morawiecki nie będzie delfinem. Skończy jako zderzak?",
      thumb: "https://oko.press/images/2020/10/20201014_delfin-.png",
      date: "2020-10-15 19:54:30",
      excerpt:
        "Od kilkunastu dni, gdy stało się jasne, że koalicja Zjednoczonej Prawicy poukładała się na nowo, sprawdzaliśmy, na czym polega to nowe otwarcie…",
      url: "https://oko.press/ujawniamy-oslabiony-kaczynski-zmienia-front",
    },
    {
      title:
        "Konsensus Polaków w sprawach europejskich się skończył. Nowe badania",
      thumb: "https://oko.press/images/2020/05/UE-1.jpg",
      date: "2020-05-03 13:00:56",
      excerpt:
        "1 maja minęła właśnie kolejna, szesnasta już, rocznica przystąpienia Polski do Unii Europejskiej.  I Polska, i Unia znajdują się na zakręcie…",
      url:
        "https://oko.press/konsensus-polakow-w-sprawach-europejskich-sie-skonczyl-nowe-badania",
    },
    {
      title:
        "Niemcy zablokują Nord Stream 2? Same nie dadzą rady, potrzebują wsparcia całej Unii Europejskiej",
      thumb: "https://oko.press/images/2020/09/angela-Merkel.jpg",
      date: "2020-09-14 19:43:03",
      excerpt:
        "Minister spraw zagranicznych Heiko Maas zadeklarował, że jeśli Rosja nie będzie współpracować przy wykryciu sprawców zbrodni, Niemcy mogą prz…",
      url:
        "https://oko.press/niemcy-zablokuja-nord-stream-2-same-nie-dadza-rady",
    },
    {
      title:
        'Woś bezprawnie zmienił radę parku narodowego. Na czele teolog od "grzechu ekologicznego"',
      thumb: "https://oko.press/images/2020/10/Michal-Wosc3.jpg",
      date: "2020-10-15 15:40:40",
      excerpt:
        "Michal Woś odchodząc ze stanowiska ministra środowiska chwalił się 3 października (ministrem był od 5 marca do 6 października 2020) powołanie…",
      url: "https://oko.press/wos-park-teolog-od-grzechu-ekologicznego",
    },
    {
      title:
        "PILNE! Film IPN musi zostać usunięty. Jest wyrok w procesie o wystawę w Muzeum II Wojny Światowej",
      thumb: "https://oko.press/images/2020/10/JR_23032017_022.jpg",
      date: "2020-10-15 12:37:23",
      excerpt:
        "Sąd Okręgowy w Gdańsku I Wydział Cywilny po rozpoznaniu 15 października 2020 na posiedzeniu niejawnym sprawy z powództwa Pawła Machcewicza, Pio…",
      url:
        "https://oko.press/pilne-film-ipn-musi-zostac-usuniety-jest-wyrok-w-procesie-o-wystawe-w-muzeum-ii-wojny-swiatowej",
    },
    {
      title:
        'Lekarze, Tusk i Tom Cruise. "Wiadomości" szukają winnych pandemicznego chaosu',
      thumb:
        "https://oko.press/images/2020/10/Zrzut-ekranu-2020-10-15-o-13.18.47.png",
      date: "2020-10-15 16:52:07",
      excerpt:
        "„Wiadomości” to koło ratunkowe dla rządu. Kiedy polityk obozu władzy palnie coś kompromitującego, lub gdy jest źle i trzeba narzucić ostrz…",
      url:
        "https://oko.press/lekarze-tusk-i-tom-cruise-wiadomosci-szukaja-winnych-pandemicznego-chaosu",
    },
    {
      title:
        "Bunt dyrektorów. Nie czekają dłużej na sanepid, sami zamykają szkoły. Piontkowski straszy kuratorem",
      thumb: "https://oko.press/images/2020/03/piontkowski2.jpg",
      date: "2020-10-15 14:27:42",
      excerpt:
        "Otwierając we wrześniu szkoły, ministerstwo sporządziło na szybko mechanizm reagowania na zmieniającą się sytuację pandemiczną. Misja stania…",
      url:
        "https://oko.press/bunt-dyrektorow-nie-czekaja-dluzej-na-sanepid-sami-zamykaja-szkoly-piontkowski-straszy-kuratorem",
    },
    {
      title:
        "Sadurski: Nie wierzcie w demokrację przywiezioną z Brukseli [WYWIAD]",
      thumb: "https://oko.press/images/2020/06/Sadurski.jpg",
      date: "2020-10-15 09:22:20",
      excerpt:
        '"W tej chwili główne zagrożenie demokracji wywodzi się z partii i przywódców, którzy do władzy dochodzą demokratycznie. Zdarzało się to daw…',
      url:
        "https://oko.press/sadurski-nie-wierzcie-w-demokracje-przywieziona-z-brukseli-wywiad",
    },
    {
      title:
        'Senat przegłosował „Piątkę dla zwierząt": koniec z futerkami, zostaje ubój rytualny drobiu na eksport',
      thumb: "https://oko.press/images/2020/10/DZ201014125198.jpg",
      date: "2020-10-14 21:00:16",
      excerpt:
        "Trzy raz przesuwano głosowanie - najpierw miało się odbyć o 12:30, potem o 13:00, wreszcie Senat zaczął rozstrzygać o dalszych losach ustawy o…",
      url: "https://oko.press/piatka-dla-zwierzat-w-senacie",
    },
    {
      title:
        "Ponad 100 osób zmarło. Minister kultury na kwarantannie po spotkaniu z zarażonym biskupem",
      thumb: "https://oko.press/images/2020/10/20201014_raport-pandemia.png",
      date: "2020-10-14 19:30:12",
      excerpt:
        "Ministerstwo Zdrowia poinformowało w środę 14 października o 6 526 nowych wykrytych przypadkach SARS-CoV-2. To rekordowy wynik. Tylu zakażonych j…",
      url:
        "https://oko.press/ponad-100-osob-zmarlo-minister-kultury-na-kwarantannie",
    },
    {
      title:
        "OKO.press na Dzień Nauczyciela. Sześć rzeczy, które rząd powinien zrobić natychmiast",
      thumb: "https://oko.press/images/2020/10/morawiecki_M.jpg",
      date: "2020-10-14 18:03:45",
      excerpt:
        "Po spotkaniu 13 października premiera Mateusza Morawieckiego i ministra edukacji Dariusza Piontkowskiego z przedstawicielami opozycji całkowicie jas…",
      url:
        "https://oko.press/oko-press-na-dzien-nauczyciela-szesc-rzeczy-ktore-rzad-powinien-zrobic-natychmiast",
    },
    {
      title:
        "Marian Kotleba skazany na więzienie za propagowanie faszyzmu. Kiedy polscy neonaziści?",
      thumb: "https://oko.press/images/2020/10/kotleba5.jpg",
      date: "2020-10-14 16:30:07",
      excerpt:
        "Mariana Kotlebę, lidera neofaszystowskiej Ludowej Partii Nasza Słowacja (Ľudová strana Naše Slovensko), pogrążyły trzy czeki, które – jako…",
      url:
        "https://oko.press/marian-kotleba-skazany-na-wiezienie-za-propagowanie-faszyzmu-kiedy-polscy-neonazisci",
    },
    {
      title:
        '"Każdy ma prawo do bezpiecznych i higienicznych warunków pracy". Tego chcą nauczyciele i uczniowie',
      thumb: "https://oko.press/images/2020/10/RR200901_043.jpg",
      date: "2020-10-15 08:30:01",
      excerpt:
        "Od soboty, 10 października, cała Polska jest w żółtej strefie zagrożonej koronawirusem. Obowiązuje nakaz noszenia maseczek w przestrzeniach pub…",
      url: "https://oko.press/nauczyciele-i-uczniowie-koronawirus",
    },
    {
      title:
        '214.158.441 złotych z publicznych pieniędzy na "dzieła" o. Rydzyka [WYLICZENIE OKO.PRESS]',
      thumb: "https://oko.press/images/2019/07/Tadeusz-Rydzyk.jpg",
      date: "2019-07-23 10:30:56",
      excerpt:
        "Ojciec Tadeusz Rydzyk co jakiś czas publicznie narzeka, że rząd nie dość mocno wspiera finansowo jego „dzieła”. Że związane z nim media -…",
      url: "https://oko.press/214-238-441-zl-na-dziela-o-rydzyka",
    },
    {
      title:
        "Mężczyźni w garniturach zdecydują za polskie kobiety. Wyrok TK w sprawie aborcji już za 7 dni",
      thumb: "https://oko.press/images/2020/09/aborcja.jpg",
      date: "2020-10-15 07:19:22",
      excerpt:
        "Już 22 października Trybunał Konstytucyjny zamierza wydać wyrok w sprawie konstytucyjności przerywania ciąży ze względu na ciężkie i nieulec…",
      url:
        "https://oko.press/federacja-na-rzecz-kobiet-przeciwko-zakazowi-aborcji",
    },
    {
      title:
        "Gorące lato 2020. W Dolinie Śmierci +55 °C, upały na Syberii +38 °C",
      thumb: "https://oko.press/images/2020/10/20201011_upal.png",
      date: "2020-10-14 22:00:44",
      excerpt:
        "Tegoroczne lato wpisuje się w trend: pięć najcieplejszych okresów letnich na półkuli północnej miało miejsce od 2015 roku. Globalnie okres cz…",
      url:
        "https://oko.press/gorace-lato-2020-w-dolinie-smierci-55-c-upaly-na-syberii-38-c",
    },
    {
      title:
        "Kuratorka Nowak: nauczanie o masturbacji sprzeczne z prawem. Z kościelnym na pewno, a z PiS-owskim?",
      thumb: "https://oko.press/images/2019/03/KO20160823_103017.jpg",
      date: "2020-02-05 11:31:53",
      excerpt:
        'Małopolska kurator oświaty zaatakowała 2 lutego 2020 na twitterze program edukacji seksualnej "Zdrovee Love" prowadzony od 2017 roku w Gdańsku dla…',
      url:
        "https://oko.press/kuratorka-nowak-nauczanie-o-masturbacji-sprzeczne-z-prawem",
    },
    {
      title:
        "Białorusini opowiadają o sytuacji w kraju. Coraz więcej musi uciekać przed Łukaszenką",
      thumb: "https://oko.press/images/2020/10/IMG_0114.jpg",
      date: "2020-10-10 15:46:19",
      excerpt:
        "Kilkadziesiąt osób z biało-czerwono-białymi flagami niepodległej Białorusi szło ulicami stolicy w solidarności z rodakami w ojczyźnie. Warsza…",
      url:
        "https://oko.press/bialorusini-opowiadaja-o-sytuacji-w-kraju-coraz-wiecej-musi-uciekac-przed-lukaszenka",
    },
    {
      title:
        "Tęczowe flagi na słynnej warszawskiej ulicy. W kontrze baner o „sodomskim aktywizmie”",
      thumb: "https://oko.press/images/2020/10/IMG_0207.jpg",
      date: "2020-10-10 12:27:24",
      excerpt:
        "Grupa sojuszników osób LGBT+, w tym Obywatele RP i Polskie Babcie, stanęła na Trakcie Królewskim (ulice Nowy Świat i Krawskie Przedmieście)  w…",
      url:
        "https://oko.press/teczowe-flagi-na-slynnej-warszawskiej-ulicy-w-kontrze-baner-o-sodomskim-aktywizmie",
    },
    {
      title:
        "Wycofajcie zakaz aborcji z Trybunału - apeluje ponad 100 organizacji społecznych",
      thumb: "https://oko.press/images/2019/10/Przyłębska-Piotrowicz.jpg",
      date: "2020-10-14 13:30:38",
      excerpt:
        "Ponad sto organizacji podpisało się pod apelem o odwołanie rozprawy Trybunału Konstytucyjnego zaplanowanej na 22 października 2020 i wycofanie wn…",
      url: "https://oko.press/wycofajcie-aborcje-z-trybunalu",
    },
    {
      title:
        "Rząd dał kościelnej uczelni 17,6 mln zł na nowy budynek. Z obejściem prawa",
      thumb: "https://oko.press/images/2020/10/20201011_ignatianum.png",
      date: "2020-10-13 07:51:33",
      excerpt:
        "W pierwszym półroczu 2020 znaczna część pieniędzy z rezerwy ogólnej budżetu państwa wsparła walkę z epidemią COVID-19 i jej skutkami. Mili…",
      url: "https://oko.press/morawiecki-gowin-ignatianum-budynek",
    },
    {
      title:
        "PiS chce doprowadzić do całkowitego zakazu aborcji. Już tylko 15 dni do wyroku",
      thumb: "https://oko.press/images/2020/10/Czarny-protest.jpg",
      date: "2020-10-07 15:23:30",
      excerpt:
        "Już 22 października Trybunał Konstytucyjny ma wydać wyrok w sprawie dopuszczalności przerwania ciąży ze względów embriopatologicznych. O rozs…",
      url:
        "https://oko.press/pis-chce-doprowadzic-do-calkowitego-zakazu-aborcji-juz-tylko-15-dni-do-wyroku",
    },
    {
      title:
        'List do premiera w Dzień Nauczyciela: "Ministerstwo nas zawiodło, czas na alarm w edukacji"',
      thumb: "https://oko.press/images/2020/10/nauczyciele-wykrzyknik.jpg",
      date: "2020-10-14 10:17:43",
      excerpt:
        '14 października obchodzimy Dzień Edukacji Narodowej. Z tej okazji nauczyciele przygotowali list do premiera Mateusza Morawieckiego:\r\n\r\n"To Pan powin…',
      url:
        "https://oko.press/list-do-premiera-w-dzien-nauczyciela-ministerstwo-nas-zawiodlo-czas-na-alarm-w-edukacji",
    },
    {
      title:
        "Jarosław Le Pen-Kaczyński. Prezes porównał UE do ZSRR. To język polexitu",
      thumb: "https://oko.press/images/2020/10/Kaczynski_flaga.jpg",
      date: "2020-10-14 08:11:07",
      excerpt:
        "W wywiadzie dla „Gazety Polskiej Codziennej” prezes PiS i wicepremier Jarosław Kaczyński zapowiedział, że Polska może zawetować budżet Unii…",
      url:
        "https://oko.press/jaroslaw-le-pen-kaczynski-prezes-porownal-ue-do-zsrr",
    },
    {
      title:
        "Premier na kwarantannie, czterech biskupów zakażonych – a w szpitalach o 400 pacjentów więcej [WYKRESY]",
      thumb: "https://oko.press/images/2020/10/20201013_raport-pandemia.png",
      date: "2020-10-13 21:37:31",
      excerpt:
        "Ministerstwo Zdrowia poinformowało we wtorek o 5096 nowych wykrytych przypadków SARS-CoV-2. To drugi wynik po 5300 z ubiegłego tygodnia i na razie…",
      url:
        "https://oko.press/morawiecki-na-kwarantannie-400-pacjentow-wiecej-w-szpitalach",
    },
    {
      title:
        "Morawiecki straszy: zakażenia będą się podwajać co 3 dni. Przerażonych dobije, sceptyków utwierdzi",
      thumb: "https://oko.press/images/2020/10/SK201008_0124045.jpg",
      date: "2020-10-09 09:18:28",
      excerpt:
        "Wydawałoby się, że politycy powinni się już nauczyć, jak należy mówić o pandemii: precyzyjnie, ostrożnie i prawdziwie. Nie powinni natomiast…",
      url: "https://oko.press/morawiecki-straszy-zakazenia-beda-sie-podwajac",
    },
    {
      title:
        "Od soboty cała Polska w strefie żółtej. Co się zmienia? Kiedy nosić maseczkę?",
      thumb: "https://oko.press/images/2020/10/KPRM-Morawiecki-Niedzielski.jpg",
      date: "2020-10-10 11:00:26",
      excerpt:
        "Cała Polska strefą żółtą – to może brzmieć złowieszczo. Czy od soboty musimy zamknąć się w domu? Czy zamknięte będą siłownie lub kin…",
      url:
        "https://oko.press/od-soboty-cala-polska-w-strefie-zoltej-co-sie-zmienia-kiedy-nosic-maseczke",
    },
    {
      title:
        "Jest dobrze, ale nie beznadziejnie - kulisy rozmowy Piontkowskiego i Morawieckiego z opozycją",
      thumb: "https://oko.press/images/2020/10/SK201010_0124703.jpg",
      date: "2020-10-14 08:45:54",
      excerpt:
        "13 października 2020 odbyło się pierwsze od marca pandemiczne spotkanie rządu z przedstawicielami opozycji. Trwało trzy godziny. „Dużo słów…",
      url:
        "https://oko.press/jest-dobrze-ale-nie-beznadziejnie-kulisy-rozmowy-piontkowskiego-i-morawieckiego-z-opozycja",
    },
    {
      title:
        "W Zakopanem zakażenia wędrują od szkoły do szkoły. Ludzie się boją, ale sanepid ma wytyczne z rządu",
      thumb: "https://oko.press/images/2020/10/20201012-zakopane-covid3-.png",
      date: "2020-10-12 16:18:56",
      excerpt:
        '"Nasza strategia sprawdza się nieźle" - tak sytuację w polskich szkołach ocenił w sobotę, 10 października 2020, premier Mateusz Morawiecki. I t…',
      url:
        "https://oko.press/w-zakopanem-zakazenia-wedruja-od-szkoly-do-szkoly",
    },
    {
      title:
        "Co robić, gdy podejrzewasz u siebie COVID-19? Krótki przewodnik po nowych zasadach",
      thumb: "https://oko.press/images/2020/10/JP200311_001018763.jpg",
      date: "2020-10-12 18:23:19",
      excerpt:
        "Zakażenie wirusem SARS-CoV-2 można przechodzić na różne sposoby. Duża część zakażonych w ogóle nie wie, że takie zakażenie przeszła –…",
      url:
        "https://oko.press/co-robic-gdy-podejrzewasz-u-siebie-covid-19-przewodnik",
    },
    {
      title:
        '"W Unii Europejskiej nie ma miejsca na dyskryminację osób LGBT+". KE odpowiada na apel 76 twórców',
      thumb: "https://oko.press/images/2020/10/P045962-889071.jpg",
      date: "2020-10-13 19:14:54",
      excerpt:
        '"Komisja Europejska wnikliwie przygląda się niepokojącej sytuacji osób LGBTI+ w Polsce i podjęła już działania, wchodzące w zakres jej trakta…',
      url:
        "https://oko.press/w-unii-europejskiej-nie-ma-miejsca-na-dyskryminacje-osob-lgbt-ke-odpowiada-na-apel-76-tworcow",
    },
    {
      title:
        "UWAGA: drastyczne treści. Wady i choroby, o których wolą milczeć zwolennicy zakazu aborcji",
      thumb: "https://oko.press/images/2020/10/20201014_wady.jpg",
      date: "2020-10-13 21:05:28",
      excerpt:
        "Już 22 października TK wyda wyrok w sprawie dopuszczalności przerywania ciąży ze względu na upośledzenie lub śmiertelną, nieuleczalną wadę…",
      url:
        "https://oko.press/uwaga-drastyczne-tresci-wady-i-choroby-o-ktorych-wola-milczec-zwolennicy-zakazu-aborcji",
    },
    {
      title:
        "Prokuratura ściga sędzię z Opola za interpretację prawa zgodną z ustawą",
      thumb: "https://oko.press/images/2019/09/majcher11.jpg",
      date: "2019-09-19 17:24:47",
      excerpt:
        "Sędzi Irenie Majcher z Sądu Rejonowego w Opolu prokuratura chce postawić zarzut niedopełnienia obowiązków z artykułu 231 kodeksu karnego. Pocz?…",
      url: "https://oko.press/prokuratura-sciga-sedzie-z-opola",
    },
    {
      title: "Rykowisko",
      thumb:
        "https://oko.press/images/2020/10/Zrzut-ekranu-2020-10-12-o-16.19.32.png",
      date: "2020-10-13 22:11:36",
      excerpt:
        "Jelenie, myśliwi i aktywiści z Inicjatywy Dzikie Karpaty.\r\n\r\nOkres godowy jeleni zaczyna się w połowie września i trwa około miesiąca. Byki ryc…",
      url: "https://oko.press/rykowisko",
    },
    {
      title:
        "Sędziowie o Izbie Dyscyplinarnej: to nie jest sąd, nie uznajemy uchylenia immunitetu sędzi Morawiec",
      thumb: "https://oko.press/images/2020/10/murem-za-Morawiec.jpg",
      date: "2020-10-13 20:33:12",
      excerpt:
        "Immunitet sędzi Beaty Morawiec, prezeski stowarzyszenia niepokornych sędziów Themis, nielegalna Izba Dyscyplinarna SN uchyliła w poniedziałek 12…",
      url:
        "https://oko.press/sedziowie-o-izbie-dyscyplinarnej-to-nie-jest-sad-nie-uznajemy-uchylenia-immunitetu-sedzi-morawiec",
    },
    {
      title:
        "Ptaki zabijane koszernie, krowy i lisy dręczone jeszcze cały rok. Kaczyński wybrał interesy",
      thumb: "https://oko.press/images/2020/09/IMG_2340.jpg",
      date: "2020-10-13 08:49:48",
      excerpt:
        "PiS wycofuje się z zakazu uboju rytualnego ptaków na eksport. I obiecuje odszkodowania dla hodowców zwierząt futerkowych i rzeźników, którzy st…",
      url:
        "https://oko.press/ptaki-mordowane-koszernie-krowy-i-lisy-dreczone-jeszcze-caly-rok-kaczynski-wybral-interesy",
    },
    {
      title: "Łukaszenko w więzieniu KGB. Negocjował z uwięzioną opozycją",
      thumb: "https://oko.press/images/2020/08/Białoruś-Łukaszenka.jpg",
      date: "2020-10-13 17:30:12",
      excerpt:
        "W sobotę 10 października 2020 Aleksandr Łukaszenka spotkał się z dwunastoma więźniami politycznymi w areszcie śledczym KGB, by porozmawiać -…",
      url:
        "https://oko.press/lukaszenko-w-wiezieniu-negocjowal-z-uwieziona-opozycja",
    },
    {
      title:
        "Konie w Morskim Oku, czyli albo praca, albo rzeźnia. Mit o cierpieniu zwierząt może im zaszkodzić",
      thumb: "https://oko.press/images/2020/10/Marek-Tischner.jpg",
      date: "2020-10-13 13:50:12",
      excerpt:
        "W niedzielę (11 października) w portalu OKO.press ukazał się tekst Anny Plaszczyk „Ciągną o tonę za dużo i w końcu padają. Koszmarny los k…",
      url:
        "https://oko.press/konie-w-morskim-oku-czyli-albo-praca-albo-rzeznia-mit-o-cierpieniu-zwierzat-moze-im-zaszkodzic",
    },
    {
      title:
        "“PiS chce zagłodzić polską wieś!” Czego najbardziej się boją protestujący rolnicy",
      thumb: "https://oko.press/images/2020/10/Rolnicy.jpg",
      date: "2020-10-13 11:30:45",
      excerpt:
        "Dzisiejszy (13 października 2020) protest rolników rozpoczął się przy Placu Zawiszy w Warszawie, nieopodal siedziby Prawa i Sprawiedliwości. Man…",
      url:
        "https://oko.press/pis-chce-zaglodzic-polska-wies-czego-najbardziej-sie-boja-protestujacy-rolnicy",
    },
    {
      title:
        "Arcybiskup Głódź siedem lat krył księdza, który zgwałcił 17-latkę",
      thumb: "https://oko.press/images/2019/10/sławoj-leszek-głódź.jpg",
      date: "2020-10-12 12:23:52",
      excerpt:
        "W środę, 7 października 2020, w Sądzie Okręgowym w Gdańsku zapadł prawomocny wyrok 10 lat więzienia dla księdza Michała L., który w 2011 ro…",
      url:
        "https://oko.press/arcybiskup-glodz-siedem-lat-kryl-ksiedza-ktory-zgwalcil-17-latke",
    },
    {
      title:
        "Szydło broni swojej deficytowej kopalni „Brzeszcze”. Miliard strat w czarnej dziurze PiS",
      thumb: "https://oko.press/images/2020/08/Beata-Szydło2.jpg",
      date: "2020-08-29 14:48:37",
      excerpt:
        "O planowanym zamknięciu nierentownej kopalni „Brzeszcze” mówi się w Małopolsce już od kilku lat. Temat wraca jak bumerang, powoduje protesty…",
      url: "https://oko.press/szydlo-broni-deficytowej-kopalni-brzeszcze",
    },
    {
      title:
        "Epidemia w pełnym pędzie – współczynnik reprodukcji wirusa dla Polski wynosi 1,39 [LICZBY, WYKRESY]",
      thumb: "https://oko.press/images/2020/10/20201012_raport-pandemia.png",
      date: "2020-10-12 21:27:19",
      excerpt:
        "Według obliczeń dr. Rafała Mostowego z Uniwersytetu Jagiellońskiego R(t), czyli obecny współczynnik reprodukcji wirusa w pięciu województwach:…",
      url:
        "https://oko.press/u-nas-wspolczynnik-r-139-a-w-czechach-jest-jeszcze-gorzej",
    },
    {
      title:
        'Rząd mięknie w sprawie "Piątki dla Zwierząt". W ostatniej chwili wrzuca poprawki łagodzące ustawę',
      thumb: "https://oko.press/images/2020/10/morawiecki_M.jpg",
      date: "2020-10-12 22:01:09",
      excerpt:
        "Prace nad ustawą o ochronie zwierząt przypominają szaloną jazdę rollercoasterem.\r\n\r\nNajpierw przepracowano ją w Sejmie w czasie zaledwie dwóch…",
      url:
        "https://oko.press/rzad-mieknie-w-sprawie-piatki-dla-zwierzat-w-ostatniej-chwili-wrzuca-poprawki-lagodzace-ustawe",
    },
    {
      title:
        "Nielegalna Izba Dyscyplinarna pod osłoną nocy uchyliła immunitet sędzi Beacie Morawiec",
      thumb: "https://oko.press/images/2020/10/morawiec_jakub-wlodek.jpg",
      date: "2020-10-12 22:13:43",
      excerpt:
        "Izba Dyscyplinarna uchyliła immunitet sędzi Beacie Morawiec znanej z obrony wolnych sądów. Zawiesiła ją również w obowiązkach służbowych i…",
      url: "https://oko.press/izba-dyscyplinarna-uchylila-immunitet-morawiec",
    },
    {
      title:
        "Komisja Wenecka alarmuje: jeśli Przyłębska usunie Bodnara, prawa człowieka będą zagrożone",
      thumb: "https://oko.press/images/2020/10/bodnar.jpg",
      date: "2020-10-12 17:36:23",
      excerpt:
        '"Kadencja obecnego Rzecznika Praw Obywatelskich wygasła 9 września 2020 roku; jego następca nie został jak dotąd wybrany. Jednak 17 września gru…',
      url:
        "https://oko.press/komisja-wenecka-ostrzega-przed-proba-usuniecia-rpo",
    },
    {
      title:
        '"Propozycja Niemiec jest słaba". Musimy trzymać się wartości UE, które Polska i Węgry łamią [WYWIAD]',
      thumb:
        "https://oko.press/images/2020/10/20200128_EP-099024A_JVV_038_RESIZED_XL.jpg",
      date: "2020-10-10 20:54:41",
      excerpt:
        "„Wizerunek Unii Europejskiej jako strażniczki demokracji jest systematycznie niszczony. Unia wykazuje wysoką tolerancję dla autorytarnych polityk…",
      url:
        "https://oko.press/propozycja-niemiec-jest-slaba-musimy-trzymac-sie-wartosci-ue-ktore-polska-i-wegry-lamia-wywiad",
    },
    {
      title:
        "126. Miesięcznica Smoleńska. Europosłanka Mazurek atakuje operatora OKO.press",
      thumb:
        "https://oko.press/images/2020/10/Zrzut-ekranu-2020-10-12-o-16.00.19.png",
      date: "2020-10-12 17:10:55",
      excerpt:
        "Środki ostrożności jak zwykle w najostrzejszym trybie. Ruch uliczny zatrzymany. Połowa rządu, władz Sejmu oraz posłowie i europosłowie PiS jak…",
      url:
        "https://oko.press/126-miesiecznica-smolenska-europoslanka-mazurek-atakuje-operatora-oko-press",
    },
    {
      title:
        "Rafał Gaweł dostał azyl w Norwegii – czyli o jednej z największych zbrodni rządów PiS",
      thumb: "https://oko.press/images/2020/10/ML130722_014.jpg",
      date: "2020-10-11 18:02:43",
      excerpt:
        "Dzieje się tak mimo heroicznego oporu sędziów, którzy narażając karierę, orzekają w zgodzie z prawem i sumieniem. Autorytet sądownictwa legł…",
      url: "https://oko.press/rafal-gawel-dostal-azyl-w-norwegii",
    },
    {
      title:
        "Fragment parku narodowego ma trafić w ręce zakonników. Rozporządzenie last minute ministra Wosia",
      thumb: "https://oko.press/images/2020/10/Michal-Wos-1.jpg",
      date: "2020-10-10 15:58:04",
      excerpt:
        "Projekt rozporządzenia zakłada usunięcie z granic ŚPN 1,3 ha na Łyścu oraz włączenie do ŚPN ponad 60 ha izolowanej enklawy leśnej pod Grzego…",
      url:
        "https://oko.press/fragment-parku-narodowego-ma-trafic-w-rece-zakonnikow-rozporzadzenie-last-minute-ministra-wosia",
    },
    {
      title:
        "Największy proces faszystów od czasów Norymbergi. Grecja rozprawia się ze Złotym Świtem",
      thumb:
        "https://oko.press/images/2020/10/Golden_Dawn_members_at_rally_in_Athens_2015.jpg",
      date: "2020-10-10 13:44:14",
      excerpt:
        "Sąd w Atenach uznał skrajnie prawicową partię Złoty Świt za organizację przestępczą, a siedmiu jej członków za szefów organizacji przestę…",
      url:
        "https://oko.press/najwiekszy-proces-faszystow-od-czasow-norymbergi-grecja-rozprawia-sie-ze-zlotym-switem",
    },
    {
      title:
        "Skłonności zoofilne, dyskryminacja osób heteroseksualnych i inne mądrości z debaty w CSW",
      thumb: "https://oko.press/images/2020/10/Zrzut-ekranu-571.png",
      date: "2020-10-09 21:07:26",
      excerpt:
        "Piotr Bernatowicz, od 1 stycznia 2020 dyrektor Centrum Sztuki Współczesnej, którego na stanowisko mianował bez konkursu minister kultury Piotr Gl…",
      url:
        "https://oko.press/produkcja-z-abortowanych-plodow-zoofilia-dyskryminacja-osob-hetero-i-inne-madrosci-z-debaty-w-csw",
    },
    {
      title:
        "To oni chcą całkowitego zakazu aborcji. Publikujemy nazwiska posłów, którzy poparli wniosek do TK",
      thumb:
        "https://oko.press/images/2018/09/z19891726VDemonstracja-przeciwko-zakazowi-aborcji-w-Warszawi.jpg",
      date: "2020-10-09 17:44:13",
      excerpt:
        "22 października Trybunał Konstytucyjny ma wydać wyrok w sprawie dopuszczalności przerwania ciąży ze względów embriopatologicznych, czyli wted…",
      url:
        "https://oko.press/to-oni-chca-calkowitego-zakazu-aborcji-publikujemy-nazwiska-poslow-ktorzy-poparli-wniosek-do-tk",
    },
    {
      title:
        "W Polsce coraz mniej wolnych respiratorów, chaos w szpitalach. Trumpa choroba niczego nie nauczyła",
      thumb: "https://oko.press/images/2020/10/20201011_raport-pandemia.png",
      date: "2020-10-11 21:30:49",
      excerpt:
        "Chociaż rząd uważa, że ma COVID-19 pod kontrolą, liczba osób hospitalizowanych i zajętych respiratorów niebezpiecznie rośnie. Liczba nowo stw…",
      url:
        "https://oko.press/w-polsce-coraz-mniej-wolnych-respiratorow-chaos-w-szpitalach",
    },
    {
      title:
        '„Wiadomości" TVP uderzają w sędzię Beatę Morawiec przeciekiem z akt prokuratury',
      thumb: "https://oko.press/images/2020/10/JP200921_001027799.jpg",
      date: "2020-10-11 20:19:42",
      excerpt:
        "Poświęcony sędzi Morawiec kilkuminutowy materiał z soboty 10 października zatytułowano „»Wiadomości« ujawniają dowody patologii”. Prowad…",
      url: "https://oko.press/tvp-uderza-w-sedzie-beate-morawiec",
    },
    {
      title:
        "Rząd PiS montuje w regionie koalicję przeciw konwencji stambulskiej [śledztwo bałkańskich reporterów]",
      thumb:
        "https://oko.press/images/2020/10/Zrzut-ekranu-2020-10-11-o-12.55.32.png",
      date: "2020-10-11 16:00:39",
      excerpt:
        "OKO.press publikuje artykuł rumuńskiej dziennikarki i aktywistki Claudii Ciobanu*, który ukazał się jako materiał śledczy Bałkańskiej Sieci D…",
      url:
        "https://oko.press/pis-montuje-w-regionie-koalicje-przeciw-konwencji-stambulskiej",
    },
    {
      title:
        "Różaniec jest ich bronią. Jak radykalne grupy zawłaszczają Kościół katolicki w Polsce",
      thumb: "https://oko.press/images/2020/10/zawierzenie5.jpg",
      date: "2020-10-11 12:16:12",
      excerpt:
        "Tak wyglądają niektóre męskie wspólnoty katolickie w Polsce. Religijny parasol, jaki roztaczają nad nimi duchowni, szkodzi. Te ruchy powstają b…",
      url:
        "https://oko.press/zolnierze-chrystusa-jak-radykalne-grupy-zawlaszczaja-kosciol-katolicki",
    },
    {
      title:
        "Ciągną o tonę za dużo i w końcu padają. Koszmarny los koni z Morskiego Oka",
      thumb: "https://oko.press/images/2020/10/zdjecia_jawor.jpg",
      date: "2020-10-11 09:57:59",
      excerpt:
        "Anna Plaszczyk z Fundacji Viva! w walkę z transportem konnym do Morskiego Oka w Tatrzańskim Parku Narodowym (TPN) zaangażowała się sześć lat te…",
      url: "https://oko.press/koszmarny-los-koni-z-morskiego-oka",
    },
    {
      title: "Prezes Polski i wkurzona Polska Babcia [FILM]",
      thumb: "https://oko.press/images/2020/10/Gdzie-wrak.jpg",
      date: "2020-10-10 21:49:54",
      excerpt:
        "Prezesa Kaczyńskiego nie ochroniła ani Policja i oficerowie Służby Ochrony Państwa, ani prywatni ochroniarze.\r\n\r\n„Pod Trybunał Stanu pójdzies…",
      url: "https://oko.press/prezes-polski-i-wkurzona-polska-babcia-film",
    },
    {
      title:
        "Przypominamy Franciszkowi: w Polsce niegodni biskupi nadal sprawują urzędy. Oto 30 nazwisk i przewin",
      thumb: "https://oko.press/images/2020/10/MNIE191108_200.jpg",
      date: "2020-10-09 22:32:59",
      excerpt:
        "Papież Franciszek ponad półtora roku temu ucałował rękę Marka Lisińskiego, domniemanej ofiary kościelnej pedofilii. Piękny gest, ale zdecydo…",
      url:
        "https://oko.press/przypominamy-franciszkowi-polsce-niegodni-biskupi-nadal-sprawuja-urzedy-oto-29-nazwisk-i-przewin",
    },
    {
      title:
        "Fardin idzie, Anwar głoduje, Parwana pisze książkę. O co walczą uchodźcy w Grecji? [REPORTAŻ OKO.PRESS]",
      thumb: "https://oko.press/images/2020/10/Ilu_Migranci_.png",
      date: "2020-10-06 08:40:02",
      excerpt:
        "Doirani to najbliższa grecka stacja kolejowa przy macedońskiej granicy. Na ziemi porzucony but, trochę dalej spodnie, bluza, puszki po konserwach i…",
      url: "https://oko.press/o-co-walcza-uchodzcy-w-grecji-reportaz-oko-press",
    },
    {
      title: "Jarosław Kaczyński nie istnieje [ROZMOWA]",
      thumb: "https://oko.press/images/2020/10/DZ200926121911.jpg",
      date: "2020-10-10 08:57:57",
      excerpt:
        "Strateg polityczny, Tomasz Karoń*, który pracował dla PiS, Nowoczesnej i Lewicy, mówi OKO.press:\r\n\r\n \tPodczas pandemii Polacy wyszli poza swój na…",
      url:
        "https://oko.press/jaroslaw-kaczynski-nie-istnieje-panstwo-pis-sie-konczy-rozmowa",
    },
    {
      title:
        "Dzika dolina w Gliwicach pójdzie pod topór. Mieszkańcy: miasto postawiło nas przed faktem dokonanym",
      thumb: "https://oko.press/images/2020/10/Gasiorek.jpg",
      date: "2020-10-09 15:39:19",
      excerpt:
        "Wilcze Doły w Gliwicach to spory teren porośnięty drzewami i krzewami, położony wśród pół uprawnych. Choć niedaleko przebiega zachodnia obwo…",
      url:
        "https://oko.press/dzika-doline-w-gliwicach-zaleje-beton-mieszkancy-miasto-postawilo-nas-przed-faktem-dokonanym",
    },
    {
      title:
        "Aż 22 proc. pozytywnych testów: to rekord Europy. Epidemia wymyka się spod kontroli? [WYKRESY, LICZBY]",
      thumb: "https://oko.press/images/2020/10/20201009_raport-pandemia.png",
      date: "2020-10-09 13:42:07",
      excerpt:
        "Dzisiejszy rekord liczby nowych zakażeń może robić nieprzyjemne wrażenie. Ale nie on jest najgorszy. Ministerstwo Zdrowia poinformowało o zaledw…",
      url:
        "https://oko.press/az-22-proc-pozytywnych-testow-to-rekord-europy-epidemia-wymyka-sie-spod-kontroli-wykresy-liczby",
    },
    {
      title:
        "Jest źle - rekord zgonów i mnóstwo zakażeń. Pobudka rządu: tej epidemii jednak trzeba się bać",
      thumb: "https://oko.press/images/2020/10/maseczka_zolnierz.jpg",
      date: "2020-10-06 14:34:52",
      excerpt:
        '"Cieszę się, że coraz mniej obawiamy się koronawirusa i epidemii. To dobre podejście, bo Covid-19 jest w odwrocie, już nie musimy się go bać"…',
      url:
        "https://oko.press/jest-zle-rekord-zgonow-i-mnostwo-zakazen-pobudka-rzadu-tej-epidemii-jednak-trzeba-sie-bac",
    },
    {
      title:
        "Morawiecki podał nazwiska: dyplomacją pokieruje Rau, zdrowiem - Niedzielski. Szef MSZ bronił ONR",
      thumb: "https://oko.press/images/2020/08/MJJ200820_050116988.jpg",
      date: "2020-08-20 20:47:58",
      excerpt:
        "Na konferencji prasowej 20 sierpnia 2020 premier Mateusz Morawiecki ogłosił nazwiska osób, które zastąpią odchodzących ministrów zdrowia i spr…",
      url:
        "https://oko.press/morawiecki-podal-nazwiska-dyplomacja-pokieruje-rau-zdrowiem-niedzielski-szef-msz-bronil-onr",
    },
    {
      title:
        "Europa wycofuje się z solidarnej relokacji uchodźców. A co, jeśli to Polska będzie jej potrzebować?",
      thumb: "https://oko.press/images/2020/10/FLN_3072.jpg",
      date: "2020-10-09 08:21:02",
      excerpt:
        "Komisja Europejska ogłosiła nowy pakiet o azylu i migracji  23 września, niedługo po tym, jak na greckiej wyspie Lesbos spłonęła Moria - najwi…",
      url:
        "https://oko.press/europa-wycofuje-sie-z-solidarnej-relokacji-uchodzcow-a-co-jesli-to-polska-bedzie-jej-potrzebowac",
    },
    {
      title:
        "Schreiber usiłuje wybielić premiera. Jego słowa to wyjątkowo bezczelna manipulacja",
      thumb: "https://oko.press/images/2020/10/schreiber.jpg",
      date: "2020-10-08 21:55:59",
      excerpt:
        "W polityce zdarzają się sprytne manipulacje, przeinaczenia, półprawdy, małe kłamstewka. Od czasu do czasu słyszymy też bezczelne kłamstwa, kt…",
      url: "https://oko.press/schreiber-klamie-by-wybielic-premiera",
    },
    {
      title:
        "Nowy projekt migracyjny UE to rozczarowanie. Zamiast na uchodźcach, skupiono się na deportacjach",
      thumb:
        "https://oko.press/images/2020/09/1280px-20151030_Syrians_and_Iraq_refugees_arrive_at_Skala_Sykamias_Lesvos_Greece_2.jpg",
      date: "2020-09-25 11:49:22",
      excerpt:
        "W środę 23 września 2020 Komisja Europejska przedstawiła długo wyczekiwany projekt nowego system zarządzania migracjami i przyznawaniem ochrony…",
      url:
        "https://oko.press/relokacja-uchodzcow-nowy-projekt-ue-to-rozczarowanie",
    },
    {
      title:
        "Zamknięty fundusz emerytalny zakonu PC. Przyjaciele z pierwszej partii Kaczyńskiego zarabiają miliony",
      thumb:
        "https://oko.press/images/2020/10/20201007-kaczynski-glapinski-lipinski.png",
      date: "2020-10-08 18:46:42",
      excerpt:
        "Od 6 października 2020 roku Jarosław Kaczyński nie jest już tylko „szeregowym posłem PiS”, lecz wicepremierem rządu. Wkrótce ma zostać tak…",
      url:
        "https://oko.press/zamkniety-fundusz-emerytalny-zakonu-pc-przyjaciele-z-pierwszej-partii-kaczynskiego-zarabiaja-miliony",
    },
  ],
};

module.exports = () => {
  const posts = dataWithoutIndexes.posts.map((post, index) => {
    post.id = index + 1;
    return post;
  });

  return {posts}
};
