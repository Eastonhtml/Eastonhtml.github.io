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
});