import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
    const getData = () => {
        const data = genres.map(genre => {
          const filteredEvents = events.filter(event => 
            event.summary.toLowerCase().includes(genre.toLowerCase())
          );
          return {
            name: genre,
            value: filteredEvents.length
          };
        });
        return data;
      };

      const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };

      useEffect(() => {
        setData(getData());
      }, [events]);

    return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
      <Pie
        data={data}
         dataKey="value"
         fill="#8884d8"
         labelLine={false}
         outerRadius={150}
         label={renderCustomizedLabel}
>   
  {
    data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))
  }
</Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
