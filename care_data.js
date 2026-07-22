// =========================================================
// 💵 [강남담당 통합 대시보드 - 구독 Care 비용 정보 데이터]
// =========================================================

const careData = {
    stem: [
        { id: 's1', name: '워터필터 교체서비스', period: '12개월 / 6회', price: 507000, desc: '중금속 7종 흡착 필터 : 84,500원 x 6회' },
        { id: 's2', name: '퓨어프레쉬필터 교체', period: '12개월 / 6회', price: 174000, desc: '퓨어프레시 필터 29,000원 x 6회' },
        { id: 's3', name: '세척 케어 및 점검', period: '12개월 / 6회', price: 180000, desc: '소모품(1만) + 인건비(2만) x 6회' },
        { id: 's4', name: '기계실 분해세척', period: '36개월 차 1회', price: 85000, desc: '분해세척 서비스 비용 총합' },
        { id: 's5', name: '설치/철거 무상 제공', period: '계약기간 內 1회', price: 111000, desc: '판토스 무상 재설치 요금' },
        { id: 's6', name: '무상 A/S 제공', period: '계약기간', price: 147000, desc: '냉장고 평균 수리 비용 기준' },
        { id: 'sx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    stemIce: [
        { id: 'si1', name: '워터필터 교체 (프리필터 포함)', period: '12개월 / 6회', price: 1332000, desc: '중금속(12EA)+박테리아(6EA)+바이러스(6EA) 필터 총합' },
        { id: 'si2', name: '퓨어프레쉬필터 교체', period: '12개월 / 6회', price: 174000, desc: '회당 29,000원 x 6회' },
        { id: 'si3', name: '세척 케어 및 성능 점검', period: '3개월 / 24회', price: 720000, desc: '회당 30,000원 x 24회' },
        { id: 'si4', name: '기계실 분해세척', period: '36개월 차 1회', price: 85000, desc: '분해세척 서비스 비용 총합' },
        { id: 'si5', name: '설치/철거 무상 제공', period: '계약기간 內 1회', price: 111000, desc: '판토스 무상 재설치 요금' },
        { id: 'si6', name: '무상 A/S 제공', period: '계약기간', price: 147000, desc: '냉장고 평균 수리 비용 기준' },
        { id: 'six', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    waterPurifier: [
        { id: 'wp1', name: '중금속9 흡착필터/바이러스 클리어', period: '6개월 / 12회', price: 1104000, desc: '필터비용' }
    ],
    refrigerator: [
        { id: 'rf1', name: '퓨어프레쉬필터 교체', period: '12개월 / 6회', price: 174000, desc: '회당 29,000원 x 6회' },
        { id: 'rf2', name: '기본 외관/얼음통 & 고무패킹 케어', period: '12개월 / 6회', price: 180000, desc: '방문당 30,000원 x 6회' },
        { id: 'rf3', name: '기계실 세척 (성능점검 포함)', period: '36개월 차 1회', price: 85000, desc: '기계실 분해세척 서비스 비용 총합' },
        { id: 'rf4', name: '무상 A/S 제공', period: '계약기간', price: 147000, desc: '냉장고 평균 수리 비용 기준' },
        { id: 'rfx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    kimchiRefrigerator: [
        { id: 'krf1', name: '퓨어프레쉬필터 교체', period: '12개월 / 6회', price: 174000, desc: '회당 29,000원 x 6회' },
        { id: 'krf2', name: '기본 외관/얼음통 & 고무패킹 케어', period: '12개월 / 6회', price: 180000, desc: '방문당 30,000원 x 6회' },
        { id: 'krf3', name: '기계실 세척 (성능점검 포함)', period: '36개월 차 1회', price: 85000, desc: '기계실 분해세척 서비스 비용 총합' },
        { id: 'krf4', name: '무상 A/S 제공', period: '계약기간', price: 147000, desc: '냉장고 평균 수리 비용 기준' },
        { id: 'krfx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    induction: [
        { id: 'e1', name: '전용 클리너 제공', period: '12개월 / 6회', price: 32700, desc: '전용클리너 6EA' },
        { id: 'e2', name: '상판 클리닝, 하부 이물제거', period: '12개월 / 6회', price: 153096, desc: '최저시급 + 출장비 x 6회' },
        { id: 'e3', name: '상판 교체 서비스', period: '36~48개월 1회', price: 245000, desc: '상판 교체 서비스 요금' },
        { id: 'e4', name: '설치/철거 무상 제공', period: '계약기간 內 1회', price: 50000, desc: '판토스 무상 재설치 요금' },
        { id: 'e5', name: '무상 A/S 제공', period: '계약기간', price: 70000, desc: '전기레인지 평균 수리 비용 기준' },
        { id: 'ex', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    dishwasher: [
        { id: 'd1', name: '음식물 거름망 교체', period: '12개월 / 6회', price: 102000, desc: '거름필터 12EA' },
        { id: 'd2', name: '내/외부 세척 및 통살균', period: '12개월 / 6회', price: 360000, desc: '클리닝(1만) + 출장비(2만) x 12회' },
        { id: 'd3', name: '전용 소금 충전', period: '12개월 / 6회', price: 114000, desc: '정제소금 12EA' },
        { id: 'd4', name: '연수장치 점검/수질 측정', period: '12개월 / 6회', price: 22800, desc: '경도 키트 12EA' },
        { id: 'd5', name: '에어필터 교체', period: '12개월 / 6회', price: 75000, desc: '에어필터 6EA' },
        { id: 'd6', name: '설치/철거 무상 제공', period: '계약기간 內 1회', price: 130000, desc: '판토스 무상 재설치 요금' },
        { id: 'd7', name: '무상 A/S 제공', period: '계약기간', price: 70000, desc: '식기세척기 평균 수리 비용 기준' },
        { id: 'dx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    stickVacuum: [
        { id: 'v1', name: '분해세척 서비스 (에어/초음파 세척)', period: '12개월 / 6회', price: 396000, desc: '회당 66,000원 x 6회' },
        { id: 'v2', name: '성능 점검 & 스팀 케어', period: '12개월 / 6회', price: 124000, desc: '최저시급 + 성능/스팀케어 출장비' },
        { id: 'v3', name: '소모품 배송 (배터리 36개월 1회)', period: '12개월 / 6회', price: 912000, desc: '필터류, 배터리, 올인원타워 소모품 총합' },
        { id: 'v4', name: '무상 A/S 제공', period: '계약 기간', price: 91300, desc: '청소기 평균 수리 비용 기준' },
        { id: 'vx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    robotVacuum: [
        { id: 'r1', name: '7종 소모품 교체 서비스', period: '12개월 / 6회', price: 1287300, desc: '6년 소모품 비용 합계 + 출장 서비스' },
        { id: 'r2', name: '로봇/스테이션/스팀 클리닝', period: '12개월 / 6회', price: 134000, desc: '회당 22,340원 x 6회' },
        { id: 'r3', name: '무상 A/S 제공', period: '계약 기간', price: 91300, desc: '청소기 평균 수리 비용 기준' },
        { id: 'rx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    airConditioner: [
        { id: 'a1', name: '완전분해 케어 서비스(프리미엄)', period: '36개월 / 2회', price: 610000, desc: '회당 305,000원 x 2회' },
        { id: 'a1_2', name: '부분분해 케어 서비스(라이트)', period: '36개월 / 2회', price: 80000, desc: '회당 40,000원 x 2회, 타 가전 부분분해세척 비용기준 참고 추정비용' },
        { id: 'a2', name: '공기청정 필터 교체', period: '12개월 / 6회', price: 600000, desc: '뷰 집진필터 100,000원 x 6회' },
        { id: 'a3', name: '성능점검 & 내/외부 토탈클리닝', period: '12개월 / 6회', price: 510000, desc: '회당 85,000원 x 6회' },
        { id: 'a4', name: '무상 철거&재설치 서비스', period: '계약기간 內 1회', price: 388000, desc: '2in1 재설치 기준 388,000원' },
        { id: 'a5', name: '무상 A/S 제공', period: '계약기간', price: 266000, desc: '에어컨 평균 수리 비용 기준' },
        { id: 'ax', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    airPurifier: [
        { id: 'p1', name: '복합 필터 교체', period: '12개월 / 6회', price: 1548000, desc: '회당 258,000원 x 6회' },
        { id: 'p2', name: '극세 필터 교체', period: '6개월 / 12회', price: 128000, desc: '회당 10,666원 x 12회' },
        { id: 'p3', name: '클린부스터 분해/클리닝', period: '6개월 / 12회', price: 480000, desc: '회당 40,000원 x 12회' },
        { id: 'p4', name: '분해 / 스팀 케어', period: '30개월 / 2회', price: 210000, desc: '기계실 분해세척 서비스 총합' },
        { id: 'p5', name: '무상 A/S 제공', period: '계약기간', price: 91000, desc: '공기청정기 평균 수리 비용' },
        { id: 'px', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    bathAir: [
        { id: 'b1', name: '극세필터/팬/위생(UV/피톤치드) 케어', period: '12개월 / 6회', price: 858000, desc: '회당 143,000원 x 6회' },
        { id: 'b2', name: '극세 필터 교체 서비스', period: '24개월 / 3회', price: 60000, desc: '세트당 20,000원 x 3회' },
        { id: 'b3', name: '무상 A/S 제공', period: '계약기간', price: 174000, desc: '평균 수리비용 기준' },
        { id: 'bx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    styler: [
        { id: 'st1', name: '클리닝 & 스팀케어 & 센서점검', period: '12개월 / 6회', price: 510000, desc: '회당 85,000원 x 6회' },
        { id: 'st2', name: '인산염 키트 / 향기 시트 제공', period: '12개월 / 6회', price: 83500, desc: '회당 13,917원 x 6회' },
        { id: 'st3', name: '급 / 배수통 교체 서비스', period: '36개월 / 1회', price: 39900, desc: '스타일러 통 가격 총합' },
        { id: 'st4', name: '무상 A/S 제공', period: '계약기간', price: 110000, desc: '평균 수리비용 기준' },
        { id: 'stx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    washTower: [
        { id: 'wt1', name: '센서/패킹/필터 세척 & 드럼/스팀케어', period: '6개월 / 12회', price: 630000, desc: '[세탁부] 회당 6.5만x6회 + [건조부] 회당 4만x6회' },
        { id: 'wt2', name: '배수필터 교체 서비스', period: '24개월 / 3회', price: 15600, desc: '회당 5,200원 x 3회' },
        { id: 'wt3', name: '2중 안심필터 무상교체', period: '최초 방문 시 1회', price: 36500, desc: '2중 안심필터 가격' },
        { id: 'wt4', name: '설치/철거 무상 제공', period: '계약기간 內 1회', price: 220000, desc: '무상 철거 및 재설치 총합' },
        { id: 'wt5', name: '무상 A/S 제공', period: '계약기간', price: 110000, desc: '세탁기 평균 수리비용 기준' },
        { id: 'wtx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    washTowerDirect: [
        { id: 'wtd1', name: '드럼 & 스팀 케어', period: '12개월 / 홀수 년 차', price: 240000, desc: '회당 80,000원 x 3회' },
        { id: 'wtd2', name: '직수/고압세척 & 스팀/UV케어', period: '12개월 / 짝수 년 차', price: 480000, desc: '회당 160,000원 x 3회' },
        { id: 'wtd3', name: '세탁기 관리제 사용', period: '매 방문 시 제공', price: 144000, desc: '회당 24,000원 x 6회' },
        { id: 'wtd4', name: '2중 안심필터 교체', period: '최초 방문 시 1회', price: 38300, desc: '2중 안심필터 가격' },
        { id: 'wtd5', name: '배수필터 교체', period: '12개월 / 6회', price: 15600, desc: '회당 2,600원 x 6회' },
        { id: 'wtd6', name: '설치/철거 무상 제공', period: '계약 기간 내 1회', price: 231000, desc: '무상 철거 및 재설치 총합' },
        { id: 'wtd7', name: '무상 A/S 제공', period: '계약기간', price: 110000, desc: '세탁기 평균 수리비용 기준' },
        { id: 'wtdx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    washCombo: [
        { id: 'wc1', name: '센서/패킹/필터 세척 & 드럼/스팀케어', period: '6개월 / 12회', price: 390000, desc: '회당 65,000원 x 6회' },
        { id: 'wc2', name: '배수필터 교체 서비스', period: '24개월 / 3회', price: 15600, desc: '회당 5,200원 x 3회' },
        { id: 'wc3', name: '건조필터 무상교체', period: '최초 방문 시 1회', price: 44500, desc: '건조필터 가격' },
        { id: 'wc4', name: '무상 A/S 제공', period: '계약기간', price: 110000, desc: '세탁기 평균 수리비용 기준' },
        { id: 'wcx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    trommStandard: [
        { id: 'ts1', name: '배수필터/고무패킹/내외부 클리닝/성능 작동 점검/수평 확인', period: '24개월 / 3회', price: 120000, desc: '세척 소모품 및 인건비' },
        { id: 'ts2', name: '배수필터/고무패킹 교체', period: '48개월 / 1회', price: 64500, desc: '배수필터 + 고무패킹 가격' },
        { id: 'ts3', name: '세척조 클리너 제공', period: '48개월 / 1회', price: 7000, desc: '클리너 가격' },
        { id: 'ts4', name: '분해 세척(스팀 및 UV 관리)', period: '48개월 / 1회', price: 195000, desc: '서비스 비용' },
        { id: 'ts5', name: '무상 A/S 제공', period: '계약기간', price: 110000, desc: '세탁기 평균 수리비용 기준' },
        { id: 'tsx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용(최저시급 x 셀프케어 시간)' }
    ],
    trommLight: [
        { id: 'tl1', name: '배수필터/고무패킹/내외부 클리닝/스팀 관리/', period: '6개월 / 12회', price: 480000, desc: '세척 소모품 및 인건비' },
        { id: 'tl2', name: '배수필터/고무패킹/내외부 클리닝/스팀 관리/', period: '12개월 / 6회', price: 240000, desc: '세척 소모품 및 인건비' },
        { id: 'tl3', name: '배수필터교체', period: '24개월 / 1회', price: 15000, desc: '배수필터 가격' },
        { id: 'tl4', name: '무상 A/S 제공', period: '계약기간', price: 110000, desc: '세탁기 평균 수리비용 기준' },
        { id: 'tlx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용(최저시급 x 셀프케어 시간)' }
    ],
    dryer: [
        { id: 'dr1', name: '먼지/배수물통 세척 & 내외부 클리닝', period: '6개월 / 12회', price: 240000, desc: '세척 소모품 및 인건비' },
        { id: 'dr2', name: '2중 안심필터 제공', period: '최초 방문 1회', price: 36500, desc: '2중 안심필터 가격' },
        { id: 'dr3', name: '무상 A/S 제공', period: '계약기간', price: 110000, desc: '세탁기 평균 수리비용 기준' },
        { id: 'drx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ],
    tvCare: [
        { id: 'tv1', name: 'QNED 86형/85시리즈(패널 고장 무상A/S)', period: '계약기간 내 고장시', price: 2060000, desc: '패널 교체 기준가 약 206만원' },
        { id: 'tv2', name: 'OLED 83형/G시리즈(패널 고장 무상A/S)', period: '계약기간 내 고장시', price: 3770000, desc: '패널 교체 기준가 약 377만원' },
        { id: 'tv3', name: 'OLED 77형/G시리즈(패널 고장 무상A/S)', period: '계약기간 내 고장시', price: 2990000, desc: '패널 교체 기준가 약 299만원' },
        { id: 'tv4', name: 'OLED 77형/B시리즈(패널 고장 무상A/S)', period: '계약기간 내 고장시', price: 2300000, desc: '패널 교체 기준가 약 230만원' },
        { id: 'tv5', name: 'OLED 65형(패널 고장 무상A/S)', period: '계약기간 내 고장시', price: 1500000, desc: '패널 교체 기준가 약 150만원' },
        { id: 'tv6', name: 'OLED 55형(패널 고장 무상A/S)', period: '계약기간 내 고장시', price: 1200000, desc: '패널 교체 기준가 약 120만원' },
        { id: 'tv7', name: '70인치 이상 무상 설치지원', period: '계약기간 內 1회', price: 128000, desc: '70형대 벽걸이 설치 기준 (철거비/운송비 제외)' },
        { id: 'tv8', name: '80인치 이상 무상 설치지원', period: '계약기간 內 1회', price: 204000, desc: '80형대 벽걸이 설치 기준 (철거비/운송비 제외)' }
    ],
    massageChair: [
        { id: 'mc1', name: '가죽 교체 서비스', period: '12개월 / 6회', price: 278500, desc: '발 가죽 교체(30,000원) x 3회 + 베개, 등, 엉덩이 가죽교체(188,500원) x 1회' },
        { id: 'mc2', name: '제품 토탈 클리닝 / 동작 및 제품 성능점검', period: '12개월 / 6회', price: 345600, desc: '케어십 요금 4,800원 x 72개월' },
        { id: 'mc3', name: '무상 A/S 제공', period: '계약기간', price: 250000, desc: '안마의자 1회 평균 수리 비용 기준' },
        { id: 'mcx', name: '위생 관리, 시간 절약 등', period: '-', price: 0, desc: '기회비용 (최저시급 x 케어 시간)' }
    ]
};