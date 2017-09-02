jQuery("document").ready(function(){
    
    jQuery(".test1").on('click',function(){
        var vl1,vl2,vl3,sum;
        vl1 = jQuery('#val1').val();
        vl2 = jQuery('#val2').val();
        vl3 = jQuery('#val3').val();
        vl1 = parseInt(vl1);
        vl2 = parseInt(vl2);
        vl3 = parseInt(vl3);
        sum = vl1 + vl2 + vl3;
        alert(sum);
    });
    jQuery(".test2").on("click",function(){
      var vl4,vl5,sum;
        vl4 = jQuery('#val4').val();
        vl5 = jQuery('#val5').val();
        vl4 = parseInt(vl4);
        vl5 = parseInt(vl5);
        sum = (vl4+vl5)*2;
        alert(sum);
    })
        jQuery(".test3").on("click",function(){
      var vl6,vl7,sum;
        vl6 = jQuery('#val6').val();
        vl7 = jQuery('#val7').val();
        vl6 = parseInt(vl6);
        vl7 = parseInt(vl7);
        sum = vl6*vl7;
        alert(sum);
    })
   
     jQuery(".test4").on("click",function(){
         var vl8,vl9,vl10,ploshad;
         vl8 = jQuery('#val8').val();
         vl9 = jQuery('#val9').val();
         vl10 = jQuery('#val10').val();
         vl8 = parseInt(vl8); //a
         vl9 = parseInt(vl9); //b
         vl10 = parseInt(vl10); //c
         ploshad = 2*((vl8+vl9)+(vl8+vl10)+(vl9+vl10))
         alert(ploshad);
});
    function GetResult(oper)
{ 
  var n1 = 0;
  var n2 = 0;
    	
  n1 = eval(calcform.num_01.value);   //Число 1
  n2 = eval(calcform.num_02.value);   //Число 2
  
  switch (oper)                       //Проверяем, какая кнопка
  {                                   //была нажата
    case 1:   //Кнопка +
    {
      calcform.res.value = n1 + n2;
      break;
    }
    case 2:   //Кнопка -
    {
      calcform.res.value = n1 - n2;
      break;
    }
    case 3:   //Кнопка *
    {
      calcform.res.value = n1 * n2;
      break;
    }
    case 4:   //Кнопка /
    {
      calcform.res.value = n1 / n2;
      break;
    }
  }
}
    });