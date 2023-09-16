
 var prix=0;
 var txt="";


 function ajoute(choix) {
  var pos=choix.selectedIndex;
  var pr=choix[pos].value;
  prix+=eval(pr);
  
   
  return(pr)
 }

 function calcul(f) {
  prix=0;
  document.forms[f].e.value= ajoute(document.forms[f].menuE);
  document.forms[f].pl.value=ajoute(document.forms[f].menuP);
  document.forms[f].d.value=ajoute(document.forms[f].menuD);
  
  document.forms[f].t.value=prix;
 }

 