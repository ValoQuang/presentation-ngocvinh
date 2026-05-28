export const META = {
  title: "Chuẩn hóa Quy trình & Tối ưu Hệ thống Vận hành SOL",
  presenter: "Vinh Trương — Senior BA",
  audience: "Ban Giám đốc SOL",
  date: "Thứ 3 · 26/05/2026",
  version: "v1.0",
};

export const PAIN_POINTS = [
  {
    id: "P0",
    name: "Chưa có bộ SOP chuẩn",
    type: "METHOD",
    severity: 5,
    isRoot: true,
    note: "Root cause của 6 pain point còn lại",
  },
  {
    id: "P1",
    name: "Thiếu Governance & Audit Trail",
    type: "METHOD",
    severity: 5,
    note: "Không trace được trách nhiệm",
  },
  {
    id: "P2",
    name: "Khoảng cách Tech ↔ Vận hành",
    type: "MATERIAL",
    severity: 5,
    note: "Vendor cấu hình lệch thực tế",
  },
  {
    id: "P3",
    name: "Tỷ lệ Adoption thấp (<50%)",
    type: "MANPOWER",
    severity: 5,
    note: "ROI license tiệm cận 0",
  },
  {
    id: "P4",
    name: "Duplication Work",
    type: "Hệ quả",
    severity: 4,
    note: "1 thao tác lặp 2–3 lần",
  },
  {
    id: "P5",
    name: "Data Fragmentation",
    type: "MATERIAL",
    severity: 5,
    note: "BOD thiếu Single Source of Truth",
  },
  {
    id: "P6",
    name: "Low Scale-Readiness",
    type: "Hệ quả",
    severity: 5,
    note: "Khó scale-up theo target",
  },
];

export const DOMINO_CHAIN = [
  "Thiếu SOP (ROOT CAUSE)",
  "Vendor cấu hình sai",
  "User không dùng hệ thống",
  "Làm thủ công, duplicate",
  "Không có audit trail",
  "Data rời rạc",
  "Không scale được",
];

export const PHASES = [
  {
    id: 1,
    name: "Tái thiết Quy trình",
    en: "Process Redesign",
    months: 4.5,
    inScope: true,
    color: "#22d3ee",
    focus: "SOP + Function Map + JD + DOA",
  },
  {
    id: 2,
    name: "Tối ưu Hiện trạng",
    en: "System Re-config",
    months: 3,
    inScope: true,
    color: "#34d399",
    focus: "GAP → Re-config → Pilot → Rollout",
  },
  {
    id: 3,
    name: "Hợp nhất Dữ liệu",
    en: "Data Unification",
    months: 0,
    inScope: false,
    color: "#fbbf24",
    focus: "Integration + Data Warehouse + SSOT",
  },
  {
    id: 4,
    name: "Tự chủ Công nghệ",
    en: "Tech Sovereignty",
    months: 0,
    inScope: false,
    color: "#a78bfa",
    focus: "In-house build, giảm phụ thuộc vendor",
  },
];

export const SOLUTION_MIX = [
  { name: "Quy trình (SOP)", value: 70, color: "#22d3ee" },
  { name: "Công nghệ", value: 30, color: "#475569" },
];

export const RISKS = [
  { id: "R1", name: "HOD cố thủ", prob: 4, impact: 5, phase: 1 },
  { id: "R2", name: "Nhân viên sợ bị thay thế", prob: 3, impact: 3, phase: 1 },
  { id: "R3", name: "SOP không được tuân thủ", prob: 3, impact: 5, phase: 2 },
  { id: "R4", name: "Vendor thiếu capability", prob: 3, impact: 5, phase: 2 },
  { id: "R5", name: "BGĐ mất kiên nhẫn", prob: 3, impact: 5, phase: 1 },
  { id: "R6", name: "Workshop quá dài", prob: 3, impact: 3, phase: 1 },
  { id: "R7", name: "HOD không bố trí thời gian", prob: 3, impact: 5, phase: 1 },
  { id: "R8", name: "Scope creep", prob: 4, impact: 3, phase: 0 },
  { id: "R9", name: "Consultant rời dự án", prob: 1, impact: 5, phase: 0 },
];

export const ORG_BLOCKS = [
  { name: "Tài chính Kế toán", departments: 4, color: "#22d3ee" },
  { name: "Vận hành", departments: 5, color: "#34d399" },
  { name: "Sản xuất Cung ứng", departments: 4, color: "#fbbf24" },
  { name: "Hỗ trợ Vận hành", departments: 4, color: "#f97066" },
];

export const SYSTEMS = [
  { name: "1Office", vendor: "Workway · VN", scope: "HR, workflow phê duyệt" },
  { name: "FAST", vendor: "FAST · VN", scope: "Kế toán, tài chính, báo cáo" },
  { name: "TreeAMS", vendor: "TreeAMS · SG", scope: "Checklist, QA, training" },
  { name: "F2Tech", vendor: "F2Tech · VN", scope: "POS, order, tài sản" },
];

export const PHASE1_STEPS = [
  { id: "1.1", name: "Xây SOP + RACI", weeks: "8–10", output: "17 SOP signed-off" },
  { id: "1.2", name: "Function Map", weeks: "2", output: "Sơ đồ chức năng" },
  { id: "1.3", name: "Job Analysis", weeks: "3–4", output: "Task Matrix" },
  { id: "1.4", name: "Job Description", weeks: "2–3", output: "JD Library" },
  { id: "1.5", name: "Thiết kế DOA", weeks: "2", output: "DOA Matrix" },
];

export const PHASE2_STEPS = [
  { id: "2.1", name: "Rà soát GAP", output: "Báo cáo GAP + Action plan" },
  { id: "2.2", name: "Cấu hình lại hệ thống", output: "Workflow active" },
  { id: "2.3", name: "Pilot 2–3 phòng + Training", output: "Pilot report" },
  { id: "2.4", name: "Rollout & Handover", output: "Final docs + Handover" },
];

export const METRICS = [
  { name: "SOP signed-off", baseline: 0, target: 17, unit: "/17" },
  { name: "JD hoàn thành", baseline: 0, target: 100, unit: "%" },
  { name: "Onboard nhân viên", baseline: 90, target: 30, unit: " ngày", inverse: true },
  { name: "User Adoption", baseline: 50, target: 85, unit: "%" },
  { name: "Manual steps (pilot)", baseline: 100, target: 40, unit: "%", inverse: true },
];

export const TEAM = [
  { role: "Sponsor", who: "A. Đông · Chị Thư", load: "Họp 2 tuần/lần" },
  { role: "HR Director", who: "Chị Chi", load: "30% time" },
  { role: "HOD", who: "17 Trưởng phòng", load: "2–3h/tuần" },
  { role: "BA Lead", who: "Vinh Trương", load: "Hybrid 2–3 ngày/tuần" },
];

export const BENEFITS_DIRECT = [
  { name: "Onboard nhanh hơn", impact: 9 },
  { name: "Loại bỏ duplicate work", impact: 8 },
  { name: "Giảm tranh cãi liên phòng", impact: 8 },
  { name: "Cơ sở tối ưu nhân sự", impact: 7 },
  { name: "Nền tảng cho 3P salary", impact: 8 },
  { name: "Vendor có input chuẩn", impact: 9 },
];

export const BENEFITS_INDIRECT = [
  { name: "Tăng Adoption rate", impact: 9 },
  { name: "Giảm thao tác thủ công", impact: 8 },
  { name: "Audit trail cho phê duyệt", impact: 8 },
  { name: "Bảo vệ chi phí license", impact: 7 },
];
