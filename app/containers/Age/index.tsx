import React from 'react';
import { withStyles } from '@material-ui/core';
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';

import {data} from './data';

const styles = themes => ({
  wrapper: {
    width:'100%',
    height: '100%',
    padding: '24 0',
  },
});


function Age(props) {
  const { classes } = props;

  const option = {
    color: ['#3398DB'],
    title: {
      text: '年龄'
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
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
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
    xAxis: [
        {
            name: '年龄',
            type: 'category',
            data: data.map(it => it.Age).sort(function(a:any, b:any){return a - b}),
            axisTick: {
                alignWithLabel: true
            }
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
            name: '受害人数',
            type: 'line',
            barWidth: '60%',
            data: data.sort(function(a:any, b:any){return a.Age - b.Age}).map(it => it.count)
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

export default withStyles(styles)(Age);
