import { ChartsXAxis, ChartsYAxis, LineChart, LinePlot, MarkPlot, ResponsiveChartContainer } from '@mui/x-charts'

export const Graph = ({ data }) => {
    const convertTimestamp = (timestamp) => {
        const dateTime = new Date(timestamp * 1000);
        return dateTime.toLocaleTimeString('ja-JP')
    }

    return (
    <div style={{display: "inline-block"}}>
        <ResponsiveChartContainer
            height={300}
            width={500}
            grid={{ horizontal: true }}
            xAxis={[{ id: 'timestamp', dataKey: 'timestamp', valueFormatter: convertTimestamp }]}
            yAxis={[{ id: 'temperature' }, { id: 'humidity' }]}
            series={[
                { type: 'line', id: 'temperature', yAxisId: "temperature", dataKey: 'temperature' },
                { type: 'line', id: 'humidity', yAxisId: "humidity", dataKey: 'humidity' },
            ]}
            dataset={data}
            skipAnimation={true}
        >
            <LinePlot />
            <MarkPlot    />
            <ChartsXAxis axisId="timestamp" label='Time' />
            <ChartsYAxis axisId="temperature" label="Temperature" />
            <ChartsYAxis axisId="humidity" position="right" label="Humidity" />
        </ResponsiveChartContainer>
    </div>
    )
}