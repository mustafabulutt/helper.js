var apiGenelUrl = 'https://jsonplaceholder.typicode.com/'; //burada istek atacagımız api urlsi yolunu belirtiyorum.


    this.apiUrl = apiGenelUrl; 

    this.dataGetir = function(method, page, _data, callBack) {     // Burada Get ve Post isteklerini atacagımız alanı oluşturup hazırlıyoruz ve gelen methoda göre isteği gerçekleştiriyoruz

      console.log(method, page ,_data );  // konsolda attıgımız isteğe dair parametreleri görmek için yazdırıyoruz

        _header = {
            "Content-Type": "application/json",
            "Accept": 'application/json, text/plain, */*',
            "cache-control": "no-cache",
            "token": "111111"
        }
       

        var req = {
            method: method,
            url: this.apiUrl + page,
            headers: _header,
            data: _data,
            dataType: "json"
        };

        
$.ajax(req).done(function (response) {
         callBack(response);             // callback ile apiden gelen datayı sayfaya gönderiyoruz
  });

   };



  this.swalBilgi = function(text) {           // swet alert ile tek satırlık iconsuz metin gösterir ve sadece ok butonu çıkar 
    swal(text);
   };

   this.swalBasariliHataInfo = function(text , durum, title) {           // swet alert iconlu alert getirir "warning", "error", "success" and "info".
    swal(title, text, durum);
    };

    this.bolmeIslemi = function(sayi1 , sayi2 , callBack){      // girilen 2 sayıyı bölen kodumuz
    var sonuc = sayi1 / sayi2;
    callBack(sonuc);
    }

    this.carpmaIslemi = function(sayi1 , sayi2 , callBack){      // girilen 2 sayıyı çarpan kodumuz
        var sonuc = sayi1 * sayi2;
        callBack(sonuc);
    }

    this.foreachIleDon = function( tabloId, satir ){      //bu fonksiyon ile çağarıldıgı yerden dönülecek tablo idyi alıyorum getElementById ile o alana içerideki veriyi basıyorum 
                                                                 //satir kismi ise bize gönderilen tablo yada li gibi dönülecek satırların string halde datası eklendikten sonra gönderilen hali gelicek.
        document.getElementById(tabloId).innerHTML +=satir;
    }


    
 //parametre alma için fonksiyon yazılacak






