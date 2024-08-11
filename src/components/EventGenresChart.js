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
         label
         outerRadius={130}
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
