function transformToPlainArray(intArray) {
    if (!Array.isArray(intArray))
    {
        return intArray[0];
    }

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