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

function AreaAndGender(props) {
  const { classes } = props;

  const xData = _.uniq(data.map(it => it.dieCountry));
  const legendData = _.uniq(data.map(it => it.Gender));
  let newData = legendData.map(it => data.filter(ite => ite.Gender ==it));
  let finalData = legendData.map( (item,index) =>{
    return xData.map(it =>{
      let dd = newData[index].filter(ite => ite.dieCountry == it)
      return dd.length > 0 ? dd[0].count : 0
    })
  })

  const option = {
    title: {
        text: '区域和性别'
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
        data: legendData
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
            name: '区域',
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: xData
        }
    ],
    yAxis: [
        {
            name: '人数',
            type: 'value'
        }
    ],
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
    series: [
        {
            name: legendData[0],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: finalData[0]
        },
        {
            name: legendData[1],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: finalData[1]
        },
        {
            name: legendData[2],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: finalData[2]
        },
        {
            name: legendData[3],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: finalData[3]
        },
        {
            name: legendData[4],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: finalData[4]
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

export default withStyles(styles as any)(AreaAndGender);
