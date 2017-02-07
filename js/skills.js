var skills={};
skills.list=
    {
        '概览':
            {
                '跨平台开发':3,
                '数据库':3,
                '前端':8,
                'Node.js':5,
                '各个平台':7,
                '编程语言':7,
                '服务器端':6,
                '开发工具':8,
                '网站建设':8
            },
        '前端':
            {
                "HTML":8,
                "CSS":5,
                "JS":7,
                "Ajax":6,
                "HTTP":5,
                "Jquery":5,
                "Vue":5,
                "Angular":4,
                "Bootstrap":7,
                "Jasmine":4
            },
        'Node.js':
            {
                "ES6":3,
                "API":5,
                "Express":5,
                "Gulp":4,
                "Webpack":5
            },
        '数据库':
            {
                'SQL':3,
                "MongoDB":3,
                "Redis":3
            },
        '各个平台':
            {
                "PC Web":7,
                "Mobile Web":7,
                "IOS":1,
                "Android":1,
                "Windows":2
            },
        '编程语言':
            {
                "JS":7,
                "C":2,
                "C++":2,
                "PHP":3,
                "Java":3,
                "Python":2,
                "Ruby":1,
                "Go":1,
                "C#":2
            },
        '服务器端':
            {
                "Linux":3,
                "FTP":6,
                "apache":4,
                "nginx":5,
                "shell":2
            },
        '开发工具':
            {
                "Git":5,
                "GitHub":8,
                "IntelliJ系列IDE":6
            },
        '网站建设':
            {
                "域名":8,
                "DNS":5,
                "WordPress":6,
                "Hexo":4
            },
        '跨平台开发':
            {
                "Weex":2,
                "Cordova | Phonegap":3,
                "Ionic":3
            }
    };
skills.labelsets={};
skills.datasets={};
for(var item in skills.list)
{
    var data=skills.list[item];
    skills.labelsets[item]=[];
    skills.datasets[item]=[];
    for(var detail in data)
    {
        skills.labelsets[item].push(detail);
        skills.datasets[item].push(data[detail]);
    }
}
Chart.defaults.global.defaultFontSize=18;
skills.options={};
skills.options.bar=
    {
        type:'bar',
        data:
            {
                labels:[],
                datasets:
                    [
                        {
                            label:'',
                            data:[],
                            backgroundColor:[],
                            borderColor:[]
                        }
                    ]
            },
        options:
            {
                scales:
                    {
                        // display:false,
                        yAxes:
                            [
                                {
                                    ticks:
                                        {
                                            // beginAtZero:true,
                                            min:0,
                                            max:10
                                        }
                                }
                            ]
                    }
            }
    };
skills.options.radar=
    {
        type:'radar',
        data:
            {
                labels:skills.labelsets['概览'],
                datasets:
                    [
                        {
                            label:'概览',
                            data:skills.datasets['概览'],
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor:'rgba(255,99,132,1)',
                            pointBackgroundColor:'rgba(255,99,132,1)',
                            pointBorderColor:'#fff',
                            pointHoverBackgroundColor:'#fff',
                            pointHoverBorderColor:'rgba(255,99,132,1)'
                        }
                    ]
            },
        options:
            {
                scale:
                    {
                        // display:false,
                        ticks:
                            {
                                // beginAtZero:true,
                                min:0,
                                max:10
                            },
                        pointLabels:
                            {
                                fontSize:18
                            }
                    }
            }
    };

skills.setup=function()
{
    var skills_nav=document.getElementById('skills_nav');
    for(var item in skills.list)
    {
        var nav_item=document.createElement('li');
        nav_item.classList.add('list-group-item');
        nav_item.classList.add('what-can-nav-item');
        if(item==='概览')
        {
            nav_item.classList.add('active');
        }
        nav_item.innerText=item;
        skills_nav.appendChild(nav_item);
    }
    var nav_items=document.getElementsByClassName('what-can-nav-item');
    for(var i=0;i<nav_items.length;i++)
    {
        // console.log(nav_items[i]);
        nav_items[i].addEventListener('click',function(e)
        {
            for(var i=0;i<nav_items.length;i++)
            {
                nav_items[i].classList.remove('active');
            }
            var el=e.target;
            el.classList.add('active');
            skills.nav(el.innerText);
        })
    }
    skills.init();
};

skills.init=function()
{
    skills.canvas=document.getElementById('skills_canvas');
    skills.chart=new Chart
    (
        skills.canvas,
        skills.options.radar
    );
};

skills.nav=function(id)
{
    skills.chart.destroy();
    if(id==='概览')
    {
        // console.log(skills.options.radar);
        skills.chart=new Chart
        (
            skills.canvas,
            skills.options.radar
        );
    }
    else
    {
        skills.options.bar.data.labels=skills.labelsets[id];
        skills.options.bar.data.datasets[0].label=id;
        skills.options.bar.data.datasets[0].data=skills.datasets[id];
        skills.options.bar.data.datasets[0].backgroundColor=[];
        skills.options.bar.data.datasets[0].borderColor=[];
        for(var k=0;k<20;k++)
        {
            skills.options.bar.data.datasets[0].backgroundColor.push('#'+(Math.random()*1e20).toString(16).slice(0,6));
            skills.options.bar.data.datasets[0].borderColor.push('#'+(Math.random()*1e20).toString(16).slice(0,6));
        }
        // console.log(skills.options.bar);
        skills.chart=new Chart
        (
            skills.canvas,
            skills.options.bar
        );
    }
};

// skills.render=function()
// {
//     for(var i in this.list)
//     {
//         var item=this.list[i];
//         var name=i;
//         var type=name==='概览'?'radar':'bar';
//         var labels=[];
//         var dataset={};
//         var options=null;
//         dataset.data=[];
//         dataset.label=name;
//         if(type==='radar')
//         {
//             dataset.backgroundColor= 'rgba(255,99,132,0.2)';
//             dataset.borderColor='rgba(255,99,132,1)';
//             dataset.pointBackgroundColor='rgba(255,99,132,1)';
//             dataset.pointBorderColor='#fff';
//             dataset.pointHoverBackgroundColor='#fff';
//             dataset.pointHoverBorderColor='rgba(255,99,132,1)';
//             options=
//                 {
//                     scale:
//                         {
//                             ticks:
//                                 {
//                                     // beginAtZero:true,
//                                     min:0,
//                                     max:10
//                                 },
//                             pointLabels:
//                                 {
//                                     fontSize:18
//                                 }
//                         }
//                 }
//             ;
//         }
//         else
//         {
//             dataset.backgroundColor=[];
//             dataset.borderColor=[];
//             for(var k=0;k<20;k++)
//             {
//                 dataset.backgroundColor.push('#'+(Math.random()*1e20).toString(16).slice(0,6));
//                 dataset.borderColor.push('#'+(Math.random()*1e20).toString(16).slice(0,6));
//             }
//             options=
//                 {
//                     scales:
//                         {
//                             yAxes:
//                                 [
//                                     {
//                                         ticks:
//                                             {
//                                                 // beginAtZero:true,
//                                                 min:0,
//                                                 max:10
//                                             }
//                                     }
//                                 ]
//                         }
//                 }
//             ;
//         }
//
//         for(var j in item)
//         {
//             labels.push(j);
//             dataset.data.push(item[j]);
//         }
//         console.log(name);
//         console.log(labels);
//         console.log(dataset);
//
//         var canvas=document.createElement('canvas');
//         canvas.id=name;
//         canvas.style.display='none';
//         canvas.classList.add('skills_canvas');
//         document.getElementById('skills_charts').appendChild(canvas);
//         // var canvas=document.getElementById('skills_canvas');
//         new Chart
//         (
//             canvas,
//             {
//                 type:type,
//                 data:
//                     {
//                         datasets:
//                             [
//                                 dataset
//                             ],
//                         labels:labels
//                     },
//                 options: options
//             }
//         );
//         document.getElementById('概览').style.display='inline-block';
//     }
//
// };