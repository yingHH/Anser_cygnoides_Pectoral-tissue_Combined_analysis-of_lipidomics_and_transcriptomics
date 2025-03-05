var fileLocation = '../../js/echarts';
require.config({
	paths:{ 
		echarts: fileLocation,
		'echarts/chart/line': fileLocation,
		'echarts/chart/bar': fileLocation,
		'echarts/chart/scatter': fileLocation,
		'echarts/chart/k': fileLocation,
		'echarts/chart/pie': fileLocation,
		'echarts/chart/radar': fileLocation,
		'echarts/chart/chord': fileLocation,
		'echarts/chart/force': fileLocation,
		'echarts/chart/gauge': fileLocation,
		'echarts/chart/funnel': fileLocation,
    }
});