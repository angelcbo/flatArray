function transformToPlainArray(intArray) {
    let plainArray=[];

    while (intArray.length) {
        const firstElement = intArray.shift();
        if (Array.isArray(firstElement))
            plainArray = [...plainArray, ...transformToPlainArray(firstElement)];
        else
            plainArray = [...plainArray, firstElement];
    }
    return plainArray
}

module.exports = transformToPlainArray;