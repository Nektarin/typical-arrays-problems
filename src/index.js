exports.min = function min(array) {
    if (array == null || array.length == 0) {
        return 0;
    }
    return array.sort((a, b) => {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    })[0];
};

exports.max = function max(array) {
    if (array == null || array.length == 0) {
        return 0;
    }
    return array
        .sort((a, b) => {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        })
        .pop();
};

exports.avg = function avg(array) {
    if (array == null || array.length == 0) {
        return 0;
    }
    return array.reduce((sum, current) => sum + current, 0) / array.length;
};
