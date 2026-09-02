// =========================================================
// 💒 [강남담당 통합 대시보드 - 혼수/웨딩 패키지 정책 데이터 (9월 업데이트)]
// =========================================================

const WEDDING_POLICY = {
    // 9월 고정 플랜 유지
    fixedPlans: [
        { id: "wedding-115", name: "웨딩 115 플랜", rate: "3.9%", items: ["OLED83C6Q", "M876GBB181", "WA2525TAP6Z"] },
        { id: "wedding-95", name: "웨딩 95 플랜", rate: "3.6%", items: ["OLED77C6Q", "G646GBB031", "WA2525TAP6Z"] },
        { id: "wedding-80", name: "웨딩 80 플랜", rate: "3.2%", items: ["75MRGB86B", "H876GBB111", "FC2521TX6C"] }
    ],
    // 9월 BEST-PICK 모델 목록 업데이트 (냉장고 D646GBB041 추가)
    bestPickModels: {
        tv: [
            "OLED77C6Q", "75MRGB86B", "OLED83C6Q", "86MRGB86B", "OLED65C6S", "32LX6BPGA" // MRGB 2종 및 스탠바이미2 Max 
        ],
        fridge: [
            "G646GBB031", "M876GBB231", "H876GBB111", "G646GBB091", "M876GBB181", "D646GBB091", "D646GBB041" // Non-STEM 드로어 추가
        ],
        washer: [
            // 신모델 5종 
            "WA2525TAP6Z", "WA2525TTP6Z", "WA2525YMP6G", "FC2521UX6C", "FC2521TX6C"
        ]
    }
};