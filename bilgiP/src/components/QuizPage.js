import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './QuizPage.css';

const QuizPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const quizzes = {
      1: {
        name: "HTML Temelleri Sınavı",
        questions: [
            { q: "1.) HTML Kurucusu Kimdir?", o: ["Tim Berners-Lee", "Tom Kerners-Lee", "Lee Sin", "Tom HTML"], c: 0 },
            { q: "2.) HTML Açılımı Nedir?", o: ["Hyper Text Man Large", "Hiper Told Many Long", "Hyper Text Markup Language", "Hiper Take Markup Length"], c: 2 },
            { q: "3.) Hangisi Domain(Alan Adı) 'dır?", o: ["Kodlama", "mail@kodlamavakti.com", "127.0.0.1", "kodlama.com"], c: 3 },
            { q: "4.) Web'de site açabilmek için hangisine ihtiyaç vardır?", o: ["Hosting", "FTP", "Domain", "XML"], c: 0 },
            { q: "5.) HTML etiketlerinin sıralaması nedir?", o: ["HTML -> Head -> Body", "HTML -> Body -> Head", "Body -> HTML -> Head", "Head -> Body -> HTML"], c: 0 },
            { q: "6.) <head> etiketinin amacı nedir?", o: ["Sayfa içeriğini gösterir", "Sayfa başlıklarını içerir", "Sayfa stilini içerir", "Sayfa metnini içerir"], c: 1 },
            { q: "7.) HTML sayfasında hangi etiketle başlık tanımlanır?", o: ["<title>", "<head>", "<header>", "<h1>"], c: 0 },
            { q: "8.) Aşağıdaki etiketlerden hangisi bir paragraf oluşturur?", o: ["<h1>", "<div>", "<p>", "<span>"], c: 2 },
            { q: "9.) HTML'de link (bağlantı) oluşturmak için hangi etiket kullanılır?", o: ["<a>", "<href>", "<link>", "<url>"], c: 0 },
            { q: "10.) <img> etiketinde hangi özellik zorunludur?", o: ["src", "alt", "title", "width"], c: 0 },
          ]
          },
      2: {
            name: "CSS Gelişmiş Seviye",
            questions: [
          { q: "1.) Flexbox ile içerikleri yatayda ve dikeyde nasıl ortalarsınız?", o: ["justify-content: center; align-items: center;", "display: flex; align-center: true;", "align-items: flex-start; justify-content: flex-end;", "text-align: center;"], c: 0 },
          { q: "2.) Grid ile 3 sütun ve 2 satır oluşturmak için hangi CSS özelliğini kullanırsınız?", o: ["grid-template-columns: 1fr 1fr 1fr;", "display: flex;", "display: grid; grid-template-rows: repeat(2, 1fr);", "grid-template-columns: repeat(3, 1fr);"], c: 3 },
          { q: "3.) Z-index özelliği ne işe yarar?", o: ["Elemanların sayfa üzerindeki katman sırasını belirler.", "Elemanın yükseklik değerini ayarlar.", "Renk değiştirme işlemi yapar.", "Elemanları kaydırır."], c: 0 },
          { q: "4.) `position: absolute` ile eleman yerinden nasıl taşır?", o: ["Ekran boyutunu değiştirir.", "Konumunu relative'e göre ayarlar.", "Eleman sabit kalır.", "Flexbox düzeni oluşturur."], c: 1 },
          { q: "5.) `flex-direction: column` ne yapar?", o: ["Elemanları yatayda sıralar.", "Elemanları dikeyde sıralar.", "Elemanları sırasız yapar.", "Hiçbir etkisi yoktur."], c: 1 },
          { q: "6.) `object-fit: cover` ne yapar?", o: ["Görseli orijinal boyutlarında gösterir.", "Görselin boyutunu korur.", "Görseli kırpar.", "Görselin boyutunu sığdırır."], c: 2 },
          { q: "7.) `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)` neyi ifade eder?", o: ["Kutunun kenarlıklarını ifade eder.", "Kutunun gölgesini ve uzaklığını ayarlar.", "Kutunun üst kısmındaki renkleri ayarlar.", "Kutunun içindeki metni ifade eder."], c: 1 },
          { q: "8.) CSS'de responsive tasarımda hangi birimi kullanmak daha yaygındır?", o: ["px", "em", "rem", "vw/vh"], c: 3 },
          { q: "9.) `::before` pseudo-element'i ne işe yarar?", o: ["Bir öğeden önce içerik ekler.", "Bir öğeden sonra içerik ekler.", "Arka plan rengini değiştirir.", "Bütün öğeleri gizler."], c: 0 },
          { q: "10.) `@media (max-width: 768px)` ne işe yarar?", o: ["Sayfa stilini tablet ve telefon boyutlarında değiştirir.", "Sayfa renklerini değiştirir.", "Yalnızca yazı tipi boyutunu değiştirir.", "Ekranı sabitler."], c: 0 },
        ]
      },
      3: {
        name: "React Başlangıç",
        questions: [
          { q: "1.) React nedir?", o: ["Bir programlama dili", "Bir UI kütüphanesidir", "Veritabanı yönetim sistemi", "Bir framework"], c: 1 },
          { q: "2.) JSX nedir?", o: ["JavaScript ile HTML'in karışımıdır", "CSS'in bir türüdür", "Bir JavaScript kütüphanesidir", "Veritabanı teknolojisidir"], c: 0 },
          { q: "3.) React'ta state nedir?", o: ["UI'ı kontrol etmek için kullanılan bir yöntem", "Değişken bir değeri saklayan bir özelliktir", "Bir fonksiyon", "DOM elemanını temsil eder"], c: 1 },
          { q: "4.) React'ta useState ne işe yarar?", o: ["Bir componentin state'ini günceller", "Bir componentin props'larını alır", "Bir componenti render eder", "Bir event handler fonksiyonu tanımlar"], c: 0 },
          { q: "5.) React'ta component nedir?", o: ["Bir UI elementidir", "Bir JavaScript dosyasıdır", "UI elemanlarını render eden fonksiyondur", "Veritabanı sorgularını çalıştıran fonksiyondur"], c: 2 },
          { q: "6.) JSX'te class yerine hangi anahtar kelime kullanılır?", o: ["id", "className", "class", "style"], c: 1 },
          { q: "7.) React'ta props nedir?", o: ["State'e benzer ancak component dışından veri alır", "Bir fonksiyonun parametresidir", "DOM elemanıdır", "React componentini tanımlar"], c: 0 },
          { q: "8.) React'ta component nasıl birleştirilir?", o: ["Bir componenti render ederek", "Componentleri birleştirmezsiniz", "Bir componenti global hale getirerek", "Bir componenti prop ile başka component'e geçerek"], c: 3 },
          { q: "9.) React'ta useEffect ne işe yarar?", o: ["Bir component'in state'ini günceller", "Component'in lifecycle fonksiyonlarını yönetir", "Bir API'den veri çeker", "Bir event listener ekler"], c: 1 },
          { q: "10.) React'ta functional component nedir?", o: ["Sadece UI render eden fonksiyonel bir bileşendir", "State'e sahip olan bir bileşendir", "Kullanıcıdan giriş alır", "Veri tabanıyla iletişim kurar"], c: 0 },
        ]
      },
      4: {
        name: "Node.js Giriş",
        questions: [
          { q: "1.) Node.js nedir?", o: ["Bir frontend framework'üdür", "Bir JavaScript runtime'ıdır", "Bir JavaScript kütüphanesidir", "Bir veritabanıdır"], c: 1 },
          { q: "2.) Node.js hangi dilde yazılmıştır?", o: ["Java", "Python", "JavaScript", "C++"], c: 2 },
          { q: "3.) Node.js ile hangi tür uygulamalar geliştirebilirsiniz?", o: ["Sadece web uygulamaları", "Sadece masaüstü uygulamaları", "Her tür uygulama", "Sadece mobil uygulamalar"], c: 2 },
          { q: "4.) Node.js'te paket yönetimi için hangi araç kullanılır?", o: ["NPM", "Yarn", "Composer", "pip"], c: 0 },
          { q: "5.) Express.js nedir?", o: ["Node.js için bir framework'tür", "Bir JavaScript kütüphanesidir", "Bir veritabanı yönetim sistemidir", "Bir API servisidir"], c: 0 },
          { q: "6.) Node.js'te HTTP server oluşturmak için hangi modül kullanılır?", o: ["http", "express", "url", "fs"], c: 0 },
          { q: "7.) Node.js ile hangi tür sunucu oluşturulabilir?", o: ["Web server", "Mail server", "Database server", "FTP server"], c: 0 },
          { q: "8.) Node.js'te hangi modül dosya işlemleri için kullanılır?", o: ["fs", "http", "url", "express"], c: 0 },
          { q: "9.) Asenkron işlemler Node.js'te nasıl yönetilir?", o: ["callback fonksiyonları ile", "while döngüsü ile", "for döngüsü ile", "sync fonksiyonları ile"], c: 0 },
          { q: "10.) Node.js'te veri iletmek için hangi formatlar kullanılır?", o: ["JSON", "XML", "CSV", "HTML"], c: 0 },
        ]
      },
      5: {
        name: "JavaScript ES6",
        questions: [
          { q: "1.) ES6'da hangisi bir değişken tanımlama yöntemidir?", o: ["var", "let", "const", "hepsi"], c: 3 },
          { q: "2.) Arrow function (ok fonksiyonu) hangi biçimdedir?", o: ["function() {}", "()=>{}", "fn() {}", "function() => {}"], c: 1 },
          { q: "3.) Template literals nedir?", o: ["Çift tırnak kullanımı", "Şablon metinlerini tanımlamak için kullanılan bir özellik", "Metin birleştirmek için kullanılan bir yöntem", "Bir fonksiyon türüdür"], c: 1 },
          { q: "4.) ES6'da hangi yeni veri tipi eklenmiştir?", o: ["Set", "Object", "Array", "String"], c: 0 },
          { q: "5.) Destructuring assignment nedir?", o: ["Bir fonksiyonu çağırma yöntemi", "Objeden ve array'den veri ayıklama yöntemi", "Yeni bir array oluşturma yöntemi", "Veri tiplerini değiştirme yöntemi"], c: 1 },
          { q: "6.) Promises nedir?", o: ["Asenkron işlem yönetme yöntemi", "Bir veri tipi", "Bir modül", "Senkron işlem yönetme yöntemi"], c: 0 },
          { q: "7.) ES6'da hangi özellik kullanılarak fonksiyonlar daha kısa yazılabilir?", o: ["Arrow function", "Function constructor", "Function binding", "Function call"], c: 0 },
          { q: "8.) Spread operator '...' nedir?", o: ["Dizi birleştirmek için kullanılır", "Objeleri birleştirir", "Dizinin kopyasını alır", "Hepsi"], c: 3 },
          { q: "9.) Classes ES6'da neyi tanımlar?", o: ["Bir tür fonksiyonu", "Bir obje oluşturma yöntemini", "Bir dizi fonksiyon", "Bir component türünü"], c: 1 },
          { q: "10.) Default parameters nedir?", o: ["Fonksiyon parametreleri varsayılan değer alabilir", "Fonksiyon parametreleri zorunlu olmalıdır", "Fonksiyon parametreleri JSON'dan gelir", "Fonksiyon parametreleri sabittir"], c: 0 },
        ]
      },
      6: {
        name: "Veri Tabanı Temelleri",
        questions: [
          { q: "1.) SQL nedir?", o: ["Veritabanı dili", "Bir programlama dili", "Veritabanı yönetim sistemi", "İnternet teknolojisi"], c: 0 },
          { q: "2.) Hangisi bir veritabanı yönetim sistemidir?", o: ["MySQL", "JavaScript", "React", "Node.js"], c: 0 },
          { q: "3.) SQL'de verileri hangi komutla sorgularız?", o: ["SELECT", "INSERT", "UPDATE", "DELETE"], c: 0 },
          { q: "4.) Veritabanında iki tabloyu birleştirmek için hangi komut kullanılır?", o: ["JOIN", "SELECT", "UNION", "GROUP BY"], c: 0 },
          { q: "5.) PRIMARY KEY nedir?", o: ["Veritabanındaki benzersiz kimlik", "Bir tabloyu tanımlayan anahtar", "Yabancı anahtar", "Tabloyu birleştiren anahtar"], c: 0 },
          { q: "6.) Hangi komut veritabanına yeni veri ekler?", o: ["INSERT INTO", "UPDATE", "SELECT", "DELETE"], c: 0 },
          { q: "7.) FOREIGN KEY nedir?", o: ["Tablolar arasındaki ilişkiyi tanımlar", "Veri türüdür", "Veri ekleme komutudur", "Tablonun adıdır"], c: 0 },
          { q: "8.) SQL'de hangi komut bir veri güncelleme işlemi yapar?", o: ["UPDATE", "SELECT", "INSERT", "DELETE"], c: 0 },
          { q: "9.) Veritabanında veri filtreleme işlemi hangi komutla yapılır?", o: ["WHERE", "SELECT", "ORDER BY", "JOIN"], c: 0 },
          { q: "10.) SQL'de NULL değeri nedir?", o: ["Boş bir değeri ifade eder", "Sayıyı ifade eder", "Bir veri türüdür", "Bir fonksiyon adı"], c: 0 },
        ]
      },
      7: {
        name: "Python ile Programlamaya Giriş",
        questions: [
          { q: "1.) Python'da hangi veri tipi, sayılar için kullanılır?", o: ["int", "string", "bool", "float"], c: 0 },
          { q: "2.) Python'da bir fonksiyon nasıl tanımlanır?", o: ["def fonksiyon_adı():", "function fonksiyon_adı():", "func fonksiyon_adı():", "define fonksiyon_adı():"], c: 0 },
          { q: "3.) Python'da hangi operatör eşitlik kontrolü için kullanılır?", o: ["=", "==", "===", "==="], c: 1 },
          { q: "4.) Python'da hangi anahtar kelime ile bir koşul yapılır?", o: ["if", "for", "while", "else"], c: 0 },
          { q: "5.) Python'da hangi komut bir döngüyü sonlandırır?", o: ["stop", "exit", "break", "continue"], c: 2 },
          { q: "6.) Python'da listeler hangi veri tipiyle oluşturulur?", o: ["set", "list", "dict", "tuple"], c: 1 },
          { q: "7.) Python'da değişken adı nasıl tanımlanır?", o: ["Sadece sayılarla", "İlk harf küçük olmalı", "Boşluk kullanılmaz", "Hepsi"], c: 2 },
          { q: "8.) Python'da hangi veri tipi değiştirilemez?", o: ["list", "tuple", "dict", "set"], c: 1 },
          { q: "9.) Python'da modül nasıl içe aktarılır?", o: ["import modül_adı", "include modül_adı", "using modül_adı", "require modül_adı"], c: 0 },
          { q: "10.) Python'da 'print()' fonksiyonu ne iş yapar?", o: ["Ekrana veri yazdırır", "Bir dosyaya veri yazar", "Bir dosya açar", "Veritabanına veri ekler"], c: 0 },
        ]
      },
      8: {
        name: "C# Temelleri",
        questions: [
          { q: "1.) C# dilinde bir değişken nasıl tanımlanır?", o: ["let değişken_adı;", "var değişken_adı;", "değişken_adı = 10;", "int değişken_adı;"], c: 3 },
          { q: "2.) C# dilinde hangi anahtar kelime sınıf tanımlamak için kullanılır?", o: ["class", "object", "struct", "function"], c: 0 },
          { q: "3.) C# dilinde hangi veri tipi, tamsayıları saklamak için kullanılır?", o: ["int", "string", "bool", "char"], c: 0 },
          { q: "4.) C# dilinde döngü nasıl başlatılır?", o: ["for (i = 0; i < 10; i++)", "for i = 0 to 10", "while i < 10", "foreach i in 10"], c: 0 },
          { q: "5.) C# dilinde hangi operatör bir değeri artırmak için kullanılır?", o: ["++", "--", "=", "*="], c: 0 },
          { q: "6.) C# dilinde hangi anahtar kelime, nesne tabanlı sınıf mirası oluşturur?", o: ["inherit", "base", "extends", "override"], c: 1 },
          { q: "7.) C# dilinde metodlar hangi yapı ile tanımlanır?", o: ["method", "function", "void", "return"], c: 2 },
          { q: "8.) C# dilinde string veri tipi hangi karakterlerle tanımlanır?", o: ["Tek tırnak (')", "Çift tırnak (\")", "Apostrof", "Parantez"], c: 1 },
          { q: "9.) C# dilinde hangi anahtar kelime, veri tipini belirtir?", o: ["int", "new", "ref", "return"], c: 0 },
          { q: "10.) C# dilinde bir exception nasıl yakalanır?", o: ["try-catch", "throw-catch", "try-finally", "catch-except"], c: 0 },
        ]
      },
      9: {
        name: "Java OOP Konseptleri",
        questions: [
          { q: "1.) OOP'de 'encapsulation' nedir?", o: ["Veriyi gizlemek", "Veriyi dışarıya açmak", "Veriyi değiştirmek", "Veri üzerinde işlem yapmak"], c: 0 },
          { q: "2.) OOP'de 'inheritance' nedir?", o: ["Bir sınıfın başka bir sınıftan özellik alması", "Sınıfların birleştirilmesi", "Sınıf içinde fonksiyonlar yazmak", "Veriyi dışarıya göndermek"], c: 0 },
          { q: "3.) OOP'de 'polymorphism' nedir?", o: ["Bir metodun birden fazla şekilde çalışması", "Farklı sınıfların aynı isme sahip olması", "Veri tabanını yönetmek", "Bir fonksiyonu tekrar kullanmak"], c: 0 },
          { q: "4.) OOP'de 'abstraction' nedir?", o: ["Gereksiz detaylardan kaçınmak", "Sınıf oluşturmak", "Veri gizlemek", "Fonksiyonlar yazmak"], c: 0 },
          { q: "5.) Java'da constructor ne işe yarar?", o: ["Nesne oluşturulmasını sağlar", "Metodları çalıştırır", "Değişkenleri tanımlar", "Veri tabanına bağlanır"], c: 0 },
          { q: "6.) Java'da final anahtar kelimesi ne işe yarar?", o: ["Bir sınıfın son halini belirtir", "Bir metodun son halini belirtir", "Bir değişkenin sabit olmasını sağlar", "Bir nesnenin son halini belirtir"], c: 2 },
          { q: "7.) Java'da interface nedir?", o: ["Bir sınıfın şablonu", "Bir sınıfın fonksiyonlarını içerir", "Bir metodun içeriğini içerir", "Bir nesne türüdür"], c: 0 },
          { q: "8.) Java'da super anahtar kelimesi ne işe yarar?", o: ["Bir üst sınıfın özelliklerine erişim sağlar", "Bir fonksiyonu çağırır", "Bir nesne oluşturur", "Bir metodun içeriğini değiştirmek için kullanılır"], c: 0 },
          { q: "9.) Java'da constructor overloading nedir?", o: ["Farklı parametreler ile birden fazla constructor tanımlama", "Constructor metodunu çağırmak", "Yeni bir constructor oluşturmak", "Metodun içerisinde değişken tanımlamak"], c: 0 },
          { q: "10.) Java'da static anahtar kelimesi ne işe yarar?", o: ["Bir sınıfın tüm nesneleri için ortak bir değeri belirtir", "Bir sınıfın metodlarını çalıştırır", "Bir sınıfın fonksiyonlarını içerir", "Bir sınıfı statik yapar"], c: 0 },
        ]
      },
      10: {
        name: "TypeScript Temelleri",
        questions: [
          { q: "1.) TypeScript nedir?", o: ["Bir JavaScript framework'üdür", "Bir programlama dili", "JavaScript'in bir türüdür", "Bir HTML/CSS kütüphanesidir"], c: 2 },
          { q: "2.) TypeScript'te hangi veri tipi, değişkenin sadece bir türde veri almasını sağlar?", o: ["any", "number", "boolean", "string"], c: 1 },
          { q: "3.) TypeScript'te fonksiyon parametreleri nasıl tanımlanır?", o: ["param1: type", "param1:type", "param1:type()", "param1=type"], c: 0 },
          { q: "4.) TypeScript'te hangi anahtar kelime, sınıf tanımlar?", o: ["class", "interface", "function", "constructor"], c: 0 },
          { q: "5.) TypeScript'te veri tipi kontrolü yapmak için hangi anahtar kelime kullanılır?", o: ["typeof", "check", "type", "assert"], c: 0 },
          { q: "6.) TypeScript'te bir değişkenin tipi belirlenmişse, o veri tipi nasıl değiştirilir?", o: ["Değiştirilemez", "let anahtar kelimesiyle değiştirilir", "const ile değiştirilir", "any kullanılarak değiştirilir"], c: 0 },
          { q: "7.) TypeScript'te hangi türde veri saklanamaz?", o: ["number", "boolean", "object", "undefined"], c: 3 },
          { q: "8.) TypeScript'te interface nedir?", o: ["Bir sınıfın tanımını yapar", "Bir veri tipi tanımını yapar", "Bir fonksiyon tanımını yapar", "Bir metodun tanımını yapar"], c: 1 },
          { q: "9.) TypeScript'te enum nedir?", o: ["Sabit bir değer kümesidir", "Bir veri türüdür", "Bir fonksiyon türüdür", "Bir sınıf türüdür"], c: 0 },
          { q: "10.) TypeScript'te hangi özellik, türlerin doğru kullanıldığını garanti eder?", o: ["Type Annotations", "Type Inference", "Type Checking", "Dynamic Typing"], c: 1 },
        ]
      },
      11: {
        name: "Git ve GitHub Kullanımı",
        questions: [
          { q: "1.) Git nedir?", o: ["Bir programlama dili", "Bir sürüm kontrol sistemidir", "Bir veritabanıdır", "Bir web framework'üdür"], c: 1 },
          { q: "2.) GitHub nedir?", o: ["Bir proje yönetim aracıdır", "Bir kod barındırma platformudur", "Bir Git alternatifi", "Bir text editördür"], c: 1 },
          { q: "3.) Git'te yeni bir depo nasıl oluşturulur?", o: ["git create", "git init", "git start", "git new"], c: 1 },
          { q: "4.) Git'te bir dosyayı eklemek için hangi komut kullanılır?", o: ["git add <dosya_adı>", "git commit <dosya_adı>", "git push <dosya_adı>", "git create <dosya_adı>"], c: 0 },
          { q: "5.) Git'te bir değişikliği kaydetmek için hangi komut kullanılır?", o: ["git push", "git commit", "git add", "git merge"], c: 1 },
          { q: "6.) GitHub'a değişiklik göndermek için hangi komut kullanılır?", o: ["git send", "git push", "git commit", "git upload"], c: 1 },
          { q: "7.) Git'te bir branch (dal) nasıl oluşturulur?", o: ["git branch <dal_adı>", "git create branch <dal_adı>", "git make branch <dal_adı>", "git new branch <dal_adı>"], c: 0 },
          { q: "8.) Git'te değişiklikleri birleştirmek için hangi komut kullanılır?", o: ["git merge", "git pull", "git add", "git push"], c: 0 },
          { q: "9.) Git'te hangi komut ile geçmiş commit'leri listeleyebilirsiniz?", o: ["git log", "git history", "git show", "git status"], c: 0 },
          { q: "10.) Git'te bir dosyayı silmek için hangi komut kullanılır?", o: ["git remove <dosya_adı>", "git delete <dosya_adı>", "git rm <dosya_adı>", "git deletefile <dosya_adı>"], c: 2 },
        ]
      },
      12: {
        name: "Linux Komut Satırı",
        questions: [
          { q: "1.) Linux'ta hangi komut, geçerli dizini görüntüler?", o: ["ls", "pwd", "cd", "dir"], c: 1 },
          { q: "2.) Linux'ta dosya listelemek için hangi komut kullanılır?", o: ["list", "dir", "ls", "show"], c: 2 },
          { q: "3.) Linux'ta dosya silmek için hangi komut kullanılır?", o: ["rm", "del", "delete", "remove"], c: 0 },
          { q: "4.) Linux'ta bir dizine gitmek için hangi komut kullanılır?", o: ["move", "cd", "dir", "goto"], c: 1 },
          { q: "5.) Linux'ta bir dosyanın içeriğini görüntülemek için hangi komut kullanılır?", o: ["cat", "view", "show", "print"], c: 0 },
          { q: "6.) Linux'ta bir dosyayı kopyalamak için hangi komut kullanılır?", o: ["cp", "copy", "move", "clone"], c: 0 },
          { q: "7.) Linux'ta bir dizin oluşturmak için hangi komut kullanılır?", o: ["mkdir", "newdir", "makedir", "createdir"], c: 0 },
          { q: "8.) Linux'ta dosya içeriğini sayfalar halinde görmek için hangi komut kullanılır?", o: ["more", "page", "cat", "show"], c: 0 },
          { q: "9.) Linux'ta bir dosyayı taşımak için hangi komut kullanılır?", o: ["mv", "move", "transfer", "shift"], c: 0 },
          { q: "10.) Linux'ta komutların geçmişini görmek için hangi komut kullanılır?", o: ["history", "log", "show", "back"], c: 0 },
        ]
      },
      13: {
        name: "RESTful API Kullanımı",
        questions: [
          { q: "1.) RESTful API nedir?", o: ["Bir web servis mimarisidir", "Bir veritabanı yönetim sistemidir", "Bir kullanıcı arayüzüdür", "Bir programlama dilidir"], c: 0 },
          { q: "2.) RESTful API'de hangi HTTP yöntemi veriyi almak için kullanılır?", o: ["GET", "POST", "PUT", "DELETE"], c: 0 },
          { q: "3.) RESTful API'de hangi HTTP yöntemi veriyi oluşturmak için kullanılır?", o: ["GET", "POST", "PUT", "DELETE"], c: 1 },
          { q: "4.) RESTful API'de hangi HTTP yöntemi veriyi güncellemek için kullanılır?", o: ["GET", "POST", "PUT", "DELETE"], c: 2 },
          { q: "5.) RESTful API'de hangi HTTP yöntemi veriyi silmek için kullanılır?", o: ["GET", "POST", "PUT", "DELETE"], c: 3 },
          { q: "6.) RESTful API'de 'stateless' ne anlama gelir?", o: ["API her istekte bağımsız çalışır", "API her istekte bağlı çalışır", "API veri saklar", "API her istekte veri döner"], c: 0 },
          { q: "7.) RESTful API'de URI neyi ifade eder?", o: ["User Resource Identifier", "Uniform Resource Identifier", "Unified Resource Identifier", "Universal Resource Identifier"], c: 1 },
          { q: "8.) RESTful API'de JSON formatı hangi türde veri taşımak için kullanılır?", o: ["Metin", "Binaries", "Veri nesneleri", "Sadece sayılar"], c: 2 },
          { q: "9.) RESTful API'de veri taşıyan başlık kısmı ne adla bilinir?", o: ["Headers", "Body", "Params", "Request"], c: 0 },
          { q: "10.) RESTful API'de hangi durum kodu başarılı bir isteği belirtir?", o: ["200", "404", "500", "403"], c: 0 },
        ]
      },
      14: {
        name: "Django Framework Giriş",
        questions: [
          { q: "1.) Django nedir?", o: ["Bir Python framework'üdür", "Bir JavaScript kütüphanesidir", "Bir web server'dır", "Bir programlama dilidir"], c: 0 },
          { q: "2.) Django projesi nasıl başlatılır?", o: ["django new project", "django startproject <proje_adı>", "django init project", "django create <proje_adı>"], c: 1 },
          { q: "3.) Django'da URL'leri yönetmek için hangi dosya kullanılır?", o: ["models.py", "urls.py", "views.py", "settings.py"], c: 1 },
          { q: "4.) Django'da model nedir?", o: ["Veritabanı tablosunun tanımıdır", "Bir kullanıcı arayüzü bileşenidir", "Bir API'dir", "Bir view fonksiyonudur"], c: 0 },
          { q: "5.) Django'da veritabanı tabloları nasıl oluşturulur?", o: ["django migrate", "django syncdb", "python manage.py migrate", "python db create"], c: 2 },
          { q: "6.) Django'da bir form nasıl işlenir?", o: ["django form", "forms.py ile", "views.py ile", "model.py ile"], c: 1 },
          { q: "7.) Django'da admin panelini etkinleştirmek için hangi komut kullanılır?", o: ["python manage.py admin", "python manage.py startadmin", "python manage.py createsuperuser", "python admin.py run"], c: 2 },
          { q: "8.) Django'da static dosyalar nerede saklanır?", o: ["static/", "media/", "public/", "assets/"], c: 0 },
          { q: "9.) Django'da template nedir?", o: ["HTML dosyalarıdır", "Veritabanı dosyalarıdır", "CSS dosyalarıdır", "Javascript dosyalarıdır"], c: 0 },
          { q: "10.) Django'da bir view fonksiyonu nasıl tanımlanır?", o: ["def view(request):", "def view():", "view(request):", "function view(request):"], c: 0 },
        ]
      },
      15: {
        name: "Angular Temelleri",
        questions: [
          { q: "1.) Angular nedir?", o: ["Bir JavaScript kütüphanesidir", "Bir Python framework'üdür", "Bir TypeScript tabanlı framework'tür", "Bir veritabanı yönetim sistemidir"], c: 2 },
          { q: "2.) Angular ile kullanılan varsayılan dil hangisidir?", o: ["JavaScript", "TypeScript", "HTML", "CSS"], c: 1 },
          { q: "3.) Angular'da component nedir?", o: ["Bir veri modelidir", "Bir fonksiyondur", "Bir sayfa şablonudur", "Bir UI bileşenidir"], c: 3 },
          { q: "4.) Angular'da modüller ne işe yarar?", o: ["Veritabanı bağlantısı sağlar", "App yapısını düzenler", "Uygulamanın temel yapısını oluşturur", "Kullanıcı doğrulaması yapar"], c: 2 },
          { q: "5.) Angular'da bir component nasıl oluşturulur?", o: ["ng new component <component_adı>", "ng generate component <component_adı>", "ng create component <component_adı>", "ng build component <component_adı>"], c: 1 },
          { q: "6.) Angular'da veri iletimi için hangi mekanizma kullanılır?", o: ["Services", "Directives", "Binding", "Modules"], c: 2 },
          { q: "7.) Angular'da hangi komut, uygulamayı başlatmak için kullanılır?", o: ["ng run", "ng start", "ng serve", "ng build"], c: 2 },
          { q: "8.) Angular'da bir service nedir?", o: ["Veri yönetimi ve iş mantığını sağlayan bir yapı", "UI bileşenlerini düzenleyen bir sınıf", "Bir component türüdür", "CSS stil dosyasıdır"], c: 0 },
          { q: "9.) Angular'da routing işlemi nasıl yapılır?", o: ["ng route", "ng navigate", "Angular Router ile", "ng link"], c: 2 },
          { q: "10.) Angular'da data binding türlerinden hangisi iki yönlü veri akışı sağlar?", o: ["One-way binding", "Event binding", "Property binding", "Two-way binding"], c: 3 },
        ]
      },
      16: {
        name: "Vue.js Başlangıç",
        questions: [
          { q: "1.) Vue.js nedir?", o: ["Bir JavaScript framework'üdür", "Bir CSS kütüphanesidir", "Bir Python framework'üdür", "Bir veritabanı yönetim sistemidir"], c: 0 },
          { q: "2.) Vue.js hangi dilde yazılmıştır?", o: ["JavaScript", "Python", "C#", "Ruby"], c: 0 },
          { q: "3.) Vue.js ile bir component nasıl oluşturulur?", o: ["Vue.component('component-name', {})", "new Vue('component-name')", "Vue.createComponent('component-name')", "component.createVue('component-name')"], c: 0 },
          { q: "4.) Vue.js'te data binding için kullanılan özellik nedir?", o: ["v-bind", "v-model", "v-if", "v-for"], c: 1 },
          { q: "5.) Vue.js'te hangi komut ile uygulama başlatılır?", o: ["vue start", "vue init", "npm start", "vue serve"], c: 2 },
          { q: "6.) Vue.js'te bir component'i nasıl kullanırsınız?", o: ["<app></app>", "<vue></vue>", "<component-name></component-name>", "<component></component>"], c: 2 },
          { q: "7.) Vue.js'te iki yönlü veri bağlaması hangi direktif ile yapılır?", o: ["v-if", "v-bind", "v-for", "v-model"], c: 3 },
          { q: "8.) Vue.js' te hangi fonksiyon, component'in yaşam döngüsünde çağrılır?", o: ["created()", "mounted()", "updated()", "destroyed()"], c: 1 },
          { q: "9.) Vue.js'te reactive data nedir?", o: ["Veri bağlama", "Veri düzenleme", "Veri gözlemleme", "Veri şablonlama"], c: 2 },
          { q: "10.) Vue.js'te bir component'ten diğerine veri nasıl iletilir?", o: ["props", "emit", "v-model", "data-bind"], c: 0 },
        ]
      },
      17: {
        name: "Mobil Uygulama Geliştirme (React Native)",
        questions: [
          { q: "1.) React Native nedir?", o: ["Bir mobil uygulama geliştirme framework'üdür", "Bir web framework'üdür", "Bir oyun motorudur", "Bir CSS kütüphanesidir"], c: 0 },
          { q: "2.) React Native hangi dilde yazılmıştır?", o: ["JavaScript", "TypeScript", "C#", "Python"], c: 0 },
          { q: "3.) React Native ile uygulama geliştirirken hangi IDE kullanılır?", o: ["Android Studio", "Xcode", "Visual Studio Code", "Tüm yukarıdakiler"], c: 3 },
          { q: "4.) React Native ile hangi komut ile uygulama başlatılır?", o: ["react-native start", "npm start", "react start", "yarn start"], c: 0 },
          { q: "5.) React Native uygulamasında bileşen nedir?", o: ["Bir UI elementidir", "Bir fonksiyondur", "Bir veritabanıdır", "Bir stil dosyasıdır"], c: 0 },
          { q: "6.) React Native'de props nedir?", o: ["Component'e veri geçmek için kullanılan yapıdır", "Component'teki stil özelliğidir", "Component'e stil atayan fonksiyondur", "Component'in yaşam döngüsüdür"], c: 0 },
          { q: "7.) React Native'de State nedir?", o: ["Component'in durumudur", "Veritabanı bağlantısıdır", "Component'e veri geçme işlemidir", "Yalnızca UI için kullanılan bir araçtır"], c: 0 },
          { q: "8.) React Native ile hangi platformlarda uygulama geliştirebilirsiniz?", o: ["Android", "iOS", "Web", "Tüm yukarıdakiler"], c: 3 },
          { q: "9.) React Native'de hangi bileşen layout işlemi için kullanılır?", o: ["View", "Text", "Image", "Style"], c: 0 },
          { q: "10.) React Native'de bir component'i güncellemek için hangi fonksiyon kullanılır?", o: ["setState()", "render()", "updateState()", "componentDidUpdate()"], c: 0 },
        ]
      },
      18: {
        name: "Firebase ile Uygulama Geliştirme",
        questions: [
        { q: "1.) Firebase nedir?", o: ["Google tarafından sağlanan bir backend-as-a-service platformudur", "Bir JavaScript kütüphanesidir", "Bir oyun motorudur", "Bir veritabanı yönetim sistemidir"], c: 0 },
        { q: "2.) Firebase'in hangi servisi gerçek zamanlı veritabanı sağlar?", o: ["Firestore", "Firebase Storage", "Realtime Database", "Firebase Hosting"], c: 2 },
        { q: "3.) Firebase ile kimlik doğrulama işlemi hangi servis ile yapılır?", o: ["Firebase Authentication", "Firebase Cloud Messaging", "Firebase Functions", "Firebase Analytics"], c: 0 },
        { q: "4.) Firebase ile hangi platformlar için uygulama geliştirebilirsiniz?", o: ["Android", "iOS", "Web", "Tüm yukarıdakiler"], c: 3 },
        { q: "5.) Firebase'in hangi servisi, dosya depolamak için kullanılır?", o: ["Firebase Storage", "Firebase Hosting", "Firebase Realtime Database", "Firebase Firestore"], c: 0 },
        { q: "6.) Firebase'de bir veritabanı koleksiyonu nedir?", o: ["Bir veritabanı tablosudur", "Bir veri kümesidir", "Bir veritabanı şemasının parçasıdır", "Veri gruplamasıdır"], c: 3 },
        { q: "7.) Firebase Functions nedir?", o: ["Cloud functions for Firebase", "Veritabanı yönetim aracı", "Mobil cihazlar için servis", "Veri analizi aracı"], c: 0 },
        { q: "8.) Firebase Realtime Database'de veriye nasıl erişirsiniz?", o: ["/ref('/path')", "/child('/path')", "/data('/path')", "/database('/path')"], c: 1 },
        { q: "9.) Firebase Analytics nedir?", o: ["Veri analizi için kullanılan bir servis", "Veritabanı yönetim aracıdır", "Mobil kullanıcı davranışlarını izlemeye yarar", "Uygulama yayınlamak için bir platformdur"], c: 2 },
        { q: "10.) Firebase ile bildirim göndermek için hangi servis kullanılır?", o: ["Firebase Cloud Messaging", "Firebase Storage", "Firebase Hosting", "Firebase Functions"], c: 0 },
        ]
      },
      19: {
        name: "Algoritma ve Veri Yapıları",
        questions: [
          { q: "1.) Algoritma nedir?", o: ["Bir probleme çözüm bulma yöntemidir", "Bir veri türüdür", "Veritabanı yönetim sistemidir", "Bir programlama dilidir"], c: 0 },
          { q: "2.) Veri yapıları ne işe yarar?", o: ["Verileri düzenli bir şekilde saklamaya yarar", "Hesaplama yapar", "Algoritma çalıştırır", "Veritabanı oluşturur"], c: 0 },
          { q: "3.) En yaygın kullanılan veri yapılarından hangisi sıralı verilerle çalışır?", o: ["Array", "HashMap", "Stack", "Queue"], c: 0 },
          { q: "4.) Aşağıdaki veri yapılarını hangi sırayla en hızlı şekilde ararız?", o: ["Array, Linked List, HashMap", "Linked List, Array, HashMap", "HashMap, Array, Linked List", "HashMap, Linked List, Array"], c: 2 },
          { q: "5.) Hangi algoritma, en küçük öğeyi bulur ve sıralı bir liste oluşturur?", o: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"], c: 2 },
          { q: "6.) Hangi veri yapısı 'ilk giren ilk çıkar' prensibini uygular?", o: ["Stack", "Queue", "Array", "Linked List"], c: 1 },
          { q: "7.) 'Divide and Conquer' algoritmalarına örnek hangisidir?", o: ["Merge Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"], c: 0 },
          { q: "8.) Hangi algoritma en verimli sıralama algoritmasıdır?", o: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"], c: 0 },
          { q: "9.) Stack veri yapısında hangi işlem yapılmaz?", o: ["Push", "Pop", "Peek", "Dequeue"], c: 3 },
          { q: "10.) Rekürsif algoritma nedir?", o: ["Bir fonksiyonun kendi kendini çağırması", "Bir algoritmanın sürekli çalışması", "Bir fonksiyonun başka bir fonksiyonu çağırması", "Bir programın sürekli çalışması"], c: 0 },
        ]
      },
      20: {
        name: "Yapay Zeka ve Makine Öğrenmesi Giriş",
        questions: [
          { q: "1.) Yapay zeka nedir?", o: ["Bir insan gibi düşünme yeteneğine sahip makine sistemidir", "Bir yazılım geliştirme tekniğidir", "Bir oyun motorudur", "Bir veri yapısıdır"], c: 0 },
          { q: "2.) Makine öğrenmesi nedir?", o: ["Verileri analiz ederek karar verme sistemidir", "Veritabanı yönetim sistemidir", "Yapay zekanın bir alt dalıdır", "Bir oyun yazma tekniğidir"], c: 1 },
          { q: "3.) Aşağıdaki algoritmalardan hangisi denetimli öğrenme algoritmasıdır?", o: ["K-Nearest Neighbors", "K-Means", "PCA", "Reinforcement Learning"], c: 0 },
          { q: "4.) Hangi makine öğrenmesi algoritması denetimsiz öğrenme türündedir?", o: ["K-Nearest Neighbors", "K-Means", "Decision Tree", "Random Forest"], c: 1 },
          { q: "5.) Yapay zeka ile en sık kullanılan öğrenme türü nedir?", o: ["Denetimli öğrenme", "Denetimsiz öğrenme", "Derin öğrenme", "Takviyeli öğrenme"], c: 0 },
          { q: "6.) Derin öğrenme nedir?", o: ["Makine öğrenmesinin bir dalıdır", "Bir yazılım geliştirme tekniğidir", "Yapay zekanın başlangıcıdır", "Bir veri yönetim sistemidir"], c: 0 },
          { q: "7.) Yapay sinir ağları hangi makine öğrenmesi alanında kullanılır?", o: ["Derin öğrenme", "Denetimli öğrenme", "Denetimsiz öğrenme", "Takviyeli öğrenme"], c: 0 },
          { q: "8.) Hangi algoritma, sınıflandırma problemlerini çözmek için kullanılır?", o: ["Naive Bayes", "K-Means", "PCA", "Gradient Boosting"], c: 0 },
          { q: "9.) Modelin doğruluğunu artırmak için hangi işlem yapılır?", o: ["Overfitting", "Underfitting", "Hyperparameter tuning", "Loss function optimization"], c: 2 },
          { q: "10.) Yapay zeka sistemlerinde kullanılan en popüler kütüphane hangisidir?", o: ["TensorFlow", "OpenAI", "Scikit-learn", "PyTorch"], c: 0 },
        ]
      }
    };
   
    const currentQuiz = quizzes[id];
    const [answers, setAnswers] = useState(new Array(currentQuiz?.questions.length || 0).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 dakika = 1200 saniye
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (!currentQuiz) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    handleFinishQuiz(); // Süre dolunca otomatik bitir
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuiz]);

    if (!currentQuiz) return <div>Sınav bulunamadı!</div>;

    const formatTime = (seconds) => {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const handleAnswerChange = (answerIndex) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = answerIndex;
        setAnswers(updatedAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleFinishQuiz = () => {
        let correctAnswers = 0;
        currentQuiz.questions.forEach((q, i) => {
            if (answers[i] === q.c) correctAnswers++;
        });

        setScore(correctAnswers);

        const totalQuestions = currentQuiz.questions.length;
        const resultMessage = `Sınav tamamlandı! Doğru: ${correctAnswers}, Yanlış: ${totalQuestions - correctAnswers}`;

        setShowResult(true); // Sonucu göster

        const quizName = currentQuiz.name || "Bilinmeyen Sınav";

        const result = {
            quizId: id,
            quizName,
            score: correctAnswers,
            total: totalQuestions,
            date: new Date().toLocaleString()
        };

        const prevResults = JSON.parse(localStorage.getItem("results")) || [];
        localStorage.setItem("results", JSON.stringify([result, ...prevResults]));
    };

    const progressPercentage = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;

    return (
        <div className="test-area">
            <div className="test-header">
                <div className="test-title">{currentQuiz.name}</div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                    <div className="progress-text">{`${Math.round(progressPercentage)}%`}</div>
                </div>
                <div className="time-remaining">{formatTime(timeLeft)}</div>
            </div>

            <div className="question-area">
                <div className="question-title">Soru {currentQuestionIndex + 1}</div>
                <div className="question-text">{currentQuiz.questions[currentQuestionIndex]?.q}</div>
                <div className="options">
                    {currentQuiz.questions[currentQuestionIndex]?.o?.map((option, i) => (
                        <label key={i} className={`option ${answers[currentQuestionIndex] === i ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name={`question-${currentQuestionIndex}`}
                                checked={answers[currentQuestionIndex] === i}
                                onChange={() => handleAnswerChange(i)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

            <div className="navigation">
                <button className="nav-button" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Önceki</button>
                <button className="nav-button" onClick={handleNextQuestion} disabled={currentQuestionIndex === currentQuiz.questions.length - 1}>Sonraki</button>
                <button className="finish-button" onClick={handleFinishQuiz} disabled={answers.includes(null)}>Bitir</button>
            </div>

            {showResult && (
                <div className="result-overlay">
                    <div className="result-message">
                        <p>Sınav tamamlandı!</p>
                        <p>Doğru: {score} | Yanlış: {currentQuiz.questions.length - score}</p>
                        <button className="close-button" onClick={() => navigate("/dashboard")}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizPage;