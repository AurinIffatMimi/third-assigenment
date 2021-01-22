function kilometerToMeter(kilometer){
    var meter =kilometer/1000;
    return meter;
}

var result=kilometerToMeter(8000);
console.log(result,"meter");





function budgetCalculetor(watch,phone,laptop){
    var sum=0;
    var watch=watch*50;
    var phone=phone*100;
    var laptop=laptop*500;
    var totalBudget=sum+watch+phone+laptop;
    return totalBudget;

}
var result=budgetCalculetor(2,3,4)
console.log("Total Budget=",result,"taka");



function hotelCost(days) 
{
    if(days<=10)
    {
        var cost=days*100;
        return cost;
    }
    else if(days>10 && days<=20)
    {
       var days2=days-10;
       var cost=1000+(days2*80);
       return cost;
    }
    
    else{
        var days3=days-20;
        var cost=1000+800+(days3*50);
        return cost;
    }
}

var fullCost=hotelCost(-4);
console.log(fullCost);
