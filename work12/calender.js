funtion calendar(y) {
    var w = Date(y,0).getDay();
    var html = '<div class="box">'
    for(var m = 1;m <= 12; ++m){
        html += '<table>';
        html += '<tr class="title"><th colspan="7">' + y + '年' + m + '月</th></tr>';
        html += '<tr><td>日</td><td>一</td>二</td>

    }
}