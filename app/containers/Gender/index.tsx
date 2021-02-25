import React from 'react';
import { withStyles } from '@material-ui/core';
import ReactEcharts from "echarts-for-react";
import {data} from './data';

const styles = themes => ({
  wrapper: {
    width:'100%',
    height: '100%',
    padding: '24 0',
  },
});


function Gender(props) {
  const { classes } = props;

const option = {
  title: {
    text: '性别',
    left: 'center'
  },
    tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ["Female", "Transexual", "Transgender", "White", "Male"]
  },
  series: [
      {
        name: '死亡人数',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
          data: [
            {
              "name": "Female",
              "value": 2563
            },
            {
              "name": "Transexual",
              "value": 1
            },
            {
              "name": "Transgender",
              "value": 15
            },
            {
              "name": "White",
              "value": 1
            },
            {
              "name": "Male",
              "value": 24061
            }
          ],
          emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
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

export default withStyles(styles)(Gender);
