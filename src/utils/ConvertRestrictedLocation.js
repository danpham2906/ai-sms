const ConvertRestrictedLocation = (restrictedLocation) => {
    var res = [];
    if (restrictedLocation != null) {
        restrictedLocation.forEach((point, index) => {
            var tmpPoint = [];
            tmpPoint.push(point[1], point[0]);
            res.push(tmpPoint);
        });
    }
    return res;
}

export default ConvertRestrictedLocation;
