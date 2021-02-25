import React from 'react';
import { withStyles } from '@material-ui/core';
import ReactEcharts from "echarts-for-react";
import _ from 'lodash';
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
  const GenderData = _.uniq(data.map(it => it.dieCountry));

  const option = {
    color: ['#3398DB'],
    title: {
      text: '死亡区域'
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
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
      show: true,
      feature: {
          dataZoom: {show: true},
          dataView: {show: true, readOnly: false},
          // magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
      }
    },
    xAxis: [
        {
            name: '死亡区域',
            type: 'category',
            data: data.map(it => it.dieCountry),
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            name: '死亡人数',
            type: 'value'
        }
    ],
    dataZoom: [
      {
          type: 'slider',
          show: true,
          xAxisIndex: [0]
      },
      {
          type: 'slider',
          show: true,
          yAxisIndex: [0],
      }
    ],
    series: [
        {
            name: '受害人数',
            type: 'scatter',
            barWidth: '60%',
            data: data.map(it => it.count)
        }
    ]
};


  return (
    <div className={classes.wrapper}>
      <ReactEcharts
        option={option}
        style={{ height: '88%', width: '90%', margin: '0 auto', paddingBottom: '100' }}
        />
    </div>
  );
}

export default withStyles(styles)(Age);
