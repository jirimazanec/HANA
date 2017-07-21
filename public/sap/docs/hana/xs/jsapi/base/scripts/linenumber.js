(function() {
 var numbered;
 var source = document.getElementsByClassName('prettyprint');

 Array.prototype.forEach.call(source, function(pre) {
         var code = pre.getElementsByTagName('code')[0];
         numbered = code.innerHTML.split('\n');
         var counter = 0;
         numbered = numbered.map(function(item) {
                 counter++;
                 return '<span class="line-numbers" rowId="' + counter + '"></span>' + item;
                 });

         code.innerHTML = numbered.join('\n');
         });
 })();
