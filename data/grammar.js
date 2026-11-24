/* =====================================================================
   VoxLearn – Gramer Öğrenme Alanı verisi (data/grammar.js)
   index.html içindeki grammarTopicsData'ya yüklenirken eklenir.

   GRAMMAR_PLUS[konuId] = mevcut konulara eklenen öğrenme alanları:
     ozet    : Tek cümlede ana fikir (konu kartında ve dersin başında).
     sinyal  : Bu yapıyı çağıran ipucu kelimeler / zarflar.
     tr      : Türkçe ile karşılaştırma (Türk öğrencinin takıldığı nokta).
     incelik : Kuralın istisnaları ve sınavda sorulan ayrıntılar (liste).
     hatalar : Ek sık hatalar [{y: yanlış, d: doğru, n: açıklama}].
     test    : Mini test [{s: boşluklu cümle (___), o: seçenekler, c: doğru indeks, n: açıklama}].
     ilgili  : İlgili konu id'leri.

   GRAMMAR_NEW[seviye] = yeni konular (mevcut şema + yukarıdaki alanlar).
     sonra   : Listede hangi konudan sonra gösterileceği (id).

   Seviye yerleşimi: Cambridge English Grammar Profile ve British Council
   LearnEnglish Grammar (A1–C1) düzeyleri esas alınmıştır; bazı konular
   kaynaklarda birden fazla düzeyde geçer.
   ===================================================================== */

const GRAMMAR_PLUS = {

  /* ----------------------------- A1 ----------------------------- */
  "a1-to-be": {
    ozet: "Cümlede hareket fiili yoksa ‘olmak’ anlamını am / is / are taşır: I am tired = Yorgunum.",
    sinyal: ["yaş: I am 20", "meslek: She is a nurse", "yer: We are at home", "duygu: They are happy"],
    tr: "Türkçede ‘-im, -sin, -dir’ ekiyle yaptığımız şeyi İngilizce ayrı bir kelimeyle yapar. ‘Ben öğrenciyim’ → I am a student. To be atlanırsa (I student) cümle kurulmamış olur.",
    incelik: [
      "Kısaltmalar konuşmada çok yaygındır: I'm, you're, he's, it's, we're, they're.",
      "Olumsuzda iki kısaltma da doğrudur: she isn't = she's not, they aren't = they're not. Ama ‘I amn't’ yoktur; I'm not denir.",
      "Kısa cevapta kısaltma kullanılmaz: Are you tired? – Yes, I am. (Yes, I'm. ✗)",
      "Yaş, açlık, susuzluk, üşüme to be ile söylenir: I am hungry / cold / 30 (years old)."
    ],
    hatalar: [
      { y: "She a doctor.", d: "She is a doctor.", n: "Fiil olmayan cümlede to be atlanmaz." },
      { y: "Is she is your sister?", d: "Is she your sister?", n: "Soruda is başa gelir; ikinci kez yazılmaz." }
    ],
    test: [
      { s: "My parents ___ teachers.", o: ["is", "are", "am"], c: 1, n: "My parents = they → are." },
      { s: "I ___ not hungry right now.", o: ["is", "are", "am"], c: 2, n: "I ile yalnız am kullanılır." },
      { s: "___ your brother at school today?", o: ["Is", "Are", "Does"], c: 0, n: "Your brother = he → Is; soru için to be başa geçer, do/does gerekmez." },
      { s: "We ___ from Izmir. We aren't from Ankara.", o: ["am", "is", "are"], c: 2, n: "We → are." }
    ],
    ilgili: ["a1-pronouns", "a1-there-is-are", "a1-wh-questions"]
  },

  "a1-pronouns": {
    ozet: "Özne zamiri fiilden önce gelir ve cümlede atlanamaz: I, you, he, she, it, we, they.",
    sinyal: ["cümlenin başı (özne yeri)", "fiilden hemen önce"],
    tr: "Türkçede özne fiil ekinden anlaşılır (‘Geliyorum’). İngilizcede fiil kişiyi göstermediği için zamir her zaman yazılır: I am coming. ‘Am coming’ ✗.",
    incelik: [
      "‘O’ için üç seçenek var: he (erkek), she (kadın), it (cansız, hayvan, bebek/cinsiyet bilinmiyorsa).",
      "Hava, saat ve mesafe cümlelerinde boş özne olarak it kullanılır: It is raining. It is 5 o'clock.",
      "I her zaman büyük harfle yazılır, cümle ortasında bile.",
      "Cinsiyeti belirtilmeyen tek kişi için günümüz İngilizcesinde they da kullanılır: Someone left their bag."
    ],
    hatalar: [
      { y: "Is raining today.", d: "It is raining today.", n: "Hava cümlelerinde ‘it’ öznesi atlanmaz." },
      { y: "My sister she is a doctor.", d: "My sister is a doctor.", n: "İsim özne varken ayrıca zamir eklenmez." }
    ],
    test: [
      { s: "Look at that cat! ___ is so cute.", o: ["He", "It", "They"], c: 1, n: "Hayvan, cinsiyet belirtilmediğinde → it." },
      { s: "Ali and I are friends. ___ play football together.", o: ["They", "We", "Us"], c: 1, n: "‘Ali ve ben’ = biz → we." },
      { s: "___ is cold today. Wear a coat.", o: ["It", "This", "There"], c: 0, n: "Hava durumunda boş özne it." },
      { s: "My parents are at work. ___ come home at six.", o: ["They", "Them", "Their"], c: 0, n: "Özne yerinde özne zamiri: they." }
    ],
    ilgili: ["a1-possessives", "a1-to-be"]
  },

  "a1-present-simple": {
    ozet: "Rutinler, alışkanlıklar ve genel gerçekler için fiilin yalın hâli; he/she/it ile fiile -s eklenir.",
    sinyal: ["always", "usually", "often", "sometimes", "never", "every day / week", "on Mondays", "once a week"],
    tr: "Türkçedeki geniş zamana (‘içerim’) ve çoğu zaman ‘-iyorum’ ile söylediğimiz alışkanlıklara karşılık gelir: ‘Her sabah koşuyorum’ → I run every morning (I am running ✗).",
    incelik: [
      "-s yazımı: -s, -sh, -ch, -x, -o → -es (watches, goes); ünsüz + y → -ies (studies); ünlü + y → -s (plays).",
      "have → has (he has), do → does, go → goes.",
      "Sıklık zarfı ana fiilden önce, to be'den sonra gelir: She often reads. / She is often late.",
      "Tarifeli gelecek için de kullanılır: The train leaves at 7:30 tomorrow."
    ],
    hatalar: [
      { y: "She go to work by bus.", d: "She goes to work by bus.", n: "He/she/it ile olumluda fiile -s/-es eklenir." },
      { y: "Does she works here?", d: "Does she work here?", n: "-s yalnız does'ta kalır; ana fiil yalın olur." },
      { y: "I am usually get up at 7.", d: "I usually get up at 7.", n: "Present Simple'da to be + fiil birlikte kullanılmaz." }
    ],
    test: [
      { s: "My father ___ the newspaper every morning.", o: ["read", "reads", "is read"], c: 1, n: "He → reads." },
      { s: "___ your sister speak French?", o: ["Do", "Does", "Is"], c: 1, n: "Sister = she → Does + yalın fiil." },
      { s: "We ___ like horror films.", o: ["doesn't", "don't", "aren't"], c: 1, n: "We → don't + V1." },
      { s: "She ___ English at university.", o: ["studys", "studies", "studyes"], c: 1, n: "Ünsüz + y → -ies: studies." },
      { s: "Water ___ at 100 °C.", o: ["boils", "is boiling", "boil"], c: 0, n: "Bilimsel gerçek → Present Simple, it → boils." }
    ],
    ilgili: ["a1-adverbs-frequency", "a1-present-continuous"]
  },

  "a1-present-continuous": {
    ozet: "Şu anda ya da bu günlerde süren, geçici eylemler: am / is / are + V-ing.",
    sinyal: ["now", "right now", "at the moment", "Look!", "Listen!", "today", "this week", "these days", "currently"],
    tr: "Türkçedeki ‘-iyor’ eki hem şimdiki ânı hem alışkanlığı anlatabilir; İngilizcede bu ikisi ayrılır. Şu an: I am reading. Alışkanlık: I read every night.",
    incelik: [
      "-ing yazımı: sessiz -e düşer (make → making); tek heceli ünsüz-ünlü-ünsüz sonu ikilenir (run → running, sit → sitting); -ie → -ying (lie → lying).",
      "Durum fiilleri (know, like, love, want, need, believe, understand, belong) genellikle -ing almaz.",
      "Planlanmış yakın gelecek için de kullanılır: I'm meeting Ayşe tomorrow at 6.",
      "always + Present Continuous sinir bozucu alışkanlık bildirir: He is always losing his keys!"
    ],
    hatalar: [
      { y: "I am knowing the answer.", d: "I know the answer.", n: "know durum fiilidir, -ing almaz." },
      { y: "She is studing now.", d: "She is studying now.", n: "study → studying (y korunur)." }
    ],
    test: [
      { s: "Be quiet! The baby ___.", o: ["sleeps", "is sleeping", "sleep"], c: 1, n: "Şu an süren eylem." },
      { s: "I ___ what you mean.", o: ["am understanding", "understand", "understanding"], c: 1, n: "understand durum fiili." },
      { s: "They ___ a new house this year.", o: ["are building", "builds", "is building"], c: 0, n: "Bu yıl süren geçici süreç; they → are." },
      { s: "Look! It ___ again.", o: ["snows", "is snowing", "snowing"], c: 1, n: "Look! sinyali → şimdi." }
    ],
    ilgili: ["a1-present-simple", "a2-future"]
  },

  "a1-articles": {
    ozet: "a/an: tekil sayılabilen bir şeyden ilk kez, genel olarak; the: herkesin bildiği ya da daha önce geçen belirli şey.",
    sinyal: ["ilk kez anılan → a/an", "ikinci kez anılan → the", "tek olan → the sun, the moon", "meslek → a / an"],
    tr: "Türkçede belirsizlik ‘bir’ ile, belirlilik çoğu zaman bağlamla anlatılır. İngilizcede tekil sayılabilen ismin önü boş kalamaz: ‘Kitap okuyorum’ → I'm reading a book / the book.",
    incelik: [
      "a/an seçimi yazıya değil sese göre: an hour (h okunmaz), an MBA (em-), a university (yu-), a European (yu-).",
      "Genel konuşmada çoğul ve sayılamayan isimlerle artikel kullanılmaz: I like cats. Water is important.",
      "Kalıplar: go to school / to bed / to work (artikelsiz), play the guitar, play football, have breakfast.",
      "the ile kullanılanlar: okyanus, nehir, sıradağ (the Alps), çoğul ülke adları (the USA, the Netherlands)."
    ],
    hatalar: [
      { y: "I need a information.", d: "I need some information.", n: "Sayılamayan isim a/an almaz." },
      { y: "The life is beautiful.", d: "Life is beautiful.", n: "Genel anlamdaki soyut kavram artikelsiz kullanılır." }
    ],
    test: [
      { s: "She is ___ honest person.", o: ["a", "an", "the"], c: 1, n: "honest ‘on-’ diye ünlüyle okunur → an." },
      { s: "I saw a dog in the park. ___ dog was very big.", o: ["A", "An", "The"], c: 2, n: "İkinci kez anılıyor → the." },
      { s: "My brother wants to be ___ engineer.", o: ["a", "an", "—"], c: 1, n: "Meslek + ünlü ses → an." },
      { s: "___ moon goes around the Earth.", o: ["A", "The", "—"], c: 1, n: "Tek olan şey → the." },
      { s: "He goes to ___ school by bus.", o: ["the", "a", "—"], c: 2, n: "go to school kalıbı artikelsiz." }
    ],
    ilgili: ["a1-plural-nouns", "a2-countable-uncountable"]
  },

  "a1-plural-nouns": {
    ozet: "Çoğul genellikle -s ile yapılır; yazım kuralları ve ezberlenecek düzensiz çoğullar vardır.",
    sinyal: ["two, three, many", "some + çoğul", "these / those", "there are"],
    tr: "Türkçede sayıdan sonra isim tekil kalır (‘üç kitap’). İngilizcede ikiden itibaren isim çoğul olur: three books (three book ✗).",
    incelik: [
      "-f / -fe → -ves: knife → knives, leaf → leaves, wife → wives (ama roof → roofs).",
      "-o ile bitenlerin bir kısmı -es alır: potatoes, tomatoes, heroes; photos, pianos, radios -s alır.",
      "Düzensiz: man–men, woman–women, child–children, foot–feet, tooth–teeth, mouse–mice, person–people.",
      "Tekil-çoğul aynı: sheep, fish, deer, series. People zaten çoğuldur: People are... (peoples ✗ – ‘halklar’ hariç)."
    ],
    hatalar: [
      { y: "I have two baby.", d: "I have two babies.", n: "Ünsüz + y → -ies." },
      { y: "My foots are cold.", d: "My feet are cold.", n: "foot → feet (düzensiz)." }
    ],
    test: [
      { s: "There are three ___ on the table.", o: ["knifes", "knives", "knife"], c: 1, n: "-fe → -ves." },
      { s: "Brush your ___ twice a day.", o: ["tooths", "teeth", "teeths"], c: 1, n: "tooth → teeth." },
      { s: "How many ___ live in this city?", o: ["person", "people", "peoples"], c: 1, n: "Kişi çoğulu → people." },
      { s: "We bought two ___ of milk.", o: ["boxs", "boxes", "box"], c: 1, n: "-x → -es." }
    ],
    ilgili: ["a1-articles", "a2-countable-uncountable"]
  },

  "a1-there-is-are": {
    ozet: "Bir yerde bir şeyin ‘var / yok’ olduğunu söylemenin kalıbı: There is + tekil, There are + çoğul.",
    sinyal: ["var / yok", "in the room", "near here", "any / some", "How many ... are there?"],
    tr: "‘Odada bir masa var’ → There is a table in the room. ‘Benim bir arabam var’ ise sahiplik bildirdiği için There is değil, I have a car olur.",
    incelik: [
      "Liste verirken fiil ilk isme uyar: There is a pen and two books on the desk.",
      "Geçmiş: there was / there were; gelecek: there will be.",
      "Sayılamayan isimler tekil fiil alır: There is some milk.",
      "Kısa cevap: Is there a bank near here? – Yes, there is. / No, there isn't."
    ],
    hatalar: [
      { y: "Have a lot of people in the park.", d: "There are a lot of people in the park.", n: "‘Var’ anlamında have değil there is/are." },
      { y: "There is many cars.", d: "There are many cars.", n: "Çoğul isim → there are." }
    ],
    test: [
      { s: "___ a supermarket near my house.", o: ["There is", "There are", "It is"], c: 0, n: "Tekil → there is." },
      { s: "___ any eggs in the fridge?", o: ["Is there", "Are there", "Have"], c: 1, n: "eggs çoğul → are there." },
      { s: "There ___ much water in the bottle.", o: ["isn't", "aren't", "don't"], c: 0, n: "water sayılamaz → isn't." },
      { s: "There ___ a lot of students in the class yesterday.", o: ["was", "were", "are"], c: 1, n: "Geçmiş + çoğul → were." }
    ],
    ilgili: ["a2-some-any-much-many", "a1-prepositions"]
  },

  "a1-can-cant": {
    ozet: "can + yalın fiil: yetenek, olasılık, izin ve rica. Her kişide aynı kalır.",
    sinyal: ["yetenek: swim, drive, speak", "izin: Can I ...?", "rica: Can you ...?"],
    tr: "Türkçedeki ‘-ebil’ ekine karşılık gelir: ‘Yüzebilirim’ → I can swim. Olumsuz ‘-eme’: I can't swim.",
    incelik: [
      "cannot bitişik yazılır; can not ayrı yazımı yalnız özel vurguda görülür.",
      "Geçmişte yetenek: could / couldn't. Gelecekte ve diğer zamanlarda: be able to (I will be able to drive).",
      "Daha kibar rica: Could you open the window, please?",
      "Telaffuzda can genellikle zayıf okunur (kın), can't ise vurgulu (kaant / kænt)."
    ],
    hatalar: [
      { y: "Can you to help me?", d: "Can you help me?", n: "Modalden sonra to gelmez." },
      { y: "I will can come.", d: "I will be able to come.", n: "İki modal yan yana gelmez; be able to kullanılır." }
    ],
    test: [
      { s: "My grandmother ___ use a smartphone.", o: ["can", "cans", "can to"], c: 0, n: "can özneye göre değişmez." },
      { s: "___ I open the window? It's hot.", o: ["Can", "Do", "Am"], c: 0, n: "İzin isteme → Can I...?" },
      { s: "I ___ swim when I was five.", o: ["can", "could", "can't to"], c: 1, n: "Geçmişte yetenek → could." },
      { s: "Penguins ___ fly.", o: ["can't", "don't can", "aren't"], c: 0, n: "Olumsuz yetenek → can't." }
    ],
    ilgili: ["a2-should-must-have-to", "b1-modals-deduction"]
  },

  "a1-prepositions": {
    ozet: "at nokta, on yüzey/gün, in kapalı alan/uzun dönem: genelden özele in → on → at.",
    sinyal: ["at + saat", "on + gün / tarih", "in + ay / yıl / mevsim", "at home / at work", "on the bus", "in the car"],
    tr: "Türkçedeki ‘-de/-da’ tek ekken İngilizcede üç edat vardır. ‘Evde’ at home, ‘odada’ in the room, ‘masada’ on the table.",
    incelik: [
      "Taşıtlar: büyük/ayakta durulan taşıtta on (on the bus, on a plane, on a bike), küçük kapalı taşıtta in (in a car, in a taxi).",
      "in the morning / afternoon / evening ama at night; on Monday morning (belli gün + dilim → on).",
      "this, next, last, every önünde edat kullanılmaz: next Monday (on next Monday ✗).",
      "Adres: in + sokak/şehir (in Bağdat Street), at + tam adres (at 15 Bağdat Street), on + kat (on the second floor)."
    ],
    hatalar: [
      { y: "I'll see you on next Friday.", d: "I'll see you next Friday.", n: "next/last/this önünde edat yok." },
      { y: "She is in the bus.", d: "She is on the bus.", n: "Otobüs, tren, uçak → on." }
    ],
    test: [
      { s: "The film starts ___ 8 p.m.", o: ["in", "on", "at"], c: 2, n: "Saat → at." },
      { s: "My birthday is ___ 3rd May.", o: ["in", "on", "at"], c: 1, n: "Tam tarih → on." },
      { s: "We usually go on holiday ___ August.", o: ["in", "on", "at"], c: 0, n: "Ay → in." },
      { s: "Your keys are ___ the kitchen table.", o: ["on", "in", "at"], c: 0, n: "Yüzey → on." },
      { s: "I can't sleep ___ night.", o: ["in", "on", "at"], c: 2, n: "Kalıp: at night." }
    ],
    ilgili: ["a1-there-is-are"]
  },

  /* ----------------------------- A2 ----------------------------- */
  "a2-past-simple": {
    ozet: "Geçmişte belli bir zamanda başlayıp bitmiş eylemler: düzenli fiillerde -ed, düzensizlerde V2.",
    sinyal: ["yesterday", "last week / year", "two days ago", "in 2019", "when I was a child", "then"],
    tr: "Türkçedeki ‘-di’li geçmişe karşılık gelir: ‘Dün aradım’ → I called yesterday. ‘-miş’li geçmiş (duyulan geçmiş) için ayrı bir zaman yoktur; I heard / apparently ile anlatılır.",
    incelik: [
      "-ed telaffuzu: /t/ (worked), /d/ (played), /ɪd/ yalnız t/d ile biten fiillerde (wanted, needed).",
      "Yazım: stop → stopped, study → studied, play → played, live → lived.",
      "to be'nin geçmişi was/were'dir; soru ve olumsuzda did kullanılmaz: Were you at home? (Did you be ✗).",
      "Özne soruyorsa did gelmez: Who called you? (Who did call ✗)."
    ],
    hatalar: [
      { y: "Did you saw him?", d: "Did you see him?", n: "Did varsa fiil V1." },
      { y: "I was go to the cinema.", d: "I went to the cinema.", n: "was + fiil birlikte kullanılmaz." }
    ],
    test: [
      { s: "We ___ to Antalya last summer.", o: ["go", "went", "gone"], c: 1, n: "last summer → V2: went." },
      { s: "She ___ the email yesterday.", o: ["didn't send", "didn't sent", "not sent"], c: 0, n: "didn't + V1." },
      { s: "___ you at the party on Saturday?", o: ["Did", "Was", "Were"], c: 2, n: "to be geçmişi; you → were." },
      { s: "They ___ the bus because they were late.", o: ["missed", "misses", "have missed"], c: 0, n: "Bitmiş geçmiş eylem → missed." }
    ],
    ilgili: ["a2-irregular-verbs", "b1-pc", "a2-present-perfect-intro"]
  },

  "a2-irregular-verbs": {
    ozet: "Düzensiz fiillerin V2 ve V3 hâlleri kurala bağlı değildir; gruplar hâlinde ezberlemek en kolay yoldur.",
    sinyal: ["Past Simple → V2", "have/has/had + V3", "edilgen (be + V3)"],
    tr: "Türkçede tüm fiiller aynı ekleri alır; İngilizcede en sık kullanılan fiillerin çoğu düzensizdir. Önce en sık 50 fiili öğrenmek konuşmanın büyük kısmını karşılar.",
    incelik: [
      "Üçü aynı: cut–cut–cut, put, let, set, hit, cost, shut, hurt.",
      "V2 = V3: buy–bought–bought, bring, think, teach, catch; send–sent, spend, build; keep–kept, sleep, feel, leave.",
      "Ünlü değişimi i–a–u: drink–drank–drunk, swim, sing, ring, begin.",
      "-en ile biten V3: take–took–taken, speak–spoke–spoken, write–wrote–written, eat–ate–eaten.",
      "read üç hâlde de aynı yazılır ama V2/V3 /red/ okunur."
    ],
    hatalar: [
      { y: "I have went there.", d: "I have gone there.", n: "have/has'tan sonra V3: gone." },
      { y: "He teached me English.", d: "He taught me English.", n: "teach → taught → taught." }
    ],
    test: [
      { s: "I ___ my keys yesterday.", o: ["losed", "lost", "lose"], c: 1, n: "lose → lost → lost." },
      { s: "Have you ever ___ sushi?", o: ["ate", "eaten", "eat"], c: 1, n: "have + V3: eaten." },
      { s: "She ___ a beautiful song at the concert.", o: ["sang", "sung", "singed"], c: 0, n: "Past Simple → V2: sang." },
      { s: "The letter was ___ in 1920.", o: ["wrote", "written", "write"], c: 1, n: "Edilgen: was + V3." }
    ],
    ilgili: ["a2-past-simple", "a2-present-perfect-intro"]
  },

  "a2-future": {
    ozet: "Ani karar, söz ve fikir → will; önceden verilmiş karar ve görünen kanıt → be going to; ayarlanmış randevu → Present Continuous.",
    sinyal: ["I think / I'm sure / probably → will", "Look! / kanıt → going to", "tomorrow at 10 (randevu) → I'm meeting"],
    tr: "Türkçede tek bir ‘-ecek’ eki vardır. İngilizcede kararın ne zaman verildiğine bakılır: telefon çalınca ‘Ben açarım’ → I'll get it (ani karar); ‘Yarın doktora gideceğim’ (randevu alındı) → I'm seeing the doctor tomorrow.",
    incelik: [
      "Teklif ve rica: Shall I open the window? / Will you help me?",
      "Zaman bağlaçlarından (when, as soon as, before, after, until) sonra will gelmez: I'll call you when I arrive.",
      "Kesinleşmiş tarife ve programlar için Present Simple: The concert starts at 9.",
      "will not = won't; going to konuşmada gonna diye okunabilir (yazıda kullanılmaz)."
    ],
    hatalar: [
      { y: "I will call you when I will arrive.", d: "I will call you when I arrive.", n: "when'den sonra Present Simple." },
      { y: "Look at the sky! It will rain.", d: "Look at the sky! It's going to rain.", n: "Gözle görülen kanıt → going to." }
    ],
    test: [
      { s: "The phone is ringing. – OK, I ___ it.", o: ["'ll answer", "'m going to answer", "answer"], c: 0, n: "Konuşma anında ani karar → will." },
      { s: "We've bought the tickets. We ___ Paris in June.", o: ["will visit", "are going to visit", "visit"], c: 1, n: "Önceden verilmiş karar → going to." },
      { s: "Be careful! You ___ fall!", o: ["'re going to", "will to", "are"], c: 0, n: "Görünen tehlike → going to." },
      { s: "I'll tell her as soon as she ___.", o: ["will arrive", "arrives", "arrive"], c: 1, n: "as soon as + Present Simple." }
    ],
    ilgili: ["a1-present-continuous", "b2-future-cont-perfect", "b1-conditionals-0-1"]
  },

  "a2-comparatives": {
    ozet: "Kısa sıfat + -er / the -est; uzun sıfat more / the most; eşitlik as ... as.",
    sinyal: ["than", "the ... in / of", "as ... as", "not as ... as", "much / far / a bit + comparative"],
    tr: "‘Daha’ için kısa sıfatta ek (-er), uzunda more kullanılır; Türkçedeki ‘-den’ ise than olur: Ali benden uzun → Ali is taller than me.",
    incelik: [
      "İki heceli -y ile bitenler: happy → happier → the happiest; busy, easy, early.",
      "Yazım: big → bigger (ünsüz ikilenir), nice → nicer, hot → hotter.",
      "Düzensiz: good–better–best, bad–worse–worst, far–farther/further–farthest/furthest, many/much–more–most, little–less–least.",
      "Farkı güçlendirme: much / far / a lot bigger; azaltma: a bit / slightly bigger (very bigger ✗).",
      "the + comparative, the + comparative: The more you read, the better you write."
    ],
    hatalar: [
      { y: "She is more tall than me.", d: "She is taller than me.", n: "Tek heceli sıfat → -er." },
      { y: "It's the most good film.", d: "It's the best film.", n: "good → the best (düzensiz)." }
    ],
    test: [
      { s: "Istanbul is ___ than Ankara.", o: ["crowdeder", "more crowded", "most crowded"], c: 1, n: "Uzun sıfat → more crowded." },
      { s: "This is ___ day of my life!", o: ["the happiest", "the most happy", "happier"], c: 0, n: "happy → the happiest." },
      { s: "My test result was ___ than yours.", o: ["badder", "worse", "worst"], c: 1, n: "bad → worse." },
      { s: "Tea is not ___ expensive as coffee here.", o: ["so", "as", "than"], c: 1, n: "Eşitlik kalıbı: (not) as ... as." },
      { s: "This bag is ___ heavier than that one.", o: ["very", "much", "more"], c: 1, n: "Comparative güçlendirme: much (very ✗)." }
    ],
    ilgili: ["a2-too-enough"]
  },

  "a2-countable-uncountable": {
    ozet: "Sayılabilen isim tekil/çoğul olur ve a/an alır; sayılamayan isim çoğul olmaz, a/an almaz, tekil fiil alır.",
    sinyal: ["How many → sayılabilen", "How much → sayılamayan", "a piece of / a cup of / a bottle of"],
    tr: "Türkçede sayılamaz gibi görünmeyen bazı isimler İngilizcede sayılamaz: bilgi (information), tavsiye (advice), mobilya (furniture), haber (news), bagaj (luggage), ödev (homework).",
    incelik: [
      "news sonu -s olsa da tekildir: The news is good.",
      "Miktar kalıpları: a piece of advice / information / furniture, a slice of bread, a bottle of water, a loaf of bread.",
      "Bazı isimler anlamına göre iki türlü kullanılır: a coffee (bir fincan) / coffee (madde); a room (oda) / room (yer, alan); a paper (gazete) / paper (kâğıt).",
      "money ve time sayılamaz: How much money / time do we have?"
    ],
    hatalar: [
      { y: "The news are terrible.", d: "The news is terrible.", n: "news tekil fiil alır." },
      { y: "We bought new furnitures.", d: "We bought new furniture.", n: "furniture çoğul olmaz." }
    ],
    test: [
      { s: "Can I give you a piece of ___?", o: ["advices", "advice", "an advice"], c: 1, n: "advice sayılamaz; a piece of advice." },
      { s: "How ___ luggage do you have?", o: ["many", "much", "a lot"], c: 1, n: "luggage sayılamaz → much." },
      { s: "The information ___ very useful.", o: ["was", "were", "are"], c: 0, n: "Sayılamayan → tekil fiil." },
      { s: "I'd like two ___ of water, please.", o: ["bottles", "bottle", "waters"], c: 0, n: "Sayı + ölçü kabı: two bottles of water." }
    ],
    ilgili: ["a2-some-any-much-many", "a1-articles"]
  },

  "a2-some-any-much-many": {
    ozet: "some olumlu ve ikramda; any olumsuz ve genel soruda; many sayılabilen, much sayılamayan isimle; a lot of her ikisiyle.",
    sinyal: ["Would you like some...?", "not ... any", "How many / How much", "too many / too much"],
    tr: "‘Hiç’ anlamı olumsuzda any ile verilir: Hiç param yok → I don't have any money. Olumlu cümlede any ‘herhangi’ anlamına gelir: You can take any book.",
    incelik: [
      "Olumlu cümlede much yerine a lot of daha doğaldır: I have a lot of time (I have much time resmi/eski).",
      "a few / few + sayılabilen, a little / little + sayılamayan: a few = birkaç (yeterli), few = pek az (olumsuz anlam).",
      "Bileşikler aynı kuralı izler: something / anything, somebody / anybody, somewhere / anywhere.",
      "no = not any: There is no milk = There isn't any milk."
    ],
    hatalar: [
      { y: "There isn't no sugar.", d: "There isn't any sugar. / There is no sugar.", n: "İngilizcede çift olumsuzluk olmaz." },
      { y: "How much students are there?", d: "How many students are there?", n: "students sayılabilen → many." }
    ],
    test: [
      { s: "Would you like ___ tea?", o: ["any", "some", "many"], c: 1, n: "İkram sorusu → some." },
      { s: "We don't have ___ bread left.", o: ["some", "any", "many"], c: 1, n: "Olumsuz → any." },
      { s: "There were too ___ people at the concert.", o: ["much", "many", "a lot"], c: 1, n: "people sayılabilen → many." },
      { s: "I have ___ friends here, so I'm not lonely.", o: ["a few", "a little", "few"], c: 0, n: "Sayılabilen + olumlu anlam → a few." },
      { s: "Hurry up! We don't have ___ time.", o: ["many", "much", "few"], c: 1, n: "time sayılamaz → much." }
    ],
    ilgili: ["a2-countable-uncountable", "a1-there-is-are", "b1-quantifiers"]
  },

  "a2-should-must-have-to": {
    ozet: "should tavsiye; must konuşanın gerekli gördüğü zorunluluk; have to dış kural; mustn't yasak; don't have to gerek yok.",
    sinyal: ["advice → should", "rules / laws → have to", "signs → must / mustn't", "not necessary → don't have to"],
    tr: "‘-meli/-malı’ Türkçede hem tavsiye hem zorunluluk olabilir. İngilizcede ayrılır: ‘Dinlenmelisin’ (tavsiye) → You should rest; ‘Kemer takmalısın’ (kural) → You have to / must wear a seat belt.",
    incelik: [
      "must'ın geçmişi yoktur; geçmiş zorunluluk had to ile anlatılır: I had to work yesterday.",
      "Gelecek: will have to. Soru: Do I have to...?",
      "mustn't ≠ don't have to: You mustn't tell him (yasak) / You don't have to tell him (gerek yok, istersen söyle).",
      "ought to = should (daha resmi): You ought to apologise."
    ],
    hatalar: [
      { y: "I must to go now.", d: "I must go now.", n: "must'tan sonra to gelmez." },
      { y: "Yesterday I must work late.", d: "Yesterday I had to work late.", n: "Geçmiş zorunluluk → had to." }
    ],
    test: [
      { s: "You look ill. You ___ see a doctor.", o: ["should", "mustn't", "don't have to"], c: 0, n: "Tavsiye → should." },
      { s: "Visitors ___ feed the animals. It's dangerous.", o: ["don't have to", "mustn't", "should"], c: 1, n: "Yasak → mustn't." },
      { s: "It's Sunday, so I ___ get up early.", o: ["mustn't", "don't have to", "have to"], c: 1, n: "Gerek yok → don't have to." },
      { s: "Last year she ___ wear a uniform at school.", o: ["must", "had to", "has to"], c: 1, n: "Geçmiş zorunluluk → had to." }
    ],
    ilgili: ["a1-can-cant", "b1-modals-deduction", "c1-past-modals"]
  },

  "a2-present-perfect-intro": {
    ozet: "Geçmişle şimdiyi bağlar: zamanı söylenmeyen deneyim, yeni biten iş, şimdiye kadar süren durum: have / has + V3.",
    sinyal: ["ever", "never", "just", "already", "yet", "so far", "recently", "for", "since", "How long...?"],
    tr: "Türkçede ‘Hiç Paris'e gittin mi?’ ile ‘Geçen yıl Paris'e gittin mi?’ aynı zamanla söylenir. İngilizcede zamanı belirsiz deneyim Present Perfect, belli geçmiş zaman Past Simple olur.",
    incelik: [
      "for + süre (for two years), since + başlangıç noktası (since 2020, since Monday).",
      "been / gone farkı: She has been to Rome (gitti, döndü) / She has gone to Rome (gitti, hâlâ orada).",
      "yet olumsuz ve soruda cümle sonunda; already ve just genellikle have ile V3 arasında.",
      "Bir olayı Present Perfect ile açıp ayrıntısını Past Simple ile anlatırız: I've lost my phone. I left it on the bus."
    ],
    hatalar: [
      { y: "I know him for five years.", d: "I have known him for five years.", n: "Geçmişten bugüne süren durum → Present Perfect." },
      { y: "Did you ever eat sushi?", d: "Have you ever eaten sushi?", n: "Zamanı belirsiz deneyim → Present Perfect (AmE'de Did you ever... da duyulur)." }
    ],
    test: [
      { s: "I ___ this film three times.", o: ["saw", "have seen", "have saw"], c: 1, n: "Zamanı belirsiz deneyim sayısı → have seen." },
      { s: "She has lived here ___ 2018.", o: ["for", "since", "ago"], c: 1, n: "Başlangıç noktası → since." },
      { s: "Have you finished your homework ___?", o: ["already", "yet", "just"], c: 1, n: "Soru sonunda → yet." },
      { s: "We ___ to the museum last Sunday.", o: ["have gone", "went", "have been"], c: 1, n: "last Sunday → Past Simple." },
      { s: "Tom isn't here. He ___ to the bank.", o: ["has been", "has gone", "went"], c: 1, n: "Gitti ve hâlâ orada → has gone." }
    ],
    ilgili: ["a2-past-simple", "b1-ppc", "b1-past-perfect"]
  },

  /* ----------------------------- B1 ----------------------------- */
  "b1-ppc": {
    ozet: "Geçmişte başlayıp şimdiye kadar süren (ya da yeni biten) eylemin süresine ve sürecine vurgu: have/has been + V-ing.",
    sinyal: ["for", "since", "How long...?", "all day", "lately", "recently"],
    tr: "‘Üç saattir ders çalışıyorum’ Türkçede şimdiki zamanla söylenir; İngilizcede I have been studying for three hours olur (I am studying for three hours ✗).",
    incelik: [
      "Sonuç ve miktar → Present Perfect Simple: I've written three emails. Süreç ve süre → Continuous: I've been writing emails all morning.",
      "Durum fiilleri continuous olmaz: I've known her for years (I've been knowing ✗).",
      "Yeni bitmiş ve izi görünen eylem: You're out of breath. Have you been running?",
      "live, work, teach gibi fiillerde iki biçim de çoğu zaman doğrudur: I've lived / I've been living here for 5 years."
    ],
    hatalar: [
      { y: "I have been knowing him since school.", d: "I have known him since school.", n: "know durum fiili." },
      { y: "She has been writing four essays today.", d: "She has written four essays today.", n: "Sayı/sonuç → Present Perfect Simple." }
    ],
    test: [
      { s: "How long ___ for the bus?", o: ["are you waiting", "have you been waiting", "did you wait"], c: 1, n: "Süre sorusu, hâlâ bekliyor → PPC." },
      { s: "It ___ since this morning.", o: ["is raining", "has been raining", "rains"], c: 1, n: "since + süren eylem → PPC." },
      { s: "I ___ three cups of coffee today.", o: ["have been drinking", "have drunk", "drink"], c: 1, n: "Miktar → Present Perfect Simple." },
      { s: "Your eyes are red. ___ crying?", o: ["Have you been", "Did you", "Are you been"], c: 0, n: "Yeni biten eylemin izi → PPC." }
    ],
    ilgili: ["a2-present-perfect-intro", "b1-past-perfect"]
  },

  "b1-pc": {
    ozet: "Geçmişte belli bir anda süren eylem: was/were + V-ing. Kısa eylem (Past Simple) uzun eylemin (Past Continuous) ortasına girer.",
    sinyal: ["while", "when", "at 8 p.m. yesterday", "at that time", "all evening"],
    tr: "Türkçedeki ‘-iyordu’ ekine karşılık gelir: ‘Telefon çaldığında yemek yapıyordum’ → I was cooking when the phone rang.",
    incelik: [
      "when + kısa eylem (Past Simple), while + uzun eylem (Past Continuous) en sık kalıptır.",
      "İki eylem art arda olduysa ikisi de Past Simple: When he arrived, we started dinner.",
      "Hikâyede arka plan Past Continuous, olaylar Past Simple ile anlatılır: The sun was shining. Suddenly, a man appeared.",
      "Durum fiilleri yine -ing almaz: I didn't know (wasn't knowing ✗) the answer."
    ],
    hatalar: [
      { y: "When I arrived, they were starting dinner.", d: "When I arrived, they started dinner.", n: "Art arda iki eylem → Past Simple + Past Simple (anlam: ben gelince başladılar)." },
      { y: "I was sleep when you called.", d: "I was sleeping when you called.", n: "was/were + V-ing." }
    ],
    test: [
      { s: "I ___ TV when the lights went out.", o: ["watched", "was watching", "were watching"], c: 1, n: "Uzun eylem, araya kısa eylem giriyor." },
      { s: "While we ___ dinner, someone knocked on the door.", o: ["had", "were having", "was having"], c: 1, n: "while + süren eylem; we → were." },
      { s: "What ___ at 9 o'clock last night?", o: ["did you do", "were you doing", "you were doing"], c: 1, n: "Belli bir anda süren eylem." },
      { s: "She ___ her leg while she was skiing.", o: ["was breaking", "broke", "breaks"], c: 1, n: "Kısa, ani eylem → Past Simple." }
    ],
    ilgili: ["a2-past-simple", "b1-past-perfect"]
  },

  "b1-modals-deduction": {
    ozet: "Kanıta dayalı tahmin: must (kesin öyle), can't (kesin değil), might/may/could (belki).",
    sinyal: ["I'm sure → must", "It's impossible → can't", "perhaps / maybe → might / may / could"],
    tr: "Türkçedeki ‘-meli/-malı’ tahmin anlamında da kullanılır: ‘Yorgun olmalı’ → She must be tired. ‘Olamaz’ → It can't be true.",
    incelik: [
      "Olumsuz ihtimal: might not / may not (couldn't ihtimal değil imkânsızlık bildirir).",
      "Şu an süren eylem için: must be + V-ing: He must be sleeping.",
      "Geçmiş için must have / can't have / might have + V3 (C1: Past Modals).",
      "Amerikan İngilizcesinde olumsuz kesin çıkarım için must not de duyulur; sınavlarda standart biçim can't'tır."
    ],
    hatalar: [
      { y: "She must to be at home.", d: "She must be at home.", n: "Modal + yalın fiil." },
      { y: "He couldn't be at work; maybe he's sick.", d: "He might not be at work; maybe he's sick.", n: "‘Belki değildir’ → might not; couldn't ‘imkânsız’ demektir." }
    ],
    test: [
      { s: "She's been working all day. She ___ be exhausted.", o: ["must", "can't", "mustn't"], c: 0, n: "Güçlü çıkarım → must." },
      { s: "That ___ be Ahmet. He's in London this week.", o: ["must", "can't", "might"], c: 1, n: "İmkânsız → can't." },
      { s: "I'm not sure where Elif is. She ___ be in the library.", o: ["must", "might", "can't"], c: 1, n: "Emin değil → might." },
      { s: "The phone is busy. He ___ talking to someone.", o: ["must be", "must", "can't"], c: 0, n: "Süren eylem tahmini → must be + V-ing." }
    ],
    ilgili: ["c1-past-modals", "a2-should-must-have-to"]
  },

  "b1-passive-intro": {
    ozet: "Eylemi yapan değil, eylemden etkilenen öne çıkar: be + V3 (zamanı be gösterir).",
    sinyal: ["by + yapan", "is made / was built / has been sold", "akademik ve haber dili"],
    tr: "Türkçedeki ‘-il / -in’ edilgen ekine karşılık gelir: ‘Köprü 1973'te yapıldı’ → The bridge was built in 1973.",
    incelik: [
      "Zamanlara göre: is done / is being done / was done / has been done / will be done / can be done.",
      "Yapan önemsiz ya da belliyse by kullanılmaz: My car was stolen (by someone ✗).",
      "Yalnız nesne alan (geçişli) fiiller edilgen olur: happen, arrive, die edilgen yapılmaz.",
      "İki nesneli fiiller: They gave me a prize → I was given a prize (daha doğal) / A prize was given to me."
    ],
    hatalar: [
      { y: "The accident was happened at night.", d: "The accident happened at night.", n: "happen nesne almaz, edilgen olmaz." },
      { y: "This house built in 1990.", d: "This house was built in 1990.", n: "be yardımcı fiili atlanmaz." }
    ],
    test: [
      { s: "Coffee ___ in Brazil and Colombia.", o: ["grows", "is grown", "is growing"], c: 1, n: "Genel gerçek, edilgen → is grown." },
      { s: "The new hospital ___ next year.", o: ["will build", "will be built", "is built"], c: 1, n: "Gelecek edilgen → will be built." },
      { s: "The windows ___ yet.", o: ["haven't been cleaned", "haven't cleaned", "didn't clean"], c: 0, n: "Present Perfect edilgen: have been + V3." },
      { s: "‘1984’ ___ by George Orwell.", o: ["wrote", "was written", "is writing"], c: 1, n: "Geçmiş edilgen + by." }
    ],
    ilgili: ["b2-advanced-passives", "a2-irregular-verbs"]
  },

  "b1-conditionals-0-1": {
    ozet: "Zero: her zaman doğru olan sonuç (Present + Present). First: gerçek ve olası gelecek (If + Present, will + V1).",
    sinyal: ["if", "unless (= if not)", "when", "as long as", "provided that", "in case"],
    tr: "Türkçedeki ‘-rsa’ eki geleceği anlatsa da İngilizcede if tarafında will kullanılmaz: ‘Yağmur yağarsa…’ → If it rains... (If it will rain ✗).",
    incelik: [
      "Cümle if ile başlıyorsa virgül konur; sonuç önce gelirse virgül gerekmez: We'll stay home if it rains.",
      "unless = if not; ardından olumlu fiil gelir: Unless you hurry (= If you don't hurry), you'll miss the bus.",
      "Sonuç tarafında will yerine can, may, might, should ya da emir kipi gelebilir: If you see him, tell him to call me.",
      "when = mutlaka olacak; if = olabilir: When I get home, I'll call you. / If I get the job, I'll celebrate."
    ],
    hatalar: [
      { y: "Unless you don't study, you will fail.", d: "Unless you study, you will fail.", n: "unless zaten olumsuz anlam taşır." },
      { y: "If you will need help, call me.", d: "If you need help, call me.", n: "if tarafında Present Simple." }
    ],
    test: [
      { s: "If you mix red and blue, you ___ purple.", o: ["get", "will get", "got"], c: 0, n: "Değişmeyen gerçek → Zero: Present." },
      { s: "If she ___ the bus, she will be late.", o: ["will miss", "misses", "missed"], c: 1, n: "First: if + Present Simple." },
      { s: "We won't go to the beach ___ the weather is good.", o: ["if", "unless", "when"], c: 1, n: "‘Hava iyi olmadıkça’ → unless." },
      { s: "Take an umbrella ___ it rains.", o: ["unless", "in case", "if not"], c: 1, n: "Önlem → in case (olur da yağarsa)." }
    ],
    ilgili: ["b2-conditionals-2-3", "a2-future"]
  },

  "b1-relative-clauses": {
    ozet: "İsmi tanımlayan yan cümle: who (insan), which (şey), that (ikisi, tanımlayıcıda), whose (sahiplik), where (yer), when (zaman).",
    sinyal: ["the person who...", "the book which / that...", "the city where...", "the man whose car..."],
    tr: "Türkçede niteleyen yapı isimden önce gelir (‘dün aldığım kitap’); İngilizcede sonra gelir: the book (that) I bought yesterday. Sırayı Türkçe gibi kurmak en yaygın hatadır.",
    incelik: [
      "Tanımlayıcı (defining) cümlede virgül yok, that kullanılabilir. Ek bilgi veren (non-defining) cümlede virgül var, that kullanılamaz: My brother, who lives in Bursa, is a vet.",
      "İlgi zamiri nesne ise atlanabilir: the film (that) we watched. Özne ise atlanamaz: the man who called.",
      "Edatlı yapı: the house in which I grew up (resmi) = the house (that) I grew up in (günlük).",
      "which tüm cümleye de gönderme yapabilir: He passed the exam, which surprised everyone."
    ],
    hatalar: [
      { y: "The book that I bought it is great.", d: "The book that I bought is great.", n: "İlgi zamiri nesneyi zaten temsil eder; ‘it’ tekrar edilmez." },
      { y: "Paris, that is in France, is beautiful.", d: "Paris, which is in France, is beautiful.", n: "Virgüllü (ek bilgi) cümlede that kullanılmaz." }
    ],
    test: [
      { s: "That's the girl ___ won the competition.", o: ["which", "who", "whose"], c: 1, n: "İnsan, özne → who." },
      { s: "This is the restaurant ___ we had our first date.", o: ["which", "where", "who"], c: 1, n: "Yer → where." },
      { s: "I know a man ___ son plays for Fenerbahçe.", o: ["who", "whose", "which"], c: 1, n: "Sahiplik → whose." },
      { s: "My laptop, ___ I bought last year, is already slow.", o: ["that", "which", "what"], c: 1, n: "Virgüllü ek bilgi → which (that ✗)." }
    ],
    ilgili: ["c1-participle-clauses", "b2-noun-clauses"]
  },

  "b1-used-to-would": {
    ozet: "Geçmişte olup artık olmayan alışkanlık ve durumlar: used to + V1 (her ikisi), would + V1 (yalnız tekrarlanan eylem).",
    sinyal: ["when I was a child", "in the past", "anymore / any longer", "every summer (geçmişte)"],
    tr: "Türkçedeki ‘-ardı / -erdi’ (eskiden yapardım) anlamına karşılık gelir: ‘Eskiden çok kitap okurdum’ → I used to read a lot.",
    incelik: [
      "Olumsuz ve soruda d düşer: didn't use to, Did you use to...? (didn't used to yaygın bir yazım hatasıdır).",
      "be used to + V-ing / isim = bir şeye alışkın olmak (şimdi): I'm used to getting up early.",
      "get used to + V-ing = alışmak (süreç): You'll get used to the noise.",
      "Tek seferlik geçmiş eylemde used to kullanılmaz: I went to Rome in 2015 (I used to go ✗)."
    ],
    hatalar: [
      { y: "I'm used to get up early.", d: "I'm used to getting up early.", n: "be used to'daki to edattır → V-ing." },
      { y: "Did you used to play tennis?", d: "Did you use to play tennis?", n: "did'den sonra use (d'siz)." }
    ],
    test: [
      { s: "I ___ have long hair, but now it's short.", o: ["would", "used to", "am used to"], c: 1, n: "Geçmiş durum (have) → used to; would olmaz." },
      { s: "Every evening my grandmother ___ tell us stories.", o: ["would", "is used to", "use to"], c: 0, n: "Tekrarlanan geçmiş eylem → would (used to da olur)." },
      { s: "She has lived in Erzurum for years, so she ___ the cold.", o: ["used to", "is used to", "use to"], c: 1, n: "Alışkın olmak → be used to + isim." },
      { s: "We ___ to have a car, but we sold it.", o: ["used", "were used", "would"], c: 0, n: "used to + V1." }
    ],
    ilgili: ["a2-past-simple", "b2-gerunds-infinitives"]
  },

  /* ----------------------------- B2 ----------------------------- */
  "b2-conditionals-2-3": {
    ozet: "Type 2: şu an / gelecekte gerçek dışı (If + V2, would + V1). Type 3: geçmişte olmamış olanın hayali sonucu (If + had V3, would have V3).",
    sinyal: ["If I were you", "imagine", "suppose", "but in reality...", "regret (Type 3)"],
    tr: "Türkçedeki ‘-sa(ydı)’ farkı: ‘Param olsa alırdım’ → If I had money, I would buy it (Type 2). ‘Param olsaydı alırdım’ (geçmişte) → If I had had money, I would have bought it (Type 3).",
    incelik: [
      "Type 2'de tüm kişilerle were kullanılabilir: If I/he/she were... (resmî ve sınavda tercih edilen).",
      "would yerine could (yapabilirdi) ve might (belki) gelebilir.",
      "Devrik koşul (C1): Were I you..., Had I known..., Should you need help...",
      "Kısaltmalar: I'd = I would / I had. If I'd known (= had), I'd have come (= would)."
    ],
    hatalar: [
      { y: "If I had more time, I will learn Japanese.", d: "If I had more time, I would learn Japanese.", n: "Type 2 sonuç → would + V1." },
      { y: "If she studied harder, she would have passed last week's exam.", d: "If she had studied harder, she would have passed last week's exam.", n: "Geçmiş koşul → had + V3." }
    ],
    test: [
      { s: "If I ___ you, I would apologise.", o: ["am", "were", "had been"], c: 1, n: "Tavsiye kalıbı: If I were you." },
      { s: "If we had left earlier, we ___ the train.", o: ["would catch", "would have caught", "will catch"], c: 1, n: "Type 3 → would have + V3." },
      { s: "What would you do if you ___ the lottery?", o: ["win", "won", "had won"], c: 1, n: "Type 2: if + V2." },
      { s: "She ___ the job if she had applied in time.", o: ["could have got", "could get", "can get"], c: 0, n: "Geçmiş olasılık → could have + V3." }
    ],
    ilgili: ["b2-mixed-conditionals", "b2-wishes-regrets", "b1-conditionals-0-1"]
  },

  "b2-mixed-conditionals": {
    ozet: "Koşul ve sonuç farklı zamanlara ait: geçmiş koşul → bugünkü sonuç (had V3 → would V1) ya da kalıcı özellik → geçmiş sonuç (V2 → would have V3).",
    sinyal: ["now / today / still (sonuçta)", "kalıcı özellik: If I were taller / If he weren't so shy"],
    tr: "‘Dün gece erken yatsaydın şimdi yorgun olmazdın’ cümlesinde koşul geçmiş, sonuç şimdidir: If you had gone to bed early, you wouldn't be tired now.",
    incelik: [
      "Zaman ipuçlarını iki tarafta ayrı ayrı kontrol et: koşul tarafı ‘ne zaman?’, sonuç tarafı ‘ne zaman?’.",
      "Kalıcı özellik + geçmiş sonuç: If I spoke German (genel olarak), I would have applied for that job (geçen ay).",
      "Sınavlarda now, today, still kelimeleri sonuç tarafındaki zamanı gösteren en güçlü ipucudur."
    ],
    hatalar: [
      { y: "If I had taken the job, I would have lived in Berlin now.", d: "If I had taken the job, I would live in Berlin now.", n: "now → sonuç şimdiki: would + V1." }
    ],
    test: [
      { s: "If he had saved money, he ___ rich now.", o: ["would have been", "would be", "will be"], c: 1, n: "Geçmiş koşul, now → would + V1." },
      { s: "If I ___ afraid of flying, I would have visited you last year.", o: ["weren't", "hadn't been", "am not"], c: 0, n: "Kalıcı özellik (Type 2 koşul) + geçmiş sonuç." },
      { s: "We wouldn't be lost if we ___ the map.", o: ["checked", "had checked", "would check"], c: 1, n: "Geçmişteki eylemin bugünkü sonucu → had + V3." }
    ],
    ilgili: ["b2-conditionals-2-3", "b2-wishes-regrets"]
  },

  "b2-advanced-passives": {
    ozet: "have/get something done: işi başkasına yaptırmak. It is said that... / He is said to...: kaynağı belirsiz bilgiyi aktarmak.",
    sinyal: ["at the hairdresser's / mechanic's", "it is believed / reported / thought / claimed", "is said to / is thought to"],
    tr: "Türkçedeki ettirgen ‘-tır’ ekine karşılık gelir: ‘Saçımı kestirdim’ → I had my hair cut (I cut my hair = kendim kestim).",
    incelik: [
      "Sıra: have + NESNE + V3. I had my car repaired (I had repaired my car ✗ – anlam değişir).",
      "Başımıza gelen kötü olay için de kullanılır: She had her bag stolen.",
      "Aynı zaman: He is said to be rich. Önceki zaman: He is said to have been rich. Süren: He is thought to be hiding.",
      "Akademik yazıda bu yapı kesinlikten kaçınmayı (hedging) sağlar: The method is believed to reduce errors."
    ],
    hatalar: [
      { y: "I cut my hair at the barber's yesterday.", d: "I had my hair cut at the barber's yesterday.", n: "Başkasına yaptırılan iş → have + nesne + V3." },
      { y: "He is believed that he is in Spain.", d: "He is believed to be in Spain. / It is believed that he is in Spain.", n: "İki kalıp karıştırılmaz." }
    ],
    test: [
      { s: "I need to ___ my eyes tested.", o: ["have", "make", "do"], c: 0, n: "Hizmet yaptırma → have something done." },
      { s: "The painting is believed ___ in the 16th century.", o: ["to paint", "to have been painted", "being painted"], c: 1, n: "Geçmişte, edilgen → to have been + V3." },
      { s: "It ___ that the company will close.", o: ["is reported", "reports", "is reporting"], c: 0, n: "Kişisiz edilgen: It is reported that..." },
      { s: "We got the plumber ___ the leak.", o: ["fix", "to fix", "fixed"], c: 1, n: "get + kişi + to V1." }
    ],
    ilgili: ["b1-passive-intro", "c1-hedging"]
  },

  "b2-reported-speech": {
    ozet: "Birinin sözünü aktarırken (said/told/asked) zamanlar bir adım geriye kayar; soru cümleleri düz cümle sırasına döner.",
    sinyal: ["said (that)", "told + kişi", "asked if / whether", "the day before", "the next day", "there / then"],
    tr: "Türkçede ‘Geleceğini söyledi’ gibi ad-fiil yapısı kullanırız; İngilizcede that'li cümle kurulur ve zaman kayar: He said that he would come.",
    incelik: [
      "say + (that); tell + KİŞİ + (that): She told me (that)... (She said me ✗).",
      "Hâlâ geçerli gerçeklerde kayma zorunlu değildir: He said the Earth is round.",
      "Değişen zarflar: now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.",
      "Diğer aktarma fiilleri: advise / warn / remind + kişi + to V1; suggest + V-ing / that; deny + V-ing; promise + to V1."
    ],
    hatalar: [
      { y: "He said me that he was busy.", d: "He told me that he was busy.", n: "Kişi varsa tell; say + to me." },
      { y: "She asked me if I can help.", d: "She asked me if I could help.", n: "asked geçmiş → can → could." }
    ],
    test: [
      { s: "‘I'm tired,’ she said. → She said that she ___ tired.", o: ["is", "was", "had"], c: 1, n: "am → was." },
      { s: "He asked me where I ___.", o: ["did live", "lived", "do I live"], c: 1, n: "Dolaylı soruda düz sıra: where I lived." },
      { s: "The doctor told me ___ smoking.", o: ["stop", "to stop", "stopping"], c: 1, n: "tell + kişi + to V1." },
      { s: "‘I'll call you tomorrow.’ → He said he would call me ___.", o: ["tomorrow", "the next day", "the day before"], c: 1, n: "tomorrow → the next day." }
    ],
    ilgili: ["b2-noun-clauses"]
  },

  "b2-wishes-regrets": {
    ozet: "Bir zaman geri git: şimdiki dilek → wish + V2; geçmiş pişmanlık → wish + had V3; başkasının davranışından şikâyet → wish + would.",
    sinyal: ["I wish", "If only", "I'd rather", "It's time"],
    tr: "Türkçedeki ‘keşke’ye karşılık gelir: ‘Keşke zengin olsam’ → I wish I were rich. ‘Keşke gitmeseydim’ → I wish I hadn't gone.",
    incelik: [
      "Yetenek dileği: I wish I could speak Italian.",
      "would rather + kişi + V2: I'd rather you didn't smoke here. Kendisi için: I'd rather stay (yalın fiil).",
      "It's (high) time + V2: It's time we left.",
      "hope gerçekleşebilir olan için kullanılır ve zaman kaydırmaz: I hope you pass (I wish you passed ✗)."
    ],
    hatalar: [
      { y: "I wish I didn't eat so much last night.", d: "I wish I hadn't eaten so much last night.", n: "Geçmiş pişmanlık → had + V3." },
      { y: "I wish you will come to my party.", d: "I hope you will come to my party.", n: "Olası gelecek dileği → hope." }
    ],
    test: [
      { s: "I wish I ___ a car. I hate taking the bus.", o: ["have", "had", "would have"], c: 1, n: "Şimdiki dilek → V2." },
      { s: "If only I ___ to her advice last year!", o: ["listened", "had listened", "would listen"], c: 1, n: "Geçmiş pişmanlık → had + V3." },
      { s: "I wish my neighbours ___ so much noise.", o: ["wouldn't make", "don't make", "hadn't made"], c: 0, n: "Başkasının davranışından şikâyet → would." },
      { s: "It's time you ___ to bed.", o: ["go", "went", "will go"], c: 1, n: "It's time + V2." }
    ],
    ilgili: ["b2-conditionals-2-3", "b2-mixed-conditionals"]
  },

  "b2-gerunds-infinitives": {
    ozet: "Fiilden sonra hangi biçimin geleceği önceki kelimeye bağlıdır: bazı fiiller V-ing, bazıları to V1 alır; bazılarında anlam değişir.",
    sinyal: ["edat + V-ing", "enjoy, avoid, finish, mind, suggest + V-ing", "want, decide, hope, plan, refuse + to V1", "remember / forget / stop / try / regret"],
    tr: "Türkçedeki ‘-mek / -me’ ad-fiilleri İngilizcede iki biçime ayrılır. ‘Yüzmeyi severim’ → I enjoy swimming; ‘Yüzmek istiyorum’ → I want to swim.",
    incelik: [
      "Cümlenin öznesi olarak genelde V-ing: Swimming is good for you.",
      "Amaç bildirmek için to V1: I came here to learn English (for learning ✗).",
      "try + to V1 = çabalamak; try + V-ing = deneme yapmak: Try restarting the computer.",
      "regret + to V1 = üzülerek bildirmek (We regret to inform you); regret + V-ing = pişman olmak.",
      "make / let + kişi + V1 (to yok): My parents let me stay out late."
    ],
    hatalar: [
      { y: "I avoid to eat sugar.", d: "I avoid eating sugar.", n: "avoid + V-ing." },
      { y: "She decided studying medicine.", d: "She decided to study medicine.", n: "decide + to V1." }
    ],
    test: [
      { s: "Would you mind ___ the window?", o: ["to close", "closing", "close"], c: 1, n: "mind + V-ing." },
      { s: "Don't forget ___ the lights when you leave.", o: ["to turn off", "turning off", "turn off"], c: 0, n: "Yapılacak görevi unutmamak → to V1." },
      { s: "I'll never forget ___ the Grand Canyon for the first time.", o: ["to see", "seeing", "see"], c: 1, n: "Geçmiş anıyı unutmamak → V-ing." },
      { s: "He's interested in ___ abroad.", o: ["to study", "studying", "study"], c: 1, n: "Edattan (in) sonra V-ing." },
      { s: "My boss made me ___ late.", o: ["to work", "working", "work"], c: 2, n: "make + kişi + V1." }
    ],
    ilgili: ["a2-verb-patterns", "b1-used-to-would"]
  },

  /* ----------------------------- C1 ----------------------------- */
  "c1-inversion": {
    ozet: "Olumsuz ya da kısıtlayıcı bir ifade cümle başına gelince yardımcı fiil özneden önce gelir (soru sırası): Never have I seen...",
    sinyal: ["Never", "Rarely / Seldom", "Hardly ... when", "No sooner ... than", "Not only ... but also", "Only after / Only when", "Under no circumstances", "Little"],
    tr: "Türkçede vurgu için kelime sırası serbestçe değişir; İngilizcede bu ifadeler başa gelince devrik yapı zorunludur ve anlatıma resmî, güçlü bir ton katar.",
    incelik: [
      "Yardımcı fiil yoksa do/does/did eklenir: Rarely does he complain.",
      "Only after / Only when yapılarında devrik yapı ana cümlede olur: Only after the test did we realise the error.",
      "Not until ... ile de devrik yapı kurulur: Not until 1990 did women vote there.",
      "Devrik koşul: Had I known = If I had known; Should you need = If you need; Were it not for = If it weren't for."
    ],
    hatalar: [
      { y: "Only when I arrived home I realised my mistake.", d: "Only when I arrived home did I realise my mistake.", n: "Devrik yapı ana cümlede (did I realise)." },
      { y: "Hardly I had sat down when the phone rang.", d: "Hardly had I sat down when the phone rang.", n: "Hardly + had + özne + V3." }
    ],
    test: [
      { s: "Never ___ such a beautiful sunset.", o: ["I have seen", "have I seen", "I saw"], c: 1, n: "Never başta → have I seen." },
      { s: "No sooner had we arrived ___ it started to rain.", o: ["when", "than", "then"], c: 1, n: "No sooner ... than." },
      { s: "Under no circumstances ___ the door.", o: ["you should open", "should you open", "you open"], c: 1, n: "Devrik: should you open." },
      { s: "___ I known about the problem, I would have helped.", o: ["If", "Had", "Have"], c: 1, n: "Devrik Type 3: Had I known." }
    ],
    ilgili: ["c1-cleft-sentences", "b2-conditionals-2-3"]
  },

  "c1-cleft-sentences": {
    ozet: "Cümleyi ikiye bölerek tek bir öğeyi öne çıkarma: It was X that... / What I need is...",
    sinyal: ["It is / was ... that / who", "What ... is / was", "All I want is", "The reason why ... is that", "It was not until ... that"],
    tr: "Türkçede vurguyu genellikle sözcüğü yükleme yaklaştırarak ya da ‘asıl…’ diyerek yaparız: ‘Asıl ihtiyacımız olan zaman’ → What we need is time.",
    incelik: [
      "It-cleft'te vurgulanan öğe insan ise who da kullanılabilir: It was my sister who called.",
      "What-cleft'te eylemi vurgulamak için do kullanılır: What she did was (to) call the police.",
      "Akademik yazıda yanlış varsayımı düzeltmek için: It is not the cost but the time that matters.",
      "It was not until ... that = ancak ... olunca: It wasn't until I moved abroad that I understood."
    ],
    hatalar: [
      { y: "It was in 2010 when I graduated.", d: "It was in 2010 that I graduated.", n: "It-cleft'te standart bağlaç that." }
    ],
    test: [
      { s: "___ I really need is a long holiday.", o: ["That", "What", "Which"], c: 1, n: "What-cleft." },
      { s: "It was my brother ___ broke the vase, not me.", o: ["which", "who", "what"], c: 1, n: "İnsan vurgusu → who / that." },
      { s: "It wasn't until midnight ___ they finished.", o: ["when", "that", "than"], c: 1, n: "It was not until ... that." },
      { s: "What he did ___ call his lawyer.", o: ["was", "did", "is to"], c: 0, n: "What + özne + did + was (to) V1." }
    ],
    ilgili: ["c1-inversion", "c1-nominalisation"]
  },

  "c1-subjunctive": {
    ozet: "Talep, öneri ve zorunluluk bildiren ifadelerden sonra that-cümlesinde fiil yalın kalır: It is vital that he be present.",
    sinyal: ["suggest / recommend / insist / demand / propose / request + that", "It is essential / vital / crucial / imperative + that"],
    tr: "Türkçedeki ‘-mesi gerekir / -mesini önerdi’ yapılarına karşılık gelir: ‘Herkesin katılmasını önerdi’ → She suggested that everyone attend.",
    incelik: [
      "İngiliz İngilizcesinde should + V1 da yaygındır: I suggest that he should leave.",
      "Olumsuz: that + özne + not + V1: They insisted that he not be told.",
      "Kalıplaşmış subjunctive ifadeler: God save the King, Be that as it may, If need be, Suffice it to say.",
      "suggest + V-ing de doğrudur: I suggest leaving early (suggest someone to do ✗)."
    ],
    hatalar: [
      { y: "She suggested me to apply.", d: "She suggested that I (should) apply. / She suggested applying.", n: "suggest + kişi + to V1 kalıbı yoktur." },
      { y: "They demanded that he doesn't leave.", d: "They demanded that he not leave.", n: "Subjunctive olumsuzunda do kullanılmaz." }
    ],
    test: [
      { s: "The teacher insisted that every student ___ the essay by Friday.", o: ["submits", "submit", "submitted"], c: 1, n: "insist that + yalın fiil." },
      { s: "It is essential that the patient ___ informed.", o: ["is", "be", "was"], c: 1, n: "be + V3 (yalın edilgen)." },
      { s: "I recommend that she ___ a lawyer.", o: ["consults", "consult", "to consult"], c: 1, n: "recommend that + yalın fiil." },
      { s: "He suggested ___ a taxi.", o: ["us to take", "taking", "to take"], c: 1, n: "suggest + V-ing." }
    ],
    ilgili: ["b2-reported-speech", "c1-hedging"]
  },

  "c1-participle-clauses": {
    ozet: "Özneleri aynı iki cümleyi kısaltmak için bağlaç atılıp -ing (etken), V3 (edilgen) ya da Having V3 (önce olan) kullanılır.",
    sinyal: ["virgülle başlayan -ing / V3 öbeği", "Having + V3", "after / before / while + V-ing", "indirgenmiş ilgi cümlesi: the man sitting there"],
    tr: "Türkçedeki ‘-ip, -erek, -ince, -dikten sonra’ zarf-fiillerine benzer: ‘Kapıyı açınca bir mektup gördü’ → Opening the door, she saw a letter.",
    incelik: [
      "İndirgenmiş ilgi cümlesi: the students who are waiting → the students waiting; a book which was written → a book written.",
      "Neden: Not knowing what to do, I called my father (Because I didn't know...).",
      "Zaman bağlacı korunabilir: After finishing the report, she left. / While driving, don't use your phone.",
      "Akademik yazıda yoğunluk sağlar: Based on these results, we conclude that..."
    ],
    hatalar: [
      { y: "Having been finished the work, he went home.", d: "Having finished the work, he went home.", n: "O işi kendisi bitirdi → etken: Having + V3." },
      { y: "Being raining, we stayed in.", d: "As it was raining, we stayed in.", n: "Özneler farklı (it / we); kısaltma yapılamaz." }
    ],
    test: [
      { s: "___ the instructions, he assembled the desk easily.", o: ["Followed", "Following", "Having been followed"], c: 1, n: "Özne talimatları kendisi izliyor → etken -ing." },
      { s: "___ in 1889, the Eiffel Tower attracts millions of visitors.", o: ["Building", "Built", "Having built"], c: 1, n: "Kule inşa edildi → edilgen V3." },
      { s: "___ his homework, he went out to play.", o: ["Having finished", "Finished", "Being finished"], c: 0, n: "Önce bitirdi, sonra çıktı → Having + V3." },
      { s: "The woman ___ next to me was a famous writer.", o: ["sat", "sitting", "who sitting"], c: 1, n: "who was sitting → sitting." }
    ],
    ilgili: ["b1-relative-clauses", "c1-nominalisation"]
  },

  "c1-past-modals": {
    ozet: "Geçmişe dair çıkarım (must / can't / might have V3) ve eleştiri–pişmanlık (should / needn't have V3).",
    sinyal: ["must have = eminim ki ...-miştir", "can't have = ...-miş olamaz", "might have = ...-miş olabilir", "should have = ...-meliydi", "needn't have = gerek yoktu ama yaptı"],
    tr: "‘Unutmuş olmalı’ → He must have forgotten. ‘Görmüş olamaz’ → She can't have seen it. ‘Söylemeliydin’ → You should have told me.",
    incelik: [
      "needn't have V3 (yaptı, gereksizdi) ≠ didn't need to V1 (gerek yoktu; yapıp yapmadığı belirsiz ya da yapmadı).",
      "could have V3 iki anlam taşır: olabilirdi/olası geçmiş (It could have been worse) ve fırsatı kaçırma (You could have asked me!).",
      "Süren geçmiş eylem: must have been + V-ing: He must have been sleeping.",
      "Amerikan İngilizcesinde olumsuz çıkarım için must not have da duyulur; akademik sınavlarda can't / couldn't have esas alınır."
    ],
    hatalar: [
      { y: "You should told me earlier.", d: "You should have told me earlier.", n: "Geçmiş eleştiri → should have + V3." },
      { y: "He must have forget the meeting.", d: "He must have forgotten the meeting.", n: "have + V3." }
    ],
    test: [
      { s: "The streets are wet. It ___ during the night.", o: ["must have rained", "should have rained", "can't have rained"], c: 0, n: "Kanıta dayalı kesin çıkarım." },
      { s: "She ___ the email; she was offline all day.", o: ["must have read", "can't have read", "should have read"], c: 1, n: "İmkânsız → can't have." },
      { s: "We ___ so much food. Only four people came.", o: ["needn't have cooked", "mustn't have cooked", "didn't need cook"], c: 0, n: "Yapıldı ama gereksizdi → needn't have V3." },
      { s: "I failed the exam. I ___ harder.", o: ["must have studied", "should have studied", "might study"], c: 1, n: "Pişmanlık → should have V3." }
    ],
    ilgili: ["b1-modals-deduction", "b2-wishes-regrets"]
  }
};

/* ===================== YENİ KONULAR ===================== */
const GRAMMAR_NEW = {
  A1: [
    {
      id: "a1-possessives", sonra: "a1-pronouns",
      title: "Possessives & object pronouns: my, me, mine, 's",
      desc: "Sahiplik sıfatları (my, your…), nesne zamirleri (me, him…), sahiplik zamirleri (mine, yours…) ve isimlere eklenen 's.",
      usage: "Bir şeyin kime ait olduğunu söylerken (my book, Ali's car) ve fiilden ya da edattan sonra kişiye gönderme yaparken (Call me, with him) kullanılır.",
      formula: "• Özne → Nesne → Sahiplik sıfatı → Sahiplik zamiri\n  I → me → my → mine\n  you → you → your → yours\n  he → him → his → his\n  she → her → her → hers\n  it → it → its → —\n  we → us → our → ours\n  they → them → their → theirs\n• İsim + 's: Ali's bag | çoğul -s: my parents' house",
      forms: {
        positive: "This is my phone. It's mine. (Bu benim telefonum. Benim.)",
        negative: "That isn't her coat. Hers is black. (O onun ceketi değil. Onunki siyah.)",
        question: "Whose keys are these? Are they yours? (Bunlar kimin anahtarları? Seninkiler mi?)"
      },
      examples: [
        { en: "Can you help me with my homework?", tr: "Ödevimde bana yardım edebilir misin?" },
        { en: "My sister's room is bigger than mine.", tr: "Kız kardeşimin odası benimkinden büyük." },
        { en: "The dog is wagging its tail.", tr: "Köpek kuyruğunu sallıyor." }
      ],
      mistake: { wrong: "The cat is eating it's food.", correct: "The cat is eating its food.", note: "its = onun (sahiplik); it's = it is. Sahiplikte kesme işareti yoktur." },
      ozet: "Türkçedeki ‘-im, -in’ iyelik ekleri İngilizcede ismin önüne gelen ayrı kelimelerle yapılır: kitabım → my book.",
      sinyal: ["Whose...?", "ismin önü → my / your", "fiil ya da edattan sonra → me / him / them", "tek başına → mine / yours"],
      tr: "Türkçede ‘benim kitabım’ derken hem ‘benim’ hem ‘-ım’ eki vardır; İngilizcede yalnız my yeterlidir: my book (my book's ✗). ‘Benimki’ → mine.",
      incelik: [
        "his/her seçimi sahibin cinsiyetine göre yapılır, nesneye göre değil: Ali loves his mother (her ✗).",
        "Sahiplik sıfatından sonra the gelmez: my the car ✗.",
        "Cansızlarda genellikle of: the end of the film; kişi, hayvan, ülke ve zamanda 's: Turkey's capital, today's news.",
        "Edattan sonra nesne zamiri: between you and me (between you and I ✗)."
      ],
      hatalar: [
        { y: "This book is my.", d: "This book is mine.", n: "İsimsiz, tek başına → mine." },
        { y: "Ayşe and her husband's car", d: "Ayşe and her husband's car (ortak) / Ayşe's and her husband's cars (ayrı)", n: "Ortak sahiplikte 's yalnız son isme eklenir." }
      ],
      test: [
        { s: "Is this pen ___? – No, it's Selin's.", o: ["your", "yours", "you"], c: 1, n: "Tek başına → yours." },
        { s: "Please give ___ the salt.", o: ["I", "me", "my"], c: 1, n: "Fiilden sonra nesne zamiri → me." },
        { s: "Mehmet called ___ mother last night.", o: ["her", "his", "its"], c: 1, n: "Sahibi Mehmet (erkek) → his." },
        { s: "The ___ toys are everywhere.", o: ["children's", "childrens'", "childrens"], c: 0, n: "Düzensiz çoğul + 's → children's." }
      ],
      ilgili: ["a1-pronouns", "a1-wh-questions"]
    },
    {
      id: "a1-adverbs-frequency", sonra: "a1-present-simple",
      title: "Adverbs of frequency: always, usually, often, sometimes, never",
      desc: "Bir eylemin ne sıklıkla yapıldığını gösteren zarflar ve cümledeki yerleri.",
      usage: "Rutinleri ve alışkanlıkları anlatırken, Present Simple ile birlikte kullanılır.",
      formula: "• always (%100) > usually (%80) > often (%60) > sometimes (%40) > rarely / seldom (%10) > never (%0)\n• Ana fiilden ÖNCE: She often cooks.\n• to be'den SONRA: She is often late.\n• Yardımcı fiilden SONRA: I have never seen it. / I don't usually drink tea.\n• Soru: How often do you...?",
      forms: {
        positive: "I always drink water in the morning. (Sabahları hep su içerim.)",
        negative: "He doesn't often go out on weekdays. (Hafta içi pek dışarı çıkmaz.)",
        question: "How often do you exercise? (Ne sıklıkla spor yaparsın?)"
      },
      examples: [
        { en: "We usually have dinner at seven.", tr: "Genellikle saat yedide akşam yemeği yeriz." },
        { en: "She is never late for class.", tr: "Derse asla geç kalmaz." },
        { en: "I go to the cinema once a month.", tr: "Ayda bir sinemaya giderim." }
      ],
      mistake: { wrong: "I go always to school by bus.", correct: "I always go to school by bus.", note: "Sıklık zarfı ana fiilin önüne gelir; Türkçedeki gibi fiilden sonra konmaz." },
      ozet: "Sıklık zarfı ana fiilin önüne, to be'nin arkasına yerleşir.",
      sinyal: ["How often...?", "every day", "once / twice a week", "three times a year"],
      tr: "Türkçede ‘hep, genelde, bazen, asla’ cümlede serbestçe yer değiştirir. İngilizcede yeri sabittir: ‘Asla kahve içmem’ → I never drink coffee.",
      incelik: [
        "never zaten olumsuzdur; don't ile birlikte kullanılmaz: I never eat meat (I don't never ✗).",
        "sometimes cümle başında ya da sonunda da olabilir: Sometimes I walk to work.",
        "every day, once a week gibi ifadeler genellikle cümle sonuna gelir.",
        "hardly ever = neredeyse hiç: I hardly ever watch TV."
      ],
      hatalar: [{ y: "She always is happy.", d: "She is always happy.", n: "to be'den sonra." }],
      test: [
        { s: "Choose the correct order: ___", o: ["I eat never fast food.", "I never eat fast food.", "Never I eat fast food."], c: 1, n: "Zarf ana fiilden önce." },
        { s: "Choose the correct order: ___", o: ["He is usually tired after work.", "He usually is tired after work.", "Usually he tired after work."], c: 0, n: "to be'den sonra." },
        { s: "‘___ do you visit your grandparents?’ – ‘Twice a month.’", o: ["How much", "How often", "How long"], c: 1, n: "Sıklık sorusu → How often." },
        { s: "I ___ go swimming. Maybe twice a year.", o: ["always", "usually", "rarely"], c: 2, n: "Yılda iki kez → rarely." }
      ],
      ilgili: ["a1-present-simple"]
    },
    {
      id: "a1-wh-questions", sonra: "a1-present-continuous",
      title: "Wh- questions: what, where, when, who, why, how",
      desc: "Bilgi isteyen soru kelimeleri ve soru cümlesinin dizilimi.",
      usage: "Evet/hayır cevabı değil, bilgi almak istediğimizde kullanılır.",
      formula: "• Soru kelimesi + yardımcı fiil (do/does/did, am/is/are, can…) + özne + fiil?\n  Where do you live? | What is she doing? | When can we meet?\n• what (ne), where (nerede), when (ne zaman), who (kim), why (neden), how (nasıl), which (hangisi), whose (kimin)\n• how + sıfat/zarf: how old, how many, how much, how long, how often, how far",
      forms: {
        positive: "Cevap: I live in Izmir. (İzmir'de yaşıyorum.)",
        negative: "Why don't you come with us? (Neden bizimle gelmiyorsun?)",
        question: "Where do you live? (Nerede yaşıyorsun?)"
      },
      examples: [
        { en: "What time does the lesson start?", tr: "Ders saat kaçta başlıyor?" },
        { en: "How long have you lived here?", tr: "Ne kadar zamandır burada yaşıyorsun?" },
        { en: "Who wrote this book?", tr: "Bu kitabı kim yazdı?" }
      ],
      mistake: { wrong: "Where you live?", correct: "Where do you live?", note: "Bilgi sorusunda soru kelimesinden sonra yardımcı fiil gelir; atlanamaz." },
      ozet: "Soru kelimesi başa gelir, ardından evet/hayır sorusundaki sıra korunur: Where + do you live?",
      sinyal: ["soru kelimesi + yardımcı fiil + özne", "who/what özne ise yardımcı fiil yok"],
      tr: "Türkçede soru kelimesi yüklemin yanına gelir (‘Nerede yaşıyorsun?’). İngilizcede her zaman en başa gelir ve arkasından yardımcı fiil gelir.",
      incelik: [
        "Özne sorusu: Who lives here? (Who does live ✗). Nesne sorusu: Who do you love?",
        "what / which: seçenek sınırlıysa which: Which colour do you prefer, red or blue?",
        "Edat sona gelir: Where are you from? Who are you talking to?",
        "how much (sayılamayan / fiyat), how many (sayılabilen): How much is it? How many brothers do you have?"
      ],
      hatalar: [
        { y: "What did happen?", d: "What happened?", n: "what özne ise did kullanılmaz." },
        { y: "How many money do you have?", d: "How much money do you have?", n: "money sayılamaz → how much." }
      ],
      test: [
        { s: "___ is your birthday? – In June.", o: ["Where", "When", "Who"], c: 1, n: "Zaman → when." },
        { s: "Where ___ your brother work?", o: ["do", "does", "is"], c: 1, n: "Your brother = he → does." },
        { s: "Who ___ the window? – Ahmet did.", o: ["did break", "broke", "breaked"], c: 1, n: "Özne sorusu → yardımcı fiil yok, V2." },
        { s: "___ old is your grandfather?", o: ["What", "How", "Which"], c: 1, n: "Yaş → how old." }
      ],
      ilgili: ["a1-to-be", "a1-present-simple"]
    },
    {
      id: "a1-imperatives",
      title: "Imperatives: Open the door / Don't run / Let's go",
      desc: "Emir, talimat, uyarı ve öneri bildiren cümleler.",
      usage: "Yol tarifinde, tariflerde, kullanım talimatlarında, uyarılarda ve arkadaşça önerilerde kullanılır.",
      formula: "• Olumlu: V1 (yalın fiil) + ... → Open your books.\n• Olumsuz: Don't + V1 → Don't touch it.\n• Kibar: Please + V1 / V1 + please → Please sit down.\n• Öneri (biz): Let's + V1 / Let's not + V1 → Let's go!",
      forms: {
        positive: "Turn left at the traffic lights. (Trafik ışıklarından sola dön.)",
        negative: "Don't forget your passport. (Pasaportunu unutma.)",
        question: "Let's eat out tonight, shall we? (Bu akşam dışarıda yiyelim mi?)"
      },
      examples: [
        { en: "Mix the flour and the sugar.", tr: "Unu ve şekeri karıştır." },
        { en: "Please be quiet in the library.", tr: "Lütfen kütüphanede sessiz olun." },
        { en: "Let's take a break.", tr: "Biraz ara verelim." }
      ],
      mistake: { wrong: "Not open the window.", correct: "Don't open the window.", note: "Olumsuz emir don't + V1 ile yapılır." },
      ozet: "Özne yazılmaz; yalın fiille başlanır. Olumsuz → Don't, öneri → Let's.",
      sinyal: ["talimat", "tarif", "uyarı", "Let's"],
      tr: "Türkçedeki emir kipi (‘Gel!’, ‘Gelme!’, ‘Gelin lütfen’) ile aynı mantıktadır; tekil-çoğul ayrımı yoktur: Come here! hem ‘gel’ hem ‘gelin’ olabilir.",
      incelik: [
        "to be ile de kurulur: Be careful! Don't be late!",
        "Vurgulu rica: Do sit down (lütfen oturun, buyurun).",
        "Kibarlık için genellikle soru biçimi tercih edilir: Could you close the door, please?",
        "Let's'in sonundaki 's = us: Let us pray (resmî)."
      ],
      hatalar: [{ y: "Don't to be sad.", d: "Don't be sad.", n: "Don't + V1 (to yok)." }],
      test: [
        { s: "___ late for the exam!", o: ["Don't be", "Not be", "Don't"], c: 0, n: "to be ile olumsuz emir: Don't be." },
        { s: "It's hot. ___ open the window.", o: ["Let's", "Let", "Lets"], c: 0, n: "Öneri → Let's + V1." },
        { s: "___ the medicine twice a day.", o: ["Taking", "Take", "To take"], c: 1, n: "Talimat → yalın fiil." }
      ],
      ilgili: ["a1-can-cant"]
    }
  ],

  A2: [
    {
      id: "a2-too-enough", sonra: "a2-comparatives",
      title: "Too / enough / so / such",
      desc: "Bir niteliğin fazla mı, yeterli mi olduğunu ve derecesini belirten yapılar.",
      usage: "‘Çok … (olduğu için yapamamak)’ anlamında too, ‘yeterince’ anlamında enough, ‘öyle / o kadar’ vurgusunda so / such kullanılır.",
      formula: "• too + sıfat (+ to V1): too expensive (to buy)\n• sıfat + enough (+ to V1): old enough (to drive)\n• enough + isim: enough money / time\n• so + sıfat/zarf: so tired | such + (a/an) + sıfat + isim: such a nice day\n• so / such ... that: It was so cold that we stayed in.",
      forms: {
        positive: "She is old enough to vote. (Oy verecek yaşta.)",
        negative: "This coffee is too hot to drink. (Bu kahve içilemeyecek kadar sıcak.)",
        question: "Do we have enough chairs for everyone? (Herkese yetecek kadar sandalyemiz var mı?)"
      },
      examples: [
        { en: "The box is too heavy for me to carry.", tr: "Kutu benim taşıyamayacağım kadar ağır." },
        { en: "He didn't study hard enough.", tr: "Yeterince sıkı çalışmadı." },
        { en: "It was such a good film that I watched it twice.", tr: "O kadar iyi bir filmdi ki iki kez izledim." }
      ],
      mistake: { wrong: "This shirt is enough big for me.", correct: "This shirt is big enough for me.", note: "enough sıfattan SONRA, isimden ÖNCE gelir." },
      ozet: "too = gereğinden fazla (olumsuz sonuç); enough = yeterli; very = çok (sonuç yok).",
      sinyal: ["too ... to", "... enough to", "so ... that", "such a ... that"],
      tr: "‘Çok’ kelimesi Türkçede hem very hem too karşılığıdır. This bag is very expensive (çok pahalı, belki alırım) ≠ This bag is too expensive (alamayacağım kadar pahalı).",
      incelik: [
        "too much + sayılamayan, too many + sayılabilen: too much sugar, too many cars.",
        "Kişi belirtmek için for: It's too difficult for children.",
        "such çoğul ve sayılamayanla a almaz: such nice people, such bad weather.",
        "not ... enough ≈ too: He isn't tall enough = He is too short."
      ],
      hatalar: [
        { y: "It was so a nice day.", d: "It was such a nice day.", n: "a + sıfat + isim önünde such." },
        { y: "I'm too much tired.", d: "I'm too tired. / I'm very tired.", n: "Sıfattan önce too much değil too." }
      ],
      test: [
        { s: "I can't reach the shelf. I'm not ___.", o: ["enough tall", "tall enough", "too tall"], c: 1, n: "Sıfat + enough." },
        { s: "There are ___ people here. Let's go somewhere else.", o: ["too much", "too many", "enough"], c: 1, n: "people sayılabilen → too many." },
        { s: "The film was ___ boring that I fell asleep.", o: ["such", "so", "too"], c: 1, n: "so + sıfat + that." },
        { s: "We don't have ___ to finish the project today.", o: ["time enough", "enough time", "too time"], c: 1, n: "enough + isim." }
      ],
      ilgili: ["a2-comparatives", "a2-some-any-much-many"]
    },
    {
      id: "a2-conjunctions",
      title: "Conjunctions: and, but, or, so, because, although",
      desc: "Cümleleri ve fikirleri birbirine bağlayan temel bağlaçlar.",
      usage: "Ekleme (and), zıtlık (but, although), seçenek (or), sonuç (so) ve neden (because) bildirmek için kullanılır. Kısa cümleleri birleştirip akıcı paragraf yazmanın temelidir.",
      formula: "• Cümle + and / but / or / so + cümle → I was tired, so I went to bed.\n• Ana cümle + because + neden → I went to bed because I was tired.\n• Although + zıt cümle, ana cümle → Although it was late, we kept working.\n• because of + İSİM → because of the rain",
      forms: {
        positive: "I like tea, but my wife prefers coffee. (Ben çayı severim ama eşim kahveyi tercih eder.)",
        negative: "I didn't go out because it was raining. (Yağmur yağdığı için dışarı çıkmadım.)",
        question: "Would you like tea or coffee? (Çay mı kahve mi istersiniz?)"
      },
      examples: [
        { en: "The test was difficult, so I studied all weekend.", tr: "Sınav zordu, bu yüzden tüm hafta sonu çalıştım." },
        { en: "Although he is rich, he lives in a small flat.", tr: "Zengin olmasına rağmen küçük bir dairede yaşıyor." },
        { en: "The flight was cancelled because of the storm.", tr: "Uçuş fırtına yüzünden iptal edildi." }
      ],
      mistake: { wrong: "Although it was cold, but we went swimming.", correct: "Although it was cold, we went swimming.", note: "although ve but aynı cümlede birlikte kullanılmaz; ikisi de zıtlık bildirir." },
      ozet: "because nedeni, so sonucu verir; although zıtlığı cümlenin başında, but ortasında kurar.",
      sinyal: ["neden → because / because of", "sonuç → so", "zıtlık → but / although / however"],
      tr: "Türkçede ‘-dığı için’ ve ‘-masına rağmen’ ekleri fiile bitişir; İngilizcede ayrı bağlaç kelimesi cümlenin başına gelir: Yorgun olduğum için → because I was tired.",
      incelik: [
        "because + cümle (özne + fiil), because of + isim: because it rained / because of the rain.",
        "so öncesinde genellikle virgül konur: It rained, so we stayed home.",
        "Yazı dilinde cümleyi And / But / So ile başlatmak gayriresmî sayılır; However, Therefore tercih edilir (B2: Linkers).",
        "both ... and, either ... or, neither ... nor ikili bağlaçlardır."
      ],
      hatalar: [{ y: "I stayed home because of I was sick.", d: "I stayed home because I was sick.", n: "Cümle → because; isim → because of." }],
      test: [
        { s: "I was hungry, ___ I made a sandwich.", o: ["because", "so", "but"], c: 1, n: "Sonuç → so." },
        { s: "We couldn't play ___ the rain.", o: ["because", "because of", "so"], c: 1, n: "İsim → because of." },
        { s: "___ she was tired, she finished her homework.", o: ["Although", "But", "Because"], c: 0, n: "Cümle başında zıtlık → Although." },
        { s: "Do you want to walk ___ take a taxi?", o: ["and", "or", "so"], c: 1, n: "Seçenek → or." }
      ],
      ilgili: ["b2-linkers"]
    },
    {
      id: "a2-verb-patterns",
      title: "Verb patterns: want to / like doing / would like to",
      desc: "Fiilden sonra gelen ikinci fiilin biçimi: to V1 mi, V-ing mi?",
      usage: "İstek, plan ve tercihlerden söz ederken (want to go, enjoy reading, would like to try) kullanılır.",
      formula: "• to V1 alanlar: want, need, decide, hope, plan, learn, try, would like\n• V-ing alanlar: enjoy, finish, mind, stop, practise, can't stand\n• İkisi de olur (anlam neredeyse aynı): like, love, hate, start, begin\n• would like + to V1 = istemek (kibar): I'd like to order.",
      forms: {
        positive: "I enjoy cooking for my friends. (Arkadaşlarıma yemek yapmaktan hoşlanırım.)",
        negative: "She doesn't want to stay here. (Burada kalmak istemiyor.)",
        question: "Would you like to come with us? (Bizimle gelmek ister misin?)"
      },
      examples: [
        { en: "We decided to take the train.", tr: "Trene binmeye karar verdik." },
        { en: "Have you finished reading the book?", tr: "Kitabı okumayı bitirdin mi?" },
        { en: "I'd like to book a table for two.", tr: "İki kişilik masa ayırtmak istiyorum." }
      ],
      mistake: { wrong: "I enjoy to play chess.", correct: "I enjoy playing chess.", note: "enjoy'dan sonra V-ing gelir." },
      ozet: "Fiilin arkasındaki kalıp ezberlenir: want/decide → to V1; enjoy/finish → V-ing.",
      sinyal: ["want / need / decide → to", "enjoy / finish / mind → -ing", "would like → to"],
      tr: "Türkçede ‘yapmak istiyorum’ ve ‘yapmayı seviyorum’ aynı ad-fiille kurulur; İngilizcede fiile göre biçim değişir. Kelime öğrenirken kalıbıyla birlikte not almak en etkili yoldur.",
      incelik: [
        "like + V-ing genel zevk (I like swimming), would like + to V1 belirli istek (I'd like to swim now).",
        "go + V-ing aktiviteler: go shopping, go swimming, go fishing.",
        "Daha fazla kalıp ve anlam değiştiren fiiller (remember, stop, try) B2 konusunda."
      ],
      hatalar: [{ y: "I would like going home.", d: "I would like to go home.", n: "would like + to V1." }],
      test: [
        { s: "I need ___ some milk.", o: ["buying", "to buy", "buy"], c: 1, n: "need + to V1." },
        { s: "Do you mind ___ for a moment?", o: ["waiting", "to wait", "wait"], c: 0, n: "mind + V-ing." },
        { s: "Let's go ___ this weekend.", o: ["to shop", "shopping", "shop"], c: 1, n: "go + V-ing aktivite." },
        { s: "She hopes ___ medicine at university.", o: ["studying", "to study", "study"], c: 1, n: "hope + to V1." }
      ],
      ilgili: ["b2-gerunds-infinitives"]
    }
  ],

  B1: [
    {
      id: "b1-past-perfect", sonra: "b1-pc",
      title: "Past Perfect (had + V3)",
      desc: "Geçmişteki bir olaydan DAHA ÖNCE olmuş olan eylem: ‘geçmişin geçmişi’.",
      usage: "Geçmişte iki olay anlatılırken önce olanı belirtmek için; özellikle when, by the time, before, after, already ile kullanılır.",
      formula: "• Özne + had + V3 (tüm kişilerde aynı)\n• Olumsuz: hadn't + V3\n• Soru: Had + özne + V3?\n• Sıra: [önce olan → had V3] + [sonra olan → V2]",
      forms: {
        positive: "When we arrived, the film had already started. (Vardığımızda film çoktan başlamıştı.)",
        negative: "I hadn't seen the sea before I moved to Izmir. (İzmir'e taşınmadan önce denizi hiç görmemiştim.)",
        question: "Had you met him before the party? (Partiden önce onunla tanışmış mıydın?)"
      },
      examples: [
        { en: "By the time the police came, the thief had escaped.", tr: "Polis geldiğinde hırsız kaçmıştı." },
        { en: "She was nervous because she had never flown before.", tr: "Daha önce hiç uçmadığı için gergindi." },
        { en: "After he had finished his work, he went home.", tr: "İşini bitirdikten sonra eve gitti." }
      ],
      mistake: { wrong: "When I got to the station, the train left.", correct: "When I got to the station, the train had left.", note: "Tren ben varmadan önce gitmişse Past Perfect gerekir; Past Simple ‘ben varınca kalktı’ anlamına gelir." },
      ozet: "İki geçmiş olaydan önce olanı had + V3 ile işaretlenir: ‘-mişti’.",
      sinyal: ["by the time", "before", "after", "already", "just", "never ... before", "when (önce olanı göstermek için)"],
      tr: "Türkçedeki ‘-mişti’ ekine karşılık gelir: ‘Ben geldiğimde gitmişti’ → When I came, he had left.",
      incelik: [
        "Sıra before/after ile zaten açıksa Past Simple da kabul edilir: After he finished, he went home.",
        "Reported speech'te Past Simple ve Present Perfect → Past Perfect olur.",
        "Type 3 koşul ve geçmiş pişmanlıkta (wish + had V3) kullanılır.",
        "Past Perfect Continuous: had been + V-ing, öncesindeki sürecin süresi: She was tired because she had been working all day."
      ],
      hatalar: [{ y: "I had went there before.", d: "I had gone there before.", n: "had + V3." }],
      test: [
        { s: "When I opened the fridge, I saw that someone ___ my cake.", o: ["ate", "had eaten", "has eaten"], c: 1, n: "Pastayı ben bakmadan önce yemiş → had eaten." },
        { s: "By the time we got to the cinema, the film ___.", o: ["started", "had started", "has started"], c: 1, n: "by the time + Past Perfect." },
        { s: "I ___ sushi before I went to Japan.", o: ["had never eaten", "never eat", "have never eaten"], c: 0, n: "Gezi öncesi deneyim → had never eaten." },
        { s: "When the teacher came in, the students ___ quiet.", o: ["had become", "became", "have become"], c: 1, n: "Öğretmen girince sustular (art arda) → Past Simple." }
      ],
      ilgili: ["b1-pc", "a2-present-perfect-intro", "b2-reported-speech"]
    },
    {
      id: "b1-question-tags",
      title: "Question tags: ..., isn't it? / ..., didn't you?",
      desc: "Cümle sonuna eklenen ‘değil mi?’ soruları.",
      usage: "Onay beklerken ya da bildiğimiz bir şeyi teyit ederken konuşmada kullanılır.",
      formula: "• Olumlu cümle → olumsuz tag: You are a student, aren't you?\n• Olumsuz cümle → olumlu tag: She doesn't smoke, does she?\n• Tag: yardımcı fiil + zamir (cümledeki zamanla aynı)\n• Yardımcı fiil yoksa do / does / did: You live here, don't you?",
      forms: {
        positive: "It's a lovely day, isn't it? (Güzel bir gün, değil mi?)",
        negative: "You haven't seen my keys, have you? (Anahtarlarımı görmedin, değil mi?)",
        question: "He went to Ankara, didn't he? (Ankara'ya gitti, değil mi?)"
      },
      examples: [
        { en: "They can swim, can't they?", tr: "Yüzebiliyorlar, değil mi?" },
        { en: "Your sister lives in Bursa, doesn't she?", tr: "Kız kardeşin Bursa'da yaşıyor, değil mi?" },
        { en: "We won't be late, will we?", tr: "Geç kalmayacağız, değil mi?" }
      ],
      mistake: { wrong: "You like coffee, isn't it?", correct: "You like coffee, don't you?", note: "Tag cümledeki fiile uyar; her duruma ‘isn't it’ kullanılmaz." },
      ozet: "Olumlu cümleye olumsuz, olumsuz cümleye olumlu tag; zaman ve kişi cümleyle aynı.",
      sinyal: ["konuşma dili", "onay bekleme"],
      tr: "Türkçedeki tek kalıp ‘değil mi?’nin karşılığı cümleye göre değişir: isn't it, don't you, didn't he, can't they…",
      incelik: [
        "I am → aren't I?: I'm right, aren't I?",
        "Let's → shall we?: Let's go, shall we? | Emir → will you?: Close the door, will you?",
        "never, nobody, nothing, hardly cümleyi olumsuz yapar → olumlu tag: She never calls, does she?",
        "nothing / everything → it; nobody / everybody → they: Everybody is here, aren't they?"
      ],
      hatalar: [{ y: "He never complains, doesn't he?", d: "He never complains, does he?", n: "never olumsuz → olumlu tag." }],
      test: [
        { s: "You're coming tonight, ___?", o: ["aren't you", "don't you", "isn't it"], c: 0, n: "are → aren't you." },
        { s: "She didn't call you, ___?", o: ["didn't she", "did she", "does she"], c: 1, n: "Olumsuz cümle → olumlu tag." },
        { s: "I'm late, ___?", o: ["amn't I", "aren't I", "am I"], c: 1, n: "I am → aren't I." },
        { s: "Let's start, ___?", o: ["shall we", "will you", "don't we"], c: 0, n: "Let's → shall we." }
      ],
      ilgili: ["a1-wh-questions"]
    },
    {
      id: "b1-quantifiers",
      title: "Quantifiers: all, both, either, neither, each, every, none",
      desc: "İki ya da daha fazla kişi/şeyin tamamını, hiçbirini ya da her birini anlatan belirleyiciler.",
      usage: "Grupları karşılaştırırken ve genelleme yaparken (both of them, neither option, every student) kullanılır; akademik okuma metinlerinde çok sık geçer.",
      formula: "• İki şey: both (ikisi de), either (ikisinden biri), neither (hiçbiri)\n• İkiden fazla: all (hepsi), none (hiçbiri), any (herhangi)\n• each / every + TEKİL isim + tekil fiil: Every student has a book.\n• both / all + of + the/zamir: both of us, all of the books\n• either / neither + of + çoğul + (genellikle) tekil fiil",
      forms: {
        positive: "Both of my brothers live abroad. (İki erkek kardeşim de yurt dışında yaşıyor.)",
        negative: "Neither answer is correct. (İki cevaptan hiçbiri doğru değil.)",
        question: "Does every room have a window? (Her odanın penceresi var mı?)"
      },
      examples: [
        { en: "You can take either bus; they both go to the centre.", tr: "İki otobüsten birine binebilirsin; ikisi de merkeze gidiyor." },
        { en: "None of the students knew the answer.", tr: "Öğrencilerin hiçbiri cevabı bilmiyordu." },
        { en: "Each participant received a certificate.", tr: "Her katılımcı bir sertifika aldı." }
      ],
      mistake: { wrong: "Every students have a laptop.", correct: "Every student has a laptop.", note: "every / each tekil isim ve tekil fiil alır." },
      ozet: "İki şey için both / either / neither, daha fazlası için all / any / none; each / every tekil ister.",
      sinyal: ["both ... and", "either ... or", "neither ... nor", "each of", "none of"],
      tr: "Türkçede ‘hiçbiri’ olumsuz fiille kullanılır (‘Hiçbiri gelmedi’); İngilizcede neither / none zaten olumsuzdur ve fiil olumlu kalır: None of them came (None of them didn't come ✗).",
      incelik: [
        "each tek tek, every toplu bakış: Each child got a different gift. / Every child likes gifts.",
        "every 2'den fazlası için; iki şey için each: She had a ring on each hand (every hand ✗).",
        "neither ... nor ile fiil yakındaki özneye uyar: Neither my parents nor my sister is coming.",
        "Olumsuz cümlede either: I don't like tea. – I don't either. (= Neither do I.)"
      ],
      hatalar: [{ y: "Neither of them didn't come.", d: "Neither of them came.", n: "Neither olumsuzdur; çift olumsuz olmaz." }],
      test: [
        { s: "I have two sisters. ___ of them are teachers.", o: ["Both", "All", "Either"], c: 0, n: "İki kişi, ikisi de → both." },
        { s: "___ student must bring an ID card.", o: ["All", "Every", "Both"], c: 1, n: "Tekil isim → every." },
        { s: "We tried three restaurants, but ___ of them was open.", o: ["neither", "none", "either"], c: 1, n: "Üç şey, hiçbiri → none." },
        { s: "‘Tea or coffee?’ – ‘___. I'll have water.’", o: ["Either", "Neither", "Both"], c: 1, n: "İkisi de değil → neither." }
      ],
      ilgili: ["a2-some-any-much-many"]
    },
    {
      id: "b1-adjectives-ed-ing",
      title: "-ed / -ing adjectives: bored vs boring",
      desc: "Aynı fiilden türeyen iki sıfat: -ed hissedilen duygu, -ing duyguya yol açan şey.",
      usage: "Kişilerin hissettiklerini (-ed) ve bir şeyin/kişinin nasıl bir etki bıraktığını (-ing) anlatırken kullanılır.",
      formula: "• Kişi + is + -ed → hissettiği duygu: I'm bored. (Sıkıldım.)\n• Şey / kişi + is + -ing → etkisi: The lesson is boring. (Ders sıkıcı.)\n• Çiftler: interested / interesting, tired / tiring, confused / confusing, surprised / surprising, excited / exciting, embarrassed / embarrassing",
      forms: {
        positive: "I'm interested in history. History is interesting. (Tarihe ilgi duyuyorum. Tarih ilginç.)",
        negative: "The match wasn't exciting. (Maç heyecanlı değildi.)",
        question: "Were you surprised by the result? (Sonuca şaşırdın mı?)"
      },
      examples: [
        { en: "It was a long and tiring journey.", tr: "Uzun ve yorucu bir yolculuktu." },
        { en: "The students looked confused.", tr: "Öğrenciler kafası karışmış görünüyordu." },
        { en: "His explanation was confusing.", tr: "Açıklaması kafa karıştırıcıydı." }
      ],
      mistake: { wrong: "I'm very boring in this class.", correct: "I'm very bored in this class.", note: "‘I'm boring’ = Ben sıkıcı biriyim! Hissedilen duygu için -ed." },
      ozet: "-ed = ben öyle hissediyorum; -ing = o şey bana öyle hissettiriyor.",
      sinyal: ["feel / get / look + -ed", "be interested in / bored with / excited about"],
      tr: "‘Sıkıldım’ → I'm bored; ‘Sıkıcı’ → boring. Türkçede ek farkı belirgin olduğu hâlde İngilizcede karıştırılması çok yaygın bir hatadır.",
      incelik: [
        "Edat kalıpları: interested in, bored with/of, excited about, surprised at/by, worried about, tired of (bıkmak).",
        "Kişi de -ing olabilir; o zaman başkalarına etkisini anlatır: He's an interesting person."
      ],
      hatalar: [{ y: "I'm interesting in music.", d: "I'm interested in music.", n: "Duygu → interested in." }],
      test: [
        { s: "The documentary was really ___.", o: ["interested", "interesting", "interest"], c: 1, n: "Şeyin etkisi → -ing." },
        { s: "I was ___ when I saw my exam score.", o: ["shocking", "shocked", "shock"], c: 1, n: "Hissedilen duygu → -ed." },
        { s: "Working twelve hours a day is very ___.", o: ["tiring", "tired", "tire"], c: 0, n: "Etkisi → tiring." }
      ],
      ilgili: ["b2-gerunds-infinitives"]
    }
  ],

  B2: [
    {
      id: "b2-future-cont-perfect",
      title: "Future Continuous & Future Perfect",
      desc: "Gelecekte belli bir anda sürüyor olacak eylem (will be V-ing) ve gelecekte belli bir ana kadar tamamlanmış olacak eylem (will have V3).",
      usage: "‘Yarın bu saatte uçuyor olacağım’ ya da ‘2030'a kadar mezun olmuş olacağım’ gibi gelecekteki bir zaman noktasına göre konuşurken kullanılır.",
      formula: "• Future Continuous: will be + V-ing → This time tomorrow, I'll be flying.\n• Future Perfect: will have + V3 → By 2030, I'll have graduated.\n• Future Perfect Continuous: will have been + V-ing → By June, I'll have been working here for 5 years.",
      forms: {
        positive: "By the end of the month, we will have finished the project. (Ay sonuna kadar projeyi bitirmiş olacağız.)",
        negative: "Don't call at 8; I won't be working then. (Saat 8'de arama; o saatte çalışıyor olmayacağım.)",
        question: "Will you be using the car tonight? (Bu akşam arabayı kullanıyor olacak mısın?)"
      },
      examples: [
        { en: "At 10 a.m. tomorrow, I'll be taking my driving test.", tr: "Yarın sabah 10'da ehliyet sınavına giriyor olacağım." },
        { en: "By the time you arrive, the meeting will have ended.", tr: "Sen gelene kadar toplantı bitmiş olacak." },
        { en: "She will have saved enough money by next summer.", tr: "Gelecek yaza kadar yeterince para biriktirmiş olacak." }
      ],
      mistake: { wrong: "By next year, I will finish my degree.", correct: "By next year, I will have finished my degree.", note: "by + gelecek zaman noktası → o ana kadar tamamlanmış eylem: will have + V3." },
      ozet: "this time tomorrow → will be V-ing; by + gelecek zaman → will have V3.",
      sinyal: ["this time next week", "at 5 p.m. tomorrow", "by 2030", "by the time", "by the end of"],
      tr: "Future Continuous ‘-iyor olacağım’, Future Perfect ‘-miş olacağım’ yapısına karşılık gelir.",
      incelik: [
        "Future Continuous, karşıdakinin planını kibarca sormak için de kullanılır: Will you be staying for dinner?",
        "by the time / when / before'dan sonra Present Simple kullanılır: by the time you arrive (will arrive ✗).",
        "Durum fiilleri continuous olmaz: By next year I'll have known her for 10 years."
      ],
      hatalar: [{ y: "This time tomorrow I will lie on the beach.", d: "This time tomorrow I will be lying on the beach.", n: "Gelecekte belli anda süren eylem → will be + V-ing." }],
      test: [
        { s: "Don't phone me at 9; I ___ dinner.", o: ["will have", "will be having", "will have had"], c: 1, n: "O saatte süren eylem." },
        { s: "By 2030, scientists ___ a cure for the disease.", o: ["will find", "will have found", "will be finding"], c: 1, n: "by + gelecek → will have V3." },
        { s: "By the time she ___, we will have left.", o: ["will arrive", "arrives", "arrived"], c: 1, n: "by the time + Present Simple." }
      ],
      ilgili: ["a2-future", "b1-past-perfect"]
    },
    {
      id: "b2-noun-clauses", sonra: "b2-reported-speech",
      title: "Noun clauses: that / what / whether / wh- clauses",
      desc: "Cümlede isim görevi gören (özne ya da nesne olan) yan cümleler.",
      usage: "Düşünce, bilgi ve şüphe aktarırken (I think that..., I don't know where he lives, What he said was true) ve akademik metinlerde sık kullanılır.",
      formula: "• that + cümle: I believe (that) she is right.\n• wh- + özne + fiil (düz sıra!): I don't know where he lives.\n• if / whether + cümle: I wonder whether it will rain.\n• Özne olarak: What she said surprised me. / That he lied is obvious. (resmî)\n• Dolaylı soru: Could you tell me where the station is?",
      forms: {
        positive: "I know what you mean. (Ne demek istediğini biliyorum.)",
        negative: "I'm not sure whether he will come. (Gelip gelmeyeceğinden emin değilim.)",
        question: "Do you know when the exam starts? (Sınavın ne zaman başladığını biliyor musun?)"
      },
      examples: [
        { en: "Can you tell me how much this costs?", tr: "Bunun ne kadar olduğunu söyleyebilir misiniz?" },
        { en: "What matters most is your health.", tr: "En önemli olan sağlığın." },
        { en: "The study shows that sleep improves memory.", tr: "Çalışma, uykunun belleği güçlendirdiğini gösteriyor." }
      ],
      mistake: { wrong: "Do you know where is the bank?", correct: "Do you know where the bank is?", note: "İsim cümleciğinde soru devrikliği yapılmaz; özne + fiil sırası korunur." },
      ozet: "Bir cümle başka bir cümlenin özne ya da nesnesi olunca düz cümle sırası (özne + fiil) kullanılır.",
      sinyal: ["I think / believe / know that", "I wonder if / whether", "Do you know / Can you tell me + wh-", "The fact that..."],
      tr: "Türkçede ‘-diğini, -eceğini’ ekleriyle yaptığımızı İngilizce that / wh- ile yapar: ‘Nerede yaşadığını bilmiyorum’ → I don't know where he lives.",
      incelik: [
        "whether ... or not; edattan sonra ve to V1 ile yalnız whether: It depends on whether... / I can't decide whether to go.",
        "Özne olarak that-cümlesi resmîdir; genellikle It is ... that yapısına çevrilir: It is obvious that he lied.",
        "what = the thing(s) that: What I need is coffee (Which I need ✗).",
        "The fact that + cümle, edattan sonra cümle getirmek için: Despite the fact that it rained..."
      ],
      hatalar: [{ y: "I don't know what does he want.", d: "I don't know what he wants.", n: "Düz sıra, does yok." }],
      test: [
        { s: "Could you tell me where ___?", o: ["is the library", "the library is", "does the library"], c: 1, n: "Dolaylı soru → düz sıra." },
        { s: "I'm not sure ___ she will accept the offer.", o: ["that", "whether", "what"], c: 1, n: "Şüphe → whether / if." },
        { s: "___ he said made everyone laugh.", o: ["That", "What", "Which"], c: 1, n: "‘Söylediği şey’ → What." },
        { s: "It depends on ___ we have enough money.", o: ["if", "whether", "that"], c: 1, n: "Edattan sonra whether." }
      ],
      ilgili: ["b2-reported-speech", "b1-relative-clauses", "c1-cleft-sentences"]
    },
    {
      id: "b2-linkers",
      title: "Linkers: however, therefore, despite, whereas, in addition",
      desc: "Akademik ve resmî yazıda fikirler arası ilişkiyi kuran bağlayıcılar: zıtlık, sonuç, ekleme, neden, amaç.",
      usage: "Essay, rapor ve okuma sorularında paragraf içi mantığı kurar; YDS / YÖKDİL / hazırlık sınavlarında bağlaç ve cümle tamamlama sorularının temelidir.",
      formula: "• Zıtlık: however, nevertheless (cümle başı, virgül) | although, even though, whereas, while (+ cümle) | despite, in spite of (+ isim / V-ing)\n• Sonuç: therefore, consequently, as a result, thus (cümle başı) | so (+ cümle) | so that (amaç)\n• Ekleme: in addition, moreover, furthermore, besides\n• Neden: because, since, as (+ cümle) | due to, owing to, because of (+ isim)\n• Amaç: to / in order to / so as to + V1 | so that + cümle",
      forms: {
        positive: "The results were promising; however, more research is needed. (Sonuçlar umut vericiydi; ancak daha fazla araştırma gerekiyor.)",
        negative: "Despite the rain, the event was not cancelled. (Yağmura rağmen etkinlik iptal edilmedi.)",
        question: "Should cities ban cars? In addition to reducing pollution, it would... (Şehirler arabayı yasaklamalı mı? Kirliliği azaltmanın yanı sıra…)"
      },
      examples: [
        { en: "Some students prefer online classes, whereas others find them isolating.", tr: "Bazı öğrenciler çevrim içi dersleri tercih ederken diğerleri onları yalnızlaştırıcı buluyor." },
        { en: "The data was incomplete. Therefore, the conclusions are tentative.", tr: "Veriler eksikti. Bu nedenle sonuçlar geçicidir." },
        { en: "The flight was delayed due to heavy fog.", tr: "Uçuş yoğun sis nedeniyle ertelendi." }
      ],
      mistake: { wrong: "Despite it was expensive, we bought it.", correct: "Despite the fact that it was expensive / Although it was expensive, we bought it.", note: "despite / in spite of ardından cümle değil isim ya da V-ing alır." },
      ozet: "Bağlayıcının arkasına ne geldiğine bak: cümle mi (although, because), isim mi (despite, due to), yoksa yeni cümle mi (however, therefore)?",
      sinyal: ["zıtlık", "sonuç", "ekleme", "neden", "amaç"],
      tr: "Türkçede ‘-e rağmen’ hem isimle hem fiille kullanılır (yağmura rağmen / yağdığı hâlde). İngilizcede ikisi ayrılır: despite the rain / although it rained.",
      incelik: [
        "however bir bağlaç değil zarftır; iki cümleyi virgülle bağlayamaz: ...; however, ... ya da ... . However, ...",
        "whereas / while iki şeyi karşılaştırır (zıt özellikler), although beklenmedik sonucu anlatır.",
        "since ve as ‘çünkü’ anlamında cümle başında sık kullanılır: Since it was late, we left.",
        "in spite of = despite (despite of ✗)."
      ],
      hatalar: [
        { y: "It was cold, however we went out.", d: "It was cold; however, we went out.", n: "however iki cümleyi virgülle bağlamaz." },
        { y: "Despite of the traffic, we arrived on time.", d: "Despite the traffic, we arrived on time.", n: "despite of diye bir kalıp yok." }
      ],
      test: [
        { s: "___ the heavy traffic, we arrived on time.", o: ["Although", "Despite", "However"], c: 1, n: "İsim → despite." },
        { s: "The experiment failed. ___, the team learned a lot.", o: ["Nevertheless", "Because", "Despite"], c: 0, n: "Yeni cümle başında zıtlık → Nevertheless." },
        { s: "He saved money ___ he could travel abroad.", o: ["so that", "therefore", "due to"], c: 0, n: "Amaç + cümle → so that." },
        { s: "The match was postponed ___ the storm.", o: ["because", "due to", "since"], c: 1, n: "İsim → due to." },
        { s: "My brother loves sport, ___ I prefer reading.", o: ["whereas", "despite", "therefore"], c: 0, n: "İki kişinin zıt özelliği → whereas." }
      ],
      ilgili: ["a2-conjunctions", "c1-hedging", "c1-nominalisation"]
    }
  ],

  C1: [
    {
      id: "c1-hedging",
      title: "Hedging: akademik dilde ihtiyatlı ifade",
      desc: "İddiaları kesinlik derecesine göre yumuşatan modal, fiil, zarf ve kalıplar.",
      usage: "Akademik yazıda ve sunumlarda, kanıtın gücünü aşmadan iddia kurmak için kullanılır. Kesin ifade (proves, always) yerine ölçülü ifade (suggests, tends to) eleştiriye açık ve güvenilir bir ton sağlar.",
      formula: "• Modal: may, might, could + V1 → This may explain the difference.\n• Fiil: suggest, indicate, appear to, seem to, tend to → The data suggest that...\n• Zarf: possibly, probably, likely, arguably, generally, to some extent\n• Sıfat kalıbı: It is likely / possible / probable that...\n• Kişisiz edilgen: It is thought / believed / argued that...",
      forms: {
        positive: "These findings suggest that sleep may play a role in learning. (Bu bulgular uykunun öğrenmede rol oynayabileceğini düşündürüyor.)",
        negative: "The results do not necessarily mean that the method is ineffective. (Sonuçlar yöntemin etkisiz olduğu anlamına gelmeyebilir.)",
        question: "Could this be explained by other factors? (Bu başka etkenlerle açıklanabilir mi?)"
      },
      examples: [
        { en: "Social media appears to have a negative effect on attention span.", tr: "Sosyal medyanın dikkat süresi üzerinde olumsuz bir etkisi var gibi görünüyor." },
        { en: "It is likely that prices will continue to rise.", tr: "Fiyatların artmaya devam etmesi muhtemel." },
        { en: "Older participants tended to score lower.", tr: "Yaşlı katılımcılar daha düşük puan alma eğilimindeydi." }
      ],
      mistake: { wrong: "This study proves that coffee causes cancer.", correct: "This study suggests that coffee may be associated with an increased risk of cancer.", note: "Tek bir çalışma ‘kanıtlamaz’; ilişki nedensellik değildir. Akademik dilde iddia kanıtın gücüyle orantılı kurulur." },
      ozet: "İddianın gücünü kanıtın gücüne eşitle: proves → suggests, causes → may contribute to, always → tend to.",
      sinyal: ["may / might / could", "suggest / indicate", "appear / seem / tend to", "likely / possibly / arguably", "to some extent"],
      tr: "Türkçe akademik dildeki ‘-dığı düşünülmektedir, -abilir, … gibi görünmektedir’ kalıplarına karşılık gelir.",
      incelik: [
        "Aşırı hedging metni zayıflatır: It may possibly perhaps suggest... ✗ Bir iddiada bir-iki ölçüt yeterlidir.",
        "Güçlendiriciler (boosters) de vardır: clearly, undoubtedly, it is evident that; yalnız güçlü kanıtla kullanılır.",
        "data akademik dilde çoğul fiil de alır: The data suggest... (tekil kullanım da yaygınlaşmıştır).",
        "Sınav okuma sorularında yazarın tutumunu (kesin mi, temkinli mi) sorgulayan sorularda bu kelimeler ipucudur."
      ],
      hatalar: [{ y: "It is clear that the policy will definitely fail.", d: "It seems likely that the policy will face serious difficulties.", n: "Kanıt sınırlıyken kesinlik bildiren ifadelerden kaçınılır." }],
      test: [
        { s: "The evidence ___ that the treatment is effective, but more trials are needed.", o: ["proves", "suggests", "shows clearly"], c: 1, n: "Ek çalışma gerekiyorsa → suggests." },
        { s: "Younger users ___ to spend more time online.", o: ["tend", "are tend", "tending"], c: 0, n: "tend to + V1." },
        { s: "It is ___ that the economy will recover next year.", o: ["likely", "likelihood", "like"], c: 0, n: "It is likely that..." },
        { s: "Which sentence is the most appropriately hedged?", o: ["Exercise cures depression.", "Exercise may help reduce symptoms of depression.", "Exercise always helps depression."], c: 1, n: "Modal + ölçülü fiil." }
      ],
      ilgili: ["b2-advanced-passives", "c1-nominalisation", "b1-modals-deduction"]
    },
    {
      id: "c1-nominalisation",
      title: "Nominalisation: fiilden isme (akademik yoğunluk)",
      desc: "Fiil ve sıfatlarla anlatılan süreçleri isim öbeklerine dönüştürerek daha yoğun ve nesnel bir anlatım kurma.",
      usage: "Akademik yazının en belirgin özelliğidir: ‘Prices increased rapidly, so people were worried’ yerine ‘The rapid increase in prices caused widespread concern’. Okuma metinlerini anlamak ve essay'i akademik tona taşımak için gereklidir.",
      formula: "• Fiil → isim: analyse → analysis, decide → decision, fail → failure, grow → growth, reduce → reduction, increase → increase\n• Sıfat → isim: important → importance, able → ability, likely → likelihood, accurate → accuracy\n• Yapı: the + İSİM + of + nesne: the reduction of costs\n• Zarf → sıfat olur: rapidly increased → a rapid increase",
      forms: {
        positive: "The introduction of the new law led to a significant reduction in accidents. (Yeni yasanın yürürlüğe girmesi kazalarda kayda değer bir azalmaya yol açtı.)",
        negative: "There was no evidence of improvement. (Gelişme olduğuna dair kanıt yoktu.)",
        question: "What explains the failure of the policy? (Politikanın başarısızlığını ne açıklıyor?)"
      },
      examples: [
        { en: "The government decided to raise taxes. → The government's decision to raise taxes...", tr: "Hükümet vergileri artırmaya karar verdi. → Hükümetin vergileri artırma kararı…" },
        { en: "Unemployment rose sharply. → There was a sharp rise in unemployment.", tr: "İşsizlik keskin biçimde arttı. → İşsizlikte keskin bir artış oldu." },
        { en: "Because the samples were contaminated, ... → Due to the contamination of the samples, ...", tr: "Örnekler kirlendiği için… → Örneklerin kirlenmesi nedeniyle…" }
      ],
      mistake: { wrong: "The analyse of the data was difficult.", correct: "The analysis of the data was difficult.", note: "Fiil (analyse) ile isim (analysis) biçimini ayırt etmek gerekir; isim yerine fiil yazılması akademik metinde sık hatadır." },
      ozet: "Süreci isim yap, nedeni ve sonucu isim öbekleri arasında kur: X led to / resulted in / contributed to Y.",
      sinyal: ["-tion / -sion", "-ment", "-ance / -ence", "-ity", "-ness", "-al (refusal, approval)", "the ... of ..."],
      tr: "Türkçedeki ‘-me / -ma, -iş, -im’ ile kurulan isimleşmiş yapılara benzer: ‘fiyatların artması’ → the increase in prices.",
      incelik: [
        "Neden-sonuç fiilleri isimleşmeyle birlikte kullanılır: lead to, result in, contribute to, give rise to, stem from, be attributed to.",
        "Edat kalıplarına dikkat: an increase / decrease / rise IN (prices), a reduction IN, a demand FOR, an effect ON, a solution TO.",
        "Aşırı isimleşme metni okunmaz hâle getirir; aynı cümlede 3–4'ten fazla soyut isim yığmamak gerekir.",
        "due to / owing to / because of isim alır; isimleşme sayesinde because-cümlesi bunlarla değiştirilebilir."
      ],
      hatalar: [{ y: "There was an increase of unemployment.", d: "There was an increase in unemployment.", n: "increase / rise / fall + in." }],
      test: [
        { s: "The sharp ___ of costs saved the company.", o: ["reduce", "reduction", "reducing"], c: 1, n: "the + sıfat + İSİM + of: reduce → reduction." },
        { s: "There has been a sharp rise ___ the number of applicants.", o: ["of", "in", "on"], c: 1, n: "a rise in." },
        { s: "Choose the nominalised version of ‘They failed because they planned poorly.’", o: ["Their failure was due to poor planning.", "They were failure because poor plan.", "Failing was because planning poorly."], c: 0, n: "fail → failure, planned poorly → poor planning." },
        { s: "The new policy ___ a significant improvement in air quality.", o: ["resulted in", "resulted from", "led"], c: 0, n: "Neden → sonuç: resulted in." }
      ],
      ilgili: ["c1-hedging", "b2-linkers", "c1-participle-clauses"]
    }
  ]
};
