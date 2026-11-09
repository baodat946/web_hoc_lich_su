// Dữ liệu lịch sử Việt Nam - Mở rộng
const historicalData = {
    // Các thời kỳ lịch sử
    eras: [
        { id: 'all', name: 'Tất cả', icon: '📜' },
        { id: 'chong-phap', name: 'Kháng chiến chống Pháp', icon: '⚔️', period: '1945-1954' },
        { id: 'chong-my', name: 'Kháng chiến chống Mỹ', icon: '🛡️', period: '1954-1975' },
        { id: 'thong-nhat', name: 'Thống nhất đất nước', icon: 'VN', period: '1975' }
    ],

    eraDetails: {
        'chong-phap': {
            title: 'Kháng chiến chống Pháp 1945-1954',
            subtitle: 'Giai đoạn kháng chiến và kiến quốc',
            introSummary: 'Đây là giai đoạn Việt Nam vừa phải bảo vệ chính quyền cách mạng non trẻ, vừa từng bước tổ chức lực lượng, xây dựng nhà nước mới và tiến hành cuộc kháng chiến trường kỳ chống thực dân Pháp, kết thúc bằng thắng lợi Điện Biên Phủ và Hiệp định Geneva năm 1954.',
            sections: [
                {
                    title: 'Bối cảnh quốc tế',
                    text: 'Chiến tranh thế giới thứ hai kết thúc đã làm thay đổi sâu sắc cục diện thế giới. Phát xít Nhật đầu hàng, thực dân Pháp tìm cách quay lại Đông Dương, còn các lực lượng Đồng minh tiến vào khu vực với những toan tính riêng. Sự nghiệp giữ vững độc lập của Việt Nam vì thế ngay từ đầu đã gắn với môi trường quốc tế rất phức tạp.'
                },
                {
                    title: 'Bối cảnh trong nước',
                    text: 'Sau Cách mạng Tháng Tám, nước Việt Nam Dân chủ Cộng hòa ra đời nhưng đứng trước vô vàn thử thách: chính quyền non trẻ, kinh tế kiệt quệ, nạn đói, nạn dốt, thù trong giặc ngoài. Dân tộc Việt Nam phải vừa kiến thiết đất nước, vừa chuẩn bị đối phó với cuộc xâm lược trở lại của thực dân Pháp.'
                },
                {
                    title: 'Tình hình Việt Nam giai đoạn 1945-1954',
                    text: 'Toàn bộ giai đoạn này có thể nhìn như một tiến trình liên tục: giành chính quyền, giữ vững chính quyền, bước vào kháng chiến toàn quốc, xây dựng thế và lực, phản công chiến lược, rồi giành thắng lợi quân sự và ngoại giao năm 1954. Vì vậy, các sự kiện trong giai đoạn phải được hiểu trong mối liên hệ chặt chẽ với nhau.'
                }
            ],
            stageHeading: 'Bảy chặng phát triển chính của giai đoạn',
            developmentStages: [
                {
                    id: 'stage-1',
                    roman: 'I',
                    title: 'Từ Ủy ban Dân tộc Giải phóng đến Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa',
                    description: 'Chặng mở đầu của giai đoạn 1945-1954: chớp thời cơ Tổng khởi nghĩa, xác lập chính quyền cách mạng và bắt đầu công cuộc kiến quốc cuối năm 1945.',
                    href: 'era-stage.html?era=chong-phap&stage=stage-1'
                },
                {
                    id: 'stage-2',
                    roman: 'II',
                    title: 'Chính phủ Liên hiệp lâm thời Việt Nam Dân chủ Cộng hòa (1-1-1946)'
                },
                {
                    id: 'stage-3',
                    roman: 'III',
                    title: 'Tổng tuyển cử - Thành lập Chính phủ Liên hiệp kháng chiến'
                },
                {
                    id: 'stage-4',
                    roman: 'IV',
                    title: 'Thông qua Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa và thành lập Chính phủ mới'
                },
                {
                    id: 'stage-5',
                    roman: 'V',
                    title: 'Thắng lợi trên mặt trận ngoại giao'
                },
                {
                    id: 'stage-6',
                    roman: 'VI',
                    title: 'Đẩy mạnh cuộc kháng chiến chống Pháp'
                },
                {
                    id: 'stage-7',
                    roman: 'VII',
                    title: 'Chiến dịch Điện Biên Phủ toàn thắng, Hiệp định Giơnevơ được ký kết'
                }
            ],
            stageDetails: {
                'stage-1': {
                    id: 'stage-1',
                    title: 'Từ Ủy ban Dân tộc Giải phóng đến Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa',
                    tag: 'Chặng phát triển',
                    label: 'Chặng I / 7',
                    period: 'Tháng 8 - 12/1945',
                    focus: 'Giành chính quyền, thiết lập chính quyền cách mạng và đặt nền móng kiến quốc',
                    image: 'https://mediafile.qdnd.vn/images/2022/8/15/nnnx1608.jpg',
                    description: 'Đây là chặng mở đầu của toàn bộ giai đoạn 1945-1954. Từ thắng lợi của Tổng khởi nghĩa Tháng Tám, cách mạng Việt Nam nhanh chóng chuyển sang xác lập chính quyền mới, thành lập Chính phủ lâm thời và giải quyết những nhiệm vụ cấp bách đầu tiên của một quốc gia vừa giành độc lập.',
                    significance: 'Chặng I có ý nghĩa nền móng: nó cho thấy cách mạng Việt Nam không chỉ giành chính quyền thành công mà còn ngay lập tức bước vào công cuộc tổ chức nhà nước mới, xây dựng nền dân chủ cộng hòa và chuẩn bị đối phó với thử thách trong nước, ngoài nước cuối năm 1945.',
                    studySections: [
                        {
                            title: 'Thời cơ cách mạng đã chín muồi',
                            description: 'Bối cảnh quốc tế và quyết định chớp thời cơ của cách mạng Việt Nam trong tháng 8/1945.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Tháng 8/1945, Chiến tranh thế giới thứ hai bước vào giai đoạn kết thúc. Phát xít Đức, Ý đã đầu hàng, còn Hồng quân Liên Xô đánh tan đạo quân Quan Đông - lực lượng chủ lực của phát xít Nhật ở châu Á. Cục diện đó làm cho bộ máy thống trị của Nhật ở Đông Dương rơi vào khủng hoảng nghiêm trọng, mở ra thời cơ quyết định cho cách mạng Việt Nam.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Từ ngày 13 đến ngày 15/08/1945, Hội nghị toàn quốc của Đảng họp tại Tân Trào nhận định rõ rằng thời cơ giành chính quyền độc lập đã tới, các điều kiện cho cuộc khởi nghĩa ở Đông Dương đã chín muồi. Hội nghị chủ trương kịp thời lãnh đạo toàn dân Tổng khởi nghĩa, đồng thời xác định đường lối đối nội, đối ngoại của cách mạng trong tình hình mới.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Cũng trong khuôn khổ hội nghị này, Ủy ban Khởi nghĩa toàn quốc được thành lập do Trường Chinh phụ trách. Ngay trong đêm 13/08/1945, Quân lệnh số 1 được gửi đi, hiệu triệu đồng bào và chiến sĩ cả nước nhanh chóng đứng lên giành chính quyền độc lập.'
                                }
                            ]
                        },
                        {
                            title: 'Từ Tân Trào đến quyết định Tổng khởi nghĩa',
                            description: 'Những quyết định chính trị mang tính xác lập đường lối và chính danh cho cách mạng trước giờ khởi nghĩa.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Ngày 16/08/1945, Đại hội Quốc dân họp tại Tân Trào đã thông qua Mười chính sách lớn của Việt Minh, tán thành Lệnh Tổng khởi nghĩa, quy định Quốc kỳ nền đỏ sao vàng, chọn Tiến quân ca làm Quốc ca và bầu ra Ủy ban Dân tộc Giải phóng Trung ương, tức Chính phủ lâm thời do Chủ tịch Hồ Chí Minh đứng đầu.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Như vậy, chỉ trong một thời gian rất ngắn, cách mạng Việt Nam đã đồng thời hoàn tất cả ba mặt quan trọng: có chủ trương khởi nghĩa, có lệnh hành động thống nhất và có một bộ máy lãnh đạo mang tính đại diện dân tộc. Điều đó giúp cuộc Tổng khởi nghĩa không phải là bộc phát tự phát mà là một cuộc chuyển giao quyền lực có tổ chức và có mục tiêu rõ ràng.'
                                },
                                {
                                    type: 'image',
                                    url: 'https://mediafile.qdnd.vn/images/2022/8/15/nnnx1608.jpg',
                                    title: 'Đại hội Quốc dân tại Tân Trào',
                                    caption: 'Đại hội Quốc dân là nơi hợp thức hóa quyết định Tổng khởi nghĩa và bầu ra Ủy ban Dân tộc Giải phóng Việt Nam.',
                                    source: 'Báo Quân đội nhân dân'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Chủ tịch Hồ Chí Minh gửi thư kêu gọi đồng bào và chiến sĩ cả nước: giờ quyết định cho vận mệnh dân tộc đã đến, toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta. Lời hiệu triệu đó trở thành tiếng gọi tinh thần, cổ vũ toàn dân bước vào cao trào giành chính quyền trên toàn quốc.'
                                }
                            ]
                        },
                        {
                            title: 'Chính quyền cách mạng được xác lập trên cả nước',
                            description: 'Tổng khởi nghĩa diễn ra nhanh, mạnh và quyết định trong tháng 8/1945.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Dưới sự lãnh đạo của Đảng và Việt Minh, hơn 20 triệu nhân dân Việt Nam từ Bắc đến Nam đã đồng loạt vùng dậy tiến hành Tổng khởi nghĩa. Ngày 19/08, Hà Nội khởi nghĩa thắng lợi; ngày 23/08, Huế giành chính quyền; ngày 25/08, Sài Gòn khởi nghĩa. Chỉ trong một thời gian rất ngắn, bộ máy đế quốc và phong kiến tay sai bị sụp đổ trên phạm vi cả nước.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Thắng lợi của Cách mạng Tháng Tám đã xóa bỏ chế độ quân chủ tồn tại hàng nghìn năm, chấm dứt ách thống trị gần một thế kỷ của thực dân Pháp và đưa chính quyền thực sự về tay nhân dân. Đây là bước ngoặt lịch sử có ý nghĩa quyết định đối với vận mệnh dân tộc Việt Nam trong thế kỷ XX.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Ngày 25/08/1945, Chủ tịch Hồ Chí Minh về Hà Nội. Hai ngày sau, Ủy ban Dân tộc Giải phóng do Quốc dân Đại hội bầu ra được cải tổ thành Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa. Thành phần Chính phủ được mở rộng, mời thêm nhiều nhân sĩ ngoài Việt Minh để bảo đảm tính chất quốc gia, thống nhất và đại diện rộng rãi.'
                                }
                            ]
                        },
                        {
                            title: 'Từ Chính phủ lâm thời đến ngày độc lập',
                            description: 'Những bước đi đầu tiên để xác lập vị thế của nhà nước Việt Nam Dân chủ Cộng hòa.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Ngày 30/08/1945, tại Huế, đại diện Chính phủ lâm thời tuyên bố chấp nhận sự thoái vị của Bảo Đại và tiếp nhận ấn, kiếm của triều đình. Sự kiện này khép lại biểu tượng cuối cùng của chế độ phong kiến cũ, qua đó khẳng định tính chính danh của chính quyền cách mạng mới.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Ngày 02/09/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc Tuyên ngôn Độc lập, trịnh trọng tuyên bố với quốc dân và thế giới về sự ra đời của nước Việt Nam Dân chủ Cộng hòa. Từ đây, nền độc lập vừa giành được được xác lập bằng một văn kiện mang giá trị chính trị và pháp lý rất lớn.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Ngày 03/09/1945, trong phiên họp đầu tiên của Chính phủ lâm thời, sáu nhiệm vụ cấp bách được đề ra: chống đói, chống dốt, tổ chức Tổng tuyển cử và xây dựng Hiến pháp dân chủ, giáo dục cần kiệm liêm chính, bỏ các thứ thuế vô lý và cấm thuốc phiện, đồng thời bảo đảm tự do tín ngưỡng và đoàn kết lương giáo. Đó là những việc làm đầu tiên nhằm biến nền độc lập vừa giành được thành một trật tự nhà nước thực sự.'
                                }
                            ]
                        },
                        {
                            title: 'Kiến quốc trong thế vừa xây dựng vừa đối phó ngoại xâm',
                            description: 'Cuối năm 1945, chính quyền non trẻ phải cùng lúc xử lý các nhiệm vụ kinh tế, xã hội, pháp lý và quốc phòng.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Ngay sau ngày độc lập, Chính phủ liên tiếp ban hành nhiều quyết sách quan trọng: lập Quỹ Độc lập, phát động Tuần lễ vàng, bãi bỏ thuế thân, thành lập Nha Bình dân học vụ, mở cuộc Tổng tuyển cử, lập Ủy ban dự thảo Hiến pháp, giảm tô và giảm nhiều thứ thuế cho nông dân. Những biện pháp này cho thấy công cuộc kiến quốc được triển khai ngay từ những ngày đầu, chứ không chờ đến khi tình hình hoàn toàn ổn định.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Song song với công việc xây dựng nhà nước, chính quyền cách mạng phải đối mặt với nguy cơ ngoại xâm rất nghiêm trọng. Ở Nam Bộ, quân Anh che chở cho thực dân Pháp quay trở lại; ở miền Bắc, 20 vạn quân Tưởng kéo vào cùng nhiều lực lượng phản động chống phá cách mạng. Ngày 23/09/1945, thực dân Pháp nổ súng đánh chiếm Sài Gòn, mở rộng chiến tranh ra Nam Bộ và Nam Trung Bộ.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Trước tình hình đó, Chính phủ và Chủ tịch Hồ Chí Minh vừa phát động cả nước chi viện cho Nam Bộ kháng chiến, vừa kiên trì đấu tranh ngoại giao để khẳng định địa vị pháp lý của nước Việt Nam Dân chủ Cộng hòa trên trường quốc tế. Đồng thời, hệ thống chính quyền địa phương được tiếp tục củng cố, thể hiện qua các sắc lệnh về tổ chức Hội đồng nhân dân và Ủy ban hành chính các cấp.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Đến ngày 31/12/1945, việc thành lập Ủy ban Nghiên cứu kế hoạch Kiến quốc cho thấy tầm nhìn xa của Chính phủ: không chỉ lo giữ chính quyền trong hoàn cảnh hiểm nghèo, mà còn chuẩn bị một chương trình xây dựng đất nước về kinh tế, tài chính, hành chính, xã hội và văn hóa. Chặng I vì thế không chỉ là chặng giành chính quyền, mà còn là chặng đặt nền móng cho toàn bộ cuộc kháng chiến và kiến quốc về sau.'
                                }
                            ]
                        }
                    ],
                    keyTakeaways: [
                        'Chặng I bắt đầu từ thời cơ Tổng khởi nghĩa tháng 8/1945 và kết thúc ở những quyết sách kiến quốc cuối năm 1945.',
                        'Trong chặng này, cách mạng Việt Nam đồng thời hoàn thành ba việc lớn: giành chính quyền, thành lập Chính phủ lâm thời và xác lập các nhiệm vụ cấp bách của nhà nước mới.',
                        'Đây là chặng nền tảng, quyết định việc nền độc lập năm 1945 có được giữ vững và phát triển thành sức mạnh lâu dài hay không.'
                    ],
                    reviewQuestions: [
                        'Vì sao có thể nói thời cơ Tổng khởi nghĩa trong tháng 8/1945 là “chín muồi” đối với cách mạng Việt Nam?',
                        'Những quyết định ở Tân Trào đã tạo cơ sở như thế nào cho thắng lợi của Tổng khởi nghĩa Tháng Tám?',
                        'Trong những tháng cuối năm 1945, Chính phủ lâm thời phải đồng thời giải quyết những nhiệm vụ cấp bách nào?'
                    ],
                    relatedEventIds: [
                        'cach-mang-thang-8',
                        'doc-lap-1945'
                    ],
                    materials: [
                        {
                            type: 'Nguồn giai đoạn',
                            title: 'Giai đoạn 1945-1954: Kháng chiến và kiến quốc',
                            source: 'Cổng TTĐT Chính phủ',
                            url: 'https://chinhphu.vn/giai-doan-1945-1954-khang-chien-va-kien-quoc',
                            note: 'Nguồn chính cho khung nội dung của chặng I, đã được bạn chuyển sang file Word để dùng làm học liệu nền.'
                        }
                    ]
                }
            },
            outcomes: [
                'Hiểu vì sao thắng lợi năm 1945 chưa khép lại cuộc đấu tranh giành độc lập của dân tộc.',
                'Nắm được tiến trình từ Cách mạng Tháng Tám đến kháng chiến toàn quốc, Điện Biên Phủ và Geneva.',
                'Nhìn rõ vai trò của từng sự kiện trọng tâm trong toàn bộ giai đoạn 1945-1954.'
            ],
            mapLabel: 'Xem bản đồ sự kiện'
        },
        'chong-my': {
            title: 'Kháng chiến chống Mỹ 1954-1975',
            subtitle: 'Giai đoạn đấu tranh thống nhất đất nước',
            introSummary: 'Giai đoạn từ sau Hiệp định Geneva năm 1954 đến đại thắng mùa Xuân 1975, gắn với cuộc kháng chiến chống Mỹ và nhiệm vụ thống nhất đất nước.',
            sections: [],
            developmentStages: [],
            outcomes: [],
            mapLabel: 'Xem bản đồ sự kiện'
        },
        'thong-nhat': {
            title: 'Thống nhất đất nước 1975',
            subtitle: 'Mốc hoàn thành sự nghiệp giải phóng miền Nam',
            introSummary: 'Năm 1975 đánh dấu thắng lợi của cuộc Tổng tiến công và nổi dậy mùa Xuân, giải phóng miền Nam và hoàn thành thống nhất đất nước.',
            sections: [],
            developmentStages: [],
            outcomes: [],
            mapLabel: 'Xem bản đồ sự kiện'
        }
    },

    // Các sự kiện lịch sử
    events: [
        {
            id: 'cach-mang-thang-8',
            year: 1945,
            date: '19/08/1945',
            title: 'Cách mạng Tháng Tám',
            category: 'Cách mạng',
            description: 'Cuộc cách mạng do Đảng Cộng sản Đông Dương và Mặt trận Việt Minh lãnh đạo, lật đổ chế độ quân chủ và ách đô hộ của thực dân Pháp - phát xít Nhật.',
            significance: 'Mở ra kỷ nguyên mới cho dân tộc - kỷ nguyên độc lập, tự do. Lần đầu tiên nhân dân lao động nắm chính quyền trong tay.',
            image: 'https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/19-8-1967.jpg?dpi=150&quality=100&w=870',
            era: 'chong-phap',
            featured: true,
            detailFlow: [
                {
                    type: 'paragraph',
                    text: 'Trong tháng 08/1945, Hội nghị đại biểu toàn quốc của Đảng họp tại Tân Trào đã khẳng định thời cơ giành độc lập đã tới. Hội nghị quyết định phát động toàn dân khởi nghĩa giành chính quyền trước khi quân Đồng minh kéo vào Đông Dương, đồng thời nhấn mạnh ba nguyên tắc phải bảo đảm cho thắng lợi là tập trung, thống nhất và kịp thời.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngay sau quyết định đó, lúc 23 giờ ngày 13/08/1945, Ủy ban Khởi nghĩa ban hành Quân lệnh số 1 hiệu triệu toàn dân tổng khởi nghĩa. Ngày 16/08/1945, Đại hội Quốc dân họp tại Tân Trào tiếp tục thông qua 10 chính sách lớn của Việt Minh, tán thành Lệnh tổng khởi nghĩa, quy định quốc kỳ, quốc ca và thành lập Ủy ban Dân tộc Giải phóng Trung ương do Chủ tịch Hồ Chí Minh đứng đầu.'
                },
                {
                    type: 'paragraph',
                    text: 'Dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh, phong trào nổi dậy nhanh chóng lan rộng. Từ ngày 14 đến 18/08/1945, tổng khởi nghĩa đã giành thắng lợi ở nhiều vùng nông thôn đồng bằng Bắc Bộ, phần lớn miền Trung, một phần miền Nam và ở các thị xã như Bắc Giang, Hải Dương, Hà Tĩnh, Hội An, Quảng Nam. Đó là giai đoạn tạo thế áp đảo trước khi các trung tâm lớn lần lượt giành chính quyền.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 19/08/1945, khởi nghĩa thắng lợi ở Hà Nội, mở ra bước ngoặt có tính quyết định cho cả nước. Từ thắng lợi ở Thủ đô, khí thế cách mạng tiếp tục dâng cao, cổ vũ các địa phương còn lại nhanh chóng hành động và khẳng định rằng chính quyền cũ đã mất hẳn khả năng kiểm soát tình hình.'
                },
                {
                    type: 'image',
                    url: 'https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/19-8-1967.jpg?dpi=150&quality=100&w=870',
                    title: 'Trang nhất Báo Quân đội nhân dân ngày 19/08/1967',
                    caption: 'Tư liệu báo chí được QĐND sử dụng để gợi nhắc dấu ấn lịch sử và sức lan tỏa lâu dài của Cách mạng Tháng Tám trong đời sống chính trị Việt Nam.',
                    source: 'Báo Quân đội nhân dân'
                },
                {
                    type: 'paragraph',
                    text: 'Sau Hà Nội, ngày 23/08/1945 cuộc khởi nghĩa thắng lợi ở Huế cùng nhiều địa phương khác như Bắc Kạn, Hòa Bình, Hải Phòng, Hà Đông, Quảng Bình, Quảng Trị, Bình Định, Gia Lai, Bạc Liêu. Đến ngày 25/08/1945, phong trào tiếp tục giành thắng lợi ở Sài Gòn - Gia Định cùng Kon Tum, Sóc Trăng, Vĩnh Long, Trà Vinh, Biên Hòa, Tây Ninh, Bến Tre. Tại Côn Đảo, các chiến sĩ cách mạng bị giam cầm cũng nổi dậy giành chính quyền.'
                },
                {
                    type: 'paragraph',
                    text: 'Chỉ trong khoảng 15 ngày cuối tháng 08/1945, chính quyền trong cả nước đã về tay nhân dân. Thắng lợi ấy chấm dứt ách áp bức bóc lột kéo dài gần một thế kỷ của thực dân Pháp, xóa bỏ chế độ phong kiến và tạo tiền đề trực tiếp cho ngày 02/09/1945, khi Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.'
                }
            ],
            relatedMoments: [
                {
                    id: 'quan-lenh-so-1',
                    date: '13/08/1945',
                    title: 'Ban hành Quân lệnh số 1',
                    description: 'Ủy ban Khởi nghĩa toàn quốc phát lệnh, hiệu triệu toàn dân vùng dậy tổng khởi nghĩa.',
                    significance: 'Quân lệnh số 1 là tín hiệu hành động có tính quyết định, chuyển chủ trương khởi nghĩa thành mệnh lệnh thực tế trên phạm vi cả nước.',
                    location: 'Tân Trào',
                    image: 'https://th.bing.com/th/id/R.625c1b9cf5e6e65f948acfa169e35366?rik=XkBxMPOx2zmO6Q&riu=http%3a%2f%2fcuutnxpvietnam.org.vn%2fwp-content%2fuploads%2f2021%2f08%2fq2-720x955.jpg&ehk=VFdetk%2b33F%2bsvvcsWcvtlfsFZsDAa4czClx%2br7uKdxA%3d&risl=&pid=ImgRaw&r=0',
                    studySections: [
                        {
                            title: 'Hoàn cảnh lịch sử',
                            description: 'Vì sao mệnh lệnh này phải được ban ra rất nhanh.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Quân lệnh số 1 ra đời trong thời khắc rất đặc biệt: phát xít Nhật vừa đầu hàng Đồng minh, bộ máy chính quyền thân Nhật rơi vào rối loạn, còn quần chúng trong cả nước thì đã được Việt Minh chuẩn bị tinh thần nổi dậy từ trước. Đây là thời cơ có thật, nhưng cũng là thời cơ rất ngắn.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Nếu chậm hành động, cục diện có thể thay đổi bất lợi khi các lực lượng đối địch và quân ngoại bang kịp quay lại chiếm thế chủ động. Vì vậy, cách mạng không thể chỉ dừng ở việc nhận định tình hình, mà phải chuyển ngay sang mệnh lệnh hành động thống nhất trên phạm vi toàn quốc.'
                                }
                            ]
                        },
                        {
                            title: 'Nội dung quyết định của Quân lệnh số 1',
                            description: 'Mệnh lệnh đánh dấu bước chuyển từ chuẩn bị sang tổng khởi nghĩa.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Đêm 13/08/1945, Ủy ban Khởi nghĩa toàn quốc ban hành Quân lệnh số 1, hiệu triệu toàn dân đứng lên giành chính quyền trước khi quân Đồng minh kéo vào Đông Dương. Đây là mệnh lệnh chính thức phát động Tổng khởi nghĩa, không còn dừng ở mức chuẩn bị hay kêu gọi chung.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Quân lệnh thể hiện rõ tinh thần hành động nhanh, quyết đoán nhưng vẫn đặt dưới sự chỉ huy tập trung và thống nhất. Nhờ đó, các địa phương có chung một hiệu lệnh để phối hợp, tránh tình trạng nổi dậy rời rạc hoặc chậm thời cơ.'
                                },
                                {
                                    type: 'image',
                                    url: 'https://th.bing.com/th/id/R.625c1b9cf5e6e65f948acfa169e35366?rik=XkBxMPOx2zmO6Q&riu=http%3a%2f%2fcuutnxpvietnam.org.vn%2fwp-content%2fuploads%2f2021%2f08%2fq2-720x955.jpg&ehk=VFdetk%2b33F%2bsvvcsWcvtlfsFZsDAa4czClx%2br7uKdxA%3d&risl=&pid=ImgRaw&r=0',
                                    title: 'Bản sao Quân lệnh số 1',
                                    caption: 'Văn kiện này là hiệu lệnh chính thức đưa cuộc Tổng khởi nghĩa từ chủ trương chính trị sang hành động cách mạng trên thực tế.',
                                    source: 'Tư liệu tổng hợp'
                                }
                            ]
                        },
                        {
                            title: 'Kết quả trực tiếp',
                            description: 'Tác động của mệnh lệnh đối với nhịp phát triển của cách mạng.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Sau khi Quân lệnh số 1 được ban ra, phong trào giành chính quyền phát triển với tốc độ rất nhanh. Mệnh lệnh ấy mở đầu cho chuỗi quyết định tại Tân Trào và tạo nền cho các thắng lợi liên tiếp từ ngày 14 đến 18/08/1945 ở nhiều địa phương.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Nó cũng tạo điều kiện để các trung tâm lớn như Hà Nội, Huế, Sài Gòn - Gia Định bước vào tổng khởi nghĩa trong khí thế áp đảo. Nói cách khác, Quân lệnh số 1 không phải là một văn bản hình thức, mà là đòn phát lệnh thật sự cho toàn bộ nhịp phát triển của Cách mạng Tháng Tám.'
                                }
                            ]
                        },
                        {
                            title: 'Ý nghĩa lịch sử',
                            description: 'Vì sao đây là mốc mẫu rất phù hợp để mở đầu giai đoạn 1945-1954.',
                            flow: [
                                {
                                    type: 'paragraph',
                                    text: 'Về ý nghĩa lịch sử, Quân lệnh số 1 là dấu mốc thể hiện năng lực chớp thời cơ của Đảng và Việt Minh. Nó chuyển một chủ trương chiến lược thành mệnh lệnh hành động cụ thể, kịp thời, thống nhất và có sức hiệu triệu toàn dân.'
                                },
                                {
                                    type: 'paragraph',
                                    text: 'Với người học lịch sử, mốc này rất quan trọng vì nó giúp giải thích vì sao Cách mạng Tháng Tám có thể giành thắng lợi nhanh chóng trên phạm vi cả nước. Muốn hiểu thắng lợi ngày 19/08 ở Hà Nội và chuỗi thắng lợi sau đó, trước hết phải hiểu vì sao Quân lệnh số 1 được ban hành đúng lúc và có tác động lớn đến như vậy.'
                                }
                            ]
                        }
                    ],
                    keyTakeaways: [
                        'Quân lệnh số 1 được ban hành đêm 13/08/1945, ngay sau khi thời cơ cách mạng xuất hiện rõ rệt.',
                        'Mệnh lệnh này chuyển chủ trương Tổng khởi nghĩa thành hiệu lệnh hành động thống nhất trên phạm vi cả nước.',
                        'Đây là mắt xích mở đầu trực tiếp cho chuỗi thắng lợi của Cách mạng Tháng Tám 1945.'
                    ],
                    reviewQuestions: [
                        'Vì sao Quân lệnh số 1 phải được ban hành trong thời gian rất gấp?',
                        'Quân lệnh số 1 khác gì với việc chỉ xác định chủ trương khởi nghĩa trên phương diện chính trị?',
                        'Mốc này có vai trò như thế nào đối với thắng lợi của Cách mạng Tháng Tám?'
                    ],
                    materials: [
                        {
                            type: 'Nguồn nội dung',
                            title: 'Quân lệnh số 1, chớp thời cơ ngàn năm có một',
                            source: 'VOV',
                            url: 'https://vov.vn/chinh-tri/quan-lenh-so-1-chop-thoi-co-ngan-nam-co-mot-post1113957.vov',
                            note: 'Nguồn bài viết chính cho mốc Quân lệnh số 1.'
                        },
                        {
                            type: 'Ảnh minh họa',
                            title: 'Ảnh minh họa Quân lệnh số 1',
                            source: 'Tư liệu tổng hợp',
                            url: 'https://th.bing.com/th/id/R.625c1b9cf5e6e65f948acfa169e35366?rik=XkBxMPOx2zmO6Q&riu=http%3a%2f%2fcuutnxpvietnam.org.vn%2fwp-content%2fuploads%2f2021%2f08%2fq2-720x955.jpg&ehk=VFdetk%2b33F%2bsvvcsWcvtlfsFZsDAa4czClx%2br7uKdxA%3d&risl=&pid=ImgRaw&r=0',
                            note: 'Ảnh tư liệu minh họa cho Quân lệnh số 1.'
                        }
                    ]
                },
                {
                    id: 'dai-hoi-quoc-dan-tan-trao',
                    date: '16/08/1945',
                    title: 'Đại hội Quốc dân họp ở Tân Trào',
                    description: 'Đại hội thông qua chủ trương Tổng khởi nghĩa, 10 chính sách lớn của Việt Minh và cử ra Ủy ban Dân tộc Giải phóng Việt Nam.',
                    significance: 'Đây là sự kiện chính trị có ý nghĩa như tiền thân của Quốc hội Việt Nam, đồng thời củng cố tính chính danh cho sự lãnh đạo của cách mạng trước giờ khởi nghĩa.',
                    location: 'Tân Trào',
                    image: 'https://mediafile.qdnd.vn/images/2022/8/15/nnnx1608.jpg',
                    detailFlow: [
                        {
                            type: 'paragraph',
                            text: 'Ngày 16/08/1945, Đại hội Quốc dân họp tại Tân Trào với sự tham gia của hơn 60 đại biểu đại diện cho nhiều giới, nhiều địa phương. Đây là cuộc hội tụ chính trị quan trọng ngay trước thời điểm Tổng khởi nghĩa bùng nổ.'
                        },
                        {
                            type: 'paragraph',
                            text: 'Đại hội đã tán thành chủ trương Tổng khởi nghĩa, thông qua 10 chính sách lớn của Việt Minh, quyết định Quốc kỳ, Quốc ca và cử ra Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh đứng đầu.'
                        },
                        {
                            type: 'image',
                            url: 'https://mediafile.qdnd.vn/images/2022/8/15/nnnx1608.jpg',
                            title: 'Quốc dân Đại hội Tân Trào',
                            caption: 'Đại hội tạo nền tảng chính trị và tổ chức cho cuộc Tổng khởi nghĩa giành chính quyền.',
                            source: 'Báo Quân đội nhân dân'
                        },
                        {
                            type: 'paragraph',
                            text: 'Không chỉ quyết định công việc trước mắt, Đại hội Tân Trào còn cho thấy cách mạng đã có sự chuẩn bị về tổ chức, đường lối và lực lượng chính trị. Vì thế, sự kiện này thường được xem là điểm tựa chính trị trực tiếp của thắng lợi Cách mạng Tháng Tám.'
                        }
                    ],
                    materials: [
                        {
                            type: 'Nguồn nội dung',
                            title: 'Ngày 16-8-1945: Quốc dân Đại hội Tân Trào',
                            source: 'Báo Quân đội nhân dân',
                            url: 'https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-16-8-1945-quoc-dan-dai-hoi-tan-trao-tien-than-cua-quoc-hoi-viet-nam-da-duoc-trieu-tap-tai-tan-trao-700338',
                            note: 'Nguồn bài viết chính cho mốc Đại hội Quốc dân Tân Trào.'
                        },
                        {
                            type: 'Ảnh minh họa',
                            title: 'Ảnh minh họa Đại hội Tân Trào',
                            source: 'Báo Quân đội nhân dân',
                            url: 'https://mediafile.qdnd.vn/images/2022/8/15/nnnx1608.jpg',
                            note: 'Ảnh tư liệu về Đại hội Quốc dân tại Tân Trào.'
                        }
                    ]
                },
                {
                    id: 'ha-noi-gianh-chinh-quyen',
                    date: '19/08/1945',
                    title: 'Hà Nội giành chính quyền',
                    description: 'Quần chúng cách mạng và các đoàn thể cứu quốc làm chủ Quảng trường Nhà hát Lớn, mở đầu thắng lợi quyết định của Tổng khởi nghĩa.',
                    significance: 'Thắng lợi ở Hà Nội có tác dụng cổ vũ và dẫn dắt phong trào giành chính quyền trên phạm vi cả nước.',
                    location: 'Hà Nội',
                    image: 'https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/buithuhuong/2020_08_19/19%20thang%208.jpg',
                    detailFlow: [
                        {
                            type: 'paragraph',
                            text: 'Sau cuộc đảo chính Pháp của Nhật ngày 09/03/1945, không khí cách mạng ở Hà Nội ngày càng sôi sục. Xứ ủy Bắc Kỳ và Thành ủy Hà Nội khẩn trương xây dựng lực lượng chính trị, lực lượng quân sự và tổ chức nhiều phong trào để chuẩn bị cho giờ khởi nghĩa.'
                        },
                        {
                            type: 'paragraph',
                            text: 'Chiều 17/08/1945, Đảng bộ Hà Nội đã bí mật vận động quần chúng tham dự cuộc mít tinh của Tổng hội Viên chức do chính quyền thân Nhật tổ chức, rồi biến cuộc mít tinh ấy thành biểu tình ủng hộ Việt Minh. Đây là bước chuyển quan trọng xác nhận thời cơ khởi nghĩa đã chín muồi.'
                        },
                        {
                            type: 'image',
                            url: 'https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/buithuhuong/2020_08_19/19%20thang%208.jpg',
                            title: 'Quần chúng Hà Nội trong ngày 19/08/1945',
                            caption: 'Khởi nghĩa ở Hà Nội trở thành mốc mở đầu có ý nghĩa quyết định đối với thắng lợi chung của Cách mạng Tháng Tám.',
                            source: 'Báo Chính phủ'
                        },
                        {
                            type: 'paragraph',
                            text: 'Sáng 19/08/1945, hàng vạn đồng bào kéo về Quảng trường Nhà hát Lớn. Cuộc mít tinh nhanh chóng chuyển thành biểu tình cách mạng, quần chúng và các đoàn thể cứu quốc tiến chiếm các cơ quan đầu não. Đến tối cùng ngày, chính quyền ở Hà Nội đã về tay cách mạng.'
                        }
                    ],
                    materials: [
                        {
                            type: 'Nguồn nội dung',
                            title: 'Khởi nghĩa giành chính quyền ở Hà Nội',
                            source: 'Báo Chính phủ',
                            url: 'https://baochinhphu.vn/khoi-nghia-gianh-chinh-quyen-o-ha-noi-su-kien-dac-biet-trong-cach-mang-thang-tam-1945-102277816.htm',
                            note: 'Nguồn bài viết chính cho mốc Hà Nội giành chính quyền.'
                        },
                        {
                            type: 'Ảnh minh họa',
                            title: 'Ảnh khởi nghĩa giành chính quyền ở Hà Nội',
                            source: 'Báo Chính phủ',
                            url: 'https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/buithuhuong/2020_08_19/19%20thang%208.jpg',
                            note: 'Ảnh tư liệu về khí thế khởi nghĩa tại Hà Nội.'
                        }
                    ]
                },
                {
                    id: 'hue-gianh-chinh-quyen',
                    date: '23/08/1945',
                    title: 'Khởi nghĩa thắng lợi ở Huế',
                    description: 'Cố đô Huế giành chính quyền về tay nhân dân, làm lung lay tận gốc chế độ quân chủ cũ.',
                    significance: 'Thắng lợi ở Huế góp phần quyết định làm tan rã triều đình phong kiến, mở đường cho việc Bảo Đại thoái vị.',
                    location: 'Huế',
                    image: 'https://cdn.nhandan.vn/images/e2614f80f5d365abde6bcd54168d150f8ece975a7f59cafd6990ff5bc868b48aeb7065b5c81a8b9c153073956d4112f027f1e9b62e1c9e8e8027ce11485ab03c/1-7598.jpg.avif',
                    detailFlow: [
                        {
                            type: 'paragraph',
                            text: 'Ngày 23/08/1945, dưới sức ép mạnh mẽ của phong trào cách mạng, chính quyền ở cố đô Huế đã về tay nhân dân. Đây là thắng lợi đặc biệt quan trọng vì Huế là trung tâm chính trị của triều đình nhà Nguyễn.'
                        },
                        {
                            type: 'image',
                            url: 'https://cdn.nhandan.vn/images/e2614f80f5d365abde6bcd54168d150f8ece975a7f59cafd6990ff5bc868b48aeb7065b5c81a8b9c153073956d4112f027f1e9b62e1c9e8e8027ce11485ab03c/1-7598.jpg.avif',
                            title: 'Quần chúng Huế trong ngày giành chính quyền',
                            caption: 'Khí thế quần chúng ở Huế cho thấy cách mạng đã lan tới trung tâm của chế độ phong kiến cũ.',
                            source: 'Báo Nhân Dân'
                        },
                        {
                            type: 'paragraph',
                            text: 'Việc Huế giành chính quyền không chỉ có ý nghĩa địa phương. Nó tác động trực tiếp đến sự tồn tại của triều đình, khiến chế độ quân chủ mất chỗ dựa chính trị và tinh thần ngay tại kinh đô.'
                        },
                        {
                            type: 'image',
                            url: 'https://cdn.nhandan.vn/images/e2614f80f5d365abde6bcd54168d150f8ece975a7f59cafd6990ff5bc868b48a090d6d5150be4b14327ddc14f4d071d5/5.jpg.avif',
                            title: 'Thắng lợi ở Huế mở đường cho biến chuyển lớn',
                            caption: 'Thắng lợi ở Huế là bước đệm trực tiếp dẫn tới sự kiện Bảo Đại thoái vị, đánh dấu sự cáo chung của chế độ quân chủ.',
                            source: 'Báo Nhân Dân'
                        },
                        {
                            type: 'paragraph',
                            text: 'Vì thế, mốc 23/08/1945 được xem là mắt xích quan trọng nối thắng lợi của Tổng khởi nghĩa với sự ra đời của chính quyền cách mạng trên phạm vi cả nước.'
                        }
                    ],
                    materials: [
                        {
                            type: 'Nguồn nội dung',
                            title: 'Ngày 23/8/1945: Cố đô Huế giành chính quyền về tay nhân dân',
                            source: 'Báo Nhân Dân',
                            url: 'https://nhandan.vn/ngay-2381945-co-do-hue-gianh-chinh-quyen-ve-tay-nhan-dan-post902065.html',
                            note: 'Nguồn bài viết chính cho mốc Huế giành chính quyền.'
                        },
                        {
                            type: 'Ảnh minh họa',
                            title: 'Khởi nghĩa giành chính quyền ở Huế',
                            source: 'Báo Nhân Dân',
                            url: 'https://cdn.nhandan.vn/images/e2614f80f5d365abde6bcd54168d150f8ece975a7f59cafd6990ff5bc868b48aeb7065b5c81a8b9c153073956d4112f027f1e9b62e1c9e8e8027ce11485ab03c/1-7598.jpg.avif',
                            note: 'Ảnh tư liệu số 1 cho mốc Huế giành chính quyền.'
                        },
                        {
                            type: 'Ảnh minh họa',
                            title: 'Khởi nghĩa giành chính quyền ở Huế - ảnh tư liệu bổ sung',
                            source: 'Báo Nhân Dân',
                            url: 'https://cdn.nhandan.vn/images/e2614f80f5d365abde6bcd54168d150f8ece975a7f59cafd6990ff5bc868b48a090d6d5150be4b14327ddc14f4d071d5/5.jpg.avif',
                            note: 'Ảnh tư liệu số 2 cho mốc Huế giành chính quyền.'
                        }
                    ]
                },
                {
                    id: 'sai-gon-gianh-chinh-quyen',
                    date: '25/08/1945',
                    title: 'Khởi nghĩa thắng lợi ở Sài Gòn - Gia Định',
                    description: 'Phong trào giành chính quyền lan tới Nam Bộ, hoàn thiện thắng lợi của Tổng khởi nghĩa trên phạm vi cả nước.',
                    significance: 'Thắng lợi ở Sài Gòn - Gia Định khẳng định cuộc Tổng khởi nghĩa đã giành kết quả trên phạm vi cả nước, nối liền khí thế cách mạng từ Bắc vào Nam.',
                    location: 'Sài Gòn - Gia Định',
                    detailParagraphs: [
                        'Sau những thắng lợi liên tiếp ở Bắc Bộ và Trung Bộ, phong trào cách mạng ở Nam Bộ cũng nhanh chóng dâng cao. Tại Sài Gòn - Gia Định, quần chúng cách mạng vùng dậy, giành chính quyền ở đô thị lớn nhất phía Nam.',
                        'Chiến thắng này có ý nghĩa hoàn chỉnh thắng lợi của Tổng khởi nghĩa trên bình diện toàn quốc. Nó cho thấy lệnh khởi nghĩa không chỉ thành công ở một vài trung tâm, mà đã thực sự biến thành phong trào cách mạng rộng khắp.',
                        'Khi Sài Gòn - Gia Định giành chính quyền, Cách mạng Tháng Tám về cơ bản hoàn thành thắng lợi trên cả nước. Đây là cơ sở thực tiễn quan trọng để nước Việt Nam Dân chủ Cộng hòa ra đời ít ngày sau đó.'
                    ]
                }
            ],
            materials: [
                {
                    type: 'Nguồn nội dung',
                    title: 'Ngày 19-8-1945: Cách mạng Tháng Tám thành công',
                    source: 'Báo Quân đội nhân dân',
                    url: 'https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-19-8-1945-cach-mang-thang-tam-thanh-cong-700812',
                    note: 'Nguồn bài viết chính cho sự kiện Cách mạng Tháng Tám.'
                },
                {
                    type: 'Ảnh minh họa',
                    title: 'Trang nhất Báo Quân đội nhân dân ngày 19/08/1967',
                    source: 'Báo Quân đội nhân dân',
                    url: 'https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/19-8-1967.jpg?dpi=150&quality=100&w=870',
                    note: 'Ảnh minh họa do QĐND cung cấp, dùng để gợi nhắc dấu ấn lịch sử của Cách mạng Tháng Tám.'
                },
                {
                    type: 'Video tham khảo',
                    title: 'Trang tổng hợp video liên quan trên Bing',
                    source: 'Bing Video',
                    url: 'https://www.bing.com/videos/riverview/relatedvideo?q=c%c3%a1ch+m%e1%ba%a1ng+th%c3%a1ng+8++n%c4%83km+1945&mid=67AA582926979379B75767AA582926979379B757&FORM=VIRE',
                    note: 'Link tổng hợp để dò chủ đề, nên ưu tiên thay bằng link video gốc khi có thể.'
                },
                {
                    type: 'Video minh họa',
                    title: 'Video YouTube về Cách mạng Tháng Tám năm 1945',
                    source: 'YouTube',
                    url: 'https://youtu.be/u7kjhRCfj2o?si=YyQw628JO33NMFVL',
                    note: 'Video minh họa chung cho không khí và diễn biến của Cách mạng Tháng Tám.'
                }
            ]
        },
        {
            id: 'doc-lap-1945',
            year: 1945,
            date: '02/09/1945',
            title: 'Tuyên ngôn Độc lập',
            category: 'Sự kiện trọng đại',
            description: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
            significance: 'Đánh dấu sự chấm dứt ách thống trị của thực dân Pháp và phong kiến, mở ra kỷ nguyên độc lập tự do cho dân tộc Việt Nam.',
            image: 'assets/events/tuyen-ngon-doc-lap-bing.webp',
            era: 'chong-phap',
            relatedMoments: [
                {
                    date: '28/08/1945',
                    title: 'Chính phủ Lâm thời ra mắt quốc dân',
                    description: 'Chính phủ Cách mạng Lâm thời Việt Nam Dân chủ Cộng hòa được công bố để chuẩn bị cho ngày độc lập.',
                    location: 'Hà Nội'
                },
                {
                    date: '30/08/1945',
                    title: 'Vua Bảo Đại thoái vị',
                    description: 'Chế độ quân chủ nhà Nguyễn chính thức chấm dứt, tạo cơ sở chính trị cho nhà nước mới.',
                    location: 'Huế'
                },
                {
                    date: '03/09/1945',
                    title: 'Phiên họp đầu tiên của Chính phủ',
                    description: 'Chính phủ đề ra những nhiệm vụ cấp bách như chống đói, chống dốt và tổ chức tổng tuyển cử.',
                    location: 'Hà Nội'
                },
                {
                    date: '06/01/1946',
                    title: 'Tổng tuyển cử đầu tiên',
                    description: 'Nhân dân cả nước đi bầu Quốc hội khóa I, củng cố tính chính danh của chính quyền cách mạng.',
                    location: 'Toàn quốc'
                }
            ],
            featured: true,
            materials: [
                {
                    type: 'Video minh họa',
                    title: 'Bác Hồ đọc Tuyên ngôn Độc lập',
                    source: 'YouTube',
                    url: 'https://youtu.be/xRKUB3fUTJM?si=6O4LgxybkxwyPKFz',
                    note: 'Video tư liệu phù hợp với mốc 02/09/1945, dùng để minh họa trực tiếp cho trang Tuyên ngôn Độc lập.'
                }
            ]
        },
        {
            id: 'khang-chien-1946',
            year: 1946,
            date: '19/12/1946',
            title: 'Toàn quốc kháng chiến',
            category: 'Kháng chiến',
            description: 'Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh vang lên, mở đầu cuộc kháng chiến trường kỳ chống thực dân Pháp.',
            significance: '"Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
            era: 'chong-phap',
            relatedMoments: [
                {
                    id: 'thong-qua-hien-phap-1946',
                    date: '09/11/1946',
                    title: 'Thông qua Hiến pháp 1946',
                    description: 'Quốc hội khóa I thông qua bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa, củng cố nền tảng pháp lý của chế độ mới.',
                    location: 'Hà Nội'
                },
                {
                    id: 'khang-chien-1946-related-0',
                    date: '18/12/1946',
                    title: 'Pháp gửi tối hậu thư ở Hà Nội',
                    description: 'Thực dân Pháp đòi tước quyền kiểm soát an ninh, đẩy tình hình đến bờ vực chiến tranh toàn diện.',
                    location: 'Hà Nội'
                },
                {
                    id: 'khang-chien-1946-related-1',
                    date: '19/12/1946',
                    title: 'Cuộc chiến đấu ở Hà Nội bùng nổ',
                    description: 'Các lực lượng vũ trang và nhân dân thủ đô nổ súng, giam chân địch để bảo toàn lực lượng kháng chiến lâu dài.',
                    location: 'Hà Nội'
                },
                {
                    id: 'khang-chien-1946-related-2',
                    date: '20/12/1946',
                    title: 'Lời kêu gọi Toàn quốc kháng chiến được truyền đi',
                    description: 'Lời hiệu triệu của Chủ tịch Hồ Chí Minh lan rộng, cổ vũ toàn dân bước vào cuộc kháng chiến trường kỳ.',
                    location: 'Toàn quốc'
                },
                {
                    id: 'khang-chien-1946-related-3',
                    date: '17/02/1947',
                    title: 'Trung đoàn Thủ đô rút khỏi Liên khu I',
                    description: 'Lực lượng chiến đấu hoàn thành nhiệm vụ giam chân địch ở Hà Nội, chuyển sang giai đoạn kháng chiến lâu dài.',
                    location: 'Hà Nội'
                },
                {
                    id: 'chien-thang-viet-bac-1947',
                    date: '22/12/1947',
                    title: 'Chiến thắng Việt Bắc Thu Đông 1947',
                    description: 'Quân và dân ta đập tan cuộc tiến công quy mô lớn của Pháp lên căn cứ địa Việt Bắc, bảo vệ cơ quan đầu não kháng chiến.',
                    location: 'Việt Bắc'
                }
            ]
        },
        {
            id: 'chien-dich-bien-gioi',
            year: 1950,
            date: '16/09/1950',
            title: 'Chiến dịch Biên giới Thu Đông',
            category: 'Chiến thắng',
            description: 'Chiến dịch quân sự lớn đầu tiên do quân đội Việt Nam chủ động tiến công, phá vỡ thế bao vây của thực dân Pháp ở biên giới Việt — Trung.',
            significance: 'Giải phóng vùng biên giới, mở thông đường liên lạc quốc tế, đưa cuộc kháng chiến chống Pháp sang giai đoạn mới — từ phòng ngự sang phản công.',
            stats: { days: 29, casualties: 8000 },
            image: 'https://images.unsplash.com/photo-1460881680093-d9a8cc483552?w=600',
            era: 'chong-phap',
            relatedMoments: [
                {
                    id: 'cac-nuoc-cong-nhan-viet-nam-1950',
                    date: '18/01/1950',
                    title: 'Các nước xã hội chủ nghĩa công nhận Việt Nam',
                    description: 'Bắt đầu từ Trung Quốc, nhiều nước xã hội chủ nghĩa lần lượt công nhận và đặt quan hệ ngoại giao với Việt Nam Dân chủ Cộng hòa.',
                    location: 'Quốc tế'
                },
                {
                    id: 'tong-dong-vien-1950',
                    date: '12/02/1950',
                    title: 'Lệnh Tổng động viên được ban hành',
                    description: 'Chính phủ phát lệnh tổng động viên, huy động sức người, sức của cho giai đoạn phản công mới của cuộc kháng chiến.',
                    location: 'Toàn quốc'
                },
                {
                    id: 'chien-dich-bien-gioi-related-0',
                    date: '16/09/1950',
                    title: 'Mở màn đánh Đông Khê',
                    description: 'Quân ta nổ súng vào cứ điểm Đông Khê, mở đầu chiến dịch Biên giới Thu Đông 1950.',
                    location: 'Đông Khê'
                },
                {
                    id: 'chien-dich-bien-gioi-related-1',
                    date: '18/09/1950',
                    title: 'Đông Khê bị tiêu diệt',
                    description: 'Cứ điểm quan trọng trên đường số 4 bị hạ, làm rung chuyển hệ thống phòng thủ của Pháp ở biên giới.',
                    location: 'Đông Khê'
                },
                {
                    id: 'chien-dich-bien-gioi-related-2',
                    date: '03/10/1950',
                    title: 'Pháp rút khỏi Cao Bằng',
                    description: 'Đối phương buộc phải bỏ Cao Bằng, tạo thời cơ cho quân ta liên tiếp đánh các cánh quân cơ động.',
                    location: 'Cao Bằng'
                },
                {
                    id: 'chien-dich-bien-gioi-related-3',
                    date: '08/10/1950',
                    title: 'Các binh đoàn ứng cứu bị đánh thiệt hại nặng',
                    description: 'Quân ta chặn đánh liên tục trên đường số 4, làm tan rã ý đồ hợp điểm của quân Pháp.',
                    location: 'Đường số 4'
                },
                {
                    id: 'chien-dich-bien-gioi-related-4',
                    date: '22/10/1950',
                    title: 'Chiến dịch kết thúc thắng lợi',
                    description: 'Toàn tuyến biên giới được khai thông, thế chủ động chiến lược chuyển hẳn về phía ta.',
                    location: 'Biên giới Việt - Trung'
                }
            ]
        },
        {
            id: 'dien-bien-phu',
            year: 1954,
            date: '07/05/1954',
            title: 'Chiến thắng Điện Biên Phủ',
            category: 'Chiến thắng',
            description: 'Chiến thắng "lừng lẫy năm châu, chấn động địa cầu" — đánh dấu sự thất bại hoàn toàn của thực dân Pháp tại Việt Nam.',
            significance: 'Chấm dứt hoàn toàn sự đô hộ của thực dân Pháp, mở đầu thời kỳ sụp đổ của chủ nghĩa thực dân cũ trên toàn thế giới.',
            stats: { days: 56, casualties: 16000 },
            image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=600',
            featured: true,
            era: 'chong-phap',
            relatedMoments: [
                {
                    id: 'dai-hoi-dang-lan-thu-ii',
                    date: '19/02/1951',
                    title: 'Đại hội Đảng toàn quốc lần thứ II',
                    description: 'Đại hội xác định đường lối kháng chiến toàn dân, toàn diện, trường kỳ và đưa Đảng Lao động Việt Nam ra hoạt động công khai.',
                    location: 'Chiêm Hóa, Tuyên Quang'
                },
                {
                    id: 'chien-thang-hoa-binh',
                    date: '23/02/1952',
                    title: 'Chiến thắng Hòa Bình',
                    description: 'Cuộc tiến công Đông Xuân 1951-1952 kết thúc thắng lợi, phá sản một kế hoạch chiến tranh lớn của địch.',
                    location: 'Hòa Bình'
                },
                {
                    id: 'chien-thang-tay-bac',
                    date: '10/12/1952',
                    title: 'Chiến thắng Tây Bắc',
                    description: 'Chiến dịch Tây Bắc giải phóng vùng chiến lược rộng lớn, tạo điều kiện nhiều mặt cho Điện Biên Phủ sau này.',
                    location: 'Tây Bắc'
                },
                {
                    id: 'luat-cai-cach-ruong-dat',
                    date: '19/12/1953',
                    title: 'Ban bố Luật cải cách ruộng đất',
                    description: 'Luật cải cách ruộng đất được công bố, tạo thêm chỗ dựa xã hội cho kháng chiến và động viên lực lượng nông dân.',
                    location: 'Toàn quốc'
                },
                {
                    id: 'dien-bien-phu-related-0',
                    date: '13/03/1954',
                    title: 'Mở màn trận Điện Biên Phủ',
                    description: 'Quân ta tiến công cụm cứ điểm Him Lam, mở đầu chiến dịch quyết chiến chiến lược.',
                    location: 'Điện Biên Phủ'
                },
                {
                    id: 'dien-bien-phu-related-1',
                    date: '30/03/1954',
                    title: 'Bước vào đợt tiến công thứ hai',
                    description: 'Quân ta đánh mạnh vào khu trung tâm, làm suy sụp hệ thống phòng ngự then chốt của tập đoàn cứ điểm.',
                    location: 'Điện Biên Phủ'
                },
                {
                    id: 'dien-bien-phu-related-2',
                    date: '01/05/1954',
                    title: 'Tổng công kích đợt cuối',
                    description: 'Các mũi tiến công đồng loạt siết chặt khu trung tâm Mường Thanh và Hồng Cúm.',
                    location: 'Điện Biên Phủ'
                },
                {
                    id: 'dien-bien-phu-related-3',
                    date: '07/05/1954',
                    title: 'Bắt sống tướng De Castries',
                    description: 'Bộ chỉ huy địch bị đánh sập, toàn bộ tập đoàn cứ điểm Điện Biên Phủ đầu hàng.',
                    location: 'Mường Thanh'
                }
            ]
        },
        {
            id: 'hiep-dinh-geneva',
            year: 1954,
            date: '21/07/1954',
            title: 'Hiệp định Geneva',
            category: 'Ngoại giao',
            description: 'Hiệp định đình chỉ chiến sự ở Đông Dương, chia Việt Nam tạm thời theo vĩ tuyến 17, quy định tổng tuyển cử thống nhất vào năm 1956.',
            significance: 'Ghi nhận thắng lợi ngoại giao quan trọng, khẳng định quyền dân tộc tự quyết của nhân dân Việt Nam trên trường quốc tế.',
            image: 'https://congdoantuyenquang.vn/Image/cmt8.jpg',
            era: 'chong-phap',
            relatedMoments: [
                {
                    id: 'hiep-dinh-geneva-related-0',
                    date: '26/04/1954',
                    title: 'Hội nghị Geneva khai mạc',
                    description: 'Các cường quốc và các bên liên quan nhóm họp để bàn về việc lập lại hòa bình ở châu Á, trong đó có Đông Dương.',
                    location: 'Geneva, Thụy Sĩ'
                },
                {
                    id: 'hiep-dinh-geneva-related-1',
                    date: '08/05/1954',
                    title: 'Bắt đầu bàn về Đông Dương',
                    description: 'Sau thắng lợi Điện Biên Phủ, vấn đề chấm dứt chiến tranh ở Đông Dương được đưa vào thương lượng trực tiếp.',
                    location: 'Geneva, Thụy Sĩ'
                },
                {
                    id: 'giai-phong-thu-do',
                    date: '10/10/1954',
                    title: 'Giải phóng Thủ đô Hà Nội',
                    description: 'Quân dân ta tiếp quản Thủ đô, khép lại thắng lợi của chặng kết thúc kháng chiến chống Pháp và mở đầu thời kỳ mới ở miền Bắc.',
                    location: 'Hà Nội'
                }
            ]
        },
        {
            id: 'duong-truong-son',
            year: 1959,
            date: '19/05/1959',
            title: 'Mở đường Trường Sơn',
            category: 'Chiến lược',
            description: 'Đoàn 559 được thành lập, bắt đầu mở tuyến đường vận tải chiến lược xuyên dãy Trường Sơn từ Bắc vào Nam.',
            significance: 'Tuyến đường huyết mạch dài hàng nghìn km đã vận chuyển hàng triệu tấn vũ khí và binh lính, quyết định thắng lợi kháng chiến.',
            image: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=600',
            era: 'chong-my'
        },
        {
            id: 'tet-mau-than',
            year: 1968,
            date: '30/01/1968',
            title: 'Tổng tiến công Tết Mậu Thân',
            category: 'Tổng tiến công',
            description: 'Cuộc tổng tiến công và nổi dậy đồng loạt tại các thành phố miền Nam, tạo bước ngoặt quan trọng trong cuộc kháng chiến chống Mỹ.',
            significance: 'Làm sụp đổ chiến lược "Chiến tranh cục bộ", buộc Mỹ phải xuống thang chiến tranh và ngồi vào bàn đàm phán.',
            image: 'assets/events/tet-mau-than-1968-qdnd.jpg',
            era: 'chong-my',
            featured: true
        },
        {
            id: 'hiep-dinh-paris',
            year: 1973,
            date: '27/01/1973',
            title: 'Hiệp định Paris',
            category: 'Ngoại giao',
            description: 'Mỹ buộc phải ký Hiệp định Paris, cam kết tôn trọng độc lập, chủ quyền, toàn vẹn lãnh thổ của Việt Nam và rút quân khỏi miền Nam.',
            significance: 'Thắng lợi ngoại giao quyết định — Mỹ phải rút quân, tạo điều kiện cho cuộc tổng tiến công giải phóng miền Nam.',
            image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01f1ece?w=600',
            era: 'chong-my'
        },
        {
            id: 'phuoc-long',
            year: 1975,
            date: '06/01/1975',
            title: 'Chiến thắng Phước Long',
            category: 'Chiến thắng',
            description: 'Quân giải phóng tiến công và giải phóng hoàn toàn tỉnh Phước Long — tỉnh đầu tiên ở miền Nam được giải phóng trọn vẹn.',
            significance: 'Trận thắng "thăm dò" quyết định: chứng minh Mỹ không quay lại can thiệp, mở đường cho cuộc tổng tiến công mùa Xuân 1975.',
            image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=600',
            era: 'thong-nhat'
        },
        {
            id: 'chien-dich-ho-chi-minh',
            year: 1975,
            date: '26/04/1975',
            title: 'Chiến dịch Hồ Chí Minh',
            category: 'Tổng tiến công',
            description: 'Chiến dịch quân sự lớn nhất trong lịch sử Việt Nam, 5 cánh quân đồng loạt tiến vào Sài Gòn từ mọi hướng.',
            significance: 'Chiến dịch quyết định cuối cùng, tạo tiền đề trực tiếp cho sự kiện lịch sử 30/4/1975.',
            stats: { days: 5, casualties: 0 },
            image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600',
            era: 'thong-nhat'
        },
        {
            id: 'giai-phong-1975',
            year: 1975,
            date: '30/04/1975',
            title: 'Giải phóng miền Nam, thống nhất đất nước',
            category: 'Đại thắng',
            description: 'Xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập, cờ giải phóng tung bay trên nóc dinh — kết thúc 30 năm chiến tranh.',
            significance: 'Hoàn thành sự nghiệp giải phóng dân tộc, thống nhất Tổ quốc, mở ra kỷ nguyên mới — kỷ nguyên cả nước đi lên chủ nghĩa xã hội.',
            image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600',
            featured: true,
            era: 'thong-nhat'
        }
    ],

    // Nhân vật lịch sử
    figures: [
        {
            id: 'ho-chi-minh',
            name: 'Hồ Chí Minh',
            title: 'Chủ tịch nước',
            years: '1890 – 1969',
            description: 'Anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất. Người đã lãnh đạo nhân dân Việt Nam giành độc lập từ tay Pháp và Nhật.',
            image: 'https://hochiminh.tuoitreiuh.vn/wp-content/uploads/2021/04/ChandungHCM-1890-1969.jpg',
            era: 'chong-phap'
        },
        {
            id: 'vo-nguyen-giap',
            name: 'Võ Nguyên Giáp',
            title: 'Đại tướng',
            years: '1911 – 2013',
            description: 'Vị tướng huyền thoại, "Người anh cả" của Quân đội nhân dân Việt Nam. Chỉ huy chiến thắng Điện Biên Phủ lừng lẫy.',
            image: 'https://tse3.mm.bing.net/th/id/OIP.fkOYi9YbTrZW4ZJo5byOLwHaK6?rs=1&pid=ImgDetMain&o=7&rm=3',
            era: 'chong-phap'
        },
        {
            id: 'pham-van-dong',
            name: 'Phạm Văn Đồng',
            title: 'Thủ tướng',
            years: '1906 – 2000',
            description: 'Nhà cách mạng lỗi lạc, Thủ tướng Chính phủ Việt Nam trong suốt 32 năm, đại diện Việt Nam tại Hội nghị Geneva.',
            image: 'https://tse3.mm.bing.net/th/id/OIP.NKZyxZOQY-UtmEV1z71LWAHaIR?rs=1&pid=ImgDetMain&o=7&rm=3',
            era: 'chong-phap'
        },
        {
            id: 'truong-chinh',
            name: 'Trường Chinh',
            title: 'Tổng Bí thư',
            years: '1907 – 1988',
            description: 'Nhà lý luận cách mạng xuất sắc, tác giả "Đề cương về Văn hóa Việt Nam" 1943. Tổng Bí thư Đảng qua nhiều thời kỳ.',
            image: 'https://tse3.mm.bing.net/th/id/OIP.58dSfCFbgK0n-sL5cG-iRAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
            era: 'chong-phap'
        },
        {
            id: 'le-duan',
            name: 'Lê Duẩn',
            title: 'Tổng Bí thư',
            years: '1907 – 1986',
            description: 'Kiến trúc sư của đường lối cách mạng miền Nam, Tổng Bí thư Đảng lãnh đạo cuộc kháng chiến chống Mỹ đến thắng lợi.',
            image: 'https://tse1.mm.bing.net/th/id/OIP.bS4AiN-WRXfT0nzDXVaLbwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
            era: 'chong-my'
        },
        {
            id: 'nguyen-thi-minh-khai',
            name: 'Nguyễn Thị Minh Khai',
            title: 'Nhà cách mạng',
            years: '1910 – 1941',
            description: 'Nữ chiến sĩ cách mạng tiêu biểu, Bí thư Thành ủy Sài Gòn-Chợ Lớn. Biểu tượng của tinh thần bất khuất.',
            image: 'https://bna.1cdn.vn/2024/10/19/minh-khai.jpg',
            era: 'chong-phap'
        },
        {
            id: 'ton-duc-thang',
            name: 'Tôn Đức Thắng',
            title: 'Chủ tịch nước',
            years: '1888 – 1980',
            description: 'Nhà cách mạng lão thành, Chủ tịch nước kế nhiệm Hồ Chí Minh. Từng tham gia binh biến Hắc Hải năm 1919.',
            image: 'https://khanhhoa.tdtu.edu.vn/sites/nhatrang/files/nhatrang/GioiThieu/ChuTichTonDucThang/Chu-tich-Ton-Duc-Thang.jpg',
            era: 'chong-phap'
        },
        {
            id: 'nguyen-van-troi',
            name: 'Nguyễn Văn Trỗi',
            title: 'Anh hùng liệt sĩ',
            years: '1940 – 1964',
            description: 'Chiến sĩ biệt động Sài Gòn, hy sinh anh dũng khi mưu sát Bộ trưởng Quốc phòng Mỹ McNamara. Biểu tượng tuổi trẻ hào hùng.',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtNGfF4SXIZxdBSOdoQiUG7vUsgi9I6odzanv0CI1tb2Gs-dSq36JvDApc1UoafvyUH5g9ayx0AgOdBAf-OD0oUiR1N_GOIzz9wLzUyTN-CN7YRkX6CzL8440SKDMH6p04qkpA29EmIwDOw2R3Usrl6gxzwFO_54dj8Ai4rjl0adt40wKBXXsN9Gb7hd8/s1600/431963903_122134216898124487_5453635784837641889_n.jpg',
            era: 'chong-my'
        }
    ],

    // 50 câu hỏi quiz theo 5 cấp độ
    quizQuestions: [
        {
            id: 1,
            level: 1,
            question: 'Cách mạng Tháng Tám diễn ra vào năm nào?',
            options: ['1943', '1944', '1945', '1946'],
            correct: '1945',
            explanation: 'Cách mạng Tháng Tám năm 1945 lật đổ chế độ phong kiến và ách đô hộ thực dân, mở ra kỷ nguyên độc lập.'
        },
        {
            id: 2,
            level: 1,
            question: 'Ai là người đọc Tuyên ngôn Độc lập ngày 2/9/1945?',
            options: ['Võ Nguyên Giáp', 'Hồ Chí Minh', 'Phạm Văn Đồng', 'Trường Chinh'],
            correct: 'Hồ Chí Minh',
            explanation: 'Chủ tịch Hồ Chí Minh đã đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.'
        },
        {
            id: 3,
            level: 1,
            question: 'Nước Việt Nam Dân chủ Cộng hòa ra đời vào ngày nào?',
            options: ['19/8/1945', '2/9/1945', '6/1/1946', '19/12/1946'],
            correct: '2/9/1945',
            explanation: 'Ngày 2/9/1945 là thời điểm Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.'
        },
        {
            id: 4,
            level: 1,
            question: 'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?',
            options: ['1953', '1954', '1955', '1956'],
            correct: '1954',
            explanation: 'Chiến thắng Điện Biên Phủ diễn ra ngày 7/5/1954, kết thúc thắng lợi cuộc tiến công chiến lược kéo dài 56 ngày đêm.'
        },
        {
            id: 5,
            level: 1,
            question: 'Ai là Đại tướng chỉ huy chiến dịch Điện Biên Phủ?',
            options: ['Lê Duẩn', 'Phạm Văn Đồng', 'Võ Nguyên Giáp', 'Trường Chinh'],
            correct: 'Võ Nguyên Giáp',
            explanation: 'Đại tướng Võ Nguyên Giáp là Tổng chỉ huy chiến dịch Điện Biên Phủ, gắn với chiến thắng lịch sử năm 1954.'
        },
        {
            id: 6,
            level: 1,
            question: 'Ngày Giải phóng miền Nam, thống nhất đất nước là ngày nào?',
            options: ['30/4/1975', '2/9/1945', '19/12/1946', '7/5/1954'],
            correct: '30/4/1975',
            explanation: 'Ngày 30/4/1975, Chiến dịch Hồ Chí Minh toàn thắng, kết thúc cuộc kháng chiến chống Mỹ, cứu nước.'
        },
        {
            id: 7,
            level: 1,
            question: 'Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra vào năm nào?',
            options: ['1965', '1968', '1972', '1975'],
            correct: '1968',
            explanation: 'Tổng tiến công và nổi dậy Tết Mậu Thân nổ ra đầu năm 1968, tạo bước ngoặt lớn trong cuộc kháng chiến chống Mỹ.'
        },
        {
            id: 8,
            level: 1,
            question: 'Hiệp định Paris được ký vào năm nào?',
            options: ['1971', '1972', '1973', '1974'],
            correct: '1973',
            explanation: 'Hiệp định Paris được ký ngày 27/1/1973, buộc Mỹ rút quân và tạo điều kiện thuận lợi cho cách mạng Việt Nam.'
        },
        {
            id: 9,
            level: 1,
            question: 'Đoàn 559 mở đường Trường Sơn được thành lập năm nào?',
            options: ['1957', '1958', '1959', '1960'],
            correct: '1959',
            explanation: 'Đoàn 559 được thành lập ngày 19/5/1959 để mở đường Trường Sơn, tuyến chi viện chiến lược Bắc - Nam.'
        },
        {
            id: 10,
            level: 1,
            question: 'Hiệp định Giơnevơ về Đông Dương được ký tại thành phố nào?',
            options: ['Paris', 'Geneva', 'Moskva', 'Bắc Kinh'],
            correct: 'Geneva',
            explanation: 'Hiệp định Giơnevơ được ký tại Geneva, Thụy Sĩ, vào tháng 7/1954.'
        },
        {
            id: 11,
            level: 2,
            question: 'Cuộc Tổng tuyển cử bầu Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa diễn ra ngày nào?',
            options: ['2/9/1945', '6/1/1946', '19/12/1946', '7/5/1954'],
            correct: '6/1/1946',
            explanation: 'Ngày 6/1/1946, nhân dân cả nước đi bầu Quốc hội khóa I, xây dựng nền dân chủ cộng hòa non trẻ.'
        },
        {
            id: 12,
            level: 2,
            question: 'Lời kêu gọi Toàn quốc kháng chiến được phát đi vào thời điểm nào?',
            options: ['19/8/1945', '2/9/1945', '19/12/1946', '10/10/1954'],
            correct: '19/12/1946',
            explanation: 'Tối 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến, mở đầu cuộc kháng chiến chống Pháp trên phạm vi cả nước.'
        },
        {
            id: 13,
            level: 2,
            question: 'Chiến dịch Biên giới Thu - Đông diễn ra vào năm nào?',
            options: ['1948', '1949', '1950', '1951'],
            correct: '1950',
            explanation: 'Chiến dịch Biên giới Thu - Đông 1950 là chiến dịch lớn đánh dấu bước phát triển mới của quân đội ta.'
        },
        {
            id: 14,
            level: 2,
            question: 'Tuyên ngôn Độc lập được đọc tại đâu?',
            options: ['Nhà hát Lớn Hà Nội', 'Quảng trường Ba Đình, Hà Nội', 'Phủ Chủ tịch', 'Thành Huế'],
            correct: 'Quảng trường Ba Đình, Hà Nội',
            explanation: 'Tuyên ngôn Độc lập được Chủ tịch Hồ Chí Minh đọc tại Quảng trường Ba Đình, Hà Nội.'
        },
        {
            id: 15,
            level: 2,
            question: 'Thủ đô nào được giải phóng ngày 10/10/1954?',
            options: ['Huế', 'Sài Gòn', 'Hà Nội', 'Hải Phòng'],
            correct: 'Hà Nội',
            explanation: 'Ngày 10/10/1954, Hà Nội được giải phóng, đánh dấu bước chuyển quan trọng của miền Bắc sang thời kỳ hòa bình xây dựng.'
        },
        {
            id: 16,
            level: 2,
            question: 'Mục đích chiến lược quan trọng của đường Trường Sơn là gì?',
            options: ['Chi viện sức người và vật chất cho miền Nam', 'Mở rộng giao thương quốc tế', 'Đưa dân di cư ra Bắc', 'Bảo vệ biên giới phía Bắc'],
            correct: 'Chi viện sức người và vật chất cho miền Nam',
            explanation: 'Đường Trường Sơn là tuyến chi viện chiến lược, bảo đảm vận chuyển lực lượng và vật chất từ miền Bắc vào miền Nam.'
        },
        {
            id: 17,
            level: 2,
            question: 'Theo Hiệp định Paris, lực lượng nào phải rút khỏi miền Nam Việt Nam?',
            options: ['Quân đội Pháp', 'Quân Mỹ và quân đồng minh của Mỹ', 'Quân Trung Hoa Dân quốc', 'Quân Nhật'],
            correct: 'Quân Mỹ và quân đồng minh của Mỹ',
            explanation: 'Một nội dung quan trọng của Hiệp định Paris là Mỹ cam kết rút quân và chấm dứt can thiệp quân sự trực tiếp ở miền Nam Việt Nam.'
        },
        {
            id: 18,
            level: 2,
            question: 'Sau Hiệp định Giơnevơ 1954, giới tuyến quân sự tạm thời ở Việt Nam nằm tại vĩ tuyến nào?',
            options: ['Vĩ tuyến 13', 'Vĩ tuyến 15', 'Vĩ tuyến 17', 'Vĩ tuyến 19'],
            correct: 'Vĩ tuyến 17',
            explanation: 'Hiệp định Giơnevơ quy định giới tuyến quân sự tạm thời ở Việt Nam tại vĩ tuyến 17.'
        },
        {
            id: 19,
            level: 2,
            question: 'Chiến dịch Hồ Chí Minh toàn thắng diễn ra trong bao nhiêu ngày?',
            options: ['3 ngày', '5 ngày', '7 ngày', '10 ngày'],
            correct: '5 ngày',
            explanation: 'Chiến dịch Hồ Chí Minh diễn ra từ ngày 26/4 đến 30/4/1975, kết thúc sau 5 ngày.'
        },
        {
            id: 20,
            level: 2,
            question: 'Một tác động lớn của cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 là gì?',
            options: ['Buộc Mỹ xuống thang chiến tranh và chấp nhận đàm phán', 'Buộc Pháp ký Hiệp định Giơnevơ', 'Giải phóng hoàn toàn miền Nam', 'Mở ra đường Trường Sơn'],
            correct: 'Buộc Mỹ xuống thang chiến tranh và chấp nhận đàm phán',
            explanation: 'Tết Mậu Thân 1968 tạo cú sốc lớn về chính trị và quân sự, buộc Mỹ phải xuống thang chiến tranh và đi vào đàm phán.'
        },
        {
            id: 21,
            level: 3,
            question: 'Hiệp định Sơ bộ giữa Việt Nam và Pháp được ký vào ngày nào?',
            options: ['6/3/1946', '14/9/1946', '19/12/1946', '7/5/1954'],
            correct: '6/3/1946',
            explanation: 'Hiệp định Sơ bộ ngày 6/3/1946 là một bước đi ngoại giao quan trọng để tranh thủ thời gian cho cách mạng Việt Nam.'
        },
        {
            id: 22,
            level: 3,
            question: 'Tạm ước Việt - Pháp được ký ngày nào?',
            options: ['6/1/1946', '6/3/1946', '14/9/1946', '19/12/1946'],
            correct: '14/9/1946',
            explanation: 'Tạm ước Việt - Pháp được ký ngày 14/9/1946 trong nỗ lực tiếp tục giữ hòa bình của Chính phủ Việt Nam.'
        },
        {
            id: 23,
            level: 3,
            question: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng diễn ra năm nào?',
            options: ['1949', '1950', '1951', '1952'],
            correct: '1951',
            explanation: 'Đại hội II của Đảng họp đầu năm 1951, đánh dấu bước trưởng thành về tổ chức và đường lối lãnh đạo kháng chiến.'
        },
        {
            id: 24,
            level: 3,
            question: 'Mục tiêu nổi bật của Chiến dịch Biên giới 1950 là gì?',
            options: ['Khai thông biên giới Việt - Trung, mở rộng liên lạc quốc tế', 'Giải phóng hoàn toàn Nam Bộ', 'Bảo vệ Hà Nội trước quân Pháp', 'Tạo điều kiện ký Hiệp định Paris'],
            correct: 'Khai thông biên giới Việt - Trung, mở rộng liên lạc quốc tế',
            explanation: 'Chiến dịch Biên giới 1950 có ý nghĩa rất lớn trong việc khai thông biên giới, mở rộng căn cứ kháng chiến và tăng cường quan hệ quốc tế.'
        },
        {
            id: 25,
            level: 3,
            question: 'Luật Cải cách ruộng đất được ban hành vào năm nào?',
            options: ['1951', '1952', '1953', '1954'],
            correct: '1953',
            explanation: 'Luật Cải cách ruộng đất được ban hành cuối năm 1953 nhằm củng cố hậu phương và động viên nông dân trong kháng chiến.'
        },
        {
            id: 26,
            level: 3,
            question: 'Chiến thắng Tây Bắc diễn ra vào năm nào?',
            options: ['1950', '1951', '1952', '1953'],
            correct: '1952',
            explanation: 'Chiến thắng Tây Bắc năm 1952 góp phần mở rộng vùng giải phóng và chuẩn bị điều kiện cho các chiến dịch lớn tiếp theo.'
        },
        {
            id: 27,
            level: 3,
            question: 'Tướng De Castries bị bắt sống trong chiến dịch nào?',
            options: ['Chiến dịch Việt Bắc', 'Chiến dịch Biên giới', 'Chiến dịch Điện Biên Phủ', 'Chiến dịch Hòa Bình'],
            correct: 'Chiến dịch Điện Biên Phủ',
            explanation: 'Ngày 7/5/1954, tướng De Castries bị bắt sống tại sở chỉ huy tập đoàn cứ điểm Điện Biên Phủ.'
        },
        {
            id: 28,
            level: 3,
            question: 'Vấn đề Đông Dương được đưa ra bàn tại Hội nghị Giơnevơ từ ngày nào?',
            options: ['26/4/1954', '7/5/1954', '8/5/1954', '20/7/1954'],
            correct: '8/5/1954',
            explanation: 'Hội nghị Giơnevơ khai mạc ngày 26/4/1954, nhưng từ ngày 8/5/1954 mới chính thức bàn về vấn đề Đông Dương.'
        },
        {
            id: 29,
            level: 3,
            question: 'Tỉnh nào được giải phóng hoàn toàn đầu tiên trong Tổng tiến công mùa Xuân 1975, tạo ra bước thử chiến lược quan trọng?',
            options: ['Quảng Trị', 'Phước Long', 'Bình Định', 'Tây Ninh'],
            correct: 'Phước Long',
            explanation: 'Thắng lợi Phước Long đầu năm 1975 giúp ta đánh giá tương quan lực lượng và phản ứng của Mỹ trước khả năng giải phóng hoàn toàn miền Nam.'
        },
        {
            id: 30,
            level: 3,
            question: 'Đoàn 559 được thành lập vào ngày nào?',
            options: ['19/5/1959', '2/9/1959', '27/1/1973', '30/4/1975'],
            correct: '19/5/1959',
            explanation: 'Đoàn 559 được thành lập ngày 19/5/1959, mở đầu tuyến vận tải chiến lược Trường Sơn.'
        },
        {
            id: 31,
            level: 4,
            question: 'Kế hoạch quân sự nào của Pháp - Mỹ bị đánh bại trong chiến thắng Điện Biên Phủ?',
            options: ['Kế hoạch Rơve', 'Kế hoạch Đờ Lát đơ Tátxinhi', 'Kế hoạch Nava', 'Kế hoạch Staley - Taylor'],
            correct: 'Kế hoạch Nava',
            explanation: 'Chiến thắng Điện Biên Phủ đã đập tan Kế hoạch Nava, làm phá sản nỗ lực quân sự lớn cuối cùng của Pháp - Mỹ ở Đông Dương.'
        },
        {
            id: 32,
            level: 4,
            question: 'Cứ điểm nào bị quân ta tiến công mở màn trong chiến dịch Điện Biên Phủ?',
            options: ['A1', 'Độc Lập', 'C1', 'Him Lam'],
            correct: 'Him Lam',
            explanation: 'Đêm 13/3/1954, quân ta nổ súng mở màn chiến dịch Điện Biên Phủ bằng trận đánh vào Him Lam.'
        },
        {
            id: 33,
            level: 4,
            question: 'Hội nghị nào quyết định phát động Toàn quốc kháng chiến vào cuối năm 1946?',
            options: ['Hội nghị Tân Trào', 'Hội nghị Trung ương 8', 'Hội nghị Vạn Phúc', 'Hội nghị Giơnevơ'],
            correct: 'Hội nghị Vạn Phúc',
            explanation: 'Ngày 18 và 19/12/1946, Hội nghị Vạn Phúc đã quyết định phát động Toàn quốc kháng chiến.'
        },
        {
            id: 34,
            level: 4,
            question: 'Sau Chiến dịch Biên giới Thu - Đông 1950, quân ta giành được ưu thế chiến lược nào?',
            options: ['Mất quyền chủ động chiến lược', 'Giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ', 'Chuyển hẳn sang chiến tranh ở đô thị', 'Buộc Mỹ ký Hiệp định Paris'],
            correct: 'Giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ',
            explanation: 'Chiến dịch Biên giới 1950 giúp quân ta chuyển sang thế chủ động chiến lược trên chiến trường chính Bắc Bộ.'
        },
        {
            id: 35,
            level: 4,
            question: 'Hiệp định Paris được ký chính thức vào ngày nào?',
            options: ['21/7/1954', '27/1/1973', '30/4/1975', '19/5/1959'],
            correct: '27/1/1973',
            explanation: 'Hiệp định Paris được ký ngày 27/1/1973, đánh dấu thắng lợi lớn trên mặt trận ngoại giao của nhân dân Việt Nam.'
        },
        {
            id: 36,
            level: 4,
            question: 'Ý nghĩa chiến lược nổi bật của thắng lợi Phước Long đầu năm 1975 là gì?',
            options: ['Buộc Pháp rút quân khỏi Đông Dương', 'Chứng tỏ Mỹ khó can thiệp trở lại bằng quân sự, củng cố thời cơ giải phóng hoàn toàn miền Nam', 'Mở đường Trường Sơn', 'Mở đầu Tổng tiến công Tết Mậu Thân'],
            correct: 'Chứng tỏ Mỹ khó can thiệp trở lại bằng quân sự, củng cố thời cơ giải phóng hoàn toàn miền Nam',
            explanation: 'Thắng lợi Phước Long cho thấy khả năng Mỹ khó quay lại can thiệp trực tiếp, tạo thêm cơ sở cho quyết tâm giải phóng hoàn toàn miền Nam.'
        },
        {
            id: 37,
            level: 4,
            question: 'Trình tự thời gian nào dưới đây là đúng?',
            options: ['Chiến dịch Tây Bắc 1952 → Chiến dịch Biên giới 1950 → Điện Biên Phủ 1954', 'Chiến dịch Biên giới 1950 → Chiến dịch Tây Bắc 1952 → Điện Biên Phủ 1954', 'Điện Biên Phủ 1954 → Chiến dịch Biên giới 1950 → Tây Bắc 1952', 'Chiến dịch Biên giới 1950 → Điện Biên Phủ 1954 → Chiến dịch Tây Bắc 1952'],
            correct: 'Chiến dịch Biên giới 1950 → Chiến dịch Tây Bắc 1952 → Điện Biên Phủ 1954',
            explanation: 'Trật tự phát triển của các chiến dịch lớn trong kháng chiến chống Pháp là Biên giới 1950, Tây Bắc 1952 và Điện Biên Phủ 1954.'
        },
        {
            id: 38,
            level: 4,
            question: 'Con sông gắn với giới tuyến quân sự tạm thời sau Hiệp định Giơnevơ là sông nào?',
            options: ['Sông Hồng', 'Sông Cửu Long', 'Sông Bến Hải', 'Sông Thu Bồn'],
            correct: 'Sông Bến Hải',
            explanation: 'Giới tuyến quân sự tạm thời sau Hiệp định Giơnevơ gắn với khu vực sông Bến Hải, gần vĩ tuyến 17.'
        },
        {
            id: 39,
            level: 4,
            question: 'Trong Tết Mậu Thân 1968, quân và dân ta đã đồng loạt tiến công vào khoảng bao nhiêu đô thị, thị xã?',
            options: ['Khoảng 30', 'Khoảng 60', 'Hơn 100', 'Gần 200'],
            correct: 'Hơn 100',
            explanation: 'Tết Mậu Thân 1968 là cuộc tiến công đồng loạt vào hơn 100 đô thị, thị xã trên toàn miền Nam.'
        },
        {
            id: 40,
            level: 4,
            question: 'Mục tiêu trực tiếp của Chiến dịch Hồ Chí Minh là gì?',
            options: ['Giải phóng Hà Nội', 'Giải phóng Sài Gòn - Gia Định, kết thúc chiến tranh', 'Khai thông biên giới Việt - Trung', 'Mở đầu đàm phán ở Paris'],
            correct: 'Giải phóng Sài Gòn - Gia Định, kết thúc chiến tranh',
            explanation: 'Chiến dịch Hồ Chí Minh hướng tới mục tiêu trực tiếp là giải phóng Sài Gòn - Gia Định, kết thúc thắng lợi cuộc kháng chiến chống Mỹ.'
        },
        {
            id: 41,
            level: 5,
            question: 'Thứ tự nào phản ánh đúng tiến trình từ giành chính quyền đến bước vào kháng chiến toàn quốc?',
            options: ['Cách mạng Tháng Tám → Tuyên ngôn Độc lập → Tổng tuyển cử 6/1/1946 → Toàn quốc kháng chiến', 'Tuyên ngôn Độc lập → Cách mạng Tháng Tám → Toàn quốc kháng chiến → Tổng tuyển cử 6/1/1946', 'Cách mạng Tháng Tám → Tổng tuyển cử 6/1/1946 → Tuyên ngôn Độc lập → Toàn quốc kháng chiến', 'Tổng tuyển cử 6/1/1946 → Cách mạng Tháng Tám → Tuyên ngôn Độc lập → Toàn quốc kháng chiến'],
            correct: 'Cách mạng Tháng Tám → Tuyên ngôn Độc lập → Tổng tuyển cử 6/1/1946 → Toàn quốc kháng chiến',
            explanation: 'Tiến trình đúng là giành chính quyền trong Cách mạng Tháng Tám, tuyên bố độc lập, tổ chức tổng tuyển cử và sau đó bước vào cuộc kháng chiến toàn quốc.'
        },
        {
            id: 42,
            level: 5,
            question: 'Vì sao chiến thắng Điện Biên Phủ được coi là trận quyết chiến chiến lược?',
            options: ['Vì đây là trận đầu tiên ta sử dụng xe tăng', 'Vì chiến thắng này làm phá sản Kế hoạch Nava và buộc Pháp phải đàm phán kết thúc chiến tranh', 'Vì chiến thắng này diễn ra ở miền Nam', 'Vì sau đó Mỹ ký ngay Hiệp định Paris'],
            correct: 'Vì chiến thắng này làm phá sản Kế hoạch Nava và buộc Pháp phải đàm phán kết thúc chiến tranh',
            explanation: 'Điện Biên Phủ là trận quyết chiến chiến lược vì nó đập tan nỗ lực quân sự chủ yếu của Pháp, tạo bước ngoặt quyết định trên cả chiến trường và bàn đàm phán.'
        },
        {
            id: 43,
            level: 5,
            question: 'Ý nghĩa nổi bật nhất của Hiệp định Paris 1973 đối với cách mạng Việt Nam là gì?',
            options: ['Buộc Pháp công nhận độc lập của Việt Nam', 'Buộc Mỹ rút quân, tạo so sánh lực lượng mới có lợi cho cách mạng miền Nam', 'Đưa cả nước lập tức thống nhất', 'Chấm dứt ngay mọi giao tranh trên toàn Đông Dương'],
            correct: 'Buộc Mỹ rút quân, tạo so sánh lực lượng mới có lợi cho cách mạng miền Nam',
            explanation: 'Hiệp định Paris 1973 là thắng lợi lớn trên mặt trận ngoại giao, buộc Mỹ rút quân và tạo điều kiện thuận lợi để cách mạng miền Nam tiến lên giải phóng hoàn toàn.'
        },
        {
            id: 44,
            level: 5,
            question: 'Sau năm 1954, nhiệm vụ cơ bản của miền Bắc xã hội chủ nghĩa là gì?',
            options: ['Chỉ tập trung phát triển công nghiệp nhẹ', 'Xây dựng chủ nghĩa xã hội và làm hậu phương lớn cho miền Nam', 'Chuẩn bị ký Hiệp định Giơnevơ lần hai', 'Rút toàn bộ lực lượng về nông thôn'],
            correct: 'Xây dựng chủ nghĩa xã hội và làm hậu phương lớn cho miền Nam',
            explanation: 'Sau 1954, miền Bắc bước vào thời kỳ xây dựng chủ nghĩa xã hội và trở thành hậu phương lớn cho cuộc đấu tranh giải phóng miền Nam.'
        },
        {
            id: 45,
            level: 5,
            question: 'Vì sao đường Trường Sơn được xem là tuyến chi viện chiến lược đặc biệt quan trọng?',
            options: ['Vì đây là tuyến đường thương mại lớn nhất Đông Dương', 'Vì bảo đảm vận chuyển liên tục người và vật chất từ Bắc vào Nam trong suốt chiến tranh', 'Vì nối Hà Nội với Hải Phòng', 'Vì là nơi diễn ra Hội nghị Paris'],
            correct: 'Vì bảo đảm vận chuyển liên tục người và vật chất từ Bắc vào Nam trong suốt chiến tranh',
            explanation: 'Đường Trường Sơn giữ vai trò sống còn trong việc bảo đảm lực lượng, vũ khí và hậu cần cho chiến trường miền Nam.'
        },
        {
            id: 46,
            level: 5,
            question: 'Sự kiện nào trực tiếp tạo thế mạnh cho phái đoàn Việt Nam tại Hội nghị Giơnevơ?',
            options: ['Tổng tuyển cử ngày 6/1/1946', 'Chiến thắng Điện Biên Phủ', 'Mở đường Trường Sơn', 'Tết Mậu Thân 1968'],
            correct: 'Chiến thắng Điện Biên Phủ',
            explanation: 'Thắng lợi Điện Biên Phủ tạo ra thế mạnh quân sự và chính trị trực tiếp cho phái đoàn Việt Nam tại Hội nghị Giơnevơ.'
        },
        {
            id: 47,
            level: 5,
            question: 'Theo Hiệp định Giơnevơ, vĩ tuyến 17 có ý nghĩa như thế nào?',
            options: ['Là biên giới quốc gia lâu dài của Việt Nam', 'Là giới tuyến quân sự tạm thời, không phải ranh giới chính trị lâu dài', 'Là đường biên giữa Việt Nam và Lào', 'Là ranh giới của khu căn cứ Việt Bắc'],
            correct: 'Là giới tuyến quân sự tạm thời, không phải ranh giới chính trị lâu dài',
            explanation: 'Hiệp định Giơnevơ chỉ quy định vĩ tuyến 17 là giới tuyến quân sự tạm thời, không phải biên giới chia cắt lâu dài đất nước.'
        },
        {
            id: 48,
            level: 5,
            question: 'Thắng lợi nào mở ra khả năng giải phóng hoàn toàn miền Nam trong thời gian ngắn vào năm 1975?',
            options: ['Chiến thắng Điện Biên Phủ', 'Thắng lợi Phước Long', 'Hiệp định Paris', 'Tổng tuyển cử 1946'],
            correct: 'Thắng lợi Phước Long',
            explanation: 'Thắng lợi Phước Long là căn cứ thực tiễn quan trọng để Đảng nhận định thời cơ giải phóng hoàn toàn miền Nam đã chín muồi.'
        },
        {
            id: 49,
            level: 5,
            question: 'Ý nghĩa quan trọng của ngày 10/10/1954 đối với miền Bắc là gì?',
            options: ['Miền Bắc hoàn thành cải cách ruộng đất', 'Thủ đô Hà Nội được giải phóng, mở đầu thời kỳ hòa bình xây dựng ở miền Bắc', 'Mỹ rút hết quân khỏi Việt Nam', 'Đường Trường Sơn được mở'],
            correct: 'Thủ đô Hà Nội được giải phóng, mở đầu thời kỳ hòa bình xây dựng ở miền Bắc',
            explanation: 'Ngày 10/10/1954, Hà Nội được giải phóng, thể hiện thắng lợi cụ thể của cuộc kháng chiến chống Pháp trên miền Bắc.'
        },
        {
            id: 50,
            level: 5,
            question: 'Điểm chung của Cách mạng Tháng Tám 1945, Điện Biên Phủ 1954 và Đại thắng mùa Xuân 1975 là gì?',
            options: ['Đều là những thắng lợi quyết định, tạo bước ngoặt lớn cho cách mạng Việt Nam', 'Đều diễn ra trong cùng một năm', 'Đều là kết quả trực tiếp của Hiệp định Paris', 'Đều chỉ có ý nghĩa trong phạm vi quân sự'],
            correct: 'Đều là những thắng lợi quyết định, tạo bước ngoặt lớn cho cách mạng Việt Nam',
            explanation: 'Ba mốc này đều là những thắng lợi có ý nghĩa quyết định, đưa cách mạng Việt Nam sang những bước phát triển mới về độc lập, chủ quyền và thống nhất đất nước.'
        }
    ],

    // Tính năng nổi bật
    features: [
        {
            icon: '📜',
            title: 'Dòng thời gian tương tác',
            description: '12 sự kiện lịch sử quan trọng được trình bày theo dòng thời gian trực quan.'
        },
        {
            icon: '🗺️',
            title: 'Bản đồ chiến thuật',
            description: 'Mô phỏng diễn biến các trận đánh lịch sử bằng bản đồ số hóa.'
        },
        {
            icon: '🧠',
            title: 'Kiểm tra kiến thức',
            description: '50 câu hỏi trắc nghiệm theo 5 cấp độ từ dễ đến khó, giúp ôn tập lại kiến thức theo từng chặng.'
        },
        {
            icon: '🤖',
            title: 'Trợ lý AI lịch sử',
            description: 'Hỏi đáp với trợ lý AI thông minh — giải đáp mọi thắc mắc về lịch sử Việt Nam.'
        }
    ],

    aiResponses: {
        greeting: 'Xin chào! 👋 Tôi là trợ lý AI chuyên về lịch sử Việt Nam giai đoạn 1945–1975. Hãy hỏi tôi về các sự kiện, nhân vật, hoặc trận đánh lịch sử!',
        help: 'Tôi có thể giúp bạn về:\n🔹 Các sự kiện lịch sử quan trọng\n🔹 Nhân vật lịch sử vĩ đại\n🔹 Ý nghĩa các trận đánh\n🔹 Dòng thời gian & mốc lịch sử\n🔹 Hiệp định và ngoại giao',
        fallback: 'Câu hỏi rất hay! 🤔 Hiện tại tôi chỉ có thông tin chi tiết về giai đoạn 1945–1975. Bạn có thể hỏi về Điện Biên Phủ, Tết Mậu Thân, Hiệp định Paris, hay các nhân vật như Hồ Chí Minh, Võ Nguyên Giáp...'
    }
};

historicalData.eraDetails['chong-phap'].stageDetails['stage-1'] = {
    id: 'stage-1',
    title: 'Từ Ủy ban Dân tộc Giải phóng đến Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa',
    tag: 'Chặng phát triển',
    label: 'Chặng I / 7',
    period: 'Tháng 8 - 12/1945',
    focus: 'Giành chính quyền, xác lập chính quyền cách mạng và triển khai những quyết sách kiến quốc đầu tiên của nước Việt Nam Dân chủ Cộng hòa',
    image: 'https://mediafile.qdnd.vn/images/2022/8/15/nnnx1608.jpg',
    description: 'Đây là chặng mở đầu của giai đoạn 1945-1954, kéo dài từ khi thời cơ Tổng khởi nghĩa xuất hiện trong tháng 8/1945 đến khi chính quyền cách mạng non trẻ từng bước củng cố được bộ máy nhà nước vào cuối năm 1945. Trong chặng này, cách mạng Việt Nam không chỉ giành chính quyền thành công mà còn nhanh chóng chuyển sang công việc kiến quốc, tổ chức nhà nước và bảo vệ nền độc lập vừa giành được.',
    significance: 'Ý nghĩa lớn nhất của chặng I là đặt nền móng cho cả cuộc kháng chiến và kiến quốc về sau. Nếu không kịp thời biến thắng lợi của Cách mạng Tháng Tám thành một chính quyền hợp pháp, có chương trình hành động rõ ràng và có khả năng huy động toàn dân, thì nền độc lập năm 1945 rất khó đứng vững trước nạn đói, nạn dốt, khủng hoảng kinh tế và nguy cơ xâm lược trở lại của các thế lực bên ngoài.',
    studySections: [
        {
            title: 'Thời cơ cách mạng và quyết định phát lệnh Tổng khởi nghĩa',
            description: 'Từ chuyển biến của tình hình thế giới đến quyết định kịp thời ở Tân Trào trong những ngày giữa tháng 8/1945.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Tháng 8/1945, Chiến tranh thế giới thứ hai bước vào giai đoạn kết thúc. Ở châu Âu, phát xít Đức và Ý đã đầu hàng; ở châu Á, Hồng quân Liên Xô đánh tan đạo quân Quan Đông của Nhật. Những diễn biến ấy làm cho bộ máy thống trị của Nhật ở Đông Dương nhanh chóng rơi vào khủng hoảng, tạo ra thời cơ có ý nghĩa quyết định cho cách mạng Việt Nam.'
                },
                {
                    type: 'paragraph',
                    text: 'Từ ngày 13 đến 15/08/1945, Hội nghị toàn quốc của Đảng họp tại Tân Trào đã nhận định rõ rằng thời cơ giành chính quyền đã chín muồi. Hội nghị chủ trương phát động toàn dân Tổng khởi nghĩa trước khi quân Đồng minh kéo vào Đông Dương, đồng thời xác định những phương hướng lớn về đối nội, đối ngoại của cách mạng trong tình hình mới.'
                },
                {
                    type: 'paragraph',
                    text: 'Cũng trong khuôn khổ hội nghị, Ủy ban Khởi nghĩa toàn quốc được thành lập do Trường Chinh phụ trách. Đêm 13/08/1945, Quân lệnh số 1 được ban hành, hiệu triệu đồng bào và chiến sĩ cả nước đứng lên giành chính quyền. Đây là dấu mốc mở đầu trực tiếp cho cao trào Tổng khởi nghĩa trên phạm vi toàn quốc.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-1/image1.jpeg',
                    title: 'Tư liệu trong hồ sơ giai đoạn 1',
                    caption: 'Hình ảnh tư liệu được lưu trong hồ sơ chặng I, gắn với không khí chuẩn bị Tổng khởi nghĩa và quyết tâm chớp thời cơ cách mạng trong tháng 8/1945.',
                    source: 'Hồ sơ giai đoạn 1'
                }
            ]
        },
        {
            title: 'Đại hội Quốc dân Tân Trào và sự hợp thức hóa chính quyền cách mạng',
            description: 'Những quyết định chính trị và tổ chức làm cho cuộc Tổng khởi nghĩa có cơ sở chính danh và có bộ máy lãnh đạo rõ ràng.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngày 16/08/1945, Đại hội Quốc dân họp tại Tân Trào với sự tham gia của đại biểu nhiều giới, nhiều địa phương. Đại hội tán thành chủ trương Tổng khởi nghĩa, thông qua Mười chính sách lớn của Việt Minh, quyết định Quốc kỳ nền đỏ sao vàng, chọn Tiến quân ca làm Quốc ca và bầu ra Ủy ban Dân tộc Giải phóng Việt Nam do Chủ tịch Hồ Chí Minh đứng đầu.'
                },
                {
                    type: 'paragraph',
                    text: 'Những quyết định của Đại hội Quốc dân có ý nghĩa rất lớn, vì chúng tạo ra cơ sở chính trị và tổ chức cho việc chuyển từ chuẩn bị sang hành động. Chỉ trong một thời gian rất ngắn, cách mạng Việt Nam đã có đủ chủ trương khởi nghĩa, có lệnh hành động thống nhất và có một bộ máy lãnh đạo mang tính đại diện dân tộc.'
                },
                {
                    type: 'paragraph',
                    text: 'Trong những ngày này, Chủ tịch Hồ Chí Minh đã gửi lời hiệu triệu toàn quốc, nhấn mạnh rằng giờ quyết định cho vận mệnh dân tộc đã đến và đồng bào cả nước phải đứng dậy đem sức ta mà tự giải phóng cho ta. Lời kêu gọi ấy nối quyết tâm chính trị ở Tân Trào với hành động thực tế của quần chúng trên phạm vi cả nước.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-1/image2.jpeg',
                    title: 'Tư liệu trong hồ sơ giai đoạn 1',
                    caption: 'Tư liệu của chặng I gợi lại bối cảnh Tân Trào, nơi hoàn tất những quyết định chính trị và tổ chức có tính nền tảng cho thắng lợi của Tổng khởi nghĩa.',
                    source: 'Hồ sơ giai đoạn 1'
                }
            ]
        },
        {
            title: 'Tổng khởi nghĩa thắng lợi trên cả nước',
            description: 'Cuộc giành chính quyền diễn ra nhanh, mạnh và quyết định trong nửa cuối tháng 8/1945.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Dưới sự lãnh đạo của Đảng và Việt Minh, quần chúng nhân dân trên cả nước đã đồng loạt vùng dậy. Ngày 19/08/1945, Hà Nội khởi nghĩa thắng lợi; ngày 23/08/1945, Huế giành chính quyền; ngày 25/08/1945, Sài Gòn và nhiều địa phương Nam Bộ, Nam Trung Bộ nổi dậy thành công. Chỉ trong vòng mười hai ngày, chính quyền ở phần lớn các địa phương đã về tay nhân dân.'
                },
                {
                    type: 'paragraph',
                    text: 'Thắng lợi của Cách mạng Tháng Tám đã xóa bỏ chế độ quân chủ tồn tại hàng nghìn năm, chấm dứt ách thống trị kéo dài gần một thế kỷ của thực dân Pháp và đập tan bộ máy thống trị của phát xít Nhật cùng tay sai. Một thời đại mới mở ra khi quyền lực nhà nước thực sự thuộc về nhân dân.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 25/08/1945, Chủ tịch Hồ Chí Minh từ chiến khu về Hà Nội. Ngày 27/08/1945, Ủy ban Dân tộc Giải phóng do Đại hội Quốc dân bầu ra được cải tổ thành Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa. Thành phần Chính phủ được mở rộng, mời thêm nhiều nhân sĩ ngoài Việt Minh tham gia để bảo đảm tính chất đoàn kết dân tộc và đại diện rộng rãi cho quốc gia.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 30/08/1945, sự thoái vị của Bảo Đại được chấp nhận và ấn, kiếm của triều đình được trao cho đại diện Chính phủ cách mạng. Sự kiện ấy khép lại biểu tượng chính trị cuối cùng của chế độ phong kiến cũ, đồng thời khẳng định rõ hơn tính chính danh của chính quyền cách mạng mới.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-1/image3.jpeg',
                    title: 'Tư liệu trong hồ sơ giai đoạn 1',
                    caption: 'Hình ảnh tư liệu của chặng I phản ánh khí thế Tổng khởi nghĩa và bước chuyển rất nhanh từ thắng lợi trên đường phố sang việc xác lập chính quyền mới.',
                    source: 'Hồ sơ giai đoạn 1'
                }
            ]
        },
        {
            title: 'Từ ngày độc lập đến sáu nhiệm vụ cấp bách đầu tiên',
            description: 'Sự xác lập chính danh của Nhà nước Việt Nam Dân chủ Cộng hòa và chương trình hành động mở đầu cho công cuộc kiến quốc.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngày 02/09/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc Tuyên ngôn Độc lập, trịnh trọng tuyên bố với quốc dân và thế giới sự ra đời của nước Việt Nam Dân chủ Cộng hòa. Bản Tuyên ngôn không chỉ khai sinh một nhà nước mới mà còn khẳng định quyền độc lập, tự do và chủ quyền của dân tộc Việt Nam trước toàn thế giới.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngay trong phiên họp đầu tiên của Chính phủ lâm thời ngày 03/09/1945, sáu nhiệm vụ cấp bách đã được đề ra. Đây là chương trình hành động đầu tiên của nhà nước mới, tập trung vào những việc thiết yếu nhất để cứu dân, ổn định đời sống và tạo nền móng chính trị cho chế độ dân chủ cộng hòa.'
                },
                {
                    type: 'list',
                    ordered: true,
                    items: [
                        'Chống nạn đói bằng tăng gia sản xuất, thực hành tiết kiệm và phát động quyên góp gạo cứu đói.',
                        'Mở chiến dịch chống nạn mù chữ, nhanh chóng nâng cao dân trí cho quần chúng.',
                        'Tổ chức Tổng tuyển cử để bầu Quốc hội và xây dựng một bản Hiến pháp dân chủ.',
                        'Giáo dục nhân dân thực hành cần, kiệm, liêm, chính trong đời sống xã hội mới.',
                        'Bỏ thuế thân, thuế chợ, thuế đò, cấm thuốc phiện và xóa bỏ những tàn tích áp bức nặng nề của chế độ cũ.',
                        'Bảo đảm tự do tín ngưỡng, giữ gìn đoàn kết lương - giáo trong khối đại đoàn kết dân tộc.'
                    ]
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-1/image4.jpeg',
                    title: 'Tư liệu trong hồ sơ giai đoạn 1',
                    caption: 'Hình ảnh tư liệu của chặng I gợi lại không khí ngày độc lập và những công việc cấp bách mà chính quyền mới phải triển khai ngay sau ngày 02/09/1945.',
                    source: 'Hồ sơ giai đoạn 1'
                }
            ]
        },
        {
            title: 'Những quyết sách kiến quốc đầu tiên trong tháng 9 năm 1945',
            description: 'Các biện pháp cấp tốc về tài chính, giáo dục, hành chính và đời sống xã hội để giữ vững nền độc lập vừa giành được.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngay sau ngày độc lập, Chính phủ lâm thời liên tiếp ban hành nhiều quyết sách để biến nền độc lập vừa giành được thành một đời sống chính trị - xã hội mới. Ngày 04/09/1945, Quỹ Độc lập được thành lập và việc treo quốc kỳ trong những ngày lễ lớn được quy định. Từ ngày 17 đến 24/09/1945, phong trào Tuần lễ vàng được phát động rộng khắp để huy động nguồn lực vật chất cho quốc gia.'
                },
                {
                    type: 'paragraph',
                    text: 'Kết quả của Tuần lễ vàng cho thấy sức ủng hộ rất lớn của nhân dân đối với chính quyền cách mạng: khoảng 370 kg vàng cùng hàng chục triệu đồng Đông Dương được đóng góp cho Quỹ Quốc phòng và Quỹ Độc lập. Cùng với đó, các chính sách dân sinh và dân chủ cũng được triển khai dồn dập nhằm giải quyết những vấn đề bức thiết của đất nước.'
                },
                {
                    type: 'list',
                    items: [
                        '07/09/1945: bãi bỏ thuế thân, xóa một gánh nặng tiêu biểu của chế độ thuộc địa cũ.',
                        '08/09/1945: thành lập Nha Bình dân học vụ để chống nạn mù chữ; cùng ngày ban hành sắc lệnh tổ chức Tổng tuyển cử.',
                        '10/09/1945: mời Vĩnh Thụy làm cố vấn tối cao của Chính phủ.',
                        '15/09/1945: thành lập Phòng Quân giới để phục vụ nhiệm vụ quốc phòng.',
                        '20/09/1945: thành lập Ủy ban dự thảo Hiến pháp của nước Việt Nam mới.',
                        '22/09/1945: tiếp tục bãi bỏ hoặc giảm thêm nhiều loại thuế bất hợp lý đối với nhân dân.'
                    ]
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-1/image5.jpeg',
                    title: 'Tư liệu trong hồ sơ giai đoạn 1',
                    caption: 'Tư liệu trong hồ sơ giai đoạn 1 cho thấy công cuộc kiến quốc được triển khai rất sớm, từ gây quỹ quốc gia đến xây dựng các thiết chế văn hóa và chính trị của nhà nước mới.',
                    source: 'Hồ sơ giai đoạn 1'
                },
                {
                    type: 'paragraph',
                    text: 'Những việc làm này chứng tỏ chính quyền cách mạng không chờ đến khi tình hình hoàn toàn yên ổn mới bắt đầu kiến quốc. Ngay trong hoàn cảnh vô cùng khó khăn, nhà nước mới đã đồng thời lo cứu đói, chống dốt, huy động tài lực, chuẩn bị bầu cử, soạn Hiến pháp và xây dựng các cơ quan chuyên trách cho quốc phòng, hành chính và giáo dục.'
                }
            ]
        },
        {
            title: 'Bảo vệ chính quyền non trẻ trong nước và ngoài nước',
            description: 'Cuộc đấu tranh cuối năm 1945 vừa mang tính quân sự, vừa mang tính chính trị và ngoại giao để giữ vững thành quả cách mạng.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Song song với công việc xây dựng nhà nước, chính quyền cách mạng phải đối mặt với nguy cơ ngoại xâm rất nghiêm trọng. Ở Nam Bộ, quân Anh tạo điều kiện cho thực dân Pháp quay trở lại; ở miền Bắc, khoảng hai mươi vạn quân Tưởng kéo vào cùng nhiều lực lượng phản động chống phá chính quyền mới. Trong hoàn cảnh ấy, nước Việt Nam Dân chủ Cộng hòa phải vừa xây dựng vừa chiến đấu để tồn tại.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 23/09/1945, thực dân Pháp nổ súng đánh chiếm Sài Gòn, mở rộng chiến tranh ra Nam Bộ và Nam Trung Bộ. Ngày 26/09/1945, Chủ tịch Hồ Chí Minh phát lời kêu gọi trên đài phát thanh yêu cầu cả nước ủng hộ cuộc kháng chiến ở Nam Bộ. Phong trào chi viện Nam Bộ và Nam tiến lan rộng, thể hiện tinh thần cả nước cùng bảo vệ nền độc lập vừa giành được.'
                },
                {
                    type: 'paragraph',
                    text: 'Cùng với đó, Chính phủ liên tiếp ban hành các quy định để chuẩn bị cho đời sống chính trị hợp hiến, hợp pháp của chế độ mới: ngày 26/09 có sắc lệnh về Ủy ban bầu cử, ngày 17/10 có sắc lệnh về thể lệ Tổng tuyển cử. Trên mặt trận ngoại giao, Chủ tịch Hồ Chí Minh cũng chủ động gửi nhiều thông điệp đến các cường quốc và các diễn đàn quốc tế nhằm khẳng định địa vị pháp lý của nước Việt Nam Dân chủ Cộng hòa.'
                },
                {
                    type: 'paragraph',
                    text: 'Trong các tháng 10 và 11/1945, Chính phủ tiếp tục ban hành các chính sách giảm tô, giảm thuế, chống nạn đói; đồng thời ngày 11/11/1945, Đảng Cộng sản Đông Dương rút vào hoạt động bí mật để tránh thế công kích của kẻ thù. Ngày 22/11/1945, sắc lệnh về tổ chức Hội đồng nhân dân và Ủy ban hành chính các cấp được ban hành, tạo cơ sở pháp lý cho việc củng cố hệ thống chính quyền địa phương trên cả nước.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-1/image6.jpeg',
                    title: 'Tư liệu trong hồ sơ giai đoạn 1',
                    caption: 'Tư liệu của chặng I nhấn mạnh bối cảnh chính quyền non trẻ phải vừa chiến đấu ở Nam Bộ, vừa đấu tranh chính trị và ngoại giao để bảo vệ nền độc lập.',
                    source: 'Hồ sơ giai đoạn 1'
                }
            ]
        },
        {
            title: 'Củng cố bộ máy nhà nước vào cuối năm 1945',
            description: 'Những bước đi cuối cùng của chặng I cho thấy chính quyền cách mạng đã bắt đầu hướng tới một chương trình kiến quốc dài hơi.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Bước sang tháng 12/1945, công việc xây dựng bộ máy nhà nước tiếp tục được thúc đẩy. Ngày 01/12/1945, sắc lệnh cử đặc phái viên của Chính phủ ở Nam Trung Bộ và Nam Bộ được ban hành. Ngày 02/12 và 18/12/1945, các sắc lệnh bổ sung, sửa đổi công tác bầu cử tiếp tục được công bố, đồng thời cuộc Tổng tuyển cử được chuyển sang ngày 06/01/1946 để bảo đảm điều kiện tổ chức tốt hơn.'
                },
                {
                    type: 'list',
                    items: [
                        '21/12/1945: ban hành sắc lệnh về quy chế hành chính ở các thành phố.',
                        '31/12/1945: thành lập Ủy ban Nghiên cứu kế hoạch Kiến quốc, chuẩn bị cho việc xây dựng đất nước trên các lĩnh vực kinh tế, tài chính, hành chính, xã hội và văn hóa.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Nhìn toàn bộ chặng I có thể thấy, từ tháng 8 đến hết tháng 12/1945, cách mạng Việt Nam đã hoàn thành một công việc vô cùng lớn: giành chính quyền, khai sinh chế độ mới, đặt ra chương trình kiến quốc và kịp thời đối phó với những hiểm họa xâm lược quay trở lại. Chính thành quả nền móng này đã tạo điều kiện để dân tộc bước vào các chặng tiếp theo của cuộc kháng chiến và kiến quốc.'
                }
            ]
        }
    ],
    keyTakeaways: [
        'Chặng I kéo dài từ khi thời cơ Tổng khởi nghĩa xuất hiện trong tháng 8/1945 đến khi bộ máy chính quyền mới được củng cố vào cuối năm 1945.',
        'Trong chặng này, cách mạng Việt Nam đồng thời hoàn thành bốn việc lớn: phát động Tổng khởi nghĩa, thành lập Chính phủ lâm thời, công bố nền độc lập và triển khai những quyết sách kiến quốc đầu tiên.',
        'Nét nổi bật nhất của chặng I là tính chất “vừa giành chính quyền, vừa xây dựng nhà nước, vừa chống ngoại xâm”, đặt nền móng cho toàn bộ giai đoạn 1945-1954.'
    ],
    reviewQuestions: [
        'Những yếu tố quốc tế và trong nước nào làm cho thời cơ Tổng khởi nghĩa tháng 8/1945 trở nên chín muồi?',
        'Hội nghị toàn quốc của Đảng và Đại hội Quốc dân Tân Trào đã chuẩn bị cho thắng lợi của Cách mạng Tháng Tám như thế nào?',
        'Những quyết sách nào của Chính phủ lâm thời trong tháng 9/1945 cho thấy nhiệm vụ kiến quốc được triển khai rất sớm?',
        'Vì sao nói cuối năm 1945 là thời điểm chính quyền cách mạng non trẻ phải vừa xây dựng vừa bảo vệ mình?'
    ],
    relatedEventIds: [
        'cach-mang-thang-8',
        'doc-lap-1945'
    ],
    mapNodeNarratives: {
        'event:cach-mang-thang-8': {
            description: 'Từ lệnh Tổng khởi nghĩa ở Tân Trào, phong trào giành chính quyền phát triển rất nhanh. Chỉ trong nửa cuối tháng 8/1945, Hà Nội, Huế, Sài Gòn cùng nhiều địa phương lần lượt giành chính quyền, đưa quyền lực nhà nước về tay nhân dân.'
        },
        'event:doc-lap-1945': {
            description: 'Ngày 02/09/1945, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc Tuyên ngôn Độc lập tại Ba Đình, tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa và xác lập chính danh cho nhà nước mới trước quốc dân và thế giới.'
        },
        'moment:quan-lenh-so-1': {
            description: 'Đêm 13/08/1945, Quân lệnh số 1 được ban hành như hiệu lệnh chính thức phát động Tổng khởi nghĩa trên phạm vi toàn quốc, chuyển quyết tâm chính trị thành hành động cách mạng trực tiếp.'
        },
        'moment:dai-hoi-quoc-dan-tan-trao': {
            description: 'Đại hội Quốc dân Tân Trào ngày 16/08/1945 đã thông qua chủ trương Tổng khởi nghĩa, quyết định Quốc kỳ, Quốc ca và bầu ra Ủy ban Dân tộc Giải phóng, tạo cơ sở chính trị cho việc giành chính quyền.'
        },
        'moment:ha-noi-gianh-chinh-quyen': {
            description: 'Thắng lợi ở Hà Nội ngày 19/08/1945 là bước ngoặt quyết định của cuộc Tổng khởi nghĩa, làm cho khí thế cách mạng lan mạnh ra cả nước và đẩy nhanh sự sụp đổ của chính quyền cũ.'
        },
        'moment:hue-gianh-chinh-quyen': {
            description: 'Thắng lợi ở Huế ngày 23/08/1945 không chỉ mở rộng thành quả của Tổng khởi nghĩa mà còn tạo tiền đề trực tiếp cho việc chấm dứt chế độ quân chủ phong kiến khi Bảo Đại thoái vị chỉ ít ngày sau đó.'
        }
    },
    materials: [
        {
            type: 'Nguồn giai đoạn',
            title: 'Giai đoạn 1945-1954: Kháng chiến và kiến quốc',
            source: 'Cổng TTĐT Chính phủ',
            url: 'https://chinhphu.vn/giai-doan-1945-1954-khang-chien-va-kien-quoc',
            note: 'Nguồn gốc của toàn bộ bài học chặng I, dùng để xây dựng nội dung lịch sử trực tiếp trên web.'
        }
    ]
};

const docLapEvent = historicalData.events.find(event => event.id === 'doc-lap-1945');

if (docLapEvent) {
    Object.assign(docLapEvent, {
        image: 'assets/events/tuyen-ngon-doc-lap-bing.webp',
        significance: 'Sự kiện ngày 02/09/1945 không chỉ khai sinh nước Việt Nam Dân chủ Cộng hòa mà còn xác lập vị thế pháp lý và chính trị của nhà nước mới trước quốc dân và thế giới. Đây là bước chuyển từ thắng lợi của Tổng khởi nghĩa sang sự ra đời công khai của một chế độ mới.',
        detailFlow: [
            {
                type: 'paragraph',
                text: 'Sau thắng lợi của Cách mạng Tháng Tám, chính quyền trong cả nước nhanh chóng về tay nhân dân. Chủ tịch Hồ Chí Minh từ chiến khu về Hà Nội, Ủy ban Dân tộc Giải phóng được cải tổ thành Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa, còn chế độ phong kiến cũng đi đến điểm kết thúc với việc Bảo Đại thoái vị. Tất cả những diễn biến ấy tạo nên tiền đề trực tiếp cho ngày độc lập.'
            },
            {
                type: 'paragraph',
                text: 'Ngày 02/09/1945, tại Quảng trường Ba Đình, trước hàng chục vạn đồng bào, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc Tuyên ngôn Độc lập. Bản Tuyên ngôn khẳng định quyền bình đẳng, quyền sống, quyền sung sướng và quyền tự do của các dân tộc; đồng thời tuyên bố chấm dứt hẳn quan hệ thuộc địa với thực dân Pháp, xóa bỏ mọi đặc quyền của họ trên đất nước Việt Nam.'
            },
            {
                type: 'paragraph',
                text: 'Tuyên ngôn Độc lập là văn kiện có giá trị lịch sử rất lớn vì nó vừa tổng kết thắng lợi của cuộc đấu tranh giải phóng dân tộc, vừa công bố với thế giới sự ra đời của một nhà nước mới. Từ đây, nền độc lập của Việt Nam không chỉ là kết quả của một cuộc nổi dậy thắng lợi mà còn được xác nhận bằng một tuyên bố mang giá trị chính trị và pháp lý rõ ràng.'
            },
            {
                type: 'paragraph',
                text: 'Ngay sau ngày độc lập, phiên họp đầu tiên của Chính phủ lâm thời đã đề ra sáu nhiệm vụ cấp bách để cứu đói, chống dốt, tổ chức Tổng tuyển cử, xây dựng Hiến pháp, cải thiện đời sống nhân dân và củng cố khối đoàn kết dân tộc. Điều đó cho thấy ngày 02/09/1945 không phải điểm kết thúc của cách mạng, mà là mở đầu cho công việc kiến quốc rất lớn lao ngay sau đó.'
            }
        ],
        studySections: [
            {
                title: 'Hoàn cảnh trước ngày độc lập',
                description: 'Những chuyển biến chính trị rất nhanh từ cuối tháng 8/1945 đã tạo tiền đề trực tiếp cho ngày 02/09/1945.',
                flow: [
                    {
                        type: 'paragraph',
                        text: 'Sau thắng lợi của Tổng khởi nghĩa, Chủ tịch Hồ Chí Minh trở về Hà Nội, Ủy ban Dân tộc Giải phóng được cải tổ thành Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa và thành phần Chính phủ được mở rộng để bảo đảm tính đoàn kết dân tộc. Cùng thời điểm ấy, chế độ phong kiến cũng chấm dứt về mặt chính trị với việc Bảo Đại thoái vị.'
                    },
                    {
                        type: 'paragraph',
                        text: 'Như vậy, trước ngày 02/09/1945, cách mạng Việt Nam đã đồng thời làm được ba việc rất lớn: giành chính quyền trong thực tế, thành lập được chính quyền trung ương mới và loại bỏ biểu tượng chính trị cuối cùng của chế độ cũ. Đây là cơ sở để tuyên bố với toàn dân và thế giới về sự ra đời của nhà nước Việt Nam mới.'
                    }
                ]
            },
            {
                title: 'Diễn biến chính của ngày 02/09/1945',
                description: 'Những nội dung cốt lõi làm nên giá trị lịch sử của ngày độc lập.',
                flow: [
                    {
                        type: 'paragraph',
                        text: 'Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời trịnh trọng đọc Tuyên ngôn Độc lập trước đông đảo nhân dân. Văn kiện này mở đầu bằng những tư tưởng tiến bộ về quyền con người và quyền dân tộc, từ đó khẳng định quyền độc lập của nhân dân Việt Nam là chính đáng, không thể phủ nhận.'
                    },
                    {
                        type: 'paragraph',
                        text: 'Bản Tuyên ngôn đồng thời vạch rõ tội ác và sự phản bội của thực dân Pháp đối với dân tộc Việt Nam, nêu rõ việc nhân dân ta đã tự đứng lên giành chính quyền từ tay phát xít Nhật chứ không phải do bất kỳ thế lực ngoại bang nào “ban cho”. Trên cơ sở đó, Chính phủ lâm thời tuyên bố nước Việt Nam Dân chủ Cộng hòa ra đời.'
                    },
                    {
                        type: 'image',
                        url: 'assets/events/tuyen-ngon-doc-lap-bing.webp',
                        title: 'Minh họa sự kiện Tuyên ngôn Độc lập',
                        caption: 'Ảnh minh họa được dùng thống nhất cho thẻ sự kiện và phần chi tiết của mốc 02/09/1945.',
                        source: 'Ảnh người dùng cung cấp'
                    }
                ]
            },
            {
                title: 'Giá trị lịch sử và ý nghĩa mở đầu kiến quốc',
                description: 'Tuyên ngôn Độc lập vừa là kết quả của cách mạng, vừa là điểm mở đầu cho việc xây dựng quốc gia độc lập.',
                flow: [
                    {
                        type: 'paragraph',
                        text: 'Giá trị lớn nhất của Tuyên ngôn Độc lập là khai sinh một nhà nước mới của dân tộc Việt Nam trong thời đại hiện đại. Nó đánh dấu sự kết thúc của ách thống trị thuộc địa và chế độ phong kiến, đồng thời mở ra kỷ nguyên độc lập, tự do cho dân tộc.'
                    },
                    {
                        type: 'paragraph',
                        text: 'Ngay trong những ngày sau 02/09/1945, Chính phủ lâm thời đã phải đối diện với hàng loạt nhiệm vụ nặng nề: chống đói, chống dốt, chuẩn bị Tổng tuyển cử, xây dựng Hiến pháp, huy động tài lực, tổ chức bộ máy nhà nước và đối phó với nguy cơ xâm lược trở lại. Vì thế, ngày độc lập không chỉ là một mốc lễ nghi chính trị, mà còn là thời điểm mở đầu cho cả một chương trình kiến quốc lâu dài.'
                    }
                ]
            }
        ],
        keyTakeaways: [
            'Ngày 02/09/1945 là mốc khai sinh nước Việt Nam Dân chủ Cộng hòa.',
            'Tuyên ngôn Độc lập vừa tuyên bố quyền độc lập của dân tộc Việt Nam, vừa bác bỏ cơ sở thống trị của thực dân Pháp.',
            'Sau ngày độc lập, chính quyền cách mạng lập tức bước vào công việc kiến quốc với nhiều nhiệm vụ cấp bách.'
        ],
        reviewQuestions: [
            'Vì sao có thể nói ngày 02/09/1945 là kết quả trực tiếp của thắng lợi Cách mạng Tháng Tám?',
            'Những luận điểm nào trong Tuyên ngôn Độc lập có ý nghĩa chính trị và pháp lý quan trọng nhất?',
            'Sau ngày độc lập, Chính phủ lâm thời phải đối diện với những nhiệm vụ cấp bách nào?'
        ],
        materials: [
            ...(docLapEvent.materials || []),
            {
                type: 'Ảnh tư liệu',
                title: 'Minh họa sự kiện Tuyên ngôn Độc lập',
                source: 'Tư liệu sự kiện',
                url: 'assets/events/tuyen-ngon-doc-lap-bing.webp',
                note: 'Ảnh minh họa được dùng cho thẻ sự kiện và phần chi tiết của mốc 02/09/1945.'
            },
            {
                type: 'Nguồn giai đoạn',
                title: 'Giai đoạn 1945-1954: Kháng chiến và kiến quốc',
                source: 'Cổng TTĐT Chính phủ',
                url: 'https://chinhphu.vn/giai-doan-1945-1954-khang-chien-va-kien-quoc',
                note: 'Nguồn nền cho cụm bài học từ Chính phủ lâm thời đến ngày độc lập.'
            }
        ]
    });

    docLapEvent.relatedMoments = (docLapEvent.relatedMoments || []).map(moment => {
        const title = String(moment.title || '');

        if (title.includes('Chính phủ Lâm thời')) {
            return {
                ...moment,
                id: 'chinh-phu-lam-thoi-ra-mat',
                image: 'assets/era-stages/stage-1/image3.jpeg',
                significance: 'Việc ra mắt Chính phủ Lâm thời đánh dấu bước chuyển từ bộ máy lãnh đạo Tổng khởi nghĩa sang một chính quyền trung ương công khai của quốc gia mới, chuẩn bị trực tiếp cho ngày độc lập.',
                studySections: [
                    {
                        title: 'Hoàn cảnh ra mắt Chính phủ Lâm thời',
                        description: 'Sự kiện này diễn ra ngay sau khi chính quyền trong cả nước cơ bản đã về tay nhân dân.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Sau thắng lợi của Cách mạng Tháng Tám, yêu cầu đặt ra không chỉ là giữ vững thành quả nổi dậy mà còn phải nhanh chóng xây dựng một chính quyền trung ương có khả năng điều hành đất nước. Vì thế, sau khi Chủ tịch Hồ Chí Minh về Hà Nội, Ủy ban Dân tộc Giải phóng được mở rộng và cải tổ thành Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Việc công bố Chính phủ lâm thời ra mắt quốc dân cho thấy cách mạng Việt Nam đã chuyển từ thắng lợi khởi nghĩa sang giai đoạn tổ chức nhà nước. Đây là bước đi có ý nghĩa then chốt trước khi tuyên bố độc lập, vì nó chứng minh cách mạng đã có bộ máy lãnh đạo quốc gia cụ thể.'
                            }
                        ]
                    },
                    {
                        title: 'Ý nghĩa của sự kiện',
                        description: 'Từ một chính quyền cách mạng hình thành trong khởi nghĩa, bộ máy nhà nước mới bắt đầu xuất hiện công khai trước quốc dân.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Chính phủ lâm thời ra mắt quốc dân là sự kiện có ý nghĩa chính trị rất rõ: nó làm cho chính quyền cách mạng mang diện mạo công khai của một nhà nước đang hình thành, đồng thời mở rộng thành phần lãnh đạo để tăng tính đoàn kết và đại diện dân tộc.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Nhờ đó, ngày 02/09/1945 không diễn ra như một tuyên bố đơn lẻ, mà như sự xuất hiện chính thức của một chính quyền đã được chuẩn bị cả về tổ chức lẫn chính danh.'
                            }
                        ]
                    }
                ],
                keyTakeaways: [
                    'Chính phủ Lâm thời là bước chuyển từ lãnh đạo khởi nghĩa sang điều hành quốc gia.',
                    'Sự kiện này chuẩn bị trực tiếp cho ngày 02/09/1945.'
                ]
            };
        }

        if (title.includes('Bảo Đại')) {
            return {
                ...moment,
                id: 'bao-dai-thoai-vi',
                image: 'assets/era-stages/stage-1/image6.jpeg',
                significance: 'Sự kiện Bảo Đại thoái vị chấm dứt vai trò chính trị của chế độ quân chủ nhà Nguyễn, tạo điều kiện để chính quyền cách mạng xác lập vị thế chính danh của nhà nước mới trên phạm vi toàn quốc.',
                studySections: [
                    {
                        title: 'Diễn biến chính',
                        description: 'Sự kiện diễn ra tại Huế, gắn với việc chế độ quân chủ chính thức rút khỏi vũ đài lịch sử.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Ngày 30/08/1945, việc thoái vị của Bảo Đại được chấp nhận và ấn, kiếm của triều đình được trao cho đại diện Chính phủ cách mạng. Sự kiện diễn ra tại Huế có ý nghĩa tượng trưng rất lớn vì nó đánh dấu sự rút lui công khai của chính quyền phong kiến cuối cùng trong lịch sử Việt Nam.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Từ thời điểm này, nhà nước mới không chỉ chiến thắng trên thực tế bằng Tổng khởi nghĩa mà còn thay thế hẳn chế độ cũ trong đời sống chính trị quốc gia. Điều đó củng cố thêm tính chính danh cho chính quyền cách mạng trước khi tuyên bố độc lập với thế giới.'
                            }
                        ]
                    },
                    {
                        title: 'Ý nghĩa lịch sử',
                        description: 'Thoái vị không chỉ là sự kiện nghi lễ mà còn là bước khép lại một thời kỳ lịch sử rất dài.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Sự kiện này chấm dứt về mặt chính trị chế độ quân chủ tồn tại hàng nghìn năm ở Việt Nam. Nó giúp cuộc chuyển đổi từ xã hội thuộc địa - phong kiến sang nhà nước dân chủ cộng hòa trở nên rõ ràng hơn cả về biểu tượng lẫn thực tế quyền lực.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Với người học lịch sử, đây là mốc giúp hiểu rằng thắng lợi của Cách mạng Tháng Tám không chỉ thay đổi người cầm quyền, mà còn thay đổi hẳn bản chất của chế độ nhà nước ở Việt Nam.'
                            }
                        ]
                    }
                ],
                keyTakeaways: [
                    'Bảo Đại thoái vị là dấu mốc kết thúc chế độ quân chủ phong kiến ở Việt Nam.',
                    'Sự kiện này củng cố tính chính danh cho nhà nước mới trước ngày 02/09/1945.'
                ]
            };
        }

        if (title.includes('Phiên họp đầu tiên')) {
            return {
                ...moment,
                id: 'phien-hop-dau-tien-cua-chinh-phu',
                significance: 'Phiên họp đầu tiên của Chính phủ lâm thời cho thấy nhà nước mới không chỉ tuyên bố độc lập mà còn lập tức bắt tay vào giải quyết những nhiệm vụ cấp bách nhất của quốc gia.',
                studySections: [
                    {
                        title: 'Những việc phải làm ngay',
                        description: 'Phiên họp ngày 03/09/1945 đặt nền cho chương trình kiến quốc của chính quyền mới.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Ngay sau ngày độc lập, phiên họp đầu tiên của Chính phủ lâm thời đã đề ra sáu nhiệm vụ cấp bách: chống đói, chống dốt, tổ chức Tổng tuyển cử, xây dựng Hiến pháp dân chủ, giáo dục cần kiệm liêm chính, bỏ các thuế vô lý và cấm thuốc phiện, đồng thời bảo đảm tự do tín ngưỡng và đoàn kết lương - giáo.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Những quyết định này cho thấy độc lập không phải là điểm kết thúc, mà là khởi đầu của một công việc rất lớn: tổ chức lại đời sống quốc gia trên nền tảng của một chế độ mới.'
                            }
                        ]
                    }
                ]
            };
        }

        if (title.includes('Tổng tuyển cử')) {
            return {
                ...moment,
                id: 'tong-tuyen-cu-dau-tien',
                significance: 'Cuộc Tổng tuyển cử ngày 06/01/1946 là bước khẳng định rõ nhất bản chất dân chủ của nhà nước Việt Nam mới, đưa chính quyền cách mạng từ thắng lợi khởi nghĩa sang hình thức nhà nước có cơ sở đại diện hợp hiến và hợp pháp.',
                studySections: [
                    {
                        title: 'Lần đầu nhân dân thực hiện quyền làm chủ',
                        description: 'Cuộc bầu cử Quốc hội đầu tiên mở ra một bước phát triển quan trọng của chế độ mới.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Ngày 06/01/1946, cuộc Tổng tuyển cử đầu tiên diễn ra trên đất nước Việt Nam. Lần đầu tiên trong lịch sử, mọi công dân Việt Nam từ 18 tuổi trở lên, không phân biệt nam hay nữ, đều có quyền bầu cử và ứng cử Quốc hội. Hơn 90% cử tri đã đi bỏ phiếu, thể hiện niềm tin lớn của nhân dân đối với chính quyền cách mạng.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Kết quả bầu cử đã chọn ra 333 đại biểu vào Quốc hội khóa I của nước Việt Nam Dân chủ Cộng hòa. Chủ tịch Hồ Chí Minh ứng cử tại Hà Nội và trúng cử với tỉ lệ phiếu rất cao. Thắng lợi của cuộc bầu cử này là bằng chứng rõ ràng cho thấy chế độ mới không chỉ được thành lập từ đấu tranh cách mạng mà còn được củng cố bằng quyền làm chủ chính trị của nhân dân.'
                            }
                        ]
                    }
                ],
                keyTakeaways: [
                    'Tổng tuyển cử 06/01/1946 là cuộc bầu cử dân chủ đầu tiên trong lịch sử Việt Nam hiện đại.',
                    'Cuộc bầu cử này củng cố tính hợp pháp và đại diện của nhà nước Việt Nam Dân chủ Cộng hòa.'
                ]
            };
        }

        if (title.includes('Hiến pháp 1946')) {
            return {
                ...moment,
                image: 'assets/era-stages/stage-4/image1.jpeg',
                significance: 'Hiến pháp 1946 tạo cơ sở pháp lý đầu tiên cho nhà nước Việt Nam Dân chủ Cộng hòa và khẳng định bản chất dân chủ của chế độ mới.',
                studySections: [
                    {
                        title: 'Ý nghĩa của việc thông qua Hiến pháp',
                        description: 'Đây là bước hoàn thiện rất quan trọng của nhà nước cách mạng trên phương diện pháp lý.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Ngày 09/11/1946, Quốc hội khóa I thông qua và công bố bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Sự kiện này diễn ra trong bối cảnh chính quyền non trẻ đang vừa xây dựng nhà nước mới, vừa chuẩn bị đối phó với nguy cơ chiến tranh mở rộng.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Hiến pháp 1946 xác định rõ chính thể dân chủ cộng hòa, quy định quyền và nghĩa vụ công dân, vị trí của Nghị viện, Chính phủ, chính quyền địa phương và cơ quan tư pháp. Điều đó cho thấy cách mạng Việt Nam không chỉ giành được chính quyền mà còn nhanh chóng xây dựng một nền tảng pháp lý cho nhà nước mới.'
                            }
                        ]
                    }
                ],
                keyTakeaways: [
                    'Hiến pháp 1946 là đạo luật cơ bản đầu tiên của nước Việt Nam mới.',
                    'Việc thông qua Hiến pháp củng cố cơ sở pháp lý và tính chính danh của chế độ dân chủ cộng hòa.'
                ]
            };
        }

        if (title.includes('Việt Bắc Thu Đông 1947')) {
            return {
                ...moment,
                image: 'assets/era-stages/stage-4/image2.jpeg',
                significance: 'Chiến thắng Việt Bắc Thu Đông 1947 làm thất bại chiến lược “đánh nhanh thắng nhanh” của thực dân Pháp và bảo vệ an toàn căn cứ địa kháng chiến.',
                studySections: [
                    {
                        title: 'Bảo vệ căn cứ địa kháng chiến',
                        description: 'Việt Bắc 1947 là phép thử rất lớn đối với sức sống của nhà nước và quân đội kháng chiến.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Từ tháng 10 đến tháng 12/1947, thực dân Pháp mở cuộc tiến công quy mô lớn lên căn cứ địa Việt Bắc với mục tiêu tiêu diệt cơ quan đầu não kháng chiến và bộ đội chủ lực của ta. Đây là nỗ lực quyết định của địch nhằm nhanh chóng kết thúc chiến tranh.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Quân và dân ta đã đánh hơn 200 trận, bẻ gãy nhiều mũi tiến công, bảo vệ được căn cứ địa và buộc quân Pháp phải rút lui. Thắng lợi này chứng minh đường lối kháng chiến lâu dài là đúng đắn và đặt nền cho các bước phát triển quân sự tiếp theo.'
                            }
                        ]
                    }
                ]
            };
        }

        if (title.includes('công nhận Việt Nam') || title.includes('công nhận và đặt quan hệ ngoại giao')) {
            return {
                ...moment,
                significance: 'Việc nhiều nước xã hội chủ nghĩa công nhận Việt Nam Dân chủ Cộng hòa năm 1950 là thắng lợi ngoại giao rất lớn, phá thế cô lập của nhà nước cách mạng.',
                studySections: [
                    {
                        title: 'Bước ngoặt trên mặt trận đối ngoại',
                        description: 'Năm 1950 đánh dấu sự thay đổi quan trọng về vị thế quốc tế của cách mạng Việt Nam.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Từ ngày 18/01/1950, bắt đầu với Trung Quốc rồi tiếp đến là Liên Xô cùng nhiều nước xã hội chủ nghĩa khác, Việt Nam Dân chủ Cộng hòa được công nhận và đặt quan hệ ngoại giao chính thức. Điều này cho thấy cuộc kháng chiến Việt Nam đã nhận được sự thừa nhận rộng rãi hơn trên trường quốc tế.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Thắng lợi đối ngoại ấy giúp phá thế cô lập, mở ra điều kiện thuận lợi hơn về chính trị, ngoại giao và sau đó là hậu thuẫn quốc tế cho cuộc kháng chiến chống Pháp.'
                            }
                        ]
                    }
                ]
            };
        }

        if (title.includes('Tổng động viên')) {
            return {
                ...moment,
                image: 'assets/era-stages/stage-4/image3.jpeg',
                significance: 'Lệnh Tổng động viên cho thấy cuộc kháng chiến bước sang giai đoạn huy động sức mạnh toàn dân ở quy mô cao hơn.',
                studySections: [
                    {
                        title: 'Huy động toàn dân cho kháng chiến',
                        description: 'Đầu năm 1950, nhà nước tập trung cao độ sức người, sức của cho tiền tuyến.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Ngày 12/02/1950, Chủ tịch Hồ Chí Minh ký Sắc lệnh Tổng động viên, thực hiện khẩu hiệu “Tất cả cho tiền tuyến, tất cả để chiến thắng”. Đây là bước chuyển cho thấy kháng chiến đã bước vào thời điểm cần huy động mạnh mẽ hơn mọi nguồn lực của quốc gia.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Tổng động viên kết hợp với phong trào thi đua ái quốc đã tạo nên khí thế rất mạnh trong toàn dân, góp phần trực tiếp vào việc chuẩn bị cho các chiến dịch lớn, nhất là Chiến dịch Biên giới 1950.'
                            }
                        ]
                    }
                ]
            };
        }

        if (title.includes('Đại hội Đảng toàn quốc lần thứ II')) {
            return {
                ...moment,
                image: 'assets/era-stages/stage-6/image1.jpeg',
                significance: 'Đại hội II năm 1951 là cột mốc lớn về tổ chức và đường lối của lực lượng lãnh đạo kháng chiến.',
                studySections: [
                    {
                        title: 'Định hình đường lối cho giai đoạn mới',
                        description: 'Đại hội II xác định rõ hơn con đường phát triển của cuộc kháng chiến và cách mạng Việt Nam.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng họp tháng 02/1951 tại Tuyên Quang, quyết định đưa Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam. Đại hội xác định rõ nhiệm vụ cơ bản của cách mạng Việt Nam và khẳng định đường lối kháng chiến là toàn dân, toàn diện, trường kỳ và nhất định thắng lợi.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Đây là bước trưởng thành quan trọng của lực lượng lãnh đạo cách mạng, tạo nền tảng tư tưởng, tổ chức và chính trị cho chặng đẩy mạnh kháng chiến từ 1951 đến 1953.'
                            }
                        ]
                    }
                ]
            };
        }

        if (title.includes('Chiến thắng Hòa Bình')) {
            return {
                ...moment,
                image: 'assets/era-stages/stage-6/image3.jpeg',
                significance: 'Chiến thắng Hòa Bình làm phá sản một kế hoạch chiến tranh lớn của địch và củng cố thêm thế chủ động của ta.',
                studySections: [
                    {
                        title: 'Thắng lợi quân sự quan trọng của Đông Xuân 1951-1952',
                        description: 'Hòa Bình là chiến dịch cho thấy sức tiến công ngày càng tăng của quân và dân ta.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Chiến dịch Hòa Bình kết thúc ngày 23/02/1952 với thắng lợi của quân và dân Việt Nam. Thắng lợi này không chỉ tiêu diệt thêm sinh lực địch mà còn mở rộng vùng giải phóng, củng cố thế đứng chân của kháng chiến ở nhiều địa bàn quan trọng.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Về chiến lược, chiến thắng Hòa Bình làm phá sản một kế hoạch chiến tranh lớn của Pháp và cho thấy khả năng tiến công ngày càng mạnh của ta trong giai đoạn đẩy mạnh kháng chiến.'
                            }
                        ]
                    }
                ]
            };
        }

        if (title.includes('Chiến thắng Tây Bắc')) {
            return {
                ...moment,
                image: 'assets/era-stages/stage-6/image5.jpeg',
                significance: 'Chiến thắng Tây Bắc năm 1952 mở rộng vùng giải phóng và tạo thêm điều kiện quan trọng cho Điện Biên Phủ.',
                studySections: [
                    {
                        title: 'Mở rộng vùng chiến lược',
                        description: 'Tây Bắc 1952 là một bước chuẩn bị rất quan trọng cho thắng lợi năm 1954.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Từ ngày 14/10 đến ngày 10/12/1952, Chiến dịch Tây Bắc toàn thắng, giải phóng một vùng rộng lớn và có ý nghĩa chiến lược rất lớn. Địch mất thêm nhiều vị trí, trong khi căn cứ địa Việt Bắc và hướng Tây Bắc của đất nước được nối liền, củng cố.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Thắng lợi này tạo thêm điều kiện quân sự, chính trị và địa bàn quan trọng cho chiến dịch Điện Biên Phủ sau đó, nên được xem là một mắt xích trực tiếp trong quá trình chuẩn bị cho trận quyết chiến chiến lược.'
                            }
                        ]
                    }
                ]
            };
        }

        if (title.includes('Luật cải cách ruộng đất')) {
            return {
                ...moment,
                image: 'assets/era-stages/stage-6/image5.jpeg',
                significance: 'Luật cải cách ruộng đất cuối năm 1953 tạo thêm cơ sở xã hội và hậu phương cho cuộc kháng chiến.',
                studySections: [
                    {
                        title: 'Chỗ dựa xã hội cho kháng chiến',
                        description: 'Chính sách ruộng đất gắn trực tiếp với việc động viên nông dân và củng cố hậu phương.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Cuối năm 1953, Quốc hội khóa I thông qua Luật cải cách ruộng đất và Chính phủ ban bố luật này ngày 19/12/1953. Luật nhằm thủ tiêu quyền chiếm hữu ruộng đất của thực dân và địa chủ phong kiến, thực hiện người cày có ruộng và giải phóng sức sản xuất ở nông thôn.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Trong bối cảnh kháng chiến, đây không chỉ là một cải cách kinh tế - xã hội mà còn là biện pháp lớn để củng cố hậu phương, tăng thêm sự gắn bó của nông dân với sự nghiệp kháng chiến chống Pháp.'
                            }
                        ]
                    }
                ]
            };
        }

        if (title.includes('Giải phóng Thủ đô Hà Nội')) {
            return {
                ...moment,
                image: 'assets/era-stages/stage-7/image5.jpeg',
                significance: 'Giải phóng Thủ đô ngày 10/10/1954 đánh dấu sự hiện thực hóa thắng lợi của chặng kết thúc kháng chiến chống Pháp trên địa bàn trung tâm chính trị quan trọng nhất của miền Bắc.',
                studySections: [
                    {
                        title: 'Khép lại chặng kháng chiến chống Pháp',
                        description: 'Sự kiện này nối liền chiến thắng quân sự, thắng lợi ngoại giao với thực tế tiếp quản và xây dựng Thủ đô.',
                        flow: [
                            {
                                type: 'paragraph',
                                text: 'Sau khi Hiệp định Geneva được ký kết và các điều khoản ngừng bắn được thực hiện, ngày 10/10/1954 Thủ đô Hà Nội được giải phóng. Đây là sự kiện có ý nghĩa biểu tượng rất lớn vì nó cho thấy thắng lợi của cuộc kháng chiến không chỉ dừng ở văn kiện ngoại giao mà đã hiện thành kết quả chính trị - lịch sử cụ thể.'
                            },
                            {
                                type: 'paragraph',
                                text: 'Việc giải phóng Thủ đô mở đầu cho thời kỳ mới ở miền Bắc, nơi sẽ trở thành căn cứ địa hòa bình, hậu phương lớn của cả nước trong giai đoạn lịch sử tiếp theo.'
                            }
                        ]
                    }
                ]
            };
        }

        return moment;
    });
}

const tetMauThanEvent = historicalData.events.find(event => event.id === 'tet-mau-than');

if (tetMauThanEvent) {
    Object.assign(tetMauThanEvent, {
        image: 'assets/events/tet-mau-than-1968-qdnd.jpg',
        detailFlow: [
            {
                type: 'paragraph',
                text: 'Đêm 30 rạng sáng 31/01/1968, quân và dân miền Nam đồng loạt tiến công vào nhiều đô thị, căn cứ quân sự và cơ quan đầu não của chính quyền Sài Gòn. Tết Mậu Thân trở thành một bước ngoặt lớn vì làm đảo lộn thế bố trí chiến tranh của Mỹ và gây chấn động mạnh về chính trị, quân sự lẫn dư luận quốc tế.'
            },
            {
                type: 'image',
                url: 'assets/events/tet-mau-than-1968-qdnd.jpg',
                title: 'Tổng tiến công Tết Mậu Thân 1968',
                caption: 'Ảnh minh họa được dùng cho thẻ sự kiện và phần chi tiết khi mở mốc Tết Mậu Thân trên bản đồ.',
                source: 'Báo Quân đội nhân dân'
            },
            {
                type: 'paragraph',
                text: 'Dù phải đối mặt với tổn thất lớn, cuộc Tổng tiến công đã làm phá sản chiến lược “Chiến tranh cục bộ”, buộc Mỹ phải xuống thang chiến tranh và chấp nhận ngồi vào bàn đàm phán. Vì vậy, Tết Mậu Thân được nhìn nhận như một mốc chuyển biến quyết định trong tiến trình kháng chiến chống Mỹ.'
            }
        ],
        materials: [
            ...(tetMauThanEvent.materials || []),
            {
                type: 'Ảnh tư liệu',
                title: 'Tân Sơn Nhất trong Tết Mậu Thân 1968',
                source: 'Báo Quân đội nhân dân',
                url: 'assets/events/tet-mau-than-1968-qdnd.jpg',
                note: 'Ảnh tư liệu chiến sự được dùng làm ảnh chính và ảnh minh họa trong trang chi tiết của sự kiện.'
            }
        ]
    });
}

historicalData.eraDetails['chong-phap'].developmentStages =
    historicalData.eraDetails['chong-phap'].developmentStages.map(stage => {
        if (!stage.href && /^stage-\d+$/.test(stage.id)) {
            return {
                ...stage,
                href: `era-stage.html?era=chong-phap&stage=${stage.id}`
            };
        }

        return stage;
    });

historicalData.eraDetails['chong-phap'].stageDetails['stage-2'] = {
    id: 'stage-2',
    title: 'Chính phủ Liên hiệp lâm thời Việt Nam Dân chủ Cộng hòa',
    tag: 'Chặng phát triển',
    label: 'Chặng II / 7',
    period: '01/01/1946 - 02/03/1946',
    focus: 'Mở rộng khối đoàn kết toàn dân, ổn định tình hình trong nước và chuẩn bị điều kiện chính trị cho bước phát triển tiếp theo của nhà nước cách mạng',
    description: 'Chặng II tập trung vào việc mở rộng hơn nữa khối đoàn kết dân tộc thông qua việc thành lập Chính phủ Liên hiệp lâm thời, ổn định tình hình bên trong và tạo điều kiện chính trị để tổ chức thành công cuộc Tổng tuyển cử đầu tiên. Đây là bước chuyển từ chính quyền lâm thời sau Cách mạng Tháng Tám sang một chính quyền có cơ sở đại diện rộng hơn trong bối cảnh đất nước đang đứng trước nhiều sức ép đối nội và đối ngoại.',
    significance: 'Ý nghĩa nổi bật của chặng II là làm cho chính quyền cách mạng non trẻ có thêm cơ sở đoàn kết, ổn định và chính danh trong lúc phải đối phó với quân Tưởng, thực dân Pháp và các lực lượng chống phá bên trong. Chặng này chứng minh rằng cách mạng Việt Nam không chỉ thắng bằng lực lượng khởi nghĩa mà còn bằng khả năng tập hợp lực lượng dân tộc và tổ chức chính quyền phù hợp với tình hình phức tạp đầu năm 1946.',
    studySections: [
        {
            title: 'Thành lập Chính phủ Liên hiệp lâm thời',
            description: 'Mục tiêu của việc mở rộng thành phần Chính phủ và ý nghĩa đoàn kết dân tộc của bước đi này.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Nhằm mở rộng hơn nữa khối đoàn kết toàn dân và ổn định tình hình bên trong để tập trung đối phó với các thế lực xâm lược từ bên ngoài, Trung ương Đảng và Chủ tịch Hồ Chí Minh chủ trương thành lập Chính phủ Liên hiệp lâm thời với sự tham gia của một số phần tử trong Việt Nam Quốc dân đảng và Việt Nam Cách mệnh Đồng minh hội. Điều kiện đặt ra là Chính phủ này phải tổ chức tốt cuộc Tổng tuyển cử, thống nhất các lực lượng vũ trang và sẽ từ chức khi Quốc dân đại hội được triệu tập.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 01/01/1946, Chính phủ Liên hiệp lâm thời do Chủ tịch Hồ Chí Minh đứng đầu làm lễ ra mắt tại Nhà hát thành phố trước khoảng ba mươi nghìn nhân dân Hà Nội. Sự kiện này đánh dấu bước mở rộng chính quyền theo hướng đoàn kết dân tộc, thể hiện rõ chủ trương thêm bạn, bớt thù và tranh thủ mọi lực lượng có thể tranh thủ trong hoàn cảnh đất nước rất phức tạp.'
                },
                {
                    type: 'paragraph',
                    text: 'Thay mặt Chính phủ, Chủ tịch Hồ Chí Minh công bố danh sách Chính phủ mới và đường lối đối nội, đối ngoại của Chính phủ. Người cùng các thành viên Chính phủ tuyên thệ kiên quyết lãnh đạo quốc dân, giữ vững nền độc lập cho Tổ quốc, thực hiện quyền dân chủ cho nước Việt Nam và sẵn sàng vượt mọi khó khăn, hy sinh để bảo vệ nền độc lập ấy.'
                }
            ]
        },
        {
            title: 'Hoạt động của Chính phủ Liên hiệp lâm thời',
            description: 'Những kết quả chính mà Chính phủ đạt được trong thời gian tồn tại từ đầu tháng 1 đến đầu tháng 3/1946.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Chính phủ Liên hiệp lâm thời tồn tại từ ngày 01/01 đến ngày 02/03/1946. Trong thời gian đó, dưới sự lãnh đạo khéo léo của Chủ tịch Hồ Chí Minh, Chính phủ đã dàn xếp ổn thỏa với quân đội Tưởng Giới Thạch, đồng thời lãnh đạo và chi viện tích cực cho cuộc kháng chiến ở miền Nam.'
                },
                {
                    type: 'paragraph',
                    text: 'Chính phủ cũng tổ chức thành công cuộc Tổng tuyển cử đầu tiên, phát hành giấy bạc Việt Nam, động viên toàn dân tham gia sản xuất và đẩy lùi nạn đói. Những kết quả này cho thấy chính quyền cách mạng đang từng bước vượt qua hoàn cảnh đặc biệt khó khăn để chuyển từ tư thế giữ chính quyền sang tư thế điều hành quốc gia.'
                }
            ]
        },
        {
            title: 'Ý nghĩa của chặng II',
            description: 'Vì sao việc mở rộng Chính phủ trong đầu năm 1946 là bước đi quan trọng của cách mạng Việt Nam.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Chặng II cho thấy sự linh hoạt rất lớn của cách mạng Việt Nam trong việc tổ chức chính quyền. Trong bối cảnh đất nước vừa giành độc lập nhưng đang chịu nhiều sức ép, việc thành lập Chính phủ Liên hiệp lâm thời không phải là sự nhân nhượng vô nguyên tắc, mà là biện pháp chính trị nhằm tập hợp lực lượng, cô lập đối tượng nguy hiểm và bảo vệ chính quyền cách mạng.'
                },
                {
                    type: 'paragraph',
                    text: 'Nhờ chặng này, nền chính trị của chế độ mới được mở rộng thêm cơ sở đoàn kết, trong khi các điều kiện cho việc chuyển sang một chính quyền được bầu ra bởi Quốc hội cũng được chuẩn bị tích cực. Đây là mắt xích nối giữa giai đoạn giành chính quyền cuối năm 1945 với bước phát triển chính trị - pháp lý sâu hơn trong năm 1946.'
                }
            ]
        }
    ],
    keyTakeaways: [
        'Chính phủ Liên hiệp lâm thời ra đời nhằm mở rộng khối đoàn kết dân tộc và ổn định tình hình bên trong.',
        'Chặng II là bước chuyển quan trọng từ chính quyền cách mạng sau khởi nghĩa sang chính quyền có cơ sở đại diện rộng hơn.',
        'Trong thời gian tồn tại, Chính phủ vừa lo đối phó ngoại xâm, vừa chuẩn bị thành công cho Tổng tuyển cử đầu tiên.'
    ],
    reviewQuestions: [
        'Vì sao trong đầu năm 1946, cách mạng Việt Nam phải thành lập Chính phủ Liên hiệp lâm thời?',
        'Những hoạt động nào của Chính phủ Liên hiệp lâm thời cho thấy chính quyền cách mạng đang từng bước ổn định đất nước?',
        'Ý nghĩa lớn nhất của chặng II đối với sự phát triển của nhà nước Việt Nam Dân chủ Cộng hòa là gì?'
    ],
    relatedEventIds: [
        'doc-lap-1945'
    ],
    materials: [
        {
            type: 'Nguồn giai đoạn',
            title: 'Nội dung giai đoạn 2',
            source: 'Hồ sơ Word giai đoạn 2',
            url: '#',
            note: 'Nội dung bài học được biên soạn trực tiếp từ file Word giai đoạn 2 bạn cung cấp.'
        }
    ]
};

historicalData.eraDetails['chong-phap'].stageDetails['stage-3'] = {
    id: 'stage-3',
    title: 'Tổng tuyển cử - Thành lập Chính phủ liên hiệp kháng chiến',
    tag: 'Chặng phát triển',
    label: 'Chặng III / 7',
    period: '06/01/1946 - 14/09/1946',
    focus: 'Củng cố nhà nước dân chủ cộng hòa bằng Tổng tuyển cử, thành lập Chính phủ liên hiệp kháng chiến và thực hiện đường lối hòa để tiến để tranh thủ thời gian',
    image: 'assets/era-stages/stage-3/image1.jpeg',
    description: 'Chặng III là giai đoạn nhà nước Việt Nam Dân chủ Cộng hòa bước sang một mức phát triển cao hơn về chính trị và tổ chức. Từ cuộc Tổng tuyển cử đầu tiên, Quốc hội khóa I được thành lập, Chính phủ Liên hiệp kháng chiến ra đời, nhiều thiết chế quốc gia được hoàn thiện, đồng thời chính quyền cách mạng phải xử lý một bài toán đối ngoại cực kỳ phức tạp với Pháp và các thế lực nước ngoài.',
    significance: 'Ý nghĩa của chặng III nằm ở chỗ nó tạo ra nền tảng hợp pháp và tổ chức cho nhà nước dân chủ cộng hòa, đồng thời cho thấy đường lối ngoại giao mềm dẻo nhưng kiên định của cách mạng Việt Nam. Chính nhờ tranh thủ được một khoảng thời gian hòa bình nhất định mà đất nước có điều kiện chuẩn bị lực lượng cho cuộc kháng chiến lâu dài về sau.',
    studySections: [
        {
            title: 'Tổng tuyển cử và Quốc hội khóa I',
            description: 'Bước phát triển lớn về dân chủ và chính danh chính trị của nhà nước Việt Nam mới.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngày 06/01/1946, cuộc Tổng tuyển cử đầu tiên diễn ra trên đất nước Việt Nam. Lần đầu tiên trong lịch sử, mọi công dân Việt Nam từ 18 tuổi trở lên, không phân biệt nam hay nữ, đều có quyền bầu cử và ứng cử Quốc hội. Hơn 90% tổng số cử tri đi bỏ phiếu, nhân dân cả nước bầu ra 333 đại biểu vào Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa.'
                },
                {
                    type: 'paragraph',
                    text: 'Chủ tịch Hồ Chí Minh ứng cử tại Hà Nội và trúng cử với tỉ lệ phiếu rất cao. Thắng lợi của cuộc Tổng tuyển cử cho thấy chế độ mới đã có một nền tảng dân chủ rõ ràng, đồng thời tạo cơ sở để chuyển chính quyền từ tính chất lâm thời sang hình thức nhà nước có đại diện hợp hiến, hợp pháp hơn.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-3/image1.jpeg',
                    title: 'Tư liệu trong hồ sơ giai đoạn 3',
                    caption: 'Hình ảnh tư liệu được lưu trong hồ sơ chặng III, gắn với bước phát triển về chính trị và tổ chức của nhà nước Việt Nam Dân chủ Cộng hòa sau Tổng tuyển cử đầu tiên.',
                    source: 'Hồ sơ giai đoạn 3'
                }
            ]
        },
        {
            title: 'Củng cố thiết chế nhà nước và lực lượng bảo vệ chính quyền',
            description: 'Những quyết định quan trọng từ cuối tháng 1 đến cuối tháng 2/1946 nhằm củng cố nhà nước cách mạng.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngày 26/01/1946, Chính phủ Liên hiệp lâm thời ban bố Quốc lệnh gồm 10 điều thưởng và 10 điều phạt để nêu cao kỷ luật và tinh thần trách nhiệm trong nhiệm vụ bảo vệ Tổ quốc. Những quy định này phản ánh rõ yêu cầu phải xây dựng một nền kỷ cương quốc gia và quân đội vững mạnh trong bối cảnh đất nước còn rất non trẻ.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 21/02/1946, Chủ tịch Hồ Chí Minh ký Sắc lệnh số 23-SL về việc thành lập “Việt Nam Công an vụ”, qua đó hình thành hệ thống tổ chức an ninh quốc gia từ Trung ương đến địa phương. Đây là bước rất quan trọng để bảo vệ chính quyền mới trước sự chống phá của thù trong, giặc ngoài.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 02/03/1946, Quốc hội khóa I họp kỳ đầu tiên tại Hà Nội. Quốc hội thông qua việc bổ sung đại biểu của Việt Nam Quốc dân đảng và Việt Nam Cách mệnh Đồng minh hội, bầu Chủ tịch Hồ Chí Minh làm Chủ tịch Chính phủ Liên hiệp kháng chiến, bầu cụ Nguyễn Văn Tố làm Trưởng ban Thường trực Quốc hội, đồng thời thành lập Tiểu ban dự thảo Hiến pháp, Kháng chiến ủy viên hội và Đoàn cố vấn tối cao.'
                }
            ]
        },
        {
            title: 'Chính phủ Liên hiệp kháng chiến và đường lối đối nội, đối ngoại',
            description: 'Những chủ trương lớn sau kỳ họp đầu tiên của Quốc hội khóa I.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Trong phiên họp đầu tiên ngày 04/03/1946, Chính phủ Liên hiệp kháng chiến xác định rõ những chủ trương đối nội và đối ngoại. Về đối nội, các đảng phái phải đoàn kết chặt chẽ, hành chính và quân đội phải thống nhất, tài chính và kinh tế phải tập trung, mọi lực lượng của quốc dân phải được huy động vào nhiệm vụ kháng chiến, kiến quốc.'
                },
                {
                    type: 'paragraph',
                    text: 'Về đối ngoại, Chính phủ Việt Nam chủ trương thân thiện với các nước Đồng minh, đặc biệt là Trung Hoa; đồng tình với các dân tộc nhược tiểu đang đấu tranh giành độc lập; không thù hằn nhân dân Pháp nhưng kiên quyết chống chủ nghĩa thực dân và chỉ chấp nhận điều đình với Pháp trên nguyên tắc dân tộc tự quyết.'
                }
            ]
        },
        {
            title: 'Hòa để tiến và Hiệp định Sơ bộ 06/03/1946',
            description: 'Cách mạng Việt Nam xử lý bài toán đối ngoại cấp bách để tránh phải cùng lúc đối đầu với nhiều kẻ thù.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Sau khi Hiệp ước Pháp - Hoa được ký ngày 28/02/1946, tình hình ngoại giao của nước Việt Nam Dân chủ Cộng hòa trở nên đặc biệt cấp bách. Chính phủ quyết định cử Chủ tịch Hồ Chí Minh cùng các ông Nguyễn Tường Tam, Phan Anh, Võ Nguyên Giáp và Vũ Hồng Khanh phụ trách công việc đàm phán.'
                },
                {
                    type: 'paragraph',
                    text: 'Đối với Pháp, Chính phủ Việt Nam chủ trương “hòa để tiến”, tránh tình thế một lúc phải chiến đấu với nhiều kẻ thù, tranh thủ thêm thời gian hòa bình để củng cố và phát triển lực lượng. Ngày 06/03/1946, tại số 2 phố Lê Lai, Hà Nội, Chủ tịch Hồ Chí Minh thay mặt Chính phủ Việt Nam ký Hiệp định Sơ bộ Việt - Pháp với đại diện Chính phủ Pháp Sainteny.'
                },
                {
                    type: 'list',
                    items: [
                        'Pháp công nhận nước Việt Nam Dân chủ Cộng hòa là một nước tự do, có Chính phủ, Nghị viện, quân đội và tài chính riêng.',
                        'Pháp cam đoan thừa nhận kết quả của việc trưng cầu dân ý về sự thống nhất ba kỳ.',
                        'Việt Nam chấp thuận để một số quân Pháp ra miền Bắc thay thế quân Tưởng trong thời hạn quy định.',
                        'Hai bên đình chiến để tiếp tục đàm phán chính thức.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Kết quả quan trọng nhất của Hiệp định là giúp Việt Nam có thêm gần một năm hòa bình để xây dựng lực lượng căn bản cho cuộc kháng chiến lâu dài sau này.'
                }
            ]
        },
        {
            title: 'Tiếp tục xây dựng lực lượng và đấu tranh ngoại giao đến Tạm ước 14/09/1946',
            description: 'Những bước đi từ sau Hiệp định Sơ bộ đến trước khi bước vào tình thế xung đột không thể tránh khỏi với thực dân Pháp.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Trong các tháng 3, 4 và 5/1946, Chính phủ tiếp tục ban hành nhiều sắc lệnh để củng cố nhà nước và lực lượng quốc phòng: quy định cấp bậc, quân phục, quân hiệu; bảo vệ tự do cá nhân; quy định về báo chí và xuất bản; thiết lập Đảm phụ quốc phòng; quy định thể thức xin lập hội. Đây là những quyết định phản ánh nỗ lực đồng thời xây dựng pháp chế, xã hội dân sự và khả năng động viên cho kháng chiến.'
                },
                {
                    type: 'paragraph',
                    text: 'Từ ngày 18/04 đến 12/05/1946, hai bên họp trù bị tại Đà Lạt. Phái đoàn Việt Nam kiên quyết bảo vệ lập trường “hòa bình trong tự do, bình đẳng”, phản đối mọi âm mưu xóa bỏ Hiệp định Sơ bộ và khôi phục chế độ thuộc địa. Dù hội nghị bế tắc do thái độ ngoan cố của phía Pháp, nó vẫn cho thấy bản lĩnh đấu tranh ngoại giao rất rõ rệt của Chính phủ Việt Nam.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 22/05/1946, Chính phủ đổi tên Vệ quốc đoàn thành Quân đội quốc gia của nước Việt Nam Dân chủ Cộng hòa, thống nhất biên chế theo hệ thống trung đoàn, tiểu đoàn, đại đội. Từ ngày 06/07 đến 03/09/1946, phái đoàn Chính phủ Việt Nam do Phạm Văn Đồng dẫn đầu tiếp tục đàm phán với Pháp tại Fontainebleau, còn Chủ tịch Hồ Chí Minh cũng sang Pháp để vận động dư luận và thể hiện thiện chí hòa bình trên cơ sở bảo vệ chủ quyền dân tộc.'
                },
                {
                    type: 'paragraph',
                    text: 'Do thái độ ngoan cố và hiếu chiến của thực dân Pháp, đàm phán cuối cùng thất bại. Tuy nhiên, để tranh thủ thêm thời gian chuẩn bị lực lượng, Chủ tịch Hồ Chí Minh vẫn ký Tạm ước ngày 14/09/1946. Đây là bước đi tiếp nối đường lối hòa để tiến, giúp cách mạng Việt Nam có thêm thời gian quý báu trước khi buộc phải bước vào cuộc kháng chiến toàn quốc.'
                }
            ]
        }
    ],
    keyTakeaways: [
        'Tổng tuyển cử 06/01/1946 là bước khẳng định rõ nhất bản chất dân chủ của chế độ mới.',
        'Quốc hội khóa I và Chính phủ Liên hiệp kháng chiến đã tạo ra cơ sở tổ chức và pháp lý vững hơn cho nhà nước Việt Nam Dân chủ Cộng hòa.',
        'Đường lối hòa để tiến và việc ký Hiệp định Sơ bộ 06/03/1946, rồi Tạm ước 14/09/1946, là những bước đi chiến lược nhằm tranh thủ thời gian chuẩn bị cho cuộc kháng chiến lâu dài.'
    ],
    reviewQuestions: [
        'Vì sao cuộc Tổng tuyển cử ngày 06/01/1946 có ý nghĩa đặc biệt đối với chế độ mới?',
        'Chính phủ Liên hiệp kháng chiến được thành lập trong hoàn cảnh nào và có nhiệm vụ gì?',
        'Vì sao Chính phủ Việt Nam lại lựa chọn đường lối hòa để tiến trong quan hệ với Pháp năm 1946?',
        'Hiệp định Sơ bộ 06/03/1946 đem lại những lợi ích chiến lược nào cho cách mạng Việt Nam?'
    ],
    relatedEventIds: [
        'doc-lap-1945',
        'khang-chien-1946'
    ],
    mapNodeNarratives: {
        'moment:tong-tuyen-cu-dau-tien': {
            description: 'Cuộc Tổng tuyển cử ngày 06/01/1946 là bước chuyển rất quan trọng của nhà nước Việt Nam mới, đưa chính quyền cách mạng sang nền tảng đại diện dân chủ rộng rãi hơn thông qua Quốc hội khóa I.'
        },
        'event:khang-chien-1946': {
            description: 'Sau nhiều tháng vừa xây dựng chính quyền vừa đấu tranh ngoại giao với Pháp theo chủ trương hòa để tiến, chính quyền Việt Nam Dân chủ Cộng hòa vẫn không thể tránh khỏi cuộc đối đầu toàn diện khi thực dân Pháp ngày càng lấn tới cuối năm 1946.'
        }
    },
    materials: [
        {
            type: 'Nguồn giai đoạn',
            title: 'Nội dung giai đoạn 3',
            source: 'Hồ sơ Word giai đoạn 3',
            url: '#',
            note: 'Nội dung bài học được biên soạn trực tiếp từ file Word giai đoạn 3 bạn cung cấp.'
        }
    ]
};

historicalData.eraDetails['chong-phap'].stageDetails['stage-4'] = {
    id: 'stage-4',
    title: 'Thông qua Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa và thành lập Chính phủ mới',
    tag: 'Chặng phát triển',
    label: 'Chặng IV / 7',
    period: '28/10/1946 - 23/10/1950',
    focus: 'Củng cố nền tảng pháp lý của chế độ mới, phát động toàn quốc kháng chiến và từng bước chuyển sang thế phản công',
    image: 'assets/era-stages/stage-4/image1.jpeg',
    description: 'Chặng IV bao quát bước chuyển rất quan trọng từ việc hoàn thiện cơ sở hiến định của nhà nước Việt Nam Dân chủ Cộng hòa đến giai đoạn toàn quốc kháng chiến, bảo vệ căn cứ địa Việt Bắc và chuẩn bị những điều kiện để cuộc kháng chiến bước sang thế chủ động hơn. Đây là chặng cho thấy chính quyền cách mạng vừa xây dựng thể chế, vừa chiến đấu, vừa cải tổ tổ chức nhà nước và quân đội trong hoàn cảnh cực kỳ ác liệt.',
    significance: 'Ý nghĩa lớn nhất của chặng IV là biến nền độc lập vừa giành được thành một nhà nước có cơ sở pháp lý, có bộ máy chính quyền thống nhất và có khả năng lãnh đạo cuộc kháng chiến lâu dài. Từ Hiến pháp 1946, Lời kêu gọi Toàn quốc kháng chiến đến chiến thắng Việt Bắc và Biên giới, cách mạng Việt Nam từng bước trưởng thành cả về tổ chức nhà nước, thế trận chiến tranh nhân dân lẫn khả năng giành thế chủ động chiến lược.',
    studySections: [
        {
            title: 'Hiến pháp 1946 và Chính phủ mới',
            description: 'Kỳ họp thứ hai của Quốc hội khóa I đánh dấu bước củng cố nhà nước Việt Nam Dân chủ Cộng hòa trên phương diện pháp lý và tổ chức.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Từ ngày 28/10 đến ngày 09/11/1946, Quốc hội khóa I họp kỳ thứ hai và thảo luận nhiều chủ trương cấp bách để chuẩn bị kháng chiến. Chủ tịch Hồ Chí Minh trình Quốc hội danh sách Chính phủ mới thay cho Chính phủ liên hiệp kháng chiến. Quốc hội thể hiện sự tín nhiệm rất cao đối với Chủ tịch Hồ Chí Minh và thông qua Chính phủ mới, đồng thời bầu cụ Bùi Bằng Đoàn làm Trưởng ban Thường trực Quốc hội.'
                },
                {
                    type: 'paragraph',
                    text: 'Cũng trong kỳ họp này, Quốc hội thông qua bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa và ngày 09/11/1946, Chủ tịch Hồ Chí Minh ký Sắc lệnh công bố Hiến pháp. Hiến pháp 1946 xác lập rõ chính thể dân chủ cộng hòa, quyền và nghĩa vụ công dân, vị trí của Nghị viện, Chính phủ, chính quyền địa phương và cơ quan tư pháp. Đây là đạo luật cơ bản đầu tiên của nước Việt Nam mới.'
                },
                {
                    type: 'paragraph',
                    text: 'Hiến pháp 1946 không chỉ là một văn bản pháp lý. Nó phản ánh thắng lợi của cách mạng Việt Nam, khẳng định quyền độc lập, thống nhất lãnh thổ, bảo đảm các quyền tự do dân chủ của công dân và thể hiện tinh thần đoàn kết dân tộc. Việc có một bản Hiến pháp sớm như vậy cho thấy nhà nước cách mạng rất coi trọng việc tổ chức quyền lực nhà nước trên nền tảng dân chủ, pháp lý và trách nhiệm trước quốc dân.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-4/image1.jpeg',
                    title: 'Chính phủ mới sau kỳ họp Quốc hội cuối năm 1946',
                    caption: 'Thành phần Chính phủ mới phản ánh bước điều chỉnh quan trọng của bộ máy nhà nước trước khi đất nước bước vào cuộc kháng chiến toàn quốc.',
                    source: 'Hồ sơ giai đoạn 4'
                }
            ]
        },
        {
            title: 'Từ chủ trương kháng chiến đến toàn quốc kháng chiến',
            description: 'Cuối năm 1946, thực dân Pháp ngày càng lấn tới, buộc cách mạng Việt Nam phải chuyển sang cuộc kháng chiến toàn quốc.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngày 05/11/1946, Chủ tịch Hồ Chí Minh ra chỉ thị “Công việc khẩn cấp bây giờ”, nhấn mạnh nhiệm vụ kháng chiến và kiến quốc. Tháng 11/1946, cả nước được chia thành 12 khu hành chính và quân sự để tăng cường khả năng lãnh đạo, chỉ huy trong tình hình mới. Khi thực dân Pháp nổ súng đánh chiếm Hải Phòng, Lạng Sơn, đổ bộ lên Đà Nẵng và liên tiếp gây sức ép, nguy cơ chiến tranh toàn diện đã hiện rõ.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 18 và 19/12/1946, Ban Thường vụ Trung ương Đảng họp mở rộng tại Vạn Phúc, quyết định phát động toàn dân kháng chiến và chủ động nổ súng trước để giành thế chủ động. Tối 19/12/1946, cuộc chiến đấu ở Hà Nội bùng nổ; Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh nhanh chóng truyền đi khắp cả nước, khẳng định ý chí “thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ”.'
                },
                {
                    type: 'paragraph',
                    text: 'Từ sau ngày toàn quốc kháng chiến đến đầu năm 1947, quân dân ta bao vây, tiêu hao địch ở nhiều đô thị lớn như Hà Nội, Nam Định, Huế, Đà Nẵng. Việc chủ động rút các lực lượng chủ lực ra khỏi thành phố sau khi hoàn thành nhiệm vụ giam chân địch cho thấy đường lối kháng chiến trường kỳ, bảo toàn lực lượng đã được vận dụng rất sáng tạo ngay từ đầu.'
                },
                {
                    type: 'paragraph',
                    text: 'Năm 1947, Chính phủ tiếp tục cải tổ để mở rộng tính liên hiệp quốc dân, hợp nhất ủy ban kháng chiến với ủy ban hành chính thành ủy ban kháng chiến kiêm hành chính từ cấp tỉnh đến xã. Trong bối cảnh ấy, chiến thắng Việt Bắc Thu Đông 1947 đã đập tan âm mưu “đánh nhanh thắng nhanh” của Pháp, bảo vệ căn cứ địa cách mạng và cơ quan đầu não kháng chiến.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-4/image2.jpeg',
                    title: 'Chính phủ họp tại chiến khu Việt Bắc',
                    caption: 'Cuộc kháng chiến lâu dài đòi hỏi bộ máy nhà nước vẫn phải hoạt động liên tục ngay trong điều kiện chiến tranh.',
                    source: 'Hồ sơ giai đoạn 4'
                }
            ]
        },
        {
            title: 'Từ củng cố hậu phương đến mở chiến dịch Biên giới',
            description: 'Trong các năm 1948-1950, nhà nước và cuộc kháng chiến được củng cố toàn diện về tổ chức, kinh tế và quân sự.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Sau chiến thắng Việt Bắc, Chính phủ liên tục ban hành nhiều sắc lệnh quan trọng: phong quân hàm Đại tướng cho Võ Nguyên Giáp, tổ chức các liên khu, phát động thi đua ái quốc, thành lập Hội đồng Quốc phòng tối cao, từng bước triển khai các chính sách ruộng đất và giảm tô. Những quyết sách ấy giúp nhà nước cách mạng nâng cao khả năng chỉ đạo kháng chiến trên phạm vi toàn quốc.'
                },
                {
                    type: 'paragraph',
                    text: 'Năm 1949, nhiều biện pháp về nghĩa vụ quân sự, thanh tra chính phủ, giảm địa tô, hợp nhất liên khu và củng cố bộ máy quân sự tiếp tục được ban hành. Sang năm 1950, Hội nghị toàn quốc của Đảng đề ra nhiệm vụ chuyển mạnh cuộc kháng chiến, Chủ tịch Hồ Chí Minh ký Sắc lệnh Tổng động viên, Chính phủ phát hành Công trái quốc gia và đẩy mạnh huy động sức người, sức của cho tiền tuyến.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-4/image3.jpeg',
                    title: 'Chủ tịch Hồ Chí Minh thăm xưởng quân giới ở Việt Bắc',
                    caption: 'Hậu phương kháng chiến không chỉ sản xuất cho dân sinh mà còn trực tiếp phục vụ nhiệm vụ quốc phòng.',
                    source: 'Hồ sơ giai đoạn 4'
                },
                {
                    type: 'paragraph',
                    text: 'Trên nền tảng đó, Chiến dịch Biên giới Thu Đông 1950 được mở ra và giành thắng lợi lớn từ ngày 16/09 đến 23/10/1950. Chiến dịch tiêu diệt một bộ phận quan trọng sinh lực địch, giải phóng vùng biên giới, mở thông đường liên lạc quốc tế và đánh dấu bước chuyển quan trọng của cuộc kháng chiến từ phòng ngự sang phản công cục bộ. Đây cũng là điểm kết thúc logic của chặng IV.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-4/image4.jpeg',
                    title: 'Chủ tịch Hồ Chí Minh theo dõi mặt trận Đông Khê',
                    caption: 'Sự chỉ đạo sát sao của Trung ương và Chủ tịch Hồ Chí Minh góp phần quan trọng vào thắng lợi của Chiến dịch Biên giới 1950.',
                    source: 'Hồ sơ giai đoạn 4'
                }
            ]
        }
    ],
    keyTakeaways: [
        'Hiến pháp 1946 là đạo luật cơ bản đầu tiên của nước Việt Nam Dân chủ Cộng hòa và đánh dấu bước trưởng thành của nhà nước mới.',
        'Cuối năm 1946, thực dân Pháp buộc cách mạng Việt Nam phải chuyển sang cuộc kháng chiến toàn quốc.',
        'Từ 1947 đến 1950, nhà nước và cuộc kháng chiến được củng cố về tổ chức, kinh tế, quân sự, tạo tiền đề cho Chiến dịch Biên giới thắng lợi.'
    ],
    reviewQuestions: [
        'Vì sao việc thông qua Hiến pháp 1946 có ý nghĩa rất lớn đối với nhà nước Việt Nam Dân chủ Cộng hòa?',
        'Những yếu tố nào đã đẩy tình hình cuối năm 1946 tới quyết định phát động toàn quốc kháng chiến?',
        'Chiến thắng Việt Bắc 1947 và Chiến dịch Biên giới 1950 đã làm thay đổi cục diện kháng chiến như thế nào?'
    ],
    relatedEventIds: [
        'khang-chien-1946',
        'chien-dich-bien-gioi'
    ],
    mapNodeNarratives: {
        'moment:thong-qua-hien-phap-1946': {
            description: 'Việc thông qua Hiến pháp 1946 cho thấy nhà nước Việt Nam mới không chỉ giành chính quyền mà còn nhanh chóng xây dựng nền tảng pháp lý, tổ chức quyền lực và xác lập chính thể dân chủ cộng hòa.'
        },
        'event:khang-chien-1946': {
            description: 'Cuối năm 1946, từ chỗ cố gắng giữ hòa bình để xây dựng nhà nước, cách mạng Việt Nam buộc phải bước vào cuộc kháng chiến toàn quốc khi thực dân Pháp ngày càng lấn tới bằng tối hậu thư và hành động quân sự.'
        },
        'moment:chien-thang-viet-bac-1947': {
            description: 'Chiến thắng Việt Bắc Thu Đông 1947 đập tan cuộc tiến công quy mô lớn của Pháp lên căn cứ địa, bảo vệ cơ quan đầu não kháng chiến và chứng minh sức sống của đường lối kháng chiến trường kỳ.'
        },
        'moment:tong-dong-vien-1950': {
            description: 'Lệnh Tổng động viên đầu năm 1950 phản ánh bước phát triển mới của cuộc kháng chiến: toàn dân, toàn diện và tập trung cao độ hơn cho nhiệm vụ chuyển mạnh sang thế phản công.'
        }
    },
    materials: [
        {
            type: 'Nguồn giai đoạn',
            title: 'Nội dung giai đoạn 4',
            source: 'Hồ sơ Word giai đoạn 4',
            url: '#',
            note: 'Nội dung bài học được biên soạn trực tiếp từ file Word giai đoạn 4 bạn cung cấp.'
        }
    ]
};

historicalData.eraDetails['chong-phap'].stageDetails['stage-5'] = {
    id: 'stage-5',
    title: 'Thắng lợi trên mặt trận ngoại giao',
    tag: 'Chặng phát triển',
    label: 'Chặng V / 7',
    period: '14/01/1950 - 17/11/1950',
    focus: 'Phá thế cô lập về đối ngoại, mở rộng quan hệ quốc tế và tạo thêm chỗ dựa cho cuộc kháng chiến',
    description: 'Chặng V tuy ngắn nhưng có ý nghĩa đặc biệt về ngoại giao. Từ đầu năm 1950, Việt Nam Dân chủ Cộng hòa chính thức bước ra khỏi thế cô lập khi nhiều nước xã hội chủ nghĩa lần lượt công nhận và đặt quan hệ ngoại giao. Đây là thắng lợi lớn trên mặt trận quốc tế, giúp cách mạng Việt Nam có thêm địa vị pháp lý, tiếng nói chính trị và điều kiện thuận lợi để gắn kết cuộc kháng chiến trong nước với phong trào cách mạng thế giới.',
    significance: 'Thắng lợi ngoại giao năm 1950 mở ra một bước ngoặt lớn: cách mạng Việt Nam từ chỗ tự lực trong thế bị bao vây đã có được sự thừa nhận và ủng hộ chính thức trên trường quốc tế. Chính yếu tố này góp phần tạo nên hậu thuẫn rất quan trọng cho thắng lợi quân sự và chính trị ở các chặng sau.',
    studySections: [
        {
            title: 'Tuyên bố đường lối ngoại giao và bước mở đầu phá thế cô lập',
            description: 'Đầu năm 1950, Chính phủ Việt Nam Dân chủ Cộng hòa chủ động xác lập rõ lập trường ngoại giao của mình.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngày 14/01/1950, Chính phủ Việt Nam Dân chủ Cộng hòa ra tuyên bố về đường lối ngoại giao. Đây là bước xác định rõ ràng vị thế quốc tế của nhà nước Việt Nam mới trong bối cảnh cuộc kháng chiến chống thực dân Pháp đang bước vào giai đoạn quyết liệt hơn. Không lâu sau, ngày 15/01/1950, Chính phủ Việt Nam Dân chủ Cộng hòa công nhận Chính phủ nước Cộng hòa Nhân dân Trung Hoa.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 18/01/1950, Chính phủ Cộng hòa Nhân dân Trung Hoa là chính phủ đầu tiên chính thức công nhận Việt Nam Dân chủ Cộng hòa. Đây là thắng lợi ngoại giao có ý nghĩa mở đường, đánh dấu việc cách mạng Việt Nam bắt đầu phá thế cô lập về đối ngoại và có được sự thừa nhận chính thức từ một quốc gia lớn trong khu vực.'
                }
            ]
        },
        {
            title: 'Các nước lần lượt công nhận Việt Nam Dân chủ Cộng hòa',
            description: 'Trong năm 1950, hàng loạt nước xã hội chủ nghĩa công nhận và đặt quan hệ ngoại giao với Việt Nam.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Sau Trung Quốc, nhiều nước khác nhanh chóng công nhận và đặt quan hệ ngoại giao với Chính phủ Việt Nam Dân chủ Cộng hòa. Chuỗi sự kiện này diễn ra liên tiếp chỉ trong một thời gian ngắn, cho thấy vị thế quốc tế của cuộc kháng chiến Việt Nam đã thay đổi rõ rệt.'
                },
                {
                    type: 'list',
                    items: [
                        '30/01/1950: Liên Xô công nhận Việt Nam Dân chủ Cộng hòa.',
                        '31/01/1950: Cộng hòa Dân chủ Nhân dân Triều Tiên công nhận Việt Nam Dân chủ Cộng hòa.',
                        '02/02/1950: Cộng hòa Nhân dân Tiệp Khắc và Cộng hòa Dân chủ Đức thiết lập quan hệ với Việt Nam.',
                        '03/02/1950: Cộng hòa Nhân dân Rumani công nhận Việt Nam.',
                        '05/02/1950: Ba Lan và Hunggari công nhận Việt Nam.',
                        '08/02/1950: Bungari công nhận Việt Nam.',
                        '18/02/1950: Anbani công nhận Việt Nam.',
                        '17/11/1950: Mông Cổ công nhận Việt Nam.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Việc nhiều nước công nhận Việt Nam trong năm 1950 không chỉ mở rộng quan hệ ngoại giao mà còn tạo điều kiện để cuộc kháng chiến có thêm sự ủng hộ về chính trị, tinh thần và sau đó là các điều kiện thuận lợi hơn về viện trợ, liên lạc quốc tế và vị thế trên trường thế giới.'
                }
            ]
        },
        {
            title: 'Ý nghĩa của thắng lợi ngoại giao',
            description: 'Vì sao chặng V lại được xem là một mốc rất quan trọng của cả giai đoạn 1945-1954.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Thắng lợi ngoại giao năm 1950 cho thấy cách mạng Việt Nam không còn là một phong trào đơn lẻ bị bao vây hoàn toàn, mà đã trở thành một thực thể chính trị được nhiều quốc gia công nhận. Điều này củng cố đáng kể tính chính danh của nhà nước Việt Nam Dân chủ Cộng hòa.'
                },
                {
                    type: 'paragraph',
                    text: 'Về chiến lược, thắng lợi này gắn chặt với bước phát triển mới của cuộc kháng chiến. Khi có thêm hậu thuẫn quốc tế, nhà nước và quân đội Việt Nam có điều kiện thuận lợi hơn để củng cố hậu phương, mở rộng liên hệ quốc tế và từng bước tạo thế cho những thắng lợi quân sự lớn hơn, tiêu biểu là Chiến dịch Biên giới 1950 và cao hơn nữa là Điện Biên Phủ 1954.'
                }
            ]
        }
    ],
    keyTakeaways: [
        'Năm 1950 là năm cách mạng Việt Nam đạt thắng lợi rất lớn trên mặt trận ngoại giao.',
        'Việc nhiều nước xã hội chủ nghĩa công nhận Việt Nam Dân chủ Cộng hòa đã giúp phá thế cô lập và củng cố vị thế quốc tế của nhà nước Việt Nam mới.',
        'Thắng lợi ngoại giao là một điều kiện quan trọng hỗ trợ cho bước phát triển quân sự và chính trị ở các chặng tiếp theo.'
    ],
    reviewQuestions: [
        'Vì sao sự kiện Trung Quốc công nhận Việt Nam Dân chủ Cộng hòa ngày 18/01/1950 có ý nghĩa đặc biệt?',
        'Những quốc gia nào đã lần lượt công nhận Việt Nam Dân chủ Cộng hòa trong năm 1950?',
        'Thắng lợi ngoại giao năm 1950 tác động như thế nào đến cục diện của cuộc kháng chiến chống Pháp?'
    ],
    relatedEventIds: [
        'chien-dich-bien-gioi',
        'hiep-dinh-geneva'
    ],
    mapNodeNarratives: {
        'moment:cac-nuoc-cong-nhan-viet-nam-1950': {
            description: 'Thắng lợi ngoại giao năm 1950 phá thế cô lập của Việt Nam Dân chủ Cộng hòa, đưa cuộc kháng chiến có thêm chỗ dựa quốc tế và làm thay đổi đáng kể vị thế của nhà nước cách mạng.'
        }
    },
    materials: [
        {
            type: 'Nguồn giai đoạn',
            title: 'Nội dung giai đoạn 5',
            source: 'Hồ sơ Word giai đoạn 5',
            url: '#',
            note: 'Nội dung bài học được biên soạn trực tiếp từ file Word giai đoạn 5 bạn cung cấp.'
        }
    ]
};

historicalData.eraDetails['chong-phap'].stageDetails['stage-6'] = {
    id: 'stage-6',
    title: 'Đẩy mạnh cuộc kháng chiến chống Pháp',
    tag: 'Chặng phát triển',
    label: 'Chặng VI / 7',
    period: '11/02/1951 - 19/12/1953',
    focus: 'Củng cố đường lối kháng chiến, mở rộng khối đại đoàn kết, phát triển kinh tế kháng chiến và tạo thế cho bước quyết chiến chiến lược',
    image: 'assets/era-stages/stage-6/image1.jpeg',
    description: 'Chặng VI là giai đoạn cuộc kháng chiến chống Pháp được đẩy mạnh toàn diện cả về chính trị, quân sự, kinh tế và xã hội. Từ Đại hội Đảng toàn quốc lần thứ II, sự thống nhất mặt trận dân tộc, việc thành lập Ngân hàng quốc gia, các chiến dịch Hòa Bình, Tây Bắc đến chính sách ruộng đất và cải cách ruộng đất, toàn bộ chặng này cho thấy sự trưởng thành mạnh mẽ của nhà nước dân chủ nhân dân trong điều kiện chiến tranh lâu dài.',
    significance: 'Ý nghĩa của chặng VI nằm ở chỗ nó chuẩn bị đầy đủ thế và lực cho cuộc quyết chiến chiến lược sau này. Đây là giai đoạn mà cuộc kháng chiến không chỉ được duy trì mà còn phát triển về quy mô tổ chức, sức mạnh chính trị, hậu phương kinh tế và năng lực tiến công, tạo ra nền tảng trực tiếp cho Điện Biên Phủ 1954.',
    studySections: [
        {
            title: 'Đại hội II của Đảng và củng cố khối đại đoàn kết',
            description: 'Năm 1951 đánh dấu bước trưởng thành rất lớn của lực lượng lãnh đạo kháng chiến và của mặt trận dân tộc thống nhất.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Từ ngày 11 đến ngày 19/02/1951, Đại hội đại biểu toàn quốc lần thứ II của Đảng họp tại Vinh Quang, Chiêm Hóa, Tuyên Quang. Đại hội quyết định tổ chức lại Đảng cho phù hợp với tình hình mỗi nước Đông Dương, ở Việt Nam xây dựng Đảng Lao động Việt Nam và đưa Đảng ra hoạt động công khai. Hồ Chí Minh được bầu làm Chủ tịch Ban Chấp hành Trung ương Đảng, Trường Chinh được bầu làm Tổng Bí thư.'
                },
                {
                    type: 'paragraph',
                    text: 'Đại hội xác định rõ nhiệm vụ cơ bản của cách mạng Việt Nam là đánh đuổi đế quốc xâm lược, giành độc lập và thống nhất hoàn toàn cho dân tộc, xóa bỏ những tàn tích phong kiến, thực hiện người cày có ruộng và phát triển chế độ dân chủ nhân dân. Đồng thời, Đại hội khẳng định đường lối kháng chiến là chiến tranh nhân dân, toàn dân, toàn diện, trường kỳ và nhất định thắng lợi.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-6/image1.jpeg',
                    title: 'Chủ tịch Hồ Chí Minh đọc báo cáo chính trị tại Đại hội II',
                    caption: 'Đại hội II của Đảng là cột mốc định hình đường lối và tổ chức lãnh đạo cho giai đoạn đẩy mạnh kháng chiến.',
                    source: 'Hồ sơ giai đoạn 6'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-6/image2.jpeg',
                    title: 'Đại hội Đảng toàn quốc lần thứ II',
                    caption: 'Đại hội diễn ra tại chiến khu Việt Bắc, thể hiện sự trưởng thành của lực lượng lãnh đạo kháng chiến.',
                    source: 'Hồ sơ giai đoạn 6'
                },
                {
                    type: 'paragraph',
                    text: 'Ngay sau đó, từ ngày 03 đến ngày 07/03/1951, Đại hội toàn quốc thống nhất Việt Minh và Liên Việt thành Mặt trận Liên Việt. Sự kiện này góp phần kết chặt hơn nữa khối đại đoàn kết toàn dân, tạo cơ sở chính trị rộng lớn cho nhiệm vụ kháng chiến kiến quốc.'
                }
            ]
        },
        {
            title: 'Xây dựng hậu phương kháng chiến về kinh tế, tài chính và xã hội',
            description: 'Bên cạnh đấu tranh quân sự, nhà nước kháng chiến từng bước xây dựng nền kinh tế và bộ máy quản lý mới phục vụ kháng chiến lâu dài.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Từ giữa năm 1951, Chính phủ ban hành nhiều sắc lệnh quan trọng về thuế nông nghiệp, công thương nghiệp và hàng hóa; đồng thời thành lập Ngân hàng quốc gia Việt Nam ngày 06/05/1951. Ngân hàng quốc gia có nhiệm vụ phát hành giấy bạc, điều hòa lưu thông tiền tệ, quản lý quỹ quốc gia và ngoại tệ, đấu tranh tiền tệ với địch. Đây là bước tiến rất quan trọng của nền tài chính quốc gia trong hoàn cảnh chiến tranh.'
                },
                {
                    type: 'paragraph',
                    text: 'Chính phủ cũng đổi tên Bộ Kinh tế thành Bộ Công thương, thành lập Sở Mậu dịch, tổ chức buôn bán trong nước, điều hòa thị trường, ổn định giá cả và cung cấp những nhu cầu thiết yếu cho bộ đội, cơ quan, nhân dân. Việc phát động phê bình - tự phê bình, sản xuất - tiết kiệm và thi đua ái quốc tiếp tục cho thấy kháng chiến không chỉ diễn ra ngoài mặt trận mà còn diễn ra trong toàn bộ đời sống kinh tế - xã hội.'
                },
                {
                    type: 'paragraph',
                    text: 'Từ ngày 01 đến ngày 06/05/1952, Đại hội chiến sĩ thi đua và cán bộ gương mẫu toàn quốc lần thứ nhất được tổ chức tại Việt Bắc. Đại hội biểu dương những điển hình mới trong quân đội, lao động, sản xuất và quản lý, góp phần xây dựng tinh thần thi đua yêu nước như một động lực lớn của kháng chiến.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-6/image3.jpeg',
                    title: 'Đại hội chiến sĩ thi đua và cán bộ gương mẫu',
                    caption: 'Phong trào thi đua yêu nước góp phần tạo nên sức mạnh hậu phương vững chắc cho cuộc kháng chiến.',
                    source: 'Hồ sơ giai đoạn 6'
                }
            ]
        },
        {
            title: 'Chiến thắng Hòa Bình, Tây Bắc và sự chuẩn bị cho bước quyết chiến',
            description: 'Trong các năm 1951-1953, quân và dân ta liên tiếp giành thêm những thắng lợi quan trọng, mở rộng vùng giải phóng và tạo điều kiện cho chiến cuộc mới.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Từ ngày 18/11/1951 đến ngày 23/02/1952, Chiến dịch Hòa Bình kết thúc thắng lợi, làm phá sản một kế hoạch chiến tranh lớn của địch trong Đông Xuân 1951-1952. Tiếp đó, từ ngày 14/10 đến ngày 10/12/1952, Chiến dịch Tây Bắc toàn thắng, giải phóng một vùng chiến lược rộng lớn, tiêu diệt nhiều vị trí của địch và tạo điều kiện về nhiều mặt cho chiến dịch Điện Biên Phủ sau này.'
                },
                {
                    type: 'paragraph',
                    text: 'Trong năm 1953, nhà nước và Đảng tiếp tục đẩy mạnh việc phát động quần chúng, thi hành chính sách ruộng đất, thành lập Khu Tây Bắc, củng cố Bộ Công an, ban hành chính sách dân tộc và chính sách tôn giáo. Những quyết sách ấy vừa nhằm động viên lực lượng toàn dân, vừa mở rộng thêm cơ sở chính trị - xã hội cho kháng chiến.'
                },
                {
                    type: 'paragraph',
                    text: 'Cuối năm 1953, Kỳ họp thứ ba của Quốc hội khóa I thông qua Luật cải cách ruộng đất và ngày 19/12/1953 Chính phủ ban bố luật này. Đây là một quyết sách rất lớn, đáp ứng yêu cầu cấp bách của hàng triệu nông dân, củng cố hậu phương và tạo thêm động lực xã hội cho cuộc kháng chiến bước vào chặng quyết định.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-6/image4.jpeg',
                    title: 'Chủ tịch Hồ Chí Minh đọc báo cáo tại kỳ họp thứ 3 Quốc hội khóa I',
                    caption: 'Những quyết sách lớn cuối năm 1953 phản ánh bước chuẩn bị rất quan trọng cho chặng quyết chiến chiến lược.',
                    source: 'Hồ sơ giai đoạn 6'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-6/image5.jpeg',
                    title: 'Thực hiện cải cách ruộng đất ở Thái Nguyên',
                    caption: 'Chính sách ruộng đất gắn trực tiếp với việc động viên nông dân và củng cố hậu phương kháng chiến.',
                    source: 'Hồ sơ giai đoạn 6'
                }
            ]
        }
    ],
    keyTakeaways: [
        'Đại hội II của Đảng năm 1951 là mốc rất quan trọng trong việc định hình lại lực lượng lãnh đạo và đường lối kháng chiến.',
        'Nhà nước kháng chiến trong giai đoạn này phát triển mạnh trên nhiều mặt: tài chính, kinh tế, mặt trận đoàn kết, thi đua ái quốc, quân sự và chính sách xã hội.',
        'Các chiến thắng Hòa Bình, Tây Bắc và Luật cải cách ruộng đất cuối năm 1953 tạo điều kiện trực tiếp cho Điện Biên Phủ.'
    ],
    reviewQuestions: [
        'Đại hội II của Đảng đã xác định những nội dung quan trọng nào cho cuộc kháng chiến chống Pháp?',
        'Vì sao việc thành lập Ngân hàng quốc gia Việt Nam và cải tổ các chính sách kinh tế có ý nghĩa lớn đối với kháng chiến?',
        'Chiến thắng Hòa Bình, Tây Bắc và chính sách ruộng đất đã góp phần chuẩn bị cho Điện Biên Phủ như thế nào?'
    ],
    relatedEventIds: [
        'chien-dich-bien-gioi',
        'dien-bien-phu'
    ],
    mapNodeNarratives: {
        'moment:dai-hoi-dang-lan-thu-ii': {
            description: 'Đại hội II của Đảng đầu năm 1951 đánh dấu bước trưởng thành quan trọng của lực lượng lãnh đạo kháng chiến, xác định rõ đường lối chiến tranh nhân dân và tổ chức lại Đảng cho phù hợp với yêu cầu mới.'
        },
        'moment:chien-thang-hoa-binh': {
            description: 'Chiến thắng Hòa Bình 1952 chứng minh khả năng đánh bại những kế hoạch chiến tranh lớn của địch, đồng thời mở rộng vùng giải phóng và thế chủ động của ta.'
        },
        'moment:chien-thang-tay-bac': {
            description: 'Chiến thắng Tây Bắc cuối năm 1952 giải phóng một vùng chiến lược rộng lớn và tạo điều kiện nhiều mặt cho việc chuẩn bị chiến dịch Điện Biên Phủ.'
        },
        'moment:luat-cai-cach-ruong-dat': {
            description: 'Việc ban bố Luật cải cách ruộng đất cuối năm 1953 phản ánh nỗ lực củng cố hậu phương xã hội, động viên nông dân và tạo thêm sức mạnh cho cuộc kháng chiến.'
        }
    },
    materials: [
        {
            type: 'Nguồn giai đoạn',
            title: 'Nội dung giai đoạn 6',
            source: 'Hồ sơ Word giai đoạn 6',
            url: '#',
            note: 'Nội dung bài học được biên soạn trực tiếp từ file Word giai đoạn 6 bạn cung cấp.'
        }
    ]
};

historicalData.eraDetails['chong-phap'].stageDetails['stage-7'] = {
    id: 'stage-7',
    title: 'Chiến dịch Điện Biên Phủ toàn thắng, Hiệp định Giơnevơ được ký kết',
    tag: 'Chặng phát triển',
    label: 'Chặng VII / 7',
    period: 'Cuối 09/1953 - 10/1954',
    focus: 'Tiến tới quyết chiến chiến lược, giành thắng lợi quân sự và ngoại giao, kết thúc cuộc kháng chiến chống Pháp',
    image: 'assets/era-stages/stage-7/image1.jpeg',
    description: 'Chặng VII là đỉnh cao của toàn bộ giai đoạn 1945-1954. Đây là chặng mà cuộc kháng chiến chống Pháp đi tới thắng lợi quyết định bằng chiến thắng Điện Biên Phủ, thắng lợi trên bàn đàm phán Geneva và việc giải phóng Thủ đô Hà Nội. Toàn bộ chặng này cho thấy sự kết hợp chặt chẽ giữa thắng lợi quân sự, chính trị và ngoại giao của cách mạng Việt Nam.',
    significance: 'Ý nghĩa của chặng VII là kết thúc thắng lợi cuộc kháng chiến chống thực dân Pháp, buộc đối phương phải ký hiệp định đình chỉ chiến sự và thừa nhận những nguyên tắc cơ bản về độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam. Nó cũng mở ra một thời kỳ lịch sử mới, trong đó miền Bắc bước vào công cuộc xây dựng hòa bình và trở thành hậu phương lớn cho cuộc đấu tranh tiếp theo.',
    studySections: [
        {
            title: 'Chuẩn bị và toàn thắng ở Điện Biên Phủ',
            description: 'Từ kế hoạch Đông Xuân 1953-1954 đến chiến thắng ngày 07/05/1954 là quá trình chuẩn bị và chiến đấu quyết liệt của toàn dân, toàn quân.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Từ cuối tháng 09/1953, Bộ Chính trị Trung ương Đảng đã thông qua kế hoạch tác chiến Đông Xuân 1953-1954 nhằm giữ vững quyền chủ động và phối hợp tác chiến trên phạm vi cả nước cũng như trên toàn Đông Dương. Đầu tháng 12/1953, Bộ Chính trị quyết định mở chiến dịch đánh bại địch ở Điện Biên Phủ. Chủ tịch Hồ Chí Minh nhấn mạnh đây là một chiến dịch rất quan trọng cả về quân sự, chính trị và quốc tế.'
                },
                {
                    type: 'paragraph',
                    text: 'Bộ chỉ huy mặt trận do Võ Nguyên Giáp trực tiếp làm Chỉ huy trưởng, Phạm Văn Đồng làm Chủ tịch Hội đồng cung cấp mặt trận. Ngày 22/12/1953, Chủ tịch Hồ Chí Minh trao cờ “Quyết chiến quyết thắng” cho quân đội. Toàn bộ công tác chuẩn bị cho chiến dịch được tiến hành khẩn trương, huy động sức người, sức của từ hậu phương đến tiền tuyến.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 13/03/1954, Chiến dịch Điện Biên Phủ bắt đầu. Sau ba đợt tấn công kéo dài 55 ngày đêm, đến ngày 07/05/1954, quân và dân Việt Nam tiêu diệt và bắt sống toàn bộ quân địch trong tập đoàn cứ điểm, trong đó có tướng De Castries. Chiến thắng Điện Biên Phủ được ghi vào lịch sử dân tộc như một mốc son chói lọi và có ý nghĩa quốc tế rất lớn.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-7/image1.jpeg',
                    title: 'Đánh chiếm sở chỉ huy Điện Biên Phủ',
                    caption: 'Ngày 07/05/1954, quân ta đánh chiếm sở chỉ huy, bắt sống toàn bộ bộ chỉ huy tập đoàn cứ điểm do tướng De Castries cầm đầu.',
                    source: 'Hồ sơ giai đoạn 7'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-7/image2.jpeg',
                    title: 'Tù binh Pháp tại Điện Biên Phủ',
                    caption: 'Kết quả chiến dịch phản ánh thắng lợi hoàn toàn của quân và dân Việt Nam trong trận quyết chiến chiến lược.',
                    source: 'Hồ sơ giai đoạn 7'
                }
            ]
        },
        {
            title: 'Từ chiến trường Điện Biên đến bàn đàm phán Geneva',
            description: 'Thắng lợi quân sự tại Điện Biên Phủ tạo nên tư thế mới cho phái đoàn Việt Nam trên bàn đàm phán quốc tế.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngày 08/05/1954, Hội nghị Geneva về Đông Dương khai mạc. Phái đoàn Việt Nam Dân chủ Cộng hòa bước vào hội nghị trong tư thế của một dân tộc chiến thắng. Trong phiên họp toàn thể ngày 10/05/1954, Phạm Văn Đồng trình bày lập trường tám điểm, nhấn mạnh yêu cầu đình chỉ chiến sự đi đôi với giải pháp chính trị trên cơ sở tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của các nước Đông Dương.'
                },
                {
                    type: 'paragraph',
                    text: 'Sau 8 phiên họp toàn thể và 23 phiên họp hẹp căng thẳng, ngày 20/07/1954, các hiệp định đình chỉ chiến sự ở Việt Nam, Lào và Campuchia được ký kết. Bản Tuyên bố chung của Hội nghị khẳng định các nguyên tắc cơ bản về độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ; đồng thời quy định ở Việt Nam đường ranh giới quân sự chỉ có tính chất tạm thời và sẽ tiến tới tổng tuyển cử thống nhất đất nước.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-7/image3.jpeg',
                    title: 'Ký Hiệp định Giơnevơ',
                    caption: 'Thắng lợi quân sự ở Điện Biên Phủ được chuyển hóa thành thắng lợi ngoại giao quan trọng trên bàn hội nghị quốc tế.',
                    source: 'Hồ sơ giai đoạn 7'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-7/image4.jpeg',
                    title: 'Chính phủ họp nghe báo cáo về Geneva',
                    caption: 'Kết quả Hội nghị Geneva được nhìn nhận như một thắng lợi lớn, nhưng cũng mở ra những nhiệm vụ lịch sử mới cho đất nước.',
                    source: 'Hồ sơ giai đoạn 7'
                }
            ]
        },
        {
            title: 'Từ Geneva đến giải phóng Thủ đô',
            description: 'Hiệp định được ký kết không phải điểm dừng mà là bước chuyển sang một thời kỳ chính trị - lịch sử mới.',
            flow: [
                {
                    type: 'paragraph',
                    text: 'Ngày 22/07/1954, Chủ tịch Hồ Chí Minh ra lời kêu gọi nhân Hội nghị Geneva thành công, khẳng định thắng lợi to lớn của cuộc kháng chiến và nhấn mạnh nhiệm vụ tiếp tục phấn đấu vì sự nghiệp thống nhất đất nước. Trung tuần tháng 8/1954, Hội đồng Chính phủ thông qua các đề án tổ chức tiếp đón bộ đội, cán bộ và đồng bào miền Nam tập kết; ngày 17/09/1954, Hội đồng Chính phủ ban hành Tám chính sách đối với các thành phố mới giải phóng.'
                },
                {
                    type: 'paragraph',
                    text: 'Ngày 10/10/1954, Thủ đô Hà Nội được giải phóng. Đây là sự kiện có ý nghĩa biểu tượng rất lớn, khép lại quá trình thực hiện Hiệp định Geneva trên chiến trường miền Bắc và mở đầu thời kỳ mới của Thủ đô trong hòa bình. Ngày 15/10/1954, Chủ tịch Hồ Chí Minh trở về Hà Nội; ngày 16/10, Người tiếp đoàn đại biểu nhân dân Thủ đô và căn dặn đồng bào hăng hái khôi phục, phát triển đời sống mới.'
                },
                {
                    type: 'paragraph',
                    text: 'Việc giải phóng Thủ đô cho thấy thắng lợi của cuộc kháng chiến chống Pháp không chỉ được xác nhận trên chiến trường và trên bàn hội nghị mà còn hiện lên cụ thể trong việc tiếp quản, xây dựng lại và ổn định đời sống ở một trung tâm chính trị lớn của đất nước. Đây là điểm kết thúc logic của toàn bộ giai đoạn 1945-1954.'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-7/image5.jpeg',
                    title: 'Giải phóng Thủ đô Hà Nội',
                    caption: 'Ngày 10/10/1954, Hà Nội được giải phóng, trở thành dấu mốc chuyển sang thời kỳ mới của miền Bắc.',
                    source: 'Hồ sơ giai đoạn 7'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-7/image6.jpeg',
                    title: 'Chủ tịch Hồ Chí Minh trở về Hà Nội',
                    caption: 'Sự trở về của Chủ tịch Hồ Chí Minh tại Thủ đô mang ý nghĩa chính trị và tinh thần rất lớn đối với nhân dân cả nước.',
                    source: 'Hồ sơ giai đoạn 7'
                },
                {
                    type: 'image',
                    url: 'assets/era-stages/stage-7/image7.jpeg',
                    title: 'Nhân dân Hà Nội mừng Trung ương và Chính phủ',
                    caption: 'Không khí ngày tiếp quản Thủ đô thể hiện rõ niềm vui chiến thắng và niềm tin vào thời kỳ hòa bình, xây dựng mới.',
                    source: 'Hồ sơ giai đoạn 7'
                }
            ]
        }
    ],
    keyTakeaways: [
        'Điện Biên Phủ là thắng lợi quân sự quyết định, đập tan cố gắng cuối cùng của thực dân Pháp ở Đông Dương.',
        'Hiệp định Geneva là thắng lợi ngoại giao quan trọng, gắn chặt với thế chiến thắng mà Điện Biên Phủ tạo ra.',
        'Giải phóng Thủ đô Hà Nội là dấu mốc kết thúc logic của giai đoạn kháng chiến chống Pháp và mở đầu thời kỳ mới ở miền Bắc.'
    ],
    reviewQuestions: [
        'Vì sao Điện Biên Phủ được xem là đỉnh cao quân sự của cuộc kháng chiến chống Pháp?',
        'Thắng lợi ở Điện Biên Phủ đã tác động như thế nào đến Hội nghị Geneva?',
        'Giải phóng Thủ đô Hà Nội năm 1954 có ý nghĩa gì trong việc khép lại giai đoạn 1945-1954?'
    ],
    relatedEventIds: [
        'dien-bien-phu',
        'hiep-dinh-geneva'
    ],
    mapNodeNarratives: {
        'event:dien-bien-phu': {
            description: 'Điện Biên Phủ là đỉnh cao của toàn bộ quá trình chuẩn bị về chính trị, quân sự và hậu phương trong nhiều năm, đưa cuộc kháng chiến chống Pháp tới thắng lợi quyết định trên chiến trường.'
        },
        'event:hiep-dinh-geneva': {
            description: 'Hiệp định Geneva là thắng lợi ngoại giao lớn gắn chặt với chiến thắng Điện Biên Phủ, buộc thực dân Pháp phải chấm dứt chiến tranh xâm lược ở Đông Dương và mở ra bước chuyển mới của cách mạng Việt Nam.'
        },
        'moment:giai-phong-thu-do': {
            description: 'Giải phóng Thủ đô Hà Nội ngày 10/10/1954 là dấu mốc hoàn chỉnh của chặng kết thúc kháng chiến chống Pháp, đưa thắng lợi từ hiệp định và chiến trường vào đời sống chính trị thực tế của đất nước.'
        }
    },
    materials: [
        {
            type: 'Nguồn giai đoạn',
            title: 'Nội dung giai đoạn 7',
            source: 'Hồ sơ Word giai đoạn 7',
            url: '#',
            note: 'Nội dung bài học được biên soạn trực tiếp từ file Word giai đoạn 7 bạn cung cấp.'
        }
    ]
};

function createStudySection(title, description, paragraphs) {
    return [
        {
            title,
            description,
            flow: paragraphs.map(text => ({
                type: 'paragraph',
                text
            }))
        }
    ];
}

const chongPhapEventOverrides = {
    'khang-chien-1946': {
        image: 'assets/era-stages/stage-4/image2.jpeg',
        significance: 'Toàn quốc kháng chiến là bước chuyển mang tính lịch sử từ nỗ lực giữ hòa bình để xây dựng nhà nước sang cuộc chiến tranh nhân dân lâu dài bảo vệ nền độc lập của dân tộc.',
        studySections: [
            {
                title: 'Từ hòa để tiến đến buộc phải cầm súng',
                description: 'Cuối năm 1946, mọi nỗ lực giữ hòa bình của Chính phủ Việt Nam Dân chủ Cộng hòa bị thực dân Pháp phá vỡ bằng các hành động quân sự ngày càng quyết liệt.',
                flow: [
                    {
                        type: 'paragraph',
                        text: 'Sau khi ký Hiệp định Sơ bộ 06/03/1946 và Tạm ước 14/09/1946 để tranh thủ thời gian, Chính phủ Việt Nam vẫn chủ động tìm cách giữ hòa bình. Nhưng cuối năm 1946, thực dân Pháp liên tục gây xung đột ở Hải Phòng, Lạng Sơn, Hà Nội và gửi tối hậu thư đòi tước quyền kiểm soát an ninh của ta ở Thủ đô.'
                    },
                    {
                        type: 'paragraph',
                        text: 'Tình hình ấy cho thấy chiến tranh toàn diện không còn tránh khỏi. Hội nghị Vạn Phúc ngày 18 và 19/12/1946 quyết định phát động toàn dân kháng chiến, chủ động nổ súng để giành thế chủ động chiến lược.'
                    }
                ]
            },
            {
                title: 'Mở đầu cuộc kháng chiến toàn dân, toàn diện, trường kỳ',
                description: 'Những ngày đầu Toàn quốc kháng chiến đã xác lập mô hình chiến tranh nhân dân của cách mạng Việt Nam.',
                flow: [
                    {
                        type: 'paragraph',
                        text: 'Tối 19/12/1946, cuộc chiến đấu ở Hà Nội bùng nổ. Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh nhanh chóng truyền đi khắp cả nước, khẳng định quyết tâm của toàn dân đứng lên bảo vệ độc lập.'
                    },
                    {
                        type: 'paragraph',
                        text: 'Cuộc chiến đấu ở các đô thị lớn như Hà Nội, Nam Định, Huế, Đà Nẵng đã giam chân địch, bảo toàn lực lượng chủ lực cho cuộc kháng chiến lâu dài. Từ đây, cuộc kháng chiến chống Pháp thực sự bước sang giai đoạn trường kỳ trên phạm vi cả nước.'
                    }
                ]
            }
        ]
    },
    'chien-dich-bien-gioi': {
        image: 'assets/era-stages/stage-4/image4.jpeg',
        significance: 'Chiến dịch Biên giới Thu Đông 1950 phá vỡ thế bao vây, khai thông biên giới, mở đường liên lạc quốc tế và đánh dấu bước chuyển quan trọng của cuộc kháng chiến sang thế chủ động hơn.',
        studySections: createStudySection(
            'Bước ngoặt quân sự của năm 1950',
            'Biên giới 1950 là chiến dịch lớn đầu tiên do quân đội ta chủ động mở trên quy mô chiến lược.',
            [
                'Từ tháng 9 đến tháng 10/1950, quân và dân ta tiến công hệ thống cứ điểm của Pháp trên đường số 4, mở đầu bằng trận Đông Khê rồi liên tiếp đánh các binh đoàn ứng cứu và rút chạy của địch. Kết quả chiến dịch làm sụp đổ hệ thống phòng thủ quan trọng của Pháp ở vùng biên giới.',
                'Thắng lợi của chiến dịch giải phóng một vùng biên giới rộng lớn, mở thông đường liên lạc quốc tế với các nước xã hội chủ nghĩa và đưa cuộc kháng chiến bước sang một giai đoạn mới. Đây là một trong những chiến thắng có ý nghĩa bản lề của toàn bộ cuộc kháng chiến chống Pháp.'
            ]
        )
    },
    'dien-bien-phu': {
        image: 'assets/era-stages/stage-7/image1.jpeg',
        significance: 'Điện Biên Phủ là thắng lợi quân sự quyết định, làm phá sản hoàn toàn nỗ lực quân sự cuối cùng của thực dân Pháp ở Đông Dương.',
        studySections: [
            {
                title: 'Trận quyết chiến chiến lược',
                description: 'Điện Biên Phủ là đỉnh cao quân sự của toàn bộ cuộc kháng chiến 1945-1954.',
                flow: [
                    {
                        type: 'paragraph',
                        text: 'Sau một quá trình chuẩn bị lâu dài cả về hậu phương, quân đội và thế trận chiến tranh nhân dân, quân ta mở chiến dịch Điện Biên Phủ ngày 13/03/1954. Qua ba đợt tiến công kéo dài 55 ngày đêm, tập đoàn cứ điểm mạnh nhất của Pháp ở Đông Dương bị tiêu diệt hoàn toàn.'
                    },
                    {
                        type: 'paragraph',
                        text: 'Chiến thắng này không chỉ có ý nghĩa quân sự mà còn tạo ra bước ngoặt chính trị và ngoại giao rất lớn, buộc thực dân Pháp phải ngồi vào bàn đàm phán trong thế bất lợi. Vì vậy, Điện Biên Phủ được xem như đỉnh cao của cả giai đoạn kháng chiến chống Pháp.'
                    }
                ]
            }
        ]
    },
    'hiep-dinh-geneva': {
        image: 'assets/era-stages/stage-7/image3.jpeg',
        significance: 'Hiệp định Geneva ghi nhận thắng lợi ngoại giao lớn của nhân dân Việt Nam sau khi đã giành ưu thế quyết định trên chiến trường.',
        studySections: createStudySection(
            'Thắng lợi ngoại giao gắn với thắng lợi quân sự',
            'Geneva là kết quả trực tiếp của thế chiến thắng mà Điện Biên Phủ tạo ra.',
            [
                'Từ ngày 08/05/1954, Hội nghị Geneva về Đông Dương bước vào thảo luận trực tiếp vấn đề chấm dứt chiến tranh. Phái đoàn Việt Nam Dân chủ Cộng hòa tham dự với tư thế của một dân tộc chiến thắng và kiên trì bảo vệ các nguyên tắc độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ.',
                'Việc ký Hiệp định Geneva ngày 20/07/1954 đánh dấu thắng lợi lớn về ngoại giao, buộc thực dân Pháp chấm dứt chiến tranh xâm lược ở Đông Dương. Đây là bước nối trực tiếp giữa chiến thắng quân sự với một kết quả chính trị - quốc tế có ý nghĩa rất lớn.'
            ]
        )
    }
};

const chongPhapMomentOverrides = {
    'sai-gon-gianh-chinh-quyen': {
        significance: 'Thắng lợi ở Sài Gòn - Gia Định hoàn tất bước phát triển lớn của Tổng khởi nghĩa ở Nam Bộ, góp phần khẳng định chính quyền đã về tay nhân dân trên phạm vi cả nước.',
        studySections: createStudySection(
            'Khởi nghĩa giành chính quyền ở trung tâm lớn của Nam Bộ',
            'Sài Gòn - Gia Định là một địa bàn đặc biệt quan trọng về chính trị và kinh tế trong cục diện cuối tháng 8/1945.',
            [
                'Ngày 25/08/1945, khởi nghĩa thắng lợi ở Sài Gòn - Gia Định cùng nhiều địa phương Nam Bộ cho thấy khí thế Tổng khởi nghĩa đã lan mạnh tới khu vực trọng yếu nhất ở phía Nam. Đây là bước phát triển rất quan trọng trong việc hoàn tất quá trình giành chính quyền trên cả nước.',
                'Về ý nghĩa lịch sử, thắng lợi ở Sài Gòn - Gia Định góp phần xác nhận rằng Cách mạng Tháng Tám không chỉ thắng lợi ở Hà Nội và Huế mà còn làm thay đổi cục diện chính trị ở những vùng trung tâm lớn của cả ba miền.'
            ]
        )
    },
    'thong-qua-hien-phap-1946': {
        image: 'assets/era-stages/stage-4/image1.jpeg',
        significance: 'Hiến pháp 1946 xác lập nền tảng pháp lý đầu tiên của nước Việt Nam Dân chủ Cộng hòa.',
        studySections: createStudySection(
            'Cơ sở pháp lý của chế độ mới',
            'Việc thông qua Hiến pháp 1946 đánh dấu bước trưởng thành quan trọng của nhà nước Việt Nam mới.',
            [
                'Ngày 09/11/1946, Quốc hội khóa I thông qua bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Đây là cột mốc cho thấy chính quyền cách mạng đã nhanh chóng chuyển từ thắng lợi chính trị sang xây dựng nhà nước trên nền tảng pháp lý rõ ràng.',
                'Hiến pháp 1946 khẳng định chính thể dân chủ cộng hòa, quyền và nghĩa vụ công dân, vai trò của Nghị viện, Chính phủ, cơ quan tư pháp và chính quyền địa phương. Nhờ đó, nhà nước mới có thêm cơ sở chính danh và tổ chức để bước vào cuộc kháng chiến lâu dài.'
            ]
        )
    },
    'khang-chien-1946-related-0': {
        significance: 'Tối hậu thư của Pháp ở Hà Nội là dấu hiệu trực tiếp cho thấy thực dân Pháp quyết dùng vũ lực để áp đặt lại ách thống trị.',
        studySections: createStudySection(
            'Bước leo thang trực tiếp của thực dân Pháp',
            'Tối hậu thư là một hành động vừa quân sự vừa chính trị nhằm đặt Chính phủ Việt Nam trước lựa chọn sống còn.',
            [
                'Ngày 18/12/1946, thực dân Pháp gửi tối hậu thư đòi ta giao quyền kiểm soát an ninh ở Hà Nội. Đây là một yêu sách không thể chấp nhận vì nếu nhượng bộ, chính quyền cách mạng sẽ mất thực quyền ngay tại trung tâm chính trị quan trọng nhất của đất nước.',
                'Sự kiện này cho thấy mọi cố gắng hòa hoãn của Chính phủ Việt Nam đã bị phía Pháp phá bỏ. Nó là tín hiệu cuối cùng đẩy tình hình tới quyết định phát động toàn quốc kháng chiến.'
            ]
        )
    },
    'khang-chien-1946-related-1': {
        significance: 'Cuộc chiến đấu ở Hà Nội mở đầu thực tế cho toàn quốc kháng chiến.',
        studySections: createStudySection(
            'Tiếng súng mở đầu kháng chiến toàn quốc',
            'Hà Nội là nơi nổ súng đầu tiên, gắn với nhiệm vụ giam chân địch để bảo toàn lực lượng lâu dài.',
            [
                'Tối 19/12/1946, quân và dân Hà Nội nổ súng chống Pháp, mở đầu cuộc kháng chiến toàn quốc. Các lực lượng chiến đấu ở Thủ đô đã chiến đấu rất kiên cường trong điều kiện tương quan lực lượng hết sức chênh lệch.',
                'Mục tiêu của cuộc chiến đấu không phải giữ thành phố bằng mọi giá, mà là giam chân địch, tạo điều kiện cho cả nước chuyển sang thế kháng chiến lâu dài. Vì vậy, Hà Nội trở thành biểu tượng mở đầu cho tinh thần toàn quốc kháng chiến.'
            ]
        )
    },
    'khang-chien-1946-related-2': {
        significance: 'Lời kêu gọi Toàn quốc kháng chiến là văn kiện hiệu triệu có sức lay động cả dân tộc trong thời khắc quyết định.',
        studySections: createStudySection(
            'Hiệu triệu của cả dân tộc bước vào chiến tranh giữ nước',
            'Văn kiện này nhanh chóng lan rộng và trở thành lời thề bảo vệ độc lập của nhân dân Việt Nam.',
            [
                'Ngay sau khi cuộc chiến đấu ở Hà Nội bùng nổ, Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được truyền đi. Văn kiện khẳng định rõ quyết tâm của dân tộc Việt Nam: thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.',
                'Sức mạnh của lời kêu gọi không chỉ ở nội dung chính trị mà còn ở khả năng hiệu triệu sâu rộng. Nó biến quyết định kháng chiến của Trung ương thành mệnh lệnh tinh thần chung đối với mọi tầng lớp nhân dân.'
            ]
        )
    },
    'khang-chien-1946-related-3': {
        significance: 'Việc Trung đoàn Thủ đô rút khỏi Liên khu I cho thấy nghệ thuật giam chân địch và bảo toàn lực lượng đã được thực hiện thành công.',
        studySections: createStudySection(
            'Hoàn thành nhiệm vụ chiến lược ở Hà Nội',
            'Cuộc rút lui này không phải là thất bại, mà là kết quả của một nhiệm vụ chiến đấu đã hoàn thành.',
            [
                'Sau gần 60 ngày chiến đấu trong lòng Hà Nội, Trung đoàn Thủ đô rút khỏi Liên khu I ngày 17/02/1947. Cuộc rút lui diễn ra sau khi lực lượng này đã hoàn thành nhiệm vụ giam chân địch, tạo thời gian cho Trung ương và lực lượng chủ lực chuyển vào thế kháng chiến lâu dài.',
                'Sự kiện này là minh chứng rõ ràng cho tư duy chiến lược của ta trong những ngày đầu kháng chiến: không đối đầu theo cách tiêu hao vô ích, mà chiến đấu để kéo dài thời gian, bảo tồn lực lượng và chuẩn bị cho cuộc chiến lâu dài.'
            ]
        )
    },
    'chien-thang-viet-bac-1947': {
        image: 'assets/era-stages/stage-4/image2.jpeg',
        significance: 'Chiến thắng Việt Bắc Thu Đông 1947 phá tan âm mưu tiêu diệt cơ quan đầu não kháng chiến của thực dân Pháp.',
        studySections: createStudySection(
            'Bảo vệ thành công căn cứ địa cách mạng',
            'Việt Bắc là thử thách lớn đầu tiên đối với sức sống của chính quyền và quân đội kháng chiến.',
            [
                'Thu Đông 1947, Pháp huy động lực lượng lớn đánh lên Việt Bắc để tiêu diệt cơ quan đầu não và bộ đội chủ lực của ta. Nếu thành công, chúng hy vọng sẽ nhanh chóng kết thúc chiến tranh theo hướng có lợi cho mình.',
                'Quân và dân ta đã bẻ gãy các gọng kìm tiến công, bảo vệ căn cứ địa Việt Bắc và làm thất bại hoàn toàn âm mưu “đánh nhanh thắng nhanh”. Từ đây, cuộc kháng chiến chống Pháp bước vào giai đoạn có cơ sở vững chắc hơn về chiến lược.'
            ]
        )
    },
    'cac-nuoc-cong-nhan-viet-nam-1950': {
        significance: 'Năm 1950, Việt Nam Dân chủ Cộng hòa phá thế cô lập trên trường quốc tế bằng thắng lợi ngoại giao rất lớn.',
        studySections: createStudySection(
            'Bước đột phá trên mặt trận đối ngoại',
            'Sự công nhận quốc tế tạo thêm cơ sở chính trị và vị thế quốc tế cho cuộc kháng chiến.',
            [
                'Từ đầu năm 1950, bắt đầu với Trung Quốc rồi đến Liên Xô và nhiều nước xã hội chủ nghĩa khác, Việt Nam Dân chủ Cộng hòa lần lượt được công nhận và đặt quan hệ ngoại giao. Điều này đánh dấu sự thay đổi rất lớn trong vị thế quốc tế của nhà nước Việt Nam mới.',
                'Thắng lợi ấy không chỉ có ý nghĩa biểu tượng. Nó giúp phá thế cô lập, mở ra điều kiện thuận lợi hơn cho liên lạc quốc tế, tranh thủ sự ủng hộ từ bên ngoài và củng cố thêm địa vị pháp lý của cuộc kháng chiến trên trường quốc tế.'
            ]
        )
    },
    'tong-dong-vien-1950': {
        image: 'assets/era-stages/stage-4/image3.jpeg',
        significance: 'Lệnh Tổng động viên thể hiện sự huy động cao độ của toàn dân cho nhiệm vụ kháng chiến.',
        studySections: createStudySection(
            'Huy động sức mạnh của toàn dân tộc',
            'Khi cuộc kháng chiến chuyển sang một nhịp độ mới, nhà nước phải tập trung mạnh hơn nguồn lực quốc gia.',
            [
                'Ngày 12/02/1950, Chủ tịch Hồ Chí Minh ký Sắc lệnh Tổng động viên, thực hiện khẩu hiệu “Tất cả cho tiền tuyến, tất cả để chiến thắng”. Đây là quyết định quan trọng để huy động sức người, sức của trên quy mô rộng hơn cho các chiến dịch lớn.',
                'Lệnh Tổng động viên kết hợp với phong trào thi đua ái quốc đã tạo ra khí thế động viên chưa từng có, góp phần trực tiếp chuẩn bị cho bước phát triển mạnh hơn của cuộc kháng chiến về sau.'
            ]
        )
    },
    'chien-dich-bien-gioi-related-0': {
        image: 'assets/era-stages/stage-4/image4.jpeg',
        significance: 'Trận Đông Khê mở màn cho Chiến dịch Biên giới và tạo thế chủ động cho quân ta.',
        studySections: createStudySection(
            'Mở màn chiến dịch bằng đòn đánh then chốt',
            'Đông Khê là mục tiêu mở đầu có ý nghĩa chiến dịch rất quan trọng trên đường số 4.',
            [
                'Ngày 16/09/1950, quân ta nổ súng đánh cứ điểm Đông Khê, mở đầu Chiến dịch Biên giới Thu Đông 1950. Việc lựa chọn Đông Khê làm hướng đột phá đầu tiên cho thấy sự tính toán rất kỹ về vị trí chiến lược của cứ điểm này trên tuyến biên giới.',
                'Trận mở màn thắng lợi đã tạo đà để quân ta tiếp tục đánh các binh đoàn ứng cứu và làm rung chuyển hệ thống phòng thủ của Pháp trên toàn tuyến đường số 4.'
            ]
        )
    },
    'chien-dich-bien-gioi-related-1': {
        significance: 'Việc tiêu diệt Đông Khê làm sụp đổ một mắt xích quan trọng trong hệ thống phòng thủ biên giới của Pháp.',
        studySections: createStudySection(
            'Bẻ gãy mắt xích then chốt của địch',
            'Đông Khê thất thủ làm thay đổi nhanh cục diện chiến dịch.',
            [
                'Sau hai ngày chiến đấu quyết liệt, cứ điểm Đông Khê bị tiêu diệt ngày 18/09/1950. Đây là thắng lợi quan trọng vì Đông Khê giữ vị trí then chốt trên đường số 4 và có vai trò nối liền hệ thống cứ điểm biên giới của Pháp.',
                'Khi Đông Khê thất thủ, Pháp buộc phải điều động các lực lượng khác để ứng cứu và rút lui, từ đó tạo thời cơ để quân ta tiêu diệt tiếp các cánh quân cơ động của địch.'
            ]
        )
    },
    'chien-dich-bien-gioi-related-2': {
        significance: 'Việc Pháp rút khỏi Cao Bằng cho thấy hệ thống phòng ngự của chúng trên biên giới đã bị đẩy vào thế sụp đổ.',
        studySections: createStudySection(
            'Bước tan rã của tuyến phòng thủ biên giới',
            'Sau Đông Khê, đối phương phải tính đến phương án rút chạy khỏi những vị trí không còn giữ được.',
            [
                'Ngày 03/10/1950, Pháp rút khỏi Cao Bằng để tìm cách co cụm lực lượng và giữ các vị trí trọng yếu hơn. Nhưng chính sự rút lui này lại đẩy quân địch vào thế bị động và bộc lộ các cánh quân trên những cung đường dễ bị phục kích.',
                'Đây là mắt xích quan trọng dẫn tới việc các lực lượng ứng cứu và rút chạy của Pháp tiếp tục bị đánh thiệt hại nặng trên đường số 4.'
            ]
        )
    },
    'chien-dich-bien-gioi-related-3': {
        significance: 'Các binh đoàn ứng cứu bị đánh thiệt hại nặng chứng tỏ quân ta đã làm chủ nhịp phát triển của toàn chiến dịch.',
        studySections: createStudySection(
            'Đánh tan ý đồ hợp điểm của địch',
            'Trên đường số 4, quân ta liên tục chặn đánh các cánh quân cơ động của Pháp.',
            [
                'Trong quá trình rút lui và ứng cứu, các binh đoàn của Pháp liên tiếp bị quân ta chặn đánh trên đường số 4. Điều này làm tan rã ý đồ hợp điểm, cứu nguy lẫn nhau của các lực lượng Pháp ở khu vực biên giới.',
                'Chiến thắng này thể hiện rõ trình độ chỉ huy chiến dịch và khả năng đánh vận động của quân đội Việt Nam đã trưởng thành hơn nhiều so với các giai đoạn trước.'
            ]
        )
    },
    'chien-dich-bien-gioi-related-4': {
        significance: 'Chiến dịch Biên giới kết thúc thắng lợi đã mở thông đường liên lạc quốc tế và chuyển cục diện chiến tranh theo hướng có lợi cho ta.',
        studySections: createStudySection(
            'Kết thúc thắng lợi của chiến dịch Biên giới',
            'Thắng lợi cuối chiến dịch đánh dấu một bước ngoặt quân sự của cuộc kháng chiến chống Pháp.',
            [
                'Đến ngày 22/10/1950, Chiến dịch Biên giới kết thúc thắng lợi. Quân ta tiêu diệt và bắt sống một bộ phận lớn sinh lực địch, giải phóng vùng biên giới rộng lớn và khai thông tuyến liên lạc quốc tế.',
                'Từ đây, thế chủ động chiến lược chuyển dần về phía ta. Cuộc kháng chiến chống Pháp bước vào một giai đoạn phát triển mới với điều kiện thuận lợi hơn cả về quân sự lẫn đối ngoại.'
            ]
        )
    },
    'dai-hoi-dang-lan-thu-ii': {
        image: 'assets/era-stages/stage-6/image1.jpeg',
        significance: 'Đại hội II là cột mốc quan trọng về đường lối, tổ chức và vai trò lãnh đạo của Đảng trong kháng chiến.',
        studySections: createStudySection(
            'Bước trưởng thành của lực lượng lãnh đạo kháng chiến',
            'Đại hội II giúp xác định rõ hơn con đường phát triển của cách mạng Việt Nam đầu thập niên 1950.',
            [
                'Tháng 02/1951, Đại hội đại biểu toàn quốc lần thứ II của Đảng họp tại Tuyên Quang, quyết định đưa Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam. Đại hội xác định rõ nhiệm vụ cơ bản của cách mạng và khẳng định đường lối chiến tranh nhân dân.',
                'Đây là bước trưởng thành rất lớn của lực lượng lãnh đạo kháng chiến, góp phần tạo ra nền tảng chính trị, tổ chức và tư tưởng cho giai đoạn đẩy mạnh kháng chiến từ 1951 đến 1953.'
            ]
        )
    },
    'chien-thang-hoa-binh': {
        image: 'assets/era-stages/stage-6/image3.jpeg',
        significance: 'Chiến thắng Hòa Bình phá sản một kế hoạch chiến tranh lớn của địch và mở rộng vùng giải phóng.',
        studySections: createStudySection(
            'Thắng lợi quân sự nổi bật của giai đoạn 1951-1952',
            'Hòa Bình cho thấy cuộc kháng chiến đã phát triển cả về sức tấn công và khả năng tiêu diệt sinh lực địch.',
            [
                'Chiến dịch Hòa Bình kết thúc thắng lợi ngày 23/02/1952, góp phần tiêu diệt nhiều sinh lực địch và giải phóng thêm lãnh thổ. Đây là thắng lợi có ý nghĩa rất lớn trong cục diện Đông Xuân 1951-1952.',
                'Chiến thắng này chứng minh rằng quân và dân ta không chỉ giữ vững căn cứ địa mà còn có thể đánh bại các kế hoạch chiến tranh quy mô lớn của đối phương.'
            ]
        )
    },
    'chien-thang-tay-bac': {
        image: 'assets/era-stages/stage-6/image5.jpeg',
        significance: 'Chiến thắng Tây Bắc năm 1952 vừa mở rộng vùng giải phóng, vừa trực tiếp chuẩn bị địa bàn và điều kiện cho Điện Biên Phủ.',
        studySections: createStudySection(
            'Mở rộng vùng chiến lược Tây Bắc',
            'Chiến dịch Tây Bắc là mắt xích quan trọng nối giữa giai đoạn đẩy mạnh kháng chiến và giai đoạn quyết chiến chiến lược.',
            [
                'Từ tháng 10 đến tháng 12/1952, chiến dịch Tây Bắc toàn thắng, giải phóng một vùng rộng lớn và làm suy yếu hệ thống phòng thủ của Pháp ở khu vực này. Kết quả chiến dịch có ý nghĩa chiến lược rất lớn đối với toàn bộ cuộc kháng chiến.',
                'Thắng lợi Tây Bắc tạo điều kiện thuận lợi về thế trận, địa bàn và kinh nghiệm cho việc chuẩn bị chiến dịch Điện Biên Phủ sau này.'
            ]
        )
    },
    'luat-cai-cach-ruong-dat': {
        image: 'assets/era-stages/stage-6/image5.jpeg',
        significance: 'Luật cải cách ruộng đất tạo thêm cơ sở xã hội, động lực chính trị và hậu phương cho cuộc kháng chiến.',
        studySections: createStudySection(
            'Quyết sách lớn cuối năm 1953',
            'Cải cách ruộng đất gắn liền với nhiệm vụ củng cố hậu phương trong giai đoạn chuẩn bị quyết chiến chiến lược.',
            [
                'Cuối năm 1953, Quốc hội khóa I thông qua Luật cải cách ruộng đất và Chính phủ ban bố luật ngày 19/12/1953. Chính sách này nhằm thực hiện người cày có ruộng, xóa bỏ từng bước quan hệ phong kiến lạc hậu và giải phóng sức sản xuất ở nông thôn.',
                'Trong bối cảnh kháng chiến, cải cách ruộng đất còn có ý nghĩa đặc biệt trong việc tăng cường sự gắn bó của nông dân với chế độ mới và tạo thêm chỗ dựa xã hội vững chắc cho cuộc đấu tranh chống Pháp.'
            ]
        )
    },
    'dien-bien-phu-related-0': {
        image: 'assets/era-stages/stage-7/image1.jpeg',
        significance: 'Trận mở màn ngày 13/03/1954 đánh dấu thời điểm chiến dịch Điện Biên Phủ chính thức bắt đầu.',
        studySections: createStudySection(
            'Mở đầu trận quyết chiến chiến lược',
            'Mũi tiến công đầu tiên vào Him Lam có ý nghĩa mở cửa cho toàn bộ chiến dịch.',
            [
                'Ngày 13/03/1954, quân ta tiến công cứ điểm Him Lam, mở đầu Chiến dịch Điện Biên Phủ. Đây là trận đánh rất quan trọng vì nó kiểm nghiệm thực tế phương án tác chiến mới và tạo đà cho các đợt tiến công tiếp theo.',
                'Thắng lợi ở trận mở màn khẳng định khả năng công phá tập đoàn cứ điểm mạnh của Pháp và nâng cao niềm tin cho toàn bộ chiến dịch.'
            ]
        )
    },
    'dien-bien-phu-related-1': {
        significance: 'Đợt tiến công thứ hai làm suy sụp hệ thống phòng ngự then chốt của địch ở khu trung tâm.',
        studySections: createStudySection(
            'Siết chặt khu trung tâm',
            'Bước vào đợt hai, chiến dịch chuyển sang giai đoạn đánh sâu hơn vào khu trung tâm tập đoàn cứ điểm.',
            [
                'Ngày 30/03/1954, quân ta mở đợt tiến công thứ hai, liên tiếp đánh mạnh vào các cứ điểm quan trọng ở khu trung tâm. Đây là giai đoạn chiến dịch diễn ra rất ác liệt và kéo dài.',
                'Đợt tiến công này làm hệ thống phòng ngự của địch ngày càng suy sụp, thu hẹp dần phạm vi kiểm soát của chúng và tạo tiền đề trực tiếp cho tổng công kích.'
            ]
        )
    },
    'dien-bien-phu-related-2': {
        significance: 'Tổng công kích đợt cuối là bước quyết định để kết thúc hoàn toàn chiến dịch Điện Biên Phủ.',
        studySections: createStudySection(
            'Bước quyết định cuối cùng',
            'Đợt tổng công kích từ đầu tháng 5/1954 đưa chiến dịch tới thắng lợi hoàn toàn.',
            [
                'Ngày 01/05/1954, quân ta bắt đầu đợt tổng công kích cuối cùng, đồng loạt tiến công mạnh hơn vào khu trung tâm Mường Thanh và Hồng Cúm. Địch rơi vào thế hoàn toàn bị bao vây và suy kiệt.',
                'Đây là giai đoạn cho thấy sức mạnh tổng hợp của toàn chiến dịch, khi thế trận, hỏa lực và tinh thần chiến đấu của quân ta đã áp đảo hoàn toàn đối phương.'
            ]
        )
    },
    'dien-bien-phu-related-3': {
        image: 'assets/era-stages/stage-7/image2.jpeg',
        significance: 'Việc bắt sống tướng De Castries đánh dấu sự sụp đổ hoàn toàn của tập đoàn cứ điểm Điện Biên Phủ.',
        studySections: createStudySection(
            'Khoảnh khắc kết thúc chiến dịch',
            'Ngày 07/05/1954 trở thành một trong những mốc son chói lọi nhất của lịch sử Việt Nam hiện đại.',
            [
                'Chiều 07/05/1954, quân ta đánh thẳng vào sở chỉ huy và bắt sống toàn bộ bộ chỉ huy tập đoàn cứ điểm do tướng De Castries cầm đầu. Đây là dấu hiệu rõ nhất của sự sụp đổ hoàn toàn hệ thống phòng ngự Pháp tại Điện Biên Phủ.',
                'Sự kiện này không chỉ kết thúc một chiến dịch lớn mà còn tạo ra một chấn động chính trị - quân sự trên phạm vi quốc tế, buộc Pháp phải bước vào đàm phán trong thế yếu.'
            ]
        )
    },
    'hiep-dinh-geneva-related-0': {
        image: 'assets/era-stages/stage-7/image4.jpeg',
        significance: 'Hội nghị Geneva khai mạc là bước mở đầu của quá trình chuyển thắng lợi trên chiến trường thành thắng lợi ngoại giao.',
        studySections: createStudySection(
            'Mở đầu mặt trận ngoại giao quyết định',
            'Geneva là diễn đàn quốc tế nơi vấn đề Đông Dương được đưa ra giải quyết trực tiếp.',
            [
                'Ngày 26/04/1954, Hội nghị Geneva khai mạc để bàn về việc lập lại hòa bình ở châu Á, trong đó có vấn đề Đông Dương. Đây là sự kiện có ý nghĩa rất lớn vì lần đầu tiên cục diện chiến tranh ở Đông Dương được đưa ra thương lượng trong một khuôn khổ hội nghị quốc tế rộng lớn.',
                'Đối với Việt Nam, hội nghị trở thành mặt trận ngoại giao song hành với chiến trường, nơi thắng lợi quân sự sẽ được chuyển hóa thành kết quả chính trị và pháp lý.'
            ]
        )
    },
    'hiep-dinh-geneva-related-1': {
        significance: 'Việc chính thức bàn về Đông Dương sau Điện Biên Phủ cho thấy chiến thắng trên chiến trường đã tạo ra tác động trực tiếp lên bàn đàm phán.',
        studySections: createStudySection(
            'Đông Dương trở thành trọng tâm thương lượng',
            'Sau Điện Biên Phủ, vấn đề chấm dứt chiến tranh ở Đông Dương được đặt lên bàn đàm phán với vị thế mới cho Việt Nam.',
            [
                'Ngày 08/05/1954, chỉ một ngày sau chiến thắng Điện Biên Phủ, Hội nghị Geneva bắt đầu bàn trực tiếp về Đông Dương. Đây là thời điểm thắng lợi quân sự của Việt Nam phát huy tác động tức thì trên mặt trận ngoại giao.',
                'Từ đây, phái đoàn Việt Nam bước vào thương lượng với tư thế của một dân tộc chiến thắng, kiên trì bảo vệ những nguyên tắc cơ bản về độc lập, chủ quyền và thống nhất.'
            ]
        )
    },
    'giai-phong-thu-do': {
        image: 'assets/era-stages/stage-7/image5.jpeg',
        significance: 'Giải phóng Thủ đô Hà Nội là dấu mốc hoàn chỉnh của thắng lợi 1945-1954 trên địa bàn trung tâm chính trị của miền Bắc.',
        studySections: createStudySection(
            'Thắng lợi được hiện thực hóa tại Thủ đô',
            'Sự kiện ngày 10/10/1954 cho thấy kết quả của chiến thắng quân sự và ngoại giao đã trở thành hiện thực chính trị cụ thể.',
            [
                'Ngày 10/10/1954, Hà Nội được giải phóng và chuyển sang thời kỳ mới trong hòa bình. Đây là sự kiện có ý nghĩa biểu tượng rất lớn, khép lại thắng lợi của chặng kết thúc kháng chiến chống Pháp trên một không gian chính trị đặc biệt quan trọng.',
                'Việc giải phóng Thủ đô đồng thời mở đầu quá trình xây dựng miền Bắc trong hòa bình và biến nơi đây thành hậu phương lớn cho giai đoạn cách mạng tiếp theo.'
            ]
        )
    }
};

historicalData.events
    .filter(eventItem => eventItem.era === 'chong-phap')
    .forEach(eventItem => {
        const eventOverride = chongPhapEventOverrides[eventItem.id];

        if (eventOverride) {
            Object.assign(eventItem, eventOverride);
        }

        if (!Array.isArray(eventItem.relatedMoments)) {
            return;
        }

        eventItem.relatedMoments = eventItem.relatedMoments.map((moment, index) => {
            const stableId = moment.id || `${eventItem.id}-related-${index}`;
            const override = chongPhapMomentOverrides[stableId];

            if (!override) {
                return moment;
            }

            return {
                ...moment,
                ...override,
                id: stableId
            };
        });
    });
