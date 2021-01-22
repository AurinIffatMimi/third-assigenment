//kilometerToMeter

function kilometerToMeter(kilometer){
    if(kilometer<0){
        return -1;
    }
    else{
        
    
    //1000 kilometer=1 Meter
    var meter =kilometer/1000;
    return meter;
    }
}

var result=kilometerToMeter(8000);
if(result== -1)
    {
      console.log("Error")  ;
    }
    else{
        console.log(result,"meter");
    }





//budgetCalculator
function budgetCalculetor(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0)
    {
        return -1;
    }
    else{


        //The price of a watch 50tk.
    var watch=watch*50;
    //The price of a phone 100tk.
    var phone=phone*100;
    //The price of a laptop 500tk.
    var laptop=laptop*500;
    //The total budget of watch,phone and loptop.
    var totalBudget=watch+phone+laptop;
    return totalBudget;

    

    }
    
}
var result=budgetCalculetor(-2,3,4);
if(result== -1)
{
console.log("Error");
}
else{
    console.log("Total Budget=",result,"taka");
}





//hotelCost
function hotelCost(days) 
{
    if(days<=0)
    {
        return -1;
    }
    else if(days>=1 && days<=10)
    {//if days<=10,then per day cost 100tk.
        var cost=days*100;
        return cost;
    }
    else if(days>10 && days<=20)
    {
       var days2=days-10;
       //cost of first 10 days 1000tk.
       //if days>10 && days<=20 then next 11th to 20th days cost 80 tk(per day).
       var cost=1000+(days2*80);
       return cost;
    }
   
    
    else{
        var days3=days-20;
        //cost of the first 10 days 1000tk and next 11th to 20th days cost 800tk..
        //and if days>30 then next  31th to infinity days cost is 50 tk (per day).
        var cost=1000+800+(days3*50);
        return cost;
    }
}

var totalCost=hotelCost(-4);
if(totalCost== -1){
    console.log("Error");
    
}
else{
    console.log(totalCost);
}





//megaFriend
function megaFriend(names)
{
    var nameLengthArray=[];
    for(i=0;i<names.length;i++)
    {  
        var nameLength=names[i].length;
        //console.log(nameLength);
        nameLengthArray.push(nameLength)     
    }
 
   var max1=nameLengthArray[0];
 
 for(var k=1;k<nameLengthArray.length;k++)
{
 if(max1<nameLengthArray[k]){
 
  max1=nameLengthArray[k]
  
}
  
}
//console.log(max1)
for( var p=0;p<nameLengthArray.length;p++){
if(max1==nameLengthArray[p]){

break;
}

} 
return p;
}
names=["Aurin","As","sl","iffattttt"]
var result=megaFriend(names);
console.log(names[result])




