import React from 'react';
import { withStyles } from '@material-ui/core';
import ReactEcharts from "echarts-for-react";
import _ from 'lodash';
import {data} from './data';

const styles = themes => ({
  wrapper: {
    width:'100%',
    height: '100%',
    padding: '24 0',
  },
});


function AgeAndGender(props) {
  const { classes } = props;
  const GenderData = _.uniq(data.map(it => it.Gender));

  const sortData = data.map(it => it).sort(function(a:any, b:any){return a.Age - b.Age});

  const ageData = sortData.map(it => it.Age).sort(function(a:any, b:any){return a - b});

  let newData = GenderData.map(it =>{
    return sortData.map(ite => ite.Gender == it ? ite.count : 0);
  })

  // const sum = () => {
  //   return GenderData.map(it =>{
  //     return eval(data.filter(item => item.Gender == it).map(ite => ite.count).join("+"));
  //   })
  // }

  const option = {
    title: {
        text: '年龄和性别'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
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
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
        {
            name: '年龄',
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ageData
        }
    ],
    yAxis: [
        {
            name: '人数',
            type: 'value'
        }
    ],
    series: [
        {
            name: GenderData[0],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: newData[0]
        },
        {
            name: GenderData[1],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: newData[1]
        },
        {
            name: GenderData[2],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: newData[2]
        },
        {
            name: GenderData[3],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: newData[3]
        },
        {
            name: GenderData[4],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: newData[4]
        }
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

export default withStyles(styles)(AgeAndGender);
