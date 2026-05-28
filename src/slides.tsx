import { SlideFrame } from "./components/SlideFrame";
import {
  AdoptionRadial,
  BenefitBar,
  PainPointBar,
  RiskScatter,
  SolutionMixDonut,
} from "./components/charts";
import {
  BENEFITS_DIRECT,
  BENEFITS_INDIRECT,
  DOMINO_CHAIN,
  META,
  METRICS,
  ORG_BLOCKS,
  PAIN_POINTS,
  PHASE1_STEPS,
  PHASE2_STEPS,
  PHASES,
  RISKS,
  SOLUTION_MIX,
  SYSTEMS,
  TEAM,
} from "./data";

const TOTAL = 14;

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 ${className}`}
    >
      {children}
    </div>
  );
}

function KPI({
  label,
  value,
  unit,
  hint,
}: {
  label: string;
  value: string | number;
  unit?: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight text-white tabular-nums md:text-5xl">
          {value}
        </span>
        {unit && (
          <span className="text-base text-slate-400 md:text-lg">{unit}</span>
        )}
      </div>
      {hint && <div className="mt-2 text-xs text-slate-500">{hint}</div>}
    </div>
  );
}

/* ---------------- 01 Cover ---------------- */
function SlideCover({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      variant="cover"
      eyebrow="Proposal · Operations"
      title={
        <>
          Chuẩn hóa Quy trình
          <br />
          <span className="text-accent">& Tối ưu Hệ thống</span> Vận hành SOL
        </>
      }
      subtitle="70% Quy trình (SOP) · 30% Công nghệ. Một đề xuất bốn giai đoạn — bắt đầu từ nền tảng, kết thúc bằng năng lực tự chủ."
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <KPI label="Người trình bày" value={META.presenter.split(" — ")[0]} hint={META.presenter.split(" — ")[1]} />
        <KPI label="Đối tượng" value="BGĐ SOL" hint="Audience: 4 GĐ khối" />
        <KPI label="Ngày" value="26.05" unit=".2026" hint={META.date.split(" · ")[0]} />
        <KPI label="Phiên bản" value={META.version} hint="Lưu hành nội bộ" />
      </div>
      <div className="mt-8 flex flex-wrap gap-2 text-xs">
        {["F&B Chain", "20+ chi nhánh", "8+ thương hiệu", "4 khối", "17 phòng/BP"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-700/60 px-3 py-1 font-mono text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </SlideFrame>
  );
}

/* ---------------- 02 Exec Summary ---------------- */
function SlideExecSummary({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="01 · Executive Summary"
      title="Vấn đề không nằm ở phần mềm — nằm ở quy trình"
      subtitle="SOL đã đầu tư 4 hệ thống lớn (1Office · FAST · TreeAMS · F2Tech) nhưng adoption < 50%. Nguyên nhân gốc: không có bộ SOP chuẩn làm tham chiếu."
    >
      <div className="grid h-full grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
            Tỷ trọng giải pháp
          </div>
          <div className="mt-2 h-[300px]">
            <SolutionMixDonut data={SOLUTION_MIX} />
          </div>
          <div className="mt-4 flex justify-center gap-6">
            {SOLUTION_MIX.map((s) => (
              <div key={s.name} className="flex items-center gap-2 text-sm">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ background: s.color }}
                />
                <span className="text-slate-300">{s.name}</span>
                <span className="font-mono text-white">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 space-y-3 md:col-span-5">
          {[
            ["Adoption thực tế", "< 50%"],
            ["Số phòng/BP", "17"],
            ["Hệ thống đã đầu tư", "4"],
            ["Onboard nhân viên mới", "2–3 tháng"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 px-4 py-3"
            >
              <span className="text-sm text-slate-400">{k}</span>
              <span className="font-mono text-lg text-white">{v}</span>
            </div>
          ))}
          <div className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-3">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
              Insight
            </div>
            <p className="mt-1 text-sm text-slate-200">
              "Quy trình chưa chuẩn → công cụ số hóa sẽ không thể phát huy được giá trị."
            </p>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 03 Pain Points ---------------- */
function SlidePainPoints({ i }: { i: number }) {
  const chartData = PAIN_POINTS.map((p) => ({
    name: p.name,
    severity: p.severity,
    isRoot: p.isRoot,
  }));
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="02 · Pain Points"
      title="7 vấn đề · 1 nguyên nhân gốc"
      subtitle="Phân loại theo 4M (Method · Material · Manpower · Measurement). Mức độ nghiêm trọng đo trên thang 1–5."
    >
      <div className="grid h-full grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <div className="h-[420px]">
            <PainPointBar data={chartData} />
          </div>
        </div>
        <div className="col-span-12 space-y-3 md:col-span-4">
          <div className="rounded-xl border border-accent/40 bg-accent/[0.06] p-4">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
              Root Cause
            </div>
            <div className="mt-2 text-lg font-semibold text-white">
              Chưa có bộ SOP chuẩn
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Tất cả 6 pain point còn lại đều là hệ quả trực tiếp hoặc gián tiếp.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
              Phân loại 4M
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
              <li className="flex justify-between"><span>Method</span><span className="font-mono">2</span></li>
              <li className="flex justify-between"><span>Material</span><span className="font-mono">2</span></li>
              <li className="flex justify-between"><span>Manpower</span><span className="font-mono">1</span></li>
              <li className="flex justify-between"><span>Hệ quả</span><span className="font-mono">2</span></li>
            </ul>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 04 Domino Chain ---------------- */
function SlideDomino({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="03 · Cause & Effect"
      title="Chuỗi domino từ một thiếu sót"
      subtitle="Nếu không xử lý gốc, 6 vấn đề sau sẽ tái diễn — bất kể đầu tư thêm bao nhiêu phần mềm."
    >
      <div className="flex h-full flex-col justify-center">
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-7">
          {DOMINO_CHAIN.map((step, idx) => {
            const isRoot = idx === 0;
            return (
              <li
                key={step}
                className={`relative rounded-xl border p-4 text-sm transition ${
                  isRoot
                    ? "border-accent/60 bg-accent/[0.08]"
                    : "border-slate-800/80 bg-slate-900/40"
                }`}
              >
                <div
                  className={`font-mono text-[10.5px] uppercase tracking-[0.2em] ${
                    isRoot ? "text-accent" : "text-slate-500"
                  }`}
                >
                  Step {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 leading-snug text-white">{step}</div>
                {idx < DOMINO_CHAIN.length - 1 && (
                  <div className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-accent md:block">
                    →
                  </div>
                )}
              </li>
            );
          })}
        </ol>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
              Ngắn hạn (3–6 tháng)
            </div>
            <p className="mt-2 text-sm text-slate-300">
              License tiếp tục lãng phí, người mới mất 2–3 tháng "quen việc", phòng ban tranh cãi.
            </p>
          </Card>
          <Card>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
              Trung hạn (6–12 tháng)
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Không xây được thang lương 3P, không đo được hiệu suất, vendor tiếp tục cấu hình sai.
            </p>
          </Card>
          <Card>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
              Dài hạn (&gt;12 tháng)
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Khó khăn nghiêm trọng trong mục tiêu scale-up — chi phí quản lý tăng vô kiểm soát.
            </p>
          </Card>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 05 Phases Overview ---------------- */
function SlidePhases({ i }: { i: number }) {
  const maxMonths = 5;
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="04 · Roadmap"
      title="4 giai đoạn · 2 trong proposal này"
      subtitle="Giai đoạn 1 & 2 là trọng tâm. Giai đoạn 3 & 4 đề xuất riêng sau khi nền tảng SOP đã vững."
    >
      <div className="space-y-3">
        {PHASES.map((p) => {
          const widthPct = p.months > 0 ? (p.months / maxMonths) * 100 : 8;
          return (
            <div
              key={p.id}
              className={`grid grid-cols-12 items-center gap-4 rounded-xl border p-4 ${
                p.inScope
                  ? "border-slate-800/80 bg-slate-900/40"
                  : "border-dashed border-slate-800/60 bg-slate-900/20 opacity-70"
              }`}
            >
              <div className="col-span-12 md:col-span-3">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg font-mono text-sm font-semibold"
                    style={{
                      background: p.color + "22",
                      color: p.color,
                      border: `1px solid ${p.color}44`,
                    }}
                  >
                    GĐ{p.id}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{p.name}</div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-500">
                      {p.en}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="relative h-2.5 w-full rounded-full bg-slate-800/80">
                  <div
                    className="h-2.5 rounded-full"
                    style={{
                      width: `${widthPct}%`,
                      background: p.inScope ? p.color : "rgba(148,163,184,0.4)",
                    }}
                  />
                </div>
                <div className="mt-2 text-xs text-slate-400">{p.focus}</div>
              </div>
              <div className="col-span-12 text-right md:col-span-3">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] ${
                    p.inScope
                      ? "border-accent/40 text-accent"
                      : "border-slate-700 text-slate-500"
                  }`}
                >
                  {p.inScope
                    ? `${p.months} tháng`
                    : "Dự án mở rộng"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SlideFrame>
  );
}

/* ---------------- 06 Phase 1 Detail ---------------- */
function SlidePhase1({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="05 · Giai đoạn 1"
      title="Tái thiết Quy trình · 5 bước · 4–5 tháng"
      subtitle="Output tiên quyết: SOP signed-off cho 17 phòng/BP. Đây là nền tảng định hình mọi cấu hình hệ thống ở Giai đoạn 2."
    >
      <div className="grid h-full grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <div className="space-y-2">
            {PHASE1_STEPS.map((s, idx) => (
              <div
                key={s.id}
                className="grid grid-cols-12 items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-900/40 px-4 py-3"
              >
                <div className="col-span-2 font-mono text-sm font-semibold text-accent">
                  {s.id}
                </div>
                <div className="col-span-6 text-base text-white">{s.name}</div>
                <div className="col-span-2 font-mono text-sm text-slate-400">
                  {s.weeks}w
                </div>
                <div className="col-span-2 text-right text-sm text-slate-300">
                  {s.output}
                </div>
                {idx < PHASE1_STEPS.length - 1 && (
                  <div className="col-span-12 mt-0 ml-2 h-2 w-px bg-slate-700/60" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 space-y-3 md:col-span-4">
          <div className="rounded-xl border border-accent/40 bg-accent/[0.05] p-4">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
              Quick Win · Tuần 4
            </div>
            <p className="mt-2 text-sm text-slate-200">
              Pilot SOP chuẩn cho phòng HR — show kết quả cho BGĐ trước khi mở rộng.
            </p>
          </div>
          <Card>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
              Phương pháp luận
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
              <li>• Lean / Process Excellence</li>
              <li>• Template F&B làm khung</li>
              <li>• HOD adjust → sign-off</li>
              <li>• Kotter 8-step xuyên suốt</li>
            </ul>
          </Card>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 07 Phase 2 Detail ---------------- */
function SlidePhase2({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="06 · Giai đoạn 2"
      title="Tối ưu Hiện trạng · Mapping SOP → Hệ thống"
      subtitle="Cấu hình lại 4 hệ thống đã đầu tư theo SOP đã ban hành. Pilot 2–3 phòng trước khi rollout toàn công ty."
    >
      <div className="grid h-full grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {PHASE2_STEPS.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4"
              >
                <div className="font-mono text-sm font-semibold text-accent">{s.id}</div>
                <div className="mt-1 text-base font-semibold text-white">{s.name}</div>
                <div className="mt-3 text-xs text-slate-400">{s.output}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
            4 hệ thống hiện trạng
          </div>
          <div className="mt-3 space-y-2">
            {SYSTEMS.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 px-4 py-3"
              >
                <div>
                  <div className="font-semibold text-white">{s.name}</div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-500">
                    {s.vendor}
                  </div>
                </div>
                <div className="text-right text-xs text-slate-400">{s.scope}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 08 Org Structure ---------------- */
function SlideOrg({ i }: { i: number }) {
  const total = ORG_BLOCKS.reduce((a, b) => a + b.departments, 0);
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="07 · Tổ chức"
      title="Cơ cấu mục tiêu: 4 khối · 17 phòng/bộ phận"
      subtitle="Mỗi khối có một Giám đốc phụ trách. Tất cả phải có SOP, Function Map, JD, và DOA signed-off vào cuối Giai đoạn 1."
    >
      <div className="grid h-full grid-cols-4 gap-4">
        {ORG_BLOCKS.map((b) => (
          <div
            key={b.name}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5"
          >
            <div
              className="font-mono text-[10.5px] uppercase tracking-[0.2em]"
              style={{ color: b.color }}
            >
              Khối
            </div>
            <div className="mt-2 text-base font-semibold leading-tight text-white">
              {b.name}
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-semibold tabular-nums text-white">
                {b.departments}
              </span>
              <span className="text-sm text-slate-500">phòng</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
              <div
                className="h-1.5 rounded-full"
                style={{
                  width: `${(b.departments / total) * 100}%`,
                  background: b.color,
                }}
              />
            </div>
            <div className="mt-2 font-mono text-[10.5px] text-slate-500">
              {((b.departments / total) * 100).toFixed(0)}% tổng phòng/BP
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <KPI label="Tổng khối" value="4" />
        <KPI label="Tổng phòng/BP" value="17" />
        <KPI label="Giám đốc phụ trách" value="4" hint="1 GĐ / khối" />
      </div>
    </SlideFrame>
  );
}

/* ---------------- 09 Risk Matrix ---------------- */
function SlideRisks({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="08 · Risk"
      title="Ma trận rủi ro · Xác suất × Tác động"
      subtitle="9 rủi ro chính. Top 3 BGĐ cần aware: HOD cố thủ, BGĐ mất kiên nhẫn, SOP không được tuân thủ."
    >
      <div className="grid h-full grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <div className="h-[420px]">
            <RiskScatter data={RISKS} />
          </div>
        </div>
        <div className="col-span-12 space-y-3 md:col-span-4">
          <div className="rounded-xl border border-signal-danger/40 bg-signal-danger/[0.06] p-4">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-signal-danger">
              Critical · Cần BGĐ
            </div>
            <ul className="mt-2 space-y-1 text-sm text-slate-200">
              <li><span className="font-mono text-signal-danger">R1</span> · HOD cố thủ</li>
              <li><span className="font-mono text-signal-danger">R5</span> · BGĐ mất kiên nhẫn</li>
              <li><span className="font-mono text-signal-danger">R3</span> · SOP không tuân thủ</li>
            </ul>
          </div>
          <Card>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
              Mitigation
            </div>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              <li>• Workshop mindset shift trước khi bắt đầu</li>
              <li>• Quick win tuần 4 để show kết quả</li>
              <li>• Enforce qua hệ thống ở GĐ2 + KPI</li>
            </ul>
          </Card>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 10 Benefits ---------------- */
function SlideBenefits({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="09 · Benefits"
      title="Lợi ích trực tiếp & gián tiếp"
      subtitle="Trực tiếp từ Giai đoạn 1 (SOP). Gián tiếp từ Giai đoạn 2 (tối ưu hệ thống). Thang impact: 1–10."
    >
      <div className="grid h-full grid-cols-12 gap-6">
        <Card className="col-span-12 md:col-span-6">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
            Trực tiếp · GĐ1 (SOP)
          </div>
          <div className="mt-3 h-[320px]">
            <BenefitBar data={BENEFITS_DIRECT} color="#22d3ee" />
          </div>
        </Card>
        <Card className="col-span-12 md:col-span-6">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-signal-ok">
            Gián tiếp · GĐ2 (Hệ thống)
          </div>
          <div className="mt-3 h-[320px]">
            <BenefitBar data={BENEFITS_INDIRECT} color="#34d399" />
          </div>
        </Card>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 11 Metrics ---------------- */
function SlideMetrics({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="10 · KPIs"
      title="Chỉ số theo dõi · Baseline vs Target"
      subtitle="Baseline đo trong quá trình triển khai. Target chính thức xác định sau khi hoàn thành Job Analysis (Bước 1.3)."
    >
      <div className="grid h-full grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <div className="space-y-2.5">
            {METRICS.map((m) => {
              const baseW = m.inverse
                ? (m.baseline / Math.max(m.baseline, m.target * 2)) * 100
                : (m.baseline / Math.max(100, m.target)) * 100;
              const targetW = m.inverse
                ? (m.target / Math.max(m.baseline, m.target * 2)) * 100
                : (m.target / Math.max(100, m.target)) * 100;
              return (
                <div
                  key={m.name}
                  className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-white">{m.name}</span>
                    <span className="font-mono text-xs text-slate-500">
                      {m.baseline}
                      {m.unit} → <span className="text-accent">{m.target}{m.unit}</span>
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        Baseline
                      </div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-800">
                        <div
                          className="h-1.5 rounded-full bg-slate-500"
                          style={{ width: `${Math.min(baseW, 100)}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                        Target
                      </div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-800">
                        <div
                          className="h-1.5 rounded-full bg-accent"
                          style={{ width: `${Math.min(targetW, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <Card>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
              User Adoption · Hiện tại
            </div>
            <div className="mt-2 flex items-center gap-6">
              <div className="relative h-[180px] w-[180px]">
                <AdoptionRadial value={45} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono text-3xl font-semibold tabular-nums text-white">
                    45<span className="text-base text-slate-500">%</span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Baseline
                  </span>
                </div>
              </div>
              <div className="flex-1 text-sm text-slate-300">
                <div className="text-white">Target sau pilot:</div>
                <div className="mt-2 text-3xl font-semibold text-accent">85%</div>
                <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-500">
                  +40pp · post Bước 2.3
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 12 Team & RACI ---------------- */
function SlideTeam({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="11 · Team"
      title="Đội ngũ dự án · Giai đoạn 1"
      subtitle="Sponsor commitment là điều kiện tiên quyết. Steering meeting 2 tuần/lần — quyết định nhanh tại mỗi milestone."
    >
      <div className="grid h-full grid-cols-12 gap-4">
        {TEAM.map((t, idx) => (
          <div
            key={t.role}
            className="col-span-12 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 md:col-span-3"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
              {String(idx + 1).padStart(2, "0")} · {t.role}
            </div>
            <div className="mt-3 text-lg font-semibold text-white">{t.who}</div>
            <div className="mt-2 font-mono text-xs text-slate-400">{t.load}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
            Decision authority
          </div>
          <div className="mt-2 text-sm text-slate-200">CEO + Phó TGĐ · Steering</div>
        </Card>
        <Card>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
            Bridge BGĐ ↔ HOD
          </div>
          <div className="mt-2 text-sm text-slate-200">HR Director · 30% time</div>
        </Card>
        <Card>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
            Execution lead
          </div>
          <div className="mt-2 text-sm text-slate-200">Vinh · BA · Hybrid 2–3 ngày/tuần</div>
        </Card>
      </div>
    </SlideFrame>
  );
}

/* ---------------- 13 Call to Action ---------------- */
function SlideCTA({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="12 · Next Step"
      title="Quyết định cần từ BGĐ"
      subtitle="Sau buổi trình bày này, BGĐ cần xác nhận 4 mục để Kick-off đúng cuối T6/2026."
    >
      <div className="grid h-full grid-cols-12 gap-4">
        {[
          { n: "01", title: "Phê duyệt triển khai dự án", deadline: "Tuần 1 · T6/2026" },
          { n: "02", title: "Cam kết tham gia Steering Committee", deadline: "Trước Kick-off" },
          { n: "03", title: "Chỉ định IT Application Lead", deadline: "Trước Giai đoạn 2" },
          { n: "04", title: "Yêu cầu 17 HOD bố trí thời gian", deadline: "Tại Kick-off" },
        ].map((d) => (
          <div
            key={d.n}
            className="col-span-12 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 md:col-span-6"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-3xl font-semibold text-accent">{d.n}</span>
              <span className="rounded-full border border-slate-700/60 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-300">
                {d.deadline}
              </span>
            </div>
            <div className="mt-4 text-lg font-semibold leading-snug text-white">
              {d.title}
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* ---------------- 14 Closing ---------------- */
function SlideClosing({ i }: { i: number }) {
  return (
    <SlideFrame
      index={i}
      total={TOTAL}
      eyebrow="Closing"
      title={
        <>
          Bắt đầu từ <span className="text-accent">quy trình</span>.
          <br />
          Kết thúc bằng <span className="text-accent">năng lực tự chủ</span>.
        </>
      }
      subtitle="Một dự án không có quick fix. Nhưng có một roadmap rõ ràng — và một sponsor đủ kiên nhẫn."
    >
      <div className="flex h-full flex-col justify-center">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-500">
              Liên hệ
            </div>
            <div className="mt-2 text-2xl font-semibold text-white">{META.presenter}</div>
            <div className="mt-2 font-mono text-sm text-slate-400">
              Proposal {META.version} · {META.date}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "SOP Foundation",
                "Function Map",
                "JD Library",
                "DOA Matrix",
                "Pilot · 2–3 phòng",
                "Rollout",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/30 bg-accent/[0.04] px-3 py-1 font-mono text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-2xl border border-accent/30 bg-accent/[0.05] p-6">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
                The Bet
              </div>
              <p className="mt-3 text-base leading-relaxed text-slate-200">
                Đầu tư 4–5 tháng vào nền tảng quy trình — đổi lại khả năng scale-up
                không tăng chi phí quản lý.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export const SLIDES = [
  SlideCover,
  SlideExecSummary,
  SlidePainPoints,
  SlideDomino,
  SlidePhases,
  SlidePhase1,
  SlidePhase2,
  SlideOrg,
  SlideRisks,
  SlideBenefits,
  SlideMetrics,
  SlideTeam,
  SlideCTA,
  SlideClosing,
];
