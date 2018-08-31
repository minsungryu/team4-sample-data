const moment = require('moment');
require('moment-round');
const momentRandom = require('moment-random');

const tasteAdjectives = ["매운", "매콤한", "매콤달콤한", "맵고짠", "쌉쌀한", "씁쓸한", "쌉싸래한", "쓰디쓴", "새콤한", "새콤달콤한", "신", "시큼한", "감미로운", "달짝지근한", "달콤한", "구수한", "담백한", "맹맹한", "밍밍한", "삼삼한", "싱거운", "칼칼한"];
const names = [
    ["가지나물", "간고등어", "갈비", "갈비탕", "보쌈김치", "볶음밥", "부대찌개", "부침개", "불고기", "순두부찌개", "스파게티", "스시", "어묵", "잡채", "잡탕밥", "장어덮밥", "잼", "통닭", "튀김", "파김치", "파스타", "회"],
    ["감자튀김", "닭강정", "계란덮밥", "동치미", "된장찌개", "두부", "만두", "묵", "바게트", "바비큐", "배추김치", "배춧국", "옥수수빵", "인절미", "자장면", "카레", "칼국수", "케이크", "콩우유", "콩자반", "핫도그", "햄버거"],
    ["계란말이", "고로케", "곰국", "광동요리", "떡", "떡국", "떡꼬치", "국밥", "빙수", "빵", "삼겹살", "삼계탕", "삼두음", "우동", "육개장", "육회", "찐빵", "청국장", "초밥", "통구이", "파이", "파전", "팔보채", "팬케이크"],
    ["국수", "규동", "김밥", "김치", "김치찌개", "꿔바로우", "새우튀김", "샌드위치", "샐러드", "수프", "순대", "스테이크", "약과", "양갱", "양고기", "양장피", "총각김치", "추어탕", "치즈", "치킨", "프라이드치킨", "피자"],
    ["나박김치", "냉면", "닭갈비", "닭개장", "닭고기", "닭고기덮밥", "닭꼬치", "닭튀김", "생강즙", "생강차", "소갈비", "소불고기", "식혜", "샌드위치", "아욱국", "알탕", "크래커", "크루아상", "탕수육", "토스트", "필라프"],
    ["도넛", "돈가스", "디저트", "땅콩과자",  "떡볶이", "라면", "라볶이", "마파두부",  "비빔밥", "소시지", "송편", "소고기덮밥", "수란", "식빵", "젓갈", "죽", "짜장면", "짬뽕", "찌개", "초콜릿", "쿠키", "푸딩", "호떡", "회덮밥"]
];

const descriptions = [
    `<span class="colour" style="color: rgb(85, 85, 85);">![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MDFfNjUg/MDAxNTMzMTA4ODkzNjcx.-RbyUudSbt77wn2EZvilxoUl6n5yfp9W3HZhOAkYNc8g.2XUmzbN513tkqfEh0OWZ2nsvvI_SHMY-6W2RJSPYmmEg.PNG.ingq92/%EB%8B%AC%EC%BD%A4%EA%B0%88%EB%B9%84%EB%A7%8C%EB%91%90.png?type=w740)</span>
    **달콤갈비만두** 입니다.
    출출할 때 간단한 야식으로 더할나위 없이 훌륭한 메뉴죠
    왜때문에 갈비만두가 이렇게 인기가 많은걸까요?
    직접 주문해서 먹어봤습니다!
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MDFfMTQx/MDAxNTMzMTA4ODUxOTY4.tTnP6EmPp4jg-W2s98Y_DILNilpnXrS6U28w5p9QL3og.MGebAMWuSwAVrnJxoNuT7Sp5iRkhMAX0li3dNwT9tW0g.JPEG.ingq92/KakaoTalk_20180801_163117379.jpg?type=w740)
    훌륭한 가성비 컨셉답게 포장에는 약간의 허접함이 묻어있지만
    맛과 양이 중요하기 때문에 개의치 않습니다.
    **큼지막한 갈비만두 15개**가 들어있습니다.
    도굴꾼도 아닌데 굳이 파고들자면
    개당 260원이라 할 수 있습니다.
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MDFfMjY0/MDAxNTMzMTA4ODUyMTgx.mQUUMGQ311Fk8cvRL_iDHmSRjnjCw2ea8nUeoba90y0g.0c9TF1bCLs-QNtYxqYt3HjYujWp5HcRD7N0SKmUyROwg.JPEG.ingq92/KakaoTalk_20180801_163117915.jpg?type=w740)
    연출된 이미지처럼 군만두로 먹는게 제일 맛있을 것 같고
    회원님들의 후기를 보면 찜기에 쪄 먹는것도 맛있어 보이지만
    간편한 야식을 찾는 회원님들의 입장을 대변해보고자
    PX에서 냉동식품 돌려먹던 느낌을 한껏 살려봅니다.
    (요약 : 귀찮을 땐 전자레인지에 돌려먹기)
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MDFfMTk0/MDAxNTMzMTA4ODUyNDIw.GJIpHI_tBZLnTIXHCUOIrWQiepkuI-zXS-ez2zQa64sg.ogo-Nx9PSpuH5UB5Ntr4zH8iWY42JBVmvR_YI8OhXbog.JPEG.ingq92/KakaoTalk_20180801_163118515.jpg?type=w740)
    전자레인지에 돌릴 땐 약간의 물은 필수입니다.
    물조절을 잘못했을 경우 원치않게
    물만두를 먹을 수 있으니
    약간의 내공을 필요로 합니다.
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MDFfNTAg/MDAxNTMzMTA4ODUyNzgy.MlvC0nQgqHD2PQG9IDP90A_PIGcj0Jel-P8jLTMzr8Eg.qR0aNUhpbeCU8PX3rVVpDU41RgKysRjwiMb0MK2_caog.JPEG.ingq92/KakaoTalk_20180801_163119802.jpg?type=w740)
    <span class="colour" style="color: rgb(85, 85, 85);">(급고백) 저도 사실 내공이 부족합니다.</span>
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MDFfNTEg/MDAxNTMzMTA4ODUyOTU5.sthvxMYCi2m2y26_yidav1ehAur-sJ4CxeOVTGW1Odwg.H14459X-oeeJziZTeKOsq8m4ym-CCBaG2N_PQXq9KHwg.JPEG.ingq92/KakaoTalk_20180801_163120357.jpg?type=w740)
    얇은 만두피 속에 달콤한 갈비소가 가득합니다.
    저녁에 맥주 한잔과 먹으면 더할나위 없이
    훌륭한 야식이 될 수 있습니다.<span class="colour" style="color: rgb(85, 85, 85);">(혼자 다 먹다가는 약간의 달콤한 느끼함 같은게 올라올 수 있습니다.)</span>
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MDFfMjg5/MDAxNTMzMTExMDYxMzI1.BS_y_VZ9vNCRGaIMGPEcpIP6Q24pvP7HmhxiphA7KMgg.H_yRLu1XF0ZlkCRYwSWROAejxNqdnZIejbsy6isXuKYg.PNG.ingq92/%EB%8B%AC%EA%B0%88.png?type=w740)
    맛과 양 모두 만족스러운 가성비 끝판왕!
    갈비만두를 같이 먹어요~`,
    `<span class="colour" style="color: rgb(37, 37, 37);">![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MjFfMjY4/MDAxNTM0ODQxMDc5OTU0.1fW6vT1mOnI6MyPxa4TJDDwchMRHY_JSX2bVC7JLKY4g.liOlGZesGCfE6rlaeqDB7vAjr6tYMvNhr5r0wYXBe4cg.PNG.ingq92/%EC%A7%81%ED%99%94%EB%B6%88%EB%A7%89%EC%B0%BD.png?type=w740)</span>
    <span class="colour" style="color: rgb(37, 37, 37);">**<span class="colour" style="color: rgb(255, 0, 0);">통마늘에 양파 송송 썰어 넣으면</span>**
    **<span class="colour" style="color: rgb(255, 0, 0);">훌륭한 야식안주 완성!</span>**</span>
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MjFfMjc2/MDAxNTM0ODQxMTM0MTM0.U2_42Qgg4lVOegi5E23CWvPfz-nuohpQr0120OwXap0g.vH3OwkMM2Lv-qJXI85pgoUfzzGwAyeF7-NHQWXPNXy0g.JPEG.ingq92/9_fjgUd018svcol0eqjvignr7_31u6w3.jpg?type=w740)
    
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MjFfMTU0/MDAxNTM0ODQxMTM0NDQz.pWYsjxmZGEsalJzEG8ECAKRMuJ9TVjjxLFRj_qLrdMUg.8gA_1swVY3wp8eLTnqIjSGiGKkGbM_a0yHFBGD-sYnQg.JPEG.ingq92/9_djgUd018svc15oqihx7bz3au_31u6w3.jpg?type=w740)`,
    `<span class="colour" style="color: rgb(37, 37, 37);">![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MjFfMjY4/MDAxNTM0ODQxMDc5OTU0.1fW6vT1mOnI6MyPxa4TJDDwchMRHY_JSX2bVC7JLKY4g.liOlGZesGCfE6rlaeqDB7vAjr6tYMvNhr5r0wYXBe4cg.PNG.ingq92/%EC%A7%81%ED%99%94%EB%B6%88%EB%A7%89%EC%B0%BD.png?type=w740)</span>
    <span class="colour" style="color: rgb(37, 37, 37);">**<span class="colour" style="color: rgb(255, 0, 0);">통마늘에 양파 송송 썰어 넣으면</span>**
    **<span class="colour" style="color: rgb(255, 0, 0);">훌륭한 야식안주 완성!</span>**</span>
    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MjFfMjc2/MDAxNTM0ODQxMTM0MTM0.U2_42Qgg4lVOegi5E23CWvPfz-nuohpQr0120OwXap0g.vH3OwkMM2Lv-qJXI85pgoUfzzGwAyeF7-NHQWXPNXy0g.JPEG.ingq92/9_fjgUd018svcol0eqjvignr7_31u6w3.jpg?type=w740)

    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MjFfMTU0/MDAxNTM0ODQxMTM0NDQz.pWYsjxmZGEsalJzEG8ECAKRMuJ9TVjjxLFRj_qLrdMUg.8gA_1swVY3wp8eLTnqIjSGiGKkGbM_a0yHFBGD-sYnQg.JPEG.ingq92/9_djgUd018svc15oqihx7bz3au_31u6w3.jpg?type=w740)`,
    `과일숙성한 돼지 생막창이에요

    ![](https://cafeptthumb-phinf.pstatic.net/MjAxODA4MjlfMjg3/MDAxNTM1NTI4ODA4MDA4.-XrGOuAYveyG4Tg04Frf63nR_-n6HppFNVJs4cv1Ic8g.Las7RwMXCXsMpoC6YHg3RNVEKM2CIrkReOBytMZ4w00g.PNG.tjffhr1979/%EB%A7%89%EC%B0%BD.png?type=w740)`,

];

const addressList = [
    '서울시 어딘가',
    '인천광역시 어딘가',
    '경기도 어딘가',
    '강원도 어딘가',
    '충청도 어딘가',
    '대구 어딘가',
    '대전 어딘가',
    '부산 어딘가',
    '광주 어딘가',
    '내 집 내 방'
];

const addressDetails = [
    '이곳',
    '저곳',
    '여기',
    '저기'
];

const latlng = [[37.5200607, 127.10383300000001]];

function randomRadius() {
    return (Math.random() * 2 - 1) / 50;
}

exports.columnSchema = ['id', 'category_id', 'name', 'title', 'price', 'description', 'address', 'address_detail', 'latitude', 'longitude', 'max_participant', 'expire_date_time', 'share_date_time', 'is_bowl_needed', 'owner_id'];

exports.table = 'product';

exports.generate = index => {
    const now = moment();

    const category_id = Math.floor(Math.random() * 6 + 1);
    const _name = names[Math.floor(Math.random() * names.length)];
    const name = `${tasteAdjectives[Math.floor(Math.random() * tasteAdjectives.length)]} ${_name[Math.floor(Math.random() * _name.length)]}`;
    const title = `${tasteAdjectives[Math.floor(Math.random() * tasteAdjectives.length)]} ${name}`;
    const price = Math.floor(Math.random() * 500) * 100;
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    const address = addressList[Math.floor(Math.random() * addressList.length)];
    const address_detail = addressDetails[Math.floor(Math.random() * addressDetails.length)];
    const position = latlng[Math.floor(Math.random() * latlng.length)];
    const [latitude, longitude] = [(position[0] + randomRadius()).toFixed(7), (position[1] + randomRadius()).toFixed(14)];
    const max_participant = Math.floor(Math.random() * 6) + 1;
    const expire_date_time = momentRandom(now, now.subtract(4, 'w')).ceil(10, 'minutes').format('YYYY-MM-DDTHH:mm');
    const share_date_time = momentRandom(moment(expire_date_time).add(2, 'w').format('YYYY-MM-DDTHH:mm'), expire_date_time)
                            .ceil(10, 'minutes').format('YYYY-MM-DDTHH:mm');
    const is_bowl_needed = Math.random() > 0.5;
    const owner_id = Math.floor(Math.random() * 5) + 1;

    return {
        id: index + 1,
        category_id,
        name,
        title,
        price,
        description,
        address,
        address_detail,
        latitude,
        longitude,
        max_participant,
        expire_date_time,
        share_date_time,
        is_bowl_needed,
        owner_id
    }
};