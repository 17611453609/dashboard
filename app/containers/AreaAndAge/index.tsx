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

function AreaAndAge(props) {
  const { classes } = props;

  const xData = _.uniq(data.map(it => it.dieCountry));

  const ageArr = ['1-10','11-20','21-30','31-40','41-50','51-60','61-70','71-80','81-90','91-100','101-110'];

  const itemData = ageArr.map((it, index) => {
    return data.filter(ite => ite.Age >= index*10+1 && ite.Age <= (index+1)*10 )
  })

  const option = {
    title: {
        text: '区域和年龄'
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
      type: 'scroll',
      orient: 'vertical',
      right: 1,
      top: 30,
      bottom: 20,
      data: ageArr
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
            name: ageArr[0],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: itemData[0].map(ite => ite.count)
        },
        {
            name: ageArr[1],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: itemData[1].map(ite => ite.count)
        },
        {
            name: ageArr[2],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: itemData[2].map(ite => ite.count)
        },
        {
            name: ageArr[3],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: itemData[3].map(ite => ite.count)
        },
        {
            name: ageArr[4],
            type: 'line',
            stack: '人数',
            areaStyle: {},
            data: itemData[4].map(ite => ite.count)
        },
        {
          name: ageArr[5],
          type: 'line',
          stack: '人数',
          areaStyle: {},
          data: itemData[5].map(ite => ite.count)
      },
      {
          name: ageArr[6],
          type: 'line',
          stack: '人数',
          areaStyle: {},
          data: itemData[6].map(ite => ite.count)
      },
      {
          name: ageArr[7],
          type: 'line',
          stack: '人数',
          areaStyle: {},
          data: itemData[7].map(ite => ite.count)
      },
      {
          name: ageArr[8],
          type: 'line',
          stack: '人数',
          areaStyle: {},
          data: itemData[8].map(ite => ite.count)
      },
      {
          name: ageArr[9],
          type: 'line',
          stack: '人数',
          areaStyle: {},
          data: itemData[9].map(ite => ite.count)
      },
      {
        name: ageArr[10],
        type: 'line',
        stack: '人数',
        areaStyle: {},
        data: itemData[10].map(ite => ite.count)
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

export default withStyles(styles as any)(AreaAndAge);
