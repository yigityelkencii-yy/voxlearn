/* VoxLearn - zenginleştirilmiş kelime verisi (anlam anlam ayrılmış Türkçe açıklamalar).
 * words.js'ten SONRA yüklenir; buradaki alanlar allWords içindeki aynı kelimenin alanlarının üzerine yazılır.
 * Alanlar:
 *   tr        kısa ana karşılık (quiz/eşleştirme/ters kartta görünür; en sık anlam önce)
 *   ex, exTr  ana örnek cümle ve Türkçe çevirisi
 *   cloze_sent / cloze_word  boşluk doldurma (ex ile uyumlu olmalı)
 *   senses    [{ p: tür, tr: karşılık, d: Türkçe açıklama, ex: örnek, exTr: çeviri }]
 *   note      Türkçe konuşanlar için kullanım notu / sık yapılan hata
 */
const WORD_ENRICH = {
  "still": {
    tr: "hâlâ; yine de; hareketsiz, durgun",
    ex: "It's almost midnight, and she is still working on her essay.",
    exTr: "Neredeyse gece yarısı ve o hâlâ kompozisyonu üzerinde çalışıyor.",
    cloze_sent: "It's almost midnight, and she is ___ working on her essay.", cloze_word: "still",
    senses: [
      { p: "adverb", tr: "hâlâ", d: "Bir durumun beklenenden uzun sürdüğünü, henüz bitmediğini anlatır.", ex: "Are you still living in Ankara?", exTr: "Hâlâ Ankara'da mı yaşıyorsun?" },
      { p: "adverb", tr: "yine de, buna rağmen", d: "Önceki bilgiye rağmen bir şeyin doğru olduğunu belirtir; 'however' anlamına yakındır.", ex: "The test was hard. Still, most students passed.", exTr: "Sınav zordu. Yine de öğrencilerin çoğu geçti." },
      { p: "adjective", tr: "hareketsiz, kıpırtısız; durgun", d: "Hiç kımıldamayan ya da sessiz, sakin olan şeyler için.", ex: "Please stand still while I take the photo.", exTr: "Fotoğrafı çekerken lütfen kıpırdamadan dur." }
    ],
    note: "'Still' (hâlâ) olumlu cümlede, 'yet' (henüz) olumsuz cümlede kullanılır: I'm still waiting. / He hasn't arrived yet. 'Still water' ise 'gazsız su' demektir."
  },
  "miss": {
    tr: "özlemek; kaçırmak; ıskalamak",
    ex: "I really miss my grandmother's cooking since I moved to Istanbul.",
    exTr: "İstanbul'a taşındığımdan beri anneannemin yemeklerini gerçekten özlüyorum.",
    cloze_sent: "I really ___ my grandmother's cooking since I moved to Istanbul.", cloze_word: "miss",
    senses: [
      { p: "verb", tr: "özlemek", d: "Yanında olmayan birini ya da bir şeyi yokluğunda arayıp hasretini çekmek.", ex: "We miss you a lot. Come and visit soon!", exTr: "Seni çok özlüyoruz. Yakında ziyarete gel!" },
      { p: "verb", tr: "kaçırmak (otobüs, fırsat, ders)", d: "Zamanında yetişememek ya da bir şeyi değerlendirememek.", ex: "If we don't leave now, we'll miss the last bus.", exTr: "Şimdi çıkmazsak son otobüsü kaçıracağız." },
      { p: "verb", tr: "ıskalamak, tutturamamak", d: "Hedefe isabet ettirememek.", ex: "He kicked the ball but missed the goal.", exTr: "Topa vurdu ama kaleyi ıskaladı." },
      { p: "verb", tr: "gözden kaçırmak, fark etmemek", d: "Bir şeyi görmemek ya da duymamak.", ex: "The café is on the corner — you can't miss it.", exTr: "Kafe köşede, gözden kaçırman imkânsız." }
    ],
    note: "Türkçede 'seni özledim' dersiniz; İngilizcede öznenin özlediği kişi nesnedir: I miss you (ben seni özlüyorum). 'You miss me' demek 'sen beni özlüyorsun' olur. 'Miss out (on)' ise 'bir fırsatı kaçırmak' demektir."
  },
  "run": {
    tr: "koşmak; yönetmek, işletmek; çalışmak (makine)",
    ex: "My aunt runs a small bakery in the city centre.",
    exTr: "Teyzem şehir merkezinde küçük bir fırın işletiyor.",
    cloze_sent: "My aunt ___ a small bakery in the city centre.", cloze_word: "runs",
    senses: [
      { p: "verb", tr: "koşmak", d: "Yürümekten daha hızlı hareket etmek.", ex: "She runs five kilometres every morning.", exTr: "Her sabah beş kilometre koşuyor." },
      { p: "verb", tr: "yönetmek, işletmek", d: "Bir işletmeyi, kurumu ya da projeyi idare etmek.", ex: "Who runs this company?", exTr: "Bu şirketi kim yönetiyor?" },
      { p: "verb", tr: "çalışmak, işlemek (makine, program)", d: "Bir aletin ya da yazılımın çalışır durumda olması.", ex: "The engine is still running.", exTr: "Motor hâlâ çalışıyor." },
      { p: "verb", tr: "(otobüs, tren) sefer yapmak, işlemek", d: "Toplu taşımanın belli aralıklarla gidip gelmesi.", ex: "The buses run every ten minutes.", exTr: "Otobüsler on dakikada bir geçiyor." },
      { p: "noun", tr: "koşu", d: "Koşma eylemi.", ex: "I go for a run before work.", exTr: "İşten önce koşuya çıkarım." }
    ],
    note: "Düzensiz fiildir: run – ran – run. 'Run out of' = bir şeyin tükenmesi (We ran out of milk = Sütümüz bitti)."
  },
  "matter": {
    tr: "önemli olmak; mesele, konu; madde",
    ex: "It doesn't matter if you make mistakes — that's how you learn.",
    exTr: "Hata yapman önemli değil; insan böyle öğrenir.",
    cloze_sent: "It doesn't ___ if you make mistakes — that's how you learn.", cloze_word: "matter",
    senses: [
      { p: "verb", tr: "önemli olmak", d: "Bir şeyin önem taşıması, sonucu etkilemesi. Genellikle 'it matters / it doesn't matter' kalıbıyla kullanılır.", ex: "Your opinion matters to us.", exTr: "Senin fikrin bizim için önemli." },
      { p: "noun", tr: "mesele, konu, iş", d: "Ele alınan, konuşulan durum.", ex: "This is a serious matter.", exTr: "Bu ciddi bir mesele." },
      { p: "noun", tr: "madde (fizik)", d: "Yer kaplayan ve kütlesi olan her şey.", ex: "Everything around us is made of matter.", exTr: "Etrafımızdaki her şey maddeden oluşur." }
    ],
    note: "'What's the matter?' = 'Ne oldu? / Sorun ne?' 'No matter what/how...' = 'Ne olursa olsun / Nasıl olursa olsun...' (No matter what happens, I'll help you)."
  },
  "address": {
    tr: "adres; ele almak; hitap etmek; konuşma",
    ex: "Please write your full address on the form.",
    exTr: "Lütfen forma tam adresini yaz.",
    cloze_sent: "Please write your full ___ on the form.", cloze_word: "address",
    senses: [
      { p: "noun", tr: "adres", d: "Birinin yaşadığı ya da çalıştığı yerin bilgisi; e-posta adresi için de kullanılır.", ex: "What's your email address?", exTr: "E-posta adresin ne?" },
      { p: "verb", tr: "(sorunu) ele almak, çözmeye çalışmak", d: "Bir sorunla ilgilenip onun için önlem almak. Akademik metinlerde çok sık geçer.", ex: "The government must address the housing crisis.", exTr: "Hükümet konut krizini ele almalı." },
      { p: "verb", tr: "hitap etmek, seslenmek", d: "Bir kişiye ya da topluluğa doğrudan konuşmak.", ex: "The president addressed the nation on TV.", exTr: "Cumhurbaşkanı televizyonda ulusa seslendi." },
      { p: "noun", tr: "resmi konuşma, hitabe", d: "Bir topluluğa yapılan resmi konuşma.", ex: "She gave the opening address at the conference.", exTr: "Konferansın açılış konuşmasını o yaptı." }
    ],
    note: "Akademik İngilizcede 'address an issue/problem/question' kalıbı 'bir meseleyi ele almak' anlamında çok sık kullanılır; 'adres vermek' ile karıştırmayın."
  },
  "present": {
    tr: "hediye; sunmak; mevcut, şimdiki",
    ex: "She gave me a beautiful present for my birthday.",
    exTr: "Doğum günüm için bana çok güzel bir hediye verdi.",
    cloze_sent: "She gave me a beautiful ___ for my birthday.", cloze_word: "present",
    senses: [
      { p: "noun", tr: "hediye", d: "Birine verilen armağan; 'gift' ile eş anlamlı.", ex: "This present is for you.", exTr: "Bu hediye senin için." },
      { p: "verb", tr: "sunmak, takdim etmek", d: "Bir bilgiyi, projeyi ya da ödülü bir topluluğa göstermek, vermek. Vurgu ikinci hecededir: pre-SENT.", ex: "Each group will present its project on Friday.", exTr: "Her grup projesini cuma günü sunacak." },
      { p: "adjective", tr: "mevcut, orada bulunan", d: "Bir yerde hazır bulunan (isimden sonra gelir).", ex: "Twenty students were present at the meeting.", exTr: "Toplantıda yirmi öğrenci hazır bulundu." },
      { p: "adjective", tr: "şimdiki, şu anki", d: "Şu andaki (isimden önce gelir).", ex: "In the present situation, we can't travel.", exTr: "Şu anki durumda seyahat edemeyiz." },
      { p: "noun", tr: "şimdiki zaman, şimdi", d: "Geçmiş ile gelecek arasındaki an.", ex: "Try to live in the present.", exTr: "Anı yaşamaya çalış." }
    ],
    note: "Telaffuz anlamı değiştirir: isim/sıfat 'PRE-sent', fiil 'pre-SENT'. 'At present' = şu anda."
  },
  "fine": {
    tr: "iyi, sorunsuz; ince; para cezası",
    ex: "\"How are you?\" — \"I'm fine, thanks.\"",
    exTr: "\"Nasılsın?\" — \"İyiyim, teşekkürler.\"",
    cloze_sent: "\"How are you?\" — \"I'm ___, thanks.\"", cloze_word: "fine",
    senses: [
      { p: "adjective", tr: "iyi, sorunsuz, olur", d: "Durumun kabul edilebilir ya da iyi olduğunu belirtir.", ex: "Is Monday OK for you? — Yes, that's fine.", exTr: "Pazartesi senin için uygun mu? — Evet, olur." },
      { p: "adjective", tr: "ince, ufak taneli", d: "Çok ince ya da küçük parçalardan oluşan.", ex: "The beach has fine white sand.", exTr: "Plajın ince beyaz kumu var." },
      { p: "noun", tr: "para cezası", d: "Kuralı çiğneyen kişinin ödemek zorunda olduğu para.", ex: "He had to pay a fine for parking illegally.", exTr: "Kuralsız park ettiği için para cezası ödemek zorunda kaldı." },
      { p: "verb", tr: "para cezası kesmek", d: "Birine para cezası vermek.", ex: "She was fined 500 lira for speeding.", exTr: "Hız yaptığı için 500 lira ceza yedi." }
    ],
    note: "'I'm fine' çoğu zaman sadece kibarlık yanıtıdır, 'çok iyiyim' kadar güçlü değildir. 'Fine art' = güzel sanatlar."
  },
  "book": {
    tr: "kitap; rezervasyon yapmak",
    ex: "We booked a table for four at the new fish restaurant.",
    exTr: "Yeni balık restoranında dört kişilik masa ayırttık.",
    cloze_sent: "We ___ a table for four at the new fish restaurant.", cloze_word: "booked",
    senses: [
      { p: "noun", tr: "kitap", d: "Ciltlenmiş sayfalardan oluşan yazılı eser.", ex: "I'm reading a book about the history of science.", exTr: "Bilim tarihi hakkında bir kitap okuyorum." },
      { p: "verb", tr: "rezervasyon yapmak, yer ayırtmak", d: "Otel, bilet, masa ya da randevu için önceden yer ayırtmak.", ex: "Have you booked your flight yet?", exTr: "Uçak biletini aldın mı / ayırttın mı?" }
    ],
    note: "'Fully booked' = tamamen dolu. 'Booking' = rezervasyon."
  },
  "case": {
    tr: "durum, vaka; dava; kutu, kılıf",
    ex: "In most cases, the illness goes away without treatment.",
    exTr: "Çoğu durumda hastalık tedavi olmadan geçer.",
    cloze_sent: "In most ___, the illness goes away without treatment.", cloze_word: "cases",
    senses: [
      { p: "noun", tr: "durum, örnek", d: "Belirli bir durum ya da örnek.", ex: "In that case, let's meet tomorrow.", exTr: "O durumda yarın buluşalım." },
      { p: "noun", tr: "vaka", d: "Bir hastalığın tek bir örneği ya da polisin incelediği olay.", ex: "There were 200 new cases of flu this week.", exTr: "Bu hafta 200 yeni grip vakası görüldü." },
      { p: "noun", tr: "dava", d: "Mahkemede görülen hukuki süreç.", ex: "The lawyer won the case.", exTr: "Avukat davayı kazandı." },
      { p: "noun", tr: "kutu, kılıf, çanta", d: "Bir şeyi korumak ya da taşımak için kap.", ex: "I need a new phone case.", exTr: "Yeni bir telefon kılıfına ihtiyacım var." }
    ],
    note: "'Just in case' = ne olur ne olmaz, her ihtimale karşı. 'In case of fire' = yangın durumunda."
  },
  "close": {
    tr: "kapatmak; yakın; dikkatli",
    ex: "Could you close the window? It's getting cold.",
    exTr: "Pencereyi kapatabilir misin? Hava soğuyor.",
    cloze_sent: "Could you ___ the window? It's getting cold.", cloze_word: "close",
    senses: [
      { p: "verb", tr: "kapatmak; kapanmak", d: "Açık olanı kapatmak ya da bir yerin çalışmayı bırakması. Telaffuz: /kloʊz/.", ex: "The shops close at 9 p.m.", exTr: "Mağazalar akşam 9'da kapanıyor." },
      { p: "adjective", tr: "yakın", d: "Mesafe, zaman ya da ilişki bakımından yakın. Telaffuz: /kloʊs/.", ex: "She is my closest friend.", exTr: "O benim en yakın arkadaşım." },
      { p: "adjective", tr: "dikkatli, yakından", d: "Ayrıntılara dikkat eden.", ex: "Pay close attention to the instructions.", exTr: "Talimatlara çok dikkat edin." },
      { p: "adjective", tr: "çekişmeli, başa baş", d: "Sonucu birbirine çok yakın olan yarış ya da seçim.", ex: "It was a very close match.", exTr: "Çok çekişmeli bir maçtı." }
    ],
    note: "Fiil 'close' sonu /z/ sesiyle, sıfat 'close' /s/ sesiyle okunur. 'Close to' = -e yakın (close to the station)."
  },
  "content": {
    tr: "içerik; memnun, halinden hoşnut",
    ex: "The content of the course is very useful for the exam.",
    exTr: "Dersin içeriği sınav için çok faydalı.",
    cloze_sent: "The ___ of the course is very useful for the exam.", cloze_word: "content",
    senses: [
      { p: "noun", tr: "içerik", d: "Bir kitabın, sitenin, dersin içinde olan bilgi; vurgu ilk hecede: CON-tent.", ex: "She creates content for social media.", exTr: "Sosyal medya için içerik üretiyor." },
      { p: "noun", tr: "(bir şeyin) içindekiler, oranı", d: "Bir maddenin içindeki miktar ya da bir kabın içindekiler (genelde çoğul: contents).", ex: "This drink has a high sugar content.", exTr: "Bu içeceğin şeker oranı yüksek." },
      { p: "adjective", tr: "memnun, halinden hoşnut", d: "Sahip olduğuyla yetinen, mutlu; vurgu ikinci hecede: con-TENT.", ex: "He was content with a simple life.", exTr: "Sade bir hayatla yetiniyordu / memnundu." }
    ],
    note: "İsim 'CON-tent' (içerik), sıfat 'con-TENT' (memnun). 'Table of contents' = içindekiler sayfası."
  },
  "light": {
    tr: "ışık; hafif; açık (renk); yakmak",
    ex: "This laptop is light enough to carry all day.",
    exTr: "Bu dizüstü bilgisayar bütün gün taşınacak kadar hafif.",
    cloze_sent: "This laptop is ___ enough to carry all day.", cloze_word: "light",
    senses: [
      { p: "noun", tr: "ışık; lamba", d: "Görmemizi sağlayan aydınlık ya da onu veren lamba.", ex: "Can you turn on the light?", exTr: "Işığı açabilir misin?" },
      { p: "adjective", tr: "hafif", d: "Ağırlığı az olan; yemek için 'az ve hafif' anlamında.", ex: "I just want a light lunch.", exTr: "Sadece hafif bir öğle yemeği istiyorum." },
      { p: "adjective", tr: "açık (renk); aydınlık", d: "Koyu olmayan renk ya da güneş alan yer.", ex: "She is wearing a light blue dress.", exTr: "Açık mavi bir elbise giyiyor." },
      { p: "verb", tr: "yakmak (ateş, mum)", d: "Bir şeyin yanmasını sağlamak. Geçmiş zamanı: lit.", ex: "He lit a candle.", exTr: "Bir mum yaktı." }
    ],
    note: "'Traffic lights' = trafik ışıkları. 'Light' sıfat olarak hem 'hafif' hem 'açık renkli' demektir; bağlama göre çevirin."
  },
  "match": {
    tr: "maç; kibrit; uymak, eşleşmek",
    ex: "Do these shoes match my dress?",
    exTr: "Bu ayakkabılar elbiseme uyuyor mu?",
    cloze_sent: "Do these shoes ___ my dress?", cloze_word: "match",
    senses: [
      { p: "noun", tr: "maç, karşılaşma", d: "İki takım ya da oyuncu arasındaki spor yarışması.", ex: "We watched the football match on TV.", exTr: "Futbol maçını televizyonda izledik." },
      { p: "noun", tr: "kibrit", d: "Sürtülünce yanan küçük çubuk.", ex: "Be careful with matches.", exTr: "Kibritlerle dikkatli ol." },
      { p: "verb", tr: "uymak, yakışmak; eşleştirmek", d: "Renk, desen ya da özellik bakımından birbirine uygun olmak ya da uygun olanları birleştirmek.", ex: "Match the words with their definitions.", exTr: "Kelimeleri tanımlarıyla eşleştirin." },
      { p: "noun", tr: "denk, dengi; uygun eş", d: "Birine ya da bir şeye denk olan.", ex: "The curtains are a perfect match for the sofa.", exTr: "Perdeler koltukla mükemmel uyum içinde." }
    ],
    note: "Sınavlarda 'Match the following' = 'Aşağıdakileri eşleştirin' yönergesi çok sık çıkar."
  },
  "mean": {
    tr: "anlamına gelmek; kastetmek; kaba, cimri",
    ex: "What does this word mean in Turkish?",
    exTr: "Bu kelime Türkçede ne anlama geliyor?",
    cloze_sent: "What does this word ___ in Turkish?", cloze_word: "mean",
    senses: [
      { p: "verb", tr: "anlamına gelmek", d: "Bir kelimenin, işaretin ya da durumun anlamı olmak.", ex: "A red light means 'stop'.", exTr: "Kırmızı ışık 'dur' anlamına gelir." },
      { p: "verb", tr: "kastetmek, demek istemek", d: "Birinin söyledikleriyle anlatmak istediği şey.", ex: "Sorry, I didn't mean to hurt you.", exTr: "Özür dilerim, seni kırmak istemedim." },
      { p: "adjective", tr: "kaba, acımasız; cimri", d: "Başkalarına karşı nazik olmayan (İngiliz İngilizcesinde 'cimri' de demek).", ex: "Don't be mean to your little brother.", exTr: "Küçük kardeşine kaba davranma." },
      { p: "noun", tr: "ortalama (matematik)", d: "Sayıların toplamının sayı adedine bölümü.", ex: "The mean of 2, 4 and 6 is 4.", exTr: "2, 4 ve 6'nın ortalaması 4'tür." }
    ],
    note: "Düzensiz fiil: mean – meant – meant. 'Means' (isim, her zaman -s ile) = araç, yol: a means of transport (ulaşım aracı)."
  },
  "point": {
    tr: "nokta; puan; asıl mesele, amaç; işaret etmek",
    ex: "What's the point of studying if you don't sleep enough to remember it?",
    exTr: "Hatırlayacak kadar uyumuyorsan ders çalışmanın ne anlamı var?",
    cloze_sent: "What's the ___ of studying if you don't sleep enough to remember it?", cloze_word: "point",
    senses: [
      { p: "noun", tr: "asıl mesele, amaç, fayda", d: "Bir şeyi yapmanın sebebi ya da konuşmanın ana fikri.", ex: "I see your point, but I don't agree.", exTr: "Ne demek istediğini anlıyorum ama katılmıyorum." },
      { p: "noun", tr: "puan", d: "Oyunda ya da sınavda kazanılan sayı.", ex: "Our team won by three points.", exTr: "Takımımız üç sayı farkla kazandı." },
      { p: "noun", tr: "nokta; an; uç", d: "Belli bir yer, an ya da bir şeyin sivri ucu.", ex: "At that point, I decided to leave.", exTr: "O noktada ayrılmaya karar verdim." },
      { p: "verb", tr: "işaret etmek, göstermek", d: "Parmakla ya da bir nesneyle bir yönü göstermek.", ex: "She pointed at the map.", exTr: "Haritayı işaret etti." }
    ],
    note: "'Point out' = belirtmek, dikkat çekmek (akademik yazıda sık). Ondalık sayılarda virgül yerine 'point' okunur: 2.5 = two point five."
  },
  "right": {
    tr: "doğru; haklı; sağ; hak",
    ex: "Every child has the right to free education.",
    exTr: "Her çocuğun ücretsiz eğitim hakkı vardır.",
    cloze_sent: "Every child has the ___ to free education.", cloze_word: "right",
    senses: [
      { p: "adjective", tr: "doğru; haklı", d: "Yanlış olmayan ya da birinin fikrinin doğru olması.", ex: "You're right — the meeting is at three.", exTr: "Haklısın, toplantı saat üçte." },
      { p: "adjective / noun", tr: "sağ (yön)", d: "Sol'un karşıtı olan yön.", ex: "Turn right at the traffic lights.", exTr: "Trafik ışıklarından sağa dön." },
      { p: "noun", tr: "hak", d: "Yasal ya da ahlaki olarak sahip olunan yetki.", ex: "Women won the right to vote in 1934 in Turkey.", exTr: "Türkiye'de kadınlar 1934'te seçme hakkını kazandı." },
      { p: "adverb", tr: "tam, hemen", d: "'Tam orada / hemen şimdi' vurgusu.", ex: "I'll be right back.", exTr: "Hemen dönerim." }
    ],
    note: "'Right now' = hemen şimdi; 'right away' = derhal. 'Human rights' = insan hakları."
  },
  "set": {
    tr: "koymak, yerleştirmek; ayarlamak, belirlemek; takım, set",
    ex: "Don't forget to set your alarm for 6 a.m.",
    exTr: "Alarmını sabah 6'ya kurmayı unutma.",
    cloze_sent: "Don't forget to ___ your alarm for 6 a.m.", cloze_word: "set",
    senses: [
      { p: "verb", tr: "ayarlamak, kurmak (saat, alarm)", d: "Bir aleti belli bir duruma getirmek.", ex: "I set the oven to 180 degrees.", exTr: "Fırını 180 dereceye ayarladım." },
      { p: "verb", tr: "belirlemek, koymak (hedef, kural, tarih)", d: "Bir hedef, kural, standart ya da tarih saptamak.", ex: "The teacher set a deadline for Friday.", exTr: "Öğretmen son teslim tarihini cuma olarak belirledi." },
      { p: "verb", tr: "koymak, yerleştirmek", d: "Bir şeyi dikkatlice bir yere bırakmak.", ex: "She set the plates on the table.", exTr: "Tabakları masaya koydu." },
      { p: "verb", tr: "(güneş) batmak", d: "Güneşin ufkun altına inmesi.", ex: "The sun sets earlier in winter.", exTr: "Kışın güneş daha erken batar." },
      { p: "noun", tr: "takım, set", d: "Birlikte kullanılan eşyalar ya da öğeler grubu.", ex: "a chess set", exTr: "bir satranç takımı" }
    ],
    note: "Düzensiz fiil, üç hali aynı: set – set – set. 'Set up' = kurmak (şirket, sistem); 'set off' = yola çıkmak."
  },
  "state": {
    tr: "durum; devlet; eyalet; belirtmek",
    ex: "The report states that air pollution has increased by 20%.",
    exTr: "Rapor, hava kirliliğinin %20 arttığını belirtiyor.",
    cloze_sent: "The report ___ that air pollution has increased by 20%.", cloze_word: "states",
    senses: [
      { p: "noun", tr: "durum, hal", d: "Bir şeyin ya da kişinin belirli bir andaki hali.", ex: "The house was in a terrible state.", exTr: "Ev berbat bir haldeydi." },
      { p: "noun", tr: "devlet", d: "Kendi hükümeti olan siyasi ülke ya da hükümetin kendisi.", ex: "State schools are free.", exTr: "Devlet okulları ücretsizdir." },
      { p: "noun", tr: "eyalet", d: "ABD gibi federal ülkelerin bölümleri.", ex: "Texas is a large state.", exTr: "Teksas büyük bir eyalettir." },
      { p: "verb", tr: "belirtmek, ifade etmek", d: "Bir bilgiyi resmi ve açık biçimde söylemek ya da yazmak. Akademik dilde sık.", ex: "Please state your name and age.", exTr: "Lütfen adınızı ve yaşınızı belirtin." }
    ],
    note: "'Statement' = açıklama, ifade. 'State of the art' = en son teknoloji ürünü."
  },
  "subject": {
    tr: "konu; ders; özne",
    ex: "My favourite subject at school was biology.",
    exTr: "Okulda en sevdiğim ders biyolojiydi.",
    cloze_sent: "My favourite ___ at school was biology.", cloze_word: "subject",
    senses: [
      { p: "noun", tr: "ders", d: "Okulda okutulan alan.", ex: "Maths is a compulsory subject.", exTr: "Matematik zorunlu bir derstir." },
      { p: "noun", tr: "konu", d: "Hakkında konuşulan ya da yazılan şey.", ex: "Let's change the subject.", exTr: "Konuyu değiştirelim." },
      { p: "noun", tr: "özne (dilbilgisi)", d: "Cümlede eylemi yapan öğe.", ex: "In 'Ali reads', 'Ali' is the subject.", exTr: "'Ali okur' cümlesinde 'Ali' öznedir." },
      { p: "adjective", tr: "-e tabi, maruz", d: "'Subject to' kalıbıyla: bir şeye bağlı ya da açık olmak.", ex: "Prices are subject to change.", exTr: "Fiyatlar değişebilir / değişikliğe tabidir." },
      { p: "noun", tr: "denek, katılımcı", d: "Bir deneye katılan kişi.", ex: "The subjects were divided into two groups.", exTr: "Denekler iki gruba ayrıldı." }
    ],
    note: "Bilimsel makalelerde 'subjects' = deneyin katılımcıları. 'Subject to' kalıbı sözleşme ve resmi metinlerde çok sık geçer."
  },
  "well": {
    tr: "iyi (şekilde); sağlıklı; şey...; kuyu",
    ex: "She speaks English very well because she reads every day.",
    exTr: "Her gün okuduğu için İngilizceyi çok iyi konuşuyor.",
    cloze_sent: "She speaks English very ___ because she reads every day.", cloze_word: "well",
    senses: [
      { p: "adverb", tr: "iyi (bir şekilde)", d: "Bir eylemin nasıl yapıldığını anlatır; 'good' sıfatının zarf halidir.", ex: "He did well in the exam.", exTr: "Sınavda iyi iş çıkardı." },
      { p: "adjective", tr: "sağlıklı, iyi", d: "Hasta olmayan.", ex: "I don't feel well today.", exTr: "Bugün kendimi iyi hissetmiyorum." },
      { p: "exclamation", tr: "şey..., peki, eee", d: "Konuşurken düşünmek ya da konuyu değiştirmek için.", ex: "Well, I'm not sure.", exTr: "Şey, emin değilim." },
      { p: "noun", tr: "kuyu", d: "Su ya da petrol çıkarmak için kazılan derin çukur.", ex: "They get water from a well.", exTr: "Suyu bir kuyudan alıyorlar." }
    ],
    note: "Sık hata: 'She speaks good English' doğru, 'She speaks English good' yanlış; fiili nitelerken 'well' kullanılır. 'As well' = de/da (I'm coming as well)."
  },
  "record": {
    tr: "kaydetmek; kayıt; rekor",
    ex: "The lecture was recorded so that students could watch it again.",
    exTr: "Ders, öğrenciler tekrar izleyebilsin diye kaydedildi.",
    cloze_sent: "The lecture was ___ so that students could watch it again.", cloze_word: "recorded",
    senses: [
      { p: "verb", tr: "kaydetmek (ses, görüntü, bilgi)", d: "Bir şeyi daha sonra kullanmak için kaydetmek; vurgu ikinci hecede: re-CORD.", ex: "Scientists recorded the temperature every hour.", exTr: "Bilim insanları sıcaklığı her saat kaydetti." },
      { p: "noun", tr: "kayıt, belge", d: "Yazılı ya da elektronik bilgi; vurgu ilk hecede: REC-ord.", ex: "Hospitals keep records of all patients.", exTr: "Hastaneler tüm hastaların kaydını tutar." },
      { p: "noun", tr: "rekor", d: "Bir alanda ulaşılan en yüksek ya da en iyi sonuç.", ex: "She broke the world record.", exTr: "Dünya rekorunu kırdı." },
      { p: "noun", tr: "plak", d: "Müzik kaydedilen eski tip disk.", ex: "My dad collects old records.", exTr: "Babam eski plak biriktiriyor." }
    ],
    note: "İsim 'REC-ord', fiil 're-CORD' diye vurgulanır. 'Criminal record' = sabıka kaydı."
  },
  "object": {
    tr: "nesne, cisim; amaç; itiraz etmek",
    ex: "Many residents objected to the plan to build a new airport.",
    exTr: "Pek çok sakin yeni havalimanı yapılması planına itiraz etti.",
    cloze_sent: "Many residents ___ to the plan to build a new airport.", cloze_word: "objected",
    senses: [
      { p: "noun", tr: "nesne, cisim, eşya", d: "Görülüp dokunulabilen, canlı olmayan şey; vurgu ilk hecede: OB-ject.", ex: "There was a strange object in the sky.", exTr: "Gökyüzünde garip bir cisim vardı." },
      { p: "noun", tr: "amaç, hedef", d: "Bir eylemin amacı.", ex: "The object of the game is to score points.", exTr: "Oyunun amacı puan toplamaktır." },
      { p: "noun", tr: "nesne (dilbilgisi)", d: "Cümlede eylemden etkilenen öğe.", ex: "In 'I love books', 'books' is the object.", exTr: "'Kitapları severim' cümlesinde 'kitapları' nesnedir." },
      { p: "verb", tr: "itiraz etmek, karşı çıkmak", d: "Bir şeye karşı olduğunu söylemek; 'object to + isim/-ing' kalıbıyla; vurgu ikinci hecede: ob-JECT.", ex: "I object to working on Sundays.", exTr: "Pazar günleri çalışmaya itiraz ediyorum." }
    ],
    note: "'Object to' sonra fiil gelirse -ing alır: object to paying (ödemeye itiraz etmek), 'object to pay' yanlıştır."
  },
  "fair": {
    tr: "adil; makul; fuar; açık renk (ten, saç)",
    ex: "It isn't fair that some students get more time in the exam.",
    exTr: "Bazı öğrencilerin sınavda daha fazla süre alması adil değil.",
    cloze_sent: "It isn't ___ that some students get more time in the exam.", cloze_word: "fair",
    senses: [
      { p: "adjective", tr: "adil, hakkaniyetli", d: "Herkese eşit ve doğru davranan.", ex: "Everyone deserves a fair trial.", exTr: "Herkes adil yargılanmayı hak eder." },
      { p: "adjective", tr: "makul, oldukça (iyi/büyük)", d: "Ne çok iyi ne çok kötü; makul miktarda.", ex: "There's a fair chance of rain tomorrow.", exTr: "Yarın yağmur yağma ihtimali epey var." },
      { p: "noun", tr: "fuar; panayır", d: "Ürünlerin sergilendiği ya da eğlence için kurulan etkinlik.", ex: "We met at the book fair.", exTr: "Kitap fuarında tanıştık." },
      { p: "adjective", tr: "açık renk (ten, saç)", d: "Sarışın ya da beyaz tenli.", ex: "She has fair hair.", exTr: "Sarı saçlı." }
    ],
    note: "'Fair enough' = 'makul, peki, haklısın' anlamında konuşmada çok sık kullanılır."
  },
  "last": {
    tr: "son; geçen; sürmek, dayanmak",
    ex: "The meeting lasted three hours, but we didn't make a decision.",
    exTr: "Toplantı üç saat sürdü ama bir karar vermedik.",
    cloze_sent: "The meeting ___ three hours, but we didn't make a decision.", cloze_word: "lasted",
    senses: [
      { p: "determiner", tr: "son, en son", d: "Sıradaki en son olan.", ex: "This is the last question.", exTr: "Bu son soru." },
      { p: "determiner", tr: "geçen, önceki", d: "Zaman ifadelerinde bir önceki (last week, last year).", ex: "I saw her last week.", exTr: "Onu geçen hafta gördüm." },
      { p: "verb", tr: "sürmek; dayanmak, yetmek", d: "Belli bir süre devam etmek ya da kullanılabilir kalmak.", ex: "This battery lasts all day.", exTr: "Bu pil bütün gün dayanıyor." }
    ],
    note: "'Last week' (geçen hafta) ile 'the last week' (son bir hafta) farklıdır. 'At last' = sonunda, nihayet."
  },
  "kind": {
    tr: "nazik; tür, çeşit",
    ex: "It was very kind of you to help me with my homework.",
    exTr: "Ödevime yardım etmen çok naziklikti.",
    cloze_sent: "It was very ___ of you to help me with my homework.", cloze_word: "kind",
    senses: [
      { p: "adjective", tr: "nazik, iyi kalpli", d: "Başkalarına karşı yardımsever ve düşünceli.", ex: "She is kind to everyone.", exTr: "Herkese karşı naziktir." },
      { p: "noun", tr: "tür, çeşit", d: "Ortak özellikleri olan şeylerin grubu; 'type' ile eş anlamlı.", ex: "What kind of music do you like?", exTr: "Ne tür müzik seversin?" }
    ],
    note: "'Kind of' konuşmada 'biraz, bir bakıma' anlamına gelir: I'm kind of tired (Biraz yorgunum)."
  },
  "lie": {
    tr: "yalan söylemek; uzanmak, yatmak; yalan",
    ex: "He lied to his parents about where he was last night.",
    exTr: "Dün gece nerede olduğu konusunda ailesine yalan söyledi.",
    cloze_sent: "He ___ to his parents about where he was last night.", cloze_word: "lied",
    senses: [
      { p: "verb", tr: "yalan söylemek", d: "Doğru olmayan bir şeyi bilerek söylemek. Hali: lie – lied – lied.", ex: "Don't lie to me.", exTr: "Bana yalan söyleme." },
      { p: "noun", tr: "yalan", d: "Bilerek söylenen doğru olmayan söz.", ex: "That's a lie!", exTr: "Bu bir yalan!" },
      { p: "verb", tr: "uzanmak, yatmak; bulunmak", d: "Yatay pozisyonda durmak ya da bir yerde bulunmak. Hali: lie – lay – lain.", ex: "I lay on the beach all afternoon.", exTr: "Bütün öğleden sonra plajda uzandım." }
    ],
    note: "En çok karıştırılan fiillerden: lie (uzanmak) – lay – lain; lay (bir şeyi yatırmak, koymak) – laid – laid; lie (yalan söylemek) – lied – lied."
  },
  "long": {
    tr: "uzun; uzun süre; çok istemek",
    ex: "How long does it take to get to the airport?",
    exTr: "Havalimanına gitmek ne kadar sürer?",
    cloze_sent: "How ___ does it take to get to the airport?", cloze_word: "long",
    senses: [
      { p: "adjective", tr: "uzun", d: "Boyu ya da süresi fazla olan.", ex: "She has long dark hair.", exTr: "Uzun koyu saçları var." },
      { p: "adverb", tr: "uzun süre", d: "Uzun bir zaman boyunca.", ex: "Have you been waiting long?", exTr: "Uzun süredir mi bekliyorsun?" },
      { p: "verb", tr: "çok istemek, özlemek", d: "Bir şeyi büyük bir arzuyla istemek ('long for / long to').", ex: "She longed to see her family again.", exTr: "Ailesini yeniden görmeyi çok istiyordu." }
    ],
    note: "'As long as' = -dığı sürece (You can go as long as you're back by ten). 'No longer' = artık ... değil."
  },
  "order": {
    tr: "sipariş (etmek); emir, emretmek; sıra, düzen",
    ex: "Put the words in the correct order to make a sentence.",
    exTr: "Bir cümle oluşturmak için kelimeleri doğru sıraya koyun.",
    cloze_sent: "Put the words in the correct ___ to make a sentence.", cloze_word: "order",
    senses: [
      { p: "noun / verb", tr: "sipariş; sipariş vermek", d: "Restorandan ya da mağazadan bir şey istemek.", ex: "Are you ready to order?", exTr: "Sipariş vermeye hazır mısınız?" },
      { p: "noun", tr: "sıra, düzen", d: "Şeylerin dizilişi ya da düzenli olma hali.", ex: "The names are in alphabetical order.", exTr: "İsimler alfabetik sırada." },
      { p: "noun / verb", tr: "emir; emretmek", d: "Yetkili birinin yapılmasını istediği şey.", ex: "The officer ordered them to stop.", exTr: "Memur onlara durmalarını emretti." }
    ],
    note: "'In order to' = -mek için (amaç bildirir): She studies hard in order to win a scholarship. 'Out of order' = bozuk, çalışmıyor."
  },
  "play": {
    tr: "oynamak; çalmak (enstrüman); oyun (tiyatro)",
    ex: "My brother plays the guitar in a band.",
    exTr: "Erkek kardeşim bir grupta gitar çalıyor.",
    cloze_sent: "My brother ___ the guitar in a band.", cloze_word: "plays",
    senses: [
      { p: "verb", tr: "oynamak", d: "Oyun oynamak ya da spor yapmak.", ex: "The children are playing in the garden.", exTr: "Çocuklar bahçede oynuyor." },
      { p: "verb", tr: "çalmak (müzik, enstrüman)", d: "Bir enstrümandan ses çıkarmak ya da müzik açmak.", ex: "Can you play the piano?", exTr: "Piyano çalabilir misin?" },
      { p: "noun", tr: "oyun, piyes", d: "Tiyatroda sahnelenen eser.", ex: "We saw a play by Shakespeare.", exTr: "Shakespeare'in bir oyununu izledik." },
      { p: "verb", tr: "rol oynamak; (bir rol) üstlenmek", d: "Bir karakteri canlandırmak ya da bir süreçte etkisi olmak.", ex: "Sleep plays an important role in memory.", exTr: "Uyku hafızada önemli bir rol oynar." }
    ],
    note: "Enstrümanlardan önce 'the' kullanılır (play the violin), sporlardan önce kullanılmaz (play football)."
  },
  "spring": {
    tr: "ilkbahar; yay; kaynak (su); sıçramak",
    ex: "The trees start to grow new leaves in spring.",
    exTr: "Ağaçlar ilkbaharda yeni yapraklar çıkarmaya başlar.",
    cloze_sent: "The trees start to grow new leaves in ___.", cloze_word: "spring",
    senses: [
      { p: "noun", tr: "ilkbahar", d: "Kış ile yaz arasındaki mevsim.", ex: "Spring is my favourite season.", exTr: "İlkbahar en sevdiğim mevsim." },
      { p: "noun", tr: "yay (metal)", d: "Sıkıştırılıp bırakılınca eski haline dönen sarmal metal.", ex: "The bed has metal springs.", exTr: "Yatağın metal yayları var." },
      { p: "noun", tr: "kaynak, pınar", d: "Topraktan doğal olarak çıkan su.", ex: "We drank water from a mountain spring.", exTr: "Bir dağ pınarından su içtik." },
      { p: "verb", tr: "sıçramak, fırlamak", d: "Aniden ve hızla zıplamak. Hali: spring – sprang – sprung.", ex: "The cat sprang onto the table.", exTr: "Kedi masaya sıçradı." }
    ],
    note: "Mevsim isimlerinden önce 'in' kullanılır: in spring / in the spring."
  },
  "board": {
    tr: "tahta, pano; yönetim kurulu; (araca) binmek",
    ex: "Passengers can board the plane 30 minutes before departure.",
    exTr: "Yolcular kalkıştan 30 dakika önce uçağa binebilir.",
    cloze_sent: "Passengers can ___ the plane 30 minutes before departure.", cloze_word: "board",
    senses: [
      { p: "noun", tr: "tahta; pano", d: "Düz, ince ahşap parça ya da üzerine yazı yazılan levha.", ex: "The teacher wrote the answer on the board.", exTr: "Öğretmen cevabı tahtaya yazdı." },
      { p: "noun", tr: "yönetim kurulu", d: "Bir şirketi ya da kurumu yöneten kişiler grubu.", ex: "The board of directors meets every month.", exTr: "Yönetim kurulu her ay toplanır." },
      { p: "verb", tr: "(uçağa, gemiye, trene) binmek", d: "Bir taşıta binmek; havalimanlarında çok kullanılır.", ex: "Flight TK1 is now boarding at gate 12.", exTr: "TK1 sefer sayılı uçuş şu anda 12 numaralı kapıdan yolcu alıyor." }
    ],
    note: "'Boarding pass' = biniş kartı. 'On board' = (taşıtın) içinde, gemide/uçakta."
  },
  "charge": {
    tr: "ücret (almak); şarj etmek; suçlamak",
    ex: "Don't forget to charge your phone before the trip.",
    exTr: "Yolculuktan önce telefonunu şarj etmeyi unutma.",
    cloze_sent: "Don't forget to ___ your phone before the trip.", cloze_word: "charge",
    senses: [
      { p: "verb", tr: "(ücret) almak, istemek", d: "Bir hizmet ya da ürün için para istemek.", ex: "The hotel charges €20 for breakfast.", exTr: "Otel kahvaltı için 20 avro alıyor." },
      { p: "noun", tr: "ücret", d: "Bir hizmet için ödenen para.", ex: "Delivery is free of charge.", exTr: "Teslimat ücretsiz." },
      { p: "verb", tr: "şarj etmek", d: "Bir pile ya da cihaza elektrik doldurmak.", ex: "My laptop is charging.", exTr: "Bilgisayarım şarj oluyor." },
      { p: "verb / noun", tr: "suçlamak; suçlama", d: "Polisin ya da savcının birini resmi olarak bir suçla itham etmesi.", ex: "He was charged with theft.", exTr: "Hırsızlıkla suçlandı." },
      { p: "noun", tr: "sorumluluk", d: "'In charge of' kalıbıyla: bir şeyden sorumlu olmak.", ex: "Who is in charge of this project?", exTr: "Bu projeden kim sorumlu?" }
    ],
    note: "'In charge (of)' = sorumlu, yetkili. 'Free of charge' = ücretsiz."
  },
  "train": {
    tr: "tren; eğitmek; antrenman yapmak",
    ex: "Doctors have to train for many years before they can work alone.",
    exTr: "Doktorlar tek başlarına çalışabilmek için uzun yıllar eğitim almak zorunda.",
    cloze_sent: "Doctors have to ___ for many years before they can work alone.", cloze_word: "train",
    senses: [
      { p: "noun", tr: "tren", d: "Raylar üzerinde giden taşıt.", ex: "We took the train to Izmir.", exTr: "İzmir'e trenle gittik." },
      { p: "verb", tr: "eğitmek; eğitim almak", d: "Birine bir meslek ya da beceri öğretmek ya da öğrenmek.", ex: "The company trains all new staff.", exTr: "Şirket tüm yeni çalışanlarını eğitiyor." },
      { p: "verb", tr: "antrenman yapmak", d: "Bir spor için düzenli çalışmak.", ex: "She trains at the gym three times a week.", exTr: "Haftada üç kez spor salonunda antrenman yapıyor." }
    ],
    note: "'Training' = eğitim/antrenman (sayılamaz): a training course. 'Train of thought' = düşünce akışı."
  },
  "watch": {
    tr: "izlemek, seyretmek; dikkat etmek; kol saati",
    ex: "Watch your step — the floor is wet.",
    exTr: "Adımına dikkat et, yer ıslak.",
    cloze_sent: "___ your step — the floor is wet.", cloze_word: "Watch",
    senses: [
      { p: "verb", tr: "izlemek, seyretmek", d: "Hareket eden bir şeye bir süre dikkatle bakmak.", ex: "We watched a documentary about whales.", exTr: "Balinalar hakkında bir belgesel izledik." },
      { p: "verb", tr: "dikkat etmek, göz kulak olmak", d: "Bir şeye özen göstermek ya da bir şeyi korumak.", ex: "Can you watch my bag for a minute?", exTr: "Bir dakika çantama göz kulak olur musun?" },
      { p: "noun", tr: "kol saati", d: "Bileğe takılan saat.", ex: "My watch is five minutes fast.", exTr: "Saatim beş dakika ileri." }
    ],
    note: "watch / see / look farkı: watch = hareketli bir şeyi bir süre izlemek (TV, maç); see = görmek (istemsiz); look at = bir şeye bilerek bakmak."
  },
  "bear": {
    tr: "ayı; katlanmak, dayanmak; taşımak",
    ex: "I can't bear the noise from the construction site any longer.",
    exTr: "İnşaattan gelen gürültüye artık dayanamıyorum.",
    cloze_sent: "I can't ___ the noise from the construction site any longer.", cloze_word: "bear",
    senses: [
      { p: "noun", tr: "ayı", d: "Büyük, kalın kürklü yabani hayvan.", ex: "We saw a brown bear in the forest.", exTr: "Ormanda bir boz ayı gördük." },
      { p: "verb", tr: "katlanmak, dayanmak", d: "Zor ya da hoş olmayan bir şeye tahammül etmek; genelde 'can't bear' olumsuz kalıbıyla.", ex: "She can't bear waiting.", exTr: "Beklemeye tahammül edemez." },
      { p: "verb", tr: "taşımak; (sorumluluk) üstlenmek", d: "Resmi dilde: ağırlık, maliyet ya da sorumluluk taşımak.", ex: "The company will bear the cost.", exTr: "Masrafı şirket üstlenecek." }
    ],
    note: "Düzensiz fiil: bear – bore – borne. 'Bear in mind' = aklında bulundurmak. 'Born' (doğmuş) bu fiilden gelir."
  },
  "current": {
    tr: "şimdiki, güncel; akıntı; (elektrik) akımı",
    ex: "Our current research focuses on renewable energy.",
    exTr: "Mevcut araştırmamız yenilenebilir enerjiye odaklanıyor.",
    cloze_sent: "Our ___ research focuses on renewable energy.", cloze_word: "current",
    senses: [
      { p: "adjective", tr: "şimdiki, mevcut, güncel", d: "Şu anda var olan ya da geçerli olan.", ex: "What is your current address?", exTr: "Şu anki adresiniz nedir?" },
      { p: "noun", tr: "akıntı", d: "Suyun ya da havanın belirli bir yönde akışı.", ex: "The current was too strong to swim.", exTr: "Akıntı yüzmek için fazla güçlüydü." },
      { p: "noun", tr: "(elektrik) akımı", d: "Bir iletkenden geçen elektrik akışı.", ex: "An electric current flows through the wire.", exTr: "Telden bir elektrik akımı geçer." }
    ],
    note: "'Currently' = şu anda. Sık karıştırılır: 'actually' 'aslında' demektir, 'şu anda' değil; 'şu anda' için 'currently' kullanın."
  },
  "degree": {
    tr: "derece; (üniversite) diploma, lisans; ölçü, düzey",
    ex: "She has a degree in chemistry from Ankara University.",
    exTr: "Ankara Üniversitesi'nden kimya diploması var.",
    cloze_sent: "She has a ___ in chemistry from Ankara University.", cloze_word: "degree",
    senses: [
      { p: "noun", tr: "derece (sıcaklık, açı)", d: "Sıcaklık ya da açı ölçü birimi.", ex: "It's 30 degrees today.", exTr: "Bugün hava 30 derece." },
      { p: "noun", tr: "üniversite diploması", d: "Üniversiteden alınan lisans, yüksek lisans vb. derece.", ex: "He is doing a master's degree.", exTr: "Yüksek lisans yapıyor." },
      { p: "noun", tr: "ölçü, düzey, derece", d: "Bir şeyin ne kadar olduğu.", ex: "To some degree, I agree with you.", exTr: "Bir ölçüde sana katılıyorum." }
    ],
    note: "'Bachelor's degree' = lisans, 'master's degree' = yüksek lisans. 'To a certain degree' = belli bir ölçüde."
  },
  "figure": {
    tr: "rakam, sayı; şekil, figür; kişi; anlamak, sanmak",
    ex: "The latest figures show that unemployment has fallen.",
    exTr: "Son rakamlar işsizliğin düştüğünü gösteriyor.",
    cloze_sent: "The latest ___ show that unemployment has fallen.", cloze_word: "figures",
    senses: [
      { p: "noun", tr: "rakam, sayı, istatistik", d: "Resmi sayısal veri.", ex: "Sales figures are higher this year.", exTr: "Bu yıl satış rakamları daha yüksek." },
      { p: "noun", tr: "şekil, çizim", d: "Kitap ya da makaledeki numaralı görsel.", ex: "See Figure 3 for the results.", exTr: "Sonuçlar için Şekil 3'e bakın." },
      { p: "noun", tr: "kişi, şahsiyet; vücut hatları", d: "Önemli bir kişi ya da birinin vücut şekli.", ex: "Atatürk is a key figure in Turkish history.", exTr: "Atatürk Türk tarihinin kilit isimlerinden biridir." },
      { p: "verb", tr: "anlamak, çözmek (figure out); sanmak", d: "Düşünerek bir şeyi anlamak ya da bir sonuca varmak.", ex: "I can't figure out this problem.", exTr: "Bu problemi çözemiyorum." }
    ],
    note: "Akademik metinlerde 'Figure 1' = 'Şekil 1'. 'Figure out' gündelik dilde 'anlamak, çözmek' demektir."
  },
  "issue": {
    tr: "mesele, sorun; sayı (dergi); yayımlamak, vermek",
    ex: "Climate change is one of the most serious issues of our time.",
    exTr: "İklim değişikliği çağımızın en ciddi meselelerinden biridir.",
    cloze_sent: "Climate change is one of the most serious ___ of our time.", cloze_word: "issues",
    senses: [
      { p: "noun", tr: "mesele, sorun, konu", d: "Tartışılan önemli konu ya da bir sorun.", ex: "We need to discuss this issue.", exTr: "Bu meseleyi konuşmamız gerek." },
      { p: "noun", tr: "sayı (dergi, gazete)", d: "Bir yayının belirli bir tarihteki baskısı.", ex: "The new issue comes out on Monday.", exTr: "Yeni sayı pazartesi çıkıyor." },
      { p: "verb", tr: "yayımlamak, vermek, düzenlemek", d: "Resmi olarak bir belge, açıklama ya da uyarı vermek.", ex: "The government issued a warning about the storm.", exTr: "Hükümet fırtına hakkında bir uyarı yayımladı." }
    ],
    note: "'Problem' daha çok çözülmesi gereken sorundur; 'issue' tartışılan konu da olabilir. 'Take issue with' = bir şeye itiraz etmek."
  },
  "table": {
    tr: "masa; tablo",
    ex: "Table 2 shows the results of the survey.",
    exTr: "Tablo 2 anketin sonuçlarını gösteriyor.",
    cloze_sent: "___ 2 shows the results of the survey.", cloze_word: "Table",
    senses: [
      { p: "noun", tr: "masa", d: "Üzerinde yemek yenen ya da çalışılan mobilya.", ex: "Dinner is on the table!", exTr: "Yemek masada!" },
      { p: "noun", tr: "tablo, çizelge", d: "Bilgilerin satır ve sütunlarda düzenlendiği liste.", ex: "Look at the table on page 10.", exTr: "10. sayfadaki tabloya bakın." }
    ],
    note: "'Times table' = çarpım tablosu. 'Set the table' = sofrayı kurmak."
  }
};

(function applyWordEnrichment() {
  if (typeof allWords === 'undefined') return;
  for (const w of allWords) {
    const e = WORD_ENRICH[w.w];
    if (e) Object.assign(w, e);
  }
})();
