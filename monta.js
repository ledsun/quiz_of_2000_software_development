(function (){
   var spans = document.getElementsByTagName('span');
   for (var i = 0, l = spans.length; i < l ; i++){
      var span = spans[i];
      if (span.className != 'monta') continue;
      span['onclick'] = function(){ this.style.backgroundColor = "transparent" };
   }
})();
