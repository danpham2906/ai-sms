const ConvertLocationStr = (locationStr) => {
    var res = [];
    if (locationStr != null) {
        locationStr = locationStr.split("POINT(");
        locationStr = locationStr[1].split(" ");

        var latitude = locationStr[1].split(")")[0];
        var longitude = locationStr[0];

        res.push(parseFloat(latitude));
        res.push(parseFloat(longitude));
    }
    return res;
}

export default ConvertLocationStr;
