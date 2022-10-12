function customIndexOf(str, sub){
    let index = -1;
    if(sub.length > str.length){
        return index;
    }
    for (let i = 0; i <= str.length - sub.length; i++) {
        if(str[i] === sub[0]){
            index = i;
            for (let j = 1; j < sub.length; j++) {
                if(str[i + j] !== sub[j]){
                    index = -1;
                    break;
                }
            }
            if(index !== -1){
                return index;
            }
        }
    }
    return index;
}

console.log(customIndexOf("Hello world world","world"));