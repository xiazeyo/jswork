document.write("<p>金字塔</p>")
let level = prompt('请设置金字塔的层数')
level = parseFloat(level)&&Number(level)
if (isNaN(level)){
    alert('金字塔的层数是数字')
}
for(let i=1;i<=level;++1){
    let blank = level - i;
    for(let k=0;k<blank;++k){
        ducument.write('&nbsp;');
    }
    //打印星星
    let star = i * 2 - 1
    for(let j=0;j<star;++j){
        document.write('*')
    }

    let str = '<table border="1">'
    for(let i=1;i<10;++j){
        //; 拼接单元格
        str += '<td>' + j + '*' + i + '=' + ( j * j ) + '</td>'
    }
    str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table').innerHTML = str

}