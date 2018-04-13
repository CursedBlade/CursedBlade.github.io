function includes(arr, input, limit) {
    input = input.toLowerCase();
    const results = [];

    const prevDate = Number(new Date());

    for(let i=0; i<arr.length; i++) {
        if (arr[i].includes(input)) {
            results.push(arr[i]);
            if (results.length === limit) {
                break;
            }
        }
    }

    console.log(`includes: ${Number(new Date()) - prevDate} ms`)

    return results;
}