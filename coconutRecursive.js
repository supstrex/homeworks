function takingOwnPart(current, start, count = 0){
    if(count > 4){
        return current;
    }
    if(Number.isInteger((current / 4) * 5 + 1)){
        count++;
        return takingOwnPart( (current / 4 ) * 5 + 1, start, count); 
    }
    return takingOwnPart(start + 5, start + 5, 0)
}
console.log(takingOwnPart(5, 5));





