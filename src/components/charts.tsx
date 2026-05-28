import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  LabelList,
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
} from "recharts";

const AXIS = {
  fontFamily: "JetBrains Mono, monospace",
  fontSize: 11,
  fill: "#94a3b8",
};

export function PainPointBar({
  data,
}: {
  data: { name: string; severity: number; isRoot?: boolean }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 32, left: 4, bottom: 8 }}
      >
        <CartesianGrid stroke="rgba(148,163,184,0.08)" horizontal={false} />
        <XAxis
          type="number"
          domain={[0, 5]}
          tick={AXIS}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ ...AXIS, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={210}
        />
        <Tooltip cursor={{ fill: "rgba(34,211,238,0.08)" }} />
        <Bar dataKey="severity" radius={[0, 6, 6, 0]} barSize={22}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.isRoot ? "#22d3ee" : "#f97066"} fillOpacity={d.isRoot ? 1 : 0.85} />
          ))}
          <LabelList
            dataKey="severity"
            position="right"
            style={{ fill: "#e2e8f0", fontFamily: "JetBrains Mono", fontSize: 11 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function SolutionMixDonut({
  data,
}: {
  data: { name: string; value: number; color: string }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius="60%"
          outerRadius="92%"
          paddingAngle={2}
          startAngle={90}
          endAngle={-270}
          stroke="#05080d"
          strokeWidth={3}
        >
          {data.map((d, i) => (
            <Cell key={i} fill={d.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function RiskScatter({
  data,
}: {
  data: { id: string; name: string; prob: number; impact: number }[];
}) {
  const colored = data.map((d) => ({
    ...d,
    z: d.prob * d.impact,
    color:
      d.prob * d.impact >= 20
        ? "#f97066"
        : d.prob * d.impact >= 12
        ? "#fbbf24"
        : "#34d399",
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 16, right: 24, left: 24, bottom: 32 }}>
        <CartesianGrid stroke="rgba(148,163,184,0.08)" />
        <XAxis
          type="number"
          dataKey="prob"
          name="Xác suất"
          domain={[0, 5]}
          ticks={[1, 2, 3, 4, 5]}
          tick={AXIS}
          axisLine={false}
          tickLine={false}
          label={{
            value: "Xác suất →",
            position: "insideBottom",
            offset: -14,
            fill: "#64748b",
            fontFamily: "JetBrains Mono",
            fontSize: 11,
          }}
        />
        <YAxis
          type="number"
          dataKey="impact"
          name="Tác động"
          domain={[0, 5]}
          ticks={[1, 2, 3, 4, 5]}
          tick={AXIS}
          axisLine={false}
          tickLine={false}
          label={{
            value: "Tác động →",
            angle: -90,
            position: "insideLeft",
            fill: "#64748b",
            fontFamily: "JetBrains Mono",
            fontSize: 11,
          }}
        />
        <ZAxis type="number" dataKey="z" range={[120, 600]} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3", stroke: "#22d3ee" }}
          content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const p = payload[0].payload;
            return (
              <div className="rounded-lg border border-slate-700 bg-slate-900/95 px-3 py-2 text-xs">
                <div className="font-mono text-accent">{p.id}</div>
                <div className="text-white">{p.name}</div>
                <div className="mt-1 text-slate-400">
                  Xác suất {p.prob} · Tác động {p.impact}
                </div>
              </div>
            );
          }}
        />
        <Scatter data={colored}>
          {colored.map((d, i) => (
            <Cell key={i} fill={d.color} stroke={d.color} fillOpacity={0.7} />
          ))}
          <LabelList
            dataKey="id"
            position="top"
            style={{ fill: "#cbd5e1", fontFamily: "JetBrains Mono", fontSize: 10 }}
          />
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export function BenefitBar({
  data,
  color = "#22d3ee",
}: {
  data: { name: string; impact: number }[];
  color?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="rgba(148,163,184,0.06)" horizontal={false} />
        <XAxis type="number" domain={[0, 10]} hide />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ ...AXIS, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={190}
        />
        <Bar dataKey="impact" radius={[0, 6, 6, 0]} barSize={16} fill={color}>
          <LabelList
            dataKey="impact"
            position="right"
            style={{ fill: "#cbd5e1", fontFamily: "JetBrains Mono", fontSize: 11 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AdoptionRadial({ value }: { value: number }) {
  const data = [{ name: "adoption", value, fill: "#22d3ee" }];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="72%"
        outerRadius="100%"
        barSize={14}
        data={data}
        startAngle={90}
        endAngle={90 - (360 * value) / 100}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius={8} background={{ fill: "rgba(148,163,184,0.12)" }} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
