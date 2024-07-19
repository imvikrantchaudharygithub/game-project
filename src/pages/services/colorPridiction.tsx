export default async function filterBetOn(array:any, colorName:any, number:any) {
    const colorMultiplier:any = {
        'Green': 2,
        'Red': 2,
        'Violet': 3
    };

    const modifiedArray = array.map((obj:any) => {
        if (obj.beton === colorName) {
            return {
                ...obj,
                amount: obj.amount * (colorMultiplier[colorName] || 1)
            };
        } else if (obj.beton === number) {
            return {
                ...obj,
                amount: obj.amount * 2
            };
        }
        return obj;
    });

    const matches =modifiedArray.filter((obj:any) => obj.beton === colorName || obj.beton === number);

    if (matches.length > 0) {
        console.log("match found",matches)
        return matches;
    } else {
        console.log('no match found',modifiedArray,matches,array);
        return [];
    }
}

