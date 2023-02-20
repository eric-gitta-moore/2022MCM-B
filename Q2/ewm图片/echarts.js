option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      label: {
        formatter: '   {b|{b}}   \n{hr|}\n {per|{d}%} ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 22,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#000',
            fontWeight: 900,
            align: 'center',
            lineHeight: 40,
            fontSize: 22,
          }
        }
      },
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      data: [
        { value: 4.556, name: 'Population' },
        { value: 11.270, name: 'Cultivated' },
        { value: 4.923, name: 'Forest' },
        { value: 18.509, name: 'Attacking of elephant' },
        { value: 17.912, name: 'Attacking of herbivores' },
        { value: 24.746, name: 'Attacking of carnivores' },
        { value: 6.078, name: 'Camps Num' },
        { value: 3.640, name: 'Rhinoceros habitat' },
        { value: 8.365, name: 'Graze' }
      ]
    }
  ]
};