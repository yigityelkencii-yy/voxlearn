/* =====================================================================
   VoxLearn – Gramer pratik verisi (data/grammar-practice.js)

   GRAMMAR_PRODUCE[konuId]
     hedef  : [{ re, ad }]  "Kendi cümleni yaz" bölümünde cümlede aranan yapı.
              re bir düzenli ifade kaynağıdır (i bayrağıyla derlenir). Yer tutucular:
              {V3} geçmiş ortaç, {V2} geçmiş zaman, {VING} -ing fiil.
              Birden fazla hedef varsa biri bulunması yeterlidir.
     ceviri : [{ tr, en: [kabul edilen çeviriler] }]  "Türkçeden çevir" alıştırması.
              İlk çeviri örnek cevap olarak gösterilir.

   GRAMMAR_ERROR_RULES : Her cümlede çalışan genel hata kuralları
              [{ re, mesaj, konu }]. Yalnız sık ve güvenle yakalanabilen hatalar.

   GRAMMAR_LISTEN : Dinle-Ayırt çiftleri [{ a, b, konu, not }].

   GRAMMAR_EXERCISE_LINKS : Mevcut alıştırma sorularının konu eşlemesi
              (vf = Fiil Çekimi Testi id, sp = Hata Avcısı id).

   GRAMMAR_DETECT : Okuma Labı "Gramer gözlüğü" kuralları
              [{ re, konu, ad, renk }]. Otomatik ve yaklaşık tespittir.
   ===================================================================== */

const GRAMMAR_PRODUCE = {
  /* ------------------------------ A1 ------------------------------ */
  "a1-to-be": {
    hedef: [{ re: String.raw`\b(am|is|are|i'm|you're|he's|she's|it's|we're|they're|isn't|aren't)\b`, ad: "am / is / are" }],
    ceviri: [
      { tr: "Ben yorgunum.", en: ["I am tired.", "I'm tired."] },
      { tr: "Onlar evde değil.", en: ["They are not at home.", "They aren't at home.", "They're not at home."] },
      { tr: "Annen öğretmen mi?", en: ["Is your mother a teacher?", "Is your mom a teacher?", "Is your mum a teacher?"] }
    ]
  },
  "a1-pronouns": {
    hedef: [{ re: String.raw`\b(I|you|he|she|it|we|they)\b`, ad: "özne zamiri" }],
    ceviri: [
      { tr: "O (kadın) bir bankada çalışır.", en: ["She works in a bank.", "She works at a bank."] },
      { tr: "Biz İstanbul'da yaşarız.", en: ["We live in Istanbul."] },
      { tr: "Bugün hava soğuk.", en: ["It is cold today.", "It's cold today.", "Today it is cold."] }
    ]
  },
  "a1-possessives": {
    hedef: [{ re: String.raw`\b(my|your|his|her|its|our|their|mine|yours|hers|ours|theirs|me|him|us|them)\b|\w+'s\b`, ad: "iyelik / nesne zamiri ya da 's" }],
    ceviri: [
      { tr: "Bu benim çantam değil.", en: ["This is not my bag.", "This isn't my bag.", "This is not my handbag."] },
      { tr: "Kız kardeşimin arabası kırmızı.", en: ["My sister's car is red."] },
      { tr: "Onu (erkek) tanıyor musun?", en: ["Do you know him?"] }
    ]
  },
  "a1-present-simple": {
    hedef: [
      { re: String.raw`\b(he|she|it)\s+(\w+s)\b`, ad: "he/she/it + fiil-s" },
      { re: String.raw`\b(do|does|don't|doesn't)\b`, ad: "do / does" },
      { re: String.raw`\b(every|usually|always|often|sometimes|never|on \w+days)\b`, ad: "rutin bildiren zarf" },
      { re: String.raw`^\s*(the\s+|my\s+|our\s+|this\s+)?\w+\s+\w+[^s's]s\b`, ad: "özne + fiil-s" },
      { re: String.raw`\b(I|you|we|they)\s+(usually|always|often|sometimes|never)?\s*\w+\b.*\b(every|on \w+days?)\b`, ad: "rutin" }
    ],
    ceviri: [
      { tr: "Babam her sabah kahve içer.", en: ["My father drinks coffee every morning.", "My dad drinks coffee every morning."] },
      { tr: "O (kadın) et yemez.", en: ["She does not eat meat.", "She doesn't eat meat."] },
      { tr: "Sen nerede çalışırsın?", en: ["Where do you work?"] }
    ]
  },
  "a1-adverbs-frequency": {
    hedef: [{ re: String.raw`\b(always|usually|often|sometimes|rarely|seldom|never|hardly ever)\b`, ad: "sıklık zarfı" }],
    ceviri: [
      { tr: "Ben genellikle yedide kalkarım.", en: ["I usually get up at seven.", "I usually get up at 7.", "I usually wake up at seven."] },
      { tr: "O (erkek) asla geç kalmaz.", en: ["He is never late."] },
      { tr: "Ne sıklıkla spor yaparsın?", en: ["How often do you exercise?", "How often do you do sport?", "How often do you do sports?"] }
    ]
  },
  "a1-present-continuous": {
    hedef: [{ re: String.raw`\b(am|is|are|'m|'re|'s|isn't|aren't)\s+((i|you|he|she|it|we|they)\s+)?(not\s+)?{VING}\b`, ad: "am/is/are + -ing" }],
    ceviri: [
      { tr: "Şu anda kitap okuyorum.", en: ["I am reading a book now.", "I'm reading a book now.", "I am reading a book right now.", "I'm reading a book right now.", "I'm reading a book at the moment."] },
      { tr: "Dışarıda yağmur yağıyor.", en: ["It is raining outside.", "It's raining outside."] },
      { tr: "Ne yapıyorsun?", en: ["What are you doing?"] }
    ]
  },
  "a1-wh-questions": {
    hedef: [{ re: String.raw`^\s*(what|where|when|who|why|how|which|whose)\b.*\?\s*$`, ad: "soru kelimesiyle başlayan soru" }],
    ceviri: [
      { tr: "Nerede yaşıyorsun?", en: ["Where do you live?"] },
      { tr: "Ders ne zaman başlıyor?", en: ["When does the lesson start?", "When does the class start?", "What time does the lesson start?"] },
      { tr: "Bu kitabı kim yazdı?", en: ["Who wrote this book?"] }
    ]
  },
  "a1-articles": {
    hedef: [{ re: String.raw`\b(a|an|the)\b`, ad: "a / an / the" }],
    ceviri: [
      { tr: "O (erkek) bir mühendis.", en: ["He is an engineer.", "He's an engineer."] },
      { tr: "Güneş doğudan doğar.", en: ["The sun rises in the east."] },
      { tr: "Bir elma ve bir portakal aldım.", en: ["I bought an apple and an orange.", "I got an apple and an orange."] }
    ]
  },
  "a1-plural-nouns": {
    hedef: [{ re: String.raw`\b(children|people|men|women|feet|teeth|mice|\w+(s|es|ies|ves))\b`, ad: "çoğul isim" }],
    ceviri: [
      { tr: "Bahçede üç çocuk var.", en: ["There are three children in the garden."] },
      { tr: "Dişlerini fırçala.", en: ["Brush your teeth."] },
      { tr: "Masada iki kutu var.", en: ["There are two boxes on the table."] }
    ]
  },
  "a1-there-is-are": {
    hedef: [{ re: String.raw`\b(there\s+(is|are|was|were|isn't|aren't|wasn't|weren't)|there's|(is|are)\s+there)\b`, ad: "there is / there are" }],
    ceviri: [
      { tr: "Yakında bir eczane var.", en: ["There is a pharmacy nearby.", "There's a pharmacy nearby.", "There is a pharmacy near here."] },
      { tr: "Buzdolabında hiç süt yok.", en: ["There is no milk in the fridge.", "There isn't any milk in the fridge.", "There's no milk in the fridge."] },
      { tr: "Sınıfta kaç öğrenci var?", en: ["How many students are there in the class?", "How many students are there in the classroom?"] }
    ]
  },
  "a1-can-cant": {
    hedef: [{ re: String.raw`\b(can|can't|cannot|could|couldn't|may)\s+\w+`, ad: "can / can't + fiil" }],
    ceviri: [
      { tr: "Üç dil konuşabilirim.", en: ["I can speak three languages."] },
      { tr: "O (kadın) yüzemez.", en: ["She cannot swim.", "She can't swim."] },
      { tr: "Pencereyi açabilir miyim?", en: ["Can I open the window?", "May I open the window?", "Could I open the window?"] }
    ]
  },
  "a1-prepositions": {
    hedef: [{ re: String.raw`\b(in|on|at)\s+\w+`, ad: "in / on / at" }],
    ceviri: [
      { tr: "Film saat sekizde başlıyor.", en: ["The film starts at eight.", "The movie starts at eight.", "The film starts at 8.", "The movie starts at 8."] },
      { tr: "Pazartesi görüşürüz.", en: ["See you on Monday."] },
      { tr: "2010'da doğdum.", en: ["I was born in 2010."] }
    ]
  },
  "a1-imperatives": {
    hedef: [{ re: String.raw`^\s*(please\s+)?(don't\s+|do not\s+|let's\s+)?[a-z]+\b`, ad: "yalın fiille başlayan emir" }],
    ceviri: [
      { tr: "Kapıyı kapat, lütfen.", en: ["Close the door, please.", "Please close the door.", "Shut the door, please.", "Please shut the door."] },
      { tr: "Geç kalma!", en: ["Don't be late!", "Do not be late!"] },
      { tr: "Hadi gidelim.", en: ["Let's go.", "Let us go."] }
    ]
  },

  /* ------------------------------ A2 ------------------------------ */
  "a2-past-simple": {
    hedef: [{ re: String.raw`\b({V2}|did|didn't|was|were)\b`, ad: "geçmiş zaman (V2 / did)" }],
    ceviri: [
      { tr: "Dün annemi aradım.", en: ["I called my mother yesterday.", "I called my mom yesterday.", "Yesterday I called my mother.", "I phoned my mother yesterday."] },
      { tr: "Geçen yaz Antalya'ya gittik.", en: ["We went to Antalya last summer.", "Last summer we went to Antalya."] },
      { tr: "Raporu bitirdin mi?", en: ["Did you finish the report?"] }
    ]
  },
  "a2-irregular-verbs": {
    hedef: [{ re: String.raw`\b({V2}|{V3})\b`, ad: "düzensiz fiilin V2 ya da V3 hâli" }],
    ceviri: [
      { tr: "Anahtarlarımı kaybettim.", en: ["I lost my keys.", "I have lost my keys.", "I've lost my keys."] },
      { tr: "O (kadın) yeni bir ceket aldı.", en: ["She bought a new jacket.", "She bought a new coat."] },
      { tr: "Mektubu kim yazdı?", en: ["Who wrote the letter?"] }
    ]
  },
  "a2-future": {
    hedef: [{ re: String.raw`\b(will|'ll|won't|going to|gonna)\b|\b(am|is|are|'m|'re)\s+{VING}\s+.*\b(tomorrow|tonight|next|on \w+day)\b`, ad: "will / be going to" }],
    ceviri: [
      { tr: "Telefon çalıyor. – Ben açarım.", en: ["The phone is ringing. – I will answer it.", "The phone is ringing. – I'll answer it.", "The phone is ringing. – I'll get it."] },
      { tr: "Biletleri aldık; haziranda Paris'e gideceğiz.", en: ["We have bought the tickets; we are going to go to Paris in June.", "We've bought the tickets; we're going to visit Paris in June.", "We bought the tickets; we are going to go to Paris in June.", "We have bought the tickets; we are going to visit Paris in June."] },
      { tr: "Şu bulutlara bak! Yağmur yağacak.", en: ["Look at those clouds! It is going to rain.", "Look at those clouds! It's going to rain."] }
    ]
  },
  "a2-comparatives": {
    hedef: [{ re: String.raw`\b(\w+er\s+than|more\s+\w+\s+than|less\s+\w+\s+than|the\s+(most|least)\s+\w+|the\s+\w+est|as\s+\w+\s+as|better|worse|best|worst)\b`, ad: "karşılaştırma (-er than / more / the most / as...as)" }],
    ceviri: [
      { tr: "İstanbul Ankara'dan daha kalabalık.", en: ["Istanbul is more crowded than Ankara."] },
      { tr: "Bu, hayatımın en güzel günü.", en: ["This is the most beautiful day of my life.", "This is the best day of my life.", "This is the happiest day of my life."] },
      { tr: "Çay kahve kadar pahalı değil.", en: ["Tea is not as expensive as coffee.", "Tea isn't as expensive as coffee."] }
    ]
  },
  "a2-too-enough": {
    hedef: [{ re: String.raw`\b(too\s+\w+|\w+\s+enough|enough\s+\w+|so\s+\w+\s+that|such\s+(a|an)?\s*\w+)`, ad: "too / enough / so / such" }],
    ceviri: [
      { tr: "Bu kahve içilemeyecek kadar sıcak.", en: ["This coffee is too hot to drink."] },
      { tr: "Ehliyet alacak yaşta değil.", en: ["He is not old enough to drive.", "He isn't old enough to drive.", "She is not old enough to drive.", "She isn't old enough to drive.", "He's not old enough to drive.", "She's not old enough to drive."] },
      { tr: "Yeterince zamanımız yok.", en: ["We do not have enough time.", "We don't have enough time.", "We haven't got enough time."] }
    ]
  },
  "a2-countable-uncountable": {
    hedef: [{ re: String.raw`\b(how much|how many|a piece of|a cup of|a bottle of|a glass of|a slice of|advice|information|money|water|furniture|news|luggage|homework)\b`, ad: "sayılabilen / sayılamayan isim" }],
    ceviri: [
      { tr: "Sana bir tavsiye vereyim.", en: ["Let me give you a piece of advice.", "Let me give you some advice.", "I'll give you a piece of advice.", "I will give you a piece of advice."] },
      { tr: "Ne kadar paran var?", en: ["How much money do you have?", "How much money have you got?"] },
      { tr: "Haberler iyi.", en: ["The news is good."] }
    ]
  },
  "a2-some-any-much-many": {
    hedef: [{ re: String.raw`\b(some|any|much|many|a lot of|lots of|a few|a little|few|little|no)\s+\w+`, ad: "some / any / much / many" }],
    ceviri: [
      { tr: "Biraz çay ister misin?", en: ["Would you like some tea?", "Do you want some tea?"] },
      { tr: "Hiç ekmeğimiz kalmadı.", en: ["We don't have any bread left.", "We do not have any bread left.", "We have no bread left.", "There is no bread left.", "There isn't any bread left."] },
      { tr: "Burada çok fazla araba var.", en: ["There are too many cars here.", "There are a lot of cars here.", "There are many cars here.", "There are lots of cars here."] }
    ]
  },
  "a2-should-must-have-to": {
    hedef: [{ re: String.raw`\b(should|shouldn't|must|mustn't|have to|has to|had to|don't have to|doesn't have to|ought to)\b`, ad: "should / must / have to" }],
    ceviri: [
      { tr: "Doktora görünmelisin.", en: ["You should see a doctor.", "You should go to the doctor.", "You should see the doctor."] },
      { tr: "Hastanede sigara içmemelisin. (yasak)", en: ["You mustn't smoke in the hospital.", "You must not smoke in the hospital.", "You mustn't smoke inside the hospital."] },
      { tr: "Pazar günü erken kalkmak zorunda değilim.", en: ["I don't have to get up early on Sunday.", "I do not have to get up early on Sunday.", "I don't have to get up early on Sundays.", "I don't have to wake up early on Sunday."] }
    ]
  },
  "a2-present-perfect-intro": {
    hedef: [{ re: String.raw`\b(have|has|'ve|'s|haven't|hasn't)\s+((i|you|he|she|it|we|they)\s+)?(already\s+|just\s+|never\s+|ever\s+|not\s+|recently\s+|been\s+)?({V3}|{VING})\b`, ad: "have / has + V3" }],
    ceviri: [
      { tr: "Bu filmi üç kez izledim.", en: ["I have watched this film three times.", "I've watched this film three times.", "I have seen this film three times.", "I've seen this film three times.", "I have seen this movie three times.", "I've seen this movie three times.", "I have watched this movie three times.", "I've watched this movie three times."] },
      { tr: "Hiç Roma'ya gittin mi?", en: ["Have you ever been to Rome?", "Have you ever visited Rome?"] },
      { tr: "2018'den beri burada yaşıyor. (kadın)", en: ["She has lived here since 2018.", "She's lived here since 2018.", "She has been living here since 2018.", "She's been living here since 2018."] }
    ]
  },
  "a2-conjunctions": {
    hedef: [{ re: String.raw`\b(and|but|or|so|because|although|though|even though|because of)\b`, ad: "bağlaç" }],
    ceviri: [
      { tr: "Yorgundum, bu yüzden erken yattım.", en: ["I was tired, so I went to bed early.", "I was tired so I went to bed early."] },
      { tr: "Yağmur yağdığı için dışarı çıkmadık.", en: ["We didn't go out because it was raining.", "We did not go out because it was raining.", "We didn't go out because it rained.", "Because it was raining, we didn't go out."] },
      { tr: "Zengin olmasına rağmen küçük bir evde yaşıyor. (erkek)", en: ["Although he is rich, he lives in a small house.", "He lives in a small house although he is rich.", "Even though he is rich, he lives in a small house.", "Although he's rich, he lives in a small house."] }
    ]
  },
  "a2-verb-patterns": {
    hedef: [{ re: String.raw`\b(want|need|decide|decided|hope|plan|would like|'d like|learn|try)\w*\s+to\s+\w+|\b(enjoy|finish|mind|stop|practise|practice|avoid|go|like|love|hate|prefer)\w*\s+({VING}|to\s+\w+)`, ad: "fiil + to V1 / V-ing" }],
    ceviri: [
      { tr: "Yemek yapmaktan hoşlanırım.", en: ["I enjoy cooking.", "I like cooking.", "I love cooking.", "I like to cook."] },
      { tr: "Trene binmeye karar verdik.", en: ["We decided to take the train."] },
      { tr: "İki kişilik masa ayırtmak istiyorum.", en: ["I would like to book a table for two.", "I'd like to book a table for two.", "I want to book a table for two.", "I'd like to reserve a table for two.", "I would like to reserve a table for two."] }
    ]
  },

  /* ------------------------------ B1 ------------------------------ */
  "b1-ppc": {
    hedef: [{ re: String.raw`\b(have|has|'ve|'s|haven't|hasn't)\s+((i|you|he|she|it|we|they)\s+)?(not\s+)?been\s+{VING}\b`, ad: "have/has been + -ing" }],
    ceviri: [
      { tr: "Üç saattir ders çalışıyorum.", en: ["I have been studying for three hours.", "I've been studying for three hours.", "I have been studying for 3 hours.", "I've been studying for 3 hours."] },
      { tr: "Sabahtan beri yağmur yağıyor.", en: ["It has been raining since this morning.", "It's been raining since this morning.", "It has been raining since the morning.", "It's been raining since morning.", "It has been raining since morning."] },
      { tr: "Ne zamandır bekliyorsun?", en: ["How long have you been waiting?"] }
    ]
  },
  "b1-pc": {
    hedef: [{ re: String.raw`\b(was|were|wasn't|weren't)\s+((i|you|he|she|it|we|they)\s+)?(not\s+)?{VING}\b`, ad: "was/were + -ing" }],
    ceviri: [
      { tr: "Telefon çaldığında yemek yapıyordum.", en: ["I was cooking when the phone rang.", "When the phone rang, I was cooking.", "I was making dinner when the phone rang.", "When the phone rang, I was making dinner."] },
      { tr: "Dün akşam saat sekizde ne yapıyordun?", en: ["What were you doing at eight o'clock yesterday evening?", "What were you doing at 8 o'clock yesterday evening?", "What were you doing at eight last night?", "What were you doing at 8 last night?", "What were you doing at eight o'clock last night?", "What were you doing at 8 p.m. yesterday?"] },
      { tr: "Biz yürürken kar yağmaya başladı.", en: ["While we were walking, it started to snow.", "It started to snow while we were walking.", "While we were walking, it started snowing.", "It started snowing while we were walking.", "It began to snow while we were walking."] }
    ]
  },
  "b1-past-perfect": {
    hedef: [{ re: String.raw`\b(had|'d|hadn't)\s+(already\s+|just\s+|never\s+|not\s+|been\s+)?{V3}\b`, ad: "had + V3" }],
    ceviri: [
      { tr: "Vardığımızda film başlamıştı.", en: ["When we arrived, the film had started.", "When we arrived, the film had already started.", "The film had started when we arrived.", "The film had already started when we arrived.", "When we arrived, the movie had started.", "When we arrived, the movie had already started.", "The movie had already started when we arrived."] },
      { tr: "Daha önce hiç uçmamıştım.", en: ["I had never flown before.", "I'd never flown before.", "I had never flown before then.", "I had never been on a plane before."] },
      { tr: "Polis geldiğinde hırsız kaçmıştı.", en: ["When the police came, the thief had escaped.", "When the police arrived, the thief had escaped.", "The thief had escaped when the police came.", "The thief had escaped when the police arrived.", "By the time the police came, the thief had escaped.", "By the time the police arrived, the thief had escaped.", "When the police came, the thief had run away."] }
    ]
  },
  "b1-modals-deduction": {
    hedef: [{ re: String.raw`\b(must|can't|cannot|might|may|could|couldn't)\s+(not\s+)?be\b`, ad: "must / can't / might + be" }],
    ceviri: [
      { tr: "Bütün gün çalıştı; yorgun olmalı. (kadın)", en: ["She worked all day; she must be tired.", "She has worked all day; she must be tired.", "She's worked all day; she must be tired.", "She has been working all day; she must be tired.", "She worked all day, so she must be tired.", "She must be tired; she worked all day."] },
      { tr: "Bu doğru olamaz.", en: ["This can't be true.", "This cannot be true.", "That can't be true.", "That cannot be true.", "It can't be true.", "It cannot be true."] },
      { tr: "Kütüphanede olabilir. (erkek)", en: ["He might be in the library.", "He may be in the library.", "He could be in the library.", "He might be at the library.", "He may be at the library.", "He could be at the library."] }
    ]
  },
  "b1-passive-intro": {
    hedef: [{ re: String.raw`\b(am|is|are|was|were|be|been|being|'s|'re|isn't|aren't|wasn't|weren't)\s+(not\s+)?(\w+ly\s+)?{V3}\b`, ad: "be + V3 (edilgen)" }],
    ceviri: [
      { tr: "Bu köprü 1973'te inşa edildi.", en: ["This bridge was built in 1973."] },
      { tr: "İngilizce tüm dünyada konuşulur.", en: ["English is spoken all over the world.", "English is spoken all around the world.", "English is spoken around the world.", "English is spoken throughout the world."] },
      { tr: "Arabam dün gece çalındı.", en: ["My car was stolen last night."] }
    ]
  },
  "b1-conditionals-0-1": {
    hedef: [{ re: String.raw`\b(if|unless|when|in case|as long as)\b.+\b(will|'ll|won't|is|are|am|\w+s|can|may|might)\b`, ad: "if + Present, will / Present" }],
    ceviri: [
      { tr: "Yarın yağmur yağarsa evde kalacağız.", en: ["If it rains tomorrow, we will stay at home.", "If it rains tomorrow, we'll stay at home.", "If it rains tomorrow, we will stay home.", "If it rains tomorrow, we'll stay home.", "We will stay at home if it rains tomorrow.", "We'll stay at home if it rains tomorrow.", "We'll stay home if it rains tomorrow."] },
      { tr: "Buzu ısıtırsan erir.", en: ["If you heat ice, it melts."] },
      { tr: "Acele etmezsen otobüsü kaçıracaksın.", en: ["If you don't hurry, you will miss the bus.", "If you don't hurry, you'll miss the bus.", "Unless you hurry, you will miss the bus.", "Unless you hurry, you'll miss the bus.", "If you do not hurry, you will miss the bus."] }
    ]
  },
  "b1-relative-clauses": {
    hedef: [
      { re: String.raw`\b\w+\s*,?\s+(who|which|that|whose|where|whom|when)\s+\w+`, ad: "who / which / that / whose / where" },
      { re: String.raw`\bthe\s+\w+\s+(I|you|he|she|we|they)\s+(\w+ed|{V2}|was|were|am|is|are)\b`, ad: "ilgi zamiri atlanmış ilgi cümlesi" }
    ],
    ceviri: [
      { tr: "Yan dairede yaşayan kadın bir doktor.", en: ["The woman who lives next door is a doctor.", "The woman that lives next door is a doctor.", "The woman who lives in the next flat is a doctor.", "The woman who lives in the flat next door is a doctor."] },
      { tr: "Dün aldığım kitap çok ilginç.", en: ["The book that I bought yesterday is very interesting.", "The book which I bought yesterday is very interesting.", "The book I bought yesterday is very interesting."] },
      { tr: "Bu, doğduğum şehir.", en: ["This is the city where I was born.", "This is the city in which I was born.", "This is the city I was born in."] }
    ]
  },
  "b1-used-to-would": {
    hedef: [{ re: String.raw`\b(used to|use to|used not to|would)\s+\w+`, ad: "used to / would + V1" }],
    ceviri: [
      { tr: "Eskiden çok kitap okurdum.", en: ["I used to read a lot.", "I used to read a lot of books.", "I used to read many books."] },
      { tr: "Eskiden kahve içmezdim.", en: ["I didn't use to drink coffee.", "I did not use to drink coffee.", "I never used to drink coffee.", "I used not to drink coffee."] },
      { tr: "Erken kalkmaya alışkınım.", en: ["I am used to getting up early.", "I'm used to getting up early.", "I am used to waking up early.", "I'm used to waking up early."] }
    ]
  },
  "b1-question-tags": {
    hedef: [{ re: String.raw`,\s*(is|isn't|are|aren't|am|aren't|was|wasn't|were|weren't|do|don't|does|doesn't|did|didn't|have|haven't|has|hasn't|had|hadn't|can|can't|could|couldn't|will|won't|would|wouldn't|should|shouldn't|shall)\s+(i|you|he|she|it|we|they|there)\s*\?`, ad: "virgül + yardımcı fiil + zamir ?" }],
    ceviri: [
      { tr: "Güzel bir gün, değil mi?", en: ["It's a lovely day, isn't it?", "It is a lovely day, isn't it?", "It's a beautiful day, isn't it?", "It is a beautiful day, isn't it?", "It's a nice day, isn't it?", "It is a nice day, isn't it?"] },
      { tr: "Sen kahve sevmezsin, değil mi?", en: ["You don't like coffee, do you?", "You do not like coffee, do you?"] },
      { tr: "O (erkek) dün aradı, değil mi?", en: ["He called yesterday, didn't he?", "He phoned yesterday, didn't he?"] }
    ]
  },
  "b1-quantifiers": {
    hedef: [{ re: String.raw`\b(both|either|neither|each|every|all|none)\b`, ad: "both / either / neither / each / every / all / none" }],
    ceviri: [
      { tr: "İki erkek kardeşim de doktor.", en: ["Both of my brothers are doctors.", "Both my brothers are doctors."] },
      { tr: "Öğrencilerin hiçbiri cevabı bilmiyordu.", en: ["None of the students knew the answer."] },
      { tr: "Her öğrencinin bir bilgisayarı var.", en: ["Every student has a computer.", "Each student has a computer.", "Every student has a laptop.", "Each student has a laptop."] }
    ]
  },
  "b1-adjectives-ed-ing": {
    hedef: [{ re: String.raw`\b\w+(ed|ing)\b`, ad: "-ed / -ing sıfat" }],
    ceviri: [
      { tr: "Bu derste sıkıldım.", en: ["I got bored in this lesson.", "I was bored in this lesson.", "I am bored in this lesson.", "I'm bored in this lesson.", "I was bored in this class.", "I got bored in this class."] },
      { tr: "Film çok heyecan vericiydi.", en: ["The film was very exciting.", "The movie was very exciting."] },
      { tr: "Tarihe ilgi duyuyorum.", en: ["I am interested in history.", "I'm interested in history."] }
    ]
  },

  /* ------------------------------ B2 ------------------------------ */
  "b2-conditionals-2-3": {
    hedef: [
      { re: String.raw`\bif\b.+\b(would|could|might|'d)\s+(not\s+)?have\s+{V3}`, ad: "Type 3 (had V3 → would have V3)" },
      { re: String.raw`\bif\b.+\b(would|could|might|'d)\s+(not\s+)?\w+`, ad: "Type 2 (V2 → would V1)" },
      { re: String.raw`\b(would|could|might|'d)\s+(not\s+)?(have\s+{V3}|\w+)\b.*\bif\b`, ad: "would ... if ..." }
    ],
    ceviri: [
      { tr: "Senin yerinde olsam o işi kabul ederdim.", en: ["If I were you, I would accept that job.", "If I were you, I'd accept that job.", "If I were you, I would accept the job.", "If I were you, I'd accept the job.", "I would accept that job if I were you.", "I'd accept the job if I were you."] },
      { tr: "Param olsa yeni bir araba alırdım.", en: ["If I had money, I would buy a new car.", "If I had money, I'd buy a new car.", "If I had the money, I would buy a new car.", "If I had the money, I'd buy a new car.", "I would buy a new car if I had money."] },
      { tr: "Daha erken çıksaydık treni yakalardık.", en: ["If we had left earlier, we would have caught the train.", "If we'd left earlier, we would have caught the train.", "If we had left earlier, we'd have caught the train.", "We would have caught the train if we had left earlier."] }
    ]
  },
  "b2-mixed-conditionals": {
    hedef: [
      { re: String.raw`\bif\b.+\b(had|'d)\s+{V3}.+\b(would|could|might|'d)(n't)?\s+(not\s+)?(?!have\b)\w+`, ad: "had V3 → would V1 (şimdi)" },
      { re: String.raw`\b(would|could|might|'d)(n't)?\s+(not\s+)?(?!have\b)\w+.+\bif\b.+\b(had|'d)\s+{V3}`, ad: "would V1 ... if ... had V3" },
      { re: String.raw`\bif\b.+\b(were|weren't|was|wasn't|\w+ed)\b.+\b(would|could|might)(n't)?\s+(not\s+)?have\s+{V3}`, ad: "V2 → would have V3" }
    ],
    ceviri: [
      { tr: "Dün gece erken yatsaydın şimdi yorgun olmazdın.", en: ["If you had gone to bed early last night, you wouldn't be tired now.", "If you had gone to bed early last night, you would not be tired now.", "If you'd gone to bed early last night, you wouldn't be tired now.", "If you had slept early last night, you wouldn't be tired now.", "You wouldn't be tired now if you had gone to bed early last night."] },
      { tr: "O işi kabul etseydim şimdi Berlin'de yaşıyor olurdum.", en: ["If I had accepted that job, I would be living in Berlin now.", "If I had accepted that job, I would live in Berlin now.", "If I'd accepted that job, I'd be living in Berlin now.", "If I had taken that job, I would be living in Berlin now.", "If I had taken that job, I would live in Berlin now.", "If I'd taken that job, I'd be living in Berlin now."] },
      { tr: "Yükseklik korkum olmasaydı dün paraşütle atlardım.", en: ["If I weren't afraid of heights, I would have done the parachute jump yesterday.", "If I wasn't afraid of heights, I would have done the parachute jump yesterday.", "If I weren't afraid of heights, I would have jumped with a parachute yesterday.", "If I weren't scared of heights, I would have done the parachute jump yesterday."] }
    ]
  },
  "b2-advanced-passives": {
    hedef: [
      { re: String.raw`\b(have|has|had|having|get|gets|got|getting)\s+(my|your|his|her|its|our|their|the|a|an)\s+(\w+\s+){0,2}{V3}\b`, ad: "have/get + nesne + V3" },
      { re: String.raw`\b(is|are|was|were)\s+(said|believed|thought|reported|claimed|expected|known|considered|estimated|rumoured|rumored)\s+to\b`, ad: "is said / believed to" },
      { re: String.raw`\bit\s+is\s+(said|believed|thought|reported|claimed|expected|known|considered|estimated)\s+that\b`, ad: "It is said that..." }
    ],
    ceviri: [
      { tr: "Dün saçımı kestirdim.", en: ["I had my hair cut yesterday.", "I got my hair cut yesterday.", "Yesterday I had my hair cut.", "Yesterday I got my hair cut."] },
      { tr: "Arabamı tamir ettirmem gerekiyor.", en: ["I need to have my car repaired.", "I need to get my car repaired.", "I need to have my car fixed.", "I need to get my car fixed.", "I have to have my car repaired.", "I have to get my car repaired."] },
      { tr: "Tablonun 16. yüzyılda yapıldığı düşünülüyor.", en: ["The painting is thought to have been painted in the 16th century.", "The painting is believed to have been painted in the 16th century.", "It is thought that the painting was painted in the 16th century.", "It is believed that the painting was painted in the 16th century.", "The painting is thought to have been made in the 16th century.", "The painting is believed to have been made in the 16th century."] }
    ]
  },
  "b2-reported-speech": {
    hedef: [
      { re: String.raw`\b(said|told|asked|explained|replied|added|promised|warned|advised|reminded|wondered)\b.*\b(that|if|whether|to|what|where|when|why|how|who)\b`, ad: "said / told / asked + aktarılan cümle" },
      { re: String.raw`\b(said|told\s+\w+)\s+(that\s+)?(i|you|he|she|it|we|they)\s+\w+`, ad: "said (that) + cümle" }
    ],
    ceviri: [
      { tr: "Yorgun olduğunu söyledi. (kadın)", en: ["She said that she was tired.", "She said she was tired."] },
      { tr: "Bana nerede yaşadığımı sordu. (erkek)", en: ["He asked me where I lived.", "He asked me where I live.", "He asked where I lived."] },
      { tr: "Doktor bana sigarayı bırakmamı söyledi.", en: ["The doctor told me to stop smoking.", "The doctor told me to quit smoking.", "The doctor advised me to stop smoking.", "The doctor advised me to quit smoking."] }
    ]
  },
  "b2-noun-clauses": {
    hedef: [{ re: String.raw`\b(know|knows|knew|wonder|wondered|tell|ask|asked|sure|think|believe|depends|understand|remember|show|shows)\b.*\b(that|what|where|when|why|how|who|whether|if)\b|^\s*what\b.+\b(is|was)\b`, ad: "that / wh- / whether cümleciği" }],
    ceviri: [
      { tr: "Nerede yaşadığını bilmiyorum. (erkek)", en: ["I don't know where he lives.", "I do not know where he lives."] },
      { tr: "İstasyonun nerede olduğunu söyleyebilir misiniz?", en: ["Can you tell me where the station is?", "Could you tell me where the station is?"] },
      { tr: "Gelip gelmeyeceğinden emin değilim. (kadın)", en: ["I'm not sure whether she will come.", "I am not sure whether she will come.", "I'm not sure if she will come.", "I am not sure if she will come.", "I'm not sure whether she will come or not.", "I'm not sure whether or not she will come.", "I'm not sure if she'll come.", "I'm not sure whether she'll come."] }
    ]
  },
  "b2-wishes-regrets": {
    hedef: [{ re: String.raw`\b(wish|wishes|wished|if only|would rather|'d rather|it's time|it is time|it's high time)\b`, ad: "wish / if only / would rather" }],
    ceviri: [
      { tr: "Keşke daha çok boş zamanım olsa.", en: ["I wish I had more free time.", "If only I had more free time.", "I wish I had more spare time.", "I wish I had more time."] },
      { tr: "Keşke ona söylemeseydim.", en: ["I wish I hadn't told him.", "I wish I had not told him.", "I wish I hadn't told her.", "I wish I had not told her.", "If only I hadn't told him.", "If only I hadn't told her."] },
      { tr: "Keşke komşularım bu kadar gürültü yapmasa.", en: ["I wish my neighbours wouldn't make so much noise.", "I wish my neighbors wouldn't make so much noise.", "I wish my neighbours would not make so much noise.", "I wish my neighbors would not make so much noise.", "I wish my neighbours didn't make so much noise.", "I wish my neighbors didn't make so much noise."] }
    ]
  },
  "b2-gerunds-infinitives": {
    hedef: [{ re: String.raw`\b(remember|remembered|forget|forgot|stop|stopped|try|tried|regret|regretted|avoid|avoided|enjoy|mind|suggest|look forward to|interested in|good at|used to|without|before|after|of|for|about|forward to|quit|quitting|give up|gave up|given up|keep|kept|finish|finished|admit|admitted|deny|denied|consider|considered)\s+(to\s+)?{VING}\b|\b(remember|remembered|forget|forgot|stop|stopped|try|tried|regret|decide|decided|refuse|refused|hope|plan|manage|managed)\s+to\s+\w+`, ad: "fiil/edat + V-ing ya da to V1" }],
    ceviri: [
      { tr: "Seninle tanışmayı dört gözle bekliyorum.", en: ["I am looking forward to meeting you.", "I'm looking forward to meeting you.", "I look forward to meeting you."] },
      { tr: "Çıkarken ışıkları kapatmayı unutma.", en: ["Don't forget to turn off the lights when you leave.", "Do not forget to turn off the lights when you leave.", "Don't forget to turn the lights off when you leave.", "Don't forget to switch off the lights when you leave.", "Don't forget to turn off the lights when you go out."] },
      { tr: "Üç yıl önce sigarayı bıraktı. (erkek)", en: ["He stopped smoking three years ago.", "He quit smoking three years ago.", "He gave up smoking three years ago.", "He stopped smoking 3 years ago."] }
    ]
  },
  "b2-future-cont-perfect": {
    hedef: [{ re: String.raw`\b(will|'ll|won't)\s+(not\s+)?(be\s+{VING}|have\s+(been\s+{VING}|{V3}))\b`, ad: "will be -ing / will have V3" }],
    ceviri: [
      { tr: "Yarın bu saatte uçakta olacağım (uçuyor olacağım).", en: ["This time tomorrow, I will be flying.", "This time tomorrow, I'll be flying.", "At this time tomorrow, I will be flying.", "At this time tomorrow, I'll be flying.", "I will be flying this time tomorrow.", "I'll be flying this time tomorrow."] },
      { tr: "2030'a kadar mezun olmuş olacağım.", en: ["By 2030, I will have graduated.", "By 2030, I'll have graduated.", "I will have graduated by 2030.", "I'll have graduated by 2030."] },
      { tr: "Sen gelene kadar toplantı bitmiş olacak.", en: ["By the time you arrive, the meeting will have finished.", "By the time you arrive, the meeting will have ended.", "The meeting will have finished by the time you arrive.", "The meeting will have ended by the time you arrive.", "By the time you come, the meeting will have finished.", "By the time you come, the meeting will have ended."] }
    ]
  },
  "b2-linkers": {
    hedef: [{ re: String.raw`\b(however|therefore|nevertheless|nonetheless|moreover|furthermore|in addition|consequently|as a result|thus|despite|in spite of|although|even though|whereas|while|due to|owing to|so that|in order to)\b`, ad: "bağlayıcı (however, despite, whereas...)" }],
    ceviri: [
      { tr: "Yoğun trafiğe rağmen zamanında vardık.", en: ["Despite the heavy traffic, we arrived on time.", "In spite of the heavy traffic, we arrived on time.", "We arrived on time despite the heavy traffic.", "We arrived on time in spite of the heavy traffic.", "Although the traffic was heavy, we arrived on time.", "Even though the traffic was heavy, we arrived on time."] },
      { tr: "Sonuçlar umut verici; ancak daha fazla araştırma gerekiyor.", en: ["The results are promising; however, more research is needed.", "The results are promising. However, more research is needed.", "The results are promising; however, further research is needed.", "The results are promising. However, further research is needed."] },
      { tr: "Bazı öğrenciler çevrim içi dersleri severken diğerleri sevmiyor.", en: ["Some students like online classes, whereas others don't.", "Some students like online classes, whereas others do not.", "Some students like online classes, while others don't.", "Some students like online classes while others don't.", "Some students like online lessons, whereas others don't.", "Some students like online classes, whereas others do not like them."] }
    ]
  },

  /* ------------------------------ C1 ------------------------------ */
  "c1-inversion": {
    hedef: [{ re: String.raw`^\s*(never|rarely|seldom|hardly|scarcely|no sooner|not only|only after|only when|only then|only if|under no circumstances|in no way|little|not until|at no time|on no account|had|were|should)\b[^.?!]*?\b(had|has|have|did|does|do|is|are|was|were|can|could|should|would|will|must|might)\s+(i|you|he|she|it|we|they|the|this|that|a|an|there|\w+)\b`, ad: "olumsuz zarf + yardımcı fiil + özne" }],
    ceviri: [
      { tr: "Hayatımda hiç böyle bir gün batımı görmedim.", en: ["Never have I seen such a sunset in my life.", "Never in my life have I seen such a sunset.", "Never have I seen such a beautiful sunset in my life.", "Never in my life have I seen such a beautiful sunset."] },
      { tr: "Eve varır varmaz yağmur başladı.", en: ["No sooner had I arrived home than it started to rain.", "No sooner had I got home than it started to rain.", "Hardly had I arrived home when it started to rain.", "No sooner had I arrived home than it started raining.", "Scarcely had I arrived home when it started to rain.", "No sooner had I arrived home than it began to rain."] },
      { tr: "Hiçbir koşulda bu kapıyı açmamalısın.", en: ["Under no circumstances should you open this door.", "Under no circumstances must you open this door."] }
    ]
  },
  "c1-cleft-sentences": {
    hedef: [
      { re: String.raw`^\s*it\s+(is|was|'s|isn't|wasn't)\s+(not\s+)?(until\s+)?.+\s+(that|who)\s+\w+`, ad: "It is/was ... that/who" },
      { re: String.raw`^\s*(what|all)\s+.+\s+(is|was)\b`, ad: "What ... is/was" }
    ],
    ceviri: [
      { tr: "Asıl ihtiyacımız olan şey zaman.", en: ["What we really need is time.", "What we need is time.", "What we really need is more time."] },
      { tr: "Vazoyu kıran benim kardeşimdi, ben değil.", en: ["It was my brother who broke the vase, not me.", "It was my brother that broke the vase, not me.", "It was my sister who broke the vase, not me.", "It was my sister that broke the vase, not me."] },
      { tr: "Ancak yurt dışına taşınınca anladım.", en: ["It wasn't until I moved abroad that I understood.", "It was not until I moved abroad that I understood.", "It wasn't until I moved abroad that I realised.", "It wasn't until I moved abroad that I realized.", "It was not until I moved abroad that I realized.", "It was not until I moved abroad that I realised."] }
    ]
  },
  "c1-subjunctive": {
    hedef: [{ re: String.raw`\b(suggest|suggests|suggested|recommend|recommends|recommended|insist|insists|insisted|demand|demands|demanded|propose|proposes|proposed|request|requested|urge|urged|essential|vital|imperative|crucial|important|necessary)\s+that\s+\w+(\s+\w+)?\s+(should\s+)?(not\s+)?\w+|\b(suggested|recommended|insisted|demanded|proposed)\s+(i|you|he|she|we|they)\s+(should\s+)?(not\s+)?\w+`, ad: "suggest / essential + that + yalın fiil" }],
    ceviri: [
      { tr: "Öğretmen her öğrencinin ödevini cuma gününe kadar teslim etmesinde ısrar etti.", en: ["The teacher insisted that every student submit the homework by Friday.", "The teacher insisted that every student should submit the homework by Friday.", "The teacher insisted that each student submit the homework by Friday.", "The teacher insisted that every student hand in the homework by Friday.", "The teacher insisted that every student submit their homework by Friday."] },
      { tr: "Hastanın bilgilendirilmesi şart.", en: ["It is essential that the patient be informed.", "It is essential that the patient should be informed.", "It is vital that the patient be informed.", "It's essential that the patient be informed."] },
      { tr: "Bir avukata danışmasını önerdim. (kadın)", en: ["I suggested that she consult a lawyer.", "I suggested that she should consult a lawyer.", "I recommended that she consult a lawyer.", "I recommended that she should consult a lawyer.", "I suggested she consult a lawyer."] }
    ]
  },
  "c1-participle-clauses": {
    hedef: [{ re: String.raw`^\s*(not\s+)?(having\s+(been\s+)?{V3}|{VING}|{V3}|after\s+{VING}|before\s+{VING}|while\s+{VING}|based on|given)\b[^,]*,|\b\w+\s+({VING}|{V3})\s+(by|in|on|at|with|from|next to|near)\b|,\s+(not\s+)?({V3}|{VING}|having\s+{V3})\b[^,]*,`, ad: "-ing / V3 / Having V3 öbeği" }],
    ceviri: [
      { tr: "İşini bitirdikten sonra eve gitti. (erkek, ‘Having’ ile)", en: ["Having finished his work, he went home.", "Having finished his job, he went home.", "After finishing his work, he went home.", "After finishing his job, he went home."] },
      { tr: "1889'da inşa edilen kule hâlâ milyonlarca ziyaretçi çekiyor.", en: ["Built in 1889, the tower still attracts millions of visitors.", "The tower, built in 1889, still attracts millions of visitors.", "The tower built in 1889 still attracts millions of visitors."] },
      { tr: "Ne yapacağını bilmeyen stajyer yardım istedi.", en: ["Not knowing what to do, the intern asked for help.", "The intern, not knowing what to do, asked for help."] }
    ]
  },
  "c1-past-modals": {
    hedef: [{ re: String.raw`\b(must|might|may|could|couldn't|can't|cannot|should|shouldn't|needn't|ought to)(?:\s+not)?(?:\s+have|'ve)\s+(been\s+)?({V3}|{VING})\b`, ad: "modal + have V3" }],
    ceviri: [
      { tr: "Toplantıyı unutmuş olmalı. (erkek)", en: ["He must have forgotten the meeting.", "He must have forgotten about the meeting."] },
      { tr: "Bana daha önce söylemeliydin.", en: ["You should have told me earlier.", "You should have told me before.", "You should've told me earlier.", "You should've told me before."] },
      { tr: "E-postayı okumuş olamaz; bütün gün çevrim dışıydı. (kadın)", en: ["She can't have read the email; she was offline all day.", "She cannot have read the email; she was offline all day.", "She couldn't have read the email; she was offline all day.", "She could not have read the email; she was offline all day.", "She can't have read the e-mail; she was offline all day."] }
    ]
  },
  "c1-hedging": {
    hedef: [{ re: String.raw`\b(may|might|could)\s+\w+|\b(suggest|suggests|suggested|indicate|indicates|appear|appears|seem|seems|tend|tends|tended)\s+(that|to)\b|\b(likely|possibly|probably|arguably|presumably|to some extent|it is possible that)\b`, ad: "may / suggest / appear to / likely" }],
    ceviri: [
      { tr: "Bu bulgular, uykunun öğrenmede rol oynayabileceğini düşündürüyor.", en: ["These findings suggest that sleep may play a role in learning.", "These findings suggest that sleep might play a role in learning.", "These findings indicate that sleep may play a role in learning.", "These results suggest that sleep may play a role in learning."] },
      { tr: "Genç kullanıcılar internette daha fazla zaman geçirme eğiliminde.", en: ["Younger users tend to spend more time online.", "Young users tend to spend more time online.", "Younger users tend to spend more time on the internet.", "Young users tend to spend more time on the internet."] },
      { tr: "Fiyatların artmaya devam etmesi muhtemel.", en: ["It is likely that prices will continue to rise.", "Prices are likely to continue to rise.", "Prices are likely to continue rising.", "It is likely that prices will continue rising.", "It's likely that prices will continue to rise."] }
    ]
  },
  "c1-nominalisation": {
    hedef: [
      { re: String.raw`\b(the|a|an|this|their|its)\s+(\w+('s)?\s+)?\w+(tion|sion|ment|ance|ence|ity|ness|al|th)\s+(of|in|to|for|on)\b`, ad: "isimleşmiş öbek (the ...tion of)" },
      { re: String.raw`\b(a|an|the)\s+(\w+\s+)?(rise|increase|decrease|fall|drop|reduction|growth|decline|improvement|failure|lack|loss|demand|change)\s+(in|of|to|for)\b`, ad: "a rise in / an increase in" },
      { re: String.raw`\b(their|its|his|her|the|our)\s+(failure|success|decision|growth|development|introduction|analysis|refusal|approval|arrival|departure|loss|collapse)\b.*\b(due to|resulted from|caused by|stemmed from|led to|resulted in|result of)\b`, ad: "isim + neden/sonuç ifadesi" }
    ],
    ceviri: [
      { tr: "İşsizlikte keskin bir artış oldu.", en: ["There was a sharp rise in unemployment.", "There was a sharp increase in unemployment.", "There has been a sharp rise in unemployment.", "There has been a sharp increase in unemployment."] },
      { tr: "Yeni yasanın yürürlüğe girmesi kazalarda azalmaya yol açtı.", en: ["The introduction of the new law led to a reduction in accidents.", "The introduction of the new law led to a decrease in accidents.", "The introduction of the new law resulted in a reduction in accidents.", "The introduction of the new law resulted in a decrease in accidents.", "The introduction of the new law led to a fall in accidents."] },
      { tr: "Başarısızlıkları kötü planlamadan kaynaklandı.", en: ["Their failure was due to poor planning.", "Their failure resulted from poor planning.", "Their failure was caused by poor planning.", "Their failure stemmed from poor planning.", "Their failure was the result of poor planning."] }
    ]
  }
};

/* Genel hata kuralları: her cümlede çalışır. Yalnız güvenle yakalanabilen hatalar. */
const GRAMMAR_ERROR_RULES = [
  { re: String.raw`\b(doesn't|didn't|don't|does not|did not|do not)\s+(\w+s)\b(?<!\b(?:always|sometimes|perhaps|nevertheless|afterwards|nowadays|besides|unless|regardless|thus|as|us|is|was|has|does|this|its|his|hers|ours|yours|theirs|yes|less|bus|pass|miss|kiss|guess|cross|dress|press|express|process|access|stress|address|possess|discuss|focus|bless|confess|toss|boss|class|glass|grass|business|chess|mess|across|status|campus|virus|bonus|minus|plus|news|maths|physics|economics|politics|series|species|means|christmas|chaos|canvas|gas|lens))`, mesaj: "do / does / did varsa ana fiil yalın (V1) olur: ‘doesn't likes’ ✗ → ‘doesn't like’.", konu: "a1-present-simple" },
  { re: String.raw`^\s*(do|does|did)\s+(i|you|he|she|it|we|they)\s+(\w+s)\b(?<!\b(?:always|sometimes|perhaps|nevertheless|afterwards|nowadays|besides|unless|regardless|thus|as|us|is|was|has|does|this|its|his|hers|ours|yours|theirs|yes|less|bus|pass|miss|kiss|guess|cross|dress|press|express|process|access|stress|address|possess|discuss|focus|bless|confess|toss|boss|class|glass|grass|business|chess|mess|across|status|campus|virus|bonus|minus|plus|news|maths|physics|economics|politics|series|species|means|christmas|chaos|canvas|gas|lens))`, mesaj: "Soruda do / does / did varsa ana fiil yalın (V1) olur: ‘Does she works?’ ✗ → ‘Does she work?’.", konu: "a1-present-simple" },
  { re: String.raw`\b(did|didn't|did not)\s+(\w+\s+)?({V2only})\b`, mesaj: "did / didn't sonrası fiil V1 olur: ‘didn't went’ ✗ → ‘didn't go’.", konu: "a2-past-simple" },
  { re: String.raw`\b(can|could|will|would|shall|should|must|may|might)\s+to\s+\w+`, mesaj: "Modal fiilden sonra ‘to’ gelmez: ‘can to swim’ ✗ → ‘can swim’ (ought to hariç).", konu: "a1-can-cant" },
  { re: String.raw`\b(he|she|it)\s+(cans|musts|shoulds|wills|mays|coulds)\b`, mesaj: "Modal fiiller -s almaz: ‘He cans’ ✗ → ‘He can’.", konu: "a1-can-cant" },
  { re: String.raw`\b(i|you|he|she|it|we|they)\s+(can|could|will|would|should|must|may|might|cannot|can't|won't|wouldn't|shouldn't|couldn't)\s+(\w+s)\b(?<!\b(?:always|sometimes|perhaps|nevertheless|afterwards|nowadays|besides|unless|regardless|thus|as|us|is|was|has|does|this|its|his|hers|ours|yours|theirs|yes|less|bus|pass|miss|kiss|guess|cross|dress|press|express|process|access|stress|address|possess|discuss|focus|bless|confess|toss|boss|class|glass|grass|business|chess|mess|across|status|campus|virus|bonus|minus|plus|news|maths|physics|economics|politics|series|species|means|christmas|chaos|canvas|gas|lens))`, mesaj: "Modal fiilden sonra fiil yalın gelir: ‘He can swims’ ✗ → ‘He can swim’.", konu: "a1-can-cant" },
  { re: String.raw`(?<!\b(?:did|does|do|can|could|will|would|should|must|may|might|to|let|make|makes|made|help|helps|helped|see|saw|watch|hear|heard|didn't|doesn't|don't|can't|won't|wouldn't|shouldn't|couldn't|not|and|or|nor|if)\s+)\b(he|she|it)\s+(have|do|go|don't|are|haven't)\b`, mesaj: "he / she / it ile: has, does, goes, doesn't, is kullanılır.", konu: "a1-present-simple" },
  { re: String.raw`(?<!\b(?:and|or|nor)\s+)\b(you|we|they)\s+(has|does|doesn't|is|isn't|was|wasn't)\b`, mesaj: "you / we / they ile: have, do, don't, are / were kullanılır.", konu: "a1-to-be" },
  { re: String.raw`(?<!\b(?:and|or|nor)\s+)\bI\s+(has|does|doesn't|is|isn't|are|aren't)\b`, mesaj: "I ile: have, do, don't, am kullanılır.", konu: "a1-to-be" },
  { re: String.raw`\b(he|she|it)\s+am\b`, mesaj: "to be özneye uymalı: I am, he/she/it is, you/we/they are.", konu: "a1-to-be" },
  { re: String.raw`\bif\b[^,.;]*\b(will|'ll)\b[^,.;]*,`, mesaj: "if'li koşul tarafında will kullanılmaz: ‘If it will rain,’ ✗ → ‘If it rains,’.", konu: "b1-conditionals-0-1" },
  { re: String.raw`\bif\s+\w+\s+would\s+(have\s+)?\w+`, mesaj: "if tarafında would kullanılmaz: ‘If I would have…’ ✗ → ‘If I had…’ (kibar rica dışında).", konu: "b2-conditionals-2-3" },
  { re: String.raw`\b(when|as soon as|before|after|until|by the time)\s+(i|you|he|she|it|we|they)\s+will\b`, mesaj: "Zaman bağlacından (when, as soon as, until…) sonra will gelmez; Present Simple kullanılır.", konu: "a2-future" },
  { re: String.raw`\b(have|has|had|'ve)\s+(not\s+|already\s+|just\s+|never\s+|ever\s+)?({V2only})\b`, mesaj: "have / has / had'den sonra V3 gelir: ‘have went’ ✗ → ‘have gone’.", konu: "a2-irregular-verbs" },
  { re: String.raw`\bsince\s+(\d+|two|three|four|five|six|seven|eight|nine|ten|a few|several|many)\s+(years?|months?|weeks?|days?|hours?|minutes?)\b`, mesaj: "Süre için ‘for’, başlangıç noktası için ‘since’: ‘since five years’ ✗ → ‘for five years’.", konu: "a2-present-perfect-intro" },
  { re: String.raw`\b(I|you|we|they|he|she)\s+(am|is|are|was|were|'m|'re)\s+(know|want|need|go|come|live|work|play|eat|drink|study|read|write|see|have|sleep|cook|watch|wait|walk|run|swim|listen|get|make|take)\b`, mesaj: "to be ile çekimli fiil yan yana gelmez: ‘I am go’ ✗ → ‘I go’ ya da ‘I am going’.", konu: "a1-present-continuous" },
  { re: String.raw`\b(am|is|are|was|were|been|'m|'re)\s+(knowing|wanting|needing|believing|understanding|belonging|owning|preferring|meaning)\b`, mesaj: "Durum fiilleri (know, want, need, believe…) genelde -ing almaz: ‘I am knowing’ ✗ → ‘I know’.", konu: "a1-present-continuous" },
  { re: String.raw`\b(more|most)\s+(cheaper|bigger|smaller|taller|older|younger|faster|slower|easier|harder|better|worse|best|worst|happier|longer|shorter|cheapest|biggest|easiest|fastest|\w+est)\b`, mesaj: "more / most ile -er / -est birlikte kullanılmaz: ‘more cheaper’ ✗ → ‘cheaper’.", konu: "a2-comparatives" },
  { re: String.raw`\b(advices|informations|furnitures|luggages|homeworks|knowledges|equipments|evidences)\b`, mesaj: "Bu isim sayılamaz; çoğul -s almaz (advice, information, furniture…).", konu: "a2-countable-uncountable" },
  { re: String.raw`\b(a|an)\s+(advice|information|furniture|luggage|homework|news|knowledge|equipment)\b`, mesaj: "Sayılamayan isim a / an almaz: ‘a piece of advice’ ya da ‘some advice’.", konu: "a2-countable-uncountable" },
  { re: String.raw`\b(childrens|peoples|mens|womens|foots|tooths|mouses|sheeps|fishs)\b`, mesaj: "Düzensiz çoğul: children, people, men, women, feet, teeth, mice, sheep, fish.", konu: "a1-plural-nouns" },
  { re: String.raw`\ban\s+(university|universities|european|euro|unique|unit|united|uniform|union|universal|usual|useful|user|one|once|eu)\b`, mesaj: "‘yu’ ya da ‘va’ sesiyle başlayan kelimeler a alır: a university, a European, a one-way ticket.", konu: "a1-articles" },
  { re: String.raw`\ba\s+(apple|egg|hour|honest|idea|engineer|orange|umbrella|island|old|interesting|important|elephant|answer|example|e-mail|email|office|uncle|honour|honor|exam|area|artist|actor|accident|animal|easy|early|expensive|english|empty|open|ugly|unusual|understanding|eye|ear|airport)\b`, mesaj: "Ünlü sesle başlayan kelimeden önce an kullanılır: an apple, an hour.", konu: "a1-articles" },
  { re: String.raw`\b(enjoy|enjoys|enjoyed|avoid|avoids|avoided|finish|finished|mind|suggest|suggested|consider|considered|deny|denied)\s+to\s+(?!\w+ing\b)(?!(me|him|her|us|them|you|the|a|an|my|your|his|our|their|it)\b)\w+`, mesaj: "Bu fiilden sonra V-ing gelir: ‘enjoy to play’ ✗ → ‘enjoy playing’.", konu: "b2-gerunds-infinitives" },
  { re: String.raw`\b(look|looks|looking|looked)\s+forward\s+to\s+(?!\w+ing\b)(?!(the|a|an|my|your|his|her|our|their|it|this|that|these|those|you|him|them|us|me|seeing|hearing)\b)\w+`, mesaj: "look forward to + V-ing: ‘look forward to meet’ ✗ → ‘look forward to meeting’.", konu: "b2-gerunds-infinitives" },
  { re: String.raw`\b(want|wants|wanted|decide|decided|decides|hope|hopes|hoped|plan|plans|planned|refuse|refused|agree|agreed|promise|promised|would like|'d like)\s+(\w+ing)\b(?<!\b(?:anything|nothing|something|everything|morning|evening|building|clothing|thing|things|ring|king|wedding|meeting|training|feeling|reading|writing|spring|ceiling|string|being|swimming pool))`, mesaj: "Bu fiilden sonra to V1 gelir: ‘want going’ ✗ → ‘want to go’.", konu: "a2-verb-patterns" },
  { re: String.raw`\b(said)\s+(me|him|her|us|them)\b`, mesaj: "say + kişi kullanılmaz: ‘said me’ ✗ → ‘told me’ ya da ‘said to me’.", konu: "b2-reported-speech" },
  { re: String.raw`\b(suggested|suggest|suggests)\s+(me|him|her|us|them|you)\s+to\b`, mesaj: "suggest + kişi + to kalıbı yok: ‘suggested me to go’ ✗ → ‘suggested that I go’ / ‘suggested going’.", konu: "c1-subjunctive" },
  { re: String.raw`\b(despite|in spite of)\s+(i|you|he|she|it|we|they|there)\s+(am|is|are|was|were|have|has|had|do|does|did|\w+ed)\b`, mesaj: "despite / in spite of + isim ya da V-ing; cümle için although kullanılır.", konu: "b2-linkers" },
  { re: String.raw`\bdespite\s+of\b`, mesaj: "‘despite of’ diye kalıp yok: despite ya da in spite of.", konu: "b2-linkers" },
  { re: String.raw`\b(although|though|even though)\b[^.;]*,\s*but\b`, mesaj: "although ve but aynı cümlede birlikte kullanılmaz.", konu: "a2-conjunctions" },
  { re: String.raw`\bbecause of\s+(i|you|he|she|it|we|they)\s+(am|is|are|was|were|have|has|had|do|does|did|\w+ed)\b`, mesaj: "because of + isim; cümle için because: ‘because of it was late’ ✗ → ‘because it was late’.", konu: "a2-conjunctions" },
  { re: String.raw`\b(people|person|teacher|man|woman|boy|girl|doctor|student|friend|someone|anyone|men|women|children|child)\s+which\b`, mesaj: "İnsanlar için which değil who / that kullanılır.", konu: "b1-relative-clauses" },
  { re: String.raw`\b(know|knew|wonder|wondered|tell me|told me|asked|ask|sure|idea|remember|understand|explain)\b[^.?!]*\b(where|what|when|why|how|who)\s+(is|are|was|were|does|do|did|can|will|has|have)\s+(the|my|your|his|her|it|he|she|they|we|you|i|this|that)\b`, mesaj: "Dolaylı soruda düz sıra kullanılır: ‘Do you know where is the bank?’ ✗ → ‘Do you know where the bank is?’.", konu: "b2-noun-clauses" },
  { re: String.raw`\b(should|must|could|might|would|may|can)\s+(not\s+)?({V2only}|{V3only})\b`, mesaj: "Modal + yalın fiil (V1); geçmiş için modal + have + V3: ‘should told’ ✗ → ‘should have told’.", konu: "c1-past-modals" },
  { re: String.raw`\b(i|you|we|they|he|she)\s+used\s+to\s+(\w+ing)\b`, mesaj: "used to + V1 (eskiden yapardım). Alışkınlık için be used to + V-ing: ‘I'm used to getting up’.", konu: "b1-used-to-would" },
  { re: String.raw`\b(i'm|i am|you're|you are|we're|we are|they're|they are|he's|he is|she's|she is|i was|we were|they were|he was|she was)\s+used\s+to\s+(?!\w+ing\b)(?!(the|a|an|it|this|that|my|your|his|her|our|their|him|them|me|us|being)\b)\w+`, mesaj: "be used to (alışkın olmak) + V-ing: ‘I'm used to get up’ ✗ → ‘I'm used to getting up’.", konu: "b1-used-to-would" },
  { re: String.raw`\b(every|each)\s+\w+s\s+(are|have|were)\b`, mesaj: "every / each + tekil isim + tekil fiil: ‘every students are’ ✗ → ‘every student is’.", konu: "b1-quantifiers" },
  { re: String.raw`\b(neither|none)\b[^.,;]{0,40}\b(don't|doesn't|didn't|isn't|aren't|wasn't|weren't|haven't|hasn't|won't|can't|not)\b`, mesaj: "neither / none zaten olumsuzdur; ikinci bir olumsuzluk eklenmez.", konu: "b1-quantifiers" },
  { re: String.raw`\b(I'm|I am|I was|we were|we're|we are)\s+(very\s+|so\s+|really\s+|a bit\s+)?(boring|confusing|exhausting|tiring)\b`, mesaj: "Hissettiğin duyguyu kastediyorsan -ed kullan: I'm bored / tired (I'm boring = sıkıcı biriyim).", konu: "b1-adjectives-ed-ing" },
  { re: String.raw`\b(I'm|I am|we're|we are)\s+(very\s+|so\s+|really\s+)?interesting\s+in\b`, mesaj: "İlgi duymak: interested in (I'm interested in music).", konu: "b1-adjectives-ed-ing" },
  { re: String.raw`^\s*not only\s+(i|you|he|she|it|we|they)\s+\w+`, mesaj: "Not only cümle başındaysa devrik yapı gerekir: ‘Not only did she…’.", konu: "c1-inversion" },
  { re: String.raw`\bi wish i would\b`, mesaj: "Kendin için ‘I wish I would’ kullanılmaz: ‘I wish I had / could…’.", konu: "b2-wishes-regrets" },
  { re: String.raw`\b(there is|there's|there was)\s+(two|three|four|five|six|many|several|a lot of\s+\w+s|lots of\s+\w+s)\b`, mesaj: "Çoğul isimle there are / there were kullanılır.", konu: "a1-there-is-are" },
  { re: String.raw`\b(on|in|at)\s+(next|last|this)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday|week|month|year|weekend)\b`, mesaj: "next / last / this önünde edat kullanılmaz: ‘on next Monday’ ✗ → ‘next Monday’.", konu: "a1-prepositions" },
  { re: String.raw`\bin\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b`, mesaj: "Günlerle on kullanılır: ‘on Monday’.", konu: "a1-prepositions" },
  { re: String.raw`^\s*(me|him|us|them)\s+(am|is|are|was|were|go|went|like|want|have|can|will)\b`, mesaj: "Özne yerinde özne zamiri kullanılır: ‘Me want’ ✗ → ‘I want’.", konu: "a1-pronouns" },
  { re: String.raw`^\s*(is|are|am|was|were)\s+(he|she|it|you|we|they|i)\s+(is|are|am|was|were)\b`, mesaj: "Soruda to be bir kez, başta kullanılır: ‘Is she is…?’ ✗ → ‘Is she…?’.", konu: "a1-to-be" },
  { re: String.raw`^\s*(i|you|he|she|it|we|they)\s+(a|an|the|not)\s+\w+`, mesaj: "Fiil yoksa to be gerekir: ‘She a doctor’ ✗ → ‘She is a doctor’.", konu: "a1-to-be" },
  { re: String.raw`^\s*(is|was)\s+(raining|snowing|cold|hot|warm|sunny|windy|late|early|dark)\b`, mesaj: "Hava/saat cümlelerinde ‘it’ öznesi atlanmaz: ‘It is raining’.", konu: "a1-pronouns" },
  { re: String.raw`^\s*(my|his|her|the|our|their)\s+\w+\s+(he|she|they|it)\s+(is|are|was|were|has|have)\b`, mesaj: "İsim özne varken ayrıca zamir eklenmez: ‘My sister she is’ ✗ → ‘My sister is’.", konu: "a1-pronouns" },
  { re: String.raw`\b(can|could|will|would|should|must|may|might)\s+(i|you|he|she|it|we|they)\s+to\s+\w+`, mesaj: "Modal fiilden sonra ‘to’ gelmez: ‘Can you to help?’ ✗ → ‘Can you help?’.", konu: "a1-can-cant" },
  { re: String.raw`\b(will|would|should|must|might|may|can|could)\s+(not\s+)?(can|could|must|may|might|will|should)\b`, mesaj: "İki modal yan yana gelmez: ‘will can’ ✗ → ‘will be able to’.", konu: "a1-can-cant" },
  { re: String.raw`\bit's\s+(own\s+)?(food|tail|name|colou?r|size|shape|owner|legs?|eyes|head|wings|nest|purpose|value|price|history|capital|population|roof|walls?|leaves|branches|engine|screen|battery)\b`, mesaj: "Sahiplik ‘its’ (kesmesiz); it's = it is: ‘it's food’ ✗ → ‘its food’.", konu: "a1-possessives" },
  { re: String.raw`\b(is|are|was|were)\s+(my|your|our|their)\s*[.!?]?\s*$`, mesaj: "Tek başına sahiplik zamiri kullanılır: ‘This is my.’ ✗ → ‘This is mine.’", konu: "a1-possessives" },
  { re: String.raw`\b(i|you|we|they|he|she)\s+(?!(?:am|is|are|was|were|have|has|had|do|does|did|can|could|will|would|should|must|may|might|don't|doesn't|didn't|won't|can't)\b)(\w+)\s+(always|usually|often|never|sometimes|rarely|seldom)\b`, mesaj: "Sıklık zarfı ana fiilden önce gelir: ‘I go always’ ✗ → ‘I always go’.", konu: "a1-adverbs-frequency" },
  { re: String.raw`\b(always|usually|often|never|sometimes|rarely|seldom)\s+(am|is|are|was|were)\b`, mesaj: "to be'den sonra gelir: ‘She always is’ ✗ → ‘She is always’.", konu: "a1-adverbs-frequency" },
  { re: String.raw`\b(am|is|are|'m|'re)\s+(usually|always|often|never|sometimes)\s+(get|go|eat|drink|have|work|study|play|read|watch|wake|take|come|do)\b`, mesaj: "Present Simple'da to be + fiil birlikte kullanılmaz: ‘I am usually get’ ✗ → ‘I usually get’.", konu: "a1-present-simple" },
  { re: String.raw`^\s*(where|what|when|why|how)\s+(i|you|we|they|he|she)\s+(?!(?:am|is|are|was|were)\b)\w+[^?]*\?\s*$`, mesaj: "Bilgi sorusunda soru kelimesinden sonra yardımcı fiil gelir: ‘Where you live?’ ✗ → ‘Where do you live?’.", konu: "a1-wh-questions" },
  { re: String.raw`\bhow many\s+(money|time|water|information|advice|sugar|milk|bread|furniture|luggage|homework|news|traffic|rice|coffee|tea|food)\b`, mesaj: "Sayılamayan isimle how much kullanılır.", konu: "a2-some-any-much-many" },
  { re: String.raw`\bhow much\s+(students|people|books|cars|friends|children|apples|cups|eggs|questions|chairs|brothers|sisters|times|days|hours)\b`, mesaj: "Sayılabilen çoğul isimle how many kullanılır.", konu: "a2-some-any-much-many" },
  { re: String.raw`^\s*not\s+(open|close|touch|go|come|eat|drink|run|be|do|forget|worry|tell|say|look|use|take|leave|park|smoke|talk|speak|move|sit|stand|wait|play|make|let)\b`, mesaj: "Olumsuz emir Don't + V1 ile yapılır: ‘Not open’ ✗ → ‘Don't open’.", konu: "a1-imperatives" },
  { re: String.raw`\b(don't|do not|doesn't|didn't)\s+to\s+\w+`, mesaj: "don't / doesn't / didn't + V1 (to yok).", konu: "a1-imperatives" },
  { re: String.raw`\b(buyed|teached|catched|thinked|bringed|goed|comed|eated|drinked|runned|swimmed|writed|speaked|taked|maked|gived|knowed|growed|throwed|drawed|flyed|flied|sleeped|keeped|leaved|feeled|meeted|selled|telled|finded|getted|sitted|standed|understanded|losed|choosed|breaked|forgeted|forgetted|begined|singed|hitted|cutted|putted|readed|spended|sended|builded|payed|sayed|layed|fighted|hurted|costed|winned|feeded|holded|shooted|stealed|wored|weared|hided|bited|blowed|drived|rided|rised|shaked|teared|waked)\b`, mesaj: "Düzensiz fiil -ed almaz (bought, taught, caught, thought, went…). Düzensiz Fiiller tablosuna bak.", konu: "a2-irregular-verbs" },
  { re: String.raw`\bmore\s+(tall|short|big|small|old|young|fast|slow|cheap|long|hot|cold|nice|good|bad|happy|easy|high|low|large|strong|weak|rich|poor|clean|warm|new|safe|late|early|busy|heavy|light|dark|near|far)\s+than\b`, mesaj: "Kısa sıfatlar -er alır: ‘more tall than’ ✗ → ‘taller than’ (good → better, bad → worse).", konu: "a2-comparatives" },
  { re: String.raw`\bthe most\s+(good|bad|big|tall|small|old|young|fast|cheap|long|hot|cold|happy|easy|nice|high|short|large)\b`, mesaj: "Kısa sıfatlar -est alır: ‘the most big’ ✗ → ‘the biggest’ (good → the best).", konu: "a2-comparatives" },
  { re: String.raw`\b(the\s+)?(news|information|advice|furniture|homework|luggage)\s+(are|were)\b`, mesaj: "Sayılamayan isim tekil fiil alır: ‘The news is…’.", konu: "a2-countable-uncountable" },
  { re: String.raw`\b(i|you|we|they|he|she)\s+(don't|doesn't|didn't|haven't|hasn't)\s+(have\s+|got\s+|need\s+|want\s+|see\s+|know\s+)?some\b`, mesaj: "Olumsuz cümlede ‘hiç’ anlamında any kullanılır: ‘I don't have any…’.", konu: "a2-some-any-much-many" },
  { re: String.raw`\b(don't|doesn't|didn't|isn't|aren't|wasn't|weren't|haven't|hasn't|can't|won't|couldn't)\s+(\w+\s+)?(no|nothing|nobody|never|none|nowhere)\b`, mesaj: "İngilizcede çift olumsuzluk olmaz: ‘isn't no’ ✗ → ‘isn't any’ ya da ‘is no’.", konu: "a2-some-any-much-many" },
  { re: String.raw`\b(yesterday|last (week|night|month|year))\b[^.]*\bmust\s+(?!have\b)\w+|\bmust\s+(?!have\b)\w+[^.]*\b(yesterday|last (week|night|month|year)|\w+ ago)\b`, mesaj: "must'ın geçmişi yok; geçmiş zorunluluk için had to: ‘Yesterday I had to work’.", konu: "a2-should-must-have-to" },
  { re: String.raw`(?<!\b(?:would|could|might|must|should|can't|cannot|couldn't|may|needn't|shouldn't|wouldn't|will|'d)\s+)\b(have|has|'ve)\s+(\w+\s+)?{V3}\b[^.]*\b(yesterday|last (week|night|month|year|summer|winter|spring|autumn|weekend|monday|tuesday|wednesday|thursday|friday|saturday|sunday)|\w+ (days?|weeks?|months?|years?) ago|in (19|20)\d\d)\b`, mesaj: "Belli bir geçmiş zaman (yesterday, last…, … ago) varsa Present Perfect değil Past Simple kullanılır.", konu: "a2-present-perfect-intro" },
  { re: String.raw`\b(i|you|we|they|he|she)\s+(know|knows|am|is|are|live|lives|work|works|am working|is working|are working|am living|is living|are living)\b[^.]*\bsince\b`, mesaj: "since ile geçmişten bugüne süren durum Present Perfect (Continuous) ister: ‘I have known / have been working since…’.", konu: "a2-present-perfect-intro" },
  { re: String.raw`\benough\s+(big|small|old|tall|good|fast|strong|warm|cold|hot|long|rich|clever|smart|easy|young|large|high|loud|quick|ready|safe)\b`, mesaj: "enough sıfattan sonra gelir: ‘enough big’ ✗ → ‘big enough’.", konu: "a2-too-enough" },
  { re: String.raw`\bso\s+(a|an)\s+\w+`, mesaj: "a/an + sıfat + isim önünde such kullanılır: ‘so a nice day’ ✗ → ‘such a nice day’.", konu: "a2-too-enough" },
  { re: String.raw`\btoo much\s+(tired|hot|cold|expensive|big|small|difficult|easy|busy|late|early|young|old|happy|sad)\b`, mesaj: "Sıfattan önce too much değil too: ‘too much tired’ ✗ → ‘too tired’.", konu: "a2-too-enough" },
  { re: String.raw`\b(am|is|are|was|were|be|been)\s+(happened|occurred|arrived|died|disappeared|existed|seemed|appeared|remained|slept)\b`, mesaj: "Nesne almayan fiiller (happen, arrive, die…) edilgen yapılmaz: ‘was happened’ ✗ → ‘happened’.", konu: "b1-passive-intro" },
  { re: String.raw`^\s*(the|this|that|my|his|her|our|their)\s+\w+\s+(stolen|built|made|written|broken|sold|taken|given|done|seen|painted|cleaned|repaired|delivered|sent|cooked)\s+(yesterday|last)\b`, mesaj: "Edilgen yapıda be atlanmaz: ‘The car stolen’ ✗ → ‘The car was stolen’.", konu: "b1-passive-intro" },
  { re: String.raw`\bunless\s+(\w+\s+)?(don't|doesn't|didn't|do not|does not|did not|won't|isn't|aren't|not)\b`, mesaj: "unless zaten ‘if not’ demektir; ardından olumlu fiil gelir.", konu: "b1-conditionals-0-1" },
  { re: String.raw`\b(that|which|who|whom)\s+(i|you|he|she|we|they)\s+\w+\s+(it|him|her|them)\s+(is|are|was|were)\b`, mesaj: "İlgi zamiri nesneyi zaten karşılar; ‘it/him’ tekrar edilmez: ‘the book that I bought it’ ✗.", konu: "b1-relative-clauses" },
  { re: String.raw`,\s*that\s+(is|was|are|were|has|have)\b(?!\s*,)(?!\s+(the|a|an|why|what|how|all|it)\b)`, mesaj: "Virgüllü (ek bilgi veren) ilgi cümlesinde that kullanılmaz; which / who kullan.", konu: "b1-relative-clauses" },
  { re: String.raw`\b(did|didn't|did not)\s+(\w+\s+)?used to\b`, mesaj: "did'den sonra ‘use to’ (d'siz): ‘Did you use to…?’.", konu: "b1-used-to-would" },
  { re: String.raw`\bwould\s+(live|be|have|know|own|like|love|believe|think|want)\b[^.]*\bwhen (i|you|he|she|we|they) (was|were)\b`, mesaj: "Geçmiş durumlar (live, be, have, know…) için would değil used to kullanılır.", konu: "b1-used-to-would" },
  { re: String.raw`\b(like|likes|liked|have|has|go|goes|went|want|wants|play|plays|live|lives|work|works|eat|eats|can|will|did|do|does)\b[^,?]*,\s*isn't it\s*\?`, mesaj: "Question tag cümledeki fiile uyar: ‘You like coffee, don't you?’.", konu: "b1-question-tags" },
  { re: String.raw`\b(never|hardly|seldom|nobody|nothing)\b[^,?]*,\s*(don't|doesn't|didn't|isn't|aren't|wasn't|won't|can't|haven't|hasn't)\s+\w+\s*\?`, mesaj: "never / nobody / nothing cümleyi olumsuz yapar; tag olumlu olur: ‘He never complains, does he?’.", konu: "b1-question-tags" },
  { re: String.raw`\bif\s+\w+\s+(had|were|was)\b(?!\s+(been\s+)?{V3}\b)[^,]*,\s*\w+\s+(will|'ll)\b`, mesaj: "Type 2'de (if + V2) sonuç tarafında genellikle would kullanılır: ‘If I had time, I would…’.", konu: "b2-conditionals-2-3" },
  { re: String.raw`\b(would|could|might)(n't)?\s+(not\s+)?have\s+{V3}[^.]*\b(now|right now|today|currently|at the moment)\b`, mesaj: "Sonuç şimdiyse (now, today) would + V1 kullanılır: ‘you wouldn't be tired now’ (Mixed Conditional).", konu: "b2-mixed-conditionals" },
  { re: String.raw`\bmust(n't| not)\s+be\s+(true|right|possible|real)\b`, mesaj: "‘Öyle olamaz’ çıkarımı için can't kullanılır: ‘It can't be true’ (mustn't yasak bildirir).", konu: "b1-modals-deduction" },
  { re: String.raw`\b(is|am|are|was)\s+(teacher|doctor|engineer|student|nurse|lawyer|architect|pilot|dentist|singer|writer|manager|farmer|driver|waiter|chef)\b`, mesaj: "Tekil meslek isminden önce a / an gelir: ‘She is a teacher’.", konu: "a1-articles" },
  { re: String.raw`^\s*the\s+(life|happiness)\s+(is|was)\b`, mesaj: "Genel anlamdaki soyut kavram artikelsiz kullanılır: ‘Life is beautiful’.", konu: "a1-articles" },
  { re: String.raw`\b(two|three|four|five|six|seven|eight|nine|ten|many|several)\s+(baby|city|country|child|person|man|woman|book|car|day|year|student|friend|apple|box|bus|house|dog|cat|teacher|week|month|hour|minute|thing)\b`, mesaj: "İkiden itibaren isim çoğul olur: ‘two babies, three children’.", konu: "a1-plural-nouns" },
  { re: String.raw`^\s*(have|has)\s+(a lot of|lots of|many|two|three|four|five|several)\b[^?]*$`, mesaj: "‘Var’ anlamında there is / there are kullanılır: ‘There are a lot of people…’.", konu: "a1-there-is-are" },
  { re: String.raw`\bin\s+the\s+(bus|train|plane|ship|metro|subway|tram)\b`, mesaj: "Otobüs, tren, uçak gibi taşıtlarda on kullanılır: ‘on the bus’.", konu: "a1-prepositions" },
  { re: String.raw`\b(studing|studyed|plaied|stoping|runing|siting|makeing|takeing|comeing|haveing|writting|swiming|geting|puting|stoped|shoping|planing to|beginned)\b`, mesaj: "Yazım hatası: studying, played, stopping, running, sitting, making, taking, coming, having, writing, swimming, getting, putting.", konu: "a1-present-continuous" },
  { re: String.raw`\b(did|didn't)\s+(i|you|he|she|it|we|they)\s+(saw|went|came|took|made|ate|wrote|bought|got|gave|told|said|found|left|knew|thought|did|had)\b`, mesaj: "did'li soruda fiil V1 olur: ‘Did you saw?’ ✗ → ‘Did you see?’.", konu: "a2-past-simple" },
  { re: String.raw`,\s*however\s+(i|you|he|she|it|we|they|the|this)\b`, mesaj: "however iki cümleyi virgülle bağlamaz: ‘…; however, …’ ya da ‘… . However, …’.", konu: "b2-linkers" },
  { re: String.raw`^\s*(hardly|scarcely|never|rarely|seldom|no sooner|little)\s+(i|you|he|she|it|we|they)\s+\w+`, mesaj: "Olumsuz zarf başta ise devrik yapı gerekir: ‘Hardly had I…’, ‘Never have I…’.", konu: "c1-inversion" },
  { re: String.raw`^\s*only (after|when|if|then)\b.*\b(i|you|he|she|it|we|they)\s+(\w+ed|{V2})\b.*\b(i|you|he|she|it|we|they)\s+(\w+ed|{V2})\b`, mesaj: "Only after / Only when ile ana cümle devrik olur: ‘Only when I arrived did I realise…’.", konu: "c1-inversion" },
  { re: String.raw`^\s*what\s+\w+\s+\w+\s+are\b`, mesaj: "What-cleft genellikle tekil fiil alır: ‘What we need is…’.", konu: "c1-cleft-sentences" },
  { re: String.raw`^\s*it\s+(is|was)\s+(in|on|at)\s+[^,]+?\s+when\b`, mesaj: "It-cleft'te standart bağlaç that: ‘It was in 2010 that I graduated’.", konu: "c1-cleft-sentences" },
  { re: String.raw`\b(essential|vital|imperative|crucial|demand|demanded|recommend|recommended|request|requested|propose|proposed|urge|urged)\s+that\s+(he|she|it|the\s+\w+|every\s+\w+|each\s+\w+)\s+(\w+s|doesn't|don't|didn't)\b(?<!\b(?:is|was|has|this|his|its|us|always))`, mesaj: "Subjunctive kalıbında fiil yalın kalır: ‘essential that he attend’ / ‘that he not leave’.", konu: "c1-subjunctive" },
  { re: String.raw`\bhaving been\s+{V3}\s+(the|a|an|my|his|her|their|our)\b`, mesaj: "İşi özne kendisi yaptıysa etken: ‘Having finished the work…’ (Having been finished ✗).", konu: "c1-participle-clauses" },
  { re: String.raw`\b(should|must|could|might|would)\s+(not\s+)?(told|said|made|bought|seen|done|gone|taken|known|left|thought|forgotten|written|eaten|finished|called|missed|studied|tried|asked|helped|stayed|waited|lost|found|got)\b`, mesaj: "Modal + yalın fiil; geçmiş için modal + have + V3: ‘should told’ ✗ → ‘should have told’.", konu: "c1-past-modals" },
  { re: String.raw`\b(must|should|could|would|might|may|can't|cannot|couldn't|shouldn't|wouldn't|needn't)\s+have\s+(forget|go|come|take|see|do|make|write|eat|give|know|get|buy|bring|think|teach|find|leave|tell|say|begin|break|choose|fall|fly|lose|meet|run|send|speak|spend|steal|swim|understand|win)\b`, mesaj: "modal + have'den sonra V3 gelir: ‘must have forget’ ✗ → ‘must have forgotten’.", konu: "c1-past-modals" },
  { re: String.raw`\b(an?|the)\s+(\w+\s+)?(increase|rise|decrease|fall|drop|reduction|decline|growth)\s+of\s+(unemployment|prices|inflation|crime|population|sales|temperatures?|income|demand|interest|the number)\b`, mesaj: "Değişim bildiren isimlerden sonra in gelir: ‘an increase in unemployment’.", konu: "c1-nominalisation" },
  { re: String.raw`\bthe\s+(analyse|analyze|decide|introduce|develop|reduce|fail|improve|explain|describe|discuss|deliver|arrive|refuse|approve)\s+of\b`, mesaj: "the + … + of yapısında isim gerekir: analysis, decision, introduction, development, reduction, failure…", konu: "c1-nominalisation" },
  { re: String.raw`\bthis time (tomorrow|next \w+)\b[^.]*\bwill\s+(?!be\b)\w+|\bwill\s+(?!be\b)\w+[^.]*\bthis time (tomorrow|next \w+)\b`, mesaj: "Gelecekte belli bir anda süren eylem: will be + V-ing (‘I'll be lying on the beach’).", konu: "b2-future-cont-perfect" },
  { re: String.raw`\bby\s+(next \w+|the end of \w+|20\d\d|tomorrow|then|the time [^,]+,)[^.]*\bwill\s+(?!have\b|be\b)\w+`, mesaj: "by + gelecek zaman: o ana kadar tamamlanmış eylem için will have + V3.", konu: "b2-future-cont-perfect" },
  { re: String.raw`\bwish\b[^.]*\b(didn't|\w+ed|{V2only})\b[^.]*\b(yesterday|last (night|week|year|month|summer)|\w+ ago)\b`, mesaj: "Geçmiş pişmanlık için wish + had V3: ‘I wish I hadn't eaten…’.", konu: "b2-wishes-regrets" },
  { re: String.raw`\bwish\s+(i|you|he|she|it|we|they)\s+will\b`, mesaj: "Olası gelecek dileği için hope: ‘I hope you will come’.", konu: "b2-wishes-regrets" },
  { re: String.raw`\b(asked|wondered)\b[^.]*\b(if|whether)\s+(i|you|he|she|it|we|they)\s+(can|will|am|is|are)\b`, mesaj: "asked / wondered geçmişte ise zaman bir adım kayar: can → could, will → would, am/is → was.", konu: "b2-reported-speech" },
  { re: String.raw`\b(had|have|has|having)\s+(the|a|my|his|her|our|their)\s+(mechanic|technician|plumber|electrician|builder|hairdresser|barber|painter|gardener|cleaner|assistant|secretary)\s+to\s+\w+`, mesaj: "have + kişi + V1 (to yok); get + kişi + to V1: ‘I had the mechanic repair…’.", konu: "b2-advanced-passives" },
  { re: String.raw`\b(he|she|they|we|i|you)\s+(is|are|was|were|am)\s+(believed|said|thought|reported|claimed|known)\s+that\b`, mesaj: "İki kalıp karışmış: ‘He is believed to be…’ ya da ‘It is believed that he is…’.", konu: "b2-advanced-passives" },
  { re: String.raw`\b(know|knows)\s+\w+\s+for\s+(\w+\s+)?(years|months|weeks|ages|a long time)\b`, mesaj: "Geçmişten bugüne süren durum Present Perfect ister: ‘I have known him for five years’.", konu: "a2-present-perfect-intro" }
];

/* Dinle-Ayırt: kulakta karışan yapı çiftleri */
const GRAMMAR_LISTEN = [
  { a: "I've finished my homework.", b: "I'd finished my homework.", konu: "b1-past-perfect", not: "'ve = have (Present Perfect, şimdiye bağlı); 'd = had (Past Perfect, geçmişteki bir andan önce)." },
  { a: "I'd go if I had time.", b: "I'll go if I have time.", konu: "b2-conditionals-2-3", not: "I'd go = hayali (Type 2); I'll go = gerçek olasılık (Type 1)." },
  { a: "She's gone to Paris.", b: "She's been to Paris.", konu: "a2-present-perfect-intro", not: "gone: gitti ve hâlâ orada; been: gitti ve döndü." },
  { a: "He's working now.", b: "He works now.", konu: "a1-present-continuous", not: "He's working = şu an çalışıyor; He works = genel olarak çalışır (now ile doğal değil)." },
  { a: "I used to drive.", b: "I'm used to driving.", konu: "b1-used-to-would", not: "used to drive = eskiden araba kullanırdım; I'm used to driving = araba kullanmaya alışkınım." },
  { a: "She stopped to smoke.", b: "She stopped smoking.", konu: "b2-gerunds-infinitives", not: "stopped to smoke = sigara içmek için durdu; stopped smoking = sigarayı bıraktı." },
  { a: "I remember locking the door.", b: "I remembered to lock the door.", konu: "b2-gerunds-infinitives", not: "remember locking = kilitlediğimi hatırlıyorum (anı); remembered to lock = kilitlemeyi unutmadım (görev)." },
  { a: "He must have left.", b: "He must leave.", konu: "c1-past-modals", not: "must have left = gitmiş olmalı (geçmiş çıkarım); must leave = gitmek zorunda." },
  { a: "You should have told me.", b: "You should tell me.", konu: "c1-past-modals", not: "should have told = söylemeliydin (geçmiş eleştiri); should tell = söylemelisin." },
  { a: "The house was built in 1990.", b: "The house has been built.", konu: "b1-passive-intro", not: "was built = 1990'da yapıldı (geçmiş edilgen); has been built = yapıldı/tamamlandı (şimdiye bağlı)." },
  { a: "I had my car repaired.", b: "I repaired my car.", konu: "b2-advanced-passives", not: "had my car repaired = tamir ettirdim (başkasına); repaired my car = kendim tamir ettim." },
  { a: "I wish I had a car.", b: "I wish I'd had a car.", konu: "b2-wishes-regrets", not: "had = şimdiki dilek (keşke olsa); 'd had = geçmiş pişmanlık (keşke olsaydı)." },
  { a: "She's bored.", b: "She's boring.", konu: "b1-adjectives-ed-ing", not: "bored = sıkılmış; boring = sıkıcı biri." },
  { a: "He's left.", b: "He left.", konu: "a2-present-perfect-intro", not: "He's left = gitti (şu an burada değil); He left = gitti (geçmişte, belirli zamanda)." },
  { a: "We'd been waiting for an hour.", b: "We've been waiting for an hour.", konu: "b1-ppc", not: "'d been waiting = (o ana kadar) bekliyorduk; 've been waiting = (şimdiye kadar) bekliyoruz." },
  { a: "It's raining.", b: "It rains.", konu: "a1-present-continuous", not: "It's raining = şu an yağıyor; It rains = (genel olarak) yağar." },
  { a: "I'll have finished by six.", b: "I'll finish by six.", konu: "b2-future-cont-perfect", not: "will have finished = altıya kadar bitirmiş olacağım; will finish = altıya kadar bitireceğim." },
  { a: "They can't have seen it.", b: "They can't see it.", konu: "c1-past-modals", not: "can't have seen = görmüş olamazlar; can't see = göremiyorlar." },
  { a: "She asked me if I was coming.", b: "She asked me, “Are you coming?”", konu: "b2-reported-speech", not: "Dolaylı soruda düz sıra ve zaman kayması: if I was coming." },
  { a: "There's a problem.", b: "There are problems.", konu: "a1-there-is-are", not: "there's + tekil; there are + çoğul." },
  { a: "He's taller than me.", b: "He's as tall as me.", konu: "a2-comparatives", not: "taller than = daha uzun; as tall as = aynı boyda." },
  { a: "I don't have to go.", b: "I mustn't go.", konu: "a2-should-must-have-to", not: "don't have to = zorunda değilim; mustn't = gitmemeliyim (yasak)." },
  { a: "It's too hot to drink.", b: "It's hot enough to drink.", konu: "a2-too-enough", not: "too hot to drink = içilemeyecek kadar sıcak; hot enough = içilecek kadar (yeterince) sıcak." },
  { a: "If I'd known, I'd have come.", b: "If I knew, I'd come.", konu: "b2-conditionals-2-3", not: "'d known… 'd have come = geçmiş (Type 3); knew… 'd come = şimdi (Type 2)." },
  { a: "Had I known, I would have helped.", b: "I had known, so I helped.", konu: "c1-inversion", not: "Had I known… = Bilseydim (devrik koşul); I had known = biliyordum." },
  { a: "What I need is time.", b: "I need time.", konu: "c1-cleft-sentences", not: "What I need is… = asıl ihtiyacım olan (vurgu)." },
  { a: "Having finished, she left.", b: "She finished and left.", konu: "c1-participle-clauses", not: "Having finished = bitirdikten sonra (participle clause); anlam aynı, yapı resmî." },
  { a: "Neither of them came.", b: "Either of them can come.", konu: "b1-quantifiers", not: "neither = ikisi de gelmedi; either = ikisinden biri gelebilir." },
  { a: "He's been to the bank.", b: "He's been at the bank.", konu: "a2-present-perfect-intro", not: "been to = gidip geldi; been at = orada bulundu." },
  { a: "I'd rather stay.", b: "I'd better stay.", konu: "b2-wishes-regrets", not: "'d rather = kalmayı tercih ederim; 'd better = kalsam iyi olur (uyarı)." }
];

/* Mevcut alıştırma sorularının konu eşlemesi */
const GRAMMAR_EXERCISE_LINKS = {
  vf: {
    vf_01: "a2-past-simple", vf_02: "a1-present-continuous", vf_03: "b1-pc", vf_04: "a2-verb-patterns", vf_05: "a2-verb-patterns",
    vf_06: "b1-conditionals-0-1", vf_07: "b1-passive-intro", vf_08: "a2-present-perfect-intro", vf_09: "a2-should-must-have-to", vf_10: "b2-gerunds-infinitives",
    vf_11: "a2-present-perfect-intro", vf_12: "b1-past-perfect", vf_13: "b2-gerunds-infinitives", vf_14: "b2-gerunds-infinitives", vf_15: "b2-gerunds-infinitives",
    vf_16: "b2-conditionals-2-3", vf_17: "b1-passive-intro", vf_18: "c1-past-modals", vf_19: "b2-gerunds-infinitives", vf_20: "b1-past-perfect",
    vf_21: "b2-advanced-passives", vf_22: "b2-gerunds-infinitives", vf_23: "b2-future-cont-perfect", vf_24: "b2-conditionals-2-3", vf_25: "b1-modals-deduction",
    vf_26: "b1-past-perfect", vf_27: "b2-gerunds-infinitives", vf_28: "c1-past-modals", vf_29: "b2-mixed-conditionals", vf_30: "b2-advanced-passives",
    vf_31: "b2-gerunds-infinitives", vf_32: "b2-gerunds-infinitives", vf_33: "b2-advanced-passives", vf_34: "b2-gerunds-infinitives", vf_35: "c1-past-modals",
    vf_36: "b2-wishes-regrets", vf_37: "c1-participle-clauses", vf_38: "b2-wishes-regrets", vf_39: "b2-future-cont-perfect", vf_40: "b2-gerunds-infinitives",
    vf_41: "c1-inversion", vf_42: "c1-inversion", vf_43: "c1-subjunctive", vf_44: "c1-participle-clauses", vf_45: "b2-wishes-regrets",
    vf_46: "b2-advanced-passives", vf_47: "c1-inversion", vf_48: "b2-gerunds-infinitives", vf_49: "c1-subjunctive", vf_50: "c1-past-modals",
    vf_51: "b2-future-cont-perfect", vf_52: "b2-gerunds-infinitives", vf_53: "b2-gerunds-infinitives", vf_54: "a2-future", vf_55: "b1-passive-intro",
    vf_56: "c1-inversion", vf_57: "c1-past-modals", vf_58: "c1-subjunctive", vf_59: "b1-past-perfect", vf_60: "c1-participle-clauses",
    vf_61: "b2-gerunds-infinitives", vf_62: "b2-conditionals-2-3", vf_63: "c1-subjunctive", vf_64: "a2-present-perfect-intro", vf_65: "b2-gerunds-infinitives",
    vf_66: "b2-advanced-passives", vf_67: "c1-participle-clauses", vf_68: "c1-past-modals", vf_69: "b2-wishes-regrets", vf_70: "a2-past-simple"
  },
  sp: {
    1: "a1-present-simple", 2: "a1-to-be", 3: "a1-there-is-are", 5: "a2-past-simple", 6: "a2-comparatives", 7: "a2-should-must-have-to",
    8: "a2-countable-uncountable", 9: "b1-conditionals-0-1", 10: "a2-present-perfect-intro", 11: "b1-relative-clauses", 12: "b1-relative-clauses"
  }
};

/* Okuma Labı – Gramer gözlüğü. Öncelik sırası önemlidir: önce gelen kural, çakışan yerde kazanır. */
const GRAMMAR_DETECT = [
  { re: String.raw`(?:^|(?<=[.!?]\s))(?:Never|Rarely|Seldom|Hardly|Scarcely|No sooner|Not only|Only after[^,]*|Only when[^,]*|Only then|Under no circumstances|In no way|Little|Not until[^,]*|At no time|On no account)\s*,?\s+(?:had|has|have|did|does|do|is|are|was|were|can|could|should|would|will|must|might)\b`, konu: "c1-inversion", ad: "Devrik yapı", renk: "rose" },
  { re: String.raw`\b(?:It|it)\s+(?:is|was)\s+(?:not\s+until\s+)?[^.,;]{1,50}?\s+(?:that|who)\b`, konu: "c1-cleft-sentences", ad: "Vurgu (cleft)", renk: "rose", sart: String.raw`^It\s+(is|was)\s+(not\s+until|[^.]*?\b(the|a|an|this|his|her|their|only)\b)` },
  { re: String.raw`(?:^|(?<=[.!?]\s))What\s+[^.?]{3,60}?\s+(?:is|was)\b`, konu: "c1-cleft-sentences", ad: "Vurgu (cleft)", renk: "rose" },
  { re: String.raw`\b(?:suggest|suggests|suggested|recommend|recommends|recommended|insist|insists|insisted|demand|demands|demanded|propose|proposes|proposed|urge|urged|request|requested)\s+that\b|\b(?:essential|vital|imperative|crucial)\s+that\b`, konu: "c1-subjunctive", ad: "Subjunctive / öneri kalıbı", renk: "rose" },
  { re: String.raw`\b(?:must|might|may|could|couldn't|can't|cannot|should|shouldn't|needn't|ought to)\s+(?:not\s+)?have\s+(?:been\s+)?(?:{V3}|{VING})\b`, konu: "c1-past-modals", ad: "Modal + have V3", renk: "purple" },
  { re: String.raw`\b(?:would|'d)\s+(?:not\s+)?have\s+{V3}\b`, konu: "b2-conditionals-2-3", ad: "Koşul (would have V3)", renk: "purple" },
  { re: String.raw`\b(?:If|if|Unless|unless)\b`, konu: "b1-conditionals-0-1", ad: "Koşul", renk: "purple", tipSec: true },
  { re: String.raw`\b(?:wish|wishes|wished|If only|if only|would rather)\b`, konu: "b2-wishes-regrets", ad: "Dilek / pişmanlık", renk: "purple" },
  { re: String.raw`\b(?:is|are|was|were)\s+(?:said|believed|thought|reported|claimed|expected|known|considered|estimated|alleged|assumed)\s+to\b|\b[Ii]t\s+is\s+(?:said|believed|thought|reported|claimed|expected|known|considered|estimated|argued|assumed|widely\s+\w+)\s+that\b`, konu: "b2-advanced-passives", ad: "Kişisiz edilgen", renk: "amber" },
  { re: String.raw`\b(?:will|'ll)\s+(?:not\s+)?have\s+(?:been\s+)?(?:{V3}|{VING})\b|\b(?:will|'ll)\s+(?:not\s+)?be\s+{VING}\b`, konu: "b2-future-cont-perfect", ad: "Future Perfect / Continuous", renk: "sky" },
  { re: String.raw`\b(?:had|'d)\s+(?:not\s+)?been\s+{VING}\b`, konu: "b1-past-perfect", ad: "Past Perfect Continuous", renk: "sky" },
  { re: String.raw`\b(?:have|has|'ve)\s+(?:not\s+)?been\s+{VING}\b`, konu: "b1-ppc", ad: "Present Perfect Continuous", renk: "sky" },
  { re: String.raw`\b(?:am|is|are|was|were|be|been|being)\s+(?:not\s+)?(?:\w+ly\s+)?(?:{V3})\b(?:\s+by\b)?`, konu: "b1-passive-intro", ad: "Edilgen (be + V3)", renk: "amber", disla: String.raw`\b(?:is|are|was|were|be|been|being)\s+(?:not\s+)?(?:interested|tired|bored|excited|worried|surprised|pleased|married|located|based|used|supposed|able|born|concerned|involved|related|known for|aware)\b` },
  { re: String.raw`\b(?:had|'d)\s+(?:not\s+|already\s+|just\s+|never\s+|also\s+|previously\s+)?{V3}\b`, konu: "b1-past-perfect", ad: "Past Perfect", renk: "sky" },
  { re: String.raw`\b(?:have|has|'ve)\s+(?:not\s+|already\s+|just\s+|never\s+|ever\s+|also\s+|recently\s+|long\s+|increasingly\s+)?{V3}\b`, konu: "a2-present-perfect-intro", ad: "Present Perfect", renk: "sky", disla: String.raw`\b(?:have|has)\s+(?:to)\b` },
  { re: String.raw`\b(?:must|can't|cannot)\s+be\b`, konu: "b1-modals-deduction", ad: "Çıkarım (must / can't be)", renk: "purple" },
  { re: String.raw`\b(?:used to)\s+\w+`, konu: "b1-used-to-would", ad: "used to", renk: "sky" },
  { re: String.raw`(?:^|(?<=[.!?]\s))(?:Having\s+(?:been\s+)?{V3}|Not\s+{VING}|(?:Faced|Based|Built|Written|Compared|Given|Located|Driven|Inspired|Designed|Founded|Published|Known|Seen)\b)[^,.]{0,80},`, konu: "c1-participle-clauses", ad: "Participle clause", renk: "rose" },
  { re: String.raw`\b(?:of|in|on|at|for|about|by|without|before|after|instead of|despite|from|towards?|against|besides)\s+{VING}\b(?<!\b(?:thing|nothing|something|anything|everything|during|king|spring|ring|string|bring|sing|wing|ceiling|morning|evening|building|meeting|feeling|ending|beginning|clothing|wedding|pudding|darling|sibling|ceiling|earring|duckling|seating|housing|funding|training|setting|painting|recording|reading|writing|saying|offspring|swing|sling|sting|cling|fling|bring))`, konu: "b2-gerunds-infinitives", ad: "Edat + V-ing", renk: "cyan" },
  { re: String.raw`(?:^|(?<=[.!?]\s))(?!(?:During|Morning|Evening|Nothing|Something|Everything|Anything|Building|King|Spring|Bring|Sing|Being)\b)[A-Z][a-z]{2,}ing\b(?=\s+(?:a|an|the|\w+s?)\b)(?![^.]{0,80},)`, konu: "b2-gerunds-infinitives", ad: "Özne olarak V-ing (gerund)", renk: "cyan" },
  { re: String.raw`\b(?:who|whom|whose|which)\b`, konu: "b1-relative-clauses", ad: "İlgi cümlesi", renk: "emerald", disla: String.raw`(?:^|[.!?]\s+)(?:Who|Which|Whose|Whom)\b[^.]*\?` },
  { re: String.raw`\b(?:however|However|therefore|Therefore|nevertheless|Nevertheless|nonetheless|Nonetheless|moreover|Moreover|furthermore|Furthermore|In addition|in addition|consequently|Consequently|As a result|as a result|thus|Thus|hence|Hence|despite|Despite|in spite of|In spite of|although|Although|even though|Even though|whereas|Whereas|due to|Due to|owing to|Owing to|in order to|so that|On the other hand|on the other hand|Because|because|Unless|In contrast|in contrast|Similarly|similarly|Instead|instead)\b`, konu: "b2-linkers", ad: "Bağlayıcı", renk: "emerald" },
  { re: String.raw`\b(?:may|might|could)\s+(?:be|have|help|explain|indicate|suggest|contribute|play|lead|cause|reduce|increase|affect|result|become|provide|offer|reflect)\b|\b(?:suggest|suggests|indicate|indicates|appear|appears|seem|seems|tend|tends)\s+(?:that|to)\b|\b(?:likely|possibly|probably|arguably|presumably|potentially|to some extent|relatively)\b`, konu: "c1-hedging", ad: "Hedging (ihtiyatlı dil)", renk: "cyan" },
  { re: String.raw`\b(?:whether|the fact that|The fact that)\b`, konu: "b2-noun-clauses", ad: "İsim cümleciği", renk: "emerald" },
  { re: String.raw`\b(?:both|either|neither|none)\b`, konu: "b1-quantifiers", ad: "Niceleyici", renk: "emerald" }
];
