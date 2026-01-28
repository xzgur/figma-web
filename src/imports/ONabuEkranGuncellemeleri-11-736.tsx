import svgPaths from "./svg-h59q4nele8";
import { motion } from "motion/react";

function Text() {
  return (
    <div className="h-[15px] relative shrink-0 w-[40.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] text-nowrap tracking-[0.5px] uppercase">Durum</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text />
        <Container />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#ff6467] text-[18px] text-nowrap top-[-2px] tracking-[-0.45px]">Riskli</p>
      </div>
    </div>
  );
}

function KpiCard() {
  return (
    <div className="[grid-area:1_/_1] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="KPICard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[18.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] text-nowrap tracking-[0.5px] uppercase">Hız</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text1 />
        <Container3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#51a2ff] text-[18px] text-nowrap top-[-2px] tracking-[-0.45px]">21 SP</p>
      </div>
    </div>
  );
}

function KpiCard1() {
  return (
    <div className="[grid-area:1_/_2] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="KPICard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[55.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] text-nowrap tracking-[0.5px] uppercase">Devreden</p>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="bg-[#99a1af] h-[2px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text2 />
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[27px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#ff8904] text-[18px] text-nowrap top-[-2px] tracking-[-0.45px]">%12</p>
      </div>
    </div>
  );
}

function KpiCard2() {
  return (
    <div className="[grid-area:1_/_3] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="KPICard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[39.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] text-nowrap tracking-[0.5px] uppercase">Döngü</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text3 />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[27px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#00d492] text-[18px] text-nowrap top-[-2px] tracking-[-0.45px]">7g 13s</p>
      </div>
    </div>
  );
}

function KpiCard3() {
  return (
    <div className="[grid-area:1_/_4] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="KPICard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[37.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] text-nowrap tracking-[0.5px] uppercase">Teslim</p>
      </div>
    </div>
  );
}

function Container13() {
  return <div className="bg-[#99a1af] h-[2px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text4 />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[27px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#7c86ff] text-[18px] text-nowrap top-[-2px] tracking-[-0.45px]">18g 4s</p>
      </div>
    </div>
  );
}

function KpiCard4() {
  return (
    <div className="[grid-area:1_/_5] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="KPICard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[63.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] text-nowrap tracking-[0.5px] uppercase">İnovasyon</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[18px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text5 />
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[27px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#c27aff] text-[18px] text-nowrap top-[-2px] tracking-[-0.45px]">%81</p>
      </div>
    </div>
  );
}

function KpiCard5() {
  return (
    <div className="[grid-area:1_/_6] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="KPICard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] text-nowrap tracking-[0.5px] uppercase">Çıktı</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #0891B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text6 />
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[27px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#00d3f2] text-[18px] text-nowrap top-[-2px] tracking-[-0.45px]">14</p>
      </div>
    </div>
  );
}

function KpiCard6() {
  return (
    <div className="[grid-area:1_/_7] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="KPICard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[70.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[10px] text-nowrap tracking-[0.5px] uppercase">Motivasyon</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #DB2777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #DB2777)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[18px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text7 />
        <Container23 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[27px] relative shrink-0 w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#fb64b6] text-[18px] text-nowrap top-[-2px] tracking-[-0.45px]">8.4</p>
      </div>
    </div>
  );
}

function KpiCard7() {
  return (
    <div className="[grid-area:1_/_8] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="KPICard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-px pl-[15px] pr-px pt-[15px] relative size-full">
          <Container24 />
          <Container25 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[12px] grid grid-cols-[repeat(8,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full">
        <KpiCard />
        <KpiCard1 />
        <KpiCard2 />
        <KpiCard3 />
        <KpiCard4 />
        <KpiCard5 />
        <KpiCard6 />
        <KpiCard7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[28px] relative rounded-[16px] shrink-0 w-[85.375px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-[13px] not-italic text-[12px] text-nowrap text-white top-[4px]">SPRINT 42</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[13px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_11_906)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_11_906">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[28px] relative rounded-[16px] shrink-0 w-[119.234px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-[31px] not-italic text-[12px] text-nowrap text-white top-[4px]">5 GÜN KALDI</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-[25px] top-[25px] w-[400.5px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[25px] left-[25px] top-[69px] w-[400.5px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[25px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2px]">Sprint Odak Noktası</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.5px] opacity-80 relative shrink-0 w-[100.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[16.5px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-white tracking-[0.55px] uppercase">Tamamlanan</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[100.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white top-[-2px]">12 / 18 Task</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-[100.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[3px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">%66</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex h-[62.5px] items-center justify-between left-[25px] pb-0 pt-px px-0 top-[337.5px] w-[400.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[180px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165 165">
            <path d={svgPaths.p250d2a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 105">
            <path d={svgPaths.p241c200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
            <path d={svgPaths.p23f70b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[293.5px] opacity-10 size-[180px] top-[268px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[94.06px] top-px w-[202.625px]" data-name="Text">
      <p className="[text-underline-position:from-font] decoration-solid font-['Arial:Bold',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[14px] text-nowrap text-white underline">Azure DevOps entegrasyonuna</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[44.781px] opacity-95 overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[14px] text-nowrap text-white top-[-2px]">Takım şu anda</p>
      <Text12 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[14px] text-white top-[-2px] w-[364px]">ve Altyapı Refactoring işlerine odaklanmış durumda.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[235.5px] items-start left-[25px] overflow-clip top-[102px] w-[400.5px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container33() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#ea580c] place-self-stretch relative rounded-[14px] shrink-0 to-[#c2410c]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container27 />
        <Heading />
        <Container30 />
        <Container31 />
        <Container32 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1d59db00} fill="var(--fill-0, #FF9B45)" id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-1px]">Günün Taktikleri</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[32px] relative shrink-0 w-[160.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container34 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[56.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-[10px] not-italic text-[#99a1af] text-[12px] text-nowrap top-[3px]">Bugün</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[65px] relative shrink-0 w-[448.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px pt-0 px-[16px] relative size-full">
        <Container35 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_11_899)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 10H15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 10H1.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V1.66667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 18.3333V15" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_11_899">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#2b7fff] h-[20.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[45.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-nowrap text-white">Focus</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-white h-[22.5px] relative rounded-[8px] shrink-0 w-[30.406px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap">x2</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[352.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[352.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1px]">Complete the two Discovery enhancement subtasks.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 grow h-[47.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container38 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function TacticRow() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-[432.5px]" data-name="TacticRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
        <Container37 />
        <Container39 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#ff9b45] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#ff9b45] h-[20.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[48.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-nowrap text-white">Collab</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-white h-[22.5px] relative rounded-[8px] shrink-0 w-[30.406px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap">x3</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[352.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[352.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1px]">Collaborate with Umut on API structure.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow h-[47.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container41 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function TacticRow1() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-[432.5px]" data-name="TacticRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
        <Container40 />
        <Container42 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pdf995c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 15H12.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 18.3333H11.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#fb2c36] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#fb2c36] h-[20.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[59.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-nowrap text-white">Refactor</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-white h-[22.5px] relative rounded-[8px] shrink-0 w-[30.406px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap">x1</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[352.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text19 />
        <Text20 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[352.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1px]">Clean up the deprecated user components.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 grow h-[47.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container44 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function TacticRow2() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-[432.5px]" data-name="TacticRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
        <Container43 />
        <Container45 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#ff9b45] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[#ff9b45] h-[20.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[52.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-nowrap text-white">Review</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="bg-white h-[22.5px] relative rounded-[8px] shrink-0 w-[30.406px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[9px] py-[3px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap">x5</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[352.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text21 />
        <Text22 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[352.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1px]">Code review for the new dashboard modules.</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow h-[47.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container47 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function TacticRow3() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-[432.5px]" data-name="TacticRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
        <Container46 />
        <Container48 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[448.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between overflow-clip pb-0 pl-[8px] pr-0 pt-[16px] relative rounded-[inherit] size-full">
        <TacticRow />
        <TacticRow1 />
        <TacticRow2 />
        <TacticRow3 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="[grid-area:1_/_2] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container36 />
        <Container49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[925px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full">
        <Container33 />
        <Container50 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6 1.5V4.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 1.5V4.5" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p13693a10} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 7.5H15.75" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[#f3f4f6] text-[15px] text-nowrap top-[-1px]">Aralık 2025</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[106.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon13 />
        <Text23 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <path d={svgPaths.p2ab2d800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <path d={svgPaths.p3ec8f700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[28px] min-h-px min-w-px relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[28px] relative shrink-0 w-[62px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex h-[65px] items-center justify-between left-px pb-px pt-0 px-[16px] top-px w-[448.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[8.41px] w-[59.5px]" data-name="Text">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center tracking-[0.5px] uppercase">Pzt</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[59.5px] top-[8.41px] w-[59.5px]" data-name="Text">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center tracking-[0.5px] uppercase">Sal</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[119px] top-[8.41px] w-[59.5px]" data-name="Text">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center tracking-[0.5px] uppercase">Çar</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[178.5px] top-[8.41px] w-[59.5px]" data-name="Text">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center tracking-[0.5px] uppercase">Per</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[238px] top-[8.41px] w-[59.5px]" data-name="Text">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center tracking-[0.5px] uppercase">Cum</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[297.5px] top-[8.41px] w-[59.5px]" data-name="Text">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center tracking-[0.5px] uppercase">Cmt</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[357px] top-[8.41px] w-[59.5px]" data-name="Text">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px] text-center tracking-[0.5px] uppercase">Paz</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">1</p>
      </div>
    </div>
  );
}

function Container55() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-0 pb-[0.016px] pt-0 px-0 rounded-[10px] top-[35.83px] w-[59.5px]" data-name="Container">
      <Text31 />
      <Container55 />
    </div>
  );
}

function Text32() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">2</p>
      </div>
    </div>
  );
}

function Text33() {
  return <div className="bg-[#2b7fff] rounded-[3.35544e+07px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[59.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[35.83px] w-[59.5px]" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">3</p>
      </div>
    </div>
  );
}

function Container58() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[119px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[35.83px] w-[59.5px]" data-name="Container">
      <Text34 />
      <Container58 />
    </div>
  );
}

function Text35() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">4</p>
      </div>
    </div>
  );
}

function Container60() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[178.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[35.83px] w-[59.5px]" data-name="Container">
      <Text35 />
      <Container60 />
    </div>
  );
}

function Text36() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">5</p>
      </div>
    </div>
  );
}

function Text37() {
  return <div className="bg-[#2b7fff] rounded-[3.35544e+07px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[238px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[35.83px] w-[59.5px]" data-name="Container">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">6</p>
      </div>
    </div>
  );
}

function Container63() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[297.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[35.83px] w-[59.5px]" data-name="Container">
      <Text38 />
      <Container63 />
    </div>
  );
}

function Text39() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">7</p>
      </div>
    </div>
  );
}

function Container65() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[357px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[35.83px] w-[59.5px]" data-name="Container">
      <Text39 />
      <Container65 />
    </div>
  );
}

function Text40() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">8</p>
      </div>
    </div>
  );
}

function Container67() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-0 pb-[0.016px] pt-0 px-0 rounded-[10px] top-[94.66px] w-[59.5px]" data-name="Container">
      <Text40 />
      <Container67 />
    </div>
  );
}

function Text41() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">9</p>
      </div>
    </div>
  );
}

function Container69() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[59.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[94.66px] w-[59.5px]" data-name="Container">
      <Text41 />
      <Container69 />
    </div>
  );
}

function Text42() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">10</p>
      </div>
    </div>
  );
}

function Container71() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[119px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[94.66px] w-[59.5px]" data-name="Container">
      <Text42 />
      <Container71 />
    </div>
  );
}

function Text43() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">11</p>
      </div>
    </div>
  );
}

function Container73() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[178.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[94.66px] w-[59.5px]" data-name="Container">
      <Text43 />
      <Container73 />
    </div>
  );
}

function Text44() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">12</p>
      </div>
    </div>
  );
}

function Text45() {
  return <div className="bg-[#2b7fff] rounded-[3.35544e+07px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[238px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[94.66px] w-[59.5px]" data-name="Container">
      <Text44 />
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">13</p>
      </div>
    </div>
  );
}

function Container76() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container77() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[297.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[94.66px] w-[59.5px]" data-name="Container">
      <Text46 />
      <Container76 />
    </div>
  );
}

function Text47() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">14</p>
      </div>
    </div>
  );
}

function Container78() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[357px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[94.66px] w-[59.5px]" data-name="Container">
      <Text47 />
      <Container78 />
    </div>
  );
}

function Text48() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">15</p>
      </div>
    </div>
  );
}

function Container80() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-0 pb-[0.016px] pt-0 px-0 rounded-[10px] top-[153.48px] w-[59.5px]" data-name="Container">
      <Text48 />
      <Container80 />
    </div>
  );
}

function Text49() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">16</p>
      </div>
    </div>
  );
}

function Container82() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[59.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[153.48px] w-[59.5px]" data-name="Container">
      <Text49 />
      <Container82 />
    </div>
  );
}

function Text50() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">17</p>
      </div>
    </div>
  );
}

function Container84() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[119px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[153.48px] w-[59.5px]" data-name="Container">
      <Text50 />
      <Container84 />
    </div>
  );
}

function Text51() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">18</p>
      </div>
    </div>
  );
}

function Container86() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[178.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[153.48px] w-[59.5px]" data-name="Container">
      <Text51 />
      <Container86 />
    </div>
  );
}

function Text52() {
  return (
    <div className="bg-[#ff9b45] relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">19</p>
      </div>
    </div>
  );
}

function Text53() {
  return <div className="bg-[#ffd6a8] rounded-[3.35544e+07px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[238px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[153.48px] w-[59.5px]" data-name="Container">
      <Text52 />
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">20</p>
      </div>
    </div>
  );
}

function Container89() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[297.5px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[153.48px] w-[59.5px]" data-name="Container">
      <Text54 />
      <Container89 />
    </div>
  );
}

function Text55() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">21</p>
      </div>
    </div>
  );
}

function Container91() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.828px] items-center justify-center left-[357px] pb-[0.016px] pt-0 px-0 rounded-[10px] top-[153.48px] w-[59.5px]" data-name="Container">
      <Text55 />
      <Container91 />
    </div>
  );
}

function Text56() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">22</p>
      </div>
    </div>
  );
}

function Container93() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-0 rounded-[10px] top-[212.31px] w-[59.5px]" data-name="Container">
      <Text56 />
      <Container93 />
    </div>
  );
}

function Text57() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">23</p>
      </div>
    </div>
  );
}

function Container95() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-[59.5px] rounded-[10px] top-[212.31px] w-[59.5px]" data-name="Container">
      <Text57 />
      <Container95 />
    </div>
  );
}

function Text58() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">24</p>
      </div>
    </div>
  );
}

function Text59() {
  return <div className="bg-[#2b7fff] rounded-[3.35544e+07px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-[119px] rounded-[10px] top-[212.31px] w-[59.5px]" data-name="Container">
      <Text58 />
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">25</p>
      </div>
    </div>
  );
}

function Container98() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-[178.5px] rounded-[10px] top-[212.31px] w-[59.5px]" data-name="Container">
      <Text60 />
      <Container98 />
    </div>
  );
}

function Text61() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">26</p>
      </div>
    </div>
  );
}

function Container100() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-[238px] rounded-[10px] top-[212.31px] w-[59.5px]" data-name="Container">
      <Text61 />
      <Container100 />
    </div>
  );
}

function Text62() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">27</p>
      </div>
    </div>
  );
}

function Container102() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-[297.5px] rounded-[10px] top-[212.31px] w-[59.5px]" data-name="Container">
      <Text62 />
      <Container102 />
    </div>
  );
}

function Text63() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">28</p>
      </div>
    </div>
  );
}

function Container104() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-[357px] rounded-[10px] top-[212.31px] w-[59.5px]" data-name="Container">
      <Text63 />
      <Container104 />
    </div>
  );
}

function Text64() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">29</p>
      </div>
    </div>
  );
}

function Container106() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container107() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-0 rounded-[10px] top-[271.16px] w-[59.5px]" data-name="Container">
      <Text64 />
      <Container106 />
    </div>
  );
}

function Text65() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">30</p>
      </div>
    </div>
  );
}

function Container108() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-[59.5px] rounded-[10px] top-[271.16px] w-[59.5px]" data-name="Container">
      <Text65 />
      <Container108 />
    </div>
  );
}

function Text66() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap">31</p>
      </div>
    </div>
  );
}

function Container110() {
  return <div className="h-[4px] shrink-0 w-0" data-name="Container" />;
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[54.844px] items-center justify-center left-[119px] rounded-[10px] top-[271.16px] w-[59.5px]" data-name="Container">
      <Text66 />
      <Container110 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-[326px] left-[17px] top-[82px] w-[416.5px]" data-name="Container">
      <Text24 />
      <Text25 />
      <Text26 />
      <Text27 />
      <Text28 />
      <Text29 />
      <Text30 />
      <Container56 />
      <Container57 />
      <Container59 />
      <Container61 />
      <Container62 />
      <Container64 />
      <Container66 />
      <Container68 />
      <Container70 />
      <Container72 />
      <Container74 />
      <Container75 />
      <Container77 />
      <Container79 />
      <Container81 />
      <Container83 />
      <Container85 />
      <Container87 />
      <Container88 />
      <Container90 />
      <Container92 />
      <Container94 />
      <Container96 />
      <Container97 />
      <Container99 />
      <Container101 />
      <Container103 />
      <Container105 />
      <Container107 />
      <Container109 />
      <Container111 />
    </div>
  );
}

function Container113() {
  return (
    <div className="[grid-area:1_/_1] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container54 />
        <Container112 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p144f51c0} fill="var(--fill-0, #155DFC)" />
            <path d={svgPaths.p144f51c0} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
          <path d={svgPaths.p1e94b080} fill="var(--fill-0, #155DFC)" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-1px]">Toplantılar</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[32px] relative shrink-0 w-[119.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container114 />
        <Text67 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,155,69,0.1)] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[51.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-[26.5px] not-italic text-[#ff9b45] text-[12px] text-center text-nowrap top-[3px] translate-x-[-50%]">Tümü</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-[#18181b] h-[65px] relative shrink-0 w-[448.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px pt-0 px-[16px] relative size-full">
        <Container115 />
        <Button2 />
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[18.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#99a1af] text-[9px] text-nowrap uppercase">ARA</p>
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#ff9b45] text-[16px] text-nowrap top-[-2px]">19</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-[#27272a] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <Text68 />
        <Text69 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[315.5px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] text-nowrap top-[-1px]">oNabu Mid-Daily Standup</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_11_837)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_11_837">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text70() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[80.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon17 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[18px] not-italic text-[#99a1af] text-[11px] text-nowrap top-[-2px]">14:00 - 14:15</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative size-full">
        <Heading1 />
        <Text70 />
      </div>
    </div>
  );
}

function MeetingItem() {
  return (
    <div className="bg-[#fff8f3] h-[74px] relative rounded-[14px] shrink-0 w-[401.5px]" data-name="MeetingItem">
      <div aria-hidden="true" className="absolute border border-[rgba(255,155,69,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container117 />
        <Container118 />
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[18.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#99a1af] text-[9px] text-nowrap uppercase">ARA</p>
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">19</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="bg-[#27272a] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <Text71 />
        <Text72 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[315.5px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#e5e7eb] text-[13px] text-nowrap top-[-1px]">Sprint Review Hazırlık</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_11_837)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_11_837">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text73() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[80.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon18 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[18px] not-italic text-[#99a1af] text-[11px] text-nowrap top-[-2px]">16:30 - 17:30</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative size-full">
        <Heading2 />
        <Text73 />
      </div>
    </div>
  );
}

function MeetingItem1() {
  return (
    <div className="bg-[#18181b] h-[74px] relative rounded-[14px] shrink-0 w-[401.5px]" data-name="MeetingItem">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container119 />
        <Container120 />
      </div>
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[18.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#99a1af] text-[9px] text-nowrap uppercase">ARA</p>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">20</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-[#27272a] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <Text74 />
        <Text75 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[315.5px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#e5e7eb] text-[13px] text-nowrap top-[-1px]">Retrospective</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_11_837)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_11_837">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text76() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[80.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon19 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[18px] not-italic text-[#99a1af] text-[11px] text-nowrap top-[-2px]">10:00 - 11:30</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative size-full">
        <Heading3 />
        <Text76 />
      </div>
    </div>
  );
}

function MeetingItem2() {
  return (
    <div className="bg-[#18181b] h-[74px] relative rounded-[14px] shrink-0 w-[401.5px]" data-name="MeetingItem">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container121 />
        <Container122 />
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[18.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#99a1af] text-[9px] text-nowrap uppercase">ARA</p>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">20</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="bg-[#27272a] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <Text77 />
        <Text78 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[315.5px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#e5e7eb] text-[13px] text-nowrap top-[-1px]">Backend Sync</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_11_837)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_11_837">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text79() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[80.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon20 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[18px] not-italic text-[#99a1af] text-[11px] text-nowrap top-[-2px]">14:00 - 15:00</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative size-full">
        <Heading4 />
        <Text79 />
      </div>
    </div>
  );
}

function MeetingItem3() {
  return (
    <div className="basis-0 bg-[#18181b] grow min-h-px min-w-px relative rounded-[14px] shrink-0 w-[401.5px]" data-name="MeetingItem">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container123 />
        <Container124 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[332px] items-start relative shrink-0 w-full" data-name="Container">
      <MeetingItem />
      <MeetingItem1 />
      <MeetingItem2 />
      <MeetingItem3 />
    </div>
  );
}

function Container126() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[448.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-0 pl-[16px] pr-[31px] pt-[16px] relative rounded-[inherit] size-full">
        <Container125 />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="[grid-area:1_/_2] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container116 />
        <Container126 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container128() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[925px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full">
        <Container113 />
        <Container127 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container51 />
      <Container128 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_11_832)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_11_832">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container130() {
  return (
    <div className="bg-[#f5f3ff] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-1px]">Takım Akışı</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[32px] relative shrink-0 w-[122.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container130 />
        <Heading5 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#fff7ed] h-[28.5px] relative rounded-[3.35544e+07px] shrink-0 w-[93.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[6px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#ff9b45] text-[11px] text-center text-nowrap">Tüm Raporlar</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="bg-[#18181b] h-[69px] relative shrink-0 w-[374px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px pt-0 px-[16px] relative size-full">
        <Container131 />
        <Button3 />
      </div>
    </div>
  );
}

function Text80() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[42.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#99a1af] text-[11px] text-nowrap tracking-[0.55px] uppercase">Bugün</p>
      </div>
    </div>
  );
}

function Container133() {
  return <div className="basis-0 bg-[#e5e7eb] grow h-px min-h-px min-w-px shrink-0" data-name="Container" />;
}

function Container134() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[342px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text80 />
        <Container133 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container135() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffedd5] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-0 not-italic text-[#e5e7eb] text-[12px] text-nowrap top-[-1px]">Özgür Tellal</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px]">14:30</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[33px] relative shrink-0 w-[108.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container135 />
        <Container136 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 1.75H12.25V5.25" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 8.16667L12.25 1.75" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p11263c80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container137 />
      <Icon23 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[-2px]">Daily Raporu Oluşturuldu</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[-1px]">Backend entegrasyonu tamamlandı, testler bekleniyor.</p>
    </div>
  );
}

function ReportCard() {
  return (
    <div className="bg-[#18181b] h-[113.25px] relative rounded-[14px] shrink-0 w-[342px]" data-name="ReportCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container138 />
        <Heading6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_11_806)" id="Icon">
          <path d={svgPaths.p132cf580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_11_806">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container139() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-0 not-italic text-[#e5e7eb] text-[12px] text-nowrap top-[-1px]">Jira Bot</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px]">12:15</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[33px] relative shrink-0 w-[85px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container139 />
        <Container140 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 1.75H12.25V5.25" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 8.16667L12.25 1.75" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p11263c80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container141 />
      <Icon25 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[-2px]">Jira Metrikleri Güncellendi</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[-1px]">Sprint 42 için 3 yeni task eklendi, 2 bug kapatıldı.</p>
    </div>
  );
}

function ReportCard1() {
  return (
    <div className="bg-[#18181b] h-[113.25px] relative rounded-[14px] shrink-0 w-[342px]" data-name="ReportCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container142 />
        <Heading7 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pff358a0} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container143() {
  return (
    <div className="bg-[#f5f3ff] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ede9fe] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-0 not-italic text-[#e5e7eb] text-[12px] text-nowrap top-[-1px]">Agile Coach</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px]">09:45</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[33px] relative shrink-0 w-[108.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container143 />
        <Container144 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 1.75H12.25V5.25" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 8.16667L12.25 1.75" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p11263c80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container145 />
      <Icon27 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[-2px]">Koçluk Notu</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[-1px]">Daily katılımı harikaydı, süre yönetimine dikkat edelim.</p>
    </div>
  );
}

function ReportCard2() {
  return (
    <div className="bg-[#18181b] h-[113.25px] relative rounded-[14px] shrink-0 w-[342px]" data-name="ReportCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container146 />
        <Heading8 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Text81() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[26.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[16.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[11px] tracking-[0.55px] uppercase">Dün</p>
      </div>
    </div>
  );
}

function Container147() {
  return <div className="basis-0 bg-[#e5e7eb] grow h-px min-h-px min-w-px shrink-0" data-name="Container" />;
}

function Container148() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[342px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text81 />
        <Container147 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #EA580C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffedd5] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-0 not-italic text-[#e5e7eb] text-[12px] text-nowrap top-[-1px]">Ahmet Yılmaz</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px]">17:00</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="h-[33px] relative shrink-0 w-[120.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container149 />
        <Container150 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 1.75H12.25V5.25" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 8.16667L12.25 1.75" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p11263c80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container151 />
      <Icon29 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[-2px]">Gün Sonu Raporu</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[-1px]">Frontend componentleri revize edildi.</p>
    </div>
  );
}

function ReportCard3() {
  return (
    <div className="bg-[#18181b] h-[113.25px] relative rounded-[14px] shrink-0 w-[342px]" data-name="ReportCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container152 />
        <Heading9 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_11_806)" id="Icon">
          <path d={svgPaths.p132cf580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_11_806">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container153() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-0 not-italic text-[#e5e7eb] text-[12px] text-nowrap top-[-1px]">System</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[15px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px]">11:20</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[33px] relative shrink-0 w-[82.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container153 />
        <Container154 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 1.75H12.25V5.25" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 8.16667L12.25 1.75" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p11263c80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container155 />
      <Icon31 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[-2px]">Sprint Hedefi Güncellendi</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-[-1px]">Kapsam değişikliği nedeniyle hedef revize edildi.</p>
    </div>
  );
}

function ReportCard4() {
  return (
    <div className="basis-0 bg-[#18181b] grow min-h-px min-w-px relative rounded-[14px] shrink-0 w-[342px]" data-name="ReportCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container156 />
        <Heading10 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[715.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Container134 />
      <ReportCard />
      <ReportCard1 />
      <ReportCard2 />
      <Container148 />
      <ReportCard3 />
      <ReportCard4 />
    </div>
  );
}

function Container158() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[374px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-0 pt-[16px] px-[16px] relative rounded-[inherit] size-full">
        <Container157 />
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.05)] place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container132 />
        <Container158 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container160() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[32px] grid grid-cols-[minmax(0px,_925fr)_minmax(0px,_1fr)] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full">
        <Container129 />
        <Container159 />
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <div className="basis-0 bg-[#09090b] grow min-h-px min-w-px relative shrink-0 w-[1381px]" data-name="TeamPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip pl-[24px] pr-0 py-[24px] relative rounded-[inherit] size-full">
        <Container26 />
        <Container160 />
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1026px] items-start left-0 overflow-clip top-0 w-[1381px]" data-name="Container">
      <TeamPage />
    </div>
  );
}

function Container162() {
  return (
    <div className="basis-0 grow h-[1026px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container161 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#09090b] content-stretch flex h-[1026px] items-start left-0 overflow-clip pl-[240px] pr-0 py-0 top-0 w-[1621px]" data-name="App">
      <Container162 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute h-[22px] left-[20px] overflow-clip top-[25px] w-[110px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 22">
        <g id="Group 1171275221">
          <path d={svgPaths.p2680a400} fill="var(--fill-0, #F4994B)" id="Vector" />
          <path d={svgPaths.pa1619c0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p6a2d400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3cd8f300} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1e85e00} fill="var(--fill-0, #F4994B)" id="Vector_5" />
          <path d={svgPaths.p1fe60100} fill="var(--fill-0, #F4994B)" id="Vector_6" />
          <path d={svgPaths.p88e41c0} fill="var(--fill-0, #F4994B)" id="Vector_7" />
          <path d={svgPaths.p2d5bc800} fill="var(--fill-0, #F4994B)" id="Vector_8" />
          <path d={svgPaths.p89b8f30} fill="var(--fill-0, #F4994B)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group">
      <Icon32 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pf3beb80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_62.5%_12.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 16.6667">
            <path d="M0.833333 0.833333V15.8333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_33.33%_37.5%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-33.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 6.66667">
            <path d={svgPaths.p1b3f8780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[187px] pb-0 pt-[6px] px-[6px] rounded-[10px] size-[32px] top-[20px]" data-name="Button">
      <Icon33 />
    </div>
  );
}

function Container163() {
  return (
    <div className="h-[72px] relative shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group />
        <Button4 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2cfdb900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17f25d40} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15fb5e00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container164() {
  return (
    <div className="bg-gradient-to-b from-[#ffb74d] relative rounded-[10px] shrink-0 size-[32px] to-[#ff9b45]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="basis-0 grow h-[16.25px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.25px] left-[52.5px] not-italic text-[13px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%]">oNabu mid-Daily</p>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="h-[32px] relative shrink-0 w-[148.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Container164 />
        <Text82 />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#27272a] h-[50px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9px] py-px relative size-full">
          <Container165 />
          <Icon35 />
        </div>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5004 16.5004">
            <path d={svgPaths.p97d7700} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 4.5">
            <path d="M0.75 0.75V3.75" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1.5">
            <path d="M3.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 3">
            <path d="M0.75 0.75V2.25" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.75px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1.5">
            <path d="M2.25 0.75H0.75" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">Chat AI.gility</p>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container166 />
          <Text83 />
        </div>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5">
            <path d={svgPaths.p3fd2d700} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p28bf0de0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[33.33%] right-[66.67%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 3">
            <path d="M0.75 2.25V0.75" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-1/2 top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 4.5">
            <path d="M0.75 3.75V0.75" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[66.67%] right-[33.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 6">
            <path d="M0.75 5.25V0.75" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">Jira Analizi</p>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container167 />
          <Text84 />
        </div>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <MenuItem />
      <MenuItem1 />
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[18px] relative shrink-0 w-[130.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-[65px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-[-1px] tracking-[0.6px] translate-x-[-50%] uppercase">Verimlilik Merkezi</p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text85 />
      <Icon38 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <path d={svgPaths.p1aa9a240} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
            <path d={svgPaths.p16c95800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">Ben</p>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container169 />
          <Text86 />
        </div>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <path d={svgPaths.p1aa9a240} id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
            <path d={svgPaths.p16c95800} id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75018 5.90268">
            <path d={svgPaths.p27cbeb00} id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75606 7.31286">
            <path d={svgPaths.p15b68200} id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon40 />
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#ff9b45] text-[14px] text-nowrap top-[-1px]">Takımım</p>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="bg-[rgba(255,155,69,0.1)] h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container170 />
          <Text87 />
        </div>
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
            <path d={svgPaths.p37c15d80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p93ea200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_29.17%_13.91%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-27.31%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4.2465">
            <path d={svgPaths.p1be8a5c0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon41 />
      </div>
    </div>
  );
}

function Text88() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">Kişilerim</p>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container171 />
          <Text88 />
        </div>
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_33.33%_16.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 15">
            <path d={svgPaths.p2a098880} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 12">
            <path d={svgPaths.pa019980} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon42 />
      </div>
    </div>
  );
}

function Text89() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">Takımlarım</p>
      </div>
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container172 />
          <Text89 />
        </div>
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_12.5%_12.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p93ea200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_62.5%_62.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p93ea200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-[37.5%] top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 10.5">
            <path d={svgPaths.p393377a0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon43 />
      </div>
    </div>
  );
}

function Text90() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">Bağımlılık Haritası</p>
      </div>
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container173 />
          <Text90 />
        </div>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[193px] items-start relative shrink-0 w-full" data-name="Container">
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem5 />
      <MenuItem6 />
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[227px] items-start relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Container174 />
    </div>
  );
}

function Text91() {
  return (
    <div className="h-[18px] relative shrink-0 w-[114.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[18px] left-[57px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-[-1px] tracking-[0.6px] translate-x-[-50%] uppercase">{`Öğren & Uygula`}</p>
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text91 />
      <Icon44 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
            <path d="M0.75 0.75V11.25" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15">
            <path d={svgPaths.p338721f2} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon45 />
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">{`Öğren & Uygula`}</p>
      </div>
    </div>
  );
}

function MenuItem7() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container176 />
          <Text92 />
        </div>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[13.48%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.7%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.6466">
            <path d={svgPaths.p1a3a3780} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.02%_37.5%_13.48%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12.75">
            <path d="M0.75 0.75V12" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.48%_62.5%_24.02%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12.75">
            <path d="M0.75 0.75V12" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon46 />
      </div>
    </div>
  );
}

function Text93() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">Yolculuğum</p>
      </div>
    </div>
  );
}

function MenuItem8() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container177 />
          <Text93 />
        </div>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <MenuItem7 />
      <MenuItem8 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[110px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Container178 />
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[445px] items-start relative shrink-0 w-full" data-name="Container">
      <Container168 />
      <Container175 />
      <Container179 />
    </div>
  );
}

function Container181() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[16px] py-0 relative rounded-[inherit] size-full">
        <Button5 />
        <Container180 />
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5025">
            <path d={svgPaths.p15617df0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon47 />
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[-1px]">Admin Paneli</p>
      </div>
    </div>
  );
}

function MenuItem9() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container182 />
          <Text94 />
        </div>
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="bg-[#364153] relative rounded-[3.35544e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e5e7eb] text-[10px] text-center text-nowrap">ÖT</p>
      </div>
    </div>
  );
}

function Text95() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#f3f4f6] text-[13px] text-nowrap top-[-1px]">Özgür Tellal</p>
    </div>
  );
}

function Text96() {
  return (
    <div className="content-stretch flex h-[15px] items-start overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[10px]">Company Admin</p>
    </div>
  );
}

function Container184() {
  return (
    <div className="basis-0 grow h-[34.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text95 />
        <Text96 />
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1eaef80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[42.5px] relative rounded-[10px] shrink-0 w-[207px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[4px] py-0 relative size-full">
        <Container183 />
        <Container184 />
        <Icon48 />
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex h-[51.5px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <Button8 />
    </div>
  );
}

function Container186() {
  return (
    <div className="bg-[#18181b] h-[129.5px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[17px] px-[16px] relative size-full">
        <MenuItem9 />
        <Container185 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#18181b] content-stretch flex flex-col h-[1026px] items-start left-0 pl-0 pr-px py-0 top-0 w-[240px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container163 />
      <Container181 />
      <Container186 />
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1a2f0b40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 15H10.0083" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-[#18181b] content-stretch flex items-center justify-center left-[1549px] p-px rounded-[3.35544e+07px] size-[48px] top-[954px]" data-name="App">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Icon49 />
    </div>
  );
}

export default function ONabuEkranGuncellemeleri() {
  return (
    <div 
      className="bg-[#0a0a0a] relative" 
      data-name="oNabu Ekran Güncellemeleri"
      style={{ width: '1621px', height: '1026px' }}
    >
      {/* Sidebar - İlk katman (sol menü) - havadan soldan geliyor */}
      <motion.div
        initial={{ opacity: 0, x: -80, y: -40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.0, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <Sidebar />
      </motion.div>
      
      {/* App - İkinci katman (üst ve orta içerik) - havadan yukarıdan geliyor */}
      <motion.div
        initial={{ opacity: 0, y: -80, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <App />
      </motion.div>
      
      {/* App1 - Üçüncü katman (sağ alt buton) - havadan aşağıdan geliyor */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <App1 />
      </motion.div>
    </div>
  );
}