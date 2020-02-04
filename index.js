function oddOneOut(str) {
   var map = new Map();
   var chars = str.split("");
   chars.forEach(c =>
   {
     if (map.has(c))
       map.set(c, map.get(c) + 1);
     else
       map.set(c, 1);
   });
   map.forEach((value, key) =>
   {
     if (value % 2 == 0)
       map.set(key, 0);
   });
   var result = [];
   chars.forEach(c =>
   {
     var count = map.get(c);
     if (count > 0)
     {
       if (count == 1)
         result.push(c);
       else
         map.set(c, count - 1);
     }
   });
   return result;
}