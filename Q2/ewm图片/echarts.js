option = {
  series: [
    {
      label: {
        fontSize: 20,
        color: 'black'
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
        { value: 2.747, name: 'Population' },
        { value: 1.077, name: 'Cultivated' },
        { value: 30.663, name: 'Forest' },
        { value: 1.497, name: 'attacking of elephant' },
        { value: 1.054, name: 'attacking of herbivores' },
        { value: 1.741, name: 'attacking of carnivores' },
        { value: 30.008, name: 'Camps Num' },
        { value: 30.008, name: 'Rhinoceros habitat' },
        { value: 1.205, name: 'Graze' }
      ]
    }
  ]
};