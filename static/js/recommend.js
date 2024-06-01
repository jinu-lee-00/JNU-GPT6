function redirectToJnuStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location = "https://apps.apple.com/kr/app/id1499045689";
    } else if (/android/i.test(userAgent)) {
        window.location = "https://play.google.com/store/apps/details?id=kr.co.squarenet.smartq.SA0000000001";
    } else {
        alert("이 링크는 모바일 디바이스에서만 사용 가능합니다.");
    }
}

function redirectToCosmos() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location = "https://apps.apple.com/kr/app/id1142523906";
    } else if (/android/i.test(userAgent)) {
        window.location = "https://play.google.com/store/apps/details?id=kr.coursemos.android2";
    } else {
        alert("이 링크는 모바일 디바이스에서만 사용 가능합니다.");
    }
}

function redirectToMobileLibrary() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location = "https://apps.apple.com/us/app/id1492771770";
    } else if (/android/i.test(userAgent)) {
        window.location = "https://play.google.com/store/apps/details?id=mmm.slpck.chonnam";
    } else {
        alert("이 링크는 모바일 디바이스에서만 사용 가능합니다.");
    }
}

function loadContent(type) {
    const contentArea = document.getElementById('content-area');
    const headerTitle = document.getElementById('header-title');
    let content = '';

    if (type === 'apps') {
        headerTitle.innerHTML = 'JNU 필수! <a class="RM_app_color">추천 앱 모음</a>';
        content = `
            <div class="link-container">
                <a href="#" onclick="redirectToJnuStore(); return false;" class="custom-link">
                    <img src="static/images/RM_app_icon_1.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">전남대스토어</span>
                        <span class="link-text-sub">전남대학교 공식 앱</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="#" onclick="redirectToCosmos(); return false;" class="custom-link">
                    <img src="static/images/RM_app_icon_2.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">코스모스</span>
                        <span class="link-text-sub">수업 관련 열람 앱</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="#" onclick="redirectToMobileLibrary(); return false;" class="custom-link">
                    <img src="static/images/RM_app_icon_3.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">모바일도서관</span>
                        <span class="link-text-sub">전남대학교 도서관 앱</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
        `;
    } else if (type === 'jobs') {
        headerTitle.innerHTML = 'JNU 제휴 <a class="RM_app_color">취업정보사이트</a>';
        content = `
            <div class="link-container">
                <a href="https://comento.kr/affiliated-university" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_4.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">코멘토</span>
                        <span class="link-text-sub">현직자 취업정보 공유 커뮤니티</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="https://www.jobda.im/mypage/premium" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_5.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">잡다</span>
                        <span class="link-text-sub">역량기반의 취업매칭 플랫폼</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="https://www.jobplanet.co.kr/contents/news-5427/%EC%9E%A1%ED%94%8C%EB%9E%98%EB%8B%9B%20%EC%A0%9C%ED%9C%B4%EB%8C%80%ED%95%99%20%EC%84%9C%EB%B9%84%EC%8A%A4!" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_6.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">잡플래닛</span>
                        <span class="link-text-sub">채용 정보와 기업 리뷰를 한 번에!</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
        `;
    } else if (type === 'discounts') {
        headerTitle.innerHTML = '대학생 <a class="RM_app_color">무료 & 할인</a>';
        content = `
            <div class="link-container">
                <a href="https://www.microsoft.com/ko-kr/education/products/office" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_7.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">MS Office 365</span>
                        <span class="link-text-sub">학생용 오피스 무료제공</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="https://www.adobe.com/kr/creativecloud/buy/students.html?gclid=Cj0KCQjwjLGyBhCYARIsAPqTz1_0cw6dNN3B1eDjshbhjxeoAELyYAnid8i8KNajgZd-MFYd1Vgm0eMaAvI8EALw_wcB&sdid=226KCRCD&mv=search&mv2=paidsearch&ef_id=Cj0KCQjwjLGyBhCYARIsAPqTz1_0cw6dNN3B1eDjshbhjxeoAELyYAnid8i8KNajgZd-MFYd1Vgm0eMaAvI8EALw_wcB:G:s&s_kwcid=AL!3085!3!587848993812!e!!g!!%EC%96%B4%EB%8F%84%EB%B9%84%20%EB%8C%80%ED%95%99%EC%83%9D!10779597728!106182415117&gad_source=1" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_8.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">Adobe</span>
                        <span class="link-text-sub">Creative Cloud 60% 할인</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="https://www.notion.so/ko-kr/product/notion-for-education" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_9.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">Notion</span>
                        <span class="link-text-sub">프로 요금제 무료 업그레이드</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="https://www.autodesk.co.kr/education/edu-software/overview?page=1&sorting=featured&filters=individual" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_12.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">오토데스크</span>
                        <span class="link-text-sub">3ds맥스, 오토캐드, Maya, Revit 등 무료제공</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="https://www.letskorail.com/korail/com/mypage/mypageMain.do" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_10.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">코레일</span>
                        <span class="link-text-sub">청소년드림/힘내라청춘 KTX 최대 30% 할인</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
            <div class="link-container">
                <a href="https://univ.opic.or.kr/opicb2b/showMainView" class="custom-link" target="_blank">
                    <img src="static/images/RM_app_icon_11.png" alt="Icon" class="link-icon">
                    <span class="link-text">
                        <span class="link-text-title">OPIC</span>
                        <span class="link-text-sub">대학연합 OPIC 평가 15% 할인</span>
                    </span>
                    <img src="static/images/arrow.png" alt="Arrow" class="link-arrow">
                </a>
            </div>
        `;
    }

    contentArea.innerHTML = content;
}