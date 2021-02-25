import React from 'react';
import { withStyles } from '@material-ui/core';
import ReactEcharts from "echarts-for-react";
import _ from 'lodash';
import {data} from './data';

const styles = themes => ({
  wrapper: {
    width:'100%',
    height: '100%',
    padding: 24,
  },
});


function AgeAndRace(props) {
  const { classes } = props;

  const GenderData = _.uniq(data.map(it => it.Race));

  const sortData = data.map(it => it).sort(function(a:any, b:any){return a.Age - b.Age});

  const ageData = sortData.map(it => it.Age).sort(function(a:any, b:any){return a - b});

  let newData = GenderData.map(it =>{
    return sortData.map(ite => ite.Race == it ? ite.count : 0);
  })

  const option = {
    title: {
        left: 'center',
        text: '年龄和种族',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: GenderData
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    dataZoom: [
      {
          type: 'slider',
          show: true,
          xAxisIndex: [0]
      },
      // {
      //     type: 'slider',
      //     show: true,
      //     yAxisIndex: [0],
      // }
    ],
    xAxis: [
        {
            type: 'category',
            data: ageData
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: GenderData[0],
            type: 'bar',
            data: newData[0],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
          name: GenderData[1],
          type: 'bar',
          data: newData[1],
          markPoint: {
              data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
              ]
          },
          markLine: {
              data: [
                  {type: 'average', name: '平均值'}
              ]
          }
      },
      {
        name: GenderData[2],
        type: 'bar',
        data: newData[2],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    },
      {
        name: GenderData[3],
        type: 'bar',
        data: newData[3],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    },
      {
        name: GenderData[4],
        type: 'bar',
        data: newData[4],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    },
      {
        name: GenderData[5],
        type: 'bar',
        data: newData[5],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    },
      {
        name: GenderData[6],
        type: 'bar',
        data: newData[6],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    },
      {
        name: GenderData[67],
        type: 'bar',
        data: newData[7],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    },

    ]
};


  return (
    <div className={classes.wrapper}>
      <ReactEcharts
        option={option}
        style={{ height: '90%', width: '88%', margin: '0 auto', paddingBottom: '100' }}
        />
    </div>
  );
}

export default withStyles(styles)(AgeAndRace);
