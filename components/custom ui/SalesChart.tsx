"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const SalesChart = ({ data }: { data: any[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart className='w-full h-full' data={data} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="100%" stopColor="#8884d8" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 14 }} />
        <YAxis tick={{ fill: "#555", fontSize: 14 }} />
        <Tooltip 
          contentStyle={{ backgroundColor: "#f5f5f5", borderRadius: "8px", border: "none" }}
          itemStyle={{ color: "#555" }}
          cursor={{ stroke: '#8884d8', strokeWidth: 2 }}
        />
        <Legend verticalAlign="top" height={36} />
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="url(#colorSales)" 
          strokeWidth={3} 
          dot={{ r: 5, stroke: '#8884d8', strokeWidth: 2 }} 
          activeDot={{ r: 8 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SalesChart
