const graphic = [
    {id:"csharp",text:"Csharp",data:[30, 70],color:"#7b1fa2"},
    {id:"javaS",text:"JavaScript",data:[35, 65],color:"#fdd835"},
    {id:"html",text:"HTML",data:[5, 95],color:"#f57c00"},
    {id:"sass",text:"SASS",data:[50, 50],color:"#cd6799"},
    {id:"css",text:"CSS",data:[5, 95],color:"#01579b"},
    {id:"mongo",text:"MongoDB",data:[20, 80],color:"#4caf50"}
]

graphic.forEach(x => {
    var myChart = echarts.init(document.getElementById(x.id));
    // use configuration item and data specified to show chart
    var option = {
        legend: {
            show: false
        },
        title: {
            text: x.text
        },
        tooltip: {
            show: false
        },
        series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['30%', '65%'],
            label: {
                show: false,
                position: 'center',
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold',
                        color: 'black'
                    },
                    formatter: function(a) {
                        return `${a.value}%`;
                    }
                }
            },
            data: x.data
        }],
        color: ['#b4babf', x.color]
    };
    myChart.setOption(option);

})

$(window).resize(function(){
    graphic.forEach(x => {
        var myChart = echarts.init(document.getElementById(x.id));
        // use configuration item and data specified to show chart
        myChart.resize();
    
    })
})