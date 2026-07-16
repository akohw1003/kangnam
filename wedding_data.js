// =========================================================
// 💒 [강남담당 통합 대시보드 - 혼수/웨딩 패키지 정책 데이터]
// =========================================================

const WEDDING_POLICY = {
    // 고정 플랜은 기존 모델(WA2525TAP6Z 등) 그대로 유지
    fixedPlans: [
        { id: "wedding-115", name: "웨딩 115 플랜", rate: "3.9%", items: ["OLED83C6Q", "M876GBB181", "WA2525TAP6Z"] },
        { id: "wedding-95", name: "웨딩 95 플랜", rate: "3.6%", items: ["OLED77C6Q", "G646GBB031", "WA2525TAP6Z"] },
        { id: "wedding-80", name: "웨딩 80 플랜", rate: "3.2%", items: ["75QNED86B", "H876GBB111", "FC2521TX6C"] }
    ],
    // BEST-PICK 모델 목록
    bestPickModels: {
        tv: [
            "OLED77C6Q", "OLED65C6S", "75QNED86BK", "86QNED86BK", "OLED83C6Q", "75QNED86B"
        ],
        fridge: [
            "G646GBB031", "M876GBB231", "G646GBB091", "H876GBB111", "M876GBB181"
        ],
        // 세탁기 라인업만 새롭게 업데이트 됨
        washer: [
            "WA2525YMZF", "WA2525EGZF", "WA2525MYZF", 
            "FH25ESE", "FH25ESEF", "FH25ESEFX", 
            "FH25GSG", "FH25GSGF", "FH25GSGX", 
            "FC2521TX6C", "FC2521TX6CX", "FC2521UX6C", "FC2521UX6CX", 
            "WA2525EGP6Z", "WA2525UUP6G", "WA2525YMP6G"
        ]
    }
};