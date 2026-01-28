import svgPaths from "./svg-o5ks59rksi";

function Text() {
  return (
    <div className="h-[15px] relative shrink-0 w-[38.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] text-nowrap top-[0.5px] tracking-[0.6172px] uppercase">Score</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[179.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text />
        <Container />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[179.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#9810fa] text-[18px] text-nowrap top-[0.5px] tracking-[-0.8895px]">3.30</p>
      </div>
    </div>
  );
}

function KpiCard() {
  return (
    <div className="absolute bg-[#18181b] h-[80px] left-0 rounded-[14px] top-0 w-[209.594px]" data-name="KPICard">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip pb-px pl-[15px] pr-px pt-[15px] relative rounded-[inherit] size-full">
        <Container1 />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[79.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] text-nowrap top-[0.5px] tracking-[0.6172px] uppercase">Throughput</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[179.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text1 />
        <Container3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[179.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#f54900] text-[18px] text-nowrap top-[0.5px] tracking-[-0.8895px]">13.00</p>
      </div>
    </div>
  );
}

function KpiCard1() {
  return (
    <div className="absolute bg-[#18181b] h-[80px] left-[233.59px] rounded-[14px] top-0 w-[209.602px]" data-name="KPICard">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip pb-px pl-[15px] pr-px pt-[15px] relative rounded-[inherit] size-full">
        <Container4 />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.758px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] text-nowrap top-[0.5px] tracking-[0.6172px] uppercase">Avg. Cycle</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[179.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text2 />
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[27px] relative shrink-0 w-[179.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#155dfc] text-[18px] text-nowrap top-[0.5px] tracking-[-0.8895px]">5.00</p>
      </div>
    </div>
  );
}

function KpiCard2() {
  return (
    <div className="absolute bg-[#18181b] h-[80px] left-[467.2px] rounded-[14px] top-0 w-[209.602px]" data-name="KPICard">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip pb-px pl-[15px] pr-px pt-[15px] relative rounded-[inherit] size-full">
        <Container7 />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[64.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] text-nowrap top-[0.5px] tracking-[0.6172px] uppercase">Happiness</p>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-[#99a1af] h-[2px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[179.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text3 />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[27px] relative shrink-0 w-[179.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#d08700] text-[18px] text-nowrap top-[0.5px] tracking-[-0.8895px]">78.00</p>
      </div>
    </div>
  );
}

function KpiCard3() {
  return (
    <div className="absolute bg-[#18181b] h-[80px] left-[700.8px] rounded-[14px] top-0 w-[209.602px]" data-name="KPICard">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip pb-px pl-[15px] pr-px pt-[15px] relative rounded-[inherit] size-full">
        <Container11 />
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[57.539px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] text-nowrap top-[0.5px] tracking-[0.6172px] uppercase">Speaking</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[18px] relative rounded-[4px] shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[18px] relative shrink-0 w-[179.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text4 />
        <Container13 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[27px] relative shrink-0 w-[179.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#e7000b] text-[18px] text-nowrap top-[0.5px] tracking-[-0.8895px]">3.30</p>
      </div>
    </div>
  );
}

function KpiCard4() {
  return (
    <div className="absolute bg-[#18181b] h-[80px] left-[934.4px] rounded-[14px] top-0 w-[209.602px]" data-name="KPICard">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip pb-px pl-[15px] pr-px pt-[15px] relative rounded-[inherit] size-full">
        <Container14 />
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <KpiCard />
        <KpiCard1 />
        <KpiCard2 />
        <KpiCard3 />
        <KpiCard4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[28px] relative rounded-[16px] shrink-0 w-[108.703px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[13px] not-italic text-[12px] text-nowrap text-white top-[6px]">KİŞİSEL ÖZET</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[13px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[28px] relative rounded-[16px] shrink-0 w-[94.961px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[31px] not-italic text-[12px] text-nowrap text-white top-[6px]">GÜNCEL</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-[25px] top-[25px] w-[306px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[25px] left-[25px] top-[69px] w-[306px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[25px] left-0 not-italic text-[20px] text-nowrap text-white top-[-0.5px] tracking-[-0.4492px]">Günlük Durum</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.5px] opacity-80 relative shrink-0 w-[88.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[11px] text-nowrap text-white top-[0.5px] tracking-[0.6145px] uppercase">Tamamlanan</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[88.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white top-[0.5px] tracking-[-0.4395px]">1 / 6 Task</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-[88.195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[3px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">%17</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[62.5px] items-center justify-between left-[25px] pb-0 pt-px px-0 top-[222.5px] w-[306px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[180px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.25 161.25">
            <path d={svgPaths.p353db280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="11.25" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.25 101.25">
            <path d={svgPaths.p1b58b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="11.25" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.25 41.25">
            <path d={svgPaths.p3344a100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="11.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[195px] opacity-10 size-[180px] top-[149px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[114.3px] top-[2.5px] w-[50.141px]" data-name="Text">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Bold',sans-serif] font-bold leading-[22.4px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] underline">6 tasks</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[38.898px] left-0 top-[24.9px] w-[302.594px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[22.4px] left-0 not-italic text-[#ffdf20] text-[14px] top-[-2px] tracking-[-0.1504px] w-[303px]">payment gateway integration</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[89.594px] opacity-95 overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.4px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] tracking-[-0.1504px]">Ethan Clarke has</p>
      <Text9 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.4px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] w-[282px]">assigned in Code Cosmos. Focus today is on</p>
      <Text10 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.4px] left-0 not-italic text-[14px] text-white top-[45.3px] tracking-[-0.1504px] w-[300px]">and finalizing current in-progress work.</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[120.5px] items-start left-[25px] overflow-clip top-[102px] w-[306px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#4f46e5] place-self-stretch relative rounded-[14px] shrink-0 to-[#3730a3]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container17 />
        <Heading />
        <Container20 />
        <Container21 />
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon6() {
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

function Container24() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-0.5px] tracking-[-0.2344px]">Benim Taktiklerim</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[32px] relative shrink-0 w-[175.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container24 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[26px] relative rounded-[1.67772e+07px] shrink-0 w-[58.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[10px] not-italic text-[#99a1af] text-[12px] text-nowrap top-[5px]">Bugün</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[65px] relative shrink-0 w-[354px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px pt-0 px-[16px] relative size-full">
        <Container25 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4_713)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 10H15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 10H1.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V1.66667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 18.3333V15" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_4_713">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#2b7fff] h-[20.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[49.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[8px] not-italic text-[11px] text-nowrap text-white top-[2.5px] tracking-[0.0645px]">Focus</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-white h-[22.5px] relative rounded-[8px] shrink-0 w-[44.094px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px]">High</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[258px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-white top-0 tracking-[-0.1504px] w-[310px]">Prioritize feature development implementation.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 grow h-[47.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container28 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function TacticRow() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-[338px]" data-name="TacticRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
        <Container27 />
        <Container29 />
      </div>
    </div>
  );
}

function Icon8() {
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

function Container30() {
  return (
    <div className="bg-[#ff9b45] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#ff9b45] h-[20.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[51.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[8px] not-italic text-[11px] text-nowrap text-white top-[2.5px] tracking-[0.0645px]">Collab</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-white h-[22.5px] relative rounded-[8px] shrink-0 w-[41.945px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px]">Med</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[258px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-white top-0 tracking-[-0.1504px] w-[298px]">Coordinate with Rajesh to debug data issues.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow h-[47.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container31 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function TacticRow1() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-[338px]" data-name="TacticRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
        <Container30 />
        <Container32 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#fb2c36] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#fb2c36] h-[20.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[46.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[8px] not-italic text-[11px] text-nowrap text-white top-[2.5px] tracking-[0.0645px]">Defer</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-white h-[22.5px] relative rounded-[8px] shrink-0 w-[40.367px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px]">Low</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[258px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 tracking-[-0.1504px]">Defer memory usage improvements.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 grow h-[47.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container34 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function TacticRow2() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-[338px]" data-name="TacticRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
        <Container33 />
        <Container35 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4_682)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p240d7000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25499600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_4_682">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#ff9b45] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#ff9b45] h-[20.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[55.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[8px] not-italic text-[11px] text-nowrap text-white top-[2.5px] tracking-[0.0645px]">Review</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-white h-[22.5px] relative rounded-[8px] shrink-0 w-[44.094px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px]">High</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text19 />
        <Text20 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[258px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-white top-0 tracking-[-0.1504px] w-[319px]">Promote review habits to enhance collaboration.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow h-[47.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container37 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function TacticRow3() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-[338px]" data-name="TacticRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
        <Container36 />
        <Container38 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between overflow-clip pb-0 pl-[8px] pr-0 pt-[16px] relative rounded-[inherit] size-full">
        <TacticRow />
        <TacticRow1 />
        <TacticRow2 />
        <TacticRow3 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="[grid-area:1_/_2] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container26 />
        <Container39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full">
        <Container23 />
        <Container40 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_704)" id="Icon">
          <g id="Vector">
            <path d={svgPaths.p3227a460} fill="var(--fill-0, #FF9B45)" />
            <path d={svgPaths.p3227a460} stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4_704">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-0.5px] tracking-[-0.2344px]">Work Metrics</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[32px] relative shrink-0 w-[141.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container42 />
        <Text21 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="basis-0 grow h-[16.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.5px] tracking-[0.0645px]">Genel Bakış</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[28.5px] relative rounded-[10px] shrink-0 w-[106.82px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
        <Text22 />
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#18181b] content-stretch flex h-[65px] items-center justify-between left-px pb-px pt-0 px-[16px] top-px w-[354px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.54%_28.63%_22.93%_28.63%]" data-name="Group">
      <div className="absolute inset-[0_-0.11%_-0.21%_-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144.775 137.689">
          <g id="Group">
            <path d="M72.3873 75.95V0" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.peeb5800} id="Vector_2" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p1be8cd80} id="Vector_3" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p1efac80} id="Vector_4" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p29abf600} id="Vector_5" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[16.54%_28.63%_22.93%_28.63%]" data-name="Group">
      <div className="absolute inset-[-0.45%_-0.41%_-0.36%_-0.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145.641 138.513">
          <g id="Group">
            <path d={svgPaths.p3a3f9c00} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p2bb96e80} id="Vector_2" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p1e3c3300} id="Vector_3" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[16.54%_28.63%_22.93%_28.63%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.61%_41.27%_83.46%_41.27%]" data-name="Group">
      <div className="absolute bottom-[83.46%] left-1/2 right-1/2 top-[13.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[8.61%_41.27%_86.1%_41.27%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-center text-nowrap">Throughput</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[34.17%_10.11%_60.34%_71.37%]" data-name="Group">
      <div className="absolute inset-[38.57%_26.38%_60.34%_71.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[34.17%_10.11%_60.55%_73.62%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap">Cycle Time</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[75.51%_19.72%_19.2%_63.21%]" data-name="Group">
      <div className="absolute inset-[77.07%_35.4%_20.08%_63.21%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[75.51%_19.72%_19.2%_64.6%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap">Happiness</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[75.51%_63.21%_19.2%_18.24%]" data-name="Group">
      <div className="absolute inset-[77.07%_63.21%_20.08%_35.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[75.51%_64.6%_19.2%_18.24%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap text-right">Attendance</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[34.17%_71.37%_60.34%_12.77%]" data-name="Group">
      <div className="absolute inset-[38.57%_71.37%_60.34%_26.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[34.17%_73.62%_60.55%_12.77%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap text-right">Speaking</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[8.61%_10.11%_19.2%_12.77%]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[8.61%_10.11%_19.2%_12.77%]" data-name="Group">
      <div className="absolute inset-[16.54%_28.63%_22.93%_28.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[23.23%_36.04%_32.13%_37.89%]" data-name="Group">
      <div className="absolute inset-[-2.15%_-2.03%_-1.6%_-1.84%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.5322 105.115">
          <g id="Group">
            <path d={svgPaths.p2309d8b0} fill="var(--fill-0, #FF9B45)" fillOpacity="0.4" id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[23.23%_36.04%_32.13%_37.89%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[25.46%_31.48%_26.54%_37.18%]" data-name="Group">
      <div className="absolute inset-[-1.13%_-1.14%_-1.04%_-1.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.254 111.324">
          <g id="Group">
            <path d={svgPaths.p252e5400} fill="var(--fill-0, #3B82F6)" fillOpacity="0.1" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[25.46%_31.48%_26.54%_37.18%]" data-name="Group">
      <Group12 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[227px] left-0 overflow-clip top-0 w-[338px]" data-name="Surface">
      <Group2 />
      <Group9 />
      <Group11 />
      <Group13 />
    </div>
  );
}

function RadarChart() {
  return (
    <div className="absolute h-[227px] left-[9px] top-[74px] w-[338px]" data-name="RadarChart">
      <Surface />
    </div>
  );
}

function RadarMetricsCard() {
  return (
    <div className="[grid-area:1_/_1] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="RadarMetricsCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container45 />
        <RadarChart />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_704)" id="Icon">
          <g id="Vector">
            <path d={svgPaths.p3227a460} fill="var(--fill-0, #FF9B45)" />
            <path d={svgPaths.p3227a460} stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4_704">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#fff7ed] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-0.5px] tracking-[-0.2344px]">Meeting Metrics</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[32px] relative shrink-0 w-[162.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container46 />
        <Text23 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="basis-0 grow h-[16.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.5px] tracking-[0.0645px]">Genel Bakış</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[28.5px] relative rounded-[10px] shrink-0 w-[106.82px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
        <Text24 />
        <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Icon14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#18181b] content-stretch flex h-[65px] items-center justify-between left-px pb-px pt-0 px-[16px] top-px w-[354px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[16.54%_28.09%_19.86%_28.09%]" data-name="Group">
      <div className="absolute inset-[0_-0.08%_-0.15%_-0.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.314 144.596">
          <g id="Group">
            <path d="M74.157 75.95V0" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M74.157 75.95L133.537 28.596" id="Vector_2" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p2a7c3420} id="Vector_3" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p30586b20} id="Vector_4" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p3ec74920} id="Vector_5" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p39a5bc80} id="Vector_6" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M74.157 75.95L14.7769 28.596" id="Vector_7" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[16.54%_28.09%_19.86%_28.09%]" data-name="Group">
      <div className="absolute inset-[-0.38%_-0.37%_-0.35%_-0.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.174 145.434">
          <g id="Group">
            <path d={svgPaths.p37283e00} id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.pd052400} id="Vector_2" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d={svgPaths.p1de26900} id="Vector_3" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[16.54%_28.09%_19.86%_28.09%]" data-name="Group">
      <Group14 />
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[8.61%_41.86%_83.46%_41.86%]" data-name="Group">
      <div className="absolute bottom-[83.46%] left-1/2 right-1/2 top-[13.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[8.61%_41.86%_86.1%_41.86%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-center text-nowrap">Sprint Goal</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[22.54%_11.65%_70.86%_67.57%]" data-name="Group">
      <div className="absolute inset-[26.94%_30.58%_70.86%_67.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[22.54%_11.65%_72.18%_69.42%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap">Commitment</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[53.82%_8.92%_40.89%_71.91%]" data-name="Group">
      <div className="absolute inset-[57.45%_25.79%_41.77%_71.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[53.82%_8.92%_40.89%_74.21%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap">Tasks Done</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[78.91%_16.15%_15.8%_59.75%]" data-name="Group">
      <div className="absolute inset-[80.14%_39.22%_16.68%_59.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[78.91%_16.15%_15.8%_60.78%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap">Communication</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[78.91%_59.75%_15.8%_19.4%]" data-name="Group">
      <div className="absolute inset-[80.14%_59.75%_16.68%_39.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[78.91%_60.78%_15.8%_19.4%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap text-right">Collaboration</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[53.82%_71.91%_40.89%_15.13%]" data-name="Group">
      <div className="absolute inset-[57.45%_71.91%_41.77%_25.79%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[53.82%_74.21%_40.89%_15.13%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap text-right">Quality</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[22.54%_67.57%_70.86%_12.24%]" data-name="Group">
      <div className="absolute inset-[26.94%_67.57%_70.86%_30.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[22.54%_69.42%_72.18%_12.24%] leading-[normal] not-italic text-[#6b7280] text-[10px] text-nowrap text-right">Engagement</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[8.61%_8.92%_15.8%_12.24%]" data-name="Group">
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[8.61%_8.92%_15.8%_12.24%]" data-name="Group">
      <div className="absolute inset-[16.54%_28.09%_19.86%_28.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[18.77%_34.77%_21.86%_30.28%]" data-name="Group">
      <div className="absolute inset-[-1.35%_-1.37%_-1.26%_-1.53%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.532 138.273">
          <g id="Group">
            <path d={svgPaths.pb79a760} fill="var(--fill-0, #FF9B45)" fillOpacity="0.4" id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[18.77%_34.77%_21.86%_30.28%]" data-name="Group">
      <Group26 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[23.23%_31.01%_27.89%_32.47%]" data-name="Group">
      <div className="absolute inset-[-1.08%_-0.99%_-0.94%_-0.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.818 113.184">
          <g id="Group">
            <path d={svgPaths.pfc60c00} fill="var(--fill-0, #3B82F6)" fillOpacity="0.1" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[23.23%_31.01%_27.89%_32.47%]" data-name="Group">
      <Group28 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute h-[227px] left-0 overflow-clip top-0 w-[338px]" data-name="Surface">
      <Group16 />
      <Group25 />
      <Group27 />
      <Group29 />
    </div>
  );
}

function RadarChart1() {
  return (
    <div className="absolute h-[227px] left-[9px] top-[74px] w-[338px]" data-name="RadarChart">
      <Surface1 />
    </div>
  );
}

function RadarMetricsCard1() {
  return (
    <div className="[grid-area:1_/_2] bg-[#18181b] place-self-stretch relative rounded-[14px] shrink-0" data-name="RadarMetricsCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container49 />
        <RadarChart1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full">
        <RadarMetricsCard />
        <RadarMetricsCard1 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container41 />
      <Container50 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_613)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4_613">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[22.5px] left-0 not-italic text-[15px] text-nowrap text-white top-[-0.5px] tracking-[-0.2344px]">Jira Görevlerim</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[32px] relative shrink-0 w-[153.742px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container52 />
        <Heading2 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p39a1e780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3986d480} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b624e00} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#18181b] h-[69px] relative shrink-0 w-[374px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px pt-0 px-[16px] relative size-full">
        <Container53 />
        <Button />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[82.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.5px] tracking-[0.6145px] uppercase">In Progress</p>
      </div>
    </div>
  );
}

function Container55() {
  return <div className="basis-0 bg-[#e5e7eb] grow h-px min-h-px min-w-px shrink-0" data-name="Container" />;
}

function StatusDivider() {
  return (
    <div className="h-[32.5px] relative shrink-0 w-[342px]" data-name="StatusDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text25 />
        <Container55 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="bg-[#f0fdf4] h-[22.5px] relative rounded-[8px] shrink-0 w-[56.586px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#00a63e] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px] uppercase">story</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[22px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[6px] not-italic text-[#99a1af] text-[12px] text-nowrap top-[3px]">COC-17</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[123.023px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text26 />
        <Text27 />
      </div>
    </div>
  );
}

function Icon17() {
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

function Container57() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Icon17 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[0.5px] tracking-[-0.0762px]">Business requirements documentation</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px">For payment gateway integration.</p>
    </div>
  );
}

function JiraCard() {
  return (
    <div className="bg-[#18181b] h-[102.75px] relative rounded-[14px] shrink-0 w-[342px]" data-name="JiraCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container57 />
        <Heading1 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="bg-[#f0fdf4] h-[22.5px] relative rounded-[8px] shrink-0 w-[56.586px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#00a63e] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px] uppercase">story</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[22px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[6px] not-italic text-[#99a1af] text-[12px] text-nowrap top-[3px]">COC-19</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[123.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text28 />
        <Text29 />
      </div>
    </div>
  );
}

function Icon18() {
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

function Container59() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Icon18 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[0.5px] tracking-[-0.0762px]">Stakeholder requirements gathering</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px">For customer onboarding process.</p>
    </div>
  );
}

function JiraCard1() {
  return (
    <div className="bg-[#18181b] h-[102.75px] relative rounded-[14px] shrink-0 w-[342px]" data-name="JiraCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container59 />
        <Heading3 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[38.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.5px] tracking-[0.6145px] uppercase">To Do</p>
      </div>
    </div>
  );
}

function Container60() {
  return <div className="basis-0 bg-[#e5e7eb] grow h-px min-h-px min-w-px shrink-0" data-name="Container" />;
}

function StatusDivider1() {
  return (
    <div className="h-[32.5px] relative shrink-0 w-[342px]" data-name="StatusDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text30 />
        <Container60 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="bg-[#fef2f2] h-[22.5px] relative rounded-[8px] shrink-0 w-[42.547px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffe2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#e7000b] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px] uppercase">bug</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[22px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[6px] not-italic text-[#99a1af] text-[12px] text-nowrap top-[3px]">COC-15</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[109.695px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text31 />
        <Text32 />
      </div>
    </div>
  );
}

function Icon19() {
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

function Container62() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Icon19 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[0.5px] tracking-[-0.0762px]">Sprint review and planning</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px">Prepare slides for Sprint 4.</p>
    </div>
  );
}

function JiraCard2() {
  return (
    <div className="bg-[#18181b] h-[102.75px] relative rounded-[14px] shrink-0 w-[342px]" data-name="JiraCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container62 />
        <Heading4 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="bg-[#fef2f2] h-[22.5px] relative rounded-[8px] shrink-0 w-[42.547px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ffe2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#e7000b] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px] uppercase">bug</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[22px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[6px] not-italic text-[#99a1af] text-[12px] text-nowrap top-[3px]">COC-18</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[110.055px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text33 />
        <Text34 />
      </div>
    </div>
  );
}

function Icon20() {
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

function Container64() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Icon20 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[0.5px] tracking-[-0.0762px]">User acceptance criteria missing</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px">For mobile app features.</p>
    </div>
  );
}

function JiraCard3() {
  return (
    <div className="bg-[#18181b] h-[102.75px] relative rounded-[14px] shrink-0 w-[342px]" data-name="JiraCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container64 />
        <Heading5 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[34.633px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.5px] tracking-[0.6145px] uppercase">Done</p>
      </div>
    </div>
  );
}

function Container65() {
  return <div className="basis-0 bg-[#e5e7eb] grow h-px min-h-px min-w-px shrink-0" data-name="Container" />;
}

function StatusDivider2() {
  return (
    <div className="h-[32.5px] relative shrink-0 w-[342px]" data-name="StatusDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Text35 />
        <Container65 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="bg-[#eff6ff] h-[22.5px] relative rounded-[8px] shrink-0 w-[47.977px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[9px] not-italic text-[#155dfc] text-[11px] text-nowrap top-[3.5px] tracking-[0.0645px] uppercase">task</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[22px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[6px] not-italic text-[#99a1af] text-[12px] text-nowrap top-[3px]">COC-16</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[115.367px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text36 />
        <Text37 />
      </div>
    </div>
  );
}

function Icon21() {
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

function Container67() {
  return (
    <div className="content-stretch flex h-[22.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Icon21 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[16.25px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.25px] left-0 not-italic text-[13px] text-nowrap text-white top-[0.5px] tracking-[-0.0762px]">Banking system architecture</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px">Initial planning completed.</p>
    </div>
  );
}

function JiraCard4() {
  return (
    <div className="basis-0 bg-[#18181b] grow min-h-px min-w-px relative rounded-[14px] shrink-0 w-[342px]" data-name="JiraCard">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container67 />
        <Heading6 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[723.25px] items-start relative shrink-0 w-full" data-name="Container">
      <StatusDivider />
      <JiraCard />
      <JiraCard1 />
      <StatusDivider1 />
      <JiraCard2 />
      <JiraCard3 />
      <StatusDivider2 />
      <JiraCard4 />
    </div>
  );
}

function Container69() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[374px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-0 pt-[16px] px-[16px] relative rounded-[inherit] size-full">
        <Container68 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.05)] place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container54 />
        <Container69 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container71() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[32px] grid grid-cols-[minmax(0px,_736fr)_minmax(0px,_1fr)] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full">
        <Container51 />
        <Container70 />
      </div>
    </div>
  );
}

function BenPage() {
  return (
    <div className="basis-0 bg-[#09090b] grow min-h-px min-w-px relative shrink-0 w-[1192px]" data-name="BenPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip pl-[24px] pr-0 py-[24px] relative rounded-[inherit] size-full">
        <Container16 />
        <Container71 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col h-[796px] items-start left-0 overflow-clip top-0 w-[1192px]" data-name="Container">
      <BenPage />
    </div>
  );
}

function Container73() {
  return (
    <div className="basis-0 grow h-[796px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container72 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#09090b] content-stretch flex h-[796px] items-start left-0 overflow-clip pl-[240px] pr-0 py-0 top-0 w-[1432px]" data-name="App">
      <Container73 />
    </div>
  );
}

function Icon22() {
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

function Group30() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group">
      <Icon22 />
    </div>
  );
}

function Icon23() {
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

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[187px] pb-0 pt-[6px] px-[6px] rounded-[10px] size-[32px] top-[20px]" data-name="Button">
      <Icon23 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[72px] relative shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group30 />
        <Button1 />
      </div>
    </div>
  );
}

function Icon24() {
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

function Container75() {
  return (
    <div className="bg-gradient-to-b from-[#ffb74d] relative rounded-[10px] shrink-0 size-[32px] to-[#ff9b45]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="basis-0 grow h-[16.25px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.25px] left-[54.5px] not-italic text-[13px] text-center text-nowrap text-white top-[0.5px] tracking-[-0.0762px] translate-x-[-50%]">oNabu mid-Daily</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[32px] relative shrink-0 w-[151.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Container75 />
        <Text38 />
      </div>
    </div>
  );
}

function Icon25() {
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

function Button2() {
  return (
    <div className="bg-[#27272a] h-[50px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9px] py-px relative size-full">
          <Container76 />
          <Icon25 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
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

function Container77() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Chat AI.gility</p>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container77 />
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Icon27() {
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

function Container78() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Jira Analizi</p>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container78 />
          <Text40 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <MenuItem />
      <MenuItem1 />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[18px] relative shrink-0 w-[138.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[69px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-px tracking-[0.6px] translate-x-[-50%] uppercase">Verimlilik Merkezi</p>
      </div>
    </div>
  );
}

function Icon28() {
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

function Button3() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text41 />
      <Icon28 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <path d={svgPaths.p1aa9a240} id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
            <path d={svgPaths.p16c95800} id="Vector" stroke="var(--stroke-0, #FF9B45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#ff9b45] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Ben</p>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-[rgba(255,155,69,0.1)] h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container80 />
          <Text42 />
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <path d={svgPaths.p1aa9a240} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
            <path d={svgPaths.p16c95800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75018 5.90268">
            <path d={svgPaths.p27cbeb00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75606 7.31286">
            <path d={svgPaths.p15b68200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Takımım</p>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container81 />
          <Text43 />
        </div>
      </div>
    </div>
  );
}

function Icon31() {
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

function Container82() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Kişilerim</p>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container82 />
          <Text44 />
        </div>
      </div>
    </div>
  );
}

function Icon32() {
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

function Container83() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Takımlarım</p>
      </div>
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container83 />
          <Text45 />
        </div>
      </div>
    </div>
  );
}

function Icon33() {
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

function Container84() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Bağımlılık Haritası</p>
      </div>
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container84 />
          <Text46 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
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

function Container86() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[227px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Container85 />
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[18px] relative shrink-0 w-[118.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[59.5px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-px tracking-[0.6px] translate-x-[-50%] uppercase">{`Öğren & Uygula`}</p>
      </div>
    </div>
  );
}

function Icon34() {
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

function Button4() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text47 />
      <Icon34 />
    </div>
  );
}

function Icon35() {
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

function Container87() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">{`Öğren & Uygula`}</p>
      </div>
    </div>
  );
}

function MenuItem7() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container87 />
          <Text48 />
        </div>
      </div>
    </div>
  );
}

function Icon36() {
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

function Container88() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Yolculuğum</p>
      </div>
    </div>
  );
}

function MenuItem8() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container88 />
          <Text49 />
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <MenuItem7 />
      <MenuItem8 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[110px] items-start relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Container89 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[445px] items-start relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Container86 />
      <Container90 />
    </div>
  );
}

function Container92() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[16px] py-0 relative rounded-[inherit] size-full">
        <Button2 />
        <Container91 />
      </div>
    </div>
  );
}

function Icon37() {
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

function Container93() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Admin Paneli</p>
      </div>
    </div>
  );
}

function MenuItem9() {
  return (
    <div className="h-[37px] relative rounded-[10px] shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Container93 />
          <Text50 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#364153] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#e5e7eb] text-[10px] text-center text-nowrap tracking-[0.1172px]">ÖT</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-0 not-italic text-[#f3f4f6] text-[13px] text-nowrap top-px tracking-[-0.0762px]">Özgür Tellal</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[15px] overflow-clip relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#99a1af] text-[10px] text-nowrap top-[0.5px] tracking-[0.1172px]">Company Admin</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="basis-0 grow h-[34.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text51 />
        <Text52 />
      </div>
    </div>
  );
}

function Icon38() {
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

function Button5() {
  return (
    <div className="h-[42.5px] relative rounded-[10px] shrink-0 w-[207px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[4px] py-0 relative size-full">
        <Container94 />
        <Container95 />
        <Icon38 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex h-[51.5px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <Button5 />
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#18181b] h-[129.5px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[17px] px-[16px] relative size-full">
        <MenuItem9 />
        <Container96 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#18181b] content-stretch flex flex-col h-[796px] items-start left-0 pl-0 pr-px py-0 top-0 w-[240px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container74 />
      <Container92 />
      <Container97 />
    </div>
  );
}

function Icon39() {
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
    <div className="absolute bg-[#18181b] content-stretch flex items-center justify-center left-[1360px] p-px rounded-[1.67772e+07px] size-[48px] top-[724px]" data-name="App">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Icon39 />
    </div>
  );
}

export default function ONabuEkranGuncellemeleri() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="oNabu Ekran Güncellemeleri">
      <App />
      <Sidebar />
      <App1 />
    </div>
  );
}