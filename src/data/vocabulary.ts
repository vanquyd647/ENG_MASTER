export interface Word {
    id: string;
    topic: string;
    word: string;
    phonetic: string;
    pos: string;
    meaning: string;
    example: string;
    exampleTranslation: string;
    translations?: {
        vi?: string;
        fr?: string;
        es?: string;
        [key: string]: string | undefined;
    };
}

export const VOCABULARY: Word[] = [
    // ==========================================
    // TOPIC 1: RECRUITMENT (rec-01 → rec-40)
    // ==========================================
    {
        "id": "rec-01",
        "topic": "Recruitment",
        "word": "opening",
        "phonetic": "/ˈəʊ.pən.ɪŋ/",
        "pos": "noun",
        "meaning": "vị trí trống, sự mở cửa, lễ khai trương",
        "example": "A huge crowd turned out for the opening of the new show.",
        "exampleTranslation": "Một đám đông lớn đã đến để khai mạc buổi biểu diễn mới.",
        "translations": {
            "vi": "vị trí trống, sự mở cửa, lễ khai trương",
            "fr": "poste vacant",
            "es": "vacante"
        }
    },
    {
        "id": "rec-02",
        "topic": "Recruitment",
        "word": "applicant",
        "phonetic": "/ˈæp.lɪ.kənt/",
        "pos": "noun",
        "meaning": "ứng viên, người xin việc",
        "example": "Successful applicants will be notified in writing.",
        "exampleTranslation": "Các ứng viên thành công sẽ được thông báo bằng văn bản.",
        "translations": {
            "vi": "ứng viên, người xin việc",
            "fr": "candidat",
            "es": "solicitante"
        }
    },
    {
        "id": "rec-03",
        "topic": "Recruitment",
        "word": "meet",
        "phonetic": "/miːt/",
        "pos": "verb",
        "meaning": "thỏa mãn, đáp ứng yêu cầu/ điều kiện",
        "example": "They will only agree to sign the contract if certain conditions are met.",
        "exampleTranslation": "Họ chỉ sẽ đồng ý ký hợp đồng khi một số điều kiện được đáp ứng.",
        "translations": {
            "vi": "thỏa mãn, đáp ứng yêu cầu/ điều kiện",
            "fr": "rencontrer",
            "es": "reunirse"
        }
    },
    {
        "id": "rec-04",
        "topic": "Recruitment",
        "word": "qualified",
        "phonetic": "/ˈkwɒl.ɪ.faɪd/",
        "pos": "adj",
        "meaning": "đủ khả năng, trình độ, điều kiện",
        "example": "I can't think of anyone better qualified to take over.",
        "exampleTranslation": "Tôi không thể nghĩ về bất kỳ ai có đủ điều kiện tốt hơn để đảm nhận.",
        "translations": {
            "vi": "đủ khả năng, trình độ, điều kiện",
            "fr": "qualifié",
            "es": "cualificado"
        }
    },
    {
        "id": "rec-05",
        "topic": "Recruitment",
        "word": "candidate",
        "phonetic": "/ˈkæn.dɪ.dət/",
        "pos": "noun",
        "meaning": "thí sinh, ứng viên",
        "example": "There are three candidates standing in the election.",
        "exampleTranslation": "Có 3 ứng cử viên đứng trong cuộc bầu cử.",
        "translations": {
            "vi": "thí sinh, ứng viên",
            "fr": "candidat",
            "es": "candidato"
        }
    },
    {
        "id": "rec-06",
        "topic": "Recruitment",
        "word": "confidence",
        "phonetic": "/ˈkɒn.fɪ.dəns/",
        "pos": "noun",
        "meaning": "sự tin tưởng, lòng tin",
        "example": "The changes should improve public confidence in the system.",
        "exampleTranslation": "Những thay đổi sẽ cải thiện lòng tin của công chúng vào hệ thống.",
        "translations": {
            "vi": "sự tin tưởng, lòng tin",
            "fr": "confiance",
            "es": "confianza"
        }
    },
    {
        "id": "rec-07",
        "topic": "Recruitment",
        "word": "highly",
        "phonetic": "/ˈhaɪ.li/",
        "pos": "adv",
        "meaning": "rất, hết sức",
        "example": "It is an able, young and highly motivated workforce.",
        "exampleTranslation": "Đây là một lực lượng lao động có năng lực, trẻ và có động lực rất cao.",
        "translations": {
            "vi": "rất, hết sức",
            "fr": "hautement",
            "es": "altamente"
        }
    },
    {
        "id": "rec-08",
        "topic": "Recruitment",
        "word": "professional",
        "phonetic": "/prəˈfeʃ.ən.əl/",
        "pos": "adj",
        "meaning": "có tính chuyên môn, chuyên nghiệp, lành nghề",
        "example": "He spent his professional career at the University of Pennsylvania.",
        "exampleTranslation": "Ông đã dành sự nghiệp chuyên môn của mình tại Đại học Pennsylvania.",
        "translations": {
            "vi": "có tính chuyên môn, chuyên nghiệp, lành nghề",
            "fr": "professionnel",
            "es": "profesional"
        }
    },
    {
        "id": "rec-09",
        "topic": "Recruitment",
        "word": "hire",
        "phonetic": "/haɪər/",
        "pos": "verb",
        "meaning": "thuê mướn, tuyển dụng",
        "example": "Poor families don't have enough money to hire good lawyers.",
        "exampleTranslation": "Những gia đình nghèo không đủ tiền để thuê luật sư giỏi.",
        "translations": {
            "vi": "thuê mướn, tuyển dụng",
            "fr": "embaucher",
            "es": "contratar"
        }
    },
    {
        "id": "rec-10",
        "topic": "Recruitment",
        "word": "reference",
        "phonetic": "/ˈref.ər.əns/",
        "pos": "noun",
        "meaning": "sự giới thiệu, sự tham khảo",
        "example": "She spoke in very vague terms and there were no direct references to specific situations.",
        "exampleTranslation": "Cô ấy nói những thuật ngữ rất mơ hồ và không có sự đề cập trực tiếp đến các tình huống cụ thể.",
        "translations": {
            "vi": "sự giới thiệu, sự tham khảo",
            "fr": "référence",
            "es": "referencia"
        }
    },
    {
        "id": "rec-11",
        "topic": "Recruitment",
        "word": "position",
        "phonetic": "/pəˈzɪʃ.ən/",
        "pos": "noun",
        "meaning": "chức vụ, vị trí",
        "example": "He applied for the position of marketing manager.",
        "exampleTranslation": "Anh ấy đã ứng tuyển vào vị trí trưởng phòng marketing.",
        "translations": {
            "vi": "chức vụ, vị trí"
        }
    },
    {
        "id": "rec-12",
        "topic": "Recruitment",
        "word": "achievement",
        "phonetic": "/əˈtʃiːv.mənt/",
        "pos": "noun",
        "meaning": "thành tựu, thành tích, sự đạt được",
        "example": "Finishing the marathon in 10th place was an incredible achievement.",
        "exampleTranslation": "Kết thúc cuộc thi marathon ở vị trí thứ 10 là một thành tích đáng kinh ngạc.",
        "translations": {
            "vi": "thành tựu, thành tích, sự đạt được"
        }
    },
    {
        "id": "rec-13",
        "topic": "Recruitment",
        "word": "impressed",
        "phonetic": "/ɪmˈprest/",
        "pos": "verb",
        "meaning": "có ấn tượng, cảm phục",
        "example": "We were impressed by the great richness of detail in her painting.",
        "exampleTranslation": "Chúng tôi bị ấn tượng bởi sự phong phú của các chi tiết trong bức tranh của cô ấy.",
        "translations": {
            "vi": "có ấn tượng, cảm phục"
        }
    },
    {
        "id": "rec-14",
        "topic": "Recruitment",
        "word": "excellent",
        "phonetic": "/ˈek.səl.ənt/",
        "pos": "adj",
        "meaning": "xuất sắc, vượt trội, ưu tú",
        "example": "Her car is in excellent condition.",
        "exampleTranslation": "Xe của cô ấy luôn trong tình trạng tuyệt vời.",
        "translations": {
            "vi": "xuất sắc, vượt trội, ưu tú"
        }
    },
    {
        "id": "rec-15",
        "topic": "Recruitment",
        "word": "eligible",
        "phonetic": "/ˈel.ɪ.dʒə.bəl/",
        "pos": "adj",
        "meaning": "có đủ tư cách, thích hợp",
        "example": "Only people over 18 are eligible to vote.",
        "exampleTranslation": "Chỉ những người trên 18 tuổi mới đủ tư cách bỏ phiếu.",
        "translations": {
            "vi": "có đủ tư cách, thích hợp"
        }
    },
    {
        "id": "rec-16",
        "topic": "Recruitment",
        "word": "identify",
        "phonetic": "/aɪˈden.tɪ.faɪ/",
        "pos": "verb",
        "meaning": "nhận diện, nhận ra",
        "example": "Even the smallest baby can identify its mother by her voice.",
        "exampleTranslation": "Ngay cả em bé nhỏ nhất cũng có thể nhận dạng mẹ của nó bằng giọng nói của mẹ.",
        "translations": {
            "vi": "nhận diện, nhận ra"
        }
    },
    {
        "id": "rec-17",
        "topic": "Recruitment",
        "word": "associate",
        "phonetic": "/əˈsəʊ.si.eɪt/",
        "pos": "verb",
        "meaning": "liên kết, kết giao",
        "example": "Most people associate this brand with good quality.",
        "exampleTranslation": "Hầu hết mọi người liên kết thương hiệu này với chất lượng tốt.",
        "translations": {
            "vi": "liên kết, kết giao"
        }
    },
    {
        "id": "rec-18",
        "topic": "Recruitment",
        "word": "employment",
        "phonetic": "/ɪmˈplɔɪ.mənt/",
        "pos": "noun",
        "meaning": "việc làm",
        "example": "If you are unemployed but you are actively seeking employment, you may qualify for benefits.",
        "exampleTranslation": "Nếu bạn đang thất nghiệp nhưng bạn đang tích cực tìm kiếm việc làm, bạn có thể đủ điều kiện nhận trợ cấp.",
        "translations": {
            "vi": "việc làm"
        }
    },
    {
        "id": "rec-19",
        "topic": "Recruitment",
        "word": "lack",
        "phonetic": "/læk/",
        "pos": "verb",
        "meaning": "thiếu, không có",
        "example": "We are lacking three members of staff due to illness.",
        "exampleTranslation": "Chúng tôi đang thiếu ba nhân viên do bệnh tật.",
        "translations": {
            "vi": "thiếu, không có"
        }
    },
    {
        "id": "rec-20",
        "topic": "Recruitment",
        "word": "managerial",
        "phonetic": "/ˌmæn.əˈdʒɪə.ri.əl/",
        "pos": "adj",
        "meaning": "thuộc về quản lý",
        "example": "She has developed critical technical and managerial skills.",
        "exampleTranslation": "Cô ấy đã phát triển các kỹ năng quản lý và kỹ thuật quan trọng.",
        "translations": {
            "vi": "thuộc về quản lý"
        }
    },
    {
        "id": "rec-21",
        "topic": "Recruitment",
        "word": "familiar",
        "phonetic": "/fəˈmɪl.i.ər/",
        "pos": "adj",
        "meaning": "quen thuộc, thuần thục",
        "example": "There were one or two familiar faces.",
        "exampleTranslation": "Có một hoặc hai khuôn mặt quen thuộc.",
        "translations": {
            "vi": "quen thuộc, thuần thục"
        }
    },
    {
        "id": "rec-22",
        "topic": "Recruitment",
        "word": "prospective",
        "phonetic": "/prəˈspek.tɪv/",
        "pos": "adj",
        "meaning": "có triển vọng, có tương lai",
        "example": "We've had three sets of prospective buyers looking at the house.",
        "exampleTranslation": "Chúng tôi đã có ba nhóm người mua tiềm năng đang xem nhà.",
        "translations": {
            "vi": "có triển vọng, có tương lai"
        }
    },
    {
        "id": "rec-23",
        "topic": "Recruitment",
        "word": "appeal",
        "phonetic": "/əˈpiːl/",
        "pos": "verb",
        "meaning": "kêu gọi, lôi cuốn, hấp dẫn",
        "example": "They're appealing for clothes and blankets to send to the devastated region.",
        "exampleTranslation": "Họ đang kêu gọi quần áo và chăn để gửi đến vùng bị tàn phá.",
        "translations": {
            "vi": "kêu gọi, lôi cuốn, hấp dẫn"
        }
    },
    {
        "id": "rec-24",
        "topic": "Recruitment",
        "word": "specialize",
        "phonetic": "/ˈspeʃ.əl.aɪz/",
        "pos": "verb",
        "meaning": "chuyên làm về, học chuyên về",
        "example": "She hired a lawyer who specializes in divorce cases.",
        "exampleTranslation": "Cô thuê một luật sư chuyên về các vụ ly hôn.",
        "translations": {
            "vi": "chuyên làm về, học chuyên về"
        }
    },
    {
        "id": "rec-25",
        "topic": "Recruitment",
        "word": "apprehensive",
        "phonetic": "/ˌæp.rɪˈhen.sɪv/",
        "pos": "adj",
        "meaning": "lo lắng, e sợ",
        "example": "I've invited a lot of people to the party, but I'm a little apprehensive that no one will come.",
        "exampleTranslation": "Tôi đã mời rất nhiều người đến bữa tiệc, nhưng tôi hơi e ngại rằng sẽ không có ai đến cả.",
        "translations": {
            "vi": "lo lắng, e sợ"
        }
    },
    {
        "id": "rec-26",
        "topic": "Recruitment",
        "word": "consultant",
        "phonetic": "/kənˈsʌl.tənt/",
        "pos": "noun",
        "meaning": "người tư vấn, cố vấn",
        "example": "She is a feng shui consultant.",
        "exampleTranslation": "Cô ấy là một nhà tư vấn phong thủy.",
        "translations": {
            "vi": "người tư vấn, cố vấn"
        }
    },
    {
        "id": "rec-27",
        "topic": "Recruitment",
        "word": "entitle",
        "phonetic": "/ɪnˈtaɪ.təl/",
        "pos": "verb",
        "meaning": "cho quyền làm gì",
        "example": "The employer is entitled to ask for references.",
        "exampleTranslation": "Nhà tuyển dụng có quyền yêu cầu các tài liệu tham khảo.",
        "translations": {
            "vi": "cho quyền làm gì"
        }
    },
    {
        "id": "rec-28",
        "topic": "Recruitment",
        "word": "certification",
        "phonetic": "/ˌsɜː.tɪ.fɪˈkeɪ.ʃən/",
        "pos": "noun",
        "meaning": "sự chứng nhận, giấy chứng nhận",
        "example": "He earned certification to fly single-engine aircraft.",
        "exampleTranslation": "Anh đã đạt được giấy chứng nhận lái máy bay một động cơ.",
        "translations": {
            "vi": "sự chứng nhận, giấy chứng nhận"
        }
    },
    {
        "id": "rec-29",
        "topic": "Recruitment",
        "word": "occupation",
        "phonetic": "/ˌɒk.jəˈpeɪ.ʃən/",
        "pos": "noun",
        "meaning": "nghề nghiệp",
        "example": "He listed his occupation on the form as 'teacher.'",
        "exampleTranslation": "Anh ta liệt kê nghề nghiệp của mình trên biểu mẫu là một giáo viên.",
        "translations": {
            "vi": "nghề nghiệp"
        }
    },
    {
        "id": "rec-30",
        "topic": "Recruitment",
        "word": "wage",
        "phonetic": "/weɪdʒ/",
        "pos": "noun",
        "meaning": "tiền lương, tiền công",
        "example": "There will be an increase in tax for those earning in excess of twice the national average wage.",
        "exampleTranslation": "Sẽ tăng thuế đối với những người có thu nhập cao hơn gấp đôi tiền lương trung bình của cả nước.",
        "translations": {
            "vi": "tiền lương, tiền công"
        }
    },
    {
        "id": "rec-31",
        "topic": "Recruitment",
        "word": "resume",
        "phonetic": "/rɪˈzjuːm/",
        "pos": "noun",
        "meaning": "sơ yếu lý lịch",
        "example": "She sent her resume to 50 companies, but didn't even get an interview.",
        "exampleTranslation": "Cô đã gửi sơ yếu lý lịch của mình đến 50 công ty, nhưng thậm chí không nhận được một cuộc phỏng vấn.",
        "translations": {
            "vi": "sơ yếu lý lịch"
        }
    },
    {
        "id": "rec-32",
        "topic": "Recruitment",
        "word": "requirement",
        "phonetic": "/rɪˈkwaɪə.mənt/",
        "pos": "noun",
        "meaning": "điều kiện cần thiết, yêu cầu",
        "example": "A good degree is a minimum requirement for many jobs.",
        "exampleTranslation": "Bằng cấp tốt là yêu cầu tối thiểu cho nhiều công việc.",
        "translations": {
            "vi": "điều kiện cần thiết, yêu cầu"
        }
    },
    {
        "id": "rec-33",
        "topic": "Recruitment",
        "word": "interview",
        "phonetic": "/ˈɪn.tə.vjuː/",
        "pos": "noun",
        "meaning": "cuộc phỏng vấn",
        "example": "I had an interview for a job with a publisher.",
        "exampleTranslation": "Tôi đã có một cuộc phỏng vấn cho một công việc với một nhà xuất bản.",
        "translations": {
            "vi": "cuộc phỏng vấn"
        }
    },
    {
        "id": "rec-34",
        "topic": "Recruitment",
        "word": "training",
        "phonetic": "/ˈtreɪ.nɪŋ/",
        "pos": "noun",
        "meaning": "sự đào tạo, huấn luyện",
        "example": "No formal qualifications are required for the work - you'll get on-the-job training.",
        "exampleTranslation": "Không yêu cầu bằng cấp chính thức cho công việc - bạn sẽ được đào tạo tại chỗ.",
        "translations": {
            "vi": "sự đào tạo, huấn luyện"
        }
    },
    {
        "id": "rec-35",
        "topic": "Recruitment",
        "word": "condition",
        "phonetic": "/kənˈdɪʃ.ən/",
        "pos": "noun",
        "meaning": "điều kiện",
        "example": "Riis devoted his life to improving conditions in urban slums.",
        "exampleTranslation": "Riis cống hiến cuộc đời của mình để cải thiện điều kiện ở các khu ổ chuột ở đô thị.",
        "translations": {
            "vi": "điều kiện"
        }
    },
    {
        "id": "rec-36",
        "topic": "Recruitment",
        "word": "diligent",
        "phonetic": "/ˈdɪl.ɪ.dʒənt/",
        "pos": "adj",
        "meaning": "siêng năng, cần cù",
        "example": "Their lawyer was extremely diligent in preparing their case.",
        "exampleTranslation": "Luật sư của họ đã cực kỳ siêng năng chuẩn bị vụ án của họ.",
        "translations": {
            "vi": "siêng năng, cần cù"
        }
    },
    {
        "id": "rec-37",
        "topic": "Recruitment",
        "word": "proficiency",
        "phonetic": "/prəˈfɪʃ.ən.si/",
        "pos": "noun",
        "meaning": "sự thông thạo, sự thành thạo",
        "example": "Some providers recommended strategies for students with limited English proficiency.",
        "exampleTranslation": "Một số nhà cung cấp đề xuất các chiến lược cho học sinh có trình độ tiếng Anh hạn chế.",
        "translations": {
            "vi": "sự thông thạo, sự thành thạo"
        }
    },
    {
        "id": "rec-38",
        "topic": "Recruitment",
        "word": "degree",
        "phonetic": "/dɪˈɡriː/",
        "pos": "noun",
        "meaning": "trình độ, bằng cấp",
        "example": "This job demands a high degree of skill.",
        "exampleTranslation": "Công việc này đòi hỏi trình độ kỹ năng cao.",
        "translations": {
            "vi": "trình độ, bằng cấp"
        }
    },
    {
        "id": "rec-39",
        "topic": "Recruitment",
        "word": "payroll",
        "phonetic": "/ˈpeɪ.rəʊl/",
        "pos": "noun",
        "meaning": "bảng lương, tổng quỹ lương",
        "example": "With debts of $4 million and a monthly payroll of $1.2 million, the venture is clearly heading for trouble.",
        "exampleTranslation": "Với khoản nợ 4 triệu đô la và bảng lương hàng tháng là 1,2 triệu đô la, các dự án rõ ràng đang gặp khó khăn.",
        "translations": {
            "vi": "bảng lương, tổng quỹ lương"
        }
    },
    {
        "id": "rec-40",
        "topic": "Recruitment",
        "word": "recruit",
        "phonetic": "/rɪˈkruːt/",
        "pos": "verb",
        "meaning": "tuyển dụng",
        "example": "I recruited three of my friends to help me move.",
        "exampleTranslation": "Tôi đã tuyển dụng ba người bạn của mình để giúp tôi di chuyển.",
        "translations": {
            "vi": "tuyển dụng"
        }
    },

    // ==========================================
    // TOPIC 2: REGULATIONS (reg-01 → reg-05)
    // ==========================================
    {
        "id": "reg-01",
        "topic": "Regulations",
        "word": "attire",
        "phonetic": "/əˈtaɪər/",
        "pos": "noun",
        "meaning": "quần áo, cách ăn mặc",
        "example": "I hardly think jeans are appropriate attire for a wedding.",
        "exampleTranslation": "Tôi hầu như không nghĩ quần jean là trang phục thích hợp cho một đám cưới.",
        "translations": {
            "vi": "quần áo, cách ăn mặc",
            "fr": "tenue",
            "es": "atuendo"
        }
    },
    {
        "id": "reg-02",
        "topic": "Regulations",
        "word": "concern",
        "phonetic": "/kənˈsɜːn/",
        "pos": "noun",
        "meaning": "sự lo lắng, mối quan ngại",
        "example": "Concern for the safety of the two missing teenagers is growing.",
        "exampleTranslation": "Mối lo lắng cho sự an toàn của 2 thanh niên mất tích ngày càng lớn.",
        "translations": {
            "vi": "sự lo lắng, mối quan ngại",
            "fr": "préoccupation",
            "es": "preocupación"
        }
    },
    {
        "id": "reg-03",
        "topic": "Regulations",
        "word": "exception",
        "phonetic": "/ɪkˈsep.ʃən/",
        "pos": "noun",
        "meaning": "ngoại lệ",
        "example": "There are exceptions to every rule.",
        "exampleTranslation": "Có những ngoại lệ cho mọi quy tắc.",
        "translations": {
            "vi": "ngoại lệ",
            "fr": "exception",
            "es": "excepción"
        }
    },
    {
        "id": "reg-04",
        "topic": "Regulations",
        "word": "comply",
        "phonetic": "/kəmˈplaɪ/",
        "pos": "verb",
        "meaning": "tuân thủ, tuân theo",
        "example": "There are serious penalties for failure to comply with the regulations.",
        "exampleTranslation": "Có những hình phạt nghiêm khắc nếu không tuân thủ các quy định.",
        "translations": {
            "vi": "tuân thủ, tuân theo",
            "fr": "se conformer",
            "es": "cumplir"
        }
    },
    {
        "id": "reg-05",
        "topic": "Regulations",
        "word": "regulation",
        "phonetic": "/ˌreɡ.jəˈleɪ.ʃən/",
        "pos": "noun",
        "meaning": "quy định, quy tắc, điều lệ",
        "example": "I have acted strictly in accordance with the regulations at all times.",
        "exampleTranslation": "Tôi luôn luôn hành động theo đúng các quy định.",
        "translations": {
            "vi": "quy định, quy tắc, điều lệ",
            "fr": "règlement",
            "es": "reglamento"
        }
    },

    // ==========================================
    // TOPIC 3: OFFICE WORK (off-01 → off-05)
    // ==========================================
    {
        "id": "off-01",
        "topic": "Office Work",
        "word": "accustomed",
        "phonetic": "/əˈkʌs.təmd/",
        "pos": "adj",
        "meaning": "quen với, thành thói quen",
        "example": "Slowly Jack had become accustomed even to this.",
        "exampleTranslation": "Từ từ Jack đã trở nên quen với điều này.",
        "translations": {
            "vi": "quen với, thành thói quen"
        }
    },
    {
        "id": "off-02",
        "topic": "Office Work",
        "word": "demanding",
        "phonetic": "/dɪˈmɑːn.dɪŋ/",
        "pos": "adj",
        "meaning": "đòi hỏi khắt khe",
        "example": "I'm trying to learn English, and I find it very demanding.",
        "exampleTranslation": "Tôi đang cố gắng để học Tiếng Anh, và tôi thấy nó đòi hỏi rất khắt khe.",
        "translations": {
            "vi": "đòi hỏi khắt khe"
        }
    },
    {
        "id": "off-03",
        "topic": "Office Work",
        "word": "colleague",
        "phonetic": "/ˈkɒl.iːɡ/",
        "pos": "noun",
        "meaning": "đồng nghiệp",
        "example": "We're entertaining some colleagues of Carol's tonight.",
        "exampleTranslation": "Chúng ta sẽ chiêu đãi một số đồng nghiệp của Carol vào tối nay.",
        "translations": {
            "vi": "đồng nghiệp"
        }
    },
    {
        "id": "off-04",
        "topic": "Office Work",
        "word": "division",
        "phonetic": "/dɪˈvɪʒ.ən/",
        "pos": "noun",
        "meaning": "bộ phận, sự phân chia",
        "example": "The electronics division was split off into a freestanding company.",
        "exampleTranslation": "Bộ phận điện tử được tách ra thành một công ty tự do.",
        "translations": {
            "vi": "bộ phận, sự phân chia"
        }
    },
    {
        "id": "off-05",
        "topic": "Office Work",
        "word": "efficiently",
        "phonetic": "/ɪˈfɪʃ.ənt.li/",
        "pos": "adv",
        "meaning": "một cách hiệu quả",
        "example": "She runs the business very efficiently.",
        "exampleTranslation": "Cô ấy điều hành công việc kinh doanh một cách rất hiệu quả.",
        "translations": {
            "vi": "một cách hiệu quả"
        }
    },
    // ==========================================
    // TOPIC 2: REGULATIONS (reg-06 → reg-34)
    // ==========================================
    {
        "id": "reg-06",
        "topic": "Regulations",
        "word": "policy",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUY CHẾ, CHÍNH S ÁCH",
        "example": "THEY BELIEVE THAT EUR OPE NEEDS A COMMON F OR EIGN AND S ECURITY POLICY. T EUR OPE NEEDS A C O",
        "exampleTranslation": "HỌ TIN R ẰNG CHÂU ÂU CẦN MỘT CHÍNH S ÁCH AN NINH V À ĐỐI NGOẠI CHUNG.",
        "translations": {
            "vi": "QUY CHẾ, CHÍNH S ÁCH"
        }
    },
    {
        "id": "reg-07",
        "topic": "Regulations",
        "word": "severely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "NGHIÊM KHẮC, KHẮT KHE",
        "example": "THE LAS T GOVERNMENT S EVERE LY CURTAILED TR ADE UNION RIGHTS.",
        "exampleTranslation": "CHÍNH PHỦ CUỐI CÙNG ĐÃ CẮT GIẢM NGHIÊM KHẮC CÁC QUY ỀN CỦA CÔNG ĐOÀN.",
        "translations": {
            "vi": "NGHIÊM KHẮC, KHẮT KHE"
        }
    },
    {
        "id": "reg-08",
        "topic": "Regulations",
        "word": "refrain",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KIỀM CHẾ, HẠN CHẾ",
        "example": "WE R EF R AINED FR OM T ALKING UNTIL W E KNEW THAT IT WAS S AF E.",
        "exampleTranslation": "CHÚNG T ÔI ĐÃ KIỀM CHẾ NÓI CHUYỆ N CHO ĐẾN KHI CHÚNG T ÔI BIẾ T R ẰNG NÓ ĐÃ AN T OÀN.",
        "translations": {
            "vi": "KIỀM CHẾ, HẠN CHẾ"
        }
    },
    {
        "id": "reg-09",
        "topic": "Regulations",
        "word": "access",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUY ỀN TRUY CẬP, SỰ LUI T ỚI, ĐƯỜNG VÀ O",
        "example": "UNIDENTIﬁED CYBERT ERR ORIS TS GAINED ACCE S S T O E-MAILS AND ﬁNANCIAL DE T AILS O F CUS T OMER S.",
        "exampleTranslation": "NHỮNG K Ẻ KHỦNG BỐ MẠNG KHÔNG X ÁC ĐỊNH ĐÃ CÓ QUY ỀN TRUY CẬP V ÀO E-MAIL V À THÔNG TIN CHI TIẾ T T ÀI CHÍNH",
        "translations": {
            "vi": "QUY ỀN TRUY CẬP, SỰ LUI T ỚI, ĐƯỜNG VÀ O"
        }
    },
    {
        "id": "reg-10",
        "topic": "Regulations",
        "word": "thoroughly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "MỘT CÁCH KỸ LƯỠNG",
        "example": "I THOR OUGHLY YE D THE PERF ORMANC",
        "exampleTranslation": "T ÔI HOÀN TOÀN THÍCH MÀN TRÌNH DIỄN. TÔI HOÀN T OÀ",
        "translations": {
            "vi": "MỘT CÁCH KỸ LƯỠNG"
        }
    },
    {
        "id": "reg-11",
        "topic": "Regulations",
        "word": "revise",
        "phonetic": "",
        "pos": "verb",
        "meaning": "SỬA ĐỔI, THAY ĐỔI (Ý KIẾN, K Ế HOẠCH)",
        "example": "W AS BLOCK ED LAS T NIGHT IN THE SENAT E. WA",
        "exampleTranslation": "LUẬT SỬA ĐỔI LUẬT V Ề CÁC VỤ KIỆN CỦA CÔNG TY ĐÃ BỊ CHẶN V ÀO T ỐI QUA T ẠI THƯỢNG VIỆN.",
        "translations": {
            "vi": "SỬA ĐỔI, THAY ĐỔI (Ý KIẾN, K Ế HOẠCH)"
        }
    },
    {
        "id": "reg-12",
        "topic": "Regulations",
        "word": "approval",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CHẤP THUẬN, SỰ PHÊ DUY ỆT",
        "example": "THE NEW REFORMS HAVE NOT MET WITH CONSIDERABLE PUBLIC APPROVAL.",
        "exampleTranslation": "CÁC CẢI CÁCH MỚI ĐÃ KHÔNG NHẬN ĐƯỢC SỰ CHẤP THUẬN ĐÁNG KỂ CỦA CÔNG CHÚNG.",
        "translations": {
            "vi": "SỰ CHẤP THUẬN, SỰ PHÊ DUY ỆT"
        }
    },
    {
        "id": "reg-13",
        "topic": "Regulations",
        "word": "form",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KIỂU, LOẠI, HÌNH THỨC",
        "example": "HAVE YOU COMPLE TED Y OUR APPLICATION FORM Y ETfi",
        "exampleTranslation": "BẠN ĐÃ HOÀN THÀNH HÌNH THỨC ĐĂNG KÍ CỦA MÌNH CHƯAfi",
        "translations": {
            "vi": "KIỂU, LOẠI, HÌNH THỨC"
        }
    },
    {
        "id": "reg-14",
        "topic": "Regulations",
        "word": "immediately",
        "phonetic": "",
        "pos": "adv",
        "meaning": "NGAY LẬP TỨC",
        "example": "WE R EALLY OUGHT T O LEAV E IMMEDIAT ELY.",
        "exampleTranslation": "CHÚNG T A THỰC SỰ NÊN R ỜI ĐI NGAY LẬP TỨC.",
        "translations": {
            "vi": "NGAY LẬP TỨC"
        }
    },
    {
        "id": "reg-15",
        "topic": "Regulations",
        "word": "procedure",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THỦ TỤC",
        "example": "YOU MUS T F OLLO W CORR ECT PR OCEDUR E AT ALL TIME S.",
        "exampleTranslation": "BẠN PHẢI LÀM THEO ĐÚNG THỦ TỤC MỌI LÚC.",
        "translations": {
            "vi": "THỦ TỤC"
        }
    },
    {
        "id": "reg-16",
        "topic": "Regulations",
        "word": "negative",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TIÊU CỰC, BI QUAN",
        "example": "HE ALW AYS LOOK S F OR THE NEGATIV E S IN ANY SITUATION.",
        "exampleTranslation": "ANH ẤY LUÔN TÌM KIẾM NHỮNG TIÊU CỰC TRONG BẤT KÌ TÌNH HUỐNG",
        "translations": {
            "vi": "TIÊU CỰC, BI QUAN"
        }
    },
    {
        "id": "reg-17",
        "topic": "Regulations",
        "word": "mandate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "R A LỆNH, UỶ QUY ỀN, UỶ THÁC",
        "example": "THE UN RUSH T O MANDAT E W AR, TO TALLY RULED OUT ANY ALT ERNATIVES.",
        "exampleTranslation": "LIÊN HỢP QUỐC V ỘI V ÀNG ĐỂ ỦY THÁC CHIẾN TR ANH, HOÀN T OÀN LOẠI TRỪ BẤT KỲ SỰ LỰA CHỌN THAY THẾ NÀO.",
        "translations": {
            "vi": "R A LỆNH, UỶ QUY ỀN, UỶ THÁC"
        }
    },
    {
        "id": "reg-18",
        "topic": "Regulations",
        "word": "standard",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TIÊU CHUẨN, CHUẨN, TRÌNH ĐỘ",
        "example": "WE HAVE VERY HIGH SAFETY STANDARDS IN THIS LABORATORY.",
        "exampleTranslation": "CHÚNG TÔI CÓ CÁC TIÊU CHUẨN AN TOÀN RẤT CAO TRONG PHÒNG THÍ NGHIỆM NÀY.",
        "translations": {
            "vi": "TIÊU CHUẨN, CHUẨN, TRÌNH ĐỘ"
        }
    },
    {
        "id": "reg-19",
        "topic": "Regulations",
        "word": "constant",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LIÊN TỤC, KHÔNG NGỚT, KHÔNG ĐỨT",
        "example": "THE CONSTANT NOISE DROVE ME CRAZY.",
        "exampleTranslation": "TIẾNG ỒN LIÊN TỤC KHIẾN TÔI PHÁT ĐIÊN.",
        "translations": {
            "vi": "LIÊN TỤC, KHÔNG NGỚT, KHÔNG ĐỨT"
        }
    },
    {
        "id": "reg-20",
        "topic": "Regulations",
        "word": "obligation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGHĨA VỤ, TRÁCH NHIỆM",
        "example": "THE GOVERNMENT HAS AN OBLIGATION TO ASSIST RELIEF EﬀORTS.",
        "exampleTranslation": "CHÍNH PHỦ CÓ NGHĨA VỤ HỖ TRỢ CÁC NỖ LỰC CỨU TRỢ.",
        "translations": {
            "vi": "NGHĨA VỤ, TRÁCH NHIỆM"
        }
    },
    {
        "id": "reg-21",
        "topic": "Regulations",
        "word": "authorize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "UỶ QUY ỀN, CHO PHÉP",
        "example": "I AUTHORIZED MY BANK TO PAY HER £3, 000.",
        "exampleTranslation": "TÔI ĐÃ ỦY QUYỀN CHO NGÂN HÀNG CỦA MÌNH ĐỂ TRẢ CHO CÔ ẤY 3. 000 BẢNG ANH.",
        "translations": {
            "vi": "UỶ QUY ỀN, CHO PHÉP"
        }
    },
    {
        "id": "reg-22",
        "topic": "Regulations",
        "word": "habit",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THÓI QUEN, T ẬP QUÁN",
        "example": "Old habits are hard to change.",
        "exampleTranslation": "Những thói quen cũ rất khó thay đổi.",
        "translations": {
            "vi": "THÓI QUEN, T ẬP QUÁN"
        }
    },
    {
        "id": "reg-23",
        "topic": "Regulations",
        "word": "restrict",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIỚI HẠN, HẠN CHẾ",
        "example": "THE GOVERNMENT HAS R ESTRICT ED FR EEDOM O F MOVEMENT INTO AND OUT O F THE COUNTR Y.",
        "exampleTranslation": "CHÍNH PHỦ ĐÃ HẠN CHẾ QUY ỀN TỰ DO ĐI LẠI TRONG V À NGOÀI NƯỚC.",
        "translations": {
            "vi": "GIỚI HẠN, HẠN CHẾ"
        }
    },
    {
        "id": "reg-24",
        "topic": "Regulations",
        "word": "code",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUY ĐỊNH",
        "example": "EACH S TA TE I EACH STATE IN THE A DIﬀERENT CRIMINAL AND CIVIL CODE. HAS A DIﬀ ER ENT",
        "exampleTranslation": "MỖI BANG Ở MỸ CÓ MỘT BỘ LUẬT HÌNH SỰ VÀ DÂN SỰ KHÁC NHAU. V À DÂN SỰ KHÁC N",
        "translations": {
            "vi": "QUY ĐỊNH"
        }
    },
    {
        "id": "reg-25",
        "topic": "Regulations",
        "word": "adhere",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BÁM S ÁT, TUÂN THỦ",
        "example": "W HAT EVER THE PURPOS E O F THE MEE TING, IT SHOULD BE S TA TED AT THE OUT SET AND ADHER ED T O.",
        "exampleTranslation": "DÙ MỤC ĐÍCH CỦA CUỘC HỌP LÀ GÌ, NÓ NÊN ĐƯỢC NÊU R A NGAY TỪ ĐẦU V À TUÂN THỦ.",
        "translations": {
            "vi": "BÁM S ÁT, TUÂN THỦ"
        }
    },
    {
        "id": "reg-26",
        "topic": "Regulations",
        "word": "permission",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CHO PHÉP",
        "example": "THEY DID THE W ORK WITHOUT PERMIS SION",
        "exampleTranslation": "HỌ ĐÃ LÀM CÔNG VIỆC MÀ KHÔNG CÓ SỰ CHO PHÉP.",
        "translations": {
            "vi": "SỰ CHO PHÉP"
        }
    },
    {
        "id": "reg-27",
        "topic": "Regulations",
        "word": "approach",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CÁCH TIẾP CẬN, PHƯƠNG PHÁP XỬ LÝ",
        "example": "MICHAEL IS ALWAYS VERY LOGICAL IN HIS APPROACH.",
        "exampleTranslation": "MICHAEL LUÔN R ẤT LOGIC TRONG CÁCH TIẾP CẬN CỦA ANH ẤY",
        "translations": {
            "vi": "CÁCH TIẾP CẬN, PHƯƠNG PHÁP XỬ LÝ"
        }
    },
    {
        "id": "reg-28",
        "topic": "Regulations",
        "word": "inspection",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ KIỂM TR A, SỰ THANH TR A",
        "example": "BUT ON CLOS ER INSPECTION, IT APPEARED T O BE GENUINE.",
        "exampleTranslation": "LÚC ĐẦU CÔ ẤY NGHI R ẰNG BỨC THƯ LÀ GIẢ MẠO, NHƯNG KHI CÓ SỰ KIỂM TR A KỸ HƠN, NÓ CÓ V Ẻ LÀ THẬT.",
        "translations": {
            "vi": "SỰ KIỂM TR A, SỰ THANH TR A"
        }
    },
    {
        "id": "reg-29",
        "topic": "Regulations",
        "word": "arrangement",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ S ẮP ĐẶT, SỰ S ẮP X ẾP,",
        "example": "SHE HAD AN ARRANGEMENT TO WORK AT HOME TWO DAYS A WEEK.",
        "exampleTranslation": "CÔ ẤY ĐÃ CÓ SỰ SẮP XẾP ĐỂ LÀM VIỆC Ở NHÀ HAI NGÀY MỘT TUẦN.",
        "translations": {
            "vi": "SỰ S ẮP ĐẶT, SỰ S ẮP X ẾP,"
        }
    },
    {
        "id": "reg-30",
        "topic": "Regulations",
        "word": "enable",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM CHO CÓ THỂ, CHO PHÉP",
        "example": "COMPUT ERIZ ATION SHOULD ENABLE O CUT PRODUCTION COSTS BY HALF.",
        "exampleTranslation": "TIN HỌC HÓA NÊN CHO PHÉP CHÚNG TÔ I CẮT GIẢM MỘT NỬA CHI PHÍ S ẢN XUẤT.",
        "translations": {
            "vi": "LÀM CHO CÓ THỂ, CHO PHÉP"
        }
    },
    {
        "id": "reg-31",
        "topic": "Regulations",
        "word": "act",
        "phonetic": "",
        "pos": "noun",
        "meaning": "VIỆC, HÀNH ĐỘNG; ĐẠO LUẬT",
        "example": "THE LAW SPECIﬁCALLY FO RBIDS ACT S O F THIS KIND.",
        "exampleTranslation": "LUẬT ĐẶC BIỆ T NGHIÊM CẤM NHỮNG HÀNH VI LOẠI NÀY.",
        "translations": {
            "vi": "VIỆC, HÀNH ĐỘNG; ĐẠO LUẬT"
        }
    },
    {
        "id": "reg-32",
        "topic": "Regulations",
        "word": "compensation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐỀN BÙ, SỰ BỒI THƯỜN G",
        "example": "GOING TO COURT TO OBTAIN COMPENSATION IS A LONG PROCESS.",
        "exampleTranslation": "RA TÒA ĐỂ ĐƯỢC BỒI THƯỜNG LÀ MỘT QUÁ TRÌNH LÂU DÀI.",
        "translations": {
            "vi": "SỰ ĐỀN BÙ, SỰ BỒI THƯỜN G"
        }
    },
    {
        "id": "reg-33",
        "topic": "Regulations",
        "word": "ban",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỆNH CẤM, SỰ CẤM ĐOÁN",
        "example": "THER E SHOULD BE A BAN ON T ALKING LOUDLY IN CINEMAS.",
        "exampleTranslation": "CẦN CÓ MỘT LỆNH CẤM NÓI CHUY ỆN ỒN ÀO TRONG R ẠP CHIẾU PHIM.",
        "translations": {
            "vi": "LỆNH CẤM, SỰ CẤM ĐOÁN"
        }
    },
    {
        "id": "reg-34",
        "topic": "Regulations",
        "word": "abolish",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THỦ TIÊU, BÃI BỎ, HUỶ BỎ",
        "example": "THE NEW T EACHER HAD F AILED T O ENF OR CE ANY SO RT O F DIS CIPLINE.",
        "exampleTranslation": "GIÁO VIÊN MỚI ĐÃ KHÔNG THI HÀNH BẤT KỲ HÌNH THỨC KỶ LUẬT NÀO.",
        "translations": {
            "vi": "THỦ TIÊU, BÃI BỎ, HUỶ BỎ"
        }
    },
    // ==========================================
    // TOPIC 3: OFFICE WORK (off-06 → off-96)
    // ==========================================
    {
        "id": "off-06",
        "topic": "Office Work",
        "word": "request",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỜI Y ÊU CẦU, THỈNH CẦU",
        "example": "THE Y R ECEIV ED HUNDR EDS O F R EQUEST S F OR MOR E INF ORMATION.",
        "exampleTranslation": "HỌ ĐÃ NHẬN ĐƯỢC HÀNG TR ĂM LỜI Y ÊU CẦU ĐỂ BIẾ T THÊM THÔNG TIN.",
        "translations": {
            "vi": "LỜI Y ÊU CẦU, THỈNH CẦU"
        }
    },
    {
        "id": "off-07",
        "topic": "Office Work",
        "word": "submit",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỆ TRÌNH, NỘP",
        "example": "YOU MUST SUBMIT YOUR APPLICATION BE FO RE 1 JANUARY.",
        "exampleTranslation": "BẠN PHẢI NỘP ĐƠN ĐĂNG KÍ CỦA MÌNH TRƯỚC NGÀY 1 THÁNG 1",
        "translations": {
            "vi": "ĐỆ TRÌNH, NỘP"
        }
    },
    {
        "id": "off-08",
        "topic": "Office Work",
        "word": "directly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TRỰC TIẾP, THẲNG, NGAY",
        "example": "THE SUN SHONE DIR ECTLY IN MY EYES.",
        "exampleTranslation": "MẶT TRỜI CHIẾU TRỰC TIẾP V ÀO MẮT T ÔI.",
        "translations": {
            "vi": "TRỰC TIẾP, THẲNG, NGAY"
        }
    },
    {
        "id": "off-09",
        "topic": "Office Work",
        "word": "remind",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NHẮC NHỞ",
        "example": "DO R EMIND ME BECAUSE I'M LIKELY TO FORGET.",
        "exampleTranslation": "HÃY NHẮC NHỞ TÔI BỞI VÌ TÔI CÓ KHẢ NĂNG QUÊN.",
        "translations": {
            "vi": "NHẮC NHỞ"
        }
    },
    {
        "id": "off-10",
        "topic": "Office Work",
        "word": "instruct",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HƯỚNG DẪN, CHỈ THỊ, DẠY",
        "example": "HE W AS INS TRUCT ED T O R EPORT BACK T O HEADQUAR TE RS.",
        "exampleTranslation": "ANH T A ĐƯỢC HƯỚNG DẪN ĐỂ BÁO CÁO TR Ở LẠI BỘ CHỈ HUY.",
        "translations": {
            "vi": "HƯỚNG DẪN, CHỈ THỊ, DẠY"
        }
    },
    {
        "id": "off-11",
        "topic": "Office Work",
        "word": "sample",
        "phonetic": "",
        "pos": "noun",
        "meaning": "V ẬT MẪU, MẪU THỬ",
        "example": "CONTAMINATION BY CHEMICALS.",
        "exampleTranslation": "CÁC MẪU NƯỚC LẤY TỪ SUỐI ĐƯỢC PHÂN TÍCH Ô NHIỄM DO HÓA CHẤT.",
        "translations": {
            "vi": "V ẬT MẪU, MẪU THỬ"
        }
    },
    {
        "id": "off-12",
        "topic": "Office Work",
        "word": "notify",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THÔNG BÁO, CHO BIẾ T",
        "example": "THE S CHOOL IS R EQUIR ED T O NOTIF Y PARENTS IF THEIR CHILDR EN F AIL T O COMET O S CHOOL.",
        "exampleTranslation": "NHÀ TRƯỜNG PHẢI THÔNG BÁO CHO PHỤ HUYNH NẾU CON EM HỌ KHÔNG ĐẾN TRƯỜNG.",
        "translations": {
            "vi": "THÔNG BÁO, CHO BIẾ T"
        }
    },
    {
        "id": "off-13",
        "topic": "Office Work",
        "word": "perform",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THI HÀNH, THỰC HIỆN, HOẠT ĐỘNG",
        "example": "THE CAR PERF ORMED POORLY DURING THE T ESTS.",
        "exampleTranslation": "CHIẾC X E HOẠT ĐỘNG K ÉM TRONG CÁC BÀI KIỂM TR A.",
        "translations": {
            "vi": "THI HÀNH, THỰC HIỆN, HOẠT ĐỘNG"
        }
    },
    {
        "id": "off-14",
        "topic": "Office Work",
        "word": "assignment",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CÔNG VIỆC, NHIỆM VỤ, BÀI T ẬP",
        "example": "I HAVE A LOT O F R EADING ASS IGNMENTS T O COMPLE TE.",
        "exampleTranslation": "T ÔI CÓ R ẤT NHIỀU BÀI T ẬP ĐỌC ĐỂ HOÀN THÀNH.",
        "translations": {
            "vi": "CÔNG VIỆC, NHIỆM VỤ, BÀI T ẬP"
        }
    },
    {
        "id": "off-15",
        "topic": "Office Work",
        "word": "entire",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TR ỌN V ẸN, HOÀN TO ÀN",
        "example": "HE'D SPENT THE ENTIR E JOURNEY ASLEEP.",
        "exampleTranslation": "ANH ẤY DÀNH HOÀN T OÀN CHUY ẾN ĐI ĐỂ NGỦ. EXTENSION SỰ MỞ R ỘNG, MÁY LẺ (ĐIỆN THOẠI)",
        "translations": {
            "vi": "TR ỌN V ẸN, HOÀN TO ÀN"
        }
    },
    {
        "id": "off-16",
        "topic": "Office Work",
        "word": "attendance",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THAM GIA, SỰ CÓ MẶ T",
        "example": "AT LAS T MONTH'S MEE TING, ATTE NDANCE W AS POOR.",
        "exampleTranslation": "V ÀO CUỘC HỌP THÁNG TRƯỚC, S Ố NGƯỜI THAM DỰ R ẤT K ÉM.",
        "translations": {
            "vi": "SỰ THAM GIA, SỰ CÓ MẶ T"
        }
    },
    {
        "id": "off-17",
        "topic": "Office Work",
        "word": "absolutely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "HOÀN T OÀN, CHẮC CHẮN,",
        "example": "I BELIEVED HIM ABS OLUT ELY.",
        "exampleTranslation": "T ÔI ĐÃ HOÀN T OÀN TIN TƯỞNG V ÀO ANH ẤY. DELEGATE V UỶ QUY ỀN, UỶ THÁC, GIAO PHÓ",
        "translations": {
            "vi": "HOÀN T OÀN, CHẮC CHẮN,"
        }
    },
    {
        "id": "off-18",
        "topic": "Office Work",
        "word": "attentively",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CHĂM CHÚ, THẬN TR ỌNG",
        "example": "THE CHILDR EN S AT LIS TENING ATTE NTIV ELY T O THE S TO RY.",
        "exampleTranslation": "CÁC EM NHỎ NGỒI CHĂM CHÚ LẮNG NGHE CÂU CHUY ỆN.",
        "translations": {
            "vi": "CHĂM CHÚ, THẬN TR ỌNG"
        }
    },
    {
        "id": "off-19",
        "topic": "Office Work",
        "word": "supervision",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ GIÁM S ÁT",
        "example": "STUDENT S ARE NOT ALL OWED T O HANDLE THES E CHEMICALS UNLE SS THE Y ARE UNDER THE SUPERVISION O F A T EACHER.",
        "exampleTranslation": "HỌC SINH KHÔNG ĐƯỢC PHÉP SỬ DỤNG CÁC HÓA CHẤT NÀY TRỪ KHI CHÚNG CÓ SỰ GIÁM S ÁT CỦA GIÁO VIÊN.",
        "translations": {
            "vi": "SỰ GIÁM S ÁT"
        }
    },
    {
        "id": "off-20",
        "topic": "Office Work",
        "word": "revision",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ SỬA LẠI, DUY Ệ T LẠI",
        "example": "THE SE PR OPOS ALS WILL NEED A LOT O F R EV ISION.",
        "exampleTranslation": "NHỮNG ĐỀ XUẤT NÀY S Ẽ CẦN SỬA ĐỔI RẤ T NHIỀU.",
        "translations": {
            "vi": "SỰ SỬA LẠI, DUY Ệ T LẠI"
        }
    },
    {
        "id": "off-21",
        "topic": "Office Work",
        "word": "reluctanly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "MIỄN CƯỠNG, BẤT ĐẮC DĨ",
        "example": "SHE HAS R ELUCT ANTLY AGREED T O R ES IGN.",
        "exampleTranslation": "CÔ ẤY ĐÃ MIỄN CƯỠNG ĐỒNG Ý TỪ CHỨ C AC QUAINT LÀM CHO AI QUEN V ỚI",
        "translations": {
            "vi": "MIỄN CƯỠNG, BẤT ĐẮC DĨ"
        }
    },
    {
        "id": "off-22",
        "topic": "Office Work",
        "word": "convey",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TRUY ỀN ĐẠT, V ẬN CHUYỂ N",
        "example": "W HAT THE BOOK DOE S CON VEY VERY SUCC ESSFULLY IS THE HORR OR O F W AR.",
        "exampleTranslation": "ĐIỀU MÀ CUỐN S ÁCH TRUY ỀN T ẢI R ẤT THÀNH CÔNG LÀ NỖI KINH HOÀNG CỦA CHIẾN TR ANH.",
        "translations": {
            "vi": "TRUY ỀN ĐẠT, V ẬN CHUYỂ N"
        }
    },
    {
        "id": "off-23",
        "topic": "Office Work",
        "word": "check",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KIỂM TR A, XEM X É T, X ÁC NHẬN",
        "example": "AF T ER I' D ﬁNISHED THE E XA M, I CHECK ED MY ANS WE RS F OR MIS TA KE S.",
        "exampleTranslation": "SAU KHI LÀM X ONG BÀI KIỂM TR A, T ÔI ĐÃ KIỂM TR A LẠI CÁC CÂU TR Ả LỜI CỦA MÌNH ĐỂ TÌM LỖI.",
        "translations": {
            "vi": "KIỂM TR A, XEM X É T, X ÁC NHẬN"
        }
    },
    {
        "id": "off-24",
        "topic": "Office Work",
        "word": "oversee",
        "phonetic": "",
        "pos": "verb",
        "meaning": "QUAN S ÁT, GIÁM S ÁT",
        "example": "WE 'V E JUS T APPOINT ED A COOR DINAT OR WHO WILL OVE RS EE THE WHOLE PRO JECT.",
        "exampleTranslation": "CHÚNG T ÔI VỪA CHỈ ĐỊNH MỘT ĐIỀU PHỐI VIÊN SẼ GIÁM S ÁT TOÀN BỘ DỰ ÁN.",
        "translations": {
            "vi": "QUAN S ÁT, GIÁM S ÁT"
        }
    },
    {
        "id": "off-25",
        "topic": "Office Work",
        "word": "concentrate",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TẬP TRUNG, CHÚ T ÂM",
        "example": "I CAN 'T CONCENTR ATE ON MY W ORK WITH ALL THAT NOIS E.",
        "exampleTranslation": "TÔI KHÔNG THỂ T ẬP TRUNG V ÀO CÔNG VIỆC CỦA MÌNH V ỚI T ẤT CẢ NHỮNG TIẾNG ỒN ĐÓ.",
        "translations": {
            "vi": "TẬP TRUNG, CHÚ T ÂM"
        }
    },
    {
        "id": "off-26",
        "topic": "Office Work",
        "word": "corporation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CÔNG TY, TẬP ĐOÀN",
        "example": "I HATED WORKING FOR A LARGE CORPORATION.",
        "exampleTranslation": "TÔI GHÉT LÀM VIỆC CHO MỘT TẬP ĐOÀN LỚN.",
        "translations": {
            "vi": "CÔNG TY, TẬP ĐOÀN"
        }
    },
    {
        "id": "off-27",
        "topic": "Office Work",
        "word": "manage",
        "phonetic": "",
        "pos": "verb",
        "meaning": "QUẢN LÝ, X OAY S Ở, GIẢI QUY Ế T ĐƯỢC",
        "example": "I CAN 'T MANAGE ALL THIS W ORK ON MY O WN.",
        "exampleTranslation": "TÔI KHÔNG THỂ TỰ MÌNH QUẢN LÝ T ẤT CẢ CÔNG VIỆC NÀY.",
        "translations": {
            "vi": "QUẢN LÝ, X OAY S Ở, GIẢI QUY Ế T ĐƯỢC"
        }
    },
    {
        "id": "off-28",
        "topic": "Office Work",
        "word": "monitor",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIÁM S ÁT, THEO DÕI",
        "example": "THE NUR SE IS MONITO RING HIS HEART R ATE AND R E SPIR ATION.",
        "exampleTranslation": "Y TÁ ĐANG THEO DÕI NHỊP TIM V À HÔ HẤP CỦA ANH T A.",
        "translations": {
            "vi": "GIÁM S ÁT, THEO DÕI"
        }
    },
    {
        "id": "off-29",
        "topic": "Office Work",
        "word": "deserve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐÁNG, XỨNG ĐÁNG",
        "example": "AFTER ALL THAT HARD WORK, YOU DESERVE A HOLIDAY.",
        "exampleTranslation": "SAU TẤT CẢ CÔNG VIỆC KHÓ KHĂN ĐÓ, BẠN XỨNG ĐÁNG CÓ MỘT KỲ NGHỈ.",
        "translations": {
            "vi": "ĐÁNG, XỨNG ĐÁNG"
        }
    },
    {
        "id": "off-30",
        "topic": "Office Work",
        "word": "release",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÁT HÀNH, PHÓNG THÍCH, LÀM NHẸ BỚT",
        "example": "HIGHLY T O XIC DIO XINS WERE R ELEAS ED INT O THE AIR.",
        "exampleTranslation": "ĐIÔ XIN CÓ ĐỘC TÍNH CAO ĐÃ ĐƯỢC PHÁT T ÁN V ÀO KHÔNG KHÍ.",
        "translations": {
            "vi": "PHÁT HÀNH, PHÓNG THÍCH, LÀM NHẸ BỚT"
        }
    },
    {
        "id": "off-31",
        "topic": "Office Work",
        "word": "electronically",
        "phonetic": "",
        "pos": "adv",
        "meaning": "BẰNG ĐIỆN TỬ",
        "example": "EIGHTY PERCENT OF TOLLS ARE PAID ELECTRONICALLY.",
        "exampleTranslation": "80% PHÍ CẦU ĐƯỜNG ĐƯỢC THANH TOÁN ĐIỆN TỬ.",
        "translations": {
            "vi": "BẰNG ĐIỆN TỬ"
        }
    },
    {
        "id": "off-32",
        "topic": "Office Work",
        "word": "workshop",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HỘI THẢO, BUỔI ĐÀO T ẠO",
        "example": "A S ERIE S O F W ORK SHOPS F OR R EST AUR ANT MANAGER S W AS SET UP.",
        "exampleTranslation": "HÀNG LOẠT HỘI THẢO DÀNH CHO QUẢN LÝ NHÀ HÀNG ĐƯỢC THIẾ T LẬP.",
        "translations": {
            "vi": "HỘI THẢO, BUỔI ĐÀO T ẠO"
        }
    },
    {
        "id": "off-33",
        "topic": "Office Work",
        "word": "headquaters",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TRỤ S Ở CHÍNH",
        "example": "THE COMPANY' S HEADQUAR TE R S IS IN AMS TE R DAM.",
        "exampleTranslation": "TRỤ S Ở CHÍNH CỦA CÔNG TY ĐỀU Ở AMS TE R DAM.",
        "translations": {
            "vi": "TRỤ S Ở CHÍNH"
        }
    },
    {
        "id": "off-34",
        "topic": "Office Work",
        "word": "involved",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ THAM GIA V ÀO, CÓ LIÊN QUAN",
        "example": "THE COUPLE W AS HAVING A LOUD AR GUMENT, AND I W AS AFR AID T O GE T IN VO LV ED.",
        "exampleTranslation": "CẶP V Ợ CHỒNG ĐÃ CÓ MỘT TR ANH LUẬN ỒN ÀO, V À TÔI ĐÃ S Ợ ĐỂ THAM GIA V ÀO.",
        "translations": {
            "vi": "CÓ THAM GIA V ÀO, CÓ LIÊN QUAN"
        }
    },
    {
        "id": "off-35",
        "topic": "Office Work",
        "word": "procrastinate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TRÌ HOÃN, CHẦN CHỪ",
        "example": "WHEN IT COME S T O HOUS EWORK, I T END T O PR OCRA S TINAT E.",
        "exampleTranslation": "KHI NÓI ĐẾN CÔNG VIỆC NHÀ, T ÔI CÓ XU HƯỚNG TRÌ HOÃN.",
        "translations": {
            "vi": "TRÌ HOÃN, CHẦN CHỪ"
        }
    },
    {
        "id": "off-36",
        "topic": "Office Work",
        "word": "combined",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐƯỢC K Ế T HỢP, CHUNG, T ỔNG HỢP",
        "example": "P AUL AND CLARE HAVE A COMBINED INCOME OF $80,000.",
        "exampleTranslation": "P AUL VÀ CLARE CÓ TỔNG THU NHẬP LÀ $80 000. VOLUNTARILY TÌNH NGUY ỆN",
        "translations": {
            "vi": "ĐƯỢC K Ế T HỢP, CHUNG, T ỔNG HỢP"
        }
    },
    {
        "id": "off-37",
        "topic": "Office Work",
        "word": "occasionally",
        "phonetic": "",
        "pos": "adv",
        "meaning": "THỈNH THOẢNG, ĐÔI KHI",
        "example": "I SEE HIM OCCASIONALLY IN T O WN.",
        "exampleTranslation": "T ÔI THỈNH THOẢNG GẶP ANH ẤY TRONG THỊ TR ẤN.",
        "translations": {
            "vi": "THỈNH THOẢNG, ĐÔI KHI"
        }
    },
    {
        "id": "off-38",
        "topic": "Office Work",
        "word": "employee",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NHÂN VIÊN, NGƯỜI LAO ĐỘNG",
        "example": "THE NUMBER O F EMPLOYE E S IN THE COMPANY HAS TR EBLED OVER THE PAS T DECADE.",
        "exampleTranslation": "SỐ LƯỢNG NHÂN VIÊN TRONG CÔNG TY ĐÃ T ĂNG GẤP BA LẦN TRONG THẬP KỶ QUA.",
        "translations": {
            "vi": "NHÂN VIÊN, NGƯỜI LAO ĐỘNG"
        }
    },
    {
        "id": "off-39",
        "topic": "Office Work",
        "word": "assist",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TR Ợ GIÚP, HỖ TR Ợ",
        "example": "THE ARMY ARRIV ED T O AS SIS T IN THE S EAR CH.",
        "exampleTranslation": "QUÂN ĐỘI ĐẾN ĐỂ HỖ TR Ợ TRONG VIỆC TÌM KIẾM.",
        "translations": {
            "vi": "TR Ợ GIÚP, HỖ TR Ợ"
        }
    },
    {
        "id": "off-40",
        "topic": "Office Work",
        "word": "responsible",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ TR ÁCH NHIỆM,",
        "example": "He is responsible for the sales department.",
        "exampleTranslation": "Anh ấy chịu trách nhiệm về bộ phận bán hàng.",
        "translations": {
            "vi": "CÓ TR ÁCH NHIỆM,"
        }
    },
    {
        "id": "off-41",
        "topic": "Office Work",
        "word": "conduct",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TIẾN HÀNH, CHỈ ĐẠO, ĐIỀU KHIỂN",
        "example": "THE E XPERIMENT S WERE CONDUCT ED BY S CIENTIS TS IN NEW Y ORK.",
        "exampleTranslation": "CÁC THÍ NGHIỆM ĐƯỢC TIẾN HÀNH BỞI CÁC NHÀ KHOA HỌC Ở NEW Y ORK.",
        "translations": {
            "vi": "TIẾN HÀNH, CHỈ ĐẠO, ĐIỀU KHIỂN"
        }
    },
    {
        "id": "off-42",
        "topic": "Office Work",
        "word": "agree",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỒNG Ý",
        "example": "I AGREE WITH Y OU ON THIS IS SUE.",
        "exampleTranslation": "T ÔI ĐỒNG Ý V ỚI BẠN V Ề V ẤN ĐỀ NÀY.",
        "translations": {
            "vi": "ĐỒNG Ý"
        }
    },
    {
        "id": "off-43",
        "topic": "Office Work",
        "word": "supervise",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIÁM S ÁT",
        "example": "THE CHILDR EN PLAY WHILE TW O T EACHER S SUPERVIS E",
        "exampleTranslation": "NHỮNG ĐỨA TR Ẻ CHƠI TRONG KHI HAI GIÁO VIÊN GIÁM S ÁT",
        "translations": {
            "vi": "GIÁM S ÁT"
        }
    },
    {
        "id": "off-44",
        "topic": "Office Work",
        "word": "direct",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HƯỚNG DẪN, CHỈ ĐẠO",
        "example": "CAN Y OU DIR ECT METO THE NEAREST BUS S TO P fi",
        "exampleTranslation": "BẠN CÓ THỂ HƯỚNG DẪN T ÔI ĐẾN BẾN X E BUÝT GẦN NHẤT KHÔNGfi",
        "translations": {
            "vi": "HƯỚNG DẪN, CHỈ ĐẠO"
        }
    },
    {
        "id": "off-45",
        "topic": "Office Work",
        "word": "assign",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÂN CÔNG, BỔ NHIỆM",
        "example": "EACH TR AINEE IS AS SIGNED A MENT OR WHO WILL HELP THEM LEARN MOR E ABOUT THE JOB.",
        "exampleTranslation": "MỖI HỌC VIÊN ĐƯỢC CHỈ ĐỊNH MỘT NGƯỜI CỐ V ẤN, NGƯỜI S Ẽ GIÚP HỌ TÌM HIỂU THÊM V Ề CÔNG VIỆC.",
        "translations": {
            "vi": "PHÂN CÔNG, BỔ NHIỆM"
        }
    },
    {
        "id": "off-46",
        "topic": "Office Work",
        "word": "leading",
        "phonetic": "",
        "pos": "adj",
        "meaning": "DẪN ĐẦU, TIÊN PHONG, HÀNG ĐẦU",
        "example": "OUR PR ODUCT S COMPARE F AV OUR ABLY WITH ALL THE LEADING BR ANDS.",
        "exampleTranslation": "SẢN PHẨM CỦA CHÚNG T ÔI SO SÁNH THUẬN LỢI V ỚI T ẤT CẢ CÁC THƯƠNG HIỆU HÀNG ĐẦU.",
        "translations": {
            "vi": "DẪN ĐẦU, TIÊN PHONG, HÀNG ĐẦU"
        }
    },
    {
        "id": "off-47",
        "topic": "Office Work",
        "word": "formal",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TR ANG TR ỌNG, CHÍNH THỨC",
        "example": "THE Y WANT ED T O MAK E A F ORMAL COMPLAINT ABOUT THEIR DOCT OR.",
        "exampleTranslation": "HỌ MUỐN KHIẾU NẠI CHÍNH THỨC V Ề BÁC SĨ CỦA HỌ.",
        "translations": {
            "vi": "TR ANG TR ỌNG, CHÍNH THỨC"
        }
    },
    {
        "id": "off-48",
        "topic": "Office Work",
        "word": "remove",
        "phonetic": "",
        "pos": "verb",
        "meaning": "X OÁ, DẸP; ĐUỔI, CÁCH CHỨC",
        "example": "THIS DE TE R GENT WILL R EMOVE EVEN OLD ST AINS.",
        "exampleTranslation": "CHẤT T ẨY NÀY S Ẽ LOẠI BỎ NGAY CẢ NHỮNG V Ế T BẨN CŨ.",
        "translations": {
            "vi": "X OÁ, DẸP; ĐUỔI, CÁCH CHỨC"
        }
    },
    {
        "id": "off-49",
        "topic": "Office Work",
        "word": "collect",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THU THẬP, T ẬP HỢP",
        "example": "I STA RT ED COLLECTING S T AMPS AT THE AGE O F 5",
        "exampleTranslation": "T ÔI BẮT ĐẦU SƯU T ẬP T EM TỪ LÚC 5 TUỔI.",
        "translations": {
            "vi": "THU THẬP, T ẬP HỢP"
        }
    },
    {
        "id": "off-50",
        "topic": "Office Work",
        "word": "coordinate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐIỀU PHỐI, K Ế T HỢP",
        "example": "WE NEED S OMEONE T O COORDINAT E THE WHOLE CAMPAIGN.",
        "exampleTranslation": "CHÚNG T ÔI CẦN MỘT NGƯỜI ĐIỀU PHỐI T OÀN BỘ CHIẾN DỊCH.",
        "translations": {
            "vi": "ĐIỀU PHỐI, K Ế T HỢP"
        }
    },
    {
        "id": "off-51",
        "topic": "Office Work",
        "word": "hardly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "HIẾM KHI, KHÓ KHĂN, HẦU NHƯ KHÔNG",
        "example": "HE HARDLY AT E ANYTHING.",
        "exampleTranslation": "ANH ẤY HẦU NHƯ KHÔNG ĂN BẤT CỨ THỨ GÌ.",
        "translations": {
            "vi": "HIẾM KHI, KHÓ KHĂN, HẦU NHƯ KHÔNG"
        }
    },
    {
        "id": "off-52",
        "topic": "Office Work",
        "word": "skillfully",
        "phonetic": "",
        "pos": "adv",
        "meaning": "THÀNH THẠO, KHÉO LÉO",
        "example": "SHE HAD MAK E-UP SKILFULLY T O MASK THE BRUI SE.",
        "exampleTranslation": "CÔ ĐÃ TR ANG ĐIỂM KHÉO LÉO ĐỂ CHE ĐI V Ế T THÂM.",
        "translations": {
            "vi": "THÀNH THẠO, KHÉO LÉO"
        }
    },
    {
        "id": "off-53",
        "topic": "Office Work",
        "word": "exclusive",
        "phonetic": "",
        "pos": "adj",
        "meaning": "RIÊNG BIỆ T, ĐỘC QUY ỀN",
        "example": "THIS R OOM IS F OR THE E XC LUSIV E O F GUE STS.",
        "exampleTranslation": "PHÒNG NÀY ĐỘC QUY ỀN CHO KHÁCH SỬ DỤNG.",
        "translations": {
            "vi": "RIÊNG BIỆ T, ĐỘC QUY ỀN"
        }
    },
    {
        "id": "off-54",
        "topic": "Office Work",
        "word": "intention",
        "phonetic": "",
        "pos": "noun",
        "meaning": "Ý ĐỊNH, MỤC ĐÍCH, Ý MUỐN",
        "example": "I'V E NO INT ENTION O F CHANGING MY PLANS JUS T TO ﬁT IN WITH HIS.",
        "exampleTranslation": "TÔI KHÔNG CÓ Ý ĐỊNH THAY ĐỔI K Ế HOẠCH CỦA MÌNH CHỈ ĐỂ PHÙ HỢP V ỚI ANH ẤY.",
        "translations": {
            "vi": "Ý ĐỊNH, MỤC ĐÍCH, Ý MUỐN"
        }
    },
    {
        "id": "off-55",
        "topic": "Office Work",
        "word": "disturbing",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LÀM NHIỄU LOẠN, LÀM X ÁO TR ỘN",
        "example": "THE F OLLO WING PR OGR AMME CONT AINS S CENE S THAT MAY BE DIS TURBING T O S OME VIEWER S.",
        "exampleTranslation": "CHƯƠNG TRÌNH S AU ĐÂY CÓ NHỮNG CẢNH CÓ THỂ PHIỀN CHO MỘT S Ố NGƯỜI XEM.",
        "translations": {
            "vi": "LÀM NHIỄU LOẠN, LÀM X ÁO TR ỘN"
        }
    },
    {
        "id": "off-56",
        "topic": "Office Work",
        "word": "foster",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THÚC ĐẨY, BỒI DƯỠNG, BỒI ĐẮP",
        "example": "I'M TRYING T O F OST ER AN INTE R EST IN CLAS SICAL MUSIC IN MY CHILDR EN.",
        "exampleTranslation": "TÔI ĐANG CỐ GẮNG BỒI ĐẮP NIỀM Y ÊU THÍCH ÂM NHẠC CỔ ĐIỂN Ở CÁC CON T ÔI.",
        "translations": {
            "vi": "THÚC ĐẨY, BỒI DƯỠNG, BỒI ĐẮP"
        }
    },
    {
        "id": "off-57",
        "topic": "Office Work",
        "word": "neutrality",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TÍNH CHẤT TRUNG LẬP, THÁI ĐỘ TRUNG LẬP",
        "example": "THE QUEEN HAS MAIN TA INED POLITICAL NEUTR ALITY THR OUGHOUT HER R EIGN.",
        "exampleTranslation": "NỮ HOÀNG ĐÃ DUY TRÌ TÍNH TRUNG LẬP V Ề CHÍNH TRỊ TRONG SUỐT THỜI GIAN TRỊ VÌ CỦA MÌNH.",
        "translations": {
            "vi": "TÍNH CHẤT TRUNG LẬP, THÁI ĐỘ TRUNG LẬP"
        }
    },
    {
        "id": "off-58",
        "topic": "Office Work",
        "word": "widely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "R ỘNG, NHIỀU, X A",
        "example": "THIS THEORY IS NO LONGER WIDELY ACCEPT ED.",
        "exampleTranslation": "L Ý THUY Ế T NÀY KHÔNG CÒN ĐƯỢC CHẤP NHẬN R ỘNG R ÃI. ACCOMPLISH ĐẠT ĐƯỢC, CÓ ĐỦ T ÀI NĂNG",
        "translations": {
            "vi": "R ỘNG, NHIỀU, X A"
        }
    },
    {
        "id": "off-59",
        "topic": "Office Work",
        "word": "undertake",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẢM NHẬN, TIẾP QUẢN",
        "example": "She undertook the task of organizing the meeting.",
        "exampleTranslation": "Cô ấy đảm nhận nhiệm vụ tổ chức cuộc họp.",
        "translations": {
            "vi": "ĐẢM NHẬN, TIẾP QUẢN"
        }
    },
    {
        "id": "off-60",
        "topic": "Office Work",
        "word": "manner",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CÁCH, LỐI; THÁI ĐỘ, CỬ CHỈ",
        "example": "HE W AS ELECT ED IN THE NORMAL MANNER.",
        "exampleTranslation": "ÔNG ĐÃ ĐƯỢC BẦU THEO CÁCH BÌNH THƯỜNG.",
        "translations": {
            "vi": "CÁCH, LỐI; THÁI ĐỘ, CỬ CHỈ"
        }
    },
    {
        "id": "off-61",
        "topic": "Office Work",
        "word": "adjust",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐIỀU CHỈNH, LÀM CHO THÍCH HỢP",
        "example": "IF THE CHAIR IS T OO HIGH Y OU CAN ADJUS T IT TO SUIT Y OU.",
        "exampleTranslation": "NẾU GHẾ QUÁ CAO BẠN CÓ THỂ ĐIỀU CHỈNH CHO PHÙ HỢP V ỚI MÌNH.",
        "translations": {
            "vi": "ĐIỀU CHỈNH, LÀM CHO THÍCH HỢP"
        }
    },
    {
        "id": "off-62",
        "topic": "Office Work",
        "word": "personnel",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NHÂN VIÊN, CÔNG CHỨ C",
        "example": "PE RS ONNEL WILL HELP Y OU ﬁND S OME WHER E T O LIVE",
        "exampleTranslation": "NHÂN VIÊN S Ẽ GIÚP BẠN TÌM MỘT NƠI NÀO ĐÓ ĐỂ S ỐNG.",
        "translations": {
            "vi": "NHÂN VIÊN, CÔNG CHỨ C"
        }
    },
    {
        "id": "off-63",
        "topic": "Office Work",
        "word": "abstract",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TRỪU TƯỢNG, MƠ HỒ",
        "example": "TRUTH AND BEAUTY ARE AB STRA CT CONCEPT S.",
        "exampleTranslation": "SỰ THẬT V À CÁI ĐẸP LÀ NHỮNG KHÁI NIỆM TRỪU TƯỢNG.",
        "translations": {
            "vi": "TRỪU TƯỢNG, MƠ HỒ"
        }
    },
    {
        "id": "off-64",
        "topic": "Office Work",
        "word": "directory",
        "phonetic": "",
        "pos": "noun",
        "meaning": "DANH BẠ, S Ổ ĐỊA CHỈ",
        "example": "LOOK UP THEIR NUMBER IN THE T ELEPHONE DIR ECTO RY.",
        "exampleTranslation": "TR A CỨU S Ố CỦA HỌ TRONG DANH BẠ ĐIỆN THOẠI.",
        "translations": {
            "vi": "DANH BẠ, S Ổ ĐỊA CHỈ"
        }
    },
    {
        "id": "off-65",
        "topic": "Office Work",
        "word": "transform",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BIẾN ĐỔI, THAY ĐỔI",
        "example": "THE R EOR GANIZ ATION WILL TR ANSF ORM THE ENT ERT AINMENT INDUS TRY.",
        "exampleTranslation": "V IỆC T Ổ CHỨC LẠI S Ẽ BIẾN ĐỔI NGÀNH CÔNG NGHIỆP GIẢI TRÍ.",
        "translations": {
            "vi": "BIẾN ĐỔI, THAY ĐỔI"
        }
    },
    {
        "id": "off-66",
        "topic": "Office Work",
        "word": "respectful",
        "phonetic": "",
        "pos": "adj",
        "meaning": "T ÔN TR ỌNG, LỄ PHÉP, KÍNH CẨN",
        "example": "HE T AUGHT HIS CHILDR EN T O BE R ES PECT FUL O F OTHER CULTU RE S.",
        "exampleTranslation": "ÔNG DẠY CÁC CON CỦA MÌNH T ÔN TR ỌNG CÁC NỀN V ĂN HÓA KHÁC.",
        "translations": {
            "vi": "T ÔN TR ỌNG, LỄ PHÉP, KÍNH CẨN"
        }
    },
    {
        "id": "off-67",
        "topic": "Office Work",
        "word": "duplicate",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BẢN S AO",
        "example": "I LOS T THE ORIGINAL F ORM S O THEY S ENT ME A DUPLICA TE.",
        "exampleTranslation": "T ÔI BỊ MẤT MẪU BAN ĐẦU VÌ V ẬY HỌ ĐÃ GỬI CHO T ÔI MỘT BẢN S AO.",
        "translations": {
            "vi": "BẢN S AO"
        }
    },
    {
        "id": "off-68",
        "topic": "Office Work",
        "word": "contrary",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TR ÁI NGƯỢC, ĐIỀU NGƯỢC LẠI",
        "example": "WE E XPECT ED THE PLAY T O BE A BOR E, BUT THE CONTR ARY W AS TRUE.",
        "exampleTranslation": "CHÚNG T ÔI ĐÃ KỲ V ỌNG V Ở KỊCH S Ẽ THÀNH CÔNG, NHƯNG SỰ THẬT LẠI NGƯỢC LẠI.",
        "translations": {
            "vi": "SỰ TR ÁI NGƯỢC, ĐIỀU NGƯỢC LẠI"
        }
    },
    {
        "id": "off-69",
        "topic": "Office Work",
        "word": "engage",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THAM GIA, CAM K Ế T, THU HÚT",
        "example": "A PROFESS IONAL COACH W AS IMMEDIATE LY ENGAGED.",
        "exampleTranslation": "MỘT HUẤN LUY ỆN VIÊN CHUYÊ N NGHIỆP ĐÃ NGAY LẬP TỨC THAM GIA.",
        "translations": {
            "vi": "THAM GIA, CAM K Ế T, THU HÚT"
        }
    },
    {
        "id": "off-70",
        "topic": "Office Work",
        "word": "timely",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KỊP THỜI",
        "example": "THE ﬁGHT ENDED ONLY WITH THE TIMELY ARRIV AL O F THE POLICE.",
        "exampleTranslation": "CUỘC CHIẾN CHỈ K Ế T THÚC KHI CÓ SỰ XUẤT HIỆN KỊP THỜI CỦA CẢNH S ÁT.",
        "translations": {
            "vi": "KỊP THỜI"
        }
    },
    {
        "id": "off-71",
        "topic": "Office Work",
        "word": "realistically",
        "phonetic": "",
        "pos": "adv",
        "meaning": "THEO THỰC TẾ, THỰC TẾ LÀ",
        "example": "REALIS TICALLY SPEAKING, HE HADN 'T A HOPE, BUT THAT DIDN'T STOP HIM TRYING.",
        "exampleTranslation": "THỰC TẾ MÀ NÓI, ANH KHÔNG CÓ HY VỌNG, NHƯNG ĐIỀU ĐÓ KHÔNG NGĂN ANH CỐ GẮNG.",
        "translations": {
            "vi": "THEO THỰC TẾ, THỰC TẾ LÀ"
        }
    },
    {
        "id": "off-72",
        "topic": "Office Work",
        "word": "promplty",
        "phonetic": "",
        "pos": "adv",
        "meaning": "NHANH CHÓNG, NGAY LẬP TỨC, ĐÚNG GIỜ",
        "example": "THE EMERGENCY SERVICES ARRIVED PROMPTLY AT THE SCENE.",
        "exampleTranslation": "CÁC DỊCH VỤ KHẨN CẤP ĐÃ KỊP THỜI ĐẾN HIỆN TRƯỜNG.",
        "translations": {
            "vi": "NHANH CHÓNG, NGAY LẬP TỨC, ĐÚNG GIỜ"
        }
    },
    {
        "id": "off-73",
        "topic": "Office Work",
        "word": "accessible",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CÓ THỂ TRUY CẬP/ TIẾP CẬN ĐƯỢC,",
        "example": "MANY SMALLER VILLAGES ARE ONLY ACCESSIBLE BY BUS.",
        "exampleTranslation": "NHIỀU NGÔI LÀNG NHỎ CHỈ CÓ THỂ TIẾP CẬN BẰNG XE BUÝT.",
        "translations": {
            "vi": "CÓ THỂ TRUY CẬP/ TIẾP CẬN ĐƯỢC,"
        }
    },
    {
        "id": "off-74",
        "topic": "Office Work",
        "word": "implement",
        "phonetic": "/",
        "pos": "verb",
        "meaning": "THI HÀNH, TIẾN HÀNH",
        "example": "THE CHANGES TO THE NATIONAL HEALTH SYSTEM WILL BE IMPLEMENTED NEXT YEAR.",
        "exampleTranslation": "NHỮNG THAY ĐỔI ĐỐI VỚI HỆ THỐNG Y TẾ QUỐC GIA SẼ ĐƯỢC THỰC HIỆN TRONG NĂM TỚI.",
        "translations": {
            "vi": "THI HÀNH, TIẾN HÀNH"
        }
    },
    {
        "id": "off-75",
        "topic": "Office Work",
        "word": "feedback",
        "phonetic": "",
        "pos": "noun",
        "meaning": "PHẢN HỒI, Ý KIẾN NHẬN X ÉT",
        "example": "THER E W AS A LOT O F POSITIV E F EEDBACK WHICH W AS VERY ENCOU RA GING.",
        "exampleTranslation": "CÓ R ẤT NHIỀU PHẢN HỒI TÍCH CỰC R ẤT ĐÁNG KHÍCH LỆ.",
        "translations": {
            "vi": "PHẢN HỒI, Ý KIẾN NHẬN X ÉT"
        }
    },
    {
        "id": "off-76",
        "topic": "Office Work",
        "word": "outstanding",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NỘI BẬT, ĐÁNG CHÚ Ý; CÒN T ỒN T ẠI,",
        "example": "IT'S AN AREA O F OUT STANDING NATURA L BEAUTY.",
        "exampleTranslation": "ĐÓ LÀ MỘT KHU VỰC CÓ V Ẻ ĐẸP TỰ NHIÊN NỔI BẬT.",
        "translations": {
            "vi": "NỘI BẬT, ĐÁNG CHÚ Ý; CÒN T ỒN T ẠI,"
        }
    },
    {
        "id": "off-77",
        "topic": "Office Work",
        "word": "inform",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THÔNG BÁO, BÁO TIN",
        "example": "I INF ORMED MY BOS S THAT I W AS GOING T O BE AW AY NE XT W EEK.",
        "exampleTranslation": "TÔI THÔNG BÁO V ỚI S ẾP R ẰNG T ÔI S Ẽ ĐI V ẮNG V ÀO TUẦN T ỚI.",
        "translations": {
            "vi": "THÔNG BÁO, BÁO TIN"
        }
    },
    {
        "id": "off-78",
        "topic": "Office Work",
        "word": "replacement",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THAY THẾ, VẬT/ NGƯỜI THAY THẾ",
        "example": "THE AGENCY S ENT A REPLACEMENT FOR THE SECRETARY WHO RESIGNED.",
        "exampleTranslation": "CƠ QUAN GỬI MỘT SỰ THAY THẾ CHO THƯ KÝ NGƯỜI ĐÃ TỪ CHỨC.",
        "translations": {
            "vi": "SỰ THAY THẾ, VẬT/ NGƯỜI THAY THẾ"
        }
    },
    {
        "id": "off-79",
        "topic": "Office Work",
        "word": "announcement",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THÔNG CÁO, THÔNG BÁO",
        "example": "AFTER SHE MADE THE ANNOUNCEMENT.",
        "exampleTranslation": "CÓ MỘT SỰ IM LẶNG CHẾT NGƯỜI SAU KHI CÔ ẤY ĐƯA RA THÔNG BÁO.",
        "translations": {
            "vi": "THÔNG CÁO, THÔNG BÁO"
        }
    },
    {
        "id": "off-80",
        "topic": "Office Work",
        "word": "outline",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BẢN THẢO, NÉ T PHÁC THẢO, DÀN BÀI",
        "example": "SHE DREW THE OUTLINE OF THE BOAT AND THEN COLOURED IT IN.",
        "exampleTranslation": "CÔ ẤY VẼ PHÁC THẢO ĐƯỜNG VIỀN CỦA CHIẾC THUYỀN VÀ KẾ ĐÓ TÔ MÀU NÓ.",
        "translations": {
            "vi": "BẢN THẢO, NÉ T PHÁC THẢO, DÀN BÀI"
        }
    },
    {
        "id": "off-81",
        "topic": "Office Work",
        "word": "explain",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIẢI THÍCH, GIẢNG GIẢI",
        "example": "Could you explain the problem?",
        "exampleTranslation": "Bạn có thể giải thích vấn đề không?",
        "translations": {
            "vi": "GIẢI THÍCH, GIẢNG GIẢI"
        }
    },
    {
        "id": "off-82",
        "topic": "Office Work",
        "word": "overview",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TỔNG QUÁT, KHÁI QUÁT",
        "example": "I'LL GIVE YOU A BRIEF OVERVIEW O F WHAT THE JOB INVOLVES.",
        "exampleTranslation": "TÔI SẼ CUNG CẤP CHO BẠN MỘT CÁI NHÌN TỔNG QUÁT NGẮN GỌN VỀ NHỮNG GÌ LIÊN QUAN ĐẾN CÔNG VIỆC.",
        "translations": {
            "vi": "TỔNG QUÁT, KHÁI QUÁT"
        }
    },
    {
        "id": "off-83",
        "topic": "Office Work",
        "word": "matter",
        "phonetic": "",
        "pos": "noun",
        "meaning": "VẤN ĐỀ, CÔNG VIỆC",
        "example": "COULD I TALK TO YOU ABOUT A PERSONAL MATTERfi",
        "exampleTranslation": "TÔI CÓ THỂ NÓI CHUYỆN VỚI BẠN VỀ MỘT VẤN ĐỀ CÁ NHÂNfi",
        "translations": {
            "vi": "VẤN ĐỀ, CÔNG VIỆC"
        }
    },
    {
        "id": "off-84",
        "topic": "Office Work",
        "word": "remainder",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI/ VẬT CÒN LẠI, PHẦN CÒN LẠI",
        "example": "ALL OUR REMAINDERS HAVE BEEN DISCOUNTED BY MORE THAN 50%.",
        "exampleTranslation": "T ẤT CẢ PHẦN CÒN LẠI CỦA CHÚNG TÔI ĐÃ ĐƯỢC CHIẾT KHẤU HƠN 50%.",
        "translations": {
            "vi": "NGƯỜI/ VẬT CÒN LẠI, PHẦN CÒN LẠI"
        }
    },
    {
        "id": "off-85",
        "topic": "Office Work",
        "word": "essential",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CẦN THIẾT, THIẾT YẾU, CỐT YẾU",
        "example": "WATER IS ESSENTIAL FOR LIVING THINGS.",
        "exampleTranslation": "NƯỚC THÌ CẦN THIẾT CHO SINH VẬT SỐNG.",
        "translations": {
            "vi": "CẦN THIẾT, THIẾT YẾU, CỐT YẾU"
        }
    },
    {
        "id": "off-86",
        "topic": "Office Work",
        "word": "divide",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHIA RA, PHÂN CHIA",
        "example": "TE X AS IS DIVIDED INT O 254 COUNTIE S.",
        "exampleTranslation": "TE X AS ĐƯỢC CHIA THÀNH 254 QUẬN.",
        "translations": {
            "vi": "CHIA RA, PHÂN CHIA"
        }
    },
    {
        "id": "off-87",
        "topic": "Office Work",
        "word": "major",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CHỦ YẾU, CHỦ CHỐT, TRỌNG ĐẠI",
        "example": "SUGAR IS A MAJOR CAUS E O F T OOTH DECAY. CAUSE O F TOOTH DECA",
        "exampleTranslation": "ĐƯỜNG LÀ NGUY ÊN NHÂN CHỦ Y ẾU GÂY S ÂU R ĂNG. ĐƯỜNG LÀ NGUYÊ",
        "translations": {
            "vi": "CHỦ YẾU, CHỦ CHỐT, TRỌNG ĐẠI"
        }
    },
    {
        "id": "off-88",
        "topic": "Office Work",
        "word": "face",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐƯƠNG ĐẦU, ĐỐI MẶT, HƯỚNG VỀ",
        "example": "The company faces many challenges.",
        "exampleTranslation": "Công ty đối mặt với nhiều thách thức.",
        "translations": {
            "vi": "ĐƯƠNG ĐẦU, ĐỐI MẶT, HƯỚNG VỀ"
        }
    },
    {
        "id": "off-89",
        "topic": "Office Work",
        "word": "follow",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM THEO, THEO DÕI, CHÚ Ý, THEO KỊP",
        "example": "A DOG F OLLOWED",
        "exampleTranslation": "MỘT CHÚ CHÓ ĐÃ THEO CHÚNG T ÔI V Ề NHÀ.",
        "translations": {
            "vi": "LÀM THEO, THEO DÕI, CHÚ Ý, THEO KỊP"
        }
    },
    {
        "id": "off-90",
        "topic": "Office Work",
        "word": "apparently",
        "phonetic": "",
        "pos": "adv",
        "meaning": "HÌNH NHƯ",
        "example": "APPARENTLY IT'S GOING TO RAIN TODAY.",
        "exampleTranslation": "HÌNH NHƯ TRỜI HÔM NAY SẼ MƯA.",
        "translations": {
            "vi": "HÌNH NHƯ"
        }
    },
    {
        "id": "off-91",
        "topic": "Office Work",
        "word": "aware",
        "phonetic": "",
        "pos": "adv",
        "meaning": "BIẾ T, NHẬN THẤY, NHẬN THỨC ĐƯỢC",
        "example": "I WASN'T EVEN AWARE THAT HE WAS ILL.",
        "exampleTranslation": "TÔI THẬM CHÍ CÒN KHÔNG NHẬN RA RẰNG ANH ẤY BỊ ỐM.",
        "translations": {
            "vi": "BIẾ T, NHẬN THẤY, NHẬN THỨC ĐƯỢC"
        }
    },
    {
        "id": "off-92",
        "topic": "Office Work",
        "word": "extended",
        "phonetic": "",
        "pos": "adj",
        "meaning": "MỞ R ỘNG, K ÉO DÀI",
        "example": "THE Y'R E GOING ON AN E XT ENDED HOLIDAY.",
        "exampleTranslation": "HỌ ĐANG CÓ MỘT KỲ NGHỈ K ÉO DÀI.",
        "translations": {
            "vi": "MỞ R ỘNG, K ÉO DÀI"
        }
    },
    {
        "id": "off-93",
        "topic": "Office Work",
        "word": "accidentially",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TÌNH CỜ, NGOÀI Ý MUỐN",
        "example": "I ACCIDENT ALLY KNOCK ED A GLAS S OVE R.",
        "exampleTranslation": "TÔI V Ô TÌNH LÀM ĐỔ MỘT CHIẾC L Y.",
        "translations": {
            "vi": "TÌNH CỜ, NGOÀI Ý MUỐN"
        }
    },
    {
        "id": "off-94",
        "topic": "Office Work",
        "word": "advisable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NÊN LÀM, THÍCH HỢP",
        "example": "REGULAR MEDICAL CHECK -UPS ARE ADVIS ABLE.",
        "exampleTranslation": "KIỂM TR A SỨC KHỎE THƯỜNG XUY ÊN NÊN ĐƯỢC KHUY ẾN KHÍCH.",
        "translations": {
            "vi": "NÊN LÀM, THÍCH HỢP"
        }
    },
    {
        "id": "off-95",
        "topic": "Office Work",
        "word": "concerned",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LO LẮNG, LO ÂU, CÓ LIÊN QUAN ĐẾN",
        "example": "I'M A BIT CONCERNED FO R Y OUR HEALTH.",
        "exampleTranslation": "T ÔI HƠI LO LẮNG CHO SỨC KHỎE CỦA BẠN",
        "translations": {
            "vi": "LO LẮNG, LO ÂU, CÓ LIÊN QUAN ĐẾN"
        }
    },
    {
        "id": "off-96",
        "topic": "Office Work",
        "word": "speak",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NÓI",
        "example": "CAN I SPEAK T O ENGLISH, PLEAS Efi",
        "exampleTranslation": "BẠN CÓ THỂ VUI LÒNG NÓI TIẾNG ANH KHÔNGfi",
        "translations": {
            "vi": "NÓI"
        }
    },
    // ==========================================
    // TOPIC 4: LEISURE TIME, COMMUNITY (lei-01 → lei-28)
    // ==========================================
    {
        "id": "lei-01",
        "topic": "Leisure Time, Community",
        "word": "exhibition",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CUỘC TRIỂN LÃM, SỰ TRƯNG BÀY",
        "example": "THER E' S A NEW E XHIBITION O F S CULPTUR E ON AT THE CITY GALLERY.",
        "exampleTranslation": "CÓ MỘT CUỘC TRIỂN LÃM ĐIÊU KHẮC MỚI TẠI PHÒNG TRƯNG BÀY THÀNH PHỐ.",
        "translations": {
            "vi": "CUỘC TRIỂN LÃM, SỰ TRƯNG BÀY"
        }
    },
    {
        "id": "lei-02",
        "topic": "Leisure Time, Community",
        "word": "live",
        "phonetic": "",
        "pos": "adj",
        "meaning": "PHÁT S ÓNG TRỰC TIẾP (R ADIO, TV), S ỐNG",
        "example": "THIS E VENING THER E WILL BE A LIV E BR OADCAS T O F THE DEBAT E. EVENING A LIV E BRO",
        "exampleTranslation": "CHIỀU T ỐI NAY S Ẽ CÓ BUỔI TRUY ỀN HÌNH TRỰC TIẾP CUỘC TR ANH LUẬN.",
        "translations": {
            "vi": "PHÁT S ÓNG TRỰC TIẾP (R ADIO, TV), S ỐNG"
        }
    },
    {
        "id": "lei-03",
        "topic": "Leisure Time, Community",
        "word": "donation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ QUY ÊN GÓP, TỪ THIỆN, SỰ T ẶNG",
        "example": "EVERY Y EAR SHE MA KE S A LAR GE DONATION T O A W ORTHY CAUS E.",
        "exampleTranslation": "MỖI NĂM CÔ ẤY ĐỀU ĐÓNG GÓP TỪ THIỆN LỚN CHO MỘT MỤC ĐÍCH XỨNG ĐÁNG.",
        "translations": {
            "vi": "SỰ QUY ÊN GÓP, TỪ THIỆN, SỰ T ẶNG"
        }
    },
    {
        "id": "lei-04",
        "topic": "Leisure Time, Community",
        "word": "present",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TRÌNH BÀY, GIỚI THIỆU",
        "example": "HE HAS A LOT MOR E WO RK T O DO BE FO R E HE CAN PR ES ENT THE S CHEMET O THE PUBLIC.",
        "exampleTranslation": "ANH ẤY CÒN R ẤT NHIỀU VIỆC PHẢI LÀM TRƯỚC KHI CÓ THỂ TRÌNH BÀY K Ế HOẠCH TRƯỚC CÔNG CHÚNG.",
        "translations": {
            "vi": "TRÌNH BÀY, GIỚI THIỆU"
        }
    },
    {
        "id": "lei-05",
        "topic": "Leisure Time, Community",
        "word": "required",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CẦN THIẾ T, ĐƯỢC Y ÊU CẦU, PHẢI CÓ",
        "example": "THE COMPANY F AILED T O MAINTA IN IT S R EQUIR ED MINIMUM NE T CAPIT AL.",
        "exampleTranslation": "CÔNG TY KHÔNG DUY TRÌ ĐƯỢC MỨC V ỐN R ÒNG T ỐI THIỂU CẦN THIẾ T.",
        "translations": {
            "vi": "CẦN THIẾ T, ĐƯỢC Y ÊU CẦU, PHẢI CÓ"
        }
    },
    {
        "id": "lei-06",
        "topic": "Leisure Time, Community",
        "word": "appear",
        "phonetic": "",
        "pos": "verb",
        "meaning": "XUẤT HIỆN, TRÌNH DIỆN",
        "example": "HE SUDDENLY APPEARED IN THE DOORWAY.",
        "exampleTranslation": "ANH ĐỘT NHIÊN XUẤT HIỆN Ở NGƯỠNG CỬA.",
        "translations": {
            "vi": "XUẤT HIỆN, TRÌNH DIỆN"
        }
    },
    {
        "id": "lei-07",
        "topic": "Leisure Time, Community",
        "word": "accompany",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐI CÙNG AI ĐÓ, KÈM THEO",
        "example": "MAY I ACCOMPANY YOU TO THE BALLfi",
        "exampleTranslation": "TÔI CÓ THỂ ĐI CÙNG BẠN ĐẾN VŨ HỘI ĐƯỢC KHÔNGfi EDITION LẦN IN, PHIÊN BẢN",
        "translations": {
            "vi": "ĐI CÙNG AI ĐÓ, KÈM THEO"
        }
    },
    {
        "id": "lei-08",
        "topic": "Leisure Time, Community",
        "word": "note",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GHI CHÚ, LƯU Ý",
        "example": "IN THE ARTICLE, SHE NOTES SEVERAL CASES OF MEDICAL INCOMPETENCE.",
        "exampleTranslation": "TRONG BÀI BÁO, CÔ GHI CHÚ MỘT SỐ TRƯỜNG HỢP KHÔNG ĐỦ NĂNG LỰC Y TẾ.",
        "translations": {
            "vi": "GHI CHÚ, LƯU Ý"
        }
    },
    {
        "id": "lei-09",
        "topic": "Leisure Time, Community",
        "word": "upcoming",
        "phonetic": "",
        "pos": "adj",
        "meaning": "S ẮP ĐẾN, S ẮP T ỚI",
        "example": "TICK ET S ARE S ELLING W ELL F OR THE GR OUP 'S UPCOMING CONCERT T OUR. TOUR.",
        "exampleTranslation": "VÉ BÁN R ẤT CHẠY CHO CHUY ẾN LƯU DIỄN S ẮP T ỚI CỦA NHÓM.",
        "translations": {
            "vi": "S ẮP ĐẾN, S ẮP T ỚI"
        }
    },
    {
        "id": "lei-10",
        "topic": "Leisure Time, Community",
        "word": "lend",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHO MƯỢN, CHO V AY",
        "example": "SHE DOE SN 'T LIK E LENDING HER BOOK S.",
        "exampleTranslation": "CÔ ẤY KHÔNG THÍCH CHO MƯỢN S ÁCH CỦA CÔ ẤY.",
        "translations": {
            "vi": "CHO MƯỢN, CHO V AY"
        }
    },
    {
        "id": "lei-11",
        "topic": "Leisure Time, Community",
        "word": "local",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐỊA PHƯƠNG, CỤC BỘ",
        "example": "OUR CHILDR EN ALL GO T O THE LOCAL S CHOOL.",
        "exampleTranslation": "T ẤT CẢ CON CÁI CỦA CHÚNG TÔ I ĐỀU ĐI HỌC Ở TRƯỜNG ĐỊA PHƯƠNG.",
        "translations": {
            "vi": "ĐỊA PHƯƠNG, CỤC BỘ"
        }
    },
    {
        "id": "lei-12",
        "topic": "Leisure Time, Community",
        "word": "contributor",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI CỐNG HIẾN, NGƯỜI ĐÓNG GÓP",
        "example": "HE BECAME A R EGULAR CONTRIBUT OR T O THE NEW Y ORK ER.",
        "exampleTranslation": "ANH ẤY TR Ở THÀNH NGƯỜI ĐÓNG GÓP THƯỜNG XUY ÊN CHO",
        "translations": {
            "vi": "NGƯỜI CỐNG HIẾN, NGƯỜI ĐÓNG GÓP"
        }
    },
    {
        "id": "lei-13",
        "topic": "Leisure Time, Community",
        "word": "fascinating",
        "phonetic": "",
        "pos": "adj",
        "meaning": "HẤP DẪN, LÔI CUỐN, QUYẾN RŨ",
        "example": "I FOUND THE WHOLE MOVIE FASCINATING.",
        "exampleTranslation": "T ÔI THẤY TOÀN BỘ BỘ PHIM HẤP DẪN.",
        "translations": {
            "vi": "HẤP DẪN, LÔI CUỐN, QUYẾN RŨ"
        }
    },
    {
        "id": "lei-14",
        "topic": "Leisure Time, Community",
        "word": "showing",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TRÌNH DIỄN, CHỨNG C Ứ",
        "example": "THIS IS THE ﬁLM 'S ﬁR S T SHOWING ON T ELEV ISION.",
        "exampleTranslation": "ĐÂY LÀ LẦN ĐẦU TIÊN BỘ PHIM TRÌNH CHIẾU TR ÊN TRUY ỀN HÌNH.",
        "translations": {
            "vi": "SỰ TRÌNH DIỄN, CHỨNG C Ứ"
        }
    },
    {
        "id": "lei-15",
        "topic": "Leisure Time, Community",
        "word": "celebrity",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI NỔI TIẾNG",
        "example": "THE MAGAZINE IS ALL ABOUT THE LIVES O F CELEBRITIE S.",
        "exampleTranslation": "T ẠP CHÍ LÀ T ẤT CẢ V Ề CUỘC S ỐNG CỦA NHỮNG NGƯỜI NỔI TIẾNG.",
        "translations": {
            "vi": "NGƯỜI NỔI TIẾNG"
        }
    },
    {
        "id": "lei-16",
        "topic": "Leisure Time, Community",
        "word": "alumni",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CỰU SINH VIÊN",
        "example": "ABOUT 7,000 ALUMNI WILL PAY NORTHWESTERN $ 1,565 EACH FOR A PACKAGE OF AIR-FARE AND GAMETICKETS",
        "exampleTranslation": "KHOẢNG 7. 000 CỰU SINH VIÊN SẼ TRẢ CHO TÂY BẮC MỖI NGƯỜI 1.56 5 ĐÔ LA CHO MỘT GÓI VÉ MÁY BAY VÀ VÉ TRÒ CHƠI",
        "translations": {
            "vi": "CỰU SINH VIÊN"
        }
    },
    {
        "id": "lei-17",
        "topic": "Leisure Time, Community",
        "word": "banquet",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BỮA TIỆC LỚN",
        "example": "MEDIEVAL BANQUETS ARE HELD IN THE CASTLE ONCE A MONTH.",
        "exampleTranslation": "CÁC BỮA TIỆC THỜI TRUNG CỔ ĐƯỢC TỔ CHỨC TRONG LÂU ĐÀI MỖI THÁNG MỘT LẦN.",
        "translations": {
            "vi": "BỮA TIỆC LỚN"
        }
    },
    {
        "id": "lei-18",
        "topic": "Leisure Time, Community",
        "word": "anniversary",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỄ KỶ NIỆM, NGÀY KỶ NIỆM",
        "example": "T OMORROW IS THE 30TH ANNIVERSARY OF THE REVOLUTION.",
        "exampleTranslation": "NGÀY MAI LÀ NGÀY KỶ NIỆM 30 NĂM CÁCH MẠNG.",
        "translations": {
            "vi": "LỄ KỶ NIỆM, NGÀY KỶ NIỆM"
        }
    },
    {
        "id": "lei-19",
        "topic": "Leisure Time, Community",
        "word": "rest",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NGHỈ NGƠI, THƯ GIÃN",
        "example": "THE DOCTOR TOLD HIM THAT HE SHOULD REST FOR A FEW DAYS.",
        "exampleTranslation": "BÁC SĨ BẢO ANH ẤY NÊN NGHỈ NGƠI VÀI NGÀY. REST est/ PHẦN CÒN LẠI",
        "translations": {
            "vi": "NGHỈ NGƠI, THƯ GIÃN"
        }
    },
    {
        "id": "lei-20",
        "topic": "Leisure Time, Community",
        "word": "fundraising",
        "phonetic": "",
        "pos": "noun",
        "meaning": "VIỆC GÂY QUỸ",
        "example": "THE CANDIDAT E R AK ED IN MOR E THAN $4. 9 MILLION IN CASH FR OM POLITICAL FUND-R AISING EVE NT S.",
        "exampleTranslation": "ỨNG CỬ VIÊN ĐÃ KIẾM ĐƯỢC HƠN 4, 9 TRIỆU ĐÔ LA TIỀN MẶT TỪ CÁC SỰ KIỆN GÂY QUỸ CHÍNH TRỊ. RES UME LẠI TIẾP TỤC",
        "translations": {
            "vi": "VIỆC GÂY QUỸ"
        }
    },
    {
        "id": "lei-21",
        "topic": "Leisure Time, Community",
        "word": "issue",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÁT HÀNH, CHO R A MẮT",
        "example": "HE S TA RT ED IS SUING PER EMP TO RY INS TRUCTIONS.",
        "exampleTranslation": "ANH T A BẮT ĐẦU BAN HÀNH CÁC HƯỚNG DẪN BẮT BUỘ C. BẮT BUỘC",
        "translations": {
            "vi": "PHÁT HÀNH, CHO R A MẮT"
        }
    },
    {
        "id": "lei-22",
        "topic": "Leisure Time, Community",
        "word": "anonymous",
        "phonetic": "",
        "pos": "adj",
        "meaning": "GIẤU T ÊN, ẨN DANH, NẶC DANH",
        "example": "THE MONE Y W AS DONAT ED BY AN ANONYMOUS BENE FA CT OR.",
        "exampleTranslation": "SỐ TIỀN ĐƯỢC QUY ÊN GÓP BỞI MỘT NHÀ HẢO T ÂM ẨN DANH.",
        "translations": {
            "vi": "GIẤU T ÊN, ẨN DANH, NẶC DANH"
        }
    },
    {
        "id": "lei-23",
        "topic": "Leisure Time, Community",
        "word": "commit",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIAO PHÓ, UỶ THÁC, CAM K Ế T, HỨA",
        "example": "THE GOVERNMENT MUS T COMMIT IT SE LF T O IMPRO VING HEALTHCARE.",
        "exampleTranslation": "CHÍNH PHỦ PHẢI CAM K Ế T CẢI THIỆN CHĂM S ÓC SỨC KHỎE.",
        "translations": {
            "vi": "GIAO PHÓ, UỶ THÁC, CAM K Ế T, HỨA"
        }
    },
    {
        "id": "lei-24",
        "topic": "Leisure Time, Community",
        "word": "audience",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHÁN GIẢ, THÍNH GIẢ",
        "example": "THE AUDIENCE WAS/WERE CLEARLY DELIGHTED WITH THE PERFORMANCE.",
        "exampleTranslation": "KHÁN GIẢ RÕ RÀNG RẤT VUI MỪNG VỚI MÀN TRÌNH DIỄN.",
        "translations": {
            "vi": "KHÁN GIẢ, THÍNH GIẢ"
        }
    },
    {
        "id": "lei-25",
        "topic": "Leisure Time, Community",
        "word": "author",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TÁC GIẢ",
        "example": "HE IS THE AUTHOR OF TWO BOOKS ON FRENCH HISTORY.",
        "exampleTranslation": "ÔNG LÀ TÁC GIẢ CỦA HAI CUỐN SÁCH VỀ LỊCH SỬ PHÁP.",
        "translations": {
            "vi": "TÁC GIẢ"
        }
    },
    {
        "id": "lei-26",
        "topic": "Leisure Time, Community",
        "word": "antique",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐỒ CỔ",
        "example": "MY MOTHER COLLECTS ANTIQUES.",
        "exampleTranslation": "MẸ TÔI SƯU TẦM ĐỒ CỔ",
        "translations": {
            "vi": "ĐỒ CỔ"
        }
    },
    {
        "id": "lei-27",
        "topic": "Leisure Time, Community",
        "word": "manuscript",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BẢN VIẾT TAY, BẢN THẢO",
        "example": "HE SENT THE 400-PAGE MANUSCRIPT TO HIS PUBLISHER.",
        "exampleTranslation": "ÔNG ĐÃ GỬI BẢN THẢO 400 TRANG CHO NHÀ XUẤT BẢN CỦA MÌNH.",
        "translations": {
            "vi": "BẢN VIẾT TAY, BẢN THẢO"
        }
    },
    {
        "id": "lei-28",
        "topic": "Leisure Time, Community",
        "word": "advocate",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI ỦNG HỘ, NGƯỜI BIỆN HỘ",
        "example": "HE'S A STRONG ADVOCATE OF STATE OWNERSHIP OF THE RAILWAYS.",
        "exampleTranslation": "ÔNG ẤY LÀ NGƯỜI ỦNG HỘ MẠNH MẼ QUYỀN SỞ HỮU NHÀ NƯỚC ĐỐI VỚI ĐƯỜNG SẮT.",
        "translations": {
            "vi": "NGƯỜI ỦNG HỘ, NGƯỜI BIỆN HỘ"
        }
    },
    // ==========================================
    // TOPIC 5: MARKETING (mkt-01 → mkt-63)
    // ==========================================
    {
        "id": "mkt-01",
        "topic": "Marketing",
        "word": "survey",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CUỘC KHẢO S ÁT, CUỘC THĂM DÒ",
        "example": "THE SUR VEY IS ONLY CONCERNED WITH W OMEN O F CHILDBEARING AGE.",
        "exampleTranslation": "CUỘC KHẢO S ÁT CHỈ QUAN T ÂM ĐẾN PHỤ NỮ TRONG ĐỘ TUỔI SINH ĐẺ.",
        "translations": {
            "vi": "CUỘC KHẢO S ÁT, CUỘC THĂM DÒ"
        }
    },
    {
        "id": "mkt-02",
        "topic": "Marketing",
        "word": "analysis",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ PHÂN TÍCH",
        "example": "CHEMICAL ANALY SIS R EVE ALED A HIGH CONT ENT O F COPPER.",
        "exampleTranslation": "PHÂN TÍCH HÓA HỌC CHO THẤY HÀM LƯỢNG ĐỒNG CAO.",
        "translations": {
            "vi": "SỰ PHÂN TÍCH"
        }
    },
    {
        "id": "mkt-03",
        "topic": "Marketing",
        "word": "monopoly",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐỘC QUY ỀN, V ẬT ĐỘC QUY ỀN",
        "example": "IS MICR OSOF T A MONOPOLYfi",
        "exampleTranslation": "MICR OS O MICR OSOF T CÓ ĐỘC QUY ỀN KHÔNGfi",
        "translations": {
            "vi": "SỰ ĐỘC QUY ỀN, V ẬT ĐỘC QUY ỀN"
        }
    },
    {
        "id": "mkt-04",
        "topic": "Marketing",
        "word": "competition",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CẠNH TR ANH, CUỘC THI",
        "example": "THER E' S A LO T THER E' S A LOT O F COMPE TITION BE TW EEN COMPUT ER COMPANIE S.",
        "exampleTranslation": "CÓ R ẤT NHIỀU SỰ CẠNH TR ANH GIỮA CÁC CÔNG TY MÁY TÍNH. CONSISTENTLY NHẤT QUÁN, LUÔN LUÔN",
        "translations": {
            "vi": "SỰ CẠNH TR ANH, CUỘC THI"
        }
    },
    {
        "id": "mkt-05",
        "topic": "Marketing",
        "word": "demand",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NHU CẦU",
        "example": "YOU CAN 'T GIVE IN TO CHILDREN'S DEMANDS ALL THE TIME.",
        "exampleTranslation": "BẠN KHÔNG THỂ LÚC NÀO CŨNG PHẢI NHƯỢNG BỘ NHỮNG NHU CẦU CỦA TR Ẻ.",
        "translations": {
            "vi": "NHU CẦU"
        }
    },
    {
        "id": "mkt-06",
        "topic": "Marketing",
        "word": "expand",
        "phonetic": "",
        "pos": "verb",
        "meaning": "MỞ R ỘNG",
        "example": "THE AIR IN THE BALLOON E XPANDS WHEN HEAT ED. TED",
        "exampleTranslation": "KHÔNG KHÍ TRONG BÓNG NỞ R A KHI BỊ NUNG NÓNG. KHÔNG KHÍ TRO",
        "translations": {
            "vi": "MỞ R ỘNG"
        }
    },
    {
        "id": "mkt-07",
        "topic": "Marketing",
        "word": "advanced",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TIÊN TIẾN, CAO CẤP",
        "example": "THIS IS THE MOST ADVANCED TYPE O F ENGINE AVAILABLE.",
        "exampleTranslation": "ĐÂY LÀ LOẠI ĐỘNG CƠ TIÊN TIẾN NHẤT HIỆN CÓ.",
        "translations": {
            "vi": "TIÊN TIẾN, CAO CẤP"
        }
    },
    {
        "id": "mkt-08",
        "topic": "Marketing",
        "word": "postpone",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TRÌ HOÃN, HOÃN LẠI",
        "example": "THEY DECIDED TO POS TPONE THEIR HOLIDAY UNTIL NEXT YEAR.",
        "exampleTranslation": "HỌ QUY ẾT ĐỊNH HOÃN KỲ NGHỈ CỦA MÌNH CHO ĐẾN NĂM SAU.",
        "translations": {
            "vi": "TRÌ HOÃN, HOÃN LẠI"
        }
    },
    {
        "id": "mkt-09",
        "topic": "Marketing",
        "word": "additional",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THÊM VÀO, BỔ SUNG V ÀO",
        "example": "THER E WILL BE AN E XTR A CHAR GE F OR ANY ADDITIONAL PAS SE NGER S.",
        "exampleTranslation": "SẼ CÓ MỘT KHOẢN PHỤ PHÍ CHO BẤT KỲ HÀNH KHÁCH BỔ SUNG NÀ O.",
        "translations": {
            "vi": "THÊM VÀO, BỔ SUNG V ÀO"
        }
    },
    {
        "id": "mkt-10",
        "topic": "Marketing",
        "word": "examine",
        "phonetic": "",
        "pos": "verb",
        "meaning": "XEM X ÉT, KIỂM TRA, ĐIỀU TRA",
        "example": "HE S QUATTED DOWN AND E XAMINED THE FRONT WHEEL OF HIS BIKE.",
        "exampleTranslation": "ANH NGỒI X ỔM XUỐNG V À XEM X ÉT BÁNH TRƯỚC CỦA CHIẾC XE ĐẠP CỦA MÌNH.",
        "translations": {
            "vi": "XEM X ÉT, KIỂM TRA, ĐIỀU TRA"
        }
    },
    {
        "id": "mkt-11",
        "topic": "Marketing",
        "word": "like",
        "phonetic": "",
        "pos": "verb",
        "meaning": "Y ÊU THÍCH",
        "example": "I LIKE YOUR NEW HAIRCUT.",
        "exampleTranslation": "TÔI THÍCH KIỂU TÓC MỚI CỦA BẠN.",
        "translations": {
            "vi": "Y ÊU THÍCH"
        }
    },
    {
        "id": "mkt-12",
        "topic": "Marketing",
        "word": "especially",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐẶC BIỆ T",
        "example": "SHE 'S NOT E SPECIALLY INT ER ESTE D IN SPORT.",
        "exampleTranslation": "CÔ ẤY KHÔNG ĐẶC BIỆ T QUAN T ÂM ĐẾN THỂ THAO.",
        "translations": {
            "vi": "ĐẶC BIỆ T"
        }
    },
    {
        "id": "mkt-13",
        "topic": "Marketing",
        "word": "reserve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẶT TRƯỚC, DỰ TRỮ, ĐỂ DÀNH",
        "example": "I'M AWFULLY SORRY, BUT WE'VE FORGO TTEN TO RESERVE YOU A TABLE. V E Y OU",
        "exampleTranslation": "TÔI VÔ CÙNG XIN LỖI, NHƯNG CHÚNG TÔI ĐÃ QUÊN ĐẶT BÀN CHO BẠN.",
        "translations": {
            "vi": "ĐẶT TRƯỚC, DỰ TRỮ, ĐỂ DÀNH"
        }
    },
    {
        "id": "mkt-14",
        "topic": "Marketing",
        "word": "cooperate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HỢP T ÁC",
        "example": "JILL R E FUS ED T O COOPER AT E WITH THE ENQUIR Y.",
        "exampleTranslation": "JILL TỪ CHỐI HỢP T ÁC V ỚI CUỘC ĐIỀU TR A.",
        "translations": {
            "vi": "HỢP T ÁC"
        }
    },
    {
        "id": "mkt-15",
        "topic": "Marketing",
        "word": "very",
        "phonetic": "",
        "pos": "adv",
        "meaning": "R ẤT, HẾ T SỨC",
        "example": "THE SITUATION IS VERY SERIOUS.",
        "exampleTranslation": "TÌNH HÌNH R ẤT NGHIÊM TR ỌNG.",
        "translations": {
            "vi": "R ẤT, HẾ T SỨC"
        }
    },
    {
        "id": "mkt-16",
        "topic": "Marketing",
        "word": "consecutive",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LIÊN TIẾP, LIÊN TỤC, LIỀN NHAU",
        "example": "HE DID 300 CONSECUTIVE PRESS-UPS.",
        "exampleTranslation": "ANH ẤY ĐÃ THỰC HIỆN 300 LẦN ẤN LIÊN TỤC.",
        "translations": {
            "vi": "LIÊN TIẾP, LIÊN TỤC, LIỀN NHAU"
        }
    },
    {
        "id": "mkt-17",
        "topic": "Marketing",
        "word": "expectation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ MONG MUỐN, KỲ V ỌNG, DỰ KIẾN",
        "example": "I HAVE HIGH E XPECT ATIONS F OR THIS JOB",
        "exampleTranslation": "TÔI CÓ KỲ V ỌNG CAO CHO CÔNG VIỆC NÀ Y",
        "translations": {
            "vi": "SỰ MONG MUỐN, KỲ V ỌNG, DỰ KIẾN"
        }
    },
    {
        "id": "mkt-18",
        "topic": "Marketing",
        "word": "raise",
        "phonetic": "",
        "pos": "verb",
        "meaning": "T ĂNG LÊN, NÂNG LÊN, ĐỀ XUẤT, ĐƯA R A",
        "example": "HE R AIS ED THE WINDO W AND LEANED OUT.",
        "exampleTranslation": "ANH NÂNG CỬA S Ổ V À NGHIÊNG NGƯỜI R A NGOÀI.",
        "translations": {
            "vi": "T ĂNG LÊN, NÂNG LÊN, ĐỀ XUẤT, ĐƯA R A"
        }
    },
    {
        "id": "mkt-19",
        "topic": "Marketing",
        "word": "extremely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "V Ô CÙNG, CỰC K Ỳ",
        "example": "SHE 'S E XTR EMELY BEAUTIFUL.",
        "exampleTranslation": "CÔ ẤY CỰC KỲ XINH ĐẸP.",
        "translations": {
            "vi": "V Ô CÙNG, CỰC K Ỳ"
        }
    },
    {
        "id": "mkt-20",
        "topic": "Marketing",
        "word": "probable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NHIỀU KHẢ NĂNG, CÓ THỂ,",
        "example": "THE PR OBABLE CAU SE O F DEATH W AS HEART FAILURE. AUSE O F DEATH W AS HE",
        "exampleTranslation": "NGUY ÊN NHÂN CÓ THỂ GÂY TỬ V ONG LÀ DO SUY TIM.",
        "translations": {
            "vi": "NHIỀU KHẢ NĂNG, CÓ THỂ,"
        }
    },
    {
        "id": "mkt-21",
        "topic": "Marketing",
        "word": "focus",
        "phonetic": "",
        "pos": "verb",
        "meaning": "T ẬP TRUNG",
        "example": "I'M ﬁNDING IT HAR D T O F OCUS T ODAY.",
        "exampleTranslation": "T ÔI CẢM THẤY KHÓ T ẬP TRUNG V ÀO NGÀY HÔM NAY.",
        "translations": {
            "vi": "T ẬP TRUNG"
        }
    },
    {
        "id": "mkt-22",
        "topic": "Marketing",
        "word": "impact",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ẢNH HƯỞNG, SỰ TÁC ĐỘNG",
        "example": "THIS DECISION WILL HAVE A DISASTROUS IMPACT ON FOREIGN POLICY.",
        "exampleTranslation": "QUYẾT ĐỊNH NÀY SẼ CÓ TÁC ĐỘNG TAI HẠI ĐẾN CHÍNH SÁCH ĐỐI NGOẠI.",
        "translations": {
            "vi": "SỰ ẢNH HƯỞNG, SỰ TÁC ĐỘNG"
        }
    },
    {
        "id": "mkt-23",
        "topic": "Marketing",
        "word": "comparison",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ SO SÁNH",
        "example": "THEY MADE A COMPARISON OF DIﬀERENT COUNTRIES' EATING HABITS.",
        "exampleTranslation": "HỌ ĐÃ LÀM SỰ SO SÁNH VỀ THÓI QUEN ĂN UỐNG HVỀT H CỦA CÁC QUỐC GIA KHÁC NHAU.",
        "translations": {
            "vi": "SỰ SO SÁNH"
        }
    },
    {
        "id": "mkt-24",
        "topic": "Marketing",
        "word": "gap",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỖ HỎNG, KẼ HỞ, KHOẢNG TRẮNG",
        "example": "THERE IS A GAP IN THE MAGAZINE MARKET THAT NEEDS TO BE ﬁLLED.",
        "exampleTranslation": "CÓ MỘT KHOẢNG TRỐNG TRÊN THỊ TRƯỜNG TẠP CHÍ CẦN ĐƯỢC LẤP ĐẦY.",
        "translations": {
            "vi": "LỖ HỎNG, KẼ HỞ, KHOẢNG TRẮNG"
        }
    },
    {
        "id": "mkt-25",
        "topic": "Marketing",
        "word": "mounting",
        "phonetic": "",
        "pos": "adj",
        "meaning": "T ĂNG DẦN LÊN",
        "example": "THER E W AS MOUNTING PR ES SUR E ON HIM T O R ES IGN.",
        "exampleTranslation": "NGÀY CÀNG CÓ NHIỀU ÁP LỰC T ĂNG DẦN LÊN BUỘC ANH T A PHẢI TỪ CHỨC.",
        "translations": {
            "vi": "T ĂNG DẦN LÊN"
        }
    },
    {
        "id": "mkt-26",
        "topic": "Marketing",
        "word": "ctiv",
        "phonetic": "",
        "pos": "adj",
        "meaning": "PHẢN CHIẾU, PHẢN ÁNH",
        "example": "I S TICK RE ﬂECTIV E T APE ON MY S CHOOL BAG.",
        "exampleTranslation": "TÔI DÁN BĂNG DÍNH PHẢN QUANG TR ÊN CẶP ĐI HỌC CỦA T ÔI.",
        "translations": {
            "vi": "PHẢN CHIẾU, PHẢN ÁNH"
        }
    },
    {
        "id": "mkt-27",
        "topic": "Marketing",
        "word": "appreciate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐÁNH GIÁ CAO, CẢM KÍCH,",
        "example": "I APPR ECIAT E THAT IT' S A DIﬃCULT DECISION F OR Y OU T O MAK E.",
        "exampleTranslation": "TÔI ĐÁNH GIÁ CAO R ẰNG ĐÓ LÀ MỘT QUY ẾT ĐỊNH KHÓ KHĂN ĐỐI V ỚI BẠN.",
        "translations": {
            "vi": "ĐÁNH GIÁ CAO, CẢM KÍCH,"
        }
    },
    {
        "id": "mkt-28",
        "topic": "Marketing",
        "word": "publicize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "QUẢNG CÁO, ĐƯA R A CÔNG KHAI",
        "example": "O F HOMELE S SNE SS.",
        "exampleTranslation": "LUNA ĐÃ GIÚP CÔNG KHAI V ẤN ĐỀ V Ô GIA CƯ.",
        "translations": {
            "vi": "QUẢNG CÁO, ĐƯA R A CÔNG KHAI"
        }
    },
    {
        "id": "mkt-29",
        "topic": "Marketing",
        "word": "target",
        "phonetic": "",
        "pos": "noun",
        "meaning": "MỤC TIÊU, ĐÍCH",
        "example": "AIM F OR THE DEAD CENTR E O F THE T AR GE T.",
        "exampleTranslation": "NHẮM V ÀO TRUNG T ÂM CHẾ T CỦA MỤC TIÊU. TÂ M CHẾ T CỦA MỤC",
        "translations": {
            "vi": "MỤC TIÊU, ĐÍCH"
        }
    },
    {
        "id": "mkt-30",
        "topic": "Marketing",
        "word": "campaign",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHIẾN DỊCH, CUỘC V ẬN ĐỘNG",
        "example": "A CONTR OVE RS IAL NEW ADV ERTISING CAMPAIGN. W ADV ERTIS I",
        "exampleTranslation": "MỘT CHIẾN DỊCH QUẢNG CÁO MỚI GÂY TR ANH CÃI",
        "translations": {
            "vi": "CHIẾN DỊCH, CUỘC V ẬN ĐỘNG"
        }
    },
    {
        "id": "mkt-31",
        "topic": "Marketing",
        "word": "marginal",
        "phonetic": "",
        "pos": "adj",
        "meaning": "Ở MÉP, NGOÀI LỀ, KHÔNG ĐÁNG K Ể",
        "example": "THE MARGINAL TORY CONSTITUENCY WAS HELD BY 2,200 VOTES.",
        "exampleTranslation": "KHU VỰC BẦU CỬ CẬN BIÊN TO RY ĐƯỢC 2.200 PHIẾU BẦU.",
        "translations": {
            "vi": "Ở MÉP, NGOÀI LỀ, KHÔNG ĐÁNG K Ể"
        }
    },
    {
        "id": "mkt-32",
        "topic": "Marketing",
        "word": "instantly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "NGAY KHI, NGAY LẬP TỨC",
        "example": "BOTH DRIV ER S WERE KILLED INS T ANTLY.",
        "exampleTranslation": "CẢ HAI T ÀI X Ế ĐỀU THIỆ T MẠNG NGAY LẬP TỨC.",
        "translations": {
            "vi": "NGAY KHI, NGAY LẬP TỨC"
        }
    },
    {
        "id": "mkt-33",
        "topic": "Marketing",
        "word": "creative",
        "phonetic": "",
        "pos": "adj",
        "meaning": "S ÁNG T ẠO",
        "example": "THE DES IGNER IS EITHER A CR EATIV E GENIUS OR COMPLE T ELY BONK ER S.",
        "exampleTranslation": "NHÀ THIẾ T K Ế HOẶC LÀ MỘT THIÊN T ÀI S ÁNG T ẠO HOẶC HOÀN T OÀN THÍCH THÚ.",
        "translations": {
            "vi": "S ÁNG T ẠO"
        }
    },
    {
        "id": "mkt-34",
        "topic": "Marketing",
        "word": "aggressively",
        "phonetic": "",
        "pos": "adv",
        "meaning": "X ÔNG X ÁO, TÍCH CỰC",
        "example": "THE MUSIC F ESTIVAL IS NOW MARKETED AGGRESSIVELY AROUND THE COUNTRY.",
        "exampleTranslation": "LỄ HỘI ÂM NHẠC HIỆN ĐANG ĐƯỢC TÍCH CỰC MẠNH MẼ TRÊN KHẮP CẢ NƯỚC.",
        "translations": {
            "vi": "X ÔNG X ÁO, TÍCH CỰC"
        }
    },
    {
        "id": "mkt-35",
        "topic": "Marketing",
        "word": "strategy",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHIẾN LƯỢC",
        "example": "FOLLOW THIS STRATEGY FOR AVOIDING MINOR MISTAKES.",
        "exampleTranslation": "THỰC HIỆN THEO CHIẾN LƯỢC NÀY ĐỂ TRÁNH NHỮNG SAI LẦM NHỎ.",
        "translations": {
            "vi": "CHIẾN LƯỢC"
        }
    },
    {
        "id": "mkt-36",
        "topic": "Marketing",
        "word": "indicate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BIỂU THỊ, CHỈ RA",
        "example": "THESE STATISTICS MIGHT INDICATE QUALITY PROBLEMS.",
        "exampleTranslation": "NHỮNG THỐNG KÊ NÀY CÓ THỂ CHỈ RA CÁC V ẤN ĐỀ VỀ CHẤT LƯỢNG.",
        "translations": {
            "vi": "BIỂU THỊ, CHỈ RA"
        }
    },
    {
        "id": "mkt-37",
        "topic": "Marketing",
        "word": "attract",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THU HÚT, LÔI CUỐN",
        "example": "THE CIRCUS IS ATTRACTING HUGE CROWD S/AUDIENCES. ACTING HUGE CROWD SA",
        "exampleTranslation": "RẠP XIẾC ĐANG THU HÚT LƯỢNG KHÁN GIẢ RẤT LỚN.",
        "translations": {
            "vi": "THU HÚT, LÔI CUỐN"
        }
    },
    {
        "id": "mkt-38",
        "topic": "Marketing",
        "word": "experience",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KINH NGHIỆM, SỰ TRẢI NGHIỆM",
        "example": "I KNOW FROM EXPERIENCE THAT TONY NEVER KEEPS HIS PROMISES.",
        "exampleTranslation": "TÔI BIẾT TỪ KINH NGHIỆM RẰNG TONY KHÔNG BAO GIỜ GIỮ LỜI HỨA CỦA MÌNH.",
        "translations": {
            "vi": "KINH NGHIỆM, SỰ TRẢI NGHIỆM"
        }
    },
    {
        "id": "mkt-39",
        "topic": "Marketing",
        "word": "analyze",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÂN TÍCH",
        "example": "ONE O F THE PROBLEMS IN ANALYZING THE SITUATION IS THAT W E DO NOT HAVE ALL THE INFORMATION YET.",
        "exampleTranslation": "MỘT TRONG NHỮNG VẤN ĐỀ KHI PHÂN TÍCH TÌNH HÌNH LÀ CHÚNG TA CHƯA CÓ ĐẦY ĐỦ THÔNG TIN.",
        "translations": {
            "vi": "PHÂN TÍCH"
        }
    },
    {
        "id": "mkt-40",
        "topic": "Marketing",
        "word": "advise",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KHUY ÊN NHỦ, TƯ V ẤN",
        "example": "HIS DOCT OR ADVIS ED HIM AGAINS T SMOKING.",
        "exampleTranslation": "BÁC SĨ KHUY ÊN ANH KHÔNG NÊN HÚT THUỐC. SUBSCRIBE (BÁO, TẠP CHÍ)",
        "translations": {
            "vi": "KHUY ÊN NHỦ, TƯ V ẤN"
        }
    },
    {
        "id": "mkt-41",
        "topic": "Marketing",
        "word": "means",
        "phonetic": "",
        "pos": "noun",
        "meaning": "PHƯƠNG TIỆN, CÁCH",
        "example": "THEY HAD NO MEANS OF COMMUNICATION.",
        "exampleTranslation": "HỌ KHÔNG CÓ PHƯƠNG TIỆN LIÊN LẠC.",
        "translations": {
            "vi": "PHƯƠNG TIỆN, CÁCH"
        }
    },
    {
        "id": "mkt-42",
        "topic": "Marketing",
        "word": "prefer",
        "phonetic": "",
        "pos": "verb",
        "meaning": "Y ÊU THÍCH HƠN (NHỮNG CÁI KHÁC)",
        "example": "I PREFER RED WINE TO WHITE.",
        "exampleTranslation": "TÔI THÍCH RƯỢU VANG ĐỎ HƠN RƯỢU VANG TRẮNG.",
        "translations": {
            "vi": "Y ÊU THÍCH HƠN (NHỮNG CÁI KHÁC)"
        }
    },
    {
        "id": "mkt-43",
        "topic": "Marketing",
        "word": "advantage",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỢI ÍCH, LỢI THẾ",
        "example": "THE ADVANTAGE OF BOOKING TICKETS IN ADVANCE IS THAT YOU GET BETTER SEATS.",
        "exampleTranslation": "ƯU ĐIỂM CỦA VIỆC ĐẶT VÉ TRƯỚC LÀ BẠN SẼ CÓ ĐƯỢC CHỖ NGỒI TỐT HƠN.",
        "translations": {
            "vi": "LỢI ÍCH, LỢI THẾ"
        }
    },
    {
        "id": "mkt-44",
        "topic": "Marketing",
        "word": "steadily",
        "phonetic": "",
        "pos": "adv",
        "meaning": "VỮNG CHẮC, BÌNH TĨNH, KIÊN ĐỊNH",
        "example": "HE LOOK ED S T EADILY AT HIS UNCLE.",
        "exampleTranslation": "ANH KIÊN ĐỊNH NHÌN CHÚ CỦA MÌNH.",
        "translations": {
            "vi": "VỮNG CHẮC, BÌNH TĨNH, KIÊN ĐỊNH"
        }
    },
    {
        "id": "mkt-45",
        "topic": "Marketing",
        "word": "necessarily",
        "phonetic": "",
        "pos": "verb",
        "meaning": "T ẤT Y ẾU, NHẤT THIẾ T",
        "example": "THAT' S NOT NEC ESS ARILY TRUE.",
        "exampleTranslation": "ĐIỀU ĐÓ KHÔNG NHẤT THIẾ T PHẢI ĐÚNG.",
        "translations": {
            "vi": "T ẤT Y ẾU, NHẤT THIẾ T"
        }
    },
    {
        "id": "mkt-46",
        "topic": "Marketing",
        "word": "detect",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÁT HIỆN R A, KHÁM PHÁ RA",
        "example": "SOME S OUNDS CANNOT BE DE T ECT ED BY THE HUMAN EAR.",
        "exampleTranslation": "T AI NGƯỜI KHÔNG THỂ PHÁT HIỆN MỘT S Ố ÂM THANH.",
        "translations": {
            "vi": "PHÁT HIỆN R A, KHÁM PHÁ RA"
        }
    },
    {
        "id": "mkt-47",
        "topic": "Marketing",
        "word": "cover",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BAO GỒM, THANH T OÁN, CHE PHỦ",
        "example": "SNO W C OVE R ED THE HILLSIDE S.",
        "exampleTranslation": "TU YẾ T PHỦ TR ẮNG CÁC SƯỜN ĐỒI.",
        "translations": {
            "vi": "BAO GỒM, THANH T OÁN, CHE PHỦ"
        }
    },
    {
        "id": "mkt-48",
        "topic": "Marketing",
        "word": "less",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ÍT HƠN, K ÉM HƠN",
        "example": "WE’ V E GOT T O SPEND LE S S MONE Y.",
        "exampleTranslation": "CHÚNG T A PHẢI TIÊU ÍT TIỀN HƠN.",
        "translations": {
            "vi": "ÍT HƠN, K ÉM HƠN"
        }
    },
    {
        "id": "mkt-49",
        "topic": "Marketing",
        "word": "majority",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐA S Ố, S Ố ĐÔNG",
        "example": "THE MAJORITY O F THE EMPLOYE ES HAVE UNIV ER SI TY DEGR EE S.",
        "exampleTranslation": "ĐA S Ố NHÂN VIÊN CÓ TRÌNH ĐỘ ĐẠI HỌC.",
        "translations": {
            "vi": "ĐA S Ố, S Ố ĐÔNG"
        }
    },
    {
        "id": "mkt-50",
        "topic": "Marketing",
        "word": "adopt",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THÔNG QUA, LỰA CHỌN, LÀM THEO",
        "example": "THE PRIME MINIS T ER HAS ADOPT ED AN INﬂE XIBLE POSITION ON IMMIGR ATION.",
        "exampleTranslation": "THỦ TƯỚNG ĐÃ THÔNG QUA MỘT QUAN ĐIỂM KHÔNG LINH HOẠT V Ề V ẤN ĐỀ NHẬP CƯ.",
        "translations": {
            "vi": "THÔNG QUA, LỰA CHỌN, LÀM THEO"
        }
    },
    {
        "id": "mkt-51",
        "topic": "Marketing",
        "word": "largely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TR ÊN QUY MÔ LỚN, PHẦN LỚN",
        "example": "MY ADVICE W AS LAR GELY IGNOR ED.",
        "exampleTranslation": "LỜI KHUY ÊN CỦA T ÔI PHẦN LỚN ĐÃ BỊ BỎ QUA.",
        "translations": {
            "vi": "TR ÊN QUY MÔ LỚN, PHẦN LỚN"
        }
    },
    {
        "id": "mkt-52",
        "topic": "Marketing",
        "word": "incentive",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ KHÍCH LỆ, ƯU ĐÃI",
        "example": "TAX INCENTI VES ARE S OMETIME S E ﬀE CTIV E IN ENCOUR AGING PEOPLE T O S AV E MONE Y.",
        "exampleTranslation": "SỰ ƯU ĐÃI THUẾ ĐÔI KHI CÓ HIỆU QUẢ TRONG VIỆC KHUY ẾN KHÍCH MỌI NGƯỜI TIẾ T KIỆM TIỀN.",
        "translations": {
            "vi": "SỰ KHÍCH LỆ, ƯU ĐÃI"
        }
    },
    {
        "id": "mkt-53",
        "topic": "Marketing",
        "word": "need",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NHU CẦU, SỰ CẦN THIẾ T",
        "example": "THER E’ S A GR O WING NEED F OR LOW- COS T HOUSING.",
        "exampleTranslation": "NGÀY CÀNG CÓ NHIỀU NHU CẦU V Ề NHÀ Ở GIÁ R Ẻ.",
        "translations": {
            "vi": "NHU CẦU, SỰ CẦN THIẾ T"
        }
    },
    {
        "id": "mkt-54",
        "topic": "Marketing",
        "word": "advertisement",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUẢNG CÁO",
        "example": "SHE S CANNED THE JOB ADV ERTIS EMENT S IN THE PAPER.",
        "exampleTranslation": "CÔ LƯỚT QUA NHỮNG MẨU QUẢNG CÁO TUY ỂN DỤNG TR ÊN BÁO.",
        "translations": {
            "vi": "QUẢNG CÁO"
        }
    },
    {
        "id": "mkt-55",
        "topic": "Marketing",
        "word": "aim",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NHẮM T ỚI, CÓ MỤC ĐÍC H",
        "example": "WE ALWAYS AIM T O GIV E OUR CLIENT S PER SONAL ATTE NTION.",
        "exampleTranslation": "CHÚNG T ÔI LUÔN HƯỚNG T ỚI SỰ QUAN T ÂM CÁ NHÂN CỦA KHÁCH HÀNG.",
        "translations": {
            "vi": "NHẮM T ỚI, CÓ MỤC ĐÍC H"
        }
    },
    {
        "id": "mkt-56",
        "topic": "Marketing",
        "word": "introduce",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIỚI THIỆU, ĐƯA R A",
        "example": "THE GOVERNMENT INTR ODUCED A LAW PR OHIBITING T OBACCO ADV ERTIS EMENT S ON TV.",
        "exampleTranslation": "CHÍNH PHỦ ĐƯA R A LUẬT CẤM QUẢNG CÁO THUỐC LÁ TR ÊN TV.",
        "translations": {
            "vi": "GIỚI THIỆU, ĐƯA R A"
        }
    },
    {
        "id": "mkt-57",
        "topic": "Marketing",
        "word": "absense",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ V ẮNG MẶT, NGHỈ; SỰ THIẾU, KHÔNG C Ó",
        "example": "I'M DEPUTIZING F OR THE DIR ECT OR DURING HIS ABS ENCE.",
        "exampleTranslation": "T ÔI S Ẽ THAY MẶT GIÁM ĐỐC TRONG THỜI GIAN ÔNG ẤY V ẮNG MẶT.",
        "translations": {
            "vi": "SỰ V ẮNG MẶT, NGHỈ; SỰ THIẾU, KHÔNG C Ó"
        }
    },
    {
        "id": "mkt-58",
        "topic": "Marketing",
        "word": "forward",
        "phonetic": "",
        "pos": "adv",
        "meaning": "V Ề PHÍA TRƯỚC; TIẾN BỘ",
        "example": "COME F ORW AR D A BIT AND S T AND ON THE LINE.",
        "exampleTranslation": "ĐI V Ề PHÍA TRƯỚC MỘT CHÚT V À ĐỨNG TR ÊN HÀNG.",
        "translations": {
            "vi": "V Ề PHÍA TRƯỚC; TIẾN BỘ"
        }
    },
    {
        "id": "mkt-59",
        "topic": "Marketing",
        "word": "contemporary",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐƯƠNG THỜI, HIỆN ĐẠI",
        "example": "SHE IS WIDELY R EGAR DED AS THE HIGH PRIESTES S O F CONT EMPOR ARY DANC E.",
        "exampleTranslation": "CÔ ĐƯỢC NHIỀU NGƯỜI COI LÀ NỮ TU SĨ CAO CẤP CỦA MÚA ĐƯƠNG ĐẠI.",
        "translations": {
            "vi": "ĐƯƠNG THỜI, HIỆN ĐẠI"
        }
    },
    {
        "id": "mkt-60",
        "topic": "Marketing",
        "word": "discussion",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THẢO LUẬN, SỰ TR ANH LUẬN",
        "example": "THER E W AS S OME LIV ELY DIS CUS SION AT THE MEE TING.",
        "exampleTranslation": "CÓ MỘT S Ố SỰ TR ANH LUẬN S ÔI NỔI T ẠI CUỘC HỌP.",
        "translations": {
            "vi": "SỰ THẢO LUẬN, SỰ TR ANH LUẬN"
        }
    },
    {
        "id": "mkt-61",
        "topic": "Marketing",
        "word": "initial",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BAN ĐẦU, LÚC ĐẦ U",
        "example": "THE INITIAL EARTHQUAK E W AS F OLLOWED BY A S ERIE S O F AF TE RS HOCK S.",
        "exampleTranslation": "TR ẬN ĐỘNG ĐẤT BAN ĐẦU ĐƯỢC THEO S AU BỞI MỘT LOẠT DƯ CHẤN.",
        "translations": {
            "vi": "BAN ĐẦU, LÚC ĐẦ U"
        }
    },
    {
        "id": "mkt-62",
        "topic": "Marketing",
        "word": "resolve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIẢI QUY Ế T, KIÊN QUY ẾT",
        "example": "HAVE Y OU R ES OLV ED THE PR OBLEM O F TRANSPORT Y E Tfi",
        "exampleTranslation": "BẠN ĐÃ GIẢI QUY Ế T VẤN ĐỀ V ẬN CHUY ỂN CHƯAfi Ế T V ẤN ĐỀ V ẬN CHUYỂ",
        "translations": {
            "vi": "GIẢI QUY Ế T, KIÊN QUY ẾT"
        }
    },
    {
        "id": "mkt-63",
        "topic": "Marketing",
        "word": "disregard",
        "phonetic": "",
        "pos": "verb",
        "meaning": "XEM NHẸ, KHÔNG ĐẾM XỈA ĐẾN",
        "example": "HE T OLD O DISR EGAR D EVE RYTHING W E'D LEARNED S O F AR AND S TA RT AGAIN.",
        "exampleTranslation": "ANH ẤY NÓI V ỚI CHÚNG TÔ I RẰ NG HÃY BỎ QUA T ẤT CẢ NHỮNG GÌ CHÚNG T ÔI ĐÃ HỌC ĐƯỢC CHO ĐẾN NAY V À BẮT ĐẦU LẠI.",
        "translations": {
            "vi": "XEM NHẸ, KHÔNG ĐẾM XỈA ĐẾN"
        }
    },
    // ==========================================
    // TOPIC 6: ECONOMY (eco-01 → eco-35)
    // ==========================================
    {
        "id": "eco-01",
        "topic": "Economy",
        "word": "dramatically",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐỘT NGỘT, ĐÁNG KỂ",
        "example": "YOUR LIF E CHANGE S DR AMATICALLY WHEN Y OU HAVE A BABY T O TA K E CARE O F.",
        "exampleTranslation": "CUỘC S ỐNG CỦA BẠN THAY ĐỔI ĐÁNG K Ể KHI BẠN CÓ EM BÉ ĐỂ CHĂM S ÓC.",
        "translations": {
            "vi": "ĐỘT NGỘT, ĐÁNG KỂ"
        }
    },
    {
        "id": "eco-02",
        "topic": "Economy",
        "word": "unstable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KHÔNG ỔN ĐỊNH, KHÔNG BỀN VỮNG",
        "example": "HE’S EMOTIONALLY UNSTABLE.",
        "exampleTranslation": "ANH ẤY KHÔNG ỔN ĐỊNH VỀ MẶT CẢM XÚC.",
        "translations": {
            "vi": "KHÔNG ỔN ĐỊNH, KHÔNG BỀN VỮNG"
        }
    },
    {
        "id": "eco-03",
        "topic": "Economy",
        "word": "rapidly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "NHANH CHÓNG, MAU LẸ",
        "example": "THINGS ARE CHANGING VERY R APIDLY. ARE",
        "exampleTranslation": "MỌI THỨ ĐANG THAY ĐỔI R ẤT NHANH CHÓNG. I RẤT NHANH C",
        "translations": {
            "vi": "NHANH CHÓNG, MAU LẸ"
        }
    },
    {
        "id": "eco-04",
        "topic": "Economy",
        "word": "assert",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KHẲNG ĐỊNH, QUẢ QUYẾT, ĐÒI",
        "example": "I REALLY MUST ASSERT MYSELF MORE IN MEETINGS.",
        "exampleTranslation": "TÔI THỰC SỰ PHẢI KHẲNG ĐỊNH MÌNH NHIỀU HƠN TRONG CÁC CUỘC HỌP.",
        "translations": {
            "vi": "KHẲNG ĐỊNH, QUẢ QUYẾT, ĐÒI"
        }
    },
    {
        "id": "eco-05",
        "topic": "Economy",
        "word": "potential",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TIỀM NĂNG, CÓ KHẢ NĂNG",
        "example": "A NUMBER O F POTENTIAL BUYERS HAVE E XPRESSED INTEREST IN THE COMPANY.",
        "exampleTranslation": "MỘT S Ố NGƯỜI MUA TIỀM NĂNG ĐÃ BÀY TỎ SỰ QUAN TÂM ĐẾN CÔNG TY.",
        "translations": {
            "vi": "TIỀM NĂNG, CÓ KHẢ NĂNG"
        }
    },
    {
        "id": "eco-06",
        "topic": "Economy",
        "word": "pleased",
        "phonetic": "",
        "pos": "adj",
        "meaning": "HÀI LÒNG, VUI",
        "example": "I'M R EALLY PLEAS ED WITH Y OUR W ORK THIS T ERM.",
        "exampleTranslation": "T ÔI THỰC SỰ HÀI LÒNG V ỚI CÔNG VIỆC CỦA BẠN TRONG HỌC KỲ NÀ Y.",
        "translations": {
            "vi": "HÀI LÒNG, VUI"
        }
    },
    {
        "id": "eco-07",
        "topic": "Economy",
        "word": "remain",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIỮ NGUY ÊN, V ẪN, CÒN NHƯ C Ũ",
        "example": "HE R EMAINED SILENT.",
        "exampleTranslation": "ANH ẤY V ẪN GIỮ IM LẶNG",
        "translations": {
            "vi": "GIỮ NGUY ÊN, V ẪN, CÒN NHƯ C Ũ"
        }
    },
    {
        "id": "eco-08",
        "topic": "Economy",
        "word": "limited",
        "phonetic": "/THE",
        "pos": "adj",
        "meaning": "BỊ GIỚI HẠN, HẠN CHẾ",
        "example": "I ONLY HAVE A LIMIT ED KNO WLEDGE O F SPANISH. ONLY HAVE",
        "exampleTranslation": "TÔI CHỈ CÓ MỘT KIẾN THỨC HẠN CHẾ V Ề TIẾNG T ÂY BAN NHA.",
        "translations": {
            "vi": "BỊ GIỚI HẠN, HẠN CHẾ"
        }
    },
    {
        "id": "eco-09",
        "topic": "Economy",
        "word": "particular",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐẶC BIỆ T, ĐẶC THÙ, CHI TIẾT",
        "example": "SHE W ANT ED A PARTICULAR TYPE OF CACTUS.",
        "exampleTranslation": "CÔ ẤY MUỐN MỘT LOẠI XƯƠNG R ỒNG ĐẶC BIỆ T.",
        "translations": {
            "vi": "ĐẶC BIỆ T, ĐẶC THÙ, CHI TIẾT"
        }
    },
    {
        "id": "eco-10",
        "topic": "Economy",
        "word": "evenly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CÔNG BẰNG, ĐỀU, NGANG BẰNG NHAU",
        "example": "DIVIDE THE MIXTUR E EVE NLY BE TW EEN THE BAKING PANS.",
        "exampleTranslation": "CHIA ĐỀU HỖN HỢP GIỮA CÁC KHAY NƯỚNG.",
        "translations": {
            "vi": "CÔNG BẰNG, ĐỀU, NGANG BẰNG NHAU"
        }
    },
    {
        "id": "eco-11",
        "topic": "Economy",
        "word": "prospect",
        "phonetic": "",
        "pos": "noun",
        "meaning": "VIỄN CẢNH, TRIỂN V ỌNG",
        "example": "THER E' S EVE RY PR OSPECT OF SUCCE SS.",
        "exampleTranslation": "CÓ MỌI TRIỂN V ỌNG THÀNH CÔNG. LEAD T ẠO NÊN (K Ế T QUẢ NÀO ĐÓ)",
        "translations": {
            "vi": "VIỄN CẢNH, TRIỂN V ỌNG"
        }
    },
    {
        "id": "eco-12",
        "topic": "Economy",
        "word": "period",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THỜI KỲ, GIAI ĐOẠN, KHOẢNG THỜI GIAN",
        "example": "HE W AS ONE O F THE MOS T IMPORT ANT WRIT ER S O F THAT PERIOD.",
        "exampleTranslation": "ÔNG LÀ MỘT TRONG NHỮNG NHÀ V ĂN QUAN TR ỌNG NHẤT CỦA THỜI KỲ ĐÓ.",
        "translations": {
            "vi": "THỜI KỲ, GIAI ĐOẠN, KHOẢNG THỜI GIAN"
        }
    },
    {
        "id": "eco-13",
        "topic": "Economy",
        "word": "industry",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CÔNG NGHIỆP, NGÀNH, NGHỀ",
        "example": "THE CITY NEEDS T O AT TR ACT MOR E INDUST RY.",
        "exampleTranslation": "THÀNH PHỐ C Ầ THÀNH PHỐ CẦN THU HÚT NHIỀU NGÀNH CÔNG NGHIỆP HƠN.",
        "translations": {
            "vi": "CÔNG NGHIỆP, NGÀNH, NGHỀ"
        }
    },
    {
        "id": "eco-14",
        "topic": "Economy",
        "word": "likely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CÓ KHẢ NĂNG, CÓ THỂ X ẢY R A",
        "example": "AS LIK ELY AS NOT, SHE 'LL END UP IN COURT O V ER THIS PR OBLEM.",
        "exampleTranslation": "CÓ KHẢ NĂNG LÀ KHÔNG, CÔ ẤY S Ẽ PHẢI R A TÒA VÌ V ẤN ĐỀ NÀY.",
        "translations": {
            "vi": "CÓ KHẢ NĂNG, CÓ THỂ X ẢY R A"
        }
    },
    {
        "id": "eco-15",
        "topic": "Economy",
        "word": "director",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GIÁM ĐỐC, NGƯỜI CHỈ ĐẠO",
        "example": "SHE HAS BECOMETHE DIR ECT OR O F THE NEW INF ORMATION CENTR E.",
        "exampleTranslation": "CÔ ẤY ĐÃ TR Ở THÀNH GIÁM ĐỐC CỦA TRUNG T ÂM THÔNG TIN MỚI.",
        "translations": {
            "vi": "GIÁM ĐỐC, NGƯỜI CHỈ ĐẠO"
        }
    },
    {
        "id": "eco-16",
        "topic": "Economy",
        "word": "substitute",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜIV ẬT THAY THẾ",
        "example": "JOHNS ON CAME ON AS A SUB ST ITUT E T OWA RD S THE END O F THE GAME.",
        "exampleTranslation": "JOHNS ON V ÀO S ÂN THAY NGƯỜI Ở CUỐI TR ẬN.",
        "translations": {
            "vi": "NGƯỜIV ẬT THAY THẾ"
        }
    },
    {
        "id": "eco-17",
        "topic": "Economy",
        "word": "fairly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CÔNG BẰNG, NGAY THẲNG, KHA KHÁ",
        "example": "THE Y HAVE ALWAYS DEALT HONESTLY AND F AIRLY HONE ST LY A FA IRLY WITH THEIR CUS TOMER S.",
        "exampleTranslation": "HỌ LUÔN ĐỐI XỬ TRUNG THỰC V À CÔNG BẰNG V ỚI KHÁCH HÀNG CỦA HỌ.",
        "translations": {
            "vi": "CÔNG BẰNG, NGAY THẲNG, KHA KHÁ"
        }
    },
    {
        "id": "eco-18",
        "topic": "Economy",
        "word": "economical",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TIẾ T KIỆM, KINH T Ế",
        "example": "WHAT' S THE MOS T ECONOMICAL W AY O F HEATING THIS BUILDINGfi",
        "exampleTranslation": "CÁCH TIẾ T KIỆM NHẤT ĐỂ SƯỞI ẤM T ÒA NHÀ NÀY LÀ GÌfi",
        "translations": {
            "vi": "TIẾ T KIỆM, KINH T Ế"
        }
    },
    {
        "id": "eco-19",
        "topic": "Economy",
        "word": "implication",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ LIÊN QUAN, SỰ DÍNH LÍU, HÀM Ý",
        "example": "FR OM WHAT SHE S AID, THE IMPLICATION W AS THAT THE Y WERE SPLIT TING UP.",
        "exampleTranslation": "T Ừ NHỮNG GÌ CÔ ẤY NÓI, HÀM Ý R ẰNG HỌ ĐANG CHIA T AY.",
        "translations": {
            "vi": "SỰ LIÊN QUAN, SỰ DÍNH LÍU, HÀM Ý"
        }
    },
    {
        "id": "eco-20",
        "topic": "Economy",
        "word": "prosperity",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ HƯNG THỊNH, SỰ PHÁT ĐẠT",
        "example": "WE NEED T O DRIV E GR O WTH AND CRE AT E JOBS AND PR OSPERI TY.",
        "exampleTranslation": "CHÚNG T A CẦN THÚC ĐẨY T ĂNG TRƯỞNG, T ẠO CÔNG ĂN VIỆC LÀM V À SỰ HƯNG THỊNH.",
        "translations": {
            "vi": "SỰ HƯNG THỊNH, SỰ PHÁT ĐẠT"
        }
    },
    {
        "id": "eco-21",
        "topic": "Economy",
        "word": "promising",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐẦY HỨA HẸN, NHIỀU TRIỂN V ỌNG",
        "example": "THE Y W ON THE AW AR D F OR THE MOS T PR OMISING NEW BAND O F THE Y EAR.",
        "exampleTranslation": "HỌ ĐÃ GIÀNH ĐƯỢC GIẢI THƯỞNG CHO BAN NHẠC MỚI TRIỂN V ỌNG NHẤT CỦA NĂM.",
        "translations": {
            "vi": "ĐẦY HỨA HẸN, NHIỀU TRIỂN V ỌNG"
        }
    },
    {
        "id": "eco-22",
        "topic": "Economy",
        "word": "stagnant",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TRÌ TR Ệ, UỂ OẢI, LỜ ĐỜ",
        "example": "JOBS BECOME SCA RC E IN A S T AGNANT ECONOM Y. N A ST AGNANT CONOMY.",
        "exampleTranslation": "VIỆC LÀM TR Ở NÊN KHAN HIẾM TRONG NỀN KINH T Ế TRÌ TR Ệ.",
        "translations": {
            "vi": "TRÌ TR Ệ, UỂ OẢI, LỜ ĐỜ"
        }
    },
    {
        "id": "eco-23",
        "topic": "Economy",
        "word": "soar",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BAY VÚT LÊN, T ĂNG VỌ T",
        "example": "ALL NIGHT LONG ﬁR EWO RK S S OARE D INT O THE SKY.",
        "exampleTranslation": "PHÁO HOA K ÉO DÀI SUỐT ĐÊM BAY VÚT LÊN BẦU TR ỜI.",
        "translations": {
            "vi": "BAY VÚT LÊN, T ĂNG VỌ T"
        }
    },
    {
        "id": "eco-24",
        "topic": "Economy",
        "word": "boost",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NÂNG LÊN, THÚC ĐẨY",
        "example": "THE THEATR E MANAGED T O BOOS T IT S AUDIENCE S BY CUT TING TICK E T PRIC ES.",
        "exampleTranslation": "NHÀ HÁT ĐÃ CỐ GẮNG THU HÚT KHÁN GIẢ CỦA MÌNH BẰNG CÁCH GIẢM GIÁ V É.",
        "translations": {
            "vi": "NÂNG LÊN, THÚC ĐẨY"
        }
    },
    {
        "id": "eco-25",
        "topic": "Economy",
        "word": "costly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "T ỐN K ÉM, ĐẮT TIỀN",
        "example": "THIS PR OCEDUR E CAN BE VERY COS TLY.",
        "exampleTranslation": "THỦ TỤC NÀY CÓ THỂ R ẤT T ỐN K ÉM.",
        "translations": {
            "vi": "T ỐN K ÉM, ĐẮT TIỀN"
        }
    },
    {
        "id": "eco-26",
        "topic": "Economy",
        "word": "drastic",
        "phonetic": "",
        "pos": "adj",
        "meaning": "MẠNH MẼ, QUYẾ T LIỆT",
        "example": "MANY EMPLOYEES HAVE HAD TO TAKE DRASTIC CUTS IN PAY.",
        "exampleTranslation": "NHIỀU NHÂN VIÊN ĐÃ PHẢI CẮT GIẢM LƯƠNG MẠNH MẼ.",
        "translations": {
            "vi": "MẠNH MẼ, QUYẾ T LIỆT"
        }
    },
    {
        "id": "eco-27",
        "topic": "Economy",
        "word": "evidence",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BẰNG CHỨNG, DẤU HIỆU",
        "example": "THE POLICE HAVE FOUND NO EVIDENCE OF A TERRORIST LINK WITH THE MURDER.",
        "exampleTranslation": "CẢNH SÁT KHÔNG TÌM THẤY BẰNG CHỨNG VỀ MỐI LIÊN HỆ GIỮA KHỦNG BỐ VỚI VỤ GIẾT NGƯỜI.",
        "translations": {
            "vi": "BẰNG CHỨNG, DẤU HIỆU"
        }
    },
    {
        "id": "eco-28",
        "topic": "Economy",
        "word": "fall",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIẢM XUỐNG (GIÁ CẢ, GIÁ TRỊ)",
        "example": "THE TEMPERATURE COULD FALL BELOW ZERO OVERNIGHT.",
        "exampleTranslation": "NHIỆT ĐỘ CÓ THỂ GIẢM XUỐNG DƯỚI 0 TRONG MỘT ĐÊM.",
        "translations": {
            "vi": "GIẢM XUỐNG (GIÁ CẢ, GIÁ TRỊ)"
        }
    },
    {
        "id": "eco-29",
        "topic": "Economy",
        "word": "indicator",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHỈ SỐ",
        "example": "COMMODITY PRICES CAN BE A INDICATOR OF INﬂATION, HE CLAIMED.",
        "exampleTranslation": "ÔNG KHẲNG ĐỊNH, GIÁ CẢ HÀNG HÓA CÓ THỂ LÀ MỘT CHỈ SỐ HỮU ÍCH VỀ LẠM PHÁT.",
        "translations": {
            "vi": "CHỈ SỐ"
        }
    },
    {
        "id": "eco-30",
        "topic": "Economy",
        "word": "consequence",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HẬU QUẢ, HỆ QUẢ, K Ế T QUẢ",
        "example": "THE MONE Y W AS O F LIT TLE CONS EQUENCE T O T ONY.",
        "exampleTranslation": "SỐ TIỀN KHÔNG ẢNH HƯỞNG NHIỀU ĐẾN T ON Y.",
        "translations": {
            "vi": "HẬU QUẢ, HỆ QUẢ, K Ế T QUẢ"
        }
    },
    {
        "id": "eco-31",
        "topic": "Economy",
        "word": "thrive",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÁT TRIỂN MẠNH, PHÁT ĐẠT",
        "example": "HIS BUSINE SS THRIV ED IN THE Y EAR S BE FO RE THE W AR.",
        "exampleTranslation": "CÔNG VIỆC KINH DOANH CỦA ÔNG PHÁT ĐẠT TRONG NHỮNG NĂM TRƯỚC CHIẾN TR ANH.",
        "translations": {
            "vi": "PHÁT TRIỂN MẠNH, PHÁT ĐẠT"
        }
    },
    {
        "id": "eco-32",
        "topic": "Economy",
        "word": "depression",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ SỤT GIÁ, TÌNH TR ẠNG ĐÌNH TR Ệ",
        "example": "THE S T OCK MARK E T CR ASH MARK ED THE S TA RT O F A S EVE R E DEPRESS ION.",
        "exampleTranslation": "SỰ SỤP ĐỔ CỦA THỊ TRƯỜNG CHỨNG KHOÁN ĐÁNH DẤU SỰ KHỞI ĐẦU CỦA MỘT ĐỢT SỤT GIÁ TR ẦM TR ỌNG.",
        "translations": {
            "vi": "SỰ SỤT GIÁ, TÌNH TR ẠNG ĐÌNH TR Ệ"
        }
    },
    {
        "id": "eco-33",
        "topic": "Economy",
        "word": "dwindle",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THU NHỎ LẠI, GIẢM",
        "example": "THE COMMUNITY HAD DWINDLED T O A T ENTH O F IT S F ORMER SIZ E. ZE.",
        "exampleTranslation": "CỘNG ĐỒNG ĐÃ GIẢM XUỐNG CÒN MỘT PHẦN MƯỜI S O V ỚI QUY MÔ TRƯỚC ĐÂY CỦA NÓ.",
        "translations": {
            "vi": "THU NHỎ LẠI, GIẢM"
        }
    },
    {
        "id": "eco-34",
        "topic": "Economy",
        "word": "impede",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CẢN TR Ở, NGĂN CẢN",
        "example": "ALTHOUGH HE 'S SHY, IT CERTAINLY HASN 'T IMPEDED HIS CAREER IN ANY W AY.",
        "exampleTranslation": "MẶC DÙ ANH ẤY NHÚT NHÁT, NHƯNG NÓ CHẮC CHẮN TN HÁTN KHÔNG CẢN TR Ở S Ự KHÔNG CẢN TR Ở SỰ NGHIỆP CỦA ANH ẤY THEO BẤT KỲ CÁCH NÀO.",
        "translations": {
            "vi": "CẢN TR Ở, NGĂN CẢN"
        }
    },
    {
        "id": "eco-35",
        "topic": "Economy",
        "word": "adveristy",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ BẤT LỢI, NGHỊCH CẢNH",
        "example": "THE R OAD T O HAPPINE S S IS PAV ED WITH ADV ER SITI ES.",
        "exampleTranslation": "CON ĐƯỜNG ĐẾN V ỚI HẠNH PHÚC ĐƯỢC LÁT BẰNG NHỮNG NGHỊCH CẢNH.",
        "translations": {
            "vi": "SỰ BẤT LỢI, NGHỊCH CẢNH"
        }
    },
    // ==========================================
    // TOPIC 7: SHOPPING (sho-01 → sho-29)
    // ==========================================
    {
        "id": "sho-01",
        "topic": "Shopping",
        "word": "exactly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CHÍNH XÁC, ĐÚNG",
        "example": "THE JOURNEY TOOK EXACTLY THREE HOURS.",
        "exampleTranslation": "CUỘC HÀNH TRÌNH KÉO DÀI ĐÚNG BA GIỜ.",
        "translations": {
            "vi": "CHÍNH XÁC, ĐÚNG"
        }
    },
    {
        "id": "sho-02",
        "topic": "Shopping",
        "word": "charge",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TIỀN PHẢI TRẢ, PHÍ; NHIỆM VỤ, TRÁCH NHIỆM",
        "example": "W E WILL DELIVER TO YOUR HOME FREE O F CHARGE.",
        "exampleTranslation": "CHÚNG TÔI SẼ GIAO HÀNG TẬN NHÀ MIỄN PHÍ PHÍ.",
        "translations": {
            "vi": "TIỀN PHẢI TRẢ, PHÍ; NHIỆM VỤ, TRÁCH NHIỆM"
        }
    },
    {
        "id": "sho-03",
        "topic": "Shopping",
        "word": "experience",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ KINH NGHIỆM, LÃO LUY ỆN",
        "example": "I DON 'T THINK SHE HAS THE E XPERIENCE F OR THE JOB",
        "exampleTranslation": "TÔI KHÔNG NGHĨ CÔ ẤY CÓ KINH NGHIỆM CHO CÔNG VIỆ C",
        "translations": {
            "vi": "CÓ KINH NGHIỆM, LÃO LUY ỆN"
        }
    },
    {
        "id": "sho-04",
        "topic": "Shopping",
        "word": "instruction",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỜI CHỈ DẪN, HƯỚNG DẪN",
        "example": "A PR OPER LE TTER OF INS TRUCTION IS VITAL.",
        "exampleTranslation": "MỘT LÁ THƯ HƯỚNG DẪN THÍCH HỢP LÀ R ẤT QUAN TR ỌNG.",
        "translations": {
            "vi": "LỜI CHỈ DẪN, HƯỚNG DẪN"
        }
    },
    {
        "id": "sho-05",
        "topic": "Shopping",
        "word": "expert",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHUY ÊN GIA",
        "example": "MY MOTHER IS AN E XPERT AT DR ESS -MAKING",
        "exampleTranslation": "MẸ T ÔI LÀ MỘ T MẸ T ÔI LÀ MỘT CHU YÊ N GIA MAY QUẦN ÁO UYÊN GIA MAY QUẦN",
        "translations": {
            "vi": "CHUY ÊN GIA"
        }
    },
    {
        "id": "sho-06",
        "topic": "Shopping",
        "word": "delivery",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ GIAO HÀNG, SỰ PHÂN PHÁT",
        "example": "DELIVERY IS FREE ON ORDERS OVER £30.",
        "exampleTranslation": "SỰ GIAO HÀNG MIỄN PHÍ CHO CÁC ĐƠN ĐẶT HÀNG TRÊN £ 30.",
        "translations": {
            "vi": "SỰ GIAO HÀNG, SỰ PHÂN PHÁT"
        }
    },
    {
        "id": "sho-07",
        "topic": "Shopping",
        "word": "carefully",
        "phonetic": "",
        "pos": "adv",
        "meaning": "MỘT CÁCH CẨN THẬN, THẬN TR ỌNG",
        "example": "IF Y OU LIS TEN CARE FULLY T O THIS PIECE O F MUSIC, Y OU CAN HEAR A ﬂUT E IN THE BACK GR OUND.",
        "exampleTranslation": "NẾU BẠN NGHE BẢN NHẠC NÀY MỘT CÁCH CẨN THẬN, BẠN CÓ THỂ NGHE THẤY MỘT TIẾNG S ÁO Ở PHÍA S AU.",
        "translations": {
            "vi": "MỘT CÁCH CẨN THẬN, THẬN TR ỌNG"
        }
    },
    {
        "id": "sho-08",
        "topic": "Shopping",
        "word": "exclusively",
        "phonetic": "",
        "pos": "adv",
        "meaning": "RIÊNG, DÀNH RIÊNG",
        "example": "THIS O ﬀER IS AV AILABLE E XC LUSI VE LY T O OUR EST ABLISHED CUS T OMER S.",
        "exampleTranslation": "ƯU ĐÃI NÀY CHỈ DÀNH RIÊNG CHO CÁC KHÁCH HÀNG ĐÃ THÀNH LẬP CỦA CHÚNG T ÔI.",
        "translations": {
            "vi": "RIÊNG, DÀNH RIÊNG"
        }
    },
    {
        "id": "sho-09",
        "topic": "Shopping",
        "word": "description",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ MIÊU T Ả, SỰ MÔ T Ả",
        "example": "W RIT E A DE S CRIPTION O F Y OUR F AV OURIT E BEACH.",
        "exampleTranslation": "VI Ế T MÔ T Ả V Ề BÃI BIỂN Y ÊU THÍCH CỦA BẠN.",
        "translations": {
            "vi": "SỰ MIÊU T Ả, SỰ MÔ T Ả"
        }
    },
    {
        "id": "sho-10",
        "topic": "Shopping",
        "word": "relatively",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CÓ LIÊN QUAN, TƯƠNG ĐỐI, VỪA PHẢI",
        "example": "THE THIR D CANDIDAT E F OR THE PARTY LEADER SHIP IS A R ELATIV ELY UNKNO WN QUANTITY.",
        "exampleTranslation": "ỨNG CỬ VIÊN THỨ BA CHO VỊ TRÍ LÃNH ĐẠO ĐẢNG LÀ MỘT S Ố LƯỢNG TƯƠNG ĐỐI KHÔNG R Õ.",
        "translations": {
            "vi": "CÓ LIÊN QUAN, TƯƠNG ĐỐI, VỪA PHẢI"
        }
    },
    {
        "id": "sho-11",
        "topic": "Shopping",
        "word": "preparation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CHUẨN BỊ",
        "example": "THE T EACHER DIDN 'T S EEM T O HAVE DONE MUCH PR EPAR ATION F OR THE CLASS.",
        "exampleTranslation": "GIÁO VIÊN DƯỜNG NHƯ KHÔNG CHUẨN BỊ NHIỀU CHO LỚP HỌC.",
        "translations": {
            "vi": "SỰ CHUẨN BỊ"
        }
    },
    {
        "id": "sho-12",
        "topic": "Shopping",
        "word": "area",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHU VỰC, VÙNG, LĨNH VỰC",
        "example": "ALL AREAS O F THE COUNTRY WILL HAVE S OME R AIN T ONIGHT.",
        "exampleTranslation": "CÁC KHU VỰC TR ÊN CẢ NƯỚC ĐÊM NAY S Ẽ CÓ MƯA V ÀI NƠI.",
        "translations": {
            "vi": "KHU VỰC, VÙNG, LĨNH VỰC"
        }
    },
    {
        "id": "sho-13",
        "topic": "Shopping",
        "word": "alter",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THAY ĐỔI, SỬA ĐỔI",
        "example": "WE 'V E HAD T O ALT ER S OME O F OUR PLANS.",
        "exampleTranslation": "CHÚNG T ÔI ĐÃ PHẢI THAY ĐỔI MỘT S Ố K Ế HOẠCH CỦA MÌNH.",
        "translations": {
            "vi": "THAY ĐỔI, SỬA ĐỔI"
        }
    },
    {
        "id": "sho-14",
        "topic": "Shopping",
        "word": "apply",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NỘP ĐƠN, ỨNG TUY ỂN, ÁP DỤNG",
        "example": "I'V E APPLIED F OR A NEW JOB WITH THE LOCAL N EW SPAPER. NEW SPAPER",
        "exampleTranslation": "T ÔI ĐÃ NỘP ĐƠN CHO MỘT CÔNG VIỆC MỚI V ỚI T Ờ BÁO ĐỊA PHƯƠNG.",
        "translations": {
            "vi": "NỘP ĐƠN, ỨNG TUY ỂN, ÁP DỤNG"
        }
    },
    {
        "id": "sho-15",
        "topic": "Shopping",
        "word": "mutually",
        "phonetic": "",
        "pos": "adv",
        "meaning": "V ỚI NHAU, LẪN NHAU, QUA LẠI",
        "example": "IT WILL BE A MUTUALLY BENE ﬁCIAL PR O JECT.",
        "exampleTranslation": "NÓ S Ẽ LÀ MỘT DỰ ÁN ĐÔI BÊN CÓ LỢI V ỚI NHAU.",
        "translations": {
            "vi": "V ỚI NHAU, LẪN NHAU, QUA LẠI"
        }
    },
    {
        "id": "sho-16",
        "topic": "Shopping",
        "word": "qualify",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỦ ĐIỀU KIỆN, ĐỦ KHẢ NĂNG",
        "example": "IT TAKES THREE Y EARS TO QUALIFY AS A SOCIAL WORKER.",
        "exampleTranslation": "PHẢI MẤT BA NĂM ĐỂ ĐỦ ĐIỀU KIỆN TRỞ THÀNH MỘT NHÂN VIÊN XÃ HỘI.",
        "translations": {
            "vi": "ĐỦ ĐIỀU KIỆN, ĐỦ KHẢ NĂNG"
        }
    },
    {
        "id": "sho-17",
        "topic": "Shopping",
        "word": "valid",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ HIỆU LỰC, HỢP LÝ, HỢP LỆ",
        "example": "MY WAY OF THINKING MIGHT BE DIﬀERENT FROM YOURS, BUT IT'S EQUALLY VALID.",
        "exampleTranslation": "CÁCH SUY NGHĨ CỦA TÔI CÓ THỂ KHÁC VỚI BẠN, NHƯNG NÓ ĐỀU CÓ HIỆU LỰC NHƯ NHAU.",
        "translations": {
            "vi": "CÓ HIỆU LỰC, HỢP LÝ, HỢP LỆ"
        }
    },
    {
        "id": "sho-18",
        "topic": "Shopping",
        "word": "installmant",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TRẢ GÓP",
        "example": "WE AGREED TO PAY FOR THE CAR BY/IN INSTALLMENTS.",
        "exampleTranslation": "CHÚNG TÔI ĐÃ ĐỒNG Ý SỰ TRẢ GÓP CHO CHIẾC XE.",
        "translations": {
            "vi": "SỰ TRẢ GÓP"
        }
    },
    {
        "id": "sho-19",
        "topic": "Shopping",
        "word": "auction",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CUỘC ĐẤU GIÁ, SỰ BÁN ĐẤU GIÁ",
        "example": "THE PAINTING WILL BE SOLD AT AUCTION NEXT WEEK.",
        "exampleTranslation": "BỨC TRANH SẼ ĐƯỢC BÁN ĐẤU GIÁ VÀO TUẦN SAU.",
        "translations": {
            "vi": "CUỘC ĐẤU GIÁ, SỰ BÁN ĐẤU GIÁ"
        }
    },
    {
        "id": "sho-20",
        "topic": "Shopping",
        "word": "authentic",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THẬT, ĐÍCH THỰC, ĐÁNG TIN",
        "example": "HE W AS THER E AND S AW WHAT HAPPENED, S O HIS IS THE ONLY AUTHENTIC ACCOUNT.",
        "exampleTranslation": "ANH ẤY ĐÃ Ở ĐÓ V À NHÌN THẤY NHỮNG GÌ ĐÃ X ẢY R A, VÌ V ẬY ANH ẤY LÀ T ÀI KHOẢN ĐÁNG TIN DUY NHẤT.",
        "translations": {
            "vi": "THẬT, ĐÍCH THỰC, ĐÁNG TIN"
        }
    },
    {
        "id": "sho-21",
        "topic": "Shopping",
        "word": "warranty",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GIẤY BẢO HÀNH, SỰ BẢO HÀNH",
        "example": "THE LAPT OP CAN BE R EPAIR ED F OR FR EE IF IT' S S TILL UNDER W ARR ANT Y.",
        "exampleTranslation": "MÁY TÍNH X ÁCH T AY CÓ THỂ ĐƯỢC SỬA CHỮA MIỄN PHÍ NẾU NÓ V ẪN CÒN GIẤY BẢO HÀNH.",
        "translations": {
            "vi": "GIẤY BẢO HÀNH, SỰ BẢO HÀNH"
        }
    },
    {
        "id": "sho-22",
        "topic": "Shopping",
        "word": "receipt",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BIÊN LAI",
        "example": "MAK E SURE YOU ARE GIVEN A RECEIPT FOR EVERYTHING YOU BUY.",
        "exampleTranslation": "ĐẢM BẢO R ẰNG BẠN ĐƯỢC CUNG CẤP BIÊN LAI CHO MỌI THỨ BẠN MUA.",
        "translations": {
            "vi": "BIÊN LAI"
        }
    },
    {
        "id": "sho-23",
        "topic": "Shopping",
        "word": "spare",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỂ DÀNH, MIỄN CHO, KHÔNG CẦN ĐẾN",
        "example": "I KEEP MY SPARE CHANGE IN A JAR.",
        "exampleTranslation": "TÔI ĐỂ DÀNH TIỀN LẺ DỰ PHÒNG CỦA MÌNH TRONG MỘT CÁI LỌ. CLEARANCE SỰ DỌN QUANG, KHOẢNG TR ỐNG",
        "translations": {
            "vi": "ĐỂ DÀNH, MIỄN CHO, KHÔNG CẦN ĐẾN"
        }
    },
    {
        "id": "sho-24",
        "topic": "Shopping",
        "word": "desire",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NIỀM MONG MUỐN, KHÁT KHAO",
        "example": "HE NEEDED TO SATISFY HIS DESIRE FOR REVENGE.",
        "exampleTranslation": "ANH CẦN PHẢI THỎA MÃN MONG MUỐN TRẢ THÙ CỦA MÌNH. REDEEMABLE CÓ THỂ CHUỘC LẠI",
        "translations": {
            "vi": "NIỀM MONG MUỐN, KHÁT KHAO"
        }
    },
    {
        "id": "sho-25",
        "topic": "Shopping",
        "word": "consumption",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TIÊU THỤ, SỰ TIÊU DÙNG",
        "example": "WE NEED TO CUT DOWN ON OUR FUEL CONSUMPTION BY HAVING FEWER CARS ON THE ROAD.",
        "exampleTranslation": "CHÚNG TA CẦN CẮT GIẢM SỰ TIÊU THỤ NHIÊN LIỆU BẰNG CÁCH CÓ ÍT Ô TÔ HƠN TRÊN ĐƯỜNG.",
        "translations": {
            "vi": "SỰ TIÊU THỤ, SỰ TIÊU DÙNG"
        }
    },
    {
        "id": "sho-26",
        "topic": "Shopping",
        "word": "fabric",
        "phonetic": "",
        "pos": "noun",
        "meaning": "V ẢI",
        "example": "THE DES IGNS ARE PRINT ED ONT O THE F ABRIC BY HAND. THE DESIGNS A PRINTED ONTO THE FABR BYHAND",
        "exampleTranslation": "CÁC MẪU THIẾ T K Ế ĐƯỢC IN LÊN V ẢI BẰNG T AY. Ế ĐƯỢC IN LÊN VẢI BẰNG VE NDOR VENDOR ĐẠI LÝ CUNG CẤP",
        "translations": {
            "vi": "V ẢI"
        }
    },
    {
        "id": "sho-27",
        "topic": "Shopping",
        "word": "research",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ NGHIÊN CỨU, ĐIỀU TR A",
        "example": "HE HAS DEDICAT ED HIS LIF E T O S CIENTIﬁC R ES EAR CH.",
        "exampleTranslation": "ÔNG ĐÃ DÀNH CẢ CUỘC ĐỜI CỦA MÌNH CHO NGHIÊN CỨU KHOA HỌC.",
        "translations": {
            "vi": "SỰ NGHIÊN CỨU, ĐIỀU TR A"
        }
    },
    {
        "id": "sho-28",
        "topic": "Shopping",
        "word": "devise",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÁT MINH, S ÁNG T ẠO",
        "example": "THE UMBR ELLA W AS INGENIOUSLY DE VIS ED T O F OLD UP INT O Y OUR POCK E T.",
        "exampleTranslation": "CHIẾC Ô ĐÃ ĐƯỢC T ẠO R A MỘT CÁCH T ÀI TÌNH ĐỂ GẤP LẠI CHO V ÀO TÚI CỦA BẠN.",
        "translations": {
            "vi": "PHÁT MINH, S ÁNG T ẠO"
        }
    },
    {
        "id": "sho-29",
        "topic": "Shopping",
        "word": "innovative",
        "phonetic": "",
        "pos": "adj",
        "meaning": "T ÂN TIẾN, ĐỔI MỚI",
        "example": "GW EN INTR ODUCED A NUMBER O F INNOVATIV E S OLUTIONS. GWEN INTR ODUC E",
        "exampleTranslation": "GW EN ĐÃ GIỚI THIỆU MỘT S Ố GIẢI PHÁP ĐỔI MỚI. GWEN ĐÃ",
        "translations": {
            "vi": "T ÂN TIẾN, ĐỔI MỚI"
        }
    },
    // ==========================================
    // TOPIC 8: PRODUCT DEVELOPMENT (pde-01 → pde-35)
    // ==========================================
    {
        "id": "pde-01",
        "topic": "Product Development",
        "word": "intend",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỊNH, CÓ Ý ĐỊNH",
        "example": "I DON 'T THINK SHE INTENDED METO HEAR THE REMARK.",
        "exampleTranslation": "T ÔI KHÔNG NGHĨ CÔ ẤY MUỐN TÔI NGHE NHẬN XÉT ĐÓ.",
        "translations": {
            "vi": "ĐỊNH, CÓ Ý ĐỊNH"
        }
    },
    {
        "id": "pde-02",
        "topic": "Product Development",
        "word": "allow",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHO PHÉP, PHÊ DUYỆT, CHẤP THUẬN",
        "example": "YOU'RE NOT ALLOWE D TO TALK DURING THE EXAM.",
        "exampleTranslation": "BẠN KHÔNG ĐƯỢC PHÉP NÓI CHUYỆN TRONG KỲ THI.",
        "translations": {
            "vi": "CHO PHÉP, PHÊ DUYỆT, CHẤP THUẬN"
        }
    },
    {
        "id": "pde-03",
        "topic": "Product Development",
        "word": "inspect",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KIỂM TRA, THANH TRA",
        "example": "SHE HELD THE BANK NOTE UP T O THE LIGHT AND INSPECTED IT CAREFULLY.",
        "exampleTranslation": "CÔ ĐƯA TỜ TIỀN LÊN ÁNH SÁNG VÀ KIỂM TRA NÓ MỘT CÁCH CẨN THẬN.",
        "translations": {
            "vi": "KIỂM TRA, THANH TRA"
        }
    },
    {
        "id": "pde-04",
        "topic": "Product Development",
        "word": "improve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CẢI TIẾN",
        "example": "HE DID A LOT TO IMPROVE CONDITIONS FOR FACTORY WORKERS.",
        "exampleTranslation": "ANH ẤY ĐÃ LÀM RẤT NHIỀU ĐỂ CẢI THIỆN ĐIỀU KIỆN CHO CÔNG NHÂN NHÀ MÁY.",
        "translations": {
            "vi": "CẢI TIẾN"
        }
    },
    {
        "id": "pde-05",
        "topic": "Product Development",
        "word": "increasingly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "T ĂNG DẦN",
        "example": "MARKETING TECHNIQUES ARE BECOMING INCREASINGLY SOPHISTICATED.",
        "exampleTranslation": "CÁC KỸ THUẬT TIẾP THỊ NGÀY CÀNG TRỞ NÊN TINH VI.",
        "translations": {
            "vi": "T ĂNG DẦN"
        }
    },
    {
        "id": "pde-06",
        "topic": "Product Development",
        "word": "invest",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẦU TƯ",
        "example": "THE INS TITUT E WILL IN VEST ﬁV E MILLION IN THE PRO JECT.",
        "exampleTranslation": "VIỆN S Ẽ ĐẦU TƯ NĂM TRIỆU V ÀO DỰ ÁN.",
        "translations": {
            "vi": "ĐẦU TƯ"
        }
    },
    {
        "id": "pde-07",
        "topic": "Product Development",
        "word": "upgrade",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CẢI TIẾN, SỰ NÂNG CẤ P",
        "example": "THE BASIC S OF TW ARE IS FR EE BUT Y OU NEED T O PAY F OR ANY UPGR ADES.",
        "exampleTranslation": "PHẦN MỀM CƠ BẢN LÀ MIỄN PHÍ NHƯNG BẠN CẦN PHẢI TR Ả TIỀN CHO BẤT KỲ SỰ NÂNG CẤP NÀO.",
        "translations": {
            "vi": "SỰ CẢI TIẾN, SỰ NÂNG CẤ P"
        }
    },
    {
        "id": "pde-08",
        "topic": "Product Development",
        "word": "explore",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THÁM HIỂM, TÌM T ÒI, KHÁM PHÁ",
        "example": "THE CHILDR EN HAVE GONE E XPLORING IN THE W OODS.",
        "exampleTranslation": "NHỮNG ĐỨA TR Ẻ ĐÃ ĐI KHÁM PHÁ TRONG RỪNG. RESPONSE SỰ HƯỞNG ỨNG",
        "translations": {
            "vi": "THÁM HIỂM, TÌM T ÒI, KHÁM PHÁ"
        }
    },
    {
        "id": "pde-09",
        "topic": "Product Development",
        "word": "appearance",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ XUẤT HIỆN, V Ẻ NGOÀI, DIỆN MẠO",
        "example": "SHE WILL BE MAKING A PUBLIC APPEAR ANC E, SIGNING COPIE S O F HER LAT EST NOVE L.",
        "exampleTranslation": "CÔ ẤY S Ẽ XUẤT HIỆN TRƯỚC CÔNG CHÚNG, KÝ CÁC BẢN S AO CỦA CUỐN TIỂU THUY Ế T MỚI NHẤT CỦA MÌNH.",
        "translations": {
            "vi": "SỰ XUẤT HIỆN, V Ẻ NGOÀI, DIỆN MẠO"
        }
    },
    {
        "id": "pde-10",
        "topic": "Product Development",
        "word": "successful",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THÀNH CÔNG, THÀNH ĐẠ T",
        "example": "MY S ECOND A TTEMPT AT MAKING BR EAD W AS A LIT TLE MOR E SUCCE SSFUL.",
        "exampleTranslation": "LẦN THỬ THỨ HAI CỦA T ÔI LÀ LÀM BÁNH MÌ THÀNH CÔNG HƠN MỘT CHÚT.",
        "translations": {
            "vi": "THÀNH CÔNG, THÀNH ĐẠ T"
        }
    },
    {
        "id": "pde-11",
        "topic": "Product Development",
        "word": "advance",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THÀNH TỰU, SỰ TIẾN BỘ, SỰ THĂNG TIẾN",
        "example": "NOTHING COULD S TO P THE ADV ANCE O F THE ﬂOODWA TE RS.",
        "exampleTranslation": "KHÔNG GÌ CÓ THỂ CẢN BƯỚC TIẾN CỦA DÒNG NƯỚC LŨ.",
        "translations": {
            "vi": "THÀNH TỰU, SỰ TIẾN BỘ, SỰ THĂNG TIẾN"
        }
    },
    {
        "id": "pde-12",
        "topic": "Product Development",
        "word": "reliable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐÁNG TIN CẬY",
        "example": "PRICE ALONE IS NOT A RELIABLE INDICATOR OF QUALITY.",
        "exampleTranslation": "GIÁ CẢ KHÔNG PHẢI LÀ MỘT CHỈ SỐ ĐÁNG TIN CẬY VỀ CHẤT LƯỢNG.",
        "translations": {
            "vi": "ĐÁNG TIN CẬY"
        }
    },
    {
        "id": "pde-13",
        "topic": "Product Development",
        "word": "quality",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHẤT LƯỢNG",
        "example": "THEIR PRODUCTS ARE O F VERY HIGH QUALITY.",
        "exampleTranslation": "SẢN PHẨM CỦA HỌ CÓ CHẤT LƯỢNG RẤT CAO.",
        "translations": {
            "vi": "CHẤT LƯỢNG"
        }
    },
    {
        "id": "pde-14",
        "topic": "Product Development",
        "word": "development",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ PHÁT TRIỂN, SỰ TIẾN TRIỂ N",
        "example": "THE DOCUMENT ARY TR ACED THE D EVE LOPMENT O F POPULAR MUSIC THR OUGH THE AGE S.",
        "exampleTranslation": "BỘ PHIM T ÀI LIỆU ĐÃ THEO DÕI SỰ PHÁT TRIỂN CỦA ÂM NHẠC ĐẠI CHÚNG QUA CÁC THỜI K Ỳ.",
        "translations": {
            "vi": "SỰ PHÁT TRIỂN, SỰ TIẾN TRIỂ N"
        }
    },
    {
        "id": "pde-15",
        "topic": "Product Development",
        "word": "update",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CẬP NHẬT, SỰ NÂNG CẤ P",
        "example": "I'LL NEED R EGULAR UPDAT E S ON Y OUR PR OGR ESS.",
        "exampleTranslation": "T ÔI CẦN SỰ CẬP NHẬT THƯỜNG XUY ÊN V Ề TIẾN TRÌNH CỦA BẠN.",
        "translations": {
            "vi": "SỰ CẬP NHẬT, SỰ NÂNG CẤ P"
        }
    },
    {
        "id": "pde-16",
        "topic": "Product Development",
        "word": "accurate",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐÚNG, CHÍNH X ÁC",
        "example": "HER NO V EL IS AN ACCU RA T E R E ﬂECTION O F LIF E IN SPAIN.",
        "exampleTranslation": "CUỐN TIỂU THUY Ế T CỦA CÔ LÀ SỰ PHẢN ÁNH CHÍNH X ÁC NH CHÍNH XÁC CUỘC S ỐNG Ở T ÂY BAN NHA.",
        "translations": {
            "vi": "ĐÚNG, CHÍNH X ÁC"
        }
    },
    {
        "id": "pde-17",
        "topic": "Product Development",
        "word": "complicated",
        "phonetic": "",
        "pos": "adj",
        "meaning": "PHỨC T ẠP, R ẮC R ỐI",
        "example": "THE RULE S ARE R ATHER COMPLICAT ED T O F OLLO W.",
        "exampleTranslation": "CÁC QUY T ẮC KHÁ PHỨC T ẠP ĐỂ TUÂN THEO. ACCOMPLISHED HOÀN HẢO, CÓ T ÀI NĂNG",
        "translations": {
            "vi": "PHỨC T ẠP, R ẮC R ỐI"
        }
    },
    {
        "id": "pde-18",
        "topic": "Product Development",
        "word": "indication",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BIỂU HIỆN, DẤU HIỆU",
        "example": "HE GAV E NO INDICATION AT ALL O F HIS O WN F EELINGS.",
        "exampleTranslation": "ANH T A KHÔNG CHO BIẾ T BIỂU HIỆN GÌ V Ề CẢM XÚC CỦA CHÍNH MÌNH.",
        "translations": {
            "vi": "BIỂU HIỆN, DẤU HIỆU"
        }
    },
    {
        "id": "pde-19",
        "topic": "Product Development",
        "word": "compatible",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TƯƠNG THÍCH, THÍCH HỢP",
        "example": "IT WAS WHEN W E S TA RT ED LIVING T OGE THER THAT WE F OUND W E JUS T WER EN 'T COMPATIBLE.",
        "exampleTranslation": "KHI BẮT ĐẦU S ỐNG CÙNG NHAU, CHÚNG T ÔI MỚI THẤY MÌNH KHÔNG THÍCH HỢP NHAU.",
        "translations": {
            "vi": "TƯƠNG THÍCH, THÍCH HỢP"
        }
    },
    {
        "id": "pde-20",
        "topic": "Product Development",
        "word": "superior",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CAO, CAO CẤP, TỐ T HƠN",
        "example": "THE Y MAK E S U THE Y MAK E SUPERIOR OUT DOOR PR ODUCT S.",
        "exampleTranslation": "HỌ T ẠO R A CÁC S ẢN PHẨM NGOÀI TR ỜI CAO CẤP. HỌ T ẠO R A C Á ẢN PHẨM NGOÀI TR ỜI C A CẤ P",
        "translations": {
            "vi": "CAO, CAO CẤP, TỐ T HƠN"
        }
    },
    {
        "id": "pde-21",
        "topic": "Product Development",
        "word": "absolute",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TUY Ệ T ĐỐI, HOÀN T OÀN, THUẦN TUÝ",
        "example": "WHEN Y OU'R E S TUCK IN TR AﬃC, A MOBILE PHONE ' S AN AB SO LUT E LIFE -S AV ER.",
        "exampleTranslation": "KHI BẠN BỊ K Ẹ T X E, ĐIỆN THOẠI DI ĐỘNG LÀ MỘT CỨU CÁNH TUY Ệ T ĐỐI.",
        "translations": {
            "vi": "TUY Ệ T ĐỐI, HOÀN T OÀN, THUẦN TUÝ"
        }
    },
    {
        "id": "pde-22",
        "topic": "Product Development",
        "word": "broaden",
        "phonetic": "",
        "pos": "verb",
        "meaning": "MỞ R ỘNG",
        "example": "THE TR ACK BR OADENS AND BECOME S A R OAD AT THIS POINT.",
        "exampleTranslation": "ĐƯỜNG ĐUA MỞ R ỘNG V À TR Ở THÀNH MỘT CON ĐƯỜNG T ẠI THỜI ĐIỂM NÀY.",
        "translations": {
            "vi": "MỞ R ỘNG"
        }
    },
    {
        "id": "pde-23",
        "topic": "Product Development",
        "word": "corrosion",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĂN MÒN",
        "example": "THE S E ALLO Y S PR OT ECT AGAINS T CORR OSION.",
        "exampleTranslation": "CÁC HỢP KIM NÀY BẢO V Ệ CHỐNG LẠI SỰ ĂN MÒN.",
        "translations": {
            "vi": "SỰ ĂN MÒN"
        }
    },
    {
        "id": "pde-24",
        "topic": "Product Development",
        "word": "feature",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐẶC ĐIỂM, TÍNH NĂNG",
        "example": "A UNIQUE F EATUR E O F THES E R OCK SHEL TE RS W AS THAT THE Y WERE DR Y.",
        "exampleTranslation": "MỘT ĐIỂM ĐỘC ĐÁO CỦA NHỮNG HẦM TRÚ ẨN BẰNG ĐÁ NÀY LÀ CHÚNG KHÔ R ÁO.",
        "translations": {
            "vi": "ĐẶC ĐIỂM, TÍNH NĂNG"
        }
    },
    {
        "id": "pde-25",
        "topic": "Product Development",
        "word": "inspiration",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CẢM HỨNG, NGUỒN CẢM HỨNG",
        "example": "HE W ENT T O CHUR CH, PERHAPS S EEKING DIVINE INSPIR ATION.",
        "exampleTranslation": "ANH T A ĐẾN NHÀ THỜ, CÓ LẼ LÀ ĐỂ TÌM KIẾM NGUỒN CẢM HỨNG THIÊNG LIÊNG.",
        "translations": {
            "vi": "CẢM HỨNG, NGUỒN CẢM HỨNG"
        }
    },
    {
        "id": "pde-26",
        "topic": "Product Development",
        "word": "patent",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BẰNG S ÁNG CHẾ, GIẤY ĐĂNG K Ý",
        "example": "THE DRUGS ARE PROTECTED BY PATENT.",
        "exampleTranslation": "CÁC LOẠI THUỐC ĐƯỢC BẢO V Ệ BỞI BẰNG S ÁNG CHẾ.",
        "translations": {
            "vi": "BẰNG S ÁNG CHẾ, GIẤY ĐĂNG K Ý"
        }
    },
    {
        "id": "pde-27",
        "topic": "Product Development",
        "word": "envision",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HÌNH DUNG, MƯỜNG TƯỢNG",
        "example": "HE ENVISIONED A PARTNERSHIP BETWEEN BUSINESS AND GOVERNMENT.",
        "exampleTranslation": "ÔNG ĐÃ HÌNH DUNG RA MỐI QUAN HỆ ĐỐI TÁC GIỮA DOANH NGHIỆP VÀ CHÍNH PHỦ.",
        "translations": {
            "vi": "HÌNH DUNG, MƯỜNG TƯỢNG"
        }
    },
    {
        "id": "pde-28",
        "topic": "Product Development",
        "word": "grant",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BAN, CẤP, THỪA NHẬN, CÔNG NHẬN",
        "example": "THEY GRANTED HER AN ENTRY VISA.",
        "exampleTranslation": "HỌ ĐÃ CẤP THỊ THỰC NHẬP CẢNH CHO CÔ.",
        "translations": {
            "vi": "BAN, CẤP, THỪA NHẬN, CÔNG NHẬN"
        }
    },
    {
        "id": "pde-29",
        "topic": "Product Development",
        "word": "various",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NHIỀU, ĐA DẠNG, KHÁC NHAU",
        "example": "WE HAD VARIOUS PROBLEMS ON OUR JOURNEY.",
        "exampleTranslation": "CHÚNG TÔI ĐÃ GẶP NHIỀU VẤN ĐỀ TRONG CUỘC HÀNH TRÌNH CỦA MÌNH.",
        "translations": {
            "vi": "NHIỀU, ĐA DẠNG, KHÁC NHAU"
        }
    },
    {
        "id": "pde-30",
        "topic": "Product Development",
        "word": "manual",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỔ TAY, SÁCH HƯỚNG DẪN",
        "example": "THE COMPUTER COMES WITH A 600-PAGE INSTRUCTION MANUAL.",
        "exampleTranslation": "MÁY TÍNH ĐI KÈM VỚI SỔ TAY HƯỚNG DẪN 600 TRANG. DOMEST IC (THUỘC) VIỆC NHÀ",
        "translations": {
            "vi": "SỔ TAY, SÁCH HƯỚNG DẪN"
        }
    },
    {
        "id": "pde-31",
        "topic": "Product Development",
        "word": "automate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TỰ ĐỘNG HOÁ",
        "example": "MAS SIV E IN VESTMENT IS NEEDED T O AUT OMAT E THE PRODUCTION PR OC ESS.",
        "exampleTranslation": "CẦN ĐẦU TƯ LỚN ĐỂ TỰ ĐỘNG HÓA QUY TRÌNH S ẢN XUẤT. SPECIﬁCATION Y ÊU CẦU KỸ THUẬT, SỰ CHỈ RÕ",
        "translations": {
            "vi": "TỰ ĐỘNG HOÁ"
        }
    },
    {
        "id": "pde-32",
        "topic": "Product Development",
        "word": "properly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐÚNG ĐẮN, THÍCH ĐÁNG, HỢP LỆ",
        "example": "I'M NOT PROPERLY DRESSED FOR THIS KIND OF WEATHER.",
        "exampleTranslation": "TÔI KHÔNG ĂN MẶC PHÙ HỢP VỚI THỜI TIẾT NHƯ THẾ NÀY.",
        "translations": {
            "vi": "ĐÚNG ĐẮN, THÍCH ĐÁNG, HỢP LỆ"
        }
    },
    {
        "id": "pde-33",
        "topic": "Product Development",
        "word": "safety",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ AN TOÀN, TÍNH AN TOÀN",
        "example": "THE REPORT IS HIGHLY CRITICAL OF SAFETY STANDARDS AT THE FACTORY.",
        "exampleTranslation": "BÁO CÁO ĐÁNH GIÁ CAO CÁC TIÊU CHUẨN AN TOÀN TẠI NHÀ MÁY.",
        "translations": {
            "vi": "SỰ AN TOÀN, TÍNH AN TOÀN"
        }
    },
    {
        "id": "pde-34",
        "topic": "Product Development",
        "word": "precaution",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ PHÒNG NGỪA, SỰ ĐỀ PHÒNG",
        "example": "THEY FAILED TO TAKE THE NECESSARY PRECAUTIONS TO AVOID INFECTION.",
        "exampleTranslation": "HỌ ĐÃ KHÔNG THỰC HIỆN CÁC BIỆN PHÁP PHÒNG NGỪA CẦN THIẾT ĐỂ TRÁNH NHIỄM TRÙNG.",
        "translations": {
            "vi": "SỰ PHÒNG NGỪA, SỰ ĐỀ PHÒNG"
        }
    },
    {
        "id": "pde-35",
        "topic": "Product Development",
        "word": "processing",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CHẾ BIẾN, SỰ GIA CÔNG",
        "example": "THEY FOUND CANS CONTAINING ROTTING MEAT, WHICH WAS THE RESULT OF POOR PROCESSING WHEN THE CANS WE RE SEALED.",
        "exampleTranslation": "HỌ TÌM THẤY NHỮNG LON CHỨA THỊT THỐI RỮA, ĐÓ LÀ KẾT QUẢ CỦA QUÁ TRÌNH CHẾ BIẾN KÉM KHI CÁC LON ĐƯỢC NIÊM PHONG.",
        "translations": {
            "vi": "SỰ CHẾ BIẾN, SỰ GIA CÔNG"
        }
    },
    // ==========================================
    // TOPIC 9: PRODUCT MANUFACTURE (pmf-01 → pmf-30)
    // ==========================================
    {
        "id": "pmf-01",
        "topic": "Product Manufacture",
        "word": "capacity",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỨC CHỨA, NĂNG LỰC, TƯ CÁCH",
        "example": "THE STADIUM HAS A SEATING CAPACITY OF 50,000.",
        "exampleTranslation": "SÂN VẬN ĐỘNG CÓ SỨC CHỨA 50.0 00 CHỖ NGỒI.",
        "translations": {
            "vi": "SỨC CHỨA, NĂNG LỰC, TƯ CÁCH"
        }
    },
    {
        "id": "pmf-02",
        "topic": "Product Manufacture",
        "word": "utilize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "DÙNG, SỬ DỤNG, T ẬN DỤNG, KHAI THÁC",
        "example": "THE VITAMINS COME IN A FORM THAT IS EASILY UTILIZED BY THE BODY.",
        "exampleTranslation": "CÁC VITAMIN Ở DẠNG DỄ DÀNG ĐƯỢC CƠ THỂ SỬ DỤNG.",
        "translations": {
            "vi": "DÙNG, SỬ DỤNG, T ẬN DỤNG, KHAI THÁC"
        }
    },
    {
        "id": "pmf-03",
        "topic": "Product Manufacture",
        "word": "place",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẶT, ĐỂ, SẮP XẾP; ĐẶT (HÀNG)",
        "example": "SHE PLACED THE LETTER IN FRONT OF ME.",
        "exampleTranslation": "CÔ ẤY ĐẶT LÁ THƯ TRƯỚC MẶT TÔI. ﬁLL (THEO Y ÊU CẦU)",
        "translations": {
            "vi": "ĐẶT, ĐỂ, SẮP XẾP; ĐẶT (HÀNG)"
        }
    },
    {
        "id": "pmf-04",
        "topic": "Product Manufacture",
        "word": "renovate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NÂNG CẤP, CẢI T ẠO (NHÀ CỬA, NỘI THẤT)",
        "example": "HE R ENO VA TE S OLD HOUS E S AND S ELLS THEM AT A PR O ﬁT.",
        "exampleTranslation": "ANH T A CẢI T ẠO NHỮNG NGÔI NHÀ CŨ V À BÁN CHÚNG KIẾM LỜI.",
        "translations": {
            "vi": "NÂNG CẤP, CẢI T ẠO (NHÀ CỬA, NỘI THẤT)"
        }
    },
    {
        "id": "pmf-05",
        "topic": "Product Manufacture",
        "word": "decision",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUY Ế T ĐỊNH",
        "example": "SHE HAS HAD T O MAK E S OME VE RY DIﬃCULT DECIS IONS.",
        "exampleTranslation": "CÔ ẤY ĐÃ PHẢI ĐƯA R A MỘT S Ố QUY Ế T ĐỊNH R ẤT KHÓ KHĂN.",
        "translations": {
            "vi": "QUY Ế T ĐỊNH"
        }
    },
    {
        "id": "pmf-06",
        "topic": "Product Manufacture",
        "word": "material",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHẤT LIỆU, T ÀI LIỆU, NGUYÊ N LIỆU",
        "example": "CLAY IS A VERY PLAS TIC MAT ERIAL.",
        "exampleTranslation": "ĐẤT SÉT LÀ MỘT CHẤT LIỆU R ẤT DẺO.",
        "translations": {
            "vi": "CHẤT LIỆU, T ÀI LIỆU, NGUYÊ N LIỆU"
        }
    },
    {
        "id": "pmf-07",
        "topic": "Product Manufacture",
        "word": "success",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THÀNH CÔNG, THẮNG LỢI",
        "example": "HE SUCCE S S O F ALMOS T ANY P RO JECT DEPENDS LAR GELY ON IT S MANAGER. OST ANY P RO JEC",
        "exampleTranslation": "SỰ THÀNH CÔNG CỦA HẦU HẾ T MỌI DỰ ÁN PHỤ THUỘC PHẦN LỚN V ÀO NGƯỜI QUẢN LÝ CỦA NÓ. ẦH Ế",
        "translations": {
            "vi": "SỰ THÀNH CÔNG, THẮNG LỢI"
        }
    },
    {
        "id": "pmf-08",
        "topic": "Product Manufacture",
        "word": "attribute",
        "phonetic": "",
        "pos": "verb",
        "meaning": "QUY CHO, GÁN CHO",
        "example": "WE DO NOT AT TRIBUT E R EALITY TO ALL THE OB JECTS O F OUR APPARENT PER CEPTION.",
        "exampleTranslation": "CHÚNG T A KHÔNG GÁN THỰC T Ế CHO T ẤT CẢ CÁC ĐỐI TƯỢNG CỦA NHẬN THỨC R Õ R ÀNG CỦA CHÚNG T A.",
        "translations": {
            "vi": "QUY CHO, GÁN CHO"
        }
    },
    {
        "id": "pmf-09",
        "topic": "Product Manufacture",
        "word": "limit",
        "phonetic": "",
        "pos": "adj",
        "meaning": "GIỚI HẠN, R ANH GIỚI",
        "example": "I'M AFR AID MY GR ASP O F ECONOMICS IS R ATHER LIMIT ED.",
        "exampleTranslation": "T ÔI E R ẰNG KHẢ NĂNG HIỂU BIẾ T CỦA T ÔI V Ề KINH T Ế HỌC BỊ HẠN CHẾ.",
        "translations": {
            "vi": "GIỚI HẠN, R ANH GIỚI"
        }
    },
    {
        "id": "pmf-10",
        "topic": "Product Manufacture",
        "word": "component",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THÀNH PHẦN, BỘ PHẬN",
        "example": "THE F ACT ORY SUPPLIE S ELECTRICAL COMPONENT S F OR CAR S. TO RY",
        "exampleTranslation": "NHÀ MÁY CUNG CẤP BỘ PHẬN ĐIỆN CHO Ô T Ô.",
        "translations": {
            "vi": "THÀNH PHẦN, BỘ PHẬN"
        }
    },
    {
        "id": "pmf-11",
        "topic": "Product Manufacture",
        "word": "capable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ KHẢ NĂNG, CÓ NĂNG LỰC",
        "example": "WE NEED T O GE T AN AS SI ST ANT WHO 'S CAPABLE AND E ﬃCIENT. AN ASS IS T ANT WHO 'S C A",
        "exampleTranslation": "CHÚNG T ÔI CẦN CÓ MỘT TR Ợ LÝ CÓ NĂNG LỰC V À T ÀI NĂNG. Ó MỘT TR Ợ LÝ CÓ NĂNG L Ự ﬂE XIBLE DỄ THUY Ế T PHỤC; LINH HOẠT",
        "translations": {
            "vi": "CÓ KHẢ NĂNG, CÓ NĂNG LỰC"
        }
    },
    {
        "id": "pmf-12",
        "topic": "Product Manufacture",
        "word": "comparable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ THỂ S O S ÁNH",
        "example": "THE TW O E XPERIENCE S AREN 'T COMPAR ABLE.",
        "exampleTranslation": "HAI TR ẢI NGHIỆM KHÔNG THỂ S O S ÁNH ĐƯỢC.",
        "translations": {
            "vi": "CÓ THỂ S O S ÁNH"
        }
    },
    {
        "id": "pmf-13",
        "topic": "Product Manufacture",
        "word": "produce",
        "phonetic": "",
        "pos": "verb",
        "meaning": "SẢN XUẤT, CHẾ TẠO",
        "example": "R ED BLOOD CELLS ARE PRODUCED IN THE BONE MARROW.",
        "exampleTranslation": "TẾ BÀO HỒNG CẦU ĐƯỢC SẢN XUẤT TRONG TỦY XƯƠNG.",
        "translations": {
            "vi": "SẢN XUẤT, CHẾ TẠO"
        }
    },
    {
        "id": "pmf-14",
        "topic": "Product Manufacture",
        "word": "respectively",
        "phonetic": "",
        "pos": "adv",
        "meaning": "RIÊNG TỪNG CÁI, TƯƠNG ỨNG",
        "example": "THE TWO MEALS COST AND £80 RESPECTIVELY.",
        "exampleTranslation": "HAI BỮA ĂN CÓ GIÁ LẦN LƯỢT LÀ 50 BẢNG VÀ 80 BẢNG.",
        "translations": {
            "vi": "RIÊNG TỪNG CÁI, TƯƠNG ỨNG"
        }
    },
    {
        "id": "pmf-15",
        "topic": "Product Manufacture",
        "word": "separately",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TÁCH BIỆT, RIÊNG RẼ, KHÁC NHAU",
        "example": "I TEND TO WEAR THE JACKET AND SKIRT SEPARATELY RATHER THAN AS A SUIT.",
        "exampleTranslation": "TÔI CÓ XU HƯỚNG MẶC ÁO KHOÁC VÀ VÁY RIÊNG BIỆT HƠN LÀ MẶC CHUNG VỚI BỘ ĐỒ.",
        "translations": {
            "vi": "TÁCH BIỆT, RIÊNG RẼ, KHÁC NHAU"
        }
    },
    {
        "id": "pmf-16",
        "topic": "Product Manufacture",
        "word": "damaged",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BỊ PHÁ HUỶ, BỊ HƯ HẠI, HỎNG",
        "example": "BOTH THE CARS INVOLVED IN THE ACCIDENT LOOKED BADLY DAMAGED.",
        "exampleTranslation": "CẢ HAI CHIẾC XE LIÊN QUAN ĐẾN VỤ TAI NẠN ĐỀU HƯ HỎNG NẶNG.",
        "translations": {
            "vi": "BỊ PHÁ HUỶ, BỊ HƯ HẠI, HỎNG"
        }
    },
    {
        "id": "pmf-17",
        "topic": "Product Manufacture",
        "word": "prevent",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NGĂN CHẶN, NGĂN NGỪA",
        "example": "THE POLICE TRIED T O PREV ENT HIM FR OM LEAVING.",
        "exampleTranslation": "CẢNH S ÁT ĐÃ CỐ GẮNG NGĂN CẢN ANH T A R ỜI ĐI.",
        "translations": {
            "vi": "NGĂN CHẶN, NGĂN NGỪA"
        }
    },
    {
        "id": "pmf-18",
        "topic": "Product Manufacture",
        "word": "chemical",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHẤT HOÁ HỌC",
        "example": "THE Y SPECIAL CHEMICALS T O ACCELER AT E THE GRO WTH O F CR OPS.",
        "exampleTranslation": "HỌ SỬ DỤNG CÁC HÓA CHẤT ĐẶC BIỆ T ĐỂ ĐẨY NHANH SỰ PHÁT TRIỂN CỦA CÂY TR ỒNG.",
        "translations": {
            "vi": "CHẤT HOÁ HỌC"
        }
    },
    {
        "id": "pmf-19",
        "topic": "Product Manufacture",
        "word": "equipment",
        "phonetic": "",
        "pos": "noun",
        "meaning": "MÁY MÓC, TR ANG THIẾ T BỊ",
        "example": "THE T EACHER DEMONS TR AT ED HO W T O THE EQUIPMENT.",
        "exampleTranslation": "GIÁO VIÊN TRÌNH BÀY CÁCH SỬ DỤNG THIẾ T BỊ.",
        "translations": {
            "vi": "MÁY MÓC, TR ANG THIẾ T BỊ"
        }
    },
    {
        "id": "pmf-20",
        "topic": "Product Manufacture",
        "word": "operate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "V ẬN HÀNH, HOẠT ĐỘNG",
        "example": "FOR SEVERAL YEARS SHE OPERATED A DATING AGENCY FROM HER BASEMENT.",
        "exampleTranslation": "TRONG VÀI NĂM, CÔ ĐIỀU HÀNH MỘT CÔNG TY HẸN HÒ TỪ TẦNG HẦM CỦA MÌNH.",
        "translations": {
            "vi": "V ẬN HÀNH, HOẠT ĐỘNG"
        }
    },
    {
        "id": "pmf-21",
        "topic": "Product Manufacture",
        "word": "assemble",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LẮP RÁP; TRIỆU TẬP, TRIỆU HỒI",
        "example": "OVER 50,000 PEOPLE ASSEMBLED IN THE MAIN SQUARE.",
        "exampleTranslation": "HƠN 50.000 NGƯỜI TẬP TRUNG TẠI QUẢNG TRƯỜNG CHÍNH.",
        "translations": {
            "vi": "LẮP RÁP; TRIỆU TẬP, TRIỆU HỒI"
        }
    },
    {
        "id": "pmf-22",
        "topic": "Product Manufacture",
        "word": "manufacturing",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THUỘC SẢN XUẤT, CHẾ TẠO",
        "example": "FEW COMPANIES ARE LIKELY TO SET UP MANUFACTURING PLANTS HERE.",
        "exampleTranslation": "RẤT ÍT CÔNG TY CÓ KHẢ NĂNG THÀNH LẬP NHÀ MÁY SẢN XUẤT Ở ĐÂY.",
        "translations": {
            "vi": "THUỘC SẢN XUẤT, CHẾ TẠO"
        }
    },
    {
        "id": "pmf-23",
        "topic": "Product Manufacture",
        "word": "tailored",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐƯỢC TUỲ CHỈNH, ĐIỀU CHỈNH",
        "example": "MADAME WEILL, A TINY WOMAN IN A TAILORED SUIT, TRIED TO FOB THE POLICEMAN Oﬀ.",
        "exampleTranslation": "MADAM WILL, MỘT NGƯỜI PHỤ NỮ NHỎ BÉ TRONG BỘ ĐỒ ĐƯỢC ĐIỀU CHỈNH RIÊNG, ĐÃ CỐ GẮNG ĐÁNH BẠI VIÊN CẢNH SÁT.",
        "translations": {
            "vi": "ĐƯỢC TUỲ CHỈNH, ĐIỀU CHỈNH"
        }
    },
    {
        "id": "pmf-24",
        "topic": "Product Manufacture",
        "word": "economize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TIẾT KIỆM",
        "example": "A LOT OF COMPANIES ARE TRYING TO ECONOMIZE BY NOT TAKING ON NEW STAﬀ.",
        "exampleTranslation": "RẤT NHIỀU CÔNG TY ĐANG CỐ GẮNG TIẾT KIỆM BẰNG CÁCH KHÔNG TIẾP NHẬN NHÂN VIÊN MỚI.",
        "translations": {
            "vi": "TIẾT KIỆM"
        }
    },
    {
        "id": "pmf-25",
        "topic": "Product Manufacture",
        "word": "device",
        "phonetic": "",
        "pos": "noun",
        "meaning": "MÁY MÓC, THIẾT BỊ",
        "example": "RESCUERS A SPECIAL DEVICE FOR ﬁNDING PEOPLE TRAPPED IN COLLAPSED BUILDINGS.",
        "exampleTranslation": "LỰC LƯỢNG CỨU HỘ ĐÃ SỬ DỤNG MỘT THIẾT BỊ ĐẶC BIỆT ĐỂ TÌM KIẾM NHỮNG NGƯỜI BỊ MẮC KẸ T TRONG CÁC TÒA NHÀ BỊ SẬP.",
        "translations": {
            "vi": "MÁY MÓC, THIẾT BỊ"
        }
    },
    {
        "id": "pmf-26",
        "topic": "Product Manufacture",
        "word": "trim",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CẮT, TỈA, LOẠI BỎ; SẮP XẾP, THU DỌN",
        "example": "TRIM Oﬀ THE LEAFY ENDS O F THE VEGE TABLE BEFORE COOKING.",
        "exampleTranslation": "CẮT BỎ PHẦN ĐẦU LÁ CỦA RAU TRƯỚC KHI NẤU.",
        "translations": {
            "vi": "CẮT, TỈA, LOẠI BỎ; SẮP XẾP, THU DỌN"
        }
    },
    {
        "id": "pmf-27",
        "topic": "Product Manufacture",
        "word": "launch",
        "phonetic": "",
        "pos": "verb",
        "meaning": "RA MẮT (SẢN PHẨM MỚI)",
        "example": "THE PROGRAMME WAS LAUNCHED A YEAR AGO.",
        "exampleTranslation": "CHƯƠNG TRÌNH ĐÃ ĐƯỢC ĐƯA RA CÁCH ĐÂY MỘT NĂM.",
        "translations": {
            "vi": "RA MẮT (SẢN PHẨM MỚI)"
        }
    },
    {
        "id": "pmf-28",
        "topic": "Product Manufacture",
        "word": "expiration",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ HẾT HẠN",
        "example": "HE STAYED ON PAST THE EXPIRATION OF HIS TOURIST VISA.",
        "exampleTranslation": "ANH TA ĐÃ Ở LẠI QUÁ HẠN THỊ THỰC DU LỊCH CỦA MÌNH.",
        "translations": {
            "vi": "SỰ HẾT HẠN"
        }
    },
    {
        "id": "pmf-29",
        "topic": "Product Manufacture",
        "word": "maneuver",
        "phonetic": "",
        "pos": "verb",
        "meaning": "DIỄN TẬP, ĐIỀU ĐỘNG",
        "example": "I MANEUVERED THE GROCERY CART AROUND PILES OF BOXES TO THE CHECKOUT COUNTER.",
        "exampleTranslation": "TÔI ĐIỀU ĐỘNG XE HÀNG TẠP HÓA QUANH ĐỐNG THÙNG HÀNG ĐẾN QUẦY THANH TOÁN.",
        "translations": {
            "vi": "DIỄN TẬP, ĐIỀU ĐỘNG"
        }
    },
    {
        "id": "pmf-30",
        "topic": "Product Manufacture",
        "word": "coming",
        "phonetic": "",
        "pos": "adj",
        "meaning": "S ẮP T ỚI",
        "example": "WE LOOK F ORW AR D T O E V EN GR EAT ER SUCCE S S IN THE COMING Y EAR. WE LOOK FORW TO E VEN GREATER SUC",
        "exampleTranslation": "CHÚNG T ÔI MONG MUỐN ĐẠT ĐƯỢC NHIỀU THÀNH CÔNG HƠN NỮA CHÚNG TÔI MO TRONG NĂM T ỚI. TRONG NĂM TỚ",
        "translations": {
            "vi": "S ẮP T ỚI"
        }
    },
    // ==========================================
    // TOPIC 10: CUSTOMER SERVICE (csv-01 → csv-32)
    // ==========================================
    {
        "id": "csv-01",
        "topic": "Customer Service",
        "word": "complaint",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỜI THAN PHIỀN, LỜI PHÀN NÀN",
        "example": "WE 'V E HAD COMPLAINT S THAT Y OU'V E BEEN PLAYING Y OUR R ADIO T OO LOUD.",
        "exampleTranslation": "CHÚNG T ÔI ĐÃ NHẬN ĐƯỢC LỜI PHÀN NÀN R ẰNG BẠN ĐÃ BẬT ĐÀI CỦA MÌNH QUÁ T O.",
        "translations": {
            "vi": "LỜI THAN PHIỀN, LỜI PHÀN NÀN"
        }
    },
    {
        "id": "csv-02",
        "topic": "Customer Service",
        "word": "deal",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIẢI QUY Ế T; BUÔN BÁN; PHÂN PHỐI",
        "example": "HE W AS SUSPECT ED O F DEALING COCAINE.",
        "exampleTranslation": "ANH T A BỊ TÌNH NGHI BUÔN BÁN COCAINE.",
        "translations": {
            "vi": "GIẢI QUY Ế T; BUÔN BÁN; PHÂN PHỐI"
        }
    },
    {
        "id": "csv-03",
        "topic": "Customer Service",
        "word": "argumentative",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THÍCH TR ANH CÃI",
        "example": "DON' T BE S O AR GUMENTA TIVE.",
        "exampleTranslation": "ĐỪNG THÍCH TR ANH LUẬN NHƯ V ẬY.",
        "translations": {
            "vi": "THÍCH TR ANH CÃI"
        }
    },
    {
        "id": "csv-04",
        "topic": "Customer Service",
        "word": "appropriately",
        "phonetic": "",
        "pos": "adv",
        "meaning": "THÍCH HỢP, THÍCH ĐÁNG",
        "example": "BUS INE S S LEADER S WHO ACT ED APPR OPRIAT ELY WE R E WIDELY PR AIS ED.",
        "exampleTranslation": "CÁC NHÀ LÃNH ĐẠO DOANH NGHIỆP HÀNH ĐỘNG THÍCH HỢP ĐÃ ĐƯỢC KHEN NGỢI RỘ NG R ÃI.",
        "translations": {
            "vi": "THÍCH HỢP, THÍCH ĐÁNG"
        }
    },
    {
        "id": "csv-05",
        "topic": "Customer Service",
        "word": "respond",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHẢN ỨNG, PHẢN HỒI, TR Ả LỜI",
        "example": "I ASK ED HER WHAT THE TIME W AS, BUT SHE DID N' T R ES POND.",
        "exampleTranslation": "T ÔI HỎI CÔ ẤY MẤY GIỜ R ỒI, NHƯNG CÔ ẤY KHÔNG TR Ả LỜI.",
        "translations": {
            "vi": "PHẢN ỨNG, PHẢN HỒI, TR Ả LỜI"
        }
    },
    {
        "id": "csv-06",
        "topic": "Customer Service",
        "word": "courteous",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LỊCH SỰ, NHÃ NHẶN",
        "example": "ALTHOUGH SHE O FT EN DIS AGRE ED WITH ME, SHE W AS ALWAYS COURT EOUS.",
        "exampleTranslation": "MẶC DÙ CÔ ẤY THƯỜNG XUY ÊN BẤT ĐỒNG V ỚI T ÔI, NHƯNG CÔ ẤY LUÔN T Ỏ R A NHÃ NHẶN.",
        "translations": {
            "vi": "LỊCH SỰ, NHÃ NHẶN"
        }
    },
    {
        "id": "csv-07",
        "topic": "Customer Service",
        "word": "satisfaction",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ HÀI LÒNG/THOẢ MÃN",
        "example": "SHE LOOK ED AT THE ﬁNISHED PAINTING WITH S ATIS FA CTION. ISFA CTION.",
        "exampleTranslation": "CÔ HÀI LÒNG NHÌN BỨC TR ANH ĐÃ HOÀN THÀNH.",
        "translations": {
            "vi": "SỰ HÀI LÒNG/THOẢ MÃN"
        }
    },
    {
        "id": "csv-08",
        "topic": "Customer Service",
        "word": "inconvenience",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ BẤT LỢI, BẤT TIỆN",
        "example": "HAVING T O W AIT F OR T EN MINUTE S W AS A MINOR INCON VE NIENC E.",
        "exampleTranslation": "PHẢI ĐỢI TRONG MƯỜI PHÚT LÀ MỘT SỰ BẤT TIỆN NHỎ.",
        "translations": {
            "vi": "SỰ BẤT LỢI, BẤT TIỆN"
        }
    },
    {
        "id": "csv-09",
        "topic": "Customer Service",
        "word": "complete",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HOÀN THIỆN, HOÀN THÀNH",
        "example": "HE ONLY NEEDS TW O MOR E CAR DS T O COMPLE TE THE SET.",
        "exampleTranslation": "ANH T A CHỈ CẦN THÊM HAI THẺ NỮA ĐỂ HOÀN THÀNH BỘ.",
        "translations": {
            "vi": "HOÀN THIỆN, HOÀN THÀNH"
        }
    },
    {
        "id": "csv-10",
        "topic": "Customer Service",
        "word": "return",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TR Ở LẠI, QUAY V Ề",
        "example": "DAVID RETURNED TO FIND HIS HOUSE HAD BURNED DOWN.",
        "exampleTranslation": "DAVID QUAY TRỞ LẠI THÌ THẤY NGÔI NHÀ CỦA MÌNH ĐÃ BỊ THIÊU RỤI.",
        "translations": {
            "vi": "TR Ở LẠI, QUAY V Ề"
        }
    },
    {
        "id": "csv-11",
        "topic": "Customer Service",
        "word": "replace",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THAY THẾ, THAY CHỖ",
        "example": "THE F ACT ORY R EPLACED MOS T O F IT S W ORK ER S WITH R OBO TS.",
        "exampleTranslation": "NHÀ MÁY ĐÃ THAY THẾ HẦU HẾ T CÔNG NHÂN BẰNG R OBOT. ÂN BẰNG RO B",
        "translations": {
            "vi": "THAY THẾ, THAY CHỖ"
        }
    },
    {
        "id": "csv-12",
        "topic": "Customer Service",
        "word": "evaluation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐÁNH GIÁ, SỰ ƯỚC LƯỢNG",
        "example": "WE NEED T O CARRY OUT A PR OPER EVALUATION O F THE NEW S YSTE M.",
        "exampleTranslation": "CHÚNG T ÔI CẦN THỰC HIỆN SỰ ĐÁNH GIÁ THÍCH HỢP HỆ THỐNG MỚI.",
        "translations": {
            "vi": "SỰ ĐÁNH GIÁ, SỰ ƯỚC LƯỢNG"
        }
    },
    {
        "id": "csv-13",
        "topic": "Customer Service",
        "word": "apologize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "XIN LỖI",
        "example": "WE APOLOGIZ E F OR ANY INCONV ENIENCE CAUS ED.",
        "exampleTranslation": "CHÚNG T ÔI XIN LỖI VÌ BẤT KỲ SỰ BẤT TIỆN GÂY R A. VÌ BẤT KỲ SỰ BẤT TI Ệ YR A",
        "translations": {
            "vi": "XIN LỖI"
        }
    },
    {
        "id": "csv-14",
        "topic": "Customer Service",
        "word": "certain",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CHẮC, CHẮC CHẮN, NHẤT ĐỊNH",
        "example": "I F EEL CERTAIN (THAT) Y OU'R E DOING THE RIGHT THING.",
        "exampleTranslation": "T ÔI CẢM THẤY CHẮC CHẮN (R ẰNG) BẠN ĐANG LÀM ĐÚNG.",
        "translations": {
            "vi": "CHẮC, CHẮC CHẮN, NHẤT ĐỊNH"
        }
    },
    {
        "id": "csv-15",
        "topic": "Customer Service",
        "word": "commitment",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CAM K Ế T, SỰ T ẬN T ÂM",
        "example": "THE COMPANY HAS F AILED T O HONOUR IT S COMMITMENT S.",
        "exampleTranslation": "CÔNG TY ĐÃ KHÔNG THỰC HIỆN NHỮNG SỰ CAM K Ế T CỦA MÌNH.",
        "translations": {
            "vi": "SỰ CAM K Ế T, SỰ T ẬN T ÂM"
        }
    },
    {
        "id": "csv-16",
        "topic": "Customer Service",
        "word": "biography",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TIỂU SỬ, LÝ LỊCH",
        "example": "HE WRO T E A BIOGR APHY O F W INST ON CHUR CHILL.",
        "exampleTranslation": "ÔNG ĐÃ VIẾ T MỘT CUỐN TIỂU SỬ CỦA W INS T ON CHUR CHILL.",
        "translations": {
            "vi": "TIỂU SỬ, LÝ LỊCH"
        }
    },
    {
        "id": "csv-17",
        "topic": "Customer Service",
        "word": "critical",
        "phonetic": "",
        "pos": "adj",
        "meaning": "PHÊ BÌNH, CHỈ TRÍCH",
        "example": "SHE IS CRITICAL O F THE PRES IDENT' S GLOBALIS T F OR EIGN POLICY.",
        "exampleTranslation": "CÔ ẤY CHỈ TRÍCH CHÍNH S ÁCH ĐỐI NGOẠI TO ÀN CẦU HÓA CỦA T ỔNG THỐNG.",
        "translations": {
            "vi": "PHÊ BÌNH, CHỈ TRÍCH"
        }
    },
    {
        "id": "csv-18",
        "topic": "Customer Service",
        "word": "combine",
        "phonetic": "",
        "pos": "verb",
        "meaning": "K ẾT HỢP",
        "example": "THE TWO COUNTRIES COMBINED AGAINST THEIR COMMON ENEMY.",
        "exampleTranslation": "HAI QUỐC GIA KẾT HỢP CHỐNG LẠI KẺ THÙ CHUNG CỦA HỌ.",
        "translations": {
            "vi": "K ẾT HỢP"
        }
    },
    {
        "id": "csv-19",
        "topic": "Customer Service",
        "word": "observe",
        "phonetic": "",
        "pos": "verb",
        "meaning": "QUAN SÁT",
        "example": "THE ROLE OF SCIENTISTS IS TO OBSERVE AND DESCRIBE THE WORLD, NOT TO TRY TO CONTROL IT.",
        "exampleTranslation": "VAI TRÒ CỦA CÁC NHÀ KHOA HỌC LÀ QUAN SÁT VÀ MÔ TẢ THẾ GIỚI, KHÔNG PHẢI CỐ GẮNG KIỂM SOÁT NÓ.",
        "translations": {
            "vi": "QUAN SÁT"
        }
    },
    {
        "id": "csv-20",
        "topic": "Customer Service",
        "word": "attitude",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THÁI ĐỘ",
        "example": "IT' S O FT EN VERY DIﬃCULT T O CHANGE PEOPLE 'S ATT ITUDE S.",
        "exampleTranslation": "THƯỜNG R ẤT KHÓ ĐỂ THAY ĐỔI THÁI ĐỘ CỦA MỌI NGƯỜI.",
        "translations": {
            "vi": "THÁI ĐỘ"
        }
    },
    {
        "id": "csv-21",
        "topic": "Customer Service",
        "word": "disappoint",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM THẤT VỌNG",
        "example": "WE DON'T WANT TO DISAPPOINT THE FANS.",
        "exampleTranslation": "CHÚNG TÔI KHÔNG MUỐN LÀM NGƯỜI HÂM MỘ THẤT VỌNG.",
        "translations": {
            "vi": "LÀM THẤT VỌNG"
        }
    },
    {
        "id": "csv-22",
        "topic": "Customer Service",
        "word": "insert",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHÈN VÀO, ĐƯA VÀO",
        "example": "I'VE ﬁLLED IN THE FORM, BUT YOU STILL NEED TO INSERT YOUR BANK DETAILS AND DATE OF BIRTH.",
        "exampleTranslation": "T ÔI ĐÃ ĐIỀN VÀO BIỂU MẪU, NHƯNG BẠN VẪN CẦN CHÈN CHI TIẾT NGÂN HÀNG VÀ NGÀY SINH CỦA MÌNH.",
        "translations": {
            "vi": "CHÈN VÀO, ĐƯA VÀO"
        }
    },
    {
        "id": "csv-23",
        "topic": "Customer Service",
        "word": "disclose",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHƠI BÀY, VẠCH TRẦN, ĐỂ LỘ",
        "example": "THE COMPANY HAS DISCLOSED PROﬁTS OF OVER £200 MILLION.",
        "exampleTranslation": "CÔNG TY ĐÃ TIẾT LỘ LỢI NHUẬN HƠN 200 TRIỆU BẢNG ANH. ỢINHUẬN",
        "translations": {
            "vi": "PHƠI BÀY, VẠCH TRẦN, ĐỂ LỘ"
        }
    },
    {
        "id": "csv-24",
        "topic": "Customer Service",
        "word": "politely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "LỊCH SỰ LỄ PHÉP",
        "example": "HE POLITELY ASKED THEM TO LEAVE.",
        "exampleTranslation": "ANH LỊCH SỰ YÊU CẦU HỌ RỜI ĐI.",
        "translations": {
            "vi": "LỊCH SỰ LỄ PHÉP"
        }
    },
    {
        "id": "csv-25",
        "topic": "Customer Service",
        "word": "seriously",
        "phonetic": "",
        "pos": "adv",
        "meaning": "NGHIÊM TÚC, NGHIÊM TRỌNG",
        "example": "BADLY COOKED SHELLﬁSH CAN MAKE YOU SERIOUSLY ILL.",
        "exampleTranslation": "ĐỘNG V ẬT CÓ VỎ NẤU CHÍN KHÔNG TỐT CÓ THỂ KHIẾN BẠN BỊ ỐM NGHIÊM TRỌNG.",
        "translations": {
            "vi": "NGHIÊM TÚC, NGHIÊM TRỌNG"
        }
    },
    {
        "id": "csv-26",
        "topic": "Customer Service",
        "word": "infuriate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM TỨC ĐIÊN LÊN",
        "example": "HIS SEXIST ATTITUDE INFURIATES ME.",
        "exampleTranslation": "THÁI ĐỘ PHÂN BIỆT GIỚI TÍNH CỦA ANH ẤY KHIẾN TÔI TỨC GIẬN.",
        "translations": {
            "vi": "LÀM TỨC ĐIÊN LÊN"
        }
    },
    {
        "id": "csv-27",
        "topic": "Customer Service",
        "word": "cause",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GÂY RA, TẠO RA",
        "example": "THE BRIGHT LIGHT CAUSED HER TO BLINK.",
        "exampleTranslation": "ÁNH SÁNG CHÓI LÒA KHIẾN CÔ PHẢI CHỚP MẮT.",
        "translations": {
            "vi": "GÂY RA, TẠO RA"
        }
    },
    {
        "id": "csv-28",
        "topic": "Customer Service",
        "word": "commentary",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BÀI BÌNH LUẬN, LỜI CHÚ THÍCH",
        "example": "THE COMMENTARY ON THE OLYMPIC GAMES WAS MUCH BETTER ON THE OTHER CHANNEL.",
        "exampleTranslation": "CÁC BÀI BÌNH LUẬN VỀ THẾ V ẬN HỘI OLYMPIC ĐÃ TỐT HƠN NHIỀU TRÊN CÁC KÊNH KHÁC.",
        "translations": {
            "vi": "BÀI BÌNH LUẬN, LỜI CHÚ THÍCH"
        }
    },
    {
        "id": "csv-29",
        "topic": "Customer Service",
        "word": "interact",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TƯƠNG TÁC, TÁC ĐỘNG QUA LẠI",
        "example": "WE ARE STUDYING HOW THESE TWO CHEMICALS INTERACT.",
        "exampleTranslation": "CHÚNG TÔI ĐANG NGHIÊN CỨU CÁCH HAI HÓA CHẤT NÀY TƯƠNG TÁC.",
        "translations": {
            "vi": "TƯƠNG TÁC, TÁC ĐỘNG QUA LẠI"
        }
    },
    {
        "id": "csv-30",
        "topic": "Customer Service",
        "word": "applaud",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HOAN NGHÊNH, TÁN THƯỞNG",
        "example": "YOU SHOULD HAVE HEARD THE AUDIENCE APPLAUD - THE NOISE WAS FANTASTIC.",
        "exampleTranslation": "BẠN NÊN NGHE THẤY TIẾNG HOAN NGHÊNH CỦA KHÁN GIẢ - TIẾNG ỒN THẬT TUYỆT VỜI.",
        "translations": {
            "vi": "HOAN NGHÊNH, TÁN THƯỞNG"
        }
    },
    {
        "id": "csv-31",
        "topic": "Customer Service",
        "word": "defective",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ LỖI, CÓ THIẾU SÓT, NHƯỢC ĐIỂM",
        "example": "I REPLACED THE DEFECTIVE LIGHT SWITCH.",
        "exampleTranslation": "T ÔI ĐÃ THAY THẾ CÔNG TẮC ĐÈN BỊ LỖI.",
        "translations": {
            "vi": "CÓ LỖI, CÓ THIẾU SÓT, NHƯỢC ĐIỂM"
        }
    },
    {
        "id": "csv-32",
        "topic": "Customer Service",
        "word": "guarantee",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CAM ĐOAN, ĐẢM BẢO, CHẮC CHẮN",
        "example": "WE GUARANTEE THAT OUR PRODUCTS ARE 100% SAFE.",
        "exampleTranslation": "CHÚNG TÔI ĐẢM BẢO RẰNG SẢN PHẨM CỦA CHÚNG TÔI LÀ 100% AN TOÀN.",
        "translations": {
            "vi": "CAM ĐOAN, ĐẢM BẢO, CHẮC CHẮN"
        }
    },
    // ==========================================
    // TOPIC 11: TRAVELING (trv-01 → trv-32)
    // ==========================================
    {
        "id": "trv-01",
        "topic": "Traveling",
        "word": "international",
        "phonetic": "",
        "pos": "adj",
        "meaning": "QUỐC TẾ",
        "example": "SHE W AS THE BOS S O F A LAR GE INT ERNATIONAL COMPANY.",
        "exampleTranslation": "CÔ LÀ CHỦ CỦA MỘT CÔNG TY QUỐC T Ế LỚN.",
        "translations": {
            "vi": "QUỐC TẾ"
        }
    },
    {
        "id": "trv-02",
        "topic": "Traveling",
        "word": "diverse",
        "phonetic": "",
        "pos": "adj",
        "meaning": "PHONG PHÚ, ĐA DẠNG, NHIỀU LOẠI",
        "example": "NEW Y ORK IS A VERY CULTUR ALLY DIV ER SE CIT Y.",
        "exampleTranslation": "NE W Y ORK LÀ MỘT THÀNH PHỐ R ẤT ĐA DẠNG V Ề V ĂN HÓA.",
        "translations": {
            "vi": "PHONG PHÚ, ĐA DẠNG, NHIỀU LOẠI"
        }
    },
    {
        "id": "trv-03",
        "topic": "Traveling",
        "word": "approximately",
        "phonetic": "",
        "pos": "adv",
        "meaning": "XẤP XỈ, KHOẢNG",
        "example": "THE JOB WILL TAKE APPROXIMATELY THREE WEEKS, AND COST APPROXIMATELY £1,000.",
        "exampleTranslation": "CÔNG VIỆC SẼ MẤT KHOẢNG BA TUẦN VÀ CHI PHÍ KHOẢNG 1.000 BẢNG ANH.",
        "translations": {
            "vi": "XẤP XỈ, KHOẢNG"
        }
    },
    {
        "id": "trv-04",
        "topic": "Traveling",
        "word": "comfortable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THOẢI MÁI, DỄ CHỊU",
        "example": "THEY LIVE IN VERY COMFORTABLE SURROUNDINGS.",
        "exampleTranslation": "HỌ SỐNG TRONG MÔI TRƯỜNG XUNG QUANH RẤT THOẢI MÁI.",
        "translations": {
            "vi": "THOẢI MÁI, DỄ CHỊU"
        }
    },
    {
        "id": "trv-05",
        "topic": "Traveling",
        "word": "specify",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM RÕ, GHI RÕ",
        "example": "HE SAID WE SHOULD MEET BUT DIDN'T SPECIFY A TIME.",
        "exampleTranslation": "ANH ẤY NÓI CHÚNG TÔI NÊN GẶP NHAU NHƯNG KHÔNG XÁC ĐỊNH THỜI GIAN.",
        "translations": {
            "vi": "LÀM RÕ, GHI RÕ"
        }
    },
    {
        "id": "trv-06",
        "topic": "Traveling",
        "word": "tightly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CHẶT, CHẶT CHẼ",
        "example": "THE BABY WAS CLUTCHING HIS TOY TIGHTLY IN HIS GRUBBY ﬁST.",
        "exampleTranslation": "ĐỨA BÉ ĐANG NẮM CHẶT ĐỒ CHƠI CỦA MÌNH TRONG BÀN TAY CÁU KỈNH.",
        "translations": {
            "vi": "CHẶT, CHẶT CHẼ"
        }
    },
    {
        "id": "trv-07",
        "topic": "Traveling",
        "word": "tour",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHUYẾN DU LỊCH, CHUYẾN THAM QUAN",
        "example": "A BUS TOOK A SIGHTSEEING TOUR OF THE CITY.",
        "exampleTranslation": "MỘT CHIẾC XE BUÝT ĐƯA CHÚNG TÔI ĐI THAM QUAN THÀNH PHỐ.",
        "translations": {
            "vi": "CHUYẾN DU LỊCH, CHUYẾN THAM QUAN"
        }
    },
    {
        "id": "trv-08",
        "topic": "Traveling",
        "word": "brochure",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CUỐN SÁCH MỎNG, TỜ GẤP",
        "example": "THE Y PRODUCED A BROCHURE ON HEALTHY EATING THAT WAS TO BE DISTRIBUTED IN SUPERMARKETS.",
        "exampleTranslation": "HỌ ĐÃ S ẢN XUẤT MỘT TẬP TÀI LIỆU VỀ ĂN UỐNG LÀNH MẠNH ĐỂ PHÂN PHÁT TRONG CÁC SIÊU THỊ.",
        "translations": {
            "vi": "CUỐN SÁCH MỎNG, TỜ GẤP"
        }
    },
    {
        "id": "trv-09",
        "topic": "Traveling",
        "word": "involve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GỒM, K ÉO THEO; THAM GIA",
        "example": "THE OPERATION INVOLVES PUTTING A SMALL TUBE INTO YOUR HEART.",
        "exampleTranslation": "PHẪU THUẬT BAO GỒM ĐẶT MỘT ỐNG NHỎ VÀO TIM CỦA BẠN. UNAVAILABLE CHƯA SẴN SÀNG",
        "translations": {
            "vi": "GỒM, K ÉO THEO; THAM GIA"
        }
    },
    {
        "id": "trv-10",
        "topic": "Traveling",
        "word": "away",
        "phonetic": "",
        "pos": "adv",
        "meaning": "X A, CÁCH X A, MẤT ĐI",
        "example": "ST AY AW AY FR OM HIM.",
        "exampleTranslation": "TR ÁNH X A ANH T A. DRAMATIC ĐỘT NGỘT, ẤN TƯỢNG",
        "translations": {
            "vi": "X A, CÁCH X A, MẤT ĐI"
        }
    },
    {
        "id": "trv-11",
        "topic": "Traveling",
        "word": "hospitality",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ HIẾU KHÁCH, SỤ THÂN THIỆN",
        "example": "THE LOCAL PEOPLE SH OWED ME GR EAT HOSPIT ALITY.",
        "exampleTranslation": "NGƯỜI DÂN ĐỊA PHƯƠNG ĐÃ CHO T ÔI THẤY SỰ HIẾU KHÁCH TUY Ệ T V ỜI.",
        "translations": {
            "vi": "SỰ HIẾU KHÁCH, SỤ THÂN THIỆN"
        }
    },
    {
        "id": "trv-12",
        "topic": "Traveling",
        "word": "unlimited",
        "phonetic": "",
        "pos": "adj",
        "meaning": "V Ô HẠN, V Ô T ẬN, KHÔNG GIỚI HẠN",
        "example": "DEMAND F OR HEALTHCARE APPEAR S VIRTUALLY UNLIMIT ED.",
        "exampleTranslation": "NHU CẦU CHĂM S ÓC SỨC KHỎE DƯỜNG NHƯ KHÔNG GIỚI HẠN.",
        "translations": {
            "vi": "V Ô HẠN, V Ô T ẬN, KHÔNG GIỚI HẠN"
        }
    },
    {
        "id": "trv-13",
        "topic": "Traveling",
        "word": "attraction",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THU HÚT, ĐIỂM THAM QUAN",
        "example": "THE OPPORTUNITY T O TR AV EL IS ONE O F THE MAIN AT TR ACTIONS O F THIS JOB.",
        "exampleTranslation": "CƠ HỘI ĐI DU LỊCH LÀ MỘT TRONG NHỮNG ĐIỂM THU HÚT CHÍNH CỦA CÔNG VIỆC NÀY.",
        "translations": {
            "vi": "SỰ THU HÚT, ĐIỂM THAM QUAN"
        }
    },
    {
        "id": "trv-14",
        "topic": "Traveling",
        "word": "itinerary",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HÀNH TRÌNH, LỘ TRÌNH",
        "example": "THE T OUR OPER AT OR WILL ARRANGE TR ANSPORT AND PLAN YOUR ITINERARY.",
        "exampleTranslation": "NHÀ ĐIỀU HÀNH TOUR SẼ SẮP XẾP PHƯƠNG TIỆN ĐI LẠI VÀ LÊN KẾ HOẠCH CHO HÀNH TRÌNH CỦA BẠN.",
        "translations": {
            "vi": "HÀNH TRÌNH, LỘ TRÌNH"
        }
    },
    {
        "id": "trv-15",
        "topic": "Traveling",
        "word": "exotic",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KỲ LẠ, ĐẸP KỲ LẠ",
        "example": "WE ARE NOT GOING T O DO ANYTHING E XO TIC.",
        "exampleTranslation": "CHÚNG TÔI SẼ KHÔNG LÀM BẤT CỨ ĐIỀU GÌ KỲ LẠ.",
        "translations": {
            "vi": "KỲ LẠ, ĐẸP KỲ LẠ"
        }
    },
    {
        "id": "trv-16",
        "topic": "Traveling",
        "word": "super",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NGUY NGA, TR ÁNG LỆ, TUYỆT VỜI",
        "example": "T AYLOR SCORED A SUPER GOAL AT THE END O F THE ﬁRST HALF. OR E",
        "exampleTranslation": "T AYLOR ĐÃ GHI MỘT BÀN THẮNG TUYỆT VỜI VÀO CUỐI HIỆP MỘT.",
        "translations": {
            "vi": "NGUY NGA, TR ÁNG LỆ, TUYỆT VỜI"
        }
    },
    {
        "id": "trv-17",
        "topic": "Traveling",
        "word": "baggage",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HÀNH LÝ",
        "example": "HO W MANY PIECE S OF BAGGAGE DO Y OU HAVE fi",
        "exampleTranslation": "BẠN CÓ BAO NHIÊU KIỆN HÀNH LÝfi",
        "translations": {
            "vi": "HÀNH LÝ"
        }
    },
    {
        "id": "trv-18",
        "topic": "Traveling",
        "word": "destination",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐÍCH, ĐIỂM ĐẾN",
        "example": "WE ARRIVED AT OUR DESTINATION TIRED AND HUNGRY.",
        "exampleTranslation": "CHÚNG TÔI ĐẾN ĐÍCH V ỚI SỰ MỆT MỎI VÀ ĐÓI.",
        "translations": {
            "vi": "ĐÍCH, ĐIỂM ĐẾN"
        }
    },
    {
        "id": "trv-19",
        "topic": "Traveling",
        "word": "missing",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BỊ MẤT, THẤT LẠC",
        "example": "HER F ATHER HAS BEEN MISSING SINCE SEPTEMBER 1992.",
        "exampleTranslation": "CHA CỦA CÔ ĐÃ MẤT TÍCH TỪ THÁNG 9 NĂM 1992.",
        "translations": {
            "vi": "BỊ MẤT, THẤT LẠC"
        }
    },
    {
        "id": "trv-20",
        "topic": "Traveling",
        "word": "locate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CÓ VỊ TRÍ, NẰM Ở, ĐỊNH VỊ",
        "example": "OUR OFFICE IS LOCATED IN MIDTOWN MANHATTAN.",
        "exampleTranslation": "VĂN PHÒNG CỦA CHÚNG TÔI NẰM Ở KHU TRUNG TÂM MANHATTAN.",
        "translations": {
            "vi": "CÓ VỊ TRÍ, NẰM Ở, ĐỊNH VỊ"
        }
    },
    {
        "id": "trv-21",
        "topic": "Traveling",
        "word": "duty",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THUẾ, NHIỆM VỤ/NGHĨA VỤ",
        "example": "I FELT IT WAS MY DUTY TO TELL THEM THE TRUTH.",
        "exampleTranslation": "T ÔI CẢM THẤY NHIỆM VỤ CỦA MÌNH LÀ PHẢI NÓI CHO HỌ BIẾT SỰ THẬT.",
        "translations": {
            "vi": "THUẾ, NHIỆM VỤ/NGHĨA VỤ"
        }
    },
    {
        "id": "trv-22",
        "topic": "Traveling",
        "word": "process",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUÁ TRÌNH, TIẾN TRÌNH",
        "example": "GOING TO COURT TO OBT AIN COMPENSATION IS A LONG PROCESS.",
        "exampleTranslation": "RA TÒA ĐỂ ĐÒI BỒI THƯỜNG LÀ MỘT QUÁ TRÌNH LÂU DÀI.",
        "translations": {
            "vi": "QUÁ TRÌNH, TIẾN TRÌNH"
        }
    },
    {
        "id": "trv-23",
        "topic": "Traveling",
        "word": "board",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÊN (TÀU, X E, MÁY BAY)",
        "example": "THEY BOARDED A SHIP THAT WAS SAILING THE NEXT DAY.",
        "exampleTranslation": "HỌ LÊN MỘT CON TÀU RA KHƠI VÀO NGÀY HÔM SAU. DECLARE (ĐỂ ĐÓNG THUẾ)",
        "translations": {
            "vi": "LÊN (TÀU, X E, MÁY BAY)"
        }
    },
    {
        "id": "trv-24",
        "topic": "Traveling",
        "word": "depart",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KHỞI HÀNH",
        "example": "THE PLANE DEPARTS AT 6 A.M.",
        "exampleTranslation": "MÁY BAY KHỞI HÀNH LÚC 6 GIỜ SÁNG.",
        "translations": {
            "vi": "KHỞI HÀNH"
        }
    },
    {
        "id": "trv-25",
        "topic": "Traveling",
        "word": "emergency",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TRƯỜNG HỢP KHẨN CẤP",
        "example": "IS THE EMER GENCY E XIT SUIT ABLE F OR WHEELCHAIR S fi",
        "exampleTranslation": "LỐI THOÁT TRONG TRƯỜNG HỢP KHẨN CẤP PHÙ HỢP CHO X E LĂN fi",
        "translations": {
            "vi": "TRƯỜNG HỢP KHẨN CẤP"
        }
    },
    {
        "id": "trv-26",
        "topic": "Traveling",
        "word": "passenger",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HÀNH KHÁCH",
        "example": "ALL PAS SENGERS FOR ﬂIGHT LH103 PLEASE PROCEED TO GATE 16.",
        "exampleTranslation": "T ẤT CẢ HÀNH KHÁCH ĐÁP CHUYẾN BAY LH103 VUI LÒNG LÀM THỦ TỤC RA CỔNG 16.",
        "translations": {
            "vi": "HÀNH KHÁCH"
        }
    },
    {
        "id": "trv-27",
        "topic": "Traveling",
        "word": "carrier",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI VẬN CHUYỂN, HÃNG VẬN TẢI",
        "example": "THE COMPANY IS ONE OF JAPA N'S BIGGEST MOBILE PHONE CARRIERS.",
        "exampleTranslation": "CÔNG TY LÀ MỘT TRONG NHỮNG NHÀ CUNG CẤP ĐIỆN THOẠI DI ĐỘNG LỚN NHẤT NHẬT BẢN. CONFUSE GÂY BỐI RỐI",
        "translations": {
            "vi": "NGƯỜI VẬN CHUYỂN, HÃNG VẬN TẢI"
        }
    },
    {
        "id": "trv-28",
        "topic": "Traveling",
        "word": "arrive",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẾN, TỚI NƠI",
        "example": "WHAT TIME WILL YOUR TRAIN ARRIVEfi",
        "exampleTranslation": "CHUYẾN TÀU CỦA BẠN SẼ ĐẾN LÚC MẤY GIỜfi",
        "translations": {
            "vi": "ĐẾN, TỚI NƠI"
        }
    },
    {
        "id": "trv-29",
        "topic": "Traveling",
        "word": "customs",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HẢI QUAN",
        "example": "IT T OOK S T O GE T THR OUGH CUS T OMS WHEN W E GOT BACK FR OM IT ALY.",
        "exampleTranslation": "CHÚNG T ÔI ĐÃ MẤT NHIỀU THỜI GIAN ĐỂ LÀM THỦ TỤC HẢI QUAN KHI CHÚNG T ÔI TR Ở V Ề TỪ Ý.",
        "translations": {
            "vi": "HẢI QUAN"
        }
    },
    {
        "id": "trv-30",
        "topic": "Traveling",
        "word": "indulge",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHIỀU THEO; T ẬN HƯỞNG, S AY MÊ",
        "example": "I LOVE CHAMPAGNE BUT I DON 'T O FT EN INDULGE M YS ELF.",
        "exampleTranslation": "T ÔI THÍCH RƯỢU S ÂM PANH NHƯNG T ÔI KHÔNG THƯỜNG XUY ÊN T ẬN HƯỞNG.",
        "translations": {
            "vi": "CHIỀU THEO; T ẬN HƯỞNG, S AY MÊ"
        }
    },
    {
        "id": "trv-31",
        "topic": "Traveling",
        "word": "proximity",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ GẦN, SỰ LÂN CẬN",
        "example": "THE BEST THING ABOUT THE LOCATION O F THE HOUS E IS IT S PR OX IMITY T O THE T O WN CENTR E. XIMITY T O THE T O WN C",
        "exampleTranslation": "ĐIỀU T ỐT NHẤT V Ề VỊ TRÍ CỦA NGÔI NHÀ LÀ GẦN TRUNG T ÂM THỊ TR ẤN.",
        "translations": {
            "vi": "SỰ GẦN, SỰ LÂN CẬN"
        }
    },
    {
        "id": "trv-32",
        "topic": "Traveling",
        "word": "seating",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHỖ NGỒI; SỰ S ẮP CHỖ",
        "example": "THE CAR HAS S EATING F OR SIX.",
        "exampleTranslation": "CHIẾC X E CÓ CHỖ NGỒI CHO S ÁU NGƯỜI.",
        "translations": {
            "vi": "CHỖ NGỒI; SỰ S ẮP CHỖ"
        }
    },
    // ==========================================
    // TOPIC 12: CONTRACTS (con-01 → con-29)
    // ==========================================
    {
        "id": "con-01",
        "topic": "Contracts",
        "word": "proposal",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐỀ XUẤT, LỜI ĐỀ NGHỊ",
        "example": "HAVE Y OU R EAD S T EVE' S PR OPOS ALS F OR THE NEW PR O JECTfi",
        "exampleTranslation": "BẠN ĐÃ ĐỌC ĐỀ XUẤT CỦA S T EVE CHO DỰ ÁN MỚI CHƯAfi",
        "translations": {
            "vi": "SỰ ĐỀ XUẤT, LỜI ĐỀ NGHỊ"
        }
    },
    {
        "id": "con-02",
        "topic": "Contracts",
        "word": "term",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐIỀU KHOẢN; THỜI HẠN",
        "example": "HE S ERV ED A SHORT T ERM F OR DRUNK DRIVING.",
        "exampleTranslation": "ANH T A ĐÃ PHỤC VỤ TRONG THỜI HẠN NGẮN VÌ T ỘI LÁI X E TRONG TÌNH TR ẠNG S AY RƯỢU.",
        "translations": {
            "vi": "ĐIỀU KHOẢN; THỜI HẠN"
        }
    },
    {
        "id": "con-03",
        "topic": "Contracts",
        "word": "review",
        "phonetic": "",
        "pos": "verb",
        "meaning": "XEM X É T, DUY Ệ T LẠI, PHÊ BÌNH",
        "example": "LE T' S R E VIE W WHAT HAS HAPPENED S O FA R.",
        "exampleTranslation": "HÃY XEM LẠI NHỮNG GÌ ĐÃ X ẢY R A CHO ĐẾN NAY.",
        "translations": {
            "vi": "XEM X É T, DUY Ệ T LẠI, PHÊ BÌNH"
        }
    },
    {
        "id": "con-04",
        "topic": "Contracts",
        "word": "contract",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HỢP ĐỒNG",
        "example": "MY S OLICIT OR IS DR AWING UP A CONTRACT.",
        "exampleTranslation": "LUẬT SƯ CỦA T ÔI ĐANG LẬP MỘT HỢP ĐỒNG.",
        "translations": {
            "vi": "HỢP ĐỒNG"
        }
    },
    {
        "id": "con-05",
        "topic": "Contracts",
        "word": "originally",
        "phonetic": "",
        "pos": "adv",
        "meaning": "BAN ĐẦU, KHỞI ĐẦU",
        "example": "THE BUILDING W AS ORIGINALLY V ICTORIAN IN DE SIGN.",
        "exampleTranslation": "TÒA NHÀ BAN ĐẦU ĐƯỢC THIẾ T K Ế THEO PHONG CÁCH V ICTORIA. DIRECTION dɪˈrek.ʃən/ PHƯƠNG HƯỚNG",
        "translations": {
            "vi": "BAN ĐẦU, KHỞI ĐẦU"
        }
    },
    {
        "id": "con-06",
        "topic": "Contracts",
        "word": "initially",
        "phonetic": "",
        "pos": "adv",
        "meaning": "LÚC ĐẦU, BAN ĐẦU",
        "example": "INITIALLY, MOS T PEOPLE APPR OVED O F THE NEW PLAN.",
        "exampleTranslation": "BAN ĐẦU, HẦU HẾ T MỌI NGƯỜI ĐỀU T ÁN THÀNH K Ế HOẠCH MỚI.",
        "translations": {
            "vi": "LÚC ĐẦU, BAN ĐẦU"
        }
    },
    {
        "id": "con-07",
        "topic": "Contracts",
        "word": "expire",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HẾ T HẠN, HẾ T HIỆU LỰC",
        "example": "MY PAS SPORT E XPIRE S NEX T MONTH.",
        "exampleTranslation": "HỘ CHIẾU CỦA T ÔI S Ẽ HẾ T HẠN V ÀO THÁNG T ỚI.",
        "translations": {
            "vi": "HẾ T HẠN, HẾ T HIỆU LỰC"
        }
    },
    {
        "id": "con-08",
        "topic": "Contracts",
        "word": "collaborate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CỘNG T ÁC, HỢP T ÁC",
        "example": "TW O WRIT ER S COLLABOR AT ED ON THE S CRIPT F OR THE ﬁLM.",
        "exampleTranslation": "HAI NHÀ BIÊN KỊCH ĐÃ HỢP T ÁC VIẾ T KỊCH BẢN CHO BỘ PHIM.",
        "translations": {
            "vi": "CỘNG T ÁC, HỢP T ÁC"
        }
    },
    {
        "id": "con-09",
        "topic": "Contracts",
        "word": "dedicate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CỐNG HIẾN, T ẬN T ÂM, DÀNH CHO",
        "example": "HE HAS DEDICAT ED HIS LIF E T O S CIENTIﬁC R ES EAR CH.",
        "exampleTranslation": "ÔNG ĐÃ DÀNH CẢ CUỘC ĐỜI CỦA MÌNH CHO NGHIÊN CỨ U KHOA HỌC.",
        "translations": {
            "vi": "CỐNG HIẾN, T ẬN T ÂM, DÀNH CHO"
        }
    },
    {
        "id": "con-10",
        "topic": "Contracts",
        "word": "renew",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM MỚI, GIA HẠN (HỢP ĐỒNG)",
        "example": "I FORGOT TO RENEW MY S EASON TICKET.",
        "exampleTranslation": "T ÔI ĐÃ QUÊN GIA HẠN VÉ MÙA CỦA MÌNH.",
        "translations": {
            "vi": "LÀM MỚI, GIA HẠN (HỢP ĐỒNG)"
        }
    },
    {
        "id": "con-11",
        "topic": "Contracts",
        "word": "dispute",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CUỘC TRANH LUẬN, SỰ BẤT ĐỒNG",
        "example": "THE UNIONS ARE IN DISPUTE WITH MANAGEMENT OVER PAY.",
        "exampleTranslation": "CÁC CÔNG ĐOÀN ĐANG TRANH CHẤP VỚI VIỆC QUẢN LÝ VỀ TIỀN LƯƠNG.",
        "translations": {
            "vi": "CUỘC TRANH LUẬN, SỰ BẤT ĐỒNG"
        }
    },
    {
        "id": "con-12",
        "topic": "Contracts",
        "word": "impression",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ẤN TƯỢNG",
        "example": "WHAT WAS YOUR IMPRESSION OF CHARLOTTE'S HUSBANDfi",
        "exampleTranslation": "ẤN TƯỢNG CỦA BẠN VỀ CHỒNG CỦA CHARLOTTE LÀ GÌfi",
        "translations": {
            "vi": "ẤN TƯỢNG"
        }
    },
    {
        "id": "con-13",
        "topic": "Contracts",
        "word": "option",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỰA CHỌN, QUYỀN LỰA CHỌN",
        "example": "THE BEST OPTION WOULD BE TO CANCEL THE TRIP ALTOGETHER.",
        "exampleTranslation": "LỰA CHỌN TỐT NHẤT LÀ HỦY CHUYẾN ĐI HOÀN TOÀN.",
        "translations": {
            "vi": "LỰA CHỌN, QUYỀN LỰA CHỌN"
        }
    },
    {
        "id": "con-14",
        "topic": "Contracts",
        "word": "terminate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHẤM DỨT, HOÀN THÀNH",
        "example": "THEY TERMINATED MY CONTRACT IN OCTOBER.",
        "exampleTranslation": "HỌ ĐÃ CHẤM DỨT HỢP ĐỒNG CỦA TÔI VÀO THÁNG MƯỜI.",
        "translations": {
            "vi": "CHẤM DỨT, HOÀN THÀNH"
        }
    },
    {
        "id": "con-15",
        "topic": "Contracts",
        "word": "proceed",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TIẾN HÀNH, TIẾP TỤC",
        "example": "HIS LAWY ER S HAVE DECIDED NOT T O PR OCEED WITH THE CAS E.",
        "exampleTranslation": "CÁC LUẬT SƯ CỦA ÔNG ĐÃ QUY Ế T ĐỊNH KHÔNG TIẾP TỤC VỤ VIỆC.",
        "translations": {
            "vi": "TIẾN HÀNH, TIẾP TỤC"
        }
    },
    {
        "id": "con-16",
        "topic": "Contracts",
        "word": "narrow",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THU HẸP, GIẢM BỚT",
        "example": "THE R OAD NARROWS AFT ER THE BRIDGE.",
        "exampleTranslation": "CON ĐƯỜNG HẸP DẦN S AU CÂY CẦU.",
        "translations": {
            "vi": "THU HẸP, GIẢM BỚT"
        }
    },
    {
        "id": "con-17",
        "topic": "Contracts",
        "word": "foundation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NỀN T ẢNG, SỰ THÀNH LẬP",
        "example": "HER YOUNGE S HER YOUNGEST CHILD STA RT S (IN) FOUNDATION IN SEPTEMBER. START S (IN) FOUND",
        "exampleTranslation": "ĐỨA CON ÚT CỦA CÔ BẮT ĐẦU THÀNH LẬP V ÀO THÁNG 9.",
        "translations": {
            "vi": "NỀN T ẢNG, SỰ THÀNH LẬP"
        }
    },
    {
        "id": "con-18",
        "topic": "Contracts",
        "word": "alliance",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ LIÊN MINH, KHỐI LIÊN MINH",
        "example": "NAT O IS SOMETIME S CALLED THE ATLANTIC ALLIANCE.",
        "exampleTranslation": "NAT O ĐÔI KHI ĐƯỢC GỌI LÀ LIÊN MINH ĐẠI TÂY DƯƠNG.",
        "translations": {
            "vi": "SỰ LIÊN MINH, KHỐI LIÊN MINH"
        }
    },
    {
        "id": "con-19",
        "topic": "Contracts",
        "word": "stipulation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ QUY ĐỊNH, ĐIỀU KHOẢN QUY ĐỊNH",
        "example": "THE ONLY STIPULATION IS THAT CANDIDATES MUST BE OVE R THE AGE O F 3 5.",
        "exampleTranslation": "ĐIỀU KHOẢN QUY ĐỊNH DUY NHẤT LÀ ỨNG VIÊN PHẢI TR ÊN 35 TUỔI.",
        "translations": {
            "vi": "SỰ QUY ĐỊNH, ĐIỀU KHOẢN QUY ĐỊNH"
        }
    },
    {
        "id": "con-20",
        "topic": "Contracts",
        "word": "compromise",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THOẢ HIỆP",
        "example": "IT IS HOPED THAT A COMPROMISE WILL BE REACHED IN TODAY'S TALKS.",
        "exampleTranslation": "NGƯỜI TA HY VỌNG RẰNG MỘT THỎA HIỆP SẼ ĐẠT ĐƯỢC TRONG CUỘC HỘI ĐÀM HÔM NAY.",
        "translations": {
            "vi": "SỰ THOẢ HIỆP"
        }
    },
    {
        "id": "con-21",
        "topic": "Contracts",
        "word": "deadlock",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ BẾ TẮC, SỰ ĐÌNH TRỆ",
        "example": "ONCE AGAIN THE TALKS HAVE ENDED IN DEADLOCK.",
        "exampleTranslation": "MỘT LẦN NỮA CUỘC ĐÀM PHÁN ĐÃ KẾT THÚC TRONG SỰ BẾ TẮC.",
        "translations": {
            "vi": "SỰ BẾ TẮC, SỰ ĐÌNH TRỆ"
        }
    },
    {
        "id": "con-22",
        "topic": "Contracts",
        "word": "signature",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHỮ KÝ",
        "example": "I MISTOOK YOUR SIGNATURE AND THOUGHT THE LETTER WAS FROM SOMEONE ELSE.",
        "exampleTranslation": "T ÔI ĐÃ NHẦM CHỮ KÝ CỦA BẠN VÀ NGHĨ RẰNG BỨC THƯ LÀ CỦA NGƯỜI KHÁC.",
        "translations": {
            "vi": "CHỮ KÝ"
        }
    },
    {
        "id": "con-23",
        "topic": "Contracts",
        "word": "cooperatively",
        "phonetic": "",
        "pos": "adv",
        "meaning": "HỢP TÁC",
        "example": "HE TESTIﬁED FULLY AND COOPERATIVELY.",
        "exampleTranslation": "ANH ẤY ĐÃ LÀM CHỨNG ĐẦY ĐỦ VÀ HỢP TÁC. C OMMI SS ION HỘI ĐỒNG, UỶ BAN",
        "translations": {
            "vi": "HỢP TÁC"
        }
    },
    {
        "id": "con-24",
        "topic": "Contracts",
        "word": "objection",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ PHẢN ĐỐI, SỰ BẤT BÌNH",
        "example": "A COUPLE OF PEOPLE VOICED OBJECTIONS TO THE PROPOSAL.",
        "exampleTranslation": "MỘT VÀI NGƯỜI ĐÃ LÊN TIẾNG PHẢN ĐỐI ĐỀ XUẤT NÀY.",
        "translations": {
            "vi": "SỰ PHẢN ĐỐI, SỰ BẤT BÌNH"
        }
    },
    {
        "id": "con-25",
        "topic": "Contracts",
        "word": "security",
        "phonetic": "",
        "pos": "noun",
        "meaning": "AN NINH, SỰ BẢO VỆ",
        "example": "THE STATION WAS CLOSED FOR TWO HOURS BECAUSE OF A SECURITY ALERT.",
        "exampleTranslation": "NHÀ GA ĐÃ BỊ ĐÓNG CỬA TRONG HAI GIỜ VÌ CÓ CẢNH BÁO AN NINH.",
        "translations": {
            "vi": "AN NINH, SỰ BẢO VỆ"
        }
    },
    {
        "id": "con-26",
        "topic": "Contracts",
        "word": "modify",
        "phonetic": "",
        "pos": "verb",
        "meaning": "SỬA ĐỔI, ĐIỀU CHỈNH",
        "example": "THE PROPOSALS WERE UNPOPULAR AND WERE ONLY ACCEPTED IN A MODIﬁED FORM.",
        "exampleTranslation": "CÁC ĐỀ XUẤT KHÔNG ĐƯỢC ƯA CHUỘNG VÀ CHỈ ĐƯỢC CHẤP NHẬN Ở DẠNG ĐÃ SỬA ĐỔI.",
        "translations": {
            "vi": "SỬA ĐỔI, ĐIỀU CHỈNH"
        }
    },
    {
        "id": "con-27",
        "topic": "Contracts",
        "word": "bid",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐẮT GIÁ, SỰ BỎ THẦU",
        "example": "I MADE A BID OF $150 FOR THE PAINTING.",
        "exampleTranslation": "T ÔI ĐÃ RA GIÁ 150 ĐÔ LA CHO BỨC TRANH.",
        "translations": {
            "vi": "SỰ ĐẮT GIÁ, SỰ BỎ THẦU"
        }
    },
    {
        "id": "con-28",
        "topic": "Contracts",
        "word": "settle",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIẢI QUYẾ T, DÀN XẾP",
        "example": "THEY HAVEN'T YET SETTLED WHEN THE WEDDING IS GOING TO BE.",
        "exampleTranslation": "HỌ V ẪN CHƯA GIẢI QUYẾ T KHI NÀO ĐÁM CƯỚI SẼ DIỄN RA.",
        "translations": {
            "vi": "GIẢI QUYẾ T, DÀN XẾP"
        }
    },
    {
        "id": "con-29",
        "topic": "Contracts",
        "word": "challenging",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐẦY THÁCH THỨC, KHÓ KHĂN",
        "example": "FOR A REPORTER, COVERING THE WHITE HOUSE IS A CHALLENGING ASSIGNMENT.",
        "exampleTranslation": "ĐỐI VỚI MỘT PHÓNG VIÊN, ĐƯA TIN VỀ NHÀ TRẮNG LÀ MỘT NHIỆM VỤ ĐẦY THÁCH THỨC.",
        "translations": {
            "vi": "ĐẦY THÁCH THỨC, KHÓ KHĂN"
        }
    },
    // ==========================================
    // TOPIC 13: TRADING (tra-01 → tra-28)
    // ==========================================
    {
        "id": "tra-01",
        "topic": "Trading",
        "word": "refuse",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TỪ CHỐI",
        "example": "HE ASK ED MET O GIV E HIM ANOTHER LOAN, BUT I R EF",
        "exampleTranslation": "ANH T A Y ÊU CẦU T ÔI CHO ANH T A MỘT KHOẢN VA Y KHÁC, NHƯNG T ÔI TỪ CHỐI.",
        "translations": {
            "vi": "TỪ CHỐI"
        }
    },
    {
        "id": "tra-02",
        "topic": "Trading",
        "word": "temporarily",
        "phonetic": "",
        "pos": "adv",
        "meaning": "T ẠM THỜI, NHẤT THỜI",
        "example": "THIS O ﬃCE IS CLOS ED T EMPOR ARILY F OR R EDECOR ATION.",
        "exampleTranslation": "VĂN PHÒNG NÀY T ẠM THỜI ĐÓNG CỬA ĐỂ TR ANG TRÍ LẠI.",
        "translations": {
            "vi": "T ẠM THỜI, NHẤT THỜI"
        }
    },
    {
        "id": "tra-03",
        "topic": "Trading",
        "word": "bulk",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LỚN NHIỀU",
        "example": "WE S ELL BULK C Oﬀ EE T O R ESTA UR ANTS.",
        "exampleTranslation": "CHÚNG T ÔI BÁN CÀ PHÊ S Ố LƯỢNG LỚN CHO CÁC NHÀ HÀNG.",
        "translations": {
            "vi": "LỚN NHIỀU"
        }
    },
    {
        "id": "tra-04",
        "topic": "Trading",
        "word": "short",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NGẮN, THIẾU, KHÔNG ĐỦ",
        "example": "HER HAIR IS MUCH SHORT ER THAN IT T O BE.",
        "exampleTranslation": "TÓC CỦA CÔ ẤY NGẮN HƠN NHIỀU S O V ỚI TRƯỚC ĐÂY.",
        "translations": {
            "vi": "NGẮN, THIẾU, KHÔNG ĐỦ"
        }
    },
    {
        "id": "tra-05",
        "topic": "Trading",
        "word": "cost",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GIÁ, CHI PHÍ",
        "example": "IN MOS T F AMILIE S, TW O S ALARIE S ARE E SS ENTIAL T O C OVE R THE COS T O F R AISING A F AMILY.",
        "exampleTranslation": "TRONG HẦU HẾ T CÁC GIA ĐÌNH, HAI KHOẢN LƯƠNG LÀ ĐIỀU CẦN THIẾ T ĐỂ TR ANG TR ẢI CHI PHÍ NUÔI GIA ĐÌNH.",
        "translations": {
            "vi": "GIÁ, CHI PHÍ"
        }
    },
    {
        "id": "tra-06",
        "topic": "Trading",
        "word": "order",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẶT HÀNG, Y ÊU CẦU",
        "example": "ANNE OR DER ED ANOTHER GLAS S O F WINE.",
        "exampleTranslation": "ANNE Y ÊU CẦU THÊM MỘT LY RƯỢU.",
        "translations": {
            "vi": "ĐẶT HÀNG, Y ÊU CẦU"
        }
    },
    {
        "id": "tra-07",
        "topic": "Trading",
        "word": "provide",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CUNG CẤP, DỰ PHÒNG",
        "example": "THIS BOOKLE T PR O VIDE S INF ORMATION ABOUT LOCAL S ERVIC ES.",
        "exampleTranslation": "TẬP S ÁCH NÀY CUNG CẤP THÔNG TIN HỮU ÍCH V Ề CÁC DỊCH VỤ ĐỊA PHƯƠNG.",
        "translations": {
            "vi": "CUNG CẤP, DỰ PHÒNG"
        }
    },
    {
        "id": "tra-08",
        "topic": "Trading",
        "word": "contact",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LIÊN LẠC, LIÊN HỆ",
        "example": "I TRIED T O CONT ACT HIM AT HIS O ﬃC E, BUT HE W ASN 'T IN.",
        "exampleTranslation": "TÔI ĐÃ CỐ GẮNG LIÊN LẠC V ỚI ANH ẤY T ẠI V ĂN PHÒNG CỦA ANH ẤY, NHƯNG ANH ẤY KHÔNG VÀ O.",
        "translations": {
            "vi": "LIÊN LẠC, LIÊN HỆ"
        }
    },
    {
        "id": "tra-09",
        "topic": "Trading",
        "word": "discount",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ GIẢM, TIỀN CHIẾT KHẤU",
        "example": "THEY GIVE YOU A DISCOUNT IF YOU BUY MULTIPLE COPIES.",
        "exampleTranslation": "HỌ THƯỜNG GIẢM GIÁ CHO BẠN NẾU BẠN MUA NHIỀU BẢN. AC QUISITION V ẬT ĐƯỢC MUA",
        "translations": {
            "vi": "SỰ GIẢM, TIỀN CHIẾT KHẤU"
        }
    },
    {
        "id": "tra-10",
        "topic": "Trading",
        "word": "assure",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẢM BẢO, CAM ĐOAN",
        "example": "THE UNIONS ASSURED THE NEW O WNERS OF THE WORKERS' LOYALTY TO THE COMPANY.",
        "exampleTranslation": "CÁC CÔNG ĐOÀN ĐẢM BẢO VỚI NHỮNG NGƯỜI CHỦ MỚI VỀ LÒNG TRUNG THÀNH CỦA CÔNG NHÂN ĐỐI VỚI CÔNG TY. CÔNG T Y.",
        "translations": {
            "vi": "ĐẢM BẢO, CAM ĐOAN"
        }
    },
    {
        "id": "tra-11",
        "topic": "Trading",
        "word": "seek",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TÌM KIẾM, THEO ĐUỔI",
        "example": "\"ARE Y OU ACTIV ELY S EEKING JOBS fi\" SHE ASK ED.",
        "exampleTranslation": "\"BẠN ĐANG TÍCH CỰC TÌM KIẾM VIỆC LÀM fi\" CÔ ẤY HỎI. SA TISF AC TO RY THOẢ ĐÁNG",
        "translations": {
            "vi": "TÌM KIẾM, THEO ĐUỔI"
        }
    },
    {
        "id": "tra-12",
        "topic": "Trading",
        "word": "unable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KHÔNG THỂ, KHÔNG CÓ KHẢ NĂNG",
        "example": "W E WERE UNABLE T O GE T FUNDING AND THER EF OR E HAD T O ABANDON THE PR O JECT.",
        "exampleTranslation": "CHÚNG T ÔI KHÔNG THỂ NHẬN ĐƯỢC T ÀI TR Ợ V À DO ĐÓ PHẢI Ừ BỎ DỰ ÁN.",
        "translations": {
            "vi": "KHÔNG THỂ, KHÔNG CÓ KHẢ NĂNG"
        }
    },
    {
        "id": "tra-13",
        "topic": "Trading",
        "word": "payment",
        "phonetic": "",
        "pos": "noun",
        "meaning": "VIỆC TR Ả TIỀN, KHOẢN THANH T OÁN",
        "example": "W HEN IS THE ﬁRST PAYMENT DUE fi",
        "exampleTranslation": "KHI NÀO KHOẢN THANH T OÁN ĐẦU TIÊN ĐẾN HẠN fi",
        "translations": {
            "vi": "VIỆC TR Ả TIỀN, KHOẢN THANH T OÁN"
        }
    },
    {
        "id": "tra-14",
        "topic": "Trading",
        "word": "bargain",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ MẶC CẢ, MÓN HỜI",
        "example": "THIS COAT W AS HALF-PRICE - A R EAL BAR GAIN.",
        "exampleTranslation": "CHIẾC ÁO KHOÁC NÀY ĐÃ ĐƯỢC MỘT NỬA GIÁ - MỘ T MÓN HỜI THỰC SỰ.",
        "translations": {
            "vi": "SỰ MẶC CẢ, MÓN HỜI"
        }
    },
    {
        "id": "tra-15",
        "topic": "Trading",
        "word": "represent",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẠI DIỆN, TIÊU BIỂU CHO",
        "example": "THE Y CHOS E A F AMOUS BARRIS TE R TO R EPRE SE NT THEM IN COURT.",
        "exampleTranslation": "HỌ ĐÃ CHỌN MỘT LUẬT SƯ NỔI TIẾNG ĐỂ ĐẠI DIỆN CHO H Ọ TRƯỚC T ÒA.",
        "translations": {
            "vi": "ĐẠI DIỆN, TIÊU BIỂU CHO"
        }
    },
    {
        "id": "tra-16",
        "topic": "Trading",
        "word": "dealer",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI BUÔN BÁN, LÁI BUÔN",
        "example": "THE DEALER W AS TRYING TO PASS Oﬀ FAKES AS VALUABLE ANTIQUES.",
        "exampleTranslation": "NGƯỜI BUÔN BÁN ĐÃ CỐ GẮNG CHUYỂN NHỮNG MÓN ĐỒ GIẢ THÀNH ĐỒ CỔ CÓ GIÁ TRỊ.",
        "translations": {
            "vi": "NGƯỜI BUÔN BÁN, LÁI BUÔN"
        }
    },
    {
        "id": "tra-17",
        "topic": "Trading",
        "word": "inventory",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HÀNG TỒN KHO",
        "example": "OUR INVENTORY OF CARS IS THE BEST IN TOWN.",
        "exampleTranslation": "NGƯỜI BUÔN BÁN CỐ GẮNG CHUYỂN NHỮNG MÓN ĐỒ THÀNH ĐỒ CỔ CÓ GIÁ TRỊ.",
        "translations": {
            "vi": "HÀNG TỒN KHO"
        }
    },
    {
        "id": "tra-18",
        "topic": "Trading",
        "word": "commercial",
        "phonetic": "",
        "pos": "adj",
        "meaning": "(THUỘC THƯƠNG MẠI)",
        "example": "THE COMMER CIAL FUTURE OF THE COMPANY LOOKS VERY PROMISING. UREOFTHE",
        "exampleTranslation": "T ƯƠNG LAI THƯƠNG MẠI CỦA CÔNG TY CÓ VẺ RẤT HỨA HẸN.",
        "translations": {
            "vi": "(THUỘC THƯƠNG MẠI)"
        }
    },
    {
        "id": "tra-19",
        "topic": "Trading",
        "word": "invoice",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HOÁ ĐƠN",
        "example": "I RAISED AN INVOICE FOR WORK DONE LAST YEAR AND LAST MONTH.",
        "exampleTranslation": "T ÔI ĐÃ TĂNG MỘT HÓA ĐƠN CHO CÔNG VIỆC ĐÃ HOÀN THÀNH VÀO NĂM NGOÁI VÀ SỬ DỤNG VÀO THÁNG TRƯỚC.",
        "translations": {
            "vi": "HOÁ ĐƠN"
        }
    },
    {
        "id": "tra-20",
        "topic": "Trading",
        "word": "move",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHUY ỂN ĐỘNG, DI CHUYỂN",
        "example": "I'M S O COLD I CAN'T M OVE MY ﬁNGERS.",
        "exampleTranslation": "TT ÔI LẠNH ĐẾN MỨC KHÔNG THỂ CỬ ĐỘNG CÁC NGÓN TAY CỦA MÌNH.",
        "translations": {
            "vi": "CHUY ỂN ĐỘNG, DI CHUYỂN"
        }
    },
    {
        "id": "tra-21",
        "topic": "Trading",
        "word": "distribute",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÂN PHỐI/PHÂN PHÁT",
        "example": "THE BOOK S WILL BE DISTRIBUTED FREE TO LOCAL SCHOOLS.",
        "exampleTranslation": "SÁCH SẼ ĐƯỢC PHÂN PHÁT MIỄN PHÍ CHO CÁC TRƯỜNG HỌC ĐỊA PHƯƠNG.",
        "translations": {
            "vi": "PHÂN PHỐI/PHÂN PHÁT"
        }
    },
    {
        "id": "tra-22",
        "topic": "Trading",
        "word": "stock",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHO HÀNG, NGUỒN HÀNG; CỔ PHẦN",
        "example": "THE LOCAL SHOP HAS A GOOD STOCK OF POSTCARDS AND GUIDEBOOKS.",
        "exampleTranslation": "KHO HÀNG ĐỊA PHƯƠNG CÓ RẤT NHIỀU BƯU THIẾP VÀ SÁCH HƯỚNG DẪN.",
        "translations": {
            "vi": "KHO HÀNG, NGUỒN HÀNG; CỔ PHẦN"
        }
    },
    {
        "id": "tra-23",
        "topic": "Trading",
        "word": "rating",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐÁNH GIÁ, THỨ BẬC",
        "example": "THE GOVERNMENT'S POPULARITY RATING SANK TO AN ALL-TIME LOW.",
        "exampleTranslation": "XẾP HẠNG MỨC ĐỘ PHỔ BIẾN CỦA CHÍNH PHỦ ĐÃ GIẢM XUỐNG MỨC THẤP NHẤT MỌI THỜI ĐẠI.",
        "translations": {
            "vi": "SỰ ĐÁNH GIÁ, THỨ BẬC"
        }
    },
    {
        "id": "tra-24",
        "topic": "Trading",
        "word": "encompass",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BAO QUANH, BAO GỒM",
        "example": "THE PLAN ENCOMPASSES REPAVING THE STREET AND PLANTING 40 NEW TREES.",
        "exampleTranslation": "KẾ HOẠCH BAO GỒM CẢI TẠO ĐƯỜNG PHỐ VÀ TRỒNG MỚI 40 CÂY XANH.",
        "translations": {
            "vi": "BAO QUANH, BAO GỒM"
        }
    },
    {
        "id": "tra-25",
        "topic": "Trading",
        "word": "market",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THỊ TRƯỜNG",
        "example": "ARE Y OU SUR E THER E' S A MARK E T F OR THE PR ODUCTfi",
        "exampleTranslation": "BẠN CÓ CHẮC LÀ CÓ THỊ TRƯỜNG CHO S ẢN PHẨM KHÔNGfi",
        "translations": {
            "vi": "THỊ TRƯỜNG"
        }
    },
    {
        "id": "tra-26",
        "topic": "Trading",
        "word": "commodity",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HÀNG HOÁ, MẶT HÀNG",
        "example": "THE COUNTRY' S MOS T V ALUABLE COMMODITIE S INCLUDE TIN AND DIAMONDS.",
        "exampleTranslation": "CÁC MẶT HÀNG CÓ GIÁ TRỊ NHẤT CỦA ĐẤT NƯỚC BAO GỒM THIẾC V À KIM CƯƠNG.",
        "translations": {
            "vi": "HÀNG HOÁ, MẶT HÀNG"
        }
    },
    {
        "id": "tra-27",
        "topic": "Trading",
        "word": "quote",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BÁO GIÁ",
        "example": "I ASK ED S EVE R AL COMPANIE S T O GIV E ME A QUOT E F OR NIE S T O GIVE THE BUILDING W ORK.",
        "exampleTranslation": "TÔI ĐÃ Y ÊU CẦU MỘT S Ố CÔNG TY CUNG CẤP CHO T ÔI MỘT ỘT S Ố CÔNG TY CUN G ẤP CHO T ÔI MỘ T BÁO GIÁ CHO CÔNG VIỆC X ÂY DỰNG.",
        "translations": {
            "vi": "BÁO GIÁ"
        }
    },
    {
        "id": "tra-28",
        "topic": "Trading",
        "word": "consignment",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ GỬI HÀNG, SỰ KÝ GỬI (ĐỂ BÁN)",
        "example": "THE MOS T R ECENT CONSIGNMENT O F CLOTH W AS F AULT Y.",
        "exampleTranslation": "LÔ V ẢI GỬI GẦN ĐÂY NHẤT BỊ LỖI.",
        "translations": {
            "vi": "SỰ GỬI HÀNG, SỰ KÝ GỬI (ĐỂ BÁN)"
        }
    },
    // ==========================================
    // TOPIC 14: TRADING TRANSPORT (ttp-01 → ttp-34)
    // ==========================================
    {
        "id": "ttp-01",
        "topic": "Trading Transport",
        "word": "perishable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "DỄ HỎNG, DỄ THỐI",
        "example": "IT' S IMPORT ANT T O S TO R E PERISHABLE F OOD IN A COOL PLAC E.",
        "exampleTranslation": "ĐIỀU QUAN TR ỌNG LÀ PHẢI BẢO QUẢN THỰC PHẨM DỄ HỎNG Ở NƠI THOÁNG MÁT.",
        "translations": {
            "vi": "DỄ HỎNG, DỄ THỐI"
        }
    },
    {
        "id": "ttp-02",
        "topic": "Trading Transport",
        "word": "ensure",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BẢO ĐẢM, QUẢ QUY ẾT",
        "example": "THE AIRLINE IS TAKING STEPS TO ENSURE SAFETY ON ITS AIRCRAFT.",
        "exampleTranslation": "HÃNG ĐANG THỰC HIỆN CÁC BƯỚC ĐỂ ĐẢM BẢO AN TOÀN TRÊN MÁY BAY CỦA MÌNH.",
        "translations": {
            "vi": "BẢO ĐẢM, QUẢ QUY ẾT"
        }
    },
    {
        "id": "ttp-03",
        "topic": "Trading Transport",
        "word": "particularly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐẶC BIỆT, CÁ BIỆT, ĐẶC BIỆT LÀ",
        "example": "I DIDN'T PARTICULARLY WANT TO GO, BUT I HAD TO.",
        "exampleTranslation": "TÔI ĐẶC BIỆT KHÔNG MUỐN ĐI, NHƯNG TÔI PHẢI ĐI.",
        "translations": {
            "vi": "ĐẶC BIỆT, CÁ BIỆT, ĐẶC BIỆT LÀ"
        }
    },
    {
        "id": "ttp-04",
        "topic": "Trading Transport",
        "word": "adequately",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TƯƠNG XỨNG, THÍCH ĐÁNG",
        "example": "MANY COUNTRIES DON' T ADEQUATELY REPORT MISSING PAS SPORTS TO INTERNATIONAL AUTHORITIES.",
        "exampleTranslation": "NHIỀU QUỐC GIA KHÔNG BÁO CÁO THÍCH ĐÁNG HỘ CHIẾU BỊ THIẾU CHO CÁC CƠ QUAN CHỨC NĂNG QUỐC TẾ.",
        "translations": {
            "vi": "TƯƠNG XỨNG, THÍCH ĐÁNG"
        }
    },
    {
        "id": "ttp-05",
        "topic": "Trading Transport",
        "word": "article",
        "phonetic": "",
        "pos": "noun",
        "meaning": "V ẬT PHẨM, ĐỒ; BÀI BÁO; ĐIỀU KHOẢN",
        "example": "THERE WAS AN INTERESTING ARTICLE ON VEGETARIANISM IN THE PAPER YESTERDAY.",
        "exampleTranslation": "CÓ MỘT BÀI BÁO THÚ VỊ VỀ ĂN CHAY TRÊN BÁO NGÀY HÔM QUA.",
        "translations": {
            "vi": "V ẬT PHẨM, ĐỒ; BÀI BÁO; ĐIỀU KHOẢN"
        }
    },
    {
        "id": "ttp-06",
        "topic": "Trading Transport",
        "word": "agency",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐẠI LÝ, CƠ QUAN, HÃNG, SỞ",
        "example": "THE CHARACTER IS A WOMAN WHO HAS LOST HER VOICE AND, WITH IT, HER AGENCY.",
        "exampleTranslation": "NHÂN V ẬT LÀ MỘT NGƯỜI PHỤ NỮ BỊ MẤT GIỌNG NÓI VÀ CÙNG VỚI ĐÓ LÀ CÔNG TY QUẢN LÝ CỦA CÔ.",
        "translations": {
            "vi": "ĐẠI LÝ, CƠ QUAN, HÃNG, SỞ"
        }
    },
    {
        "id": "ttp-07",
        "topic": "Trading Transport",
        "word": "enclose",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BAO GỒM, GỬI KÈM THEO; VÂY QUANH",
        "example": "THE PARK THAT ENCLOSES THE MONUMENT HAS RECENTLY BEEN ENLARGED.",
        "exampleTranslation": "CÔNG VIÊN BAO QUANH TƯỢNG ĐÀI GẦN ĐÂY ĐÃ ĐƯỢC MỞ RỘNG.",
        "translations": {
            "vi": "BAO GỒM, GỬI KÈM THEO; VÂY QUANH"
        }
    },
    {
        "id": "ttp-08",
        "topic": "Trading Transport",
        "word": "careful",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CẨN THẬN, KỸ LƯỢNG, CHU ĐÁO",
        "example": "MICHAEL IS A VERY CAREFUL WORKER.",
        "exampleTranslation": "MICHAEL LÀ MỘT CÔNG NHÂN RẤT CẨN THẬN. PHR. NHẶT LÊN, ĐẾN LẤY; ĐÓN PICK UP",
        "translations": {
            "vi": "CẨN THẬN, KỸ LƯỢNG, CHU ĐÁO"
        }
    },
    {
        "id": "ttp-09",
        "topic": "Trading Transport",
        "word": "attach",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐÍNH KÈM, GẮN VÀO",
        "example": "I ATTACHED A PHOTO TO MY APPLICATION FORM.",
        "exampleTranslation": "TÔI ĐÃ ĐÍNH KÈM MỘT BỨC ẢNH VÀO ĐƠN ĐĂNG KÝ CỦA MÌNH.",
        "translations": {
            "vi": "ĐÍNH KÈM, GẮN VÀO"
        }
    },
    {
        "id": "ttp-10",
        "topic": "Trading Transport",
        "word": "formerly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TRƯỚC ĐÂY",
        "example": "THE EUR OPEAN UNION W AS F ORMERLY CALLED THE EUR OPEAN COMMUNIT Y.",
        "exampleTranslation": "LIÊN MINH CHÂU ÂU TRƯỚC ĐÂY ĐƯỢC GỌI LÀ CỘNG ĐỒNG CHÂU ÂU.",
        "translations": {
            "vi": "TRƯỚC ĐÂY"
        }
    },
    {
        "id": "ttp-11",
        "topic": "Trading Transport",
        "word": "package",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GÓI HÀNG, KIỆN HÀNG",
        "example": "THE PACKAGE WAS WRAPPED IN PLAIN BROWN PAPER.",
        "exampleTranslation": "GÓI HÀNG ĐƯỢC GÓI BẰNG GIẤY MÀU NÂU TR ƠN.",
        "translations": {
            "vi": "GÓI HÀNG, KIỆN HÀNG"
        }
    },
    {
        "id": "ttp-12",
        "topic": "Trading Transport",
        "word": "react",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHẢN ỨNG, T ÁC ĐỘNG LẠI",
        "example": "SHE SLAPPED HIM AND CALLED HIM NAMES, BUT HE DIDN'T REACT.",
        "exampleTranslation": "CÔ TÁT ANH TA V À GỌI TÊN ANH T A, NHƯNG ANH T A KHÔNG PHẢN ỨNG.",
        "translations": {
            "vi": "PHẢN ỨNG, T ÁC ĐỘNG LẠI"
        }
    },
    {
        "id": "ttp-13",
        "topic": "Trading Transport",
        "word": "convenience",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THUẬN LỢI/THUẬN TIỆN",
        "example": "I LIKE THE CONVENIENCE OF LIVING CLOSE TO WORK.",
        "exampleTranslation": "T ÔI THÍCH SỰ THUẬN TIỆN CỦA CUỘC SỐNG GẦN NƠI LÀM VIỆC. ACKNOWLEDGE BÁO X ÁC NHẬN, TỎ LÒNG BIẾT ƠN CNHẬN, TỎ LÒ",
        "translations": {
            "vi": "SỰ THUẬN LỢI/THUẬN TIỆN"
        }
    },
    {
        "id": "ttp-14",
        "topic": "Trading Transport",
        "word": "separate",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TÁCH RỜI RA, CHIA TAY; PHÂN LOẠI",
        "example": "I TRY TO KEEP MEAT SEPARATE FROM OTHER FOOD IN THE FRIDGE.",
        "exampleTranslation": "T ÔI CỐ GẮNG ĐỂ THỊT TÁCH BIỆT VỚI CÁC THỰC PHẨM KHÁC RONG TỦ LẠNH.",
        "translations": {
            "vi": "TÁCH RỜI RA, CHIA TAY; PHÂN LOẠI"
        }
    },
    {
        "id": "ttp-15",
        "topic": "Trading Transport",
        "word": "handle",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐIỀU KHIỂN, XỬ LÝ",
        "example": "I CAN'T PICK THE KETTLE UP - THE HANDLE'S TOO HOT.",
        "exampleTranslation": "T ÔI KHÔNG THỂ ĐIỀU KHIỂN NHẤC ẤM ĐUN NƯỚC LÊN - TAY CẦM QUÁ NÓNG.",
        "translations": {
            "vi": "ĐIỀU KHIỂN, XỬ LÝ"
        }
    },
    {
        "id": "ttp-16",
        "topic": "Trading Transport",
        "word": "warehouse",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NHÀ KHO",
        "example": "THE GOODS HAVE BEEN SIT TING IN A W AREHOUS E F OR MONTHS BECAU SE A S TRIK E HAS PR EVENT ED DIS TRIBUTION.",
        "exampleTranslation": "HÀNG HÓA ĐÃ NẰM TRONG NHÀ KHO TRONG NHIỀU THÁNG VÌ MỘT CUỘC ĐÌNH CÔNG ĐÃ NGĂN CẢN VIỆC PHÂN PHỐI.",
        "translations": {
            "vi": "NHÀ KHO"
        }
    },
    {
        "id": "ttp-17",
        "topic": "Trading Transport",
        "word": "storage",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHO, SỰ TÍCH TRỮ",
        "example": "WE 'V E HAD T O BUILD S OME CUPBOAR DS T O GIV E S TO R AGE SPAC E.",
        "exampleTranslation": "CHÚNG T ÔI ĐÃ PHẢI X ÂY DỰNG MỘT S Ố TỦ ĐỂ CÓ THÊM KHÔNG GIAN LƯU TRỮ.",
        "translations": {
            "vi": "KHO, SỰ TÍCH TRỮ"
        }
    },
    {
        "id": "ttp-18",
        "topic": "Trading Transport",
        "word": "detach",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GỠ, THÁO, TÁCH RA",
        "example": "YOU CAN DETACH THE HOOD IF YOU PREFER THE COAT WITHOUT IT.",
        "exampleTranslation": "BẠN CÓ THỂ THÁO RỜI MŨ TRÙM ĐẦU NẾU MUỐN CÓ ÁO KHOÁC MÀ KHÔNG CÓ NÓ.",
        "translations": {
            "vi": "GỠ, THÁO, TÁCH RA"
        }
    },
    {
        "id": "ttp-19",
        "topic": "Trading Transport",
        "word": "envelope",
        "phonetic": "",
        "pos": "noun",
        "meaning": "PHONG BÌ",
        "example": "I FOLDED THE LETTER IN HALF AND PUT IT IN AN ENVELOPE.",
        "exampleTranslation": "T ÔI GẤP LÁ THƯ LẠI MỘT NỬA VÀ CHO VÀO MỘT CHIẾC PHONG BÌ.",
        "translations": {
            "vi": "PHONG BÌ"
        }
    },
    {
        "id": "ttp-20",
        "topic": "Trading Transport",
        "word": "exclusion",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ KHÔNG TÍNH VÀO, SỰ LOẠI TRỪ",
        "example": "YOU WILL BE SENT FULL DETAILS OF THE EXCLUSIONS OF YOUR YOUW INSURANCE POLICY.",
        "exampleTranslation": "BẠN SẼ ĐƯỢC GỬI ĐẦY ĐỦ THÔNG TIN CHI TIẾT VỀ CÁC ĐIỀU KHOẢN LOẠI TRỪ TRONG HỢP ĐỒNG BẢO HIỂM CỦA BẠN.",
        "translations": {
            "vi": "SỰ KHÔNG TÍNH VÀO, SỰ LOẠI TRỪ"
        }
    },
    {
        "id": "ttp-21",
        "topic": "Trading Transport",
        "word": "incorrect",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KHÔNG ĐÚNG, SAI",
        "example": "THE ASSUMPTIONS MADE ABOUT THE ECONOMY'S RATE O F GROWTH PROVED TO BE INCORRECT.",
        "exampleTranslation": "CÁC GIẢ ĐỊNH ĐƯỢC ĐƯA RA VỀ TỐC ĐỘ T ĂNG TRƯỞNG CỦA NỀN KINH TẾ ĐƯỢC CHỨNG MINH LÀ KHÔNG CHÍNH XÁC.",
        "translations": {
            "vi": "KHÔNG ĐÚNG, SAI"
        }
    },
    {
        "id": "ttp-22",
        "topic": "Trading Transport",
        "word": "step",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BƯỚC ĐI, BƯỚC; BIỆN PHÁP, BƯỚC TIẾN",
        "example": "THE ﬁRST STEP IN ﬁXING OUR HOUSE IS TO PUT ON A NEW RO OF.",
        "exampleTranslation": "BƯỚC ĐẦU TIÊN TRONG VIỆC SỬA CHỮA NGÔI NHÀ CỦA CHÚNG TÔI LÀ LỢP MÁI NHÀ MỚI.",
        "translations": {
            "vi": "BƯỚC ĐI, BƯỚC; BIỆN PHÁP, BƯỚC TIẾN"
        }
    },
    {
        "id": "ttp-23",
        "topic": "Trading Transport",
        "word": "fragile",
        "phonetic": "",
        "pos": "adj",
        "meaning": "DỄ V Ỡ, MỎNG MANH",
        "example": "BE CARE FUL WITH THAT V AS E - IT' S VE RY FR AGILE.",
        "exampleTranslation": "HÃY CẨN THẬN V ỚI CHIẾC BÌNH ĐÓ - NÓ R ẤT DỄ V Ỡ. T DỄ VỠ.",
        "translations": {
            "vi": "DỄ V Ỡ, MỎNG MANH"
        }
    },
    {
        "id": "ttp-24",
        "topic": "Trading Transport",
        "word": "deliver",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIAO, PHÁT; PHÁT BIỂU, BÀY T Ỏ",
        "example": "MAIL IS DELIV ER ED T O OUR Oﬃ CE TWICE A DA Y. MAIL IS DELIVE TO OUR OﬃCE TWICE A",
        "exampleTranslation": "THƯ ĐƯỢC GIAO ĐẾN V ĂN PHÒNG CỦA CHÚNG T ÔI HAI LẦN ẾN VĂN PHÒNG CỦA C NG TÔI HAI LẦN MỘT NGÀY.",
        "translations": {
            "vi": "GIAO, PHÁT; PHÁT BIỂU, BÀY T Ỏ"
        }
    },
    {
        "id": "ttp-25",
        "topic": "Trading Transport",
        "word": "courier",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI ĐƯA THƯ, CÔNG TY VẬ N CHUY ỂN",
        "example": "I W ANT T O HAVE THIS PACK AGE DELIV ER ED BY MO TO RC YC LE COURIE R. I W ANT TO",
        "exampleTranslation": "TÔI MUỐN GÓI HÀNG NÀY ĐƯỢC CÔNG TY CHUY ỂN PHÁT NHANH BẰNG X E MÁY.",
        "translations": {
            "vi": "NGƯỜI ĐƯA THƯ, CÔNG TY VẬ N CHUY ỂN"
        }
    },
    {
        "id": "ttp-26",
        "topic": "Trading Transport",
        "word": "carton",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GIẤY BÌA, HỘP/THÙNG BÌA CỨNG",
        "example": "THE COMPANY AGENCY WORKERS TO PACK COMPUTER MONITORS INTO SHIPPING CARTONS.",
        "exampleTranslation": "CÔNG TY SỬ DỤNG NHÂN VIÊN ĐẠI LÝ ĐỂ ĐÓNG GÓI MÀN HÌNH MÁY TÍNH VÀO CÁC THÙNG GIẤY VẬN CHUYỂN.",
        "translations": {
            "vi": "GIẤY BÌA, HỘP/THÙNG BÌA CỨNG"
        }
    },
    {
        "id": "ttp-27",
        "topic": "Trading Transport",
        "word": "address",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐỊA CHỈ",
        "example": "HE HASN'T WRITTEN TO ME RECENTLY - PERHAPS HE'S LOST MY ADDRESS.",
        "exampleTranslation": "ANH ẤY ĐÃ KHÔNG VIẾT THƯ CHO TÔI GẦN ĐÂY - CÓ LẼ ANH ẤY ĐÃ MẤT ĐỊA CHỈ CỦA TÔI.",
        "translations": {
            "vi": "ĐỊA CHỈ"
        }
    },
    {
        "id": "ttp-28",
        "topic": "Trading Transport",
        "word": "carry",
        "phonetic": "",
        "pos": "verb",
        "meaning": "MANG, V ÁC, ĐEM THEO; C Ó",
        "example": "SHE CARRIED HER TIR ED CHILD UP ST AIR S T O BED.",
        "exampleTranslation": "CÔ MANG ĐỨA CON MỆ T MỎI LÊN LẦU ĐI NGỦ.",
        "translations": {
            "vi": "MANG, V ÁC, ĐEM THEO; C Ó"
        }
    },
    {
        "id": "ttp-29",
        "topic": "Trading Transport",
        "word": "content",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NỘI DUNG, ĐỒ ĐỰNG BÊN TRONG",
        "example": "IT’ S EAS Y T O UPDAT E THE CONT ENT O F THE W EB SIT E.",
        "exampleTranslation": "DỄ DÀNG CẬP NHẬT NỘI DUNG CỦA TR ANG W EB.",
        "translations": {
            "vi": "NỘI DUNG, ĐỒ ĐỰNG BÊN TRONG"
        }
    },
    {
        "id": "ttp-30",
        "topic": "Trading Transport",
        "word": "correspondence",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THƯ TỪ, QUAN HỆ THƯ TỪ",
        "example": "ANY FURTHER CORR ES PONDENCE SHOULD BE S ENT T O M Y NEW ADDR ESS.",
        "exampleTranslation": "MỌI THƯ TỪ S Ẽ ĐƯỢC GỬI ĐẾN ĐỊA CHỈ MỚI CỦA T ÔI.",
        "translations": {
            "vi": "THƯ TỪ, QUAN HỆ THƯ TỪ"
        }
    },
    {
        "id": "ttp-31",
        "topic": "Trading Transport",
        "word": "remarkable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐÁNG CHÝ Ý, XUẤT S ẮC, ĐẶC BIỆ T",
        "example": "NELS ON MANDELA W AS A TRULY R EMARK ABLE MAN.",
        "exampleTranslation": "NELS ON MANDELA LÀ MỘT NGƯỜI ĐÀN ÔNG THỰC SỰ ĐÁNG CHÚ Ý.",
        "translations": {
            "vi": "ĐÁNG CHÝ Ý, XUẤT S ẮC, ĐẶC BIỆ T"
        }
    },
    {
        "id": "ttp-32",
        "topic": "Trading Transport",
        "word": "impose",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐÁNH, ÁP (THUẾ)",
        "example": "VE RY HIGH T AX E S HAVE R ECENTLY BEEN IMPOS ED ON CIGARE TTE S.",
        "exampleTranslation": "GẦN ĐÂY ĐÃ ÁP THUẾ R ẤT CAO ĐỐI V ỚI THUỐC LÁ.",
        "translations": {
            "vi": "ĐÁNH, ÁP (THUẾ)"
        }
    },
    {
        "id": "ttp-33",
        "topic": "Trading Transport",
        "word": "recipient",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI NHẬN",
        "example": "HE W AS A R ECIPIENT O F THE CIVILIAN SERVICE A WA RD.",
        "exampleTranslation": "ÔNG LÀ NGƯỜI ĐƯỢC NHẬN ĐƯỢC GIẢI THƯỞNG DỊCH VỤ DÂN SỰ.",
        "translations": {
            "vi": "NGƯỜI NHẬN"
        }
    },
    {
        "id": "ttp-34",
        "topic": "Trading Transport",
        "word": "obligate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BẮT BUỘC, GIAO TR ÁCH NHIỆM",
        "example": "THE LAW DOE S NOT OBLIGAT E S ELLER S TO ACCEPT THE HIGHEST O ﬀE R.",
        "exampleTranslation": "LUẬT PHÁP KHÔNG BẮT BUỘC NGƯỜI BÁN PHẢI CHẤP NHẬN MỨC ĐỀ NGHỊ CAO NHẤT.",
        "translations": {
            "vi": "BẮT BUỘC, GIAO TR ÁCH NHIỆM"
        }
    },
    // ==========================================
    // TOPIC 15: HOTEL, RESTAURANT (hot-01 → hot-27)
    // ==========================================
    {
        "id": "hot-01",
        "topic": "Hotel, Restaurant",
        "word": "compensate",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TIẾP ĐÓN, SỰ TIẾP NHẬN",
        "example": "VICTIMS O F THE CR ASH WILL BE COMPEN SA T ED F OR THEIR INJURI ES.",
        "exampleTranslation": "NẠN NHÂN CỦA VỤ V A CHẠM S Ẽ ĐƯỢC BỒI THƯỜNG THƯƠNG T ẬT.",
        "translations": {
            "vi": "SỰ TIẾP ĐÓN, SỰ TIẾP NHẬN"
        }
    },
    {
        "id": "hot-02",
        "topic": "Hotel, Restaurant",
        "word": "complimentary",
        "phonetic": "",
        "pos": "adj",
        "meaning": "MIỄN PHÍ, BIẾU, T ẶNG",
        "example": "THE R E VIE W S O F HIS LATES T ﬁLM HAVE BEEN HIGHLY COMPLIMENT AR Y.",
        "exampleTranslation": "CÁC BÀI ĐÁNH GIÁ V Ề BỘ PHIM MỚI NHẤT CỦA ANH ẤY ĐÃ ĐƯỢC KHEN NGỢI R ẤT NHIỀU.",
        "translations": {
            "vi": "MIỄN PHÍ, BIẾU, T ẶNG"
        }
    },
    {
        "id": "hot-03",
        "topic": "Hotel, Restaurant",
        "word": "container",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐỒ ĐỂ CHỨA (BÌNH, LỌ, HỘP, THÙNG)",
        "example": "THIS CONT AINER WILL T AK E SIX LITR ES",
        "exampleTranslation": "THÙNG NÀY S Ẽ CÓ S ÁU LÍT.",
        "translations": {
            "vi": "ĐỒ ĐỂ CHỨA (BÌNH, LỌ, HỘP, THÙNG)"
        }
    },
    {
        "id": "hot-04",
        "topic": "Hotel, Restaurant",
        "word": "elegant",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐẶT TRƯỚC, SỰ BẢO T ỒN",
        "example": "SHE W OR E AN ELEGANT DO V E-GR EY JACKE T.",
        "exampleTranslation": "CÔ MẶC MỘT CHIẾC ÁO KHOÁC MÀU X ÁM BỒ CÂU THANH LỊCH. ACCOMMODATE (ĐIỀU KIỆN, Y ÊU CẦU)",
        "translations": {
            "vi": "SỰ ĐẶT TRƯỚC, SỰ BẢO T ỒN"
        }
    },
    {
        "id": "hot-05",
        "topic": "Hotel, Restaurant",
        "word": "make",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM, T ẠO, GÂY R A, THỰC HIỆN",
        "example": "HE MADE A CHOCOLAT E CAK E.",
        "exampleTranslation": "ANH ẤY ĐÃ LÀM MỘT CHIẾC BÁNH S Ô CÔ LA.",
        "translations": {
            "vi": "LÀM, T ẠO, GÂY R A, THỰC HIỆN"
        }
    },
    {
        "id": "hot-06",
        "topic": "Hotel, Restaurant",
        "word": "beverage",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐỒ UỐNG",
        "example": "WE DO NOT S ELL ALCOHOLIC B EVE R AGE S.",
        "exampleTranslation": "CHÚNG T ÔI KHÔNG BÁN ĐỒ UỐNG CÓ CỒN.",
        "translations": {
            "vi": "ĐỒ UỐNG"
        }
    },
    {
        "id": "hot-07",
        "topic": "Hotel, Restaurant",
        "word": "rate",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GIÁ, MỨC GIÁ",
        "example": "WE AGREED A R AT E WITH THE PAINT ER BE FO R E HE S TA RT ED W ORK. OR E HE S TA RT E",
        "exampleTranslation": "CHÚNG T ÔI ĐÃ THỐNG NHẤT MỘT MỨC GIÁ V ỚI HỌA SĨ TRƯỚC KHI ANH T A BẮT ĐẦU CÔNG VIỆ C. VIỆC.",
        "translations": {
            "vi": "GIÁ, MỨC GIÁ"
        }
    },
    {
        "id": "hot-08",
        "topic": "Hotel, Restaurant",
        "word": "atmosphere",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHÔNG KHÍ, BẦU KHÔNG KHÍ",
        "example": "THE SE F ACT ORIE S ARE R ELEASING T OX IC GASE S INT O THE ATMOSPHER E.",
        "exampleTranslation": "CÁC NHÀ MÁY NÀY ĐANG THẢI KHÍ ĐỘC V ÀO BẦU KHÍ QUY ỂN.",
        "translations": {
            "vi": "KHÔNG KHÍ, BẦU KHÔNG KHÍ"
        }
    },
    {
        "id": "hot-09",
        "topic": "Hotel, Restaurant",
        "word": "sequence",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ NỐI TIẾP, TRÌNH TỰ, CHUỖI",
        "example": "THE ﬁR ST CHAPT ER DE SCRIBE S THE S TR ANGE S EQUENCE O F E V ENT S THAT LED T O HIS DEATH.",
        "exampleTranslation": "CHƯƠNG ĐẦU TIÊN MÔ T Ả CHUỖI SỰ KIỆN KỲ LẠ DẪN ĐẾN CÁI CHẾ T CỦA ANH T A.",
        "translations": {
            "vi": "SỰ NỐI TIẾP, TRÌNH TỰ, CHUỖI"
        }
    },
    {
        "id": "hot-10",
        "topic": "Hotel, Restaurant",
        "word": "extensive",
        "phonetic": "",
        "pos": "adj",
        "meaning": "R ỘNG R ÃI, BAO QUÁT",
        "example": "HER KNO WLEDGE O F MUSIC IS E XT ENSI VE.",
        "exampleTranslation": "KIẾN THỨC V Ề ÂM NHẠC CỦA CÔ ẤY R ẤT R ỘNG.",
        "translations": {
            "vi": "R ỘNG R ÃI, BAO QUÁT"
        }
    },
    {
        "id": "hot-11",
        "topic": "Hotel, Restaurant",
        "word": "prior",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TRƯỚC, ƯU TIÊN",
        "example": "THE COUR SE R EQUIR ED NO PRIOR KNO WLEDGE O F SPANISH.",
        "exampleTranslation": "KHÓA HỌC KHÔNG Y ÊU CẦU KIẾN THỨC TRƯỚC V Ề TIẾNG TÂY BAN NHA.",
        "translations": {
            "vi": "TRƯỚC, ƯU TIÊN"
        }
    },
    {
        "id": "hot-12",
        "topic": "Hotel, Restaurant",
        "word": "belongings",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐỒ CÁ NHÂN, HÀNH LÝ",
        "example": "I PUT A F E W PER SO NAL BELONGINGS IN A BAG AND LEF T THE HOUS E F OR THE LAS T TIME. I PUT A F EW SE FO R THE",
        "exampleTranslation": "TÔI CHO MỘT ÍT ĐỒ DÙNG CÁ NHÂN V ÀO MỘT CHIẾC TÚI V À R ỜI KHỎI NHÀ LẦN CUỐI.",
        "translations": {
            "vi": "ĐỒ CÁ NHÂN, HÀNH LÝ"
        }
    },
    {
        "id": "hot-13",
        "topic": "Hotel, Restaurant",
        "word": "entirely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TR ỌN V ẸN, HOÀN T OÀN",
        "example": "I ADMIT IT W AS ENTIR ELY MY F AULT.",
        "exampleTranslation": "T ÔI THỪA NHẬN ĐÓ HOÀN T OÀN LÀ LỖI CỦA T ÔI.",
        "translations": {
            "vi": "TR ỌN V ẸN, HOÀN T OÀN"
        }
    },
    {
        "id": "hot-14",
        "topic": "Hotel, Restaurant",
        "word": "stir",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KHUẤY ĐỘNG",
        "example": "SHE PAUS ED T O S TIR S OME MILK INT O HER C Oﬀ EE.",
        "exampleTranslation": "CÔ DỪNG LẠI ĐỂ KHUẤY MỘT ÍT SỮA V ÀO CÀ PHÊ CỦA MÌNH.",
        "translations": {
            "vi": "KHUẤY ĐỘNG"
        }
    },
    {
        "id": "hot-15",
        "topic": "Hotel, Restaurant",
        "word": "choice",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ LỰA CHỌN, QUYỀN CHỌN",
        "example": "IT'S A DIﬃCULT CHOICE TO MAKE.",
        "exampleTranslation": "ĐÓ LÀ MỘT LỰA CHỌN KHÓ THỰC HIỆN.",
        "translations": {
            "vi": "SỰ LỰA CHỌN, QUYỀN CHỌN"
        }
    },
    {
        "id": "hot-16",
        "topic": "Hotel, Restaurant",
        "word": "freshness",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TƯƠI, SỰ SẢNG KHOÁI",
        "example": "THE FRESHNESS AND VITALITY OF YOUTH.",
        "exampleTranslation": "SỰ TƯƠI TRẺ VÀ SỨC SỐNG CỦA TUỔI TRẺ.",
        "translations": {
            "vi": "SỰ TƯƠI, SỰ SẢNG KHOÁI"
        }
    },
    {
        "id": "hot-17",
        "topic": "Hotel, Restaurant",
        "word": "occupancy",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CƯ NGỤSỐNG TẠI",
        "example": "THE FAMILY'S OCCUPANCY OF THE APARTMENT LASTED ONLY SIX MONTHS.",
        "exampleTranslation": "CĂN HỘ CỦA GIA ĐÌNH ĐƯỢC LẤP ĐẦY CHỈ KÉO DÀI SÁU THÁNG.",
        "translations": {
            "vi": "SỰ CƯ NGỤSỐNG TẠI"
        }
    },
    {
        "id": "hot-18",
        "topic": "Hotel, Restaurant",
        "word": "chef",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐẦU BẾP",
        "example": "HE IS ONE O F THE TO P CHE FS IN BRIT AIN. HE IS ONE OF OP CHEFS IN BRITAIN.",
        "exampleTranslation": "ANH ẤY LÀ MỘT TRONG NHỮNG ĐẦU BẾP HÀNG ĐẦU Ở ANH.",
        "translations": {
            "vi": "ĐẦU BẾP"
        }
    },
    {
        "id": "hot-19",
        "topic": "Hotel, Restaurant",
        "word": "decorate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TR ANG TRÍ",
        "example": "THE Y DECOR AT ED THE W EDDING CAR WITH RIBBONS AND ﬂ OWE RS.",
        "exampleTranslation": "HỌ TR ANG TRÍ X E CƯỚI BẰNG RUY BĂNG V À HOA.",
        "translations": {
            "vi": "TR ANG TRÍ"
        }
    },
    {
        "id": "hot-20",
        "topic": "Hotel, Restaurant",
        "word": "information",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THÔNG TIN, T ÀI LIỆU",
        "example": "I R EAD AN INT ER ESTING PIECE O F INF ORMATION IN THE NEW SPAPER.",
        "exampleTranslation": "T ÔI ĐỌC MỘT MẨU THÔNG TIN THÚ VỊ TR ÊN BÁO.",
        "translations": {
            "vi": "THÔNG TIN, T ÀI LIỆU"
        }
    },
    {
        "id": "hot-21",
        "topic": "Hotel, Restaurant",
        "word": "cuisine",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ẨM THỰC, CÁCH NẤU NƯỚNG",
        "example": "ENJO Y THE DELICIOUS CUISINE CR EATE D BY OUR AWA RD -WINNING CHE F.",
        "exampleTranslation": "THƯỞNG THỨC CÁC MÓN ĂN NGON DO ĐẦU BẾP TỪNG ĐOẠT GIẢI THƯỞNG CỦA CHÚNG T ÔI T ẠO R A.",
        "translations": {
            "vi": "ẨM THỰC, CÁCH NẤU NƯỚNG"
        }
    },
    {
        "id": "hot-22",
        "topic": "Hotel, Restaurant",
        "word": "book",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẶT TRƯỚC",
        "example": "SHE'D BOOK ED A T ABLE F OR F OUR AT THEIR F AV OURIT E R ESTA UR ANT.",
        "exampleTranslation": "CÔ ẤY ĐÃ ĐẶT MỘT BÀN CHO BỐN NGƯỜI T ẠI NHÀ HÀNG Y ÊU THÍCH CỦA HỌ.",
        "translations": {
            "vi": "ĐẶT TRƯỚC"
        }
    },
    {
        "id": "hot-23",
        "topic": "Hotel, Restaurant",
        "word": "amenity",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TIỆN NGHI, SỰ DỄ CHỊ U",
        "example": "THE COUNCIL HAS S OME SPARE CASH, WHICH IT PR OPOS E S T O SPEND ON PUBLIC AMENITIES.",
        "exampleTranslation": "HỘI ĐỒNG CÓ MỘT S Ố TIỀN MẶT DỰ PHÒNG ĐỂ CHI TIÊU CHO CÁC TIỆN ÍCH CÔNG CỘNG.",
        "translations": {
            "vi": "TIỆN NGHI, SỰ DỄ CHỊ U"
        }
    },
    {
        "id": "hot-24",
        "topic": "Hotel, Restaurant",
        "word": "ease",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM DỄ CHỊU, LÀM NHẸ ĐI",
        "example": "THE SE PILLS SHOULD EAS E THE PAIN.",
        "exampleTranslation": "NHỮNG VIÊN THUỐC NÀY S Ẽ LÀM DỊU CƠN ĐAU.",
        "translations": {
            "vi": "LÀM DỄ CHỊU, LÀM NHẸ ĐI"
        }
    },
    {
        "id": "hot-25",
        "topic": "Hotel, Restaurant",
        "word": "ingredient",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THÀNH PHẦN, NGUYÊN LIỆU",
        "example": "THE LIST OF INGREDIENTS INCLUDED 250 G OF ALMONDS.",
        "exampleTranslation": "DANH SÁCH CÁC THÀNH PHẦN BAO GỒM 250 G HẠNH NHÂN.",
        "translations": {
            "vi": "THÀNH PHẦN, NGUYÊN LIỆU"
        }
    },
    {
        "id": "hot-26",
        "topic": "Hotel, Restaurant",
        "word": "sip",
        "phonetic": "",
        "pos": "verb",
        "meaning": "UỐNG TỪNG NGỤM, NHẤM NHÁP",
        "example": "THIS TEA IS VERY HOT, SO SIP IT CAREFULLY.",
        "exampleTranslation": "TR À NÀY RẤT NÓNG, VÌ VẬY HÃY NHẤM NHÁP NÓ MỘT CÁCH CẨN THẬN.",
        "translations": {
            "vi": "UỐNG TỪNG NGỤM, NHẤM NHÁP"
        }
    },
    {
        "id": "hot-27",
        "topic": "Hotel, Restaurant",
        "word": "complication",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ PHỨC TẠP, SỰ RẮC RỐI",
        "example": "IF ANY COMPLICATIONS ARISE, LET ME KNOW AND I'LL HELP.",
        "exampleTranslation": "NẾU CÓ BẤT KỲ BIẾN CHỨNG NÀO PHÁT SINH, HÃY CHO TÔI BIẾT VÀ TÔI SẼ GIÚP ĐỠ.",
        "translations": {
            "vi": "SỰ PHỨC TẠP, SỰ RẮC RỐI"
        }
    },
    // ==========================================
    // TOPIC 16: REVENUE (rev-01 → rev-30)
    // ==========================================
    {
        "id": "rev-01",
        "topic": "Revenue",
        "word": "decline",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ GIẢM, SỰ SỤT GIẢM",
        "example": "SHE SEEMED TO BE RECOVERING AND THEN SHE WENT INTO A DECLINE.",
        "exampleTranslation": "CÔ ẤY DƯỜNG NHƯ ĐANG HỒI PHỤC VÀ SAU ĐÓ CÔ ẤY SA SÚT.",
        "translations": {
            "vi": "SỰ GIẢM, SỰ SỤT GIẢM"
        }
    },
    {
        "id": "rev-02",
        "topic": "Revenue",
        "word": "markedly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "RÕ RÀNG, R Õ RỆT",
        "example": "EYEWITNESS ACCOUNTS DIﬀERED MARKEDLY FROM POLICE REPORTS OF THE INCIDENT.",
        "exampleTranslation": "LỜI KỂ CỦA CÁC NHÂN CHỨNG KHÁC R Õ RÀNG V ỚI BÁO CÁO CỦA CẢNH SÁT VỀ VỤ VIỆC.",
        "translations": {
            "vi": "RÕ RÀNG, R Õ RỆT"
        }
    },
    {
        "id": "rev-03",
        "topic": "Revenue",
        "word": "increase",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TĂNG, SỰ TĂNG THÊM",
        "example": "THERE WERE 39,000 NEW CASES LAST YEAR - AN INCREASE OF SIX PERCENT.",
        "exampleTranslation": "CÓ 3 9. 000 TRƯỜNG HỢP MỚI TRONG NĂM NGOÁI - T ĂNG SÁU MỚI TRONG NĂ PHẦN TRĂM.",
        "translations": {
            "vi": "SỰ TĂNG, SỰ TĂNG THÊM"
        }
    },
    {
        "id": "rev-04",
        "topic": "Revenue",
        "word": "substantial",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LỚN, QUAN TRỌNG, CÓ GIÁ TRỊ",
        "example": "SHE INHERITED A SUBSTANTIAL FORTUNE FROM HER GRANDMOTHER. UB STANTIAL FORTUNE FRO HERGRA",
        "exampleTranslation": "CÔ ĐƯỢC THỪA HƯỞNG MỘT KHỐI T ÀI SẢN CÓ GIÁ TRỊ TỪ BÀ CỦA MÌNH.",
        "translations": {
            "vi": "LỚN, QUAN TRỌNG, CÓ GIÁ TRỊ"
        }
    },
    {
        "id": "rev-05",
        "topic": "Revenue",
        "word": "anticipate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THẤY TRƯỚC, ĐOÁN TRƯỚC",
        "example": "WE DON'T ANTICIPATE ANY TROUBLE.",
        "exampleTranslation": "CHÚNG T ÔI KHÔNG LƯỜNG TRƯỚC ĐƯỢC BẤT KỲ RẮC RỐI NÀO.",
        "translations": {
            "vi": "THẤY TRƯỚC, ĐOÁN TRƯỚC"
        }
    },
    {
        "id": "rev-06",
        "topic": "Revenue",
        "word": "estimate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ƯỚC TÍNH, ƯỚC LƯỢNG",
        "example": "IT W AS DIﬃCULT T O ESTIMATE HO W MANY TR EE S HAD BEEN DEST ROY ED.",
        "exampleTranslation": "RẤT KHÓ ĐỂ ƯỚC TÍNH CÓ BAO NHIÊU CÂY ĐÃ BỊ PHÁ HỦY.",
        "translations": {
            "vi": "ƯỚC TÍNH, ƯỚC LƯỢNG"
        }
    },
    {
        "id": "rev-07",
        "topic": "Revenue",
        "word": "production",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ S ẢN XUẤT, S ẢN LƯỢNG",
        "example": "COK E IS IN THE PRODUCTION O F S TE EL.",
        "exampleTranslation": "THAN CỐC ĐƯỢC SỬ DỤNG TRONG S ẢN XUẤT THÉP. SALE SỰ BÁN, VIỆC BÁN (GIẢM GIÁ)",
        "translations": {
            "vi": "SỰ S ẢN XUẤT, S ẢN LƯỢNG"
        }
    },
    {
        "id": "rev-08",
        "topic": "Revenue",
        "word": "impressive",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐẦY ẤN TƯỢNG",
        "example": "THAT W AS AN IMPR ES SIV E PERF ORMANCE FR OM SUCH A YOUNG T ENNIS PLAY ER.",
        "exampleTranslation": "ĐÓ LÀ MỘT MÀN TRÌNH ĐẦY DIỄN ẤN TƯỢNG CỦA MỘT T AY V ỢT TR Ẻ NHƯ V ẬY.",
        "translations": {
            "vi": "ĐẦY ẤN TƯỢNG"
        }
    },
    {
        "id": "rev-09",
        "topic": "Revenue",
        "word": "recent",
        "phonetic": "",
        "pos": "adj",
        "meaning": "GẦN ĐÂY, MỚI X ẢY RA",
        "example": "IS THAT A RECENT PHOTOfi",
        "exampleTranslation": "ĐÓ CÓ PHẢI LÀ MỘT BỨC ẢNH GẦN ĐÂYfi",
        "translations": {
            "vi": "GẦN ĐÂY, MỚI X ẢY RA"
        }
    },
    {
        "id": "rev-10",
        "topic": "Revenue",
        "word": "exceed",
        "phonetic": "",
        "pos": "verb",
        "meaning": "VƯỢT QUÁ, TRỘI HƠN",
        "example": "THE SUCCESS OF OUR CAMPAIGN HAS EXCEEDED OUR WILDEST EXPECTATIONS.",
        "exampleTranslation": "THÀNH CÔNG CỦA CHIẾN DỊCH CỦA CHÚNG TÔI ĐÃ VƯỢT QUÁ MONG ĐỢI CỦA CHÚNG TÔI.",
        "translations": {
            "vi": "VƯỢT QUÁ, TRỘI HƠN"
        }
    },
    {
        "id": "rev-11",
        "topic": "Revenue",
        "word": "summarize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TÓM TẮT, TỔNG K ẾT",
        "example": "I'LL JUST SUMMARIZE THE MAIN POINTS OF THE ARGUMENT IN A FEW W ORDS.",
        "exampleTranslation": "TÔI SẼ CHỈ TÓM TẮT NHỮNG ĐIỂM CHÍNH CỦA LẬP LUẬN TRONG MỘT VÀI TỪ.",
        "translations": {
            "vi": "TÓM TẮT, TỔNG K ẾT"
        }
    },
    {
        "id": "rev-12",
        "topic": "Revenue",
        "word": "growth",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ T ĂNG TRƯỞNG, SỰ LỚN MẠNH",
        "example": "A BALANCED DIE T IS E SS ENTIAL F OR HEALTHY GR O WTH.",
        "exampleTranslation": "MỘT CHẾ ĐỘ ĂN UỐNG CÂN BẰNG LÀ ĐIỀU CẦN THIẾ T ĐỂ PHÁT TRIỂN KHỎE MẠNH.",
        "translations": {
            "vi": "SỰ T ĂNG TRƯỞNG, SỰ LỚN MẠNH"
        }
    },
    {
        "id": "rev-13",
        "topic": "Revenue",
        "word": "frequent",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THƯỜNG XUY ÊN",
        "example": "THE MOS T FR EQUENT CAUS E O F DEATH IS HEART DIS EASE.",
        "exampleTranslation": "NGUY ÊN NHÂN TỬ V ONG THƯỜNG XUY ÊN NHẤT LÀ BỆNH TIM.",
        "translations": {
            "vi": "THƯỜNG XUY ÊN"
        }
    },
    {
        "id": "rev-14",
        "topic": "Revenue",
        "word": "achieve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẠT ĐƯỢC, GIÀNH ĐƯỢC",
        "example": "SHE ﬁNALLY ACHIE V ED HER AMBITION T O VISIT SOUTH AMERICA.",
        "exampleTranslation": "CUỐI CÙNG CÔ CŨNG ĐẠT ĐƯỢC THAM V ỌNG ĐẾN THĂM NAM MỸ. ENCOURAGING ĐỘNG VIÊN",
        "translations": {
            "vi": "ĐẠT ĐƯỢC, GIÀNH ĐƯỢC"
        }
    },
    {
        "id": "rev-15",
        "topic": "Revenue",
        "word": "illustrate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "MINH HOẠ, LÀM R Õ Ý",
        "example": "THE LECTUR ER ILLUS TR AT ED HIS POINT WITH A DIAGR AM ON THE BLACKBOAR D.",
        "exampleTranslation": "GIẢNG VIÊN ĐÃ MINH HỌA QUAN ĐIỂM CỦA MÌNH BẰNG MỘ T S Ơ ĐỒ TR ÊN BẢNG ĐEN.",
        "translations": {
            "vi": "MINH HOẠ, LÀM R Õ Ý"
        }
    },
    {
        "id": "rev-16",
        "topic": "Revenue",
        "word": "inaccurate",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KHÔNG CHÍNH XÁC, SAI",
        "example": "THEIR ESTIMATE O F THE COST OF THE PROJECT WAS WILDLY INACCURATE.",
        "exampleTranslation": "ƯỚC TÍNH CỦA HỌ VỀ CHI PHÍ CỦA DỰ ÁN LÀ HOÀN TOÀN KHÔNG CHÍNH XÁC.",
        "translations": {
            "vi": "KHÔNG CHÍNH XÁC, SAI"
        }
    },
    {
        "id": "rev-17",
        "topic": "Revenue",
        "word": "percentage",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TỶ LỆ, TỶ LỆ PHẦN TRĂM",
        "example": "INTEREST RATES HAVE RISEN BY TWO PERCENTAGE POINTS.",
        "exampleTranslation": "LÃI SUẤT ĐÃ TĂNG HAI ĐIỂM PHẦN TRĂM.",
        "translations": {
            "vi": "TỶ LỆ, TỶ LỆ PHẦN TRĂM"
        }
    },
    {
        "id": "rev-18",
        "topic": "Revenue",
        "word": "reduce",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIẢM, GIẢM BỚT, H Ạ",
        "example": "THE PLANE REDUCED SPEED AS IT APPROACHED THE AIRPORT.",
        "exampleTranslation": "MÁY BAY GIẢM T ỐC ĐỘ KHI ĐẾN GẦN SÂN BAY.",
        "translations": {
            "vi": "GIẢM, GIẢM BỚT, H Ạ"
        }
    },
    {
        "id": "rev-19",
        "topic": "Revenue",
        "word": "tend",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CÓ KHUYNH HƯỚNG",
        "example": "I THINK YOU TEND TO EAT MORE IN THE WINTER.",
        "exampleTranslation": "T ÔI NGHĨ RẰNG BẠN CÓ XU HƯỚNG ĂN NHIỀU HƠN VÀO MÙA ĐÔNG.",
        "translations": {
            "vi": "CÓ KHUYNH HƯỚNG"
        }
    },
    {
        "id": "rev-20",
        "topic": "Revenue",
        "word": "revenue",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THU NHẬP, DOANH THU",
        "example": "TAXES PROVIDE MOST OF THE GOVERNMENT'S REVENUE.",
        "exampleTranslation": "THUẾ CUNG CẤP PHẦN LỚN DOANH THU CỦA CHÍNH PHỦ.",
        "translations": {
            "vi": "THU NHẬP, DOANH THU"
        }
    },
    {
        "id": "rev-21",
        "topic": "Revenue",
        "word": "projection",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐẶT KẾ HOẠCH",
        "example": "THE COMPANY HAS FAILED TO ACHIEVE LAST YEAR'S SALES PROJECTIONS BY 30 PERCENT.",
        "exampleTranslation": "CÔNG TY ĐÃ KHÔNG ĐẠT ĐƯỢC DỰ BÁO DOANH SỐ NĂM NGOÁI LÀ 30%.",
        "translations": {
            "vi": "SỰ ĐẶT KẾ HOẠCH"
        }
    },
    {
        "id": "rev-22",
        "topic": "Revenue",
        "word": "shift",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHUYỂN, THAY ĐỔI",
        "example": "THE WIND IS EXPECTED TO SHIFT (TO THE EAST) TOMORROW.",
        "exampleTranslation": "GIÓ ĐƯỢC DỰ BÁO SẼ CHUYỂN (S ANG ĐÔNG) VÀO NGÀY MAI.",
        "translations": {
            "vi": "CHUYỂN, THAY ĐỔI"
        }
    },
    {
        "id": "rev-23",
        "topic": "Revenue",
        "word": "fee",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỆ PHÍ, TIỀN THÙ LAO",
        "example": "WE COULDN'T PAY THE LAWYER'S FEE.",
        "exampleTranslation": "CHÚNG TÔI KHÔNG THỂ TRẢ TIỀN THÙ LAO CHO LUẬT SƯ.",
        "translations": {
            "vi": "LỆ PHÍ, TIỀN THÙ LAO"
        }
    },
    {
        "id": "rev-24",
        "topic": "Revenue",
        "word": "improvement",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CẢI THIỆN, SỰ CẢI TIẾN",
        "example": "HE'S BEEN HAVING TREATMENT FOR TWO MONTHS NOW WITHOUT ANY IMPROVEMENT.",
        "exampleTranslation": "ANH ẤY ĐÃ ĐIỀU TRỊ HAI THÁNG NAY MÀ KHÔNG CÓ SỰ TIẾN TRIỂN GÌ.",
        "translations": {
            "vi": "SỰ CẢI THIỆN, SỰ CẢI TIẾN"
        }
    },
    {
        "id": "rev-25",
        "topic": "Revenue",
        "word": "employer",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHỦ, NGƯỜI SỬ DỤNG LAO ĐỘNG",
        "example": "WE NEED A R EF ER ENCE FR OM Y OUR F ORMER EMPLO YE R.",
        "exampleTranslation": "CHÚNG T ÔI CẦN MỘT T ÀI LIỆU THAM KHẢO TỪ NGƯỜI SỬ DỤNG LAO ĐỘNG CŨ CỦA BẠN.",
        "translations": {
            "vi": "CHỦ, NGƯỜI SỬ DỤNG LAO ĐỘNG"
        }
    },
    {
        "id": "rev-26",
        "topic": "Revenue",
        "word": "typically",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐIỂN HÌNH, THÔNG THƯỜNG",
        "example": "I TYPICALLY GO RUNNING AT LUNCHTIME.",
        "exampleTranslation": "T ÔI THÔNG THƯỜNG CHẠY V ÀO GIỜ ĂN TRƯA.",
        "translations": {
            "vi": "ĐIỂN HÌNH, THÔNG THƯỜNG"
        }
    },
    {
        "id": "rev-27",
        "topic": "Revenue",
        "word": "whole",
        "phonetic": "",
        "pos": "adj",
        "meaning": "T OÀN BỘ, ĐẦY ĐỦ",
        "example": "I SPENT THE WHOLE DAY CLEANING.",
        "exampleTranslation": "T ÔI ĐÃ DÀNH T OÀN BỘ MỘT NGÀY ĐỂ DỌN DẸP.",
        "translations": {
            "vi": "T OÀN BỘ, ĐẦY ĐỦ"
        }
    },
    {
        "id": "rev-28",
        "topic": "Revenue",
        "word": "assumption",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NHẬN ĐỊNH, ĐIỀU GIẢ ĐỊNH",
        "example": "PEOPLE T END T O MAK E AS SUMPTIONS ABOUT Y OU WHEN Y OU HAVE A DIS ABILIT Y. PEOPLE TEND",
        "exampleTranslation": "MỌI NGƯỜI CÓ XU HƯỚNG ĐƯA R A GIẢ ĐỊNH V Ề BẠN KHI BẠN BỊ KHUYẾ T T ẬT. MỌIN",
        "translations": {
            "vi": "NHẬN ĐỊNH, ĐIỀU GIẢ ĐỊNH"
        }
    },
    {
        "id": "rev-29",
        "topic": "Revenue",
        "word": "share",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHIA SẺ, PHÂN PHÁT",
        "example": "BILL AND I SHARED AN OﬃCE FOR YEARS.",
        "exampleTranslation": "BILL VÀ TÔI ĐÃ CHIA SẺ MỘT VĂN PHÒNG TRONG NHIỀU NĂM.",
        "translations": {
            "vi": "CHIA SẺ, PHÂN PHÁT"
        }
    },
    {
        "id": "rev-30",
        "topic": "Revenue",
        "word": "reliant",
        "phonetic": "",
        "pos": "adj",
        "meaning": "DỰA V ÀO, NHỜ V ÀO",
        "example": "THE NATION IS S TILL R ELIANT ON IMPORT ED OIL.",
        "exampleTranslation": "QUỐC GIA NÀY V ẪN DỰA V ÀO DẦU NHẬP KHẨU.",
        "translations": {
            "vi": "DỰA V ÀO, NHỜ V ÀO"
        }
    },
    // ==========================================
    // TOPIC 17: ACCOUNTING (acc-01 → acc-24)
    // ==========================================
    {
        "id": "acc-01",
        "topic": "Accounting",
        "word": "recently",
        "phonetic": "",
        "pos": "adv",
        "meaning": "GẦN ĐÂY",
        "example": "WE JUST RECENTLY MOVED TO TEXAS.",
        "exampleTranslation": "CHÚNG TÔI GẦN ĐÂY VỪA CHUYỂN ĐẾN T EXAS.",
        "translations": {
            "vi": "GẦN ĐÂY"
        }
    },
    {
        "id": "acc-02",
        "topic": "Accounting",
        "word": "substantially",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐÁNG K Ể, NHÌN CHUNG",
        "example": "THE NEW RULES WILL SUBSTANTIALLY CHANGE HOW WE DO THINGS.",
        "exampleTranslation": "CÁC QUY TẮC MỚI SẼ THAY ĐỔI ĐÁNG KỂ CÁCH CHÚNG TÔI THỰC HIỆN MỌI VIỆC.",
        "translations": {
            "vi": "ĐÁNG K Ể, NHÌN CHUNG"
        }
    },
    {
        "id": "acc-03",
        "topic": "Accounting",
        "word": "frequently",
        "phonetic": "",
        "pos": "adv",
        "meaning": "THƯỜNG XUYÊN",
        "example": "THE BUS E S RUN LE SS FR EQUENTLY ON SUNDAYS.",
        "exampleTranslation": "CÁC CHUY ẾN X E BUÝT ÍT CHẠY THƯỜNG XUY ÊN HƠN V ÀO CHỦ NHẬT.",
        "translations": {
            "vi": "THƯỜNG XUYÊN"
        }
    },
    {
        "id": "acc-04",
        "topic": "Accounting",
        "word": "reimburse",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HOÀN TRẢ, TRẢ LẠI",
        "example": "THE AIRLINE REIMBURSED ME F OR THE AMOUNT THEY HAD OVE RCHARGED ME.",
        "exampleTranslation": "NHÃN HÀNG KHÔNG HOÀN TR Ả CHO TÔI SỐ TIỀN MÀ HỌ ĐÃ TÍNH PHÍ QUÁ CAO CHO TÔI.",
        "translations": {
            "vi": "HOÀN TRẢ, TRẢ LẠI"
        }
    },
    {
        "id": "acc-05",
        "topic": "Accounting",
        "word": "considerably",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐÁNG KỂ",
        "example": "T ECHNOLOGY HAS ADVANCED CONSIDERABLY SINCE THEN.",
        "exampleTranslation": "CÔNG NGHỆ ĐÃ TIẾN BỘ ĐÁNG KỂ KỂ TỪ ĐÓ.",
        "translations": {
            "vi": "ĐÁNG KỂ"
        }
    },
    {
        "id": "acc-06",
        "topic": "Accounting",
        "word": "total",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TỔNG, TOÀN BỘ",
        "example": "NEGOTIATIONS HAD TO BE HELD IN TOTAL SECRECY.",
        "exampleTranslation": "CÁC CUỘC ĐÀM PHÁN PHẢI ĐƯỢC GIỮ BÍ MẬT HOÀN TOÀN.",
        "translations": {
            "vi": "TỔNG, TOÀN BỘ"
        }
    },
    {
        "id": "acc-07",
        "topic": "Accounting",
        "word": "allocate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHÂN BỔ, PHÂN CHIA",
        "example": "THE GOVERNMENT IS ALLOCATING £10 MILLION FOR HEALTH EDUCATION.",
        "exampleTranslation": "CHÍNH PHỦ ĐANG PHÂN BỔ 10 TRIỆU BẢNG ANH CHO GIÁO DỤC SỨC KHỎE.",
        "translations": {
            "vi": "PHÂN BỔ, PHÂN CHIA"
        }
    },
    {
        "id": "acc-08",
        "topic": "Accounting",
        "word": "quarter",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUÝ; MỘT PHẦN TƯ",
        "example": "HE CUT THE OR ANGE INT O QUAR TE RS.",
        "exampleTranslation": "ANH T A CẮT QUẢ CAM THÀNH MỘT PHẦN TƯ.",
        "translations": {
            "vi": "QUÝ; MỘT PHẦN TƯ"
        }
    },
    {
        "id": "acc-09",
        "topic": "Accounting",
        "word": "prompt",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NGAY LẬP TỨC; NHANH",
        "example": "THE Y'RE FAIRLY PROMPT IN DEALING WITH ENQUIRIES.",
        "exampleTranslation": "HỌ THƯỜNG KHÁ NHANH NGAY LẬP TỨC TRONG VIỆC GIẢI QUYẾT CÁC YÊU CẦU.",
        "translations": {
            "vi": "NGAY LẬP TỨC; NHANH"
        }
    },
    {
        "id": "acc-10",
        "topic": "Accounting",
        "word": "shorten",
        "phonetic": "",
        "pos": "verb",
        "meaning": "RÚT NGẮN",
        "example": "I'V E ASKED HIM TO SHORTEN MY GR EY TROUSERS.",
        "exampleTranslation": "T ÔI ĐÃ YÊU CẦU ANH TA CẮT NGẮN CHIẾC QUẦN DÀI MÀU XÁM CỦA TÔI. ỦT ÔI",
        "translations": {
            "vi": "RÚT NGẮN"
        }
    },
    {
        "id": "acc-11",
        "topic": "Accounting",
        "word": "calculate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TÍNH TOÁN",
        "example": "THE NEW T AX SYSTEM WO ULD BE CALCULATED ON THE V ALUE THE NEW OF PROPERTY OWNED BY AN INDIVIDUAL.",
        "exampleTranslation": "HỆ THỐNG THUẾ MỚI S Ẽ ĐƯỢC TÍNH TOÁN TRÊN GIÁ TRỊ TÀI SẢN THUỘC SỞ HỮU CỦA MỘT CÁ NHÂN.",
        "translations": {
            "vi": "TÍNH TOÁN"
        }
    },
    {
        "id": "acc-12",
        "topic": "Accounting",
        "word": "compare",
        "phonetic": "",
        "pos": "verb",
        "meaning": "S O SÁNH",
        "example": "THAT SEEMS E XPENSIVE - HAVE YOU COMPA RED PRICES IN OTHER SHOPSfi",
        "exampleTranslation": "ĐIỀU ĐÓ CÓ VẺ ĐẮT - BẠN ĐÃ SO SÁNH GIÁ Ở CÁC CỬA HÀNG KHÁC CHƯAfi",
        "translations": {
            "vi": "S O SÁNH"
        }
    },
    {
        "id": "acc-13",
        "topic": "Accounting",
        "word": "fortunate",
        "phonetic": "",
        "pos": "adj",
        "meaning": "MAY MẮN, THUẬN LỢI",
        "example": "HE W AS F ORTUNAT E IN HIS CHOICE O F AS SI ST ANT.",
        "exampleTranslation": "ANH ẤY ĐÃ MAY MẮN TRONG SỰ LỰA CHỌN TR Ợ LÝ CỦA MÌNH.",
        "translations": {
            "vi": "MAY MẮN, THUẬN LỢI"
        }
    },
    {
        "id": "acc-14",
        "topic": "Accounting",
        "word": "accurately",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CHÍNH XÁC",
        "example": "THE PLANS SHOULD BE DRAWN AS ACCURATELY AS POSSIBLE.",
        "exampleTranslation": "CÁC K Ế HOẠCH NÊN ĐƯỢC VẼ CÀNG CHÍNH XÁC CÀNG TỐT.",
        "translations": {
            "vi": "CHÍNH XÁC"
        }
    },
    {
        "id": "acc-15",
        "topic": "Accounting",
        "word": "worth",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐÁNG GIÁ, BỎ CÔNG",
        "example": "HEROIN WORTH ABOUT $5 MILLION WAS SEIZED.",
        "exampleTranslation": "HEROIN TRỊ GIÁ KHOẢNG 5 TRIỆU ĐÃ BỊ THU GIỮ. EX CE SS /ˈek.ses/",
        "translations": {
            "vi": "ĐÁNG GIÁ, BỎ CÔNG"
        }
    },
    {
        "id": "acc-16",
        "topic": "Accounting",
        "word": "spend",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TIÊU, CHI TIÊU, SỬ DỤNG (THỜI GIAN)",
        "example": "HO W MUCH DID Y OU SPENDfi",
        "exampleTranslation": "BẠN CHI TIÊU BAO NHIÊU TIỀN fi AUDIT KIỂM T OÁN",
        "translations": {
            "vi": "TIÊU, CHI TIÊU, SỬ DỤNG (THỜI GIAN)"
        }
    },
    {
        "id": "acc-17",
        "topic": "Accounting",
        "word": "curtail",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CẮT BỚT, RÚT NGẮN",
        "example": "HE HAD T O CURT AIL HIS SPEECH WHEN TIME R AN OUT.",
        "exampleTranslation": "ANH ẤY PHẢI CẮT NGẮN BÀI PHÁT BIỂU CỦA MÌNH KHI HẾ T THỜI GIAN.",
        "translations": {
            "vi": "CẮT BỚT, RÚT NGẮN"
        }
    },
    {
        "id": "acc-18",
        "topic": "Accounting",
        "word": "committee",
        "phonetic": "",
        "pos": "noun",
        "meaning": "UỶ BAN",
        "example": "THE LOCAL COUNCIL HAS JUST SET UP A COMMI TTE E TO STUDY R ECYCLING.",
        "exampleTranslation": "HỘI ĐỒNG ĐỊA PHƯƠNG VỪA THÀNH LẬP MỘT ỦY BAN ĐỂ NGHIÊN CỨU VIỆC T ÁI CHẾ.",
        "translations": {
            "vi": "UỶ BAN"
        }
    },
    {
        "id": "acc-19",
        "topic": "Accounting",
        "word": "capability",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHẢ NĂNG, NĂNG LỰC",
        "example": "THE SE T ESTS ARE BEYO ND THE CAPABILITY O F AN AV ER AGE TW ELVE -Y EAR -OLD.",
        "exampleTranslation": "NHỮNG BÀI KIỂM TR A NÀY VƯỢT QUÁ KHẢ NĂNG CỦA MỘT HỌC SINH TRUNG BÌNH MƯỜI HAI TUỔI. PR OC EEDS oʊ.siːdz/ DOANH THU",
        "translations": {
            "vi": "KHẢ NĂNG, NĂNG LỰC"
        }
    },
    {
        "id": "acc-20",
        "topic": "Accounting",
        "word": "adequate",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐỦ, ĐẦY ĐỦ",
        "example": "I DIDN 'T HAVE ADEQUAT E TIMET O PR EPARE.",
        "exampleTranslation": "T ÔI KHÔNG C Ó T ÔI KHÔNG CÓ ĐỦ THỜI GIAN ĐỂ CHUẨN BỊ.",
        "translations": {
            "vi": "ĐỦ, ĐẦY ĐỦ"
        }
    },
    {
        "id": "acc-21",
        "topic": "Accounting",
        "word": "inspector",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THANH TR A VIÊN",
        "example": "THE INSPECTOR DECLARED THE MEAT ﬁT F OR HUMAN CONSUMPTION.",
        "exampleTranslation": "THANH TR A TUY ÊN BỐ THỊT PHÙ HỢP ĐỂ LÀM THỨC ĂN CHO NGƯỜI.",
        "translations": {
            "vi": "THANH TR A VIÊN"
        }
    },
    {
        "id": "acc-22",
        "topic": "Accounting",
        "word": "browse",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỌC LƯỚT QUA, XEM QUA",
        "example": "I W AS BROWSING THROUGH F ASHION MAGAZINE S TO ﬁND A NEW HAIRSTYLE.",
        "exampleTranslation": "T ÔI ĐANG LƯỚT QUA CÁC T ẠP CHÍ THỜI TRANG ĐỂ TÌM MỘT KIỂU T ÓC MỚI.",
        "translations": {
            "vi": "ĐỌC LƯỚT QUA, XEM QUA"
        }
    },
    {
        "id": "acc-23",
        "topic": "Accounting",
        "word": "exempt",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐƯỢC MIỄN (THUẾ)",
        "example": "NONPROﬁT ORGANIZ ATIONS ARE E XE MPT FROM TAX ES.",
        "exampleTranslation": "CÁC T Ổ CHỨC PHI LỢI NHUẬN ĐƯỢC MIỄN THUẾ.",
        "translations": {
            "vi": "ĐƯỢC MIỄN (THUẾ)"
        }
    },
    {
        "id": "acc-24",
        "topic": "Accounting",
        "word": "incidental",
        "phonetic": "",
        "pos": "adj",
        "meaning": "PHỤ, THỨ Y ẾU; NGẪU NHIÊN",
        "example": "TR Y NOT T O BE DIS TR ACT ED BY INCIDENT AL DET AILS.",
        "exampleTranslation": "CỐ GẮNG KHÔNG BỊ PHÂN T ÂM BỞI NHỮNG CHI TIẾ T NGẪU NHIÊN.",
        "translations": {
            "vi": "PHỤ, THỨ Y ẾU; NGẪU NHIÊN"
        }
    },
    // ==========================================
    // TOPIC 18: TREND OF COMPANY (tre-01 → tre-36)
    // ==========================================
    {
        "id": "tre-01",
        "topic": "Trend of Company",
        "word": "announce",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THÔNG BÁO, TUY ÊN BỐ",
        "example": "THE Y ANNOUNCED THE DEATH O F THEIR MOTHER IN THE LOCAL PAPER.",
        "exampleTranslation": "HỌ ĐÃ THÔNG BÁO V Ề CÁI CHẾ T CỦA MẸ MÌNH TR ÊN T Ờ BÁO ĐỊA PHƯƠNG.",
        "translations": {
            "vi": "THÔNG BÁO, TUY ÊN BỐ"
        }
    },
    {
        "id": "tre-02",
        "topic": "Trend of Company",
        "word": "interested",
        "phonetic": "",
        "pos": "adj",
        "meaning": "QUAN TÂM; CÓ HỨNG THÚ",
        "example": "HE DIDN'T SEEM VERY INTERESTED IN WHAT I WAS SAYING.",
        "exampleTranslation": "ANH ẤY CÓ VẺ KHÔNG QUAN TÂM LẮM ĐẾN NHỮNG GÌ TÔI ĐANG NÓI.",
        "translations": {
            "vi": "QUAN TÂM; CÓ HỨNG THÚ"
        }
    },
    {
        "id": "tre-03",
        "topic": "Trend of Company",
        "word": "active",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TÍCH CỰC, CHỦ ĐỘNG",
        "example": "IT'S GOOD F OR OLD PEOPLE TO STAY ACTIVE IF THEY CAN.",
        "exampleTranslation": "NẾU CÓ THỂ, NGƯỜI GIÀ NÊN DUY TRÌ HOẠT ĐỘNG TÍCH CỰC.",
        "translations": {
            "vi": "TÍCH CỰC, CHỦ ĐỘNG"
        }
    },
    {
        "id": "tre-04",
        "topic": "Trend of Company",
        "word": "accept",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHẤP NHẬN, THỪA NHẬN",
        "example": "DO Y OU ACCEPT CREDIT CARDSfi",
        "exampleTranslation": "BẠN CÓ CHẤP NHẬN THẺ TÍN DỤNGfi",
        "translations": {
            "vi": "CHẤP NHẬN, THỪA NHẬN"
        }
    },
    {
        "id": "tre-05",
        "topic": "Trend of Company",
        "word": "expansion",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ MỞ R ỘNG, SỰ BÀNH TRƯỚNG",
        "example": "EXPANSION INT O NEW AREAS O F R ESEAR CH MIGHT BE PO SSIBLE.",
        "exampleTranslation": "SỰ MỞ R ỘNG S ANG CÁC LĨNH VỰC NGHIÊN CỨU MỚI LÀ CÓ TH Ể.",
        "translations": {
            "vi": "SỰ MỞ R ỘNG, SỰ BÀNH TRƯỚNG"
        }
    },
    {
        "id": "tre-06",
        "topic": "Trend of Company",
        "word": "relocate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHUY ỂN CHỖ",
        "example": "THER E ARE PLANS T O R ELOCAT E THE MAIN RUNW AY AT THE AIRPORT.",
        "exampleTranslation": "CÓ K Ế HOẠCH CHUY ỄN CHỖ ĐƯỜNG BĂNG CHÍNH T ẠI S ÂN BAY.",
        "translations": {
            "vi": "CHUY ỂN CHỖ"
        }
    },
    {
        "id": "tre-07",
        "topic": "Trend of Company",
        "word": "competitor",
        "phonetic": "",
        "pos": "noun",
        "meaning": "ĐỐI THỦ, NGƯỜI CẠNH TR ANH",
        "example": "THEIR PRICE S ARE BE TTER THAN ANY O F THEIR COMPE TITO RS. PRIC ES",
        "exampleTranslation": "GIÁ CỦA HỌ T ỐT HƠN BẤT KỲ ĐỐI THỦ CẠNH TR ANH NÀO CỦA HỌ.",
        "translations": {
            "vi": "ĐỐI THỦ, NGƯỜI CẠNH TR ANH"
        }
    },
    {
        "id": "tre-08",
        "topic": "Trend of Company",
        "word": "contribute",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐÓNG GÓP, GÓP PHẦN",
        "example": "COMET O THE MEE TING IF Y OU F EEL Y OU HAVE S OMET HING TO CONTRIBUT E.",
        "exampleTranslation": "HÃY ĐẾN BUỔI HỌP NẾU BẠN CẢM THẤY MÌNH CÓ ĐIỀU GÌ ĐÓ ĐỂ ĐÓNG GÓP.",
        "translations": {
            "vi": "ĐÓNG GÓP, GÓP PHẦN"
        }
    },
    {
        "id": "tre-09",
        "topic": "Trend of Company",
        "word": "dedicated",
        "phonetic": "",
        "pos": "adj",
        "meaning": "T ẬN T ÂM, NHIỆ T TÌNH, CỐNG HIẾ N",
        "example": "SHE 'S COMPLE TELY DEDICAT ED T O HER W ORK.",
        "exampleTranslation": "CÔ ẤY HOÀN T OÀN T ẬN T ÂM V ỚI CÔNG VIỆC CỦA MÌNH.",
        "translations": {
            "vi": "T ẬN T ÂM, NHIỆ T TÌNH, CỐNG HIẾ N"
        }
    },
    {
        "id": "tre-10",
        "topic": "Trend of Company",
        "word": "considerable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐÁNG K Ể",
        "example": "THE ﬁR E CAUS ED CONSIDER ABLE DAMAGE T O THE CHUR CH.",
        "exampleTranslation": "V Ụ CHÁY ĐÃ GÂY THIỆ T HẠI ĐÁNG K Ể CHO NHÀ THỜ.",
        "translations": {
            "vi": "ĐÁNG K Ể"
        }
    },
    {
        "id": "tre-11",
        "topic": "Trend of Company",
        "word": "last",
        "phonetic": "",
        "pos": "verb",
        "meaning": "K ÉO DÀI, T ỒN T ẠI",
        "example": "I HAT E BEING THE LAS T ONE T O ARRIV E AT A MEE TING.",
        "exampleTranslation": "T ÔI GHÉ T LÀ NGƯỜI CUỐI CÙNG ĐẾN MỘT CUỘC HỌP.",
        "translations": {
            "vi": "K ÉO DÀI, T ỒN T ẠI"
        }
    },
    {
        "id": "tre-12",
        "topic": "Trend of Company",
        "word": "emerge",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NỔI LÊN, X ẢY R A",
        "example": "SHE EMER GED FR OM THE S EA, BLUE WITH COLD.",
        "exampleTranslation": "CÔ ẤY NỔI LÊN TỪ MẶT BIỂN, TRONG XA NH VÌ LẠNH.",
        "translations": {
            "vi": "NỔI LÊN, X ẢY R A"
        }
    },
    {
        "id": "tre-13",
        "topic": "Trend of Company",
        "word": "select",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LỰA CHỌN, TUY ỂN CHỌN",
        "example": "HO W DO Y OU S ELECT PEOPLE F OR PR OMOTION fi",
        "exampleTranslation": "LÀM THẾ NÀO ĐỂ BẠN LỰA CHỌN NGƯỜI ĐỂ THĂNG CHỨCfi",
        "translations": {
            "vi": "LỰA CHỌN, TUY ỂN CHỌN"
        }
    },
    {
        "id": "tre-14",
        "topic": "Trend of Company",
        "word": "vital",
        "phonetic": "",
        "pos": "adj",
        "meaning": "S ỐNG CÒN, QUAN TR ỌNG",
        "example": "SHE HAD F OUND OUT S OME INF ORMATION O F VIT AL IMPORT ANCE.",
        "exampleTranslation": "CÔ ĐÃ TÌM R A MỘT S Ố THÔNG TIN QUAN TR ỌNG.",
        "translations": {
            "vi": "S ỐNG CÒN, QUAN TR ỌNG"
        }
    },
    {
        "id": "tre-15",
        "topic": "Trend of Company",
        "word": "persist",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KIÊN TRÌ, VẪN CÒN",
        "example": "IF THE PAIN PER SISTS, CONSULT A DOCTOR.",
        "exampleTranslation": "NẾU CƠN ĐAU K ÉO DÀI, HÃY HỎI Ý KIẾN BÁC SĨ.",
        "translations": {
            "vi": "KIÊN TRÌ, VẪN CÒN"
        }
    },
    {
        "id": "tre-16",
        "topic": "Trend of Company",
        "word": "independent",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐỘC LẬP, KHÔNG LỆ THUỘC",
        "example": "THE Y ALL MADE THE S AME COMMENT, QUIT E INDEPENDENT O F EACH OTHER.",
        "exampleTranslation": "TẤT CẢ ĐỀU ĐƯA RA NHẬN X É T GIỐNG NHAU, KHÁ ĐỘC LẬP VỚI NHAU.",
        "translations": {
            "vi": "ĐỘC LẬP, KHÔNG LỆ THUỘC"
        }
    },
    {
        "id": "tre-17",
        "topic": "Trend of Company",
        "word": "force",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỰC, QUY ỀN LỰC",
        "example": "SHE SLAPPED HIS F ACE WITH UNE XPECTED F ORCE. FO RCE.",
        "exampleTranslation": "CÔ TÁT VÀO MẶT ANH VỚI MỘT LỰC BẤT NGỜ.",
        "translations": {
            "vi": "LỰC, QUY ỀN LỰC"
        }
    },
    {
        "id": "tre-18",
        "topic": "Trend of Company",
        "word": "renowned",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NỔI TIẾNG, CÓ TIẾN G",
        "example": "THE REGION IS R ENO WNED F OR ITS NATURAL BEAUTY.",
        "exampleTranslation": "KHU VỰC NÀY NỔI TIẾNG VỚI VẺ ĐẸP TỰ NHIÊN CỦA NÓ.",
        "translations": {
            "vi": "NỔI TIẾNG, CÓ TIẾN G"
        }
    },
    {
        "id": "tre-19",
        "topic": "Trend of Company",
        "word": "informed",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ HIỂU BIẾT, AM HIỂU",
        "example": "ELIZ ABE TH IS R EMARK ABLY W ELL-INF ORMED.",
        "exampleTranslation": "ELIZ ABE TH LÀ MỘT NGƯỜI CÓ HIỂU BIẾ T T ỐT.",
        "translations": {
            "vi": "CÓ HIỂU BIẾT, AM HIỂU"
        }
    },
    {
        "id": "tre-20",
        "topic": "Trend of Company",
        "word": "waive",
        "phonetic": "",
        "pos": "verb",
        "meaning": "MIỄN, TỪ BỎ",
        "example": "IF THEY WAIVE THE TIME LIMIT, MANY MORE APPLICATIONS WILL COME IN.",
        "exampleTranslation": "NẾU HỌ TỪ BỎ THỜI HẠN, SẼ CÓ NHIỀU ĐƠN ĐĂNG KÝ HƠN NỮA.",
        "translations": {
            "vi": "MIỄN, TỪ BỎ"
        }
    },
    {
        "id": "tre-21",
        "topic": "Trend of Company",
        "word": "reach",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẠT TỚI; ĐI TỚI",
        "example": "WE WON'T REACH MIAMI UNTIL ﬁVE OR SIX O'CLOCK.",
        "exampleTranslation": "CHÚNG TÔI SẼ KHÔNG ĐI TỚI ĐƯỢC MIAMI CHO ĐẾN NĂM HOẶC SÁU GIỜ.",
        "translations": {
            "vi": "ĐẠT TỚI; ĐI TỚI"
        }
    },
    {
        "id": "tre-22",
        "topic": "Trend of Company",
        "word": "acquire",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIÀNH ĐƯỢC, THU ĐƯỢC",
        "example": "HE ACQUIRED THE ﬁRM IN 2008.",
        "exampleTranslation": "ÔNG GIÀNH LẠI CÔNG TY VÀO NĂM 2008.",
        "translations": {
            "vi": "GIÀNH ĐƯỢC, THU ĐƯỢC"
        }
    },
    {
        "id": "tre-23",
        "topic": "Trend of Company",
        "word": "simultaneously",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐỒNG THỜI, CÙNG LÚC",
        "example": "TW O CHILDR EN ANSWE R ED THE T EACHER 'S QUESTION SIMULT ANEOUSLY.",
        "exampleTranslation": "HAI ĐỨA TR Ẻ CÙNG LÚC TR Ả LỜI CÂU HỎI CỦA GIÁO VIÊN.",
        "translations": {
            "vi": "ĐỒNG THỜI, CÙNG LÚC"
        }
    },
    {
        "id": "tre-24",
        "topic": "Trend of Company",
        "word": "reveal",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HÉ LỘ, TIẾ T LỘ, KHÁM PHÁ",
        "example": "HE W AS JAILED F OR R EVEALING S ECR ET S T O THE RUS SIANS.",
        "exampleTranslation": "ANH T A BỊ BỎ TÙ VÌ TIẾ T LỘ BÍ MẬT CHO NGƯỜI NGA.",
        "translations": {
            "vi": "HÉ LỘ, TIẾ T LỘ, KHÁM PHÁ"
        }
    },
    {
        "id": "tre-25",
        "topic": "Trend of Company",
        "word": "uncertain",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KHÔNG CHẮC CHẮN",
        "example": "ARIANA W AS UNCERTAIN ABOUT MEE TING HIM.",
        "exampleTranslation": "ARIANA KHÔNG CHẮC CHẮN V Ề VIỆC GẶP ANH T A. NH TA.",
        "translations": {
            "vi": "KHÔNG CHẮC CHẮN"
        }
    },
    {
        "id": "tre-26",
        "topic": "Trend of Company",
        "word": "asset",
        "phonetic": "",
        "pos": "noun",
        "meaning": "T ÀI S ẢN, CỦA CẢI",
        "example": "HE 'LL BE A GR EAT AS SET T O THE T EAM.",
        "exampleTranslation": "ANH ẤY S Ẽ LÀ MỘT T ÀI S ẢN LỚN CHO ĐỘI.",
        "translations": {
            "vi": "T ÀI S ẢN, CỦA CẢI"
        }
    },
    {
        "id": "tre-27",
        "topic": "Trend of Company",
        "word": "misplace",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẶT NHẦM CHỖ, LÀM THẤT LẠC",
        "example": "SHE MISPLACED HER KEYS SO OFTEN THAT HER SECRETARY TO CARRY SPARE ONES FOR HER.",
        "exampleTranslation": "CÔ ẤY ĐÁNH MẤT CHÌA KHÓA THƯỜNG XUYÊN ĐẾN NỖI THƯ KÝ CỦA CÔ ẤY THƯỜNG MANG THEO NHỮNG CHIẾC DỰ PHÒNG CHO CÔ ẤY.",
        "translations": {
            "vi": "ĐẶT NHẦM CHỖ, LÀM THẤT LẠC"
        }
    },
    {
        "id": "tre-28",
        "topic": "Trend of Company",
        "word": "grow",
        "phonetic": "",
        "pos": "verb",
        "meaning": "MỌC LÊN, LỚN LÊN, PHÁT TRIỂN",
        "example": "CHILDREN GROW SO QUICKLY.",
        "exampleTranslation": "NHỮNG ĐỨA TRẺ LỚN LÊN RẤT NHANH.",
        "translations": {
            "vi": "MỌC LÊN, LỚN LÊN, PHÁT TRIỂN"
        }
    },
    {
        "id": "tre-29",
        "topic": "Trend of Company",
        "word": "merge",
        "phonetic": "",
        "pos": "verb",
        "meaning": "K ẾT HỢP, HỢP NHẤT, SÁP NHẬP",
        "example": "THEY DECIDED TO MERGE THE TWO COMPANIES INTO ONE.",
        "exampleTranslation": "HỌ QUYẾT ĐỊNH HỢP NHẤT HAI CÔNG TY THÀNH MỘT.",
        "translations": {
            "vi": "K ẾT HỢP, HỢP NHẤT, SÁP NHẬP"
        }
    },
    {
        "id": "tre-30",
        "topic": "Trend of Company",
        "word": "imply",
        "phonetic": "",
        "pos": "verb",
        "meaning": "Ý NÓI, NGỤ Ý",
        "example": "I DE T ECT ED AN IMPLIED CRITICISM O F THE W AY HE W AS TR EAT ED. I DETECT PLIED CRITICISM OF TH Y HE WAS TREAT",
        "exampleTranslation": "T ÔI PHÁT HIỆN R A MỘT LỜI CHỈ TRÍCH NGỤ Ý V Ề CÁCH ANH ẤY TÔI PHÁT HIỆN ĐƯỢC ĐỐI XỬ.",
        "translations": {
            "vi": "Ý NÓI, NGỤ Ý"
        }
    },
    {
        "id": "tre-31",
        "topic": "Trend of Company",
        "word": "initiate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KHỞI ĐẦU, BẮT ĐẦU",
        "example": "WHO INITIATED THE VIOLENCEfi",
        "exampleTranslation": "AI ĐÃ BẮT ĐẦU BẠO LỰCfi",
        "translations": {
            "vi": "KHỞI ĐẦU, BẮT ĐẦU"
        }
    },
    {
        "id": "tre-32",
        "topic": "Trend of Company",
        "word": "enhance",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TĂNG CƯỜNG, NÂNG CAO",
        "example": "IT'S THINGS LIKE THIS THAT ENHANCE THE QUALITY OF LIFE.",
        "exampleTranslation": "CHÍNH NHỮNG THỨ NHƯ THẾ NÀY SẼ NÂNG CAO CHẤT LƯỢNG CUỘC SỐNG.",
        "translations": {
            "vi": "TĂNG CƯỜNG, NÂNG CAO"
        }
    },
    {
        "id": "tre-33",
        "topic": "Trend of Company",
        "word": "minutes",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BIÊN BẢN",
        "example": "LATEST WORKING MINUTES IS 2020.",
        "exampleTranslation": "BIÊN BẢN LÀM VIỆC MỚI NHẤT LÀ 2020.",
        "translations": {
            "vi": "BIÊN BẢN"
        }
    },
    {
        "id": "tre-34",
        "topic": "Trend of Company",
        "word": "surpass",
        "phonetic": "",
        "pos": "verb",
        "meaning": "VƯỢT, TR ỘI HƠN",
        "example": "THE BOOK' S SUCCE S S HAS SURPA SS ED EVE RY ONE' S E XPECT ATIONS.",
        "exampleTranslation": "THÀNH CÔNG CỦA CUỐN S ÁCH ĐÃ VƯỢT QUA SỰ MONG ĐỢI CỦA MỌI NGƯỜI.",
        "translations": {
            "vi": "VƯỢT, TR ỘI HƠN"
        }
    },
    {
        "id": "tre-35",
        "topic": "Trend of Company",
        "word": "run",
        "phonetic": "",
        "pos": "verb",
        "meaning": "QUẢN LÝ, V ẬN HÀNH",
        "example": "WE MUS T IMPOS E S OME KIND O F OR DER ON THE W AY THIS O ﬃCE IS RUN.",
        "exampleTranslation": "CHÚNG T A PHẢI ÁP ĐẶT MỘT S Ố LOẠI TR ẬT TỰ CHO CÁC H V ẬN HÀNH V ĂN PHÒNG NÀY.",
        "translations": {
            "vi": "QUẢN LÝ, V ẬN HÀNH"
        }
    },
    {
        "id": "tre-36",
        "topic": "Trend of Company",
        "word": "edge",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỢI THẾ; RÌA, CẠNH",
        "example": "HE PUT PINK ICING AR OUND THE EDGE O F THE CAK E.",
        "exampleTranslation": "ANH ẤY PHỦ LỚP K EM MÀU HỒNG XUNG QUANH RÌA BÁNH. PR ODUC T PR ODUCTIVIT Y HIỆU SUẤT",
        "translations": {
            "vi": "LỢI THẾ; RÌA, CẠNH"
        }
    },
    // ==========================================
    // TOPIC 19: MEETING (mee-01 → mee-30)
    // ==========================================
    {
        "id": "mee-01",
        "topic": "Meeting",
        "word": "coordination",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TÍCH CỰC, CHỦ ĐỘNG",
        "example": "GYMNAS TICS IS A SPORT THAT R EQUIR E S A LOT O F COOR DINATION.",
        "exampleTranslation": "THỂ DỤC DỤNG CỤ LÀ MÔN THỂ THAO ĐÒI HỎI SỰ PHỐI HỢP NHỊP NHÀNG.",
        "translations": {
            "vi": "TÍCH CỰC, CHỦ ĐỘNG"
        }
    },
    {
        "id": "mee-02",
        "topic": "Meeting",
        "word": "unanimous",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NHẤT TRÍ, NHẤT T ÂM",
        "example": "THE NEW F ORMAT HAS UNANIMOUS SUPPORT. HAS UNANIMOUS SUP P",
        "exampleTranslation": "ĐỊNH DẠNG MỚI ĐƯỢC SỰ ỦNG HỘ NHẤT TRÍ.",
        "translations": {
            "vi": "NHẤT TRÍ, NHẤT T ÂM"
        }
    },
    {
        "id": "mee-03",
        "topic": "Meeting",
        "word": "consensus",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐỒNG THUẬN, SỰ NHẤT TRÍ",
        "example": "THE GENER AL CONS ENSUS IN THE O ﬃCE IS THAT HE CAN 'T D O HIS JOB.",
        "exampleTranslation": "SỰ ĐỒNG THUẬN CHUNG TRONG VĂ N PHÒNG LÀ ANH T A KHÔNG THỂ LÀM CÔNG VIỆC CỦA MÌNH.",
        "translations": {
            "vi": "SỰ ĐỒNG THUẬN, SỰ NHẤT TRÍ"
        }
    },
    {
        "id": "mee-04",
        "topic": "Meeting",
        "word": "reschedule",
        "phonetic": "",
        "pos": "verb",
        "meaning": "DỜI LỊCH, ĐỔI LỊCH",
        "example": "I R ES CHEDULED MY DOCT OR 'S APPOINTMENT F OR LAT ER IN THE W EEK.",
        "exampleTranslation": "TÔI ĐÃ DỜI LỊCH LẠI CUỘC HẸN V ỚI BÁC SĨ CỦA MÌNH V ÀO CUỐI TUẦN.",
        "translations": {
            "vi": "DỜI LỊCH, ĐỔI LỊCH"
        }
    },
    {
        "id": "mee-05",
        "topic": "Meeting",
        "word": "determine",
        "phonetic": "",
        "pos": "verb",
        "meaning": "X ÁC ĐỊNH, QUY Ế T ĐỊNH",
        "example": "YOUR HEALTH IS DE TERMINED IN PART BY WHAT Y OU EAT.",
        "exampleTranslation": "SỨC KHỎE CỦA BẠN ĐƯỢC QUY Ế T ĐỊNH MỘT PHẦN BỞI NHỮNG GÌ BẠN ĂN.",
        "translations": {
            "vi": "X ÁC ĐỊNH, QUY Ế T ĐỊNH"
        }
    },
    {
        "id": "mee-06",
        "topic": "Meeting",
        "word": "approve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHẤP THUẬN, PHÊ CHUẨN",
        "example": "SHE DOE SN 'T APPR OVE O F MY FRIENDS.",
        "exampleTranslation": "CÔ ẤY KHÔNG CHẤP NHẬN BẠN BÈ CỦA T ÔI.",
        "translations": {
            "vi": "CHẤP THUẬN, PHÊ CHUẨN"
        }
    },
    {
        "id": "mee-07",
        "topic": "Meeting",
        "word": "enclosed",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐƯỢC GỬI KÈM, KÈM THEO",
        "example": "THE ENCLOS ED CARD IS FOR JULIA.",
        "exampleTranslation": "T ẤM THẺ KÈM THEO LÀ CỦA JULIA.",
        "translations": {
            "vi": "ĐƯỢC GỬI KÈM, KÈM THEO"
        }
    },
    {
        "id": "mee-08",
        "topic": "Meeting",
        "word": "easy",
        "phonetic": "",
        "pos": "adj",
        "meaning": "DỄ DÀNG, ĐƠN GIẢ N",
        "example": "WOULD A TEN O'CLOCK APPOINTMENT BE EASIER FOR YOUfi",
        "exampleTranslation": "MỘT CUỘC HẸN LÚC MƯỜI GIỜ CÓ DỄ DÀNG HƠN CHO BẠN KHÔNGfi RE CO RD SỔ SÁCH GHI CHÉP, LÝ LỊCH",
        "translations": {
            "vi": "DỄ DÀNG, ĐƠN GIẢ N"
        }
    },
    {
        "id": "mee-09",
        "topic": "Meeting",
        "word": "suggestion",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐỀ NGHỊ, ĐỀ XUẤT",
        "example": "SHE MADE SOME VERY HELPFUL SUGGESTIONS BUT HER BOSS EJECTED THEM ALL.",
        "exampleTranslation": "CÔ ẤY ĐÃ ĐƯA R A MỘT SỐ ĐỀ XUẤT R ẤT HỮU ÍCH NHƯNG SẾP CỦA CÔ ẤY ĐÃ TỪ CHỐI TẤT CẢ.",
        "translations": {
            "vi": "SỰ ĐỀ NGHỊ, ĐỀ XUẤT"
        }
    },
    {
        "id": "mee-10",
        "topic": "Meeting",
        "word": "attention",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CHÚ Ý, SỰ CHĂM SÓC",
        "example": "LADIES AND GENTLEMEN, COULD I HAVE YOUR ATTENTION, PLEASEfi",
        "exampleTranslation": "THƯA QUÝ VỊ, XIN VUI LÒNG CÓ THỂ CHÚ Ý TÔI ĐƯỢC KHÔNGfi",
        "translations": {
            "vi": "SỰ CHÚ Ý, SỰ CHĂM SÓC"
        }
    },
    {
        "id": "mee-11",
        "topic": "Meeting",
        "word": "object",
        "phonetic": "",
        "pos": "verb",
        "meaning": "PHẢN ĐỐI, CHỐNG",
        "example": "IF NO ONE OB JECT S, I W OULD LIK E MR S HARRIS ON T O BE PR ES ENT.",
        "exampleTranslation": "NẾU KHÔNG AI PHẢN ĐỐI, T ÔI MUỐN BÀ HARRISO N CÓ MẶT.",
        "translations": {
            "vi": "PHẢN ĐỐI, CHỐNG"
        }
    },
    {
        "id": "mee-12",
        "topic": "Meeting",
        "word": "undergo",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHỊU, BỊ, TRẢI QUA",
        "example": "SHE UNDERW ENT AN OPER ATION ON A TUMOUR IN HER LEFT LUNG LAST YEAR.",
        "exampleTranslation": "CÔ ĐÃ TRẢI QUA MỘT CUỘC PHẪU THUẬT KHỐI U Ở PHỔI TRÁI VÀO NĂM NGOÁI.",
        "translations": {
            "vi": "CHỊU, BỊ, TRẢI QUA"
        }
    },
    {
        "id": "mee-13",
        "topic": "Meeting",
        "word": "outcome",
        "phonetic": "",
        "pos": "noun",
        "meaning": "K ẾT QUẢ, HẬU QUẢ",
        "example": "IT'S TOO EARLY TO PREDICT THE OUTCOME OF THE MEE TING.",
        "exampleTranslation": "CÒN QUÁ SỚM ĐỂ DỰ ĐOÁN K ẾT QUẢ CỦA CUỘC HỌP. NARR O WLY KỸ LƯỠNG, TỈ MỈ",
        "translations": {
            "vi": "K ẾT QUẢ, HẬU QUẢ"
        }
    },
    {
        "id": "mee-14",
        "topic": "Meeting",
        "word": "give",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐƯA RA, CHO, TẶNG",
        "example": "SHE GAVE SET OF SAUCEPANS AS A WEDDING PRESENT.",
        "exampleTranslation": "CÔ ẤY TẶNG CHÚNG TÔI MỘT BỘ XOONG LÀM QUÀ CƯỚI.",
        "translations": {
            "vi": "ĐƯA RA, CHO, TẶNG"
        }
    },
    {
        "id": "mee-15",
        "topic": "Meeting",
        "word": "distract",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM SAO NHÃNG, GÂY PHÂN TÂ M",
        "example": "HE TRIED TO DISTRACT ATTENTION FROM HIS OWN ILLEGAL ACTIVITIES.",
        "exampleTranslation": "ANH TA CỐ GẮNG ĐÁNH LẠC HƯỚNG SỰ CHÚ Ý KHỎI CÁC HOẠT ĐỘNG BẤT HỢP PHÁP CỦA CHÍNH MÌNH.",
        "translations": {
            "vi": "LÀM SAO NHÃNG, GÂY PHÂN TÂ M"
        }
    },
    {
        "id": "mee-16",
        "topic": "Meeting",
        "word": "emphasis",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ NHẤN MẠNH",
        "example": "SHE PLACED THE EMPHASIS ON THE WORD ' SOON'.",
        "exampleTranslation": "CÔ ẤY NHẤN MẠNH V ÀO TỪ 'SỚM'.",
        "translations": {
            "vi": "SỰ NHẤN MẠNH"
        }
    },
    {
        "id": "mee-17",
        "topic": "Meeting",
        "word": "organize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TỔ CHỨC, THIẾT LẬP",
        "example": "THEY ORGANIZED A MEE TING BETWEEN THE TEACHERS AND STUDENTS.",
        "exampleTranslation": "HỌ ĐÃ T Ổ CHỨC MỘT BUỔI GẶP MẶT GIỮA GIÁO VIÊN VÀ HỌC SINH.",
        "translations": {
            "vi": "TỔ CHỨC, THIẾT LẬP"
        }
    },
    {
        "id": "mee-18",
        "topic": "Meeting",
        "word": "persuasive",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ SỨC THUYẾT PHỤC",
        "example": "HE CAN BE VERY PERSUASIVE.",
        "exampleTranslation": "ANH ẤY CÓ THỂ RẤT CÓ SỨC THUYẾT PHỤC.",
        "translations": {
            "vi": "CÓ SỨC THUYẾT PHỤC"
        }
    },
    {
        "id": "mee-19",
        "topic": "Meeting",
        "word": "constructive",
        "phonetic": "",
        "pos": "adj",
        "meaning": "MANG TÍNH X ÂY DỰNG",
        "example": "IF Y OU DON 'T HAVE ANYTHING CONS TRUCTIV E T O S AY, IT' S BE TTE R T O S AY NOTHING.",
        "exampleTranslation": "NẾU BẠN KHÔNG CÓ BẤT CỨ ĐIỀU GÌ MANG TÍNH X ÂY DỰNG ĐỂ NÓI, T ỐT HƠN LÀ KHÔNG NÊN NÓI GÌ.",
        "translations": {
            "vi": "MANG TÍNH X ÂY DỰNG"
        }
    },
    {
        "id": "mee-20",
        "topic": "Meeting",
        "word": "irrelevant",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KHÔNG LIÊN QUAN",
        "example": "THE S E DOCUMENTS ARE LAR GELY IRR ELEVANT T O THE PRE SE NT INVESTIGATION.",
        "exampleTranslation": "NHỮNG T ÀI LIỆU NÀY PHẦN LỚN KHÔNG LIÊN QUAN ĐẾN CUỘC ĐIỀU TR A HIỆN T ẠI.",
        "translations": {
            "vi": "KHÔNG LIÊN QUAN"
        }
    },
    {
        "id": "mee-21",
        "topic": "Meeting",
        "word": "refute",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BÁC BỎ, BẺ LẠI",
        "example": "ARE Y OU R E FUTING THE E VIDENCE fi",
        "exampleTranslation": "BẠN CÓ ĐANG BÁC BỎ BẰNG CHỨNG KHÔNGfi",
        "translations": {
            "vi": "BÁC BỎ, BẺ LẠI"
        }
    },
    {
        "id": "mee-22",
        "topic": "Meeting",
        "word": "defer",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HOÃN, TRÌ HOÃN",
        "example": "MY BANK HAS AGREED T O DE FE R THE R EPAYMENT S ON MY LOAN.",
        "exampleTranslation": "NGÂN HÀNG CỦA T ÔI ĐÃ ĐỒNG Ý HOÃN TR Ả KHOẢN V AY CỦA T ÔI.",
        "translations": {
            "vi": "HOÃN, TRÌ HOÃN"
        }
    },
    {
        "id": "mee-23",
        "topic": "Meeting",
        "word": "meeting",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CUỘC HỌP, CUỘC GẶP",
        "example": "WE 'R E HAVING A MEE TING ON THURS DAY T O DIS CUS S THE PR OBLEM.",
        "exampleTranslation": "CHÚNG T ÔI S Ẽ CÓ MỘT CUỘC HỌP V ÀO THỨ NĂM ĐỂ THẢO LUẬN V Ề V ẤN ĐỀ NÀY.",
        "translations": {
            "vi": "CUỘC HỌP, CUỘC GẶP"
        }
    },
    {
        "id": "mee-24",
        "topic": "Meeting",
        "word": "comment",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BÌNH LUẬN, ĐƯA R A Ý KIẾN",
        "example": "THE LAWY ER W ON ’T COMMENT PUBLICLY ON THE CAS E.",
        "exampleTranslation": "LUẬT SƯ S Ẽ KHÔNG BÌNH LUẬN CÔNG KHAI V Ề VỤ VIỆC.",
        "translations": {
            "vi": "BÌNH LUẬN, ĐƯA R A Ý KIẾN"
        }
    },
    {
        "id": "mee-25",
        "topic": "Meeting",
        "word": "phase",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BƯỚC, GIAI ĐOẠN",
        "example": "WE 'R E ENT ERING A NEW PHAS E IN INT ERNATIONAL R ELATIONS.",
        "exampleTranslation": "CHÚNG T A ĐANG BƯỚC V ÀO MỘT GIAI ĐOẠN MỚI TRONG QUAN HỆ QUỐC T Ế.",
        "translations": {
            "vi": "BƯỚC, GIAI ĐOẠN"
        }
    },
    {
        "id": "mee-26",
        "topic": "Meeting",
        "word": "coincidentally",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TRÙNG HỢP, NGẪU NHIÊN",
        "example": "MO SHUT HIS EYES AND S WUNG, THE BALL AND THE BAT COINCIDENT ALLY ARRIVING AT THE S AME PLACE AT THE S AMETIME.",
        "exampleTranslation": "MO NHẮM MẮT V À VUNG V ẨY, QUẢ BÓNG V À CON DƠI TÌNH CỜ ĐẾN CÙNG MỘT NƠI CÙNG MỘT LÚC.",
        "translations": {
            "vi": "TRÙNG HỢP, NGẪU NHIÊN"
        }
    },
    {
        "id": "mee-27",
        "topic": "Meeting",
        "word": "crowded",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐÔNG ĐÚC, CHẬT NÍCH",
        "example": "BY T EN O'CLOCK THE BAR W AS CROWDED.",
        "exampleTranslation": "ĐẾN MƯỜI GIỜ QUÁN ĐÃ ĐÔNG KHÁCH.",
        "translations": {
            "vi": "ĐÔNG ĐÚC, CHẬT NÍCH"
        }
    },
    {
        "id": "mee-28",
        "topic": "Meeting",
        "word": "press",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BÁO CHÍ",
        "example": "THE INCIDENT HAS BEEN WIDELY REPORTED IN THE PRESS.",
        "exampleTranslation": "SỰ VIỆC ĐÃ ĐƯỢC THÔNG TIN RỘNG RÃI TRÊN BÁO CHÍ.",
        "translations": {
            "vi": "BÁO CHÍ"
        }
    },
    {
        "id": "mee-29",
        "topic": "Meeting",
        "word": "adjourn",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HOÃN LẠI, NGỪNG",
        "example": "THE MEE TING WAS ADJOURNED UNTIL TUESDAY.",
        "exampleTranslation": "CUỘC HỌP ĐÃ ĐƯỢC HOÃN LẠI CHO ĐẾN THỨ BA.",
        "translations": {
            "vi": "HOÃN LẠI, NGỪNG"
        }
    },
    {
        "id": "mee-30",
        "topic": "Meeting",
        "word": "preside",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHỦ TRÌ, CHỦ TOẠ",
        "example": "WHO WOULD BE THE BEST PERSON TO PRESIDE AT THE PUBLIC ENQUIRYfi",
        "exampleTranslation": "AI SẼ LÀ NGƯỜI TỐT NHẤT ĐỂ CHỦ TRÌ CÔNG KHAIfi C ONSTRAINT SỰ EO HẸP",
        "translations": {
            "vi": "CHỦ TRÌ, CHỦ TOẠ"
        }
    },
    // ==========================================
    // TOPIC 20: EMPLOYEE BENEFITS (ben-01 → ben-47)
    // ==========================================
    {
        "id": "ben-01",
        "topic": "Employee Benefits",
        "word": "purpose",
        "phonetic": "",
        "pos": "noun",
        "meaning": "MỤC ĐÍCH, Ý ĐỊNH",
        "example": "HIS ONLY PURPOSE IN LIFE SEEMS TO BE TO ENJOY HIMSELF.",
        "exampleTranslation": "MỤC ĐÍCH SỐNG DUY NHẤT CỦA ANH ẤY DƯỜNG NHƯ LÀ ĐỂ TẬN HƯỞNG BẢN THÂN.",
        "translations": {
            "vi": "MỤC ĐÍCH, Ý ĐỊNH"
        }
    },
    {
        "id": "ben-02",
        "topic": "Employee Benefits",
        "word": "lecture",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BÀI GIẢNG, BÀI DIỄN THUYẾT",
        "example": "WE WENT TO A LECTURE ON ITALIAN ART.",
        "exampleTranslation": "CHÚNG TÔI ĐÃ ĐẾN MỘT BÀI GIẢNG VỀ NGHỆ THUẬT Ý.",
        "translations": {
            "vi": "BÀI GIẢNG, BÀI DIỄN THUYẾT"
        }
    },
    {
        "id": "ben-03",
        "topic": "Employee Benefits",
        "word": "participant",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGƯỜI THAM GIA/THAM DỰ",
        "example": "SHE HAS BEEN AN ACTIVE PARTICIPANT IN THE DISCUSSION.",
        "exampleTranslation": "CÔ ẤY NGƯỜI ĐÃ THAM GIA TÍCH CỰC VÀO CUỘC THẢO LUẬN.",
        "translations": {
            "vi": "NGƯỜI THAM GIA/THAM DỰ"
        }
    },
    {
        "id": "ben-04",
        "topic": "Employee Benefits",
        "word": "attend",
        "phonetic": "",
        "pos": "verb",
        "meaning": "DỰ, CÓ MẶT",
        "example": "OVER TWO HUNDRED PEOPLE ATTENDED THE FUNERAL.",
        "exampleTranslation": "HƠN HAI TRĂM NGƯỜI ĐÃ THAM DỰ LỄ TANG.",
        "translations": {
            "vi": "DỰ, CÓ MẶT"
        }
    },
    {
        "id": "ben-05",
        "topic": "Employee Benefits",
        "word": "schedule",
        "phonetic": "",
        "pos": "verb",
        "meaning": "X ẾP LỊCH, LÊN LỊCH",
        "example": "THE MEE TING HAS BEEN S CHEDULED F OR T OMORRO W AF T ERNOON.",
        "exampleTranslation": "CUỘC HỌP ĐÃ ĐƯỢC LÊN LỊCH V ÀO CHIỀU MAI.",
        "translations": {
            "vi": "X ẾP LỊCH, LÊN LỊCH"
        }
    },
    {
        "id": "ben-06",
        "topic": "Employee Benefits",
        "word": "include",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BAO GỒM",
        "example": "THE BILL INCLUDE S T AX AND S ERVIC E.",
        "exampleTranslation": "HÓA ĐƠN ĐÃ BAO GỒM THUẾ V À DỊCH VỤ.",
        "translations": {
            "vi": "BAO GỒM"
        }
    },
    {
        "id": "ben-07",
        "topic": "Employee Benefits",
        "word": "require",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐÒI HỎI, Y ÊU CẦU",
        "example": "PLEAS E CALL THIS NUMBER IF Y OU R EQUIR E ANY FURTHERINF ORMATION.",
        "exampleTranslation": "V UI LÒNG GỌI S Ố NÀY NẾU BẠN Y ÊU CẦU THÊM BẤT K Ỳ THÔNG TIN NÀO.",
        "translations": {
            "vi": "ĐÒI HỎI, Y ÊU CẦU"
        }
    },
    {
        "id": "ben-08",
        "topic": "Employee Benefits",
        "word": "responsibility",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TR ÁCH NHIỆM",
        "example": "IT' S HER R ESPONSIBILITY T O ENSU RE THE PR OJ ECT ﬁNISH ES ON TIME.",
        "exampleTranslation": "CÔ ẤY CÓ TR ÁCH NHIỆM ĐẢM BẢO DỰ ÁN HOÀN THÀNH ĐÚNG THỜI HẠN.",
        "translations": {
            "vi": "TR ÁCH NHIỆM"
        }
    },
    {
        "id": "ben-09",
        "topic": "Employee Benefits",
        "word": "regard",
        "phonetic": "",
        "pos": "verb",
        "meaning": "COI NHƯ, XEM NHƯ",
        "example": "ENVIR ONMENT ALIS T S R EGAR D GM T ECHNOLOGY WITH SUSPICION.",
        "exampleTranslation": "CÁC NHÀ BẢO V Ệ MÔI TRƯỜNG COI CÔNG NGHỆ BIẾN ĐỔI GEN V ỚI SỰ NGHI NGỜ.",
        "translations": {
            "vi": "COI NHƯ, XEM NHƯ"
        }
    },
    {
        "id": "ben-10",
        "topic": "Employee Benefits",
        "word": "tentative",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CHƯA CHẮC CHẮN, ƯỚM TH Ử",
        "example": "I HAVE T ENT ATIV E PLANS T O TA K E A TRIP T O SEAT TLE IN JULY.",
        "exampleTranslation": "T ÔI CÓ K Ế HOẠCH DỰ KIẾN THỰC HIỆN MỘT CHU YẾ N ĐI ĐẾN SEAT TLE V ÀO THÁNG BẢY.",
        "translations": {
            "vi": "CHƯA CHẮC CHẮN, ƯỚM TH Ử"
        }
    },
    {
        "id": "ben-11",
        "topic": "Employee Benefits",
        "word": "function",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHỨC NĂNG, NHIỆM VỤ",
        "example": "THE FUNCTION O F THE V EINS IS T O CARRY BLOOD T O THE HEART.",
        "exampleTranslation": "CHỨC NĂNG CỦA CÁC TĨNH MẠCH LÀ ĐƯA MÁU ĐẾN TIM.",
        "translations": {
            "vi": "CHỨC NĂNG, NHIỆM VỤ"
        }
    },
    {
        "id": "ben-12",
        "topic": "Employee Benefits",
        "word": "reimbursement",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ HOÀN TIỀN, SỰ TR Ả LẠI",
        "example": "SHE HAS R ECEIV ED R EIMBUR SE MENT F OR S OME O F HER COSTS.",
        "exampleTranslation": "CÔ ẤY ĐÃ NHẬN ĐƯỢC TIỀN HOÀN TR Ả CHO MỘT S Ố CHI PHÍ CỦA MÌNH.",
        "translations": {
            "vi": "SỰ HOÀN TIỀN, SỰ TR Ả LẠI"
        }
    },
    {
        "id": "ben-13",
        "topic": "Employee Benefits",
        "word": "treatment",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐỐI XỬCƯ XỬ",
        "example": "PE T ER GE T S SPECIAL TR EATMENT BECAU SE HE KNOWS THE BO SS.",
        "exampleTranslation": "PE T ER ĐƯỢC SỰ ĐỐI XỬ ĐẶC BIỆ T VÌ ANH T A BIẾ T ÔNG CHỦ.",
        "translations": {
            "vi": "SỰ ĐỐI XỬCƯ XỬ"
        }
    },
    {
        "id": "ben-14",
        "topic": "Employee Benefits",
        "word": "honor",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NIỀM VINH DỰ, DANH DỰ",
        "example": "IT IS AN HONOR T O MEE T Y OU. YO U.",
        "exampleTranslation": "R ẤT HÂN HẠNH ĐƯỢC GẶP BẠN. ENTR Y NGƯỜI DỰ THI, BÀI DỰ THI",
        "translations": {
            "vi": "NIỀM VINH DỰ, DANH DỰ"
        }
    },
    {
        "id": "ben-15",
        "topic": "Employee Benefits",
        "word": "bonus",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TIỀN THƯỞNG, LỢI TỨC THÊM V ÀO",
        "example": "THE COMPANY T O GIV E DIS CRE TIONARY BONUS PAYMEN TS.",
        "exampleTranslation": "CÔNG TY ĐÃ TỪNG ĐƯA R A CÁC KHOẢN THANH T OÁN TIỀN THƯỞNG TÙY Ý.",
        "translations": {
            "vi": "TIỀN THƯỞNG, LỢI TỨC THÊM V ÀO"
        }
    },
    {
        "id": "ben-16",
        "topic": "Employee Benefits",
        "word": "salary",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LƯƠNG",
        "example": "HIS NET MONTHLY SALARY IS €2,5 00.",
        "exampleTranslation": "LƯƠNG THỰC HÀNG THÁNG CỦA ANH ẤY LÀ € 2.500. EARN ĐẠT ĐƯỢC (DANH TIẾNG)",
        "translations": {
            "vi": "LƯƠNG"
        }
    },
    {
        "id": "ben-17",
        "topic": "Employee Benefits",
        "word": "labor",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LAO ĐỘNG, NHÂN CÔN G",
        "example": "THE CAR PART S THEMS ELV E S ARE NOT E XPENSIV E – IT’ S THE LABOR VES ARE NOT E ENSIVE – IT’S THE THAT COS T S S O MUCH. THAT COSTS S",
        "exampleTranslation": "BẢN THÂN CÁC BỘ PHẬN X E HƠI KHÔNG ĐẮT - ĐÓ LÀ NHÂN CÔNG T ỐN R ẤT NHIỀU TIỀN. TỐN RẤT NHIỀU",
        "translations": {
            "vi": "LAO ĐỘNG, NHÂN CÔN G"
        }
    },
    {
        "id": "ben-18",
        "topic": "Employee Benefits",
        "word": "existing",
        "phonetic": "",
        "pos": "adj",
        "meaning": "HIỆN TẠI, HIỆN HÀNH",
        "example": "UNDER THE EXISTING CONDITIONS MANY CHILDREN ARE GOING HUNGRY.",
        "exampleTranslation": "TRONG ĐIỀU KIỆN HIỆN TẠI, NHIỀU TRẺ EM SẼ ĐÓI.",
        "translations": {
            "vi": "HIỆN TẠI, HIỆN HÀNH"
        }
    },
    {
        "id": "ben-19",
        "topic": "Employee Benefits",
        "word": "annual",
        "phonetic": "",
        "pos": "adj",
        "meaning": "HẰNG NĂM, THƯỜNG NIÊ N",
        "example": "COMPANIE S PUBLISH ANNUAL R EPORT S T O INF ORM THE PUBLIC ABOUT THE PR E VIOUS Y EAR 'S ACTIVITIE S.",
        "exampleTranslation": "CÁC CÔNG TY CÔNG BỐ BÁO CÁO HÀNG NĂM ĐỂ THÔNG BÁO CHO CÔNG CHÚNG V Ề CÁC HOẠT ĐỘNG CỦA NĂM TRƯỚC.",
        "translations": {
            "vi": "HẰNG NĂM, THƯỜNG NIÊ N"
        }
    },
    {
        "id": "ben-20",
        "topic": "Employee Benefits",
        "word": "enroll",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GHI DANH, ĐĂNG KÝ",
        "example": "IS IT T OO LAT E T O ENR OLL AT THE COLLEGE fi",
        "exampleTranslation": "CÓ QUÁ MUỘN ĐỂ GHI DANH VÀO TRƯỜNG CAO ĐẲNGfi",
        "translations": {
            "vi": "GHI DANH, ĐĂNG KÝ"
        }
    },
    {
        "id": "ben-21",
        "topic": "Employee Benefits",
        "word": "leave",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ NGHỈ PHÉP",
        "example": "HOW MUCH ANNUAL/PAID LEAVE DO Y OU GE Tfi ETfi",
        "exampleTranslation": "BẠN ĐƯỢC NGHỈ PHÉP HÀNG NĂM / CÓ LƯƠNG BAO NHIÊUfi",
        "translations": {
            "vi": "SỰ NGHỈ PHÉP"
        }
    },
    {
        "id": "ben-22",
        "topic": "Employee Benefits",
        "word": "conference",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CUỘC HỌP, HỘI NGHỊ",
        "example": "THEY FREQUENTLY HOLD CONFERENCES AT THAT HOTEL.",
        "exampleTranslation": "HỌ THƯỜNG XUYÊN TỔ CHỨC HỘI NGHỊ TẠI KHÁCH SẠN ĐÓ.",
        "translations": {
            "vi": "CUỘC HỌP, HỘI NGHỊ"
        }
    },
    {
        "id": "ben-23",
        "topic": "Employee Benefits",
        "word": "grateful",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BIẾT ƠN",
        "example": "IF YOU COULD GE T THAT REPORT ﬁNISHED BY THURSDAY, I' D BE VERY GRATEFUL.",
        "exampleTranslation": "NẾU BẠN CÓ THỂ HOÀN THÀNH BÁO CÁO ĐÓ VÀO THỨ NĂM, TÔI RẤT BIẾT ƠN.",
        "translations": {
            "vi": "BIẾT ƠN"
        }
    },
    {
        "id": "ben-24",
        "topic": "Employee Benefits",
        "word": "overtime",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GIỜ LÀM THÊM",
        "example": "Y OU CAN EARN S OME OVE RTIME BY W ORKING AF TER 6.0 0 P. M.",
        "exampleTranslation": "BẠN CÓ THỂ KIẾM THÊM GIỜ LÀM BẰNG CÁCH LÀM VIỆC S AU 6 GIỜ CHIỀU.",
        "translations": {
            "vi": "GIỜ LÀM THÊM"
        }
    },
    {
        "id": "ben-25",
        "topic": "Employee Benefits",
        "word": "assent",
        "phonetic": "",
        "pos": "verb",
        "meaning": "T ÁN THÀNH, ĐỒNG Ý",
        "example": "HAVE THE Y AS SENT ED T O THE T ERMS O F THE CONTRACTfi",
        "exampleTranslation": "HỌ ĐÃ ĐỒNG Ý V ỚI CÁC ĐIỀU KHOẢN CỦA HỢP ĐỒNG CHƯAfi",
        "translations": {
            "vi": "T ÁN THÀNH, ĐỒNG Ý"
        }
    },
    {
        "id": "ben-26",
        "topic": "Employee Benefits",
        "word": "commence",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BẮT ĐẦU, KHỞI ĐẦU",
        "example": "WE WILL COMMENCE BUILDING W ORK IN AUGUS T O F NE XT Y EAR.",
        "exampleTranslation": "CHÚNG T ÔI S Ẽ BẮT ĐẦU XÂ Y DỰNG VÀ O THÁNG 8 NĂM SAU.",
        "translations": {
            "vi": "BẮT ĐẦU, KHỞI ĐẦU"
        }
    },
    {
        "id": "ben-27",
        "topic": "Employee Benefits",
        "word": "excited",
        "phonetic": "",
        "pos": "adj",
        "meaning": "HÀO HỨNG, PHẤN KHÍCH",
        "example": "SHE WAS E X CITED ABOUT THE TRIP BECAUS E SHE W AS GOING SE SHE W AS G TO LEARN T O SKI. ARN TO S",
        "exampleTranslation": "CÔ ẤY R ẤT HÀO HỨNG V ỚI CHUY ẾN ĐI VÌ CÔ ẤY S Ẽ HỌC TRƯỢT TUY ẾT.",
        "translations": {
            "vi": "HÀO HỨNG, PHẤN KHÍCH"
        }
    },
    {
        "id": "ben-28",
        "topic": "Employee Benefits",
        "word": "emphasize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NHẤN MẠNH",
        "example": "HE EMPHASIZ ED THAT ALL THE PEOPLE T AKING PART IN THE RES EAR CH WER E V OLUNT EER S.",
        "exampleTranslation": "ÔNG NHẤN MẠNH RẰNG T ẤT CẢ NHỮNG NGƯỜI THAM GIA NGHIÊ N NG TẤTCẢ CỨU ĐỀU LÀ TÌNH NGUY ỆN VIÊN.",
        "translations": {
            "vi": "NHẤN MẠNH"
        }
    },
    {
        "id": "ben-29",
        "topic": "Employee Benefits",
        "word": "arise",
        "phonetic": "",
        "pos": "verb",
        "meaning": "XUẤT HIỆN, PHÁT SINH, XẢY R A",
        "example": "SHOULD THE OPPORTUNITY ARIS E, I'D LOVE T O GO T O CHINA.",
        "exampleTranslation": "NẾU CÓ CƠ HỘI XUẤT HIỆN, T ÔI MUỐN ĐẾN T RUNG QUỐC.",
        "translations": {
            "vi": "XUẤT HIỆN, PHÁT SINH, XẢY R A"
        }
    },
    {
        "id": "ben-30",
        "topic": "Employee Benefits",
        "word": "exploit",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KHAI THÁC, LỢI DỤNG, BÓC LỘ T",
        "example": "WE NEED T O MAK E SU RE THAT WE E XPLOIT OUR R ES OURC ES AS FULLY AS PO SSIBLE.",
        "exampleTranslation": "CHÚNG T ÔI CẦN ĐẢM BẢO R ẰNG CHÚNG TÔ I KHAI THÁC CÁC NGUỒN LỰC CỦA MÌNH MỘT CÁCH ĐẦY ĐỦ NHẤT CÓ TH Ể.",
        "translations": {
            "vi": "KHAI THÁC, LỢI DỤNG, BÓC LỘ T"
        }
    },
    {
        "id": "ben-31",
        "topic": "Employee Benefits",
        "word": "appraisal",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐÁNH GIÁ, SỰ THẨM ĐỊN H",
        "example": "THE NEW SPAPER GAV E AN EDIT ORIAL APPR AIS AL O F THE GOVERNMENT' S ACHIE V EMENT S O F THE PAS T Y EAR.",
        "exampleTranslation": "T Ờ BÁO ĐÃ ĐƯA R A SỰ ĐÁNH GIÁ X Ã LUẬN V Ề NHỮNG THÀNH TỰU CỦA CHÍNH PHỦ TRONG NĂM QUA.",
        "translations": {
            "vi": "SỰ ĐÁNH GIÁ, SỰ THẨM ĐỊN H"
        }
    },
    {
        "id": "ben-32",
        "topic": "Employee Benefits",
        "word": "radically",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CĂN BẢN, T ẬN GỐC, TRIỆ T ĐỂ",
        "example": "THE LE SION W AS R ADICALLY R EMOVED.",
        "exampleTranslation": "TỔN THƯƠNG ĐÃ ĐƯỢC LOẠI BỎ TRIỆ T ĐỂ.",
        "translations": {
            "vi": "CĂN BẢN, T ẬN GỐC, TRIỆ T ĐỂ"
        }
    },
    {
        "id": "ben-33",
        "topic": "Employee Benefits",
        "word": "exceptional",
        "phonetic": "",
        "pos": "adj",
        "meaning": "XUẤT CHÚNG, ĐẶC BIỆ T",
        "example": "THE COMPAN Y THE COMPANY HAS SHOWN E XC EPTIONAL GR O WTH OVER THE PAS T TWO Y EAR S.",
        "exampleTranslation": "CÔNG TY ĐÃ CHO THẤY SỰ PHÁT TRIỂN VƯỢT BẬC TRONG HAI NĂM QUA.",
        "translations": {
            "vi": "XUẤT CHÚNG, ĐẶC BIỆ T"
        }
    },
    {
        "id": "ben-34",
        "topic": "Employee Benefits",
        "word": "appreciation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐÁNH GIÁ CAO, SỰ CẢM KÍCH",
        "example": "MAX HAS NO APPR ECIATION O F THE ﬁNER THINGS IN LIF E.",
        "exampleTranslation": "MAX KHÔNG ĐÁNH GIÁ CAO NHỮNG ĐIỀU T ỐT ĐẸP HƠN TRONG CUỘC S ỐNG.",
        "translations": {
            "vi": "SỰ ĐÁNH GIÁ CAO, SỰ CẢM KÍCH"
        }
    },
    {
        "id": "ben-35",
        "topic": "Employee Benefits",
        "word": "evaluate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐÁNH GIÁ",
        "example": "WE SHALL NEED T O EVALUAT E HO W THE NEW MATE RIAL ST ANDS UP T O W EAR AND T EAR.",
        "exampleTranslation": "CHÚNG T A S Ẽ CẦN ĐÁNH GIÁ XEM V ẬT LIỆU MỚI CHỐNG LẠI S Ự HAO MÒN NHƯ THẾ NÀO.",
        "translations": {
            "vi": "ĐÁNH GIÁ"
        }
    },
    {
        "id": "ben-36",
        "topic": "Employee Benefits",
        "word": "preference",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THÍCH HƠN, SỞ THÍCH",
        "example": "HER PREFERENCE IS FOR COMFORTABLE RATHER THAN STYLISH CLOTHES.",
        "exampleTranslation": "SỞ THÍCH CỦA CÔ ẤY LÀ NHỮNG BỘ QUẦN ÁO THOẢI MÁI HƠN LÀ KIỂU CÁCH.",
        "translations": {
            "vi": "SỰ THÍCH HƠN, SỞ THÍCH"
        }
    },
    {
        "id": "ben-37",
        "topic": "Employee Benefits",
        "word": "predict",
        "phonetic": "",
        "pos": "verb",
        "meaning": "DỰ ĐOÁN",
        "example": "IT'S STILL NOT POSSIBLE TO ACCURATELY PREDICT THE OCCURRENCE OF EARTHQUAKES.",
        "exampleTranslation": "VẪN CHƯA THỂ DỰ ĐOÁN CHÍNH XÁC SỰ XUẤT HIỆN CỦA CÁC TRẬN ĐỘNG ĐẤT.",
        "translations": {
            "vi": "DỰ ĐOÁN"
        }
    },
    {
        "id": "ben-38",
        "topic": "Employee Benefits",
        "word": "award",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GIẢI THƯỞNG, PHẦN THƯỞNG",
        "example": "THEY HAVE AUTHORIZED AWARDS OF £900 TO EACH OF THE VICTIMS.",
        "exampleTranslation": "HỌ ĐÃ ỦY QUYỀN GIẢI THƯỞNG 900 BẢNG ANH CHO MỖI ANHCHOM NẠN NHÂN.",
        "translations": {
            "vi": "GIẢI THƯỞNG, PHẦN THƯỞNG"
        }
    },
    {
        "id": "ben-39",
        "topic": "Employee Benefits",
        "word": "performance",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ BIỂU DIỄN, TRÌNH DIỄN",
        "example": "HE W AS AN EXPERIENCED PLAYER WHO WAS ALWAYS SEEKING TO IMPROVE HIS PERFORMANCE.",
        "exampleTranslation": "ANH ẤY LÀ MỘT CẦU THỦ GIÀU KINH NGHIỆM VÀ LUÔN TÌM CÁCH CẢI THIỆN MÀN TRÌNH DIỄN CỦA MÌNH.",
        "translations": {
            "vi": "SỰ BIỂU DIỄN, TRÌNH DIỄN"
        }
    },
    {
        "id": "ben-40",
        "topic": "Employee Benefits",
        "word": "reward",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THƯỞNG",
        "example": "ALL HIS HAR D W ORK W AS R EWA R DED WHEN HE S AW HIS BOOK IN PRINT.",
        "exampleTranslation": "T ẤT CẢ CÔNG VIỆC KHÓ KHĂN CỦA ANH ẤY ĐÃ ĐƯỢC ĐỀN ĐÁP KHI ANH ẤY NHÌN THẤY CUỐN S ÁCH CỦA MÌNH ĐƯỢC IN.",
        "translations": {
            "vi": "THƯỞNG"
        }
    },
    {
        "id": "ben-41",
        "topic": "Employee Benefits",
        "word": "search",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TÌM KIẾM, SỰ ĐIỀU TR A",
        "example": "AF TER A LONG S EAR CH, THE Y EVENTUALLY F OUND THE MIS SINGPAPER S.",
        "exampleTranslation": "SAU MỘT THỜI GIAN DÀI TÌM KIẾM, CUỐI CÙNG HỌ ĐÃ TÌM THẤY NHỮNG GIẤY T Ờ CÒN THIẾU.",
        "translations": {
            "vi": "SỰ TÌM KIẾM, SỰ ĐIỀU TR A"
        }
    },
    {
        "id": "ben-42",
        "topic": "Employee Benefits",
        "word": "early",
        "phonetic": "",
        "pos": "adj",
        "meaning": "S ỚM, GẦN ĐÂY",
        "example": "IF Y OU ﬁNISH EARLY Y OU CAN GO HOME.",
        "exampleTranslation": "NẾU BẠN HOÀN THÀNH S ỚM BẠN CÓ THỂ V Ề NHÀ.",
        "translations": {
            "vi": "S ỚM, GẦN ĐÂY"
        }
    },
    {
        "id": "ben-43",
        "topic": "Employee Benefits",
        "word": "dedication",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHỈ ĐỊNH, BỔ NHIỆM",
        "example": "HE HAS ALWAYS SHOWN GR EAT DEDICATION T O THE CAU SE. WN GR EAT DEDIC A N TO THE CAU SE.",
        "exampleTranslation": "ANH ẤY ĐÃ LUÔN THỂ HIỆN SỰ CỐNG HIẾN T O LỚN CHO SỰ NGHIỆP. PR OGR ES S SỰ TIẾN BỘ",
        "translations": {
            "vi": "CHỈ ĐỊNH, BỔ NHIỆM"
        }
    },
    {
        "id": "ben-44",
        "topic": "Employee Benefits",
        "word": "congratulate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHÚC MỪNG",
        "example": "I W AS JUS T CONGR ATULATING CERI ON WINNING W ON HER R AC E.",
        "exampleTranslation": "TÔI CHỈ CHÚC MỪNG CERI ĐÃ CHIẾN THẮNG TRONG CUỘC ĐUA CỦA CÔ ẤY.",
        "translations": {
            "vi": "CHÚC MỪNG"
        }
    },
    {
        "id": "ben-45",
        "topic": "Employee Benefits",
        "word": "dismiss",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHO NGHỈ, S A THẢI",
        "example": "HE HAS BEEN DISMIS SE D FR OM HIS JOB F OR INCOMPE T ENCE.",
        "exampleTranslation": "ANH T A ĐÃ BỊ S A THẢI KHỎI CÔNG VIỆC CỦA MÌNH VÌ KÉ M NĂNG LỰC.",
        "translations": {
            "vi": "CHO NGHỈ, S A THẢI"
        }
    },
    {
        "id": "ben-46",
        "topic": "Employee Benefits",
        "word": "participation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ THAM GIA, SỰ THAM DỰ",
        "example": "PARTICIPATION IN THE PROGRAM WAS VOLUNTARY.",
        "exampleTranslation": "VIỆC THAM GIA CHƯƠNG TRÌNH LÀ TỰ NGUYỆN. ACCOMPLISHMENT SỰ HOÀN THÀNH",
        "translations": {
            "vi": "SỰ THAM GIA, SỰ THAM DỰ"
        }
    },
    {
        "id": "ben-47",
        "topic": "Employee Benefits",
        "word": "retire",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THÔI VIỆC, VỀ HƯU",
        "example": "HE IS DUE TO RETIRE AS CHIEF EXECUTIVE NEXT YEAR. XTYEAR",
        "exampleTranslation": "ÔNG SẼ VỀ HƯU VỚI TƯ CÁCH LÀ GIÁM ĐỐC ĐIỀU HÀNH VÀO NĂM TỚI.",
        "translations": {
            "vi": "THÔI VIỆC, VỀ HƯU"
        }
    },
    // ==========================================
    // TOPIC 21: JOB ROTATION (rot-01 → rot-12)
    // ==========================================
    {
        "id": "rot-01",
        "topic": "Job Rotation",
        "word": "resignation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TỪ CHỨC",
        "example": "THER E HAVE BEEN CALLS F OR HIS R ES IGNATION.",
        "exampleTranslation": "ĐÃ CÓ NHIỀU LỜI K ÊU GỌI SỰ TỪ CHỨC CỦA ÔNG ẤY.",
        "translations": {
            "vi": "SỰ TỪ CHỨC"
        }
    },
    {
        "id": "rot-02",
        "topic": "Job Rotation",
        "word": "strictly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "NGHIÊM KHẮC, HOÀN T OÀN",
        "example": "THE SPEED LIMIT IS STRICTLY ENF OR CED ON URBAN R OADS.",
        "exampleTranslation": "V IỆC GIỚI HẠN T ỐC ĐỘ ĐƯỢC THỰC HIỆN NGHIÊM KHẮC TR ÊN CÁC TUY ẾN ĐƯỜNG ĐÔ THỊ.",
        "translations": {
            "vi": "NGHIÊM KHẮC, HOÀN T OÀN"
        }
    },
    {
        "id": "rot-03",
        "topic": "Job Rotation",
        "word": "appoint",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHỈ ĐỊNH, BỔ NHIỆM",
        "example": "WE 'V E APPOINT ED THR EE NEW T EACHER S THIS Y EAR.",
        "exampleTranslation": "CHÚNG T ÔI ĐÃ BỔ NHIỆM BA GIÁO VIÊN MỚI TRONG NĂM NAY. PROMOTE KHUY ẾN KHÍCH, THÚC ĐẨY",
        "translations": {
            "vi": "CHỈ ĐỊNH, BỔ NHIỆM"
        }
    },
    {
        "id": "rot-04",
        "topic": "Job Rotation",
        "word": "management",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ QUẢN LÝ, BAN QUẢN LÝ",
        "example": "THE COMPANY HAS SUﬀ ER ED FR OM S EVER AL Y EAR S O F BAD MANAGEMENT.",
        "exampleTranslation": "CÔNG TY ĐÃ PHẢI CHỊU ĐỰNG NHIỀU NĂM DƯỚI SỰ QUẢN LÝ T ỒI T Ệ.",
        "translations": {
            "vi": "SỰ QUẢN LÝ, BAN QUẢN LÝ"
        }
    },
    {
        "id": "rot-05",
        "topic": "Job Rotation",
        "word": "transfer",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHUY ỂN, DỜI; THUY ÊN CHUYỂ N",
        "example": "HE HAS BEEN TR ANSF ERR ED T O A P SY CHIATRIC HOSPIT AL.",
        "exampleTranslation": "ANH T A ĐÃ ĐƯỢC CHUY ỂN ĐẾN MỘT BỆNH VIỆN T ÂM THẦN.",
        "translations": {
            "vi": "CHUY ỂN, DỜI; THUY ÊN CHUYỂ N"
        }
    },
    {
        "id": "rot-06",
        "topic": "Job Rotation",
        "word": "mandatory",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BẮT BUỘC",
        "example": "ATHLE TE S MUS T UNDER GO A MANDAT ORY DRUGS T EST BEF OR E COMPE TING IN THE CHAMPIONSHIP.",
        "exampleTranslation": "CÁC V ẬN ĐỘNG VIÊN PHẢI TR ẢI QUA MỘT CUỘC KIỂM TR A BẮT BUỘC V Ề MA TÚY TRƯỚC KHI TR ANH CHỨC V Ô ĐỊCH.",
        "translations": {
            "vi": "BẮT BUỘC"
        }
    },
    {
        "id": "rot-07",
        "topic": "Job Rotation",
        "word": "designate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHỈ ĐỊNH, BỔ NHIỆM",
        "example": "TRADITIONALLY, THE PRESIDENT DESIGNATES HIS OR HER SUCCESSOR.",
        "exampleTranslation": "THEO TRUYỀN THỐNG, TỔNG THỐNG CHỈ ĐỊNH NGƯỜI KẾ NHIỆM CỦA MÌNH.",
        "translations": {
            "vi": "CHỈ ĐỊNH, BỔ NHIỆM"
        }
    },
    {
        "id": "rot-08",
        "topic": "Job Rotation",
        "word": "unanimously",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐỒNG THUẬN, NHẤT TRÍ",
        "example": "ALL FOUR PROPOSALS TO THE COMMITTEE WERE UNANIMOUSLY APPROVED.",
        "exampleTranslation": "T ẤT CẢ BỐN ĐỀ XUẤT CHO ỦY BAN ĐÃ ĐƯỢC NHẤT TRÍ THÔNG QUA.",
        "translations": {
            "vi": "ĐỒNG THUẬN, NHẤT TRÍ"
        }
    },
    {
        "id": "rot-09",
        "topic": "Job Rotation",
        "word": "independence",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐỘC LẬP, NỀN ĐỘC LẬP",
        "example": "MEXICO GAINED ITS INDEPENDENCE FROM SPAIN IN 1821.",
        "exampleTranslation": "MEXICO GIÀNH ĐƯỢC ĐỘC LẬP TỪ TÂY BAN NHA VÀO NĂM 1821.",
        "translations": {
            "vi": "SỰ ĐỘC LẬP, NỀN ĐỘC LẬP"
        }
    },
    {
        "id": "rot-10",
        "topic": "Job Rotation",
        "word": "praise",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ KHEN NGỢI, LỜI TÁN DƯƠNG",
        "example": "HIS ECONOMIC POLICIES HAVE WON PRAISE FROM FELLOW REPUBLICANS.",
        "exampleTranslation": "CÁC CHÍNH SÁCH KINH TẾ CỦA ÔNG ĐÃ GIÀNH ĐƯỢC NHIỀU SỰ KHEN NGỢI TỪ CÁC THÀNH VIÊN ĐẢNG CỘNG HÒA.",
        "translations": {
            "vi": "SỰ KHEN NGỢI, LỜI TÁN DƯƠNG"
        }
    },
    {
        "id": "rot-11",
        "topic": "Job Rotation",
        "word": "nomination",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ BỔ NHIỆM, SỰ ĐỀ CỬ",
        "example": "THER E HAVE BEEN TW O NOMINATIONS F OR THE NEW JOB.",
        "exampleTranslation": "ĐÃ CÓ HAI SỰ ĐỀ CỬ CHO CÔNG VIỆC MỚI.",
        "translations": {
            "vi": "SỰ BỔ NHIỆM, SỰ ĐỀ CỬ"
        }
    },
    {
        "id": "rot-12",
        "topic": "Job Rotation",
        "word": "reorganize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "T Ổ CHỨC LẠI, CẢI T Ổ LẠI",
        "example": "I'V E R EOR GANIZ ED MY ﬁLE S S O THAT I CAN EASILY ﬁND WHAT I'M LOOKING F OR.",
        "exampleTranslation": "T ÔI ĐÃ S ẮP X ẾP LẠI CÁC T ỆP CỦA MÌNH ĐỂ CÓ THỂ DỄ DÀNG TÌM THẤY NHỮNG GÌ T ÔI ĐANG TÌM KIẾM.",
        "translations": {
            "vi": "T Ổ CHỨC LẠI, CẢI T Ổ LẠI"
        }
    },
    // ==========================================
    // TOPIC 22: TRAFFIC (tff-01 → tff-26)
    // ==========================================
    {
        "id": "tff-01",
        "topic": "Traffic",
        "word": "alleviate",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM DỊU, LÀM GIẢM BỚ T",
        "example": "THE DRUGS DID NOTHING TO ALLEVIATE HER PAIN.",
        "exampleTranslation": "THUỐC KHÔNG LÀM GIẢM BỚT CƠN ĐAU CỦA CÔ ẤY.",
        "translations": {
            "vi": "LÀM DỊU, LÀM GIẢM BỚ T"
        }
    },
    {
        "id": "tff-02",
        "topic": "Traffic",
        "word": "opportunity",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CƠ HỘI, THỜI C Ơ",
        "example": "EVERY ONEWILL HAVE AN OPPORTUNITY T O COMMENT.",
        "exampleTranslation": "MỌI NGƯỜI S Ẽ CÓ CƠ HỘI ĐỂ BÌNH LUẬN.",
        "translations": {
            "vi": "CƠ HỘI, THỜI C Ơ"
        }
    },
    {
        "id": "tff-03",
        "topic": "Traffic",
        "word": "detailed",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CHI TIẾT, CẶN KẼ, TỈ MỈ",
        "example": "MORE DETAILED INFORMATION IS AVAILABLE ON REQUEST.",
        "exampleTranslation": "THÔNG TIN CHI TIẾT HƠN CÓ S ẴN THEO Y ÊU CẦU.",
        "translations": {
            "vi": "CHI TIẾT, CẶN KẼ, TỈ MỈ"
        }
    },
    {
        "id": "tff-04",
        "topic": "Traffic",
        "word": "alternative",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ LỰA CHỌN, PHƯƠNG ÁN KHÁC",
        "example": "I'M AFR AID I HAVE NO ALT ERNATIV E BUT T O ASK Y OU T O LEAV E.",
        "exampleTranslation": "TÔI E R ẰNG T ÔI KHÔNG CÒN SỰ LỰA CHỌN NÀO KHÁC NGOÀI YÊ U CẦU BẠN R ỜI ĐI..",
        "translations": {
            "vi": "SỰ LỰA CHỌN, PHƯƠNG ÁN KHÁC"
        }
    },
    {
        "id": "tff-05",
        "topic": "Traffic",
        "word": "obtain",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẠT ĐƯỢC, GIÀNH ĐƯỢC",
        "example": "SUGAR IS OB T SUGAR IS OBT AINED BY CRUSHING AND PR OC ES SING SUGAR CANE.",
        "exampleTranslation": "ĐƯỜNG THU ĐƯỢC BẰNG CÁCH NGHIỀN V À CHẾ BIẾN ĐƯỜNG MÍA. DESIGNATED /ˈdez.ɪɡ.neɪ/ ĐƯỢC CHỌN LỰA",
        "translations": {
            "vi": "ĐẠT ĐƯỢC, GIÀNH ĐƯỢC"
        }
    },
    {
        "id": "tff-06",
        "topic": "Traffic",
        "word": "fare",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TIỀN X E, TIỀN V É",
        "example": "TR AIN F ARE INCR EAS ES O F ﬁV E PER CENT ARE ENVIS AGED F OR THE NE XT Y EAR.",
        "exampleTranslation": "DỰ KIẾN TIỀN V É T ÀU S Ẽ T ĂNG NĂM PHẦN TR ĂM TRONG NĂM T ỚI.",
        "translations": {
            "vi": "TIỀN X E, TIỀN V É"
        }
    },
    {
        "id": "tff-07",
        "topic": "Traffic",
        "word": "expense",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHI PHÍ, PHÍ T ỔN",
        "example": "WE 'V E JUS T HAD A NEW GARA GE BUILT AT GR EAT E XPENS E.",
        "exampleTranslation": "CHÚNG T ÔI VỪA CÓ MỘT GA R A MỚI ĐƯỢC X ÂY DỰNG V ỚI CHI PHÍ LỚN.",
        "translations": {
            "vi": "CHI PHÍ, PHÍ T ỔN"
        }
    },
    {
        "id": "tff-08",
        "topic": "Traffic",
        "word": "trust",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LÒNG TIN, SỰ TIN CẬY",
        "example": "WE WERE OB VIOUSLY WR ONG T O PUT OUR TRUS T IN HER.",
        "exampleTranslation": "RÕ R ÀNG CHÚNG T ÔI ĐÃ S AI KHI ĐẶT LÒNG TIN V ÀO CÔ Ấ Y.",
        "translations": {
            "vi": "LÒNG TIN, SỰ TIN CẬY"
        }
    },
    {
        "id": "tff-09",
        "topic": "Traffic",
        "word": "securely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "CHẮC CHẮN, AN TOÀN",
        "example": "THE O ﬃCES W ERE SECURELY GUARDED.",
        "exampleTranslation": "CÁC VĂN PHÒNG ĐƯỢC BẢO VỆ AN TOÀN.",
        "translations": {
            "vi": "CHẮC CHẮN, AN TOÀN"
        }
    },
    {
        "id": "tff-10",
        "topic": "Traffic",
        "word": "prominently",
        "phonetic": "",
        "pos": "adv",
        "meaning": "DỄ THẤY, NỔI BẬT",
        "example": "A PHOTOGRAPH OF HER DAUGHTER W AS PROMINENTLY DISPLAYED ON HER DE SK.",
        "exampleTranslation": "MỘT BỨC ẢNH CỦA CON GÁI CÔ ĐƯỢC TRƯNG BÀY NỔI BẬT TRÊN BÀN CỦA CÔ.",
        "translations": {
            "vi": "DỄ THẤY, NỔI BẬT"
        }
    },
    {
        "id": "tff-11",
        "topic": "Traffic",
        "word": "reserved",
        "phonetic": "",
        "pos": "adj",
        "meaning": "DÀNH RIÊNG, ĐƯỢC ĐẶT TRƯỚC",
        "example": "MAY I SIT HER E, OR IS THIS T ABLE R ES ERV EDfi",
        "exampleTranslation": "T ÔI CÓ THỂ NGỒI ĐÂY KHÔNG, HAY BÀN NÀY ĐƯỢC ĐẶT TRƯỚC fi OBSTRUCT CHẶN, LÀM T ẮC (ĐƯỜNG)",
        "translations": {
            "vi": "DÀNH RIÊNG, ĐƯỢC ĐẶT TRƯỚC"
        }
    },
    {
        "id": "tff-12",
        "topic": "Traffic",
        "word": "congestion",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGÃ TƯ, CHỖ GIAO NHAU",
        "example": "THE R EST AUR ANT W OULD INCR EAS E TR AﬃC CONG ESTION AND NOIS E.",
        "exampleTranslation": "NHÀ HÀNG S Ẽ LÀM T ĂNG SỰ T ẮC NGHẼN GIAO THÔNG VÀ TIẾNG ỒN. TĂ NG SỰ T ẮC NGHẼN DIVERT HƯỚNG S ANG PHÍA KHÁC",
        "translations": {
            "vi": "NGÃ TƯ, CHỖ GIAO NHAU"
        }
    },
    {
        "id": "tff-13",
        "topic": "Traffic",
        "word": "inward",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ở/về phía trung tâm, vào phía trong",
        "example": "The door opens inward.",
        "exampleTranslation": "Cánh cửa mở vào phía trong.",
        "translations": {
            "vi": "ở/về phía trung tâm, vào phía trong"
        }
    },
    {
        "id": "tff-14",
        "topic": "Traffic",
        "word": "detour",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHÚC NGOẶT, ĐƯỜNG V ÒNG",
        "example": "YOU' D BE WIS E T O MAK E A DE TO UR T O AV OID THE R OADW ORK S.",
        "exampleTranslation": "BẠN NÊN ĐI ĐƯỜNG V ÒNG ĐỂ TR ÁNH CÁC CÔNG TRÌNH LÀM ĐƯỜNG.",
        "translations": {
            "vi": "KHÚC NGOẶT, ĐƯỜNG V ÒNG"
        }
    },
    {
        "id": "tff-15",
        "topic": "Traffic",
        "word": "malfunction",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ TRỤC TR ẶC, SỰ C Ố",
        "example": "SHORTLY BE FO R E THE CR ASH THE PILOT HAD R EPOR TE D A MALFUNCTION O F THE AIR CR AF T' S NAVIGATION S YST EM.",
        "exampleTranslation": "KHÔNG LÂU TRƯỚC KHI VỤ T AI NẠN X ẢY R A, PHI CÔNG ĐÃ BÁO CÁO HỆ THỐNG ĐỊNH VỊ CỦA MÁY BAY BỊ TRỤC TR ẶC.",
        "translations": {
            "vi": "SỰ TRỤC TR ẶC, SỰ C Ố"
        }
    },
    {
        "id": "tff-16",
        "topic": "Traffic",
        "word": "ongoing",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LIÊN TỤC, ĐANG TIẾP DIỄN",
        "example": "NO AGREEMENT HAS YET BEEN REACHED AND THE NEGOTIATIONS ARE STILL ONGOING.",
        "exampleTranslation": "VẪN CHƯA ĐẠT ĐƯỢC THỎA THUẬN NÀO VÀ CÁC CUỘC ĐÀM PHÁN V ẪN ĐANG TIẾP TỤC.",
        "translations": {
            "vi": "LIÊN TỤC, ĐANG TIẾP DIỄN"
        }
    },
    {
        "id": "tff-17",
        "topic": "Traffic",
        "word": "intersection",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGÃ TƯ, CHỖ GIAO NHAU",
        "example": "THE INTERSECTION OF THE LINES ON THE GRAPH MARK S THE POINT WHERE W E START TO MAK E A PR OﬁT.",
        "exampleTranslation": "GIAO ĐIỂM CỦA CÁC ĐƯỜNG TRÊN BIỂU ĐỒ ĐÁNH DẤU ĐIỂM MÀ CHÚNG TA BẮT ĐẦU TẠO RA LỢI NHUẬN.",
        "translations": {
            "vi": "NGÃ TƯ, CHỖ GIAO NHAU"
        }
    },
    {
        "id": "tff-18",
        "topic": "Traffic",
        "word": "commute",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐI LẠI ĐỀU ĐẶN (ĐI LÀM)",
        "example": "IT'S EXHAUSTING COMMUTING FROM BRIGHTON TO L ONDON EVERY DAY.",
        "exampleTranslation": "ĐI LẠI TỪ BRIGHTON ĐẾN LONDON MỖI NGÀY THẬT MỆT MỎI. /N014LONDO DO WNT OW N THÀNH PHỐ",
        "translations": {
            "vi": "ĐI LẠI ĐỀU ĐẶN (ĐI LÀM)"
        }
    },
    {
        "id": "tff-19",
        "topic": "Traffic",
        "word": "automovie",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TỰ ĐỘNG, (THUỘC) Ô TÔ",
        "example": "IF A ﬂOTATION IS SUCCESSFUL, THE GROUP WILL BE LEFT WITH AUTOMOTIVE AND AEROSPACE INTERESTS.",
        "exampleTranslation": "NẾU MỘT CUỘC TUYỂN NỔI THÀNH CÔNG, NHÓM SẼ CÒN LẠI VỚI CÁC SỞ THÍCH VỀ Ô TÔ VÀ HÀNG KHÔNG VŨ TRỤ.",
        "translations": {
            "vi": "TỰ ĐỘNG, (THUỘC) Ô TÔ"
        }
    },
    {
        "id": "tff-20",
        "topic": "Traffic",
        "word": "closure",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐÓNG CỬA",
        "example": "MANY ELDERLY PEOPLE WILL BE AﬀECTED BY THE LIBRARY CLOSURES.",
        "exampleTranslation": "NHIỀU NGƯỜI CAO TUỔI SẼ BỊ ẢNH HƯỞNG BỞI VIỆC ĐÓNG CỬA THƯ VIỆN.",
        "translations": {
            "vi": "SỰ ĐÓNG CỬA"
        }
    },
    {
        "id": "tff-21",
        "topic": "Traffic",
        "word": "platform",
        "phonetic": "",
        "pos": "noun",
        "meaning": "S ÂN GA",
        "example": "THE NE XT TR AIN F OR ABER DEEN WILL DEPART FR OM PLATF ORM 9.",
        "exampleTranslation": "CHUY ẾN T ÀU TIẾP THEO CHO ABER DEEN S Ẽ KHỞI HÀNH TỪ S ÂN GA S Ố 9.",
        "translations": {
            "vi": "S ÂN GA"
        }
    },
    {
        "id": "tff-22",
        "topic": "Traffic",
        "word": "head",
        "phonetic": "",
        "pos": "verb",
        "meaning": "DẪN ĐẦU, HƯỚNG V Ề, ĐI V Ề PHÍA",
        "example": "I W AS HEADING OUT O F THE R OOM WHEN SHE CALLED ME BACK.",
        "exampleTranslation": "T ÔI ĐANG ĐI R A KHỎI PHÒNG THÌ CÔ ẤY GỌI T ÔI LẠI.",
        "translations": {
            "vi": "DẪN ĐẦU, HƯỚNG V Ề, ĐI V Ề PHÍA"
        }
    },
    {
        "id": "tff-23",
        "topic": "Traffic",
        "word": "pass",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐI QUA, VƯỢT QU A",
        "example": "I PAS S ED HIM ON THE S TA IR S THIS MORNING.",
        "exampleTranslation": "T ÔI ĐÃ ĐI QUA ANH T A TR ÊN CẦU THANG S ÁNG NAY.",
        "translations": {
            "vi": "ĐI QUA, VƯỢT QU A"
        }
    },
    {
        "id": "tff-24",
        "topic": "Traffic",
        "word": "average",
        "phonetic": "",
        "pos": "noun",
        "meaning": "S Ố TRUNG BÌNH, MỨC BÌNH QUÂN",
        "example": "PRICE S HAVE RIS EN BY AN AV ER AGE O F F OUR PER CENT OVE R THE PAS T Y EAR.",
        "exampleTranslation": "GIÁ ĐÃ T ĂNG TRUNG BÌNH 4 % TRONG NĂM QUA.",
        "translations": {
            "vi": "S Ố TRUNG BÌNH, MỨC BÌNH QUÂN"
        }
    },
    {
        "id": "tff-25",
        "topic": "Traffic",
        "word": "tow",
        "phonetic": "",
        "pos": "verb",
        "meaning": "K ÉO, LAI DẮT (T ÀU, THUY ỀN)",
        "example": "YOU SHOULDN 'T DRIV E FA S T WHEN Y OUR CAR IS T O WING A CAR AV AN.",
        "exampleTranslation": "BẠN KHÔNG NÊN LÁI X E NHANH KHI X E CỦA BẠN ĐANG K ÉO MỘT ĐOÀN LỮ HÀNH.",
        "translations": {
            "vi": "K ÉO, LAI DẮT (T ÀU, THUY ỀN)"
        }
    },
    {
        "id": "tff-26",
        "topic": "Traffic",
        "word": "reverse",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐẢO, NGƯỢC, TRÁI LẠI",
        "example": "REPEAT THE S TE PS IN R EVER S E OR DER T O SHUT THE S YST EM O ﬀ.",
        "exampleTranslation": "LẶP LẠI CÁC BƯỚC THEO THỨ TỰ NGƯỢC LẠI ĐỂ T ẮT HỆ THỐNG.",
        "translations": {
            "vi": "ĐẢO, NGƯỢC, TRÁI LẠI"
        }
    },
    // ==========================================
    // TOPIC 23: BANK (ban-01 → ban-90)
    // ==========================================
    {
        "id": "ban-01",
        "topic": "Bank",
        "word": "overdue",
        "phonetic": "",
        "pos": "adj",
        "meaning": "QUÁ HẠN",
        "example": "MY LIBRA RY BOOK S ARE A W EEK OVE R DUE.",
        "exampleTranslation": "SÁCH THƯ VIỆN CỦA T ÔI ĐÃ QUÁ HẠN MỘT TUẦN.",
        "translations": {
            "vi": "QUÁ HẠN"
        }
    },
    {
        "id": "ban-02",
        "topic": "Bank",
        "word": "regettably",
        "phonetic": "",
        "pos": "adv",
        "meaning": "THẬT ĐÁNG TIẾC",
        "example": "I REGRETTABLY GOT INVOLVED WITH SOME SITUATIONS I SHOULDN'T HAVE.",
        "exampleTranslation": "THẬT ĐÁNG TIẾC, TÔI ĐÃ VƯỚNG VÀO MỘT SỐ TÌNH HUỐNG MÀ TÔI KHÔNG NÊN CÓ.",
        "translations": {
            "vi": "THẬT ĐÁNG TIẾC"
        }
    },
    {
        "id": "ban-03",
        "topic": "Bank",
        "word": "deposit",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GỞI, NỘP (TIỀN Ở NGÂN HÀNG)",
        "example": "I DEPOSITED £500 IN MY ACCOUNT THIS MORNING.",
        "exampleTranslation": "T ÔI ĐÃ GỬI £ 500 VÀO TÀI KHOẢN CỦA MÌNH SÁNG NAY. ACCOUNT MIÊU TẢ, SỰ LƯU TÂM ẢS ỰLƯU TÂ",
        "translations": {
            "vi": "GỞI, NỘP (TIỀN Ở NGÂN HÀNG)"
        }
    },
    {
        "id": "ban-04",
        "topic": "Bank",
        "word": "previously",
        "phonetic": "",
        "pos": "adv",
        "meaning": "TRƯỚC, TRƯỚC ĐÂY",
        "example": "SHE W AS PR E VIOUSLY EMPL OYED AS A T OUR GUIDE.",
        "exampleTranslation": "T RƯỚC ĐÂY CÔ ĐÃ TỪNG LÀM HƯỚNG DẪN VIÊN DU LỊCH. DUE NHỜ CÓ, TUỲ THUỘC V ÀO",
        "translations": {
            "vi": "TRƯỚC, TRƯỚC ĐÂY"
        }
    },
    {
        "id": "ban-05",
        "topic": "Bank",
        "word": "receive",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NHẬN, LĨNH, THU",
        "example": "I R ECEIV ED A PHONE CALL FR OM Y OUR MOTHER.",
        "exampleTranslation": "TÔI NHẬN ĐƯỢC MỘT CUỘC ĐIỆN THOẠI TỪ MẸ CỦA BẠN.",
        "translations": {
            "vi": "NHẬN, LĨNH, THU"
        }
    },
    {
        "id": "ban-06",
        "topic": "Bank",
        "word": "expect",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TR ÔNG ĐỢI, DỰ ĐOÁN",
        "example": "W E ARE E XPECTING A LOT O F APPLICANT S F OR THE JOB. A LOT O F APPLICA N",
        "exampleTranslation": "CHÚNG T ÔI ĐANG TR ÔNG ĐỢI R ẤT NHIỀU NGƯỜI NỘP ĐƠN CHO CÔNG VIỆC.",
        "translations": {
            "vi": "TR ÔNG ĐỢI, DỰ ĐOÁN"
        }
    },
    {
        "id": "ban-07",
        "topic": "Bank",
        "word": "study",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ NGHIÊN CỨU, SỰ TÌM TÒ I",
        "example": "SOME S TUDIE S HAVE SUGG EST ED A LINK BE TW EEN CER TA IN",
        "exampleTranslation": "MỘT S Ố NGHIÊN CỨU ĐÃ GỢI Ý MỐI LIÊN HỆ GIỮA MỘT S Ố LOẠI CHẤT LÀM NGỌT NHÂN T ẠO V À UNG THƯ.",
        "translations": {
            "vi": "SỰ NGHIÊN CỨU, SỰ TÌM TÒ I"
        }
    },
    {
        "id": "ban-08",
        "topic": "Bank",
        "word": "lower",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HẠ THẤP, GIẢM",
        "example": "THE Y LOWE R ED THE C Oﬃ N INT O THE GRA VE.",
        "exampleTranslation": "HỌ HẠ QUAN T ÀI XUỐNG MỒ.",
        "translations": {
            "vi": "HẠ THẤP, GIẢM"
        }
    },
    {
        "id": "ban-09",
        "topic": "Bank",
        "word": "double",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NHÂN ĐÔI, T ĂNG GẤP ĐÔI",
        "example": "COMPANY PR Oﬁ T S HAVE DOUBLED SINCE THE INTR ODUCTION O F OF NEW T ECHNOLOGY.",
        "exampleTranslation": "LỢI NHUẬN CỦA CÔNG TY ĐÃ T ĂNG GẤP ĐÔI K Ể TỪ KHI GIỚI THIỆU CÔNG NGHỆ MỚI.",
        "translations": {
            "vi": "NHÂN ĐÔI, T ĂNG GẤP ĐÔI"
        }
    },
    {
        "id": "ban-10",
        "topic": "Bank",
        "word": "interest",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ QUAN T ÂM; LỢI ÍCH; TIỀN LÃI",
        "example": "I'V E ALWAYS HAD AN INT ER EST IN AS TR ONOM Y.",
        "exampleTranslation": "T ÔI LUÔNCÓ SỰ QUAN T ÂM ĐẾN THIÊN V ĂN HỌC.",
        "translations": {
            "vi": "SỰ QUAN T ÂM; LỢI ÍCH; TIỀN LÃI"
        }
    },
    {
        "id": "ban-11",
        "topic": "Bank",
        "word": "alternatively",
        "phonetic": "",
        "pos": "adv",
        "meaning": "HOẶC, NHƯ MỘT SỰ LỰA CHỌN",
        "example": "W E COULD GO TO THE INDIAN RESTAURANT, OR ALTERNATIVELY, W E COULD TRY THAT NEW ITALIAN PLACE.",
        "exampleTranslation": "CHÚNG TÔI CÓ THỂ ĐẾN NHÀ HÀNG ẤN ĐỘ, HOẶC NHƯ MỘT SỰ LỰA CHỌN KHÁC, CHÚNG TÔI CÓ THỂ THỬ MỘT ĐỊA ĐIỂM Ý MỚI ĐÓ.",
        "translations": {
            "vi": "HOẶC, NHƯ MỘT SỰ LỰA CHỌN"
        }
    },
    {
        "id": "ban-12",
        "topic": "Bank",
        "word": "attentive",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CHĂM CHÚ, LƯU TÂM",
        "example": "HE W AS VERY A TTENTIV E T O HER WHEN SHE W AS ILL. HE WAS VERY ATT",
        "exampleTranslation": "ANH RẤT QUAN T ÂM ĐẾN CÔ KHI CÔ ỐM. ANH RẤT QUAN TÂ",
        "translations": {
            "vi": "CHĂM CHÚ, LƯU TÂM"
        }
    },
    {
        "id": "ban-13",
        "topic": "Bank",
        "word": "heavily",
        "phonetic": "",
        "pos": "adv",
        "meaning": "NẶNG, NẶNG NỀ",
        "example": "THE COUNTRY DEPENDS HEAVILY ON F OR EIGN AID.",
        "exampleTranslation": "NƯỚC NÀY PHỤ THUỘC NHIỀU V ÀO VIỆN TR Ợ NƯỚC NGOÀI.",
        "translations": {
            "vi": "NẶNG, NẶNG NỀ"
        }
    },
    {
        "id": "ban-14",
        "topic": "Bank",
        "word": "payable",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ THỂ TR Ả, PHẢI TR Ả",
        "example": "TAX IS PAY ABLE ON THE INT ER EST.",
        "exampleTranslation": "THUẾ PHẢI TR Ả CHO TIỀN LÃI.",
        "translations": {
            "vi": "CÓ THỂ TR Ả, PHẢI TR Ả"
        }
    },
    {
        "id": "ban-15",
        "topic": "Bank",
        "word": "personal",
        "phonetic": "",
        "pos": "adj",
        "meaning": "RIÊNG, CÁ NHÂ N",
        "example": "HER UNCLE T AK E S A PER S ONAL INT ER EST IN HER PR OGR ESS.",
        "exampleTranslation": "CHÚ CỦA C Ô CHÚ CỦA CÔ ẤY QUAN T ÂM ĐẾN SỰ TIẾN BỘ CÁ NHÂN CỦA CÔ ẤY. DELINQUENT CHẬM (TR Ả TIỀN)",
        "translations": {
            "vi": "RIÊNG, CÁ NHÂ N"
        }
    },
    {
        "id": "ban-16",
        "topic": "Bank",
        "word": "balance",
        "phonetic": "",
        "pos": "noun",
        "meaning": "S Ố DƯ T ÀI KHOẢN",
        "example": "I CHECK ED MY BALANCE AT THE A TM.",
        "exampleTranslation": "T ÔI ĐÃ KIỂM TR A SỐ DƯ CỦA MÌNH T ẠI MÁY A TM.",
        "translations": {
            "vi": "S Ố DƯ T ÀI KHOẢN"
        }
    },
    {
        "id": "ban-17",
        "topic": "Bank",
        "word": "investigation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐIỀU TR A",
        "example": "AN IN VESTIGATION HAS BEEN UNDER W AY F OR S EVER AL DAYS INT O THE DIS APPEAR ANCE O F A 13-Y EAR -OLD BO Y.",
        "exampleTranslation": "MỘT CUỘC ĐIỀU TR A ĐÃ ĐƯỢC TIẾN HÀNH TRONG VÀ I NGÀY V Ề VỤ MẤT TÍCH CỦA MỘT CẬU BÉ 13 TUỔI.",
        "translations": {
            "vi": "SỰ ĐIỀU TR A"
        }
    },
    {
        "id": "ban-18",
        "topic": "Bank",
        "word": "amount",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LƯỢNG, S Ố LƯỢNG, S Ố TIỀN",
        "example": "THE Y DIDN 'T DELIV ER THE RIGHT AMOUNT O F S AND.",
        "exampleTranslation": "HỌ KHÔNG GIAO ĐÚNG S Ố LƯỢNG CÁT.",
        "translations": {
            "vi": "LƯỢNG, S Ố LƯỢNG, S Ố TIỀN"
        }
    },
    {
        "id": "ban-19",
        "topic": "Bank",
        "word": "withdrawal",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ RÚT R A",
        "example": "THE GENER AL HAS OR DER ED A PARTIAL WITHDR AW AL O F TR OOP S FR OM THE AREA.",
        "exampleTranslation": "VỊ TƯỚNG ĐÃ R A LỆNH RÚT MỘT PHẦN QUÂN KHỎI KHU VỰC.",
        "translations": {
            "vi": "SỰ RÚT R A"
        }
    },
    {
        "id": "ban-20",
        "topic": "Bank",
        "word": "pleasure",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NIỀM VUI, SỰ HÀI LÒN G",
        "example": "HIS VISIT S GAV E HIS GR ANDPARENT S SUCH PLEASUR E.",
        "exampleTranslation": "NHỮNG CHUY ẾN THĂM CỦA ANH ĐÃ MANG LẠI CHO ÔNG BÀ ANH NIỀM VUI NHƯ THẾ.",
        "translations": {
            "vi": "NIỀM VUI, SỰ HÀI LÒN G"
        }
    },
    {
        "id": "ban-21",
        "topic": "Bank",
        "word": "summary",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BẢN T ÓM T ẮT",
        "example": "AT THE END O F THE NEWS, THEY O FT EN GIV E Y OU A SUMMAR Y O F THE MAIN S TORIE S.",
        "exampleTranslation": "Ở CUỐI TIN TỨC, HỌ THƯỜNG CUNG CẤP CHO BẠN BẢN TÓ M TẮ T ẮT NHỮNG CÂU CHUY ỆN CHÍNH.",
        "translations": {
            "vi": "BẢN T ÓM T ẮT"
        }
    },
    {
        "id": "ban-22",
        "topic": "Bank",
        "word": "temporary",
        "phonetic": "",
        "pos": "adj",
        "meaning": "T ẠM THỜI, NHẤT THỜI",
        "example": "THE CEA SEﬁ R E WILL ONLY PRO VIDE A T EMPOR ARY S OLUTION T O THE CEA SEﬁ RE THE CRISIS.",
        "exampleTranslation": "LỆNH NGỪNG BẮN S Ẽ CHỈ CUNG CẤP MỘT GIẢI PHÁP T ẠM THỜI CHO CUỘC KHỦNG HOẢNG.",
        "translations": {
            "vi": "T ẠM THỜI, NHẤT THỜI"
        }
    },
    {
        "id": "ban-23",
        "topic": "Bank",
        "word": "transaction",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GSỰ GIAO DỊCH, THƯƠNG VỤ",
        "example": "W E NEED T O MONIT OR THE TR ANS ACTION O F SMALLER DEALS.",
        "exampleTranslation": "CHÚNG T A CẦN THEO DÕI SỰ GIAO DỊCH CỦA CÁC GIAO DỊCH NHỎ HƠN.",
        "translations": {
            "vi": "GSỰ GIAO DỊCH, THƯƠNG VỤ"
        }
    },
    {
        "id": "ban-24",
        "topic": "Bank",
        "word": "reject",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỔI, BIẾN ĐỔI, CHUYỂN",
        "example": "THE APPEAL WAS REJECTED BY THE COURT.",
        "exampleTranslation": "ĐƠN KHÁNG CÁO ĐÃ BỊ TÒA BÁC BỎ.",
        "translations": {
            "vi": "ĐỔI, BIẾN ĐỔI, CHUYỂN"
        }
    },
    {
        "id": "ban-25",
        "topic": "Bank",
        "word": "convert",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỔI, BIẾN ĐỔI, CHUYỂN",
        "example": "COULD WE CONVERT THE SMALL BEDROOM INTO A SECOND BATHROOMfi",
        "exampleTranslation": "CHÚNG TA CÓ THỂ CHUYỂN PHÒNG NGỦ NHỎ THÀNH PHÒNG TẮM THỨ HAI KHÔNGfi",
        "translations": {
            "vi": "ĐỔI, BIẾN ĐỔI, CHUYỂN"
        }
    },
    {
        "id": "ban-26",
        "topic": "Bank",
        "word": "loan",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CHO VAY, KHOẢN VAY",
        "example": "SHE'S TRYING TO GET A $50,000 LOAN TO START HER OWN BUSINESS.",
        "exampleTranslation": "CÔ ẤY ĐANG CỐ GẮNG KIẾM KHOẢN VAY 50.000 ĐÔ LA ĐỂ BẮT ĐẦU CÔNG VIỆC KINH DOANH CỦA RIÊNG MÌNH.",
        "translations": {
            "vi": "SỰ CHO VAY, KHOẢN VAY"
        }
    },
    {
        "id": "ban-27",
        "topic": "Bank",
        "word": "cash",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỔI SANG TIỀN MẶT",
        "example": "SORRY, W E CAN'T CASH CHEQUES HERE.",
        "exampleTranslation": "XIN LỖI, CHÚNG TÔI KHÔNG THỂ ĐỔI SANG TIỀN MẶT Ở ĐÂY. MOR T GAGE VIỆC VAY THẾ CHẤP",
        "translations": {
            "vi": "ĐỔI SANG TIỀN MẶT"
        }
    },
    {
        "id": "ban-28",
        "topic": "Bank",
        "word": "investment",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐẦU TƯ, V ỐN ĐẦU TƯ",
        "example": "THE GOVERNMENT W ANTED AN INﬂO W O F FOREIGN INVESTMENT.",
        "exampleTranslation": "CHÍNH PHỦ MUỐN CÓ MỘT DÒNG V ỐN ĐẦU TƯ NƯỚC NGOÀI.",
        "translations": {
            "vi": "SỰ ĐẦU TƯ, V ỐN ĐẦU TƯ"
        }
    },
    {
        "id": "ban-29",
        "topic": "Bank",
        "word": "inherently",
        "phonetic": "",
        "pos": "adv",
        "meaning": "V ỐN DĨ, VỀ BẢN CHẤT",
        "example": "THERE' S NOTHING INHERENTLY WRONG WITH HIS IDEAS.",
        "exampleTranslation": "V ỐN DĨ KHÔNG CÓ GÌ SAI VỚI Ý TƯỞNG CỦA ANH ẤY. SE CUR E BẢO VỆ; THẮT, BUỘC",
        "translations": {
            "vi": "V ỐN DĨ, VỀ BẢN CHẤT"
        }
    },
    {
        "id": "ban-30",
        "topic": "Bank",
        "word": "propose",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐỀ XUẤT, ĐỀ NGHỊ",
        "example": "HE PROPOSED DEALING DIRECTLY WITH THE SUPPLIERS.",
        "exampleTranslation": "ÔNG ĐỀ XUẤT GIAO DỊCH TRỰC TIẾP VỚI CÁC NHÀ CUNG CẤP. DIS TRIBUTION PHÂN CHIA",
        "translations": {
            "vi": "ĐỀ XUẤT, ĐỀ NGHỊ"
        }
    },
    {
        "id": "ban-31",
        "topic": "Bank",
        "word": "support",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ HỖ TR Ợ, SỰ ỦNG HỘ",
        "example": "ENVIR ONMENT AL GR OUPS ARE F AS T GAINING SUPPORT AMONG YOUNG PEOPLE.",
        "exampleTranslation": "CÁC NHÓM MÔI TRƯỜNG ĐANG NHANH CHÓNG NHẬN ĐƯỢC SỰ ỦNG HỘ CỦA GIỚI TR Ẻ.",
        "translations": {
            "vi": "SỰ HỖ TR Ợ, SỰ ỦNG HỘ"
        }
    },
    {
        "id": "ban-32",
        "topic": "Bank",
        "word": "consider",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CÂN NHẮC, SUY XÉT",
        "example": "DON' T MAK E ANY DECISIONS BEFORE YOU'V E CONSIDERED THE SITUATION.",
        "exampleTranslation": "ĐỪNG ĐƯA RA BẤT KỲ QUY ẾT ĐỊNH NÀO TRƯỚC KHI BẠN CÂN NHẮC TÌNH HÌNH.",
        "translations": {
            "vi": "CÂN NHẮC, SUY XÉT"
        }
    },
    {
        "id": "ban-33",
        "topic": "Bank",
        "word": "nearly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "GẦN, SẮP, SUÝT",
        "example": "I'V E NEARLY ﬁNISHED THAT BOOK YOU LENT ME. BOOK Y OU LE",
        "exampleTranslation": "T ÔI ĐÃ GẦN HOÀN THÀNH CUỐN SÁCH MÀ BẠN CHO TÔI MƯỢN.",
        "translations": {
            "vi": "GẦN, SẮP, SUÝT"
        }
    },
    {
        "id": "ban-34",
        "topic": "Bank",
        "word": "consent",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐỒNG Ý, SỰ TÁN THÀNH",
        "example": "THE Y CAN'T PUBLISH YOUR NAME WITHOUT YOUR CONSENT.",
        "exampleTranslation": "HỌ KHÔNG THỂ XUẤT BẢN TÊ N CỦA BẠN MÀ KHÔNG CÓ SỰ ĐỒNG Ý CỦA BẠN.",
        "translations": {
            "vi": "SỰ ĐỒNG Ý, SỰ TÁN THÀNH"
        }
    },
    {
        "id": "ban-35",
        "topic": "Bank",
        "word": "gratitude",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LÒNG BIẾT ƠN, SỰ NHỚ ƠN",
        "example": "SHE SENT THEM A PRE SENT TO SHOWE XPRESS HER GRATITUDE.",
        "exampleTranslation": "CÔ ẤY ĐÃ GỬI CHO HỌ MỘT MÓN QUÀ ĐỂ THỂ HIỆN / BÀY TỎ LÒNG BIẾT ƠN CỦA MÌNH.",
        "translations": {
            "vi": "LÒNG BIẾT ƠN, SỰ NHỚ ƠN"
        }
    },
    {
        "id": "ban-36",
        "topic": "Bank",
        "word": "consult",
        "phonetic": "",
        "pos": "verb",
        "meaning": "HỎI Ý KIẾN, BÀN BẠC, THAM KHẢO",
        "example": "IF THE S YMPT OMS GE T W OR SE, CONSULT Y OUR DOCTO R.",
        "exampleTranslation": "NẾU CÁC TRIỆU CHỨNG TR Ở NÊN T ỒI T Ệ HƠN, HÃY HỎI Ý KIẾN BÁC SĨ.",
        "translations": {
            "vi": "HỎI Ý KIẾN, BÀN BẠC, THAM KHẢO"
        }
    },
    {
        "id": "ban-37",
        "topic": "Bank",
        "word": "advice",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỜI KHUY ÊN, SỰ TƯ V ẤN",
        "example": "ST EVEN GAV E ME S OME GOOD ADVIC E.",
        "exampleTranslation": "ST EVEN ĐÃ CHO T ÔI MỘT S Ố LỜI KHUY ÊN T ỐT.",
        "translations": {
            "vi": "LỜI KHUY ÊN, SỰ TƯ V ẤN"
        }
    },
    {
        "id": "ban-38",
        "topic": "Bank",
        "word": "partially",
        "phonetic": "",
        "pos": "adv",
        "meaning": "MỘT PHẦN, CỤC BỘ",
        "example": "THE MEAT W AS ONLY PARTIALLY COOK ED.",
        "exampleTranslation": "THỊT CHỈ CHÍN MỘT PHẦN.",
        "translations": {
            "vi": "MỘT PHẦN, CỤC BỘ"
        }
    },
    {
        "id": "ban-39",
        "topic": "Bank",
        "word": "cautious",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THẬN TR ỌNG, CẨN THẬN",
        "example": "HE 'S A CAUTIOUS DRIV ER.",
        "exampleTranslation": "ANH ẤY LÀ MỘT NGƯỜI LÁI X E CẨN TR ỌNG.",
        "translations": {
            "vi": "THẬN TR ỌNG, CẨN THẬN"
        }
    },
    {
        "id": "ban-40",
        "topic": "Bank",
        "word": "possible",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ THỂ, KHẢ THI",
        "example": "I CAN 'T GE T IT ALL DONE BY FRIDAY - IT' S JUS T NOT POS SIBLE.",
        "exampleTranslation": "TÔI KHÔNG THỂ HOÀN THÀNH T ẤT CẢ V ÀO THỨ SÁU - ĐIỀU ĐÓ LÀ KHÔNG THỂ.",
        "translations": {
            "vi": "CÓ THỂ, KHẢ THI"
        }
    },
    {
        "id": "ban-41",
        "topic": "Bank",
        "word": "stability",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ỔN ĐỊNH, SỰ VỮNG CHẮC",
        "example": "A LO VING F AMILY ENVI RO NMENT GIVES CHILDR EN THAT S ENS E O F A LO VING FAMI NVIRONMENT GIVES CHILD ST ABILITY AND PERMANENCE WHICH TH EY NEED. STABIL MANENCE WHICH THEY",
        "exampleTranslation": "MỘT MÔI TRƯỜNG GIA ĐÌNH Y ÊU THƯƠNG MANG LẠI CHO TR Ẻ EM A ĐÌNH YÊU T CẢM GIÁC ỔN ĐỊNH V À LÂU DÀI MÀ CHÚNG CẦN.",
        "translations": {
            "vi": "SỰ ỔN ĐỊNH, SỰ VỮNG CHẮC"
        }
    },
    {
        "id": "ban-42",
        "topic": "Bank",
        "word": "prevalent",
        "phonetic": "",
        "pos": "adj",
        "meaning": "PHỔ BIẾN, THỊNH HÀNH",
        "example": "THE SE DISEASES ARE MOR E PREVALENT AMONG YOUNG CHILDREN.",
        "exampleTranslation": "NHỮNG BỆNH NÀY PHỔ BIẾN HƠN Ở TRẺ NHỎ.",
        "translations": {
            "vi": "PHỔ BIẾN, THỊNH HÀNH"
        }
    },
    {
        "id": "ban-43",
        "topic": "Bank",
        "word": "rapid",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NHANH, NHANH CHÓNG, MAU LẸ",
        "example": "I W AS STARTLED BY A RAPID MOVEMENT TO MY LE FT.",
        "exampleTranslation": "T ÔI GIẬT MÌNH VÌ MỘT CHUYỂN ĐỘNG NHANH SANG TRÁI CỦA MÌNH. UNPRECEDENTED CHƯA TỪNG THẤY",
        "translations": {
            "vi": "NHANH, NHANH CHÓNG, MAU LẸ"
        }
    },
    {
        "id": "ban-44",
        "topic": "Bank",
        "word": "lucrative",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CÓ LỢI, SINH LỜI",
        "example": "THE MER GER PROVED TO BE VERY LUCRATIVE FOR BOTH COMPANIES.",
        "exampleTranslation": "VIỆC SÁP NHẬP ĐƯỢC CHỨNG MINH LÀ RẤT SINH LỢI CHO CẢ HAI CÔNG TY.",
        "translations": {
            "vi": "CÓ LỢI, SINH LỜI"
        }
    },
    {
        "id": "ban-45",
        "topic": "Bank",
        "word": "innate",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BẨM SINH",
        "example": "CYRIL'S MOS T IMPRESSIVE QUALITY WAS HIS INNATE GOODNESS.",
        "exampleTranslation": "PHẨM CHẤT ẤN TƯỢNG NHẤT CỦA CYRIL LÀ TÍNH TỐT BẨM SINH.",
        "translations": {
            "vi": "BẨM SINH"
        }
    },
    {
        "id": "ban-46",
        "topic": "Bank",
        "word": "property",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUY ỀN S Ở HỮU, T ÀI S ẢN",
        "example": "BOTH BOOK S HAVE \" GOVERNMENT PR OPERTY\" ST AMPED INSIDE THEM.",
        "exampleTranslation": "CẢ HAI CUỐN S ÁCH ĐỀU CÓ ĐÓNG DẤU \"T ÀI S ẢN CHÍNH PHỦ\" BÊN TRONG CHÚNG.",
        "translations": {
            "vi": "QUY ỀN S Ở HỮU, T ÀI S ẢN"
        }
    },
    {
        "id": "ban-47",
        "topic": "Bank",
        "word": "lease",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HỢP ĐỒNG CHO THUÊ",
        "example": "HE HAS THE HOUSE ON A LONG LEASE.",
        "exampleTranslation": "ANH TA CÓ CĂN NHÀ THEO HỢP ĐỒNG THUÊ DÀI HẠN.",
        "translations": {
            "vi": "HỢP ĐỒNG CHO THUÊ"
        }
    },
    {
        "id": "ban-48",
        "topic": "Bank",
        "word": "sponsor",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NHÀ TÀI TRỢ",
        "example": "THE PARTICIPANTS' EMPLOYERS SPONSOR THEM FOR THE SIX-MONTH TRAINING PROGRAM.",
        "exampleTranslation": "NGƯỜI SỬ DỤNG LAO ĐỘNG CỦA NHỮNG NGƯỜI THAM GIA TÀI TRỢ CHO HỌ CHO CHƯƠNG TRÌNH ĐÀO TẠO SÁU THÁNG.",
        "translations": {
            "vi": "NHÀ TÀI TRỢ"
        }
    },
    {
        "id": "ban-49",
        "topic": "Bank",
        "word": "evident",
        "phonetic": "",
        "pos": "adj",
        "meaning": "HIỂN NHIÊN, R Õ R ÀNG, R Õ R ỆT",
        "example": "HER LO V E F OR HIM W AS E VIDENT IN ALL THAT SHE DID.",
        "exampleTranslation": "TÌNH Y ÊU CỦA CÔ DÀNH CHO ANH ĐƯỢC THỂ HIỆN R Õ R ÀNG TRONG TẤ T CẢ NHỮNG GÌ CÔ ĐÃ LÀM. HỂ HIỆN RÕ RÀN ONG TẤT CẢ NHỮNG GÌ",
        "translations": {
            "vi": "HIỂN NHIÊN, R Õ R ÀNG, R Õ R ỆT"
        }
    },
    {
        "id": "ban-50",
        "topic": "Bank",
        "word": "reliability",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ ĐÁNG TIN CẬY",
        "example": "R OLLS-R OYCE CARS ARE FAMOUS FOR THEIR QUALITY AND RELIABILITY.",
        "exampleTranslation": "X E ROLLS-R OYCE NỔI TIẾNG VỀ CHẤT LƯỢNG VÀ ĐỘ TIN CẬY. INSIGHT SỰ SÁNG SUỐT",
        "translations": {
            "vi": "SỰ ĐÁNG TIN CẬY"
        }
    },
    {
        "id": "ban-51",
        "topic": "Bank",
        "word": "shareholder",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CỔ ĐÔNG",
        "example": "SHAREHOLDER S WILL BE V OTING ON THE PR OPOS ED MER GER O F THE COMPANIE S NE XT W EEK.",
        "exampleTranslation": "CÁC CỔ ĐÔNG S Ẽ BIỂU QUY ẾT V Ề ĐỀ XUẤT S ÁP NHẬP CỦA CÁC CÔNG TY V ÀO TUẦN T ỚI.",
        "translations": {
            "vi": "CỔ ĐÔNG"
        }
    },
    {
        "id": "ban-52",
        "topic": "Bank",
        "word": "outlook",
        "phonetic": "",
        "pos": "noun",
        "meaning": "VIỄN CẢNH, TRIỂN V ỌNG",
        "example": "THE OUTLOOK F OR THE ECONOMY IS BLEAK.",
        "exampleTranslation": "T RIỂN V ỌNG CỦA NỀN KINH T Ế LÀ ẢM ĐẠM.",
        "translations": {
            "vi": "VIỄN CẢNH, TRIỂN V ỌNG"
        }
    },
    {
        "id": "ban-53",
        "topic": "Bank",
        "word": "bond",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TR ÁI PHIẾU",
        "example": "THER E HAS BEEN A CLOS E BOND BE TW EEN THEM EVER SINCE SHE S AV ED HIM FR OM DR O WNING.",
        "exampleTranslation": "GIỮA HỌ ĐÃ CÓ MỘT MỐI QUAN HỆ KHĂNG KHÍT K Ể TỪ KHI CÔ CỨU ANH KHỎI CHẾ T ĐUỐI.",
        "translations": {
            "vi": "TR ÁI PHIẾU"
        }
    },
    {
        "id": "ban-54",
        "topic": "Bank",
        "word": "depreciation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ SỤT GIÁ",
        "example": "EXPENS ES INCLUDE DEPR ECIATION O F EQUIPMENT AS W ELL AS BUSINE SS INSUR ANC E.",
        "exampleTranslation": "CHI PHÍ BAO GỒM SỰ SỤT GIÁ THIẾ T BỊ CŨNG NHƯ BẢO HIỂM ỰS ỤT GIÁ THIẾ T BỊ",
        "translations": {
            "vi": "SỰ SỤT GIÁ"
        }
    },
    {
        "id": "ban-55",
        "topic": "Bank",
        "word": "yield",
        "phonetic": "",
        "pos": "verb",
        "meaning": "T ẠO R A, SINH LỢI",
        "example": "THE IN VESTIGATION YIELDED S OME UNE XPECT ED R ESULT S.",
        "exampleTranslation": "CUỘC ĐIỀU TR A ĐÃ MANG LẠI MỘT S Ố K ẾT QUẢ BẤT NGỜ.",
        "translations": {
            "vi": "T ẠO R A, SINH LỢI"
        }
    },
    {
        "id": "ban-56",
        "topic": "Bank",
        "word": "residence",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NƠI CƯ TRÚ, NHÀ Ở",
        "example": "SHE HAS MANAGED T O OB TA IN A T EMPOR ARY R ES IDENCE PERMIT.",
        "exampleTranslation": "CÔ ẤY ĐÃ CỐ GẮNG XIN ĐƯỢC GIẤY PHÉP NƠI CƯ TRÚ T ẠM THỜI.",
        "translations": {
            "vi": "NƠI CƯ TRÚ, NHÀ Ở"
        }
    },
    {
        "id": "ban-57",
        "topic": "Bank",
        "word": "drape",
        "phonetic": "",
        "pos": "verb",
        "meaning": "TR EO MÀN, CHE R ÈM",
        "example": "HOT ELS WERE DR APED WITH PATRIOTIC BUNTING.",
        "exampleTranslation": "CÁC KHÁCH S ẠN ĐƯỢC TR ANG TRÍ BẰNG CÁCH TR EO CỜ HIỆU Y ÊU NƯỚC.",
        "translations": {
            "vi": "TR EO MÀN, CHE R ÈM"
        }
    },
    {
        "id": "ban-58",
        "topic": "Bank",
        "word": "unoccupied",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BỎ TR ỐNG, KHÔNG CÓ NGƯỜI Ở",
        "example": "ARE THER E ANY UNOCCUPIED S EAT S IN THAT R OW fi RO Wfi",
        "exampleTranslation": "CÓ GHẾ NÀO TR ỐNG TRONG HÀNG ĐÓ KHÔNGfi",
        "translations": {
            "vi": "BỎ TR ỐNG, KHÔNG CÓ NGƯỜI Ở"
        }
    },
    {
        "id": "ban-59",
        "topic": "Bank",
        "word": "renovation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CẢI T ẠO, SỬA S ANG",
        "example": "THE MUS EUM IS CLOS ED F OR R ENOVATIONS.",
        "exampleTranslation": "BẢO T ÀNG ĐÓNG CỬA ĐỂ SỬA S ANG. ĐỂ SỬ A",
        "translations": {
            "vi": "SỰ CẢI T ẠO, SỬA S ANG"
        }
    },
    {
        "id": "ban-60",
        "topic": "Bank",
        "word": "construction",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ X ÂY DỰNG",
        "example": "THE BRIDGE IS A MARVELLOUS WORK OF ENGINEERING AND CONSTRUCTION.",
        "exampleTranslation": "CÂY CẦU LÀ MỘT CÔNG TRÌNH KỲ DIỆU CỦA KỸ THUẬT VÀ SỰ XÂY DỰNG.",
        "translations": {
            "vi": "SỰ X ÂY DỰNG"
        }
    },
    {
        "id": "ban-61",
        "topic": "Bank",
        "word": "regularly",
        "phonetic": "",
        "pos": "adv",
        "meaning": "ĐỀU ĐẶN, THƯỜNG XUY ÊN",
        "example": "WE MEE T R EGULARLY EACH MORNING F OR C Oﬀ EE.",
        "exampleTranslation": "CHÚNG T ÔI GẶP NHAU THƯỜNG XUY ÊN MỖI S ÁNG ĐỂ UỐNG CÀ PHÊ.",
        "translations": {
            "vi": "ĐỀU ĐẶN, THƯỜNG XUY ÊN"
        }
    },
    {
        "id": "ban-62",
        "topic": "Bank",
        "word": "arrange",
        "phonetic": "",
        "pos": "verb",
        "meaning": "S ẮP X ẾP, S ẮP ĐẶT",
        "example": "THE MEE TING HAS BEEN ARR ANGED F OR W EDNES DAY.",
        "exampleTranslation": "CUỘC HỌP ĐÃ ĐƯỢC S ẮP X ẾP V ÀO THỨ T Ư.",
        "translations": {
            "vi": "S ẮP X ẾP, S ẮP ĐẶT"
        }
    },
    {
        "id": "ban-63",
        "topic": "Bank",
        "word": "presently",
        "phonetic": "",
        "pos": "adv",
        "meaning": "HIỆN GIỜ, CHẲNG MẤY CHÓC",
        "example": "THR EE SIT E S ARE PR ES ENTLY UNDER CONSIDER ATION F OR THE NEW HOT EL.",
        "exampleTranslation": "BA ĐỊA ĐIỂM HIỆN GIỜ ĐANG ĐƯỢC XEM X É T CHO KHÁCH S ẠN MỚI.",
        "translations": {
            "vi": "HIỆN GIỜ, CHẲNG MẤY CHÓC"
        }
    },
    {
        "id": "ban-64",
        "topic": "Bank",
        "word": "maintain",
        "phonetic": "",
        "pos": "verb",
        "meaning": "DUY TRÌ, BẢO QUẢN",
        "example": "THE ARMY HAS BEEN BR OUGHT IN T O MAINT AIN OR DER IN THE R EGION.",
        "exampleTranslation": "QUÂN ĐỘI ĐÃ ĐƯỢC ĐƯA ĐẾN ĐỂ DUY TRÌ TR ẬT TỰ TRONG KHU VỰC.",
        "translations": {
            "vi": "DUY TRÌ, BẢO QUẢN"
        }
    },
    {
        "id": "ban-65",
        "topic": "Bank",
        "word": "densely",
        "phonetic": "",
        "pos": "adv",
        "meaning": "DÀY ĐẶC, RẬM R ẠP",
        "example": "ENGLAND W AS ONCE A DENS ELY W OODED COUNTR Y.",
        "exampleTranslation": "ANH TỪNG LÀ MỘT QUỐC GIA CÓ NHIỀU CÂY CỐI R ẬM R ẠP.",
        "translations": {
            "vi": "DÀY ĐẶC, RẬM R ẠP"
        }
    },
    {
        "id": "ban-66",
        "topic": "Bank",
        "word": "prepare",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHUẨN BỊ, SỬA S OẠN",
        "example": "SHE 'LL PR EPARE THE F OOD AHEAD O F TIME AND FR EEZE IT.",
        "exampleTranslation": "CÔ ẤY S Ẽ CHUẨN BỊ THỨC ĂN TRƯỚC V À ĐỂ ĐÔNG LẠNH.",
        "translations": {
            "vi": "CHUẨN BỊ, SỬA S OẠN"
        }
    },
    {
        "id": "ban-67",
        "topic": "Bank",
        "word": "renewal",
        "phonetic": "",
        "pos": "adj",
        "meaning": "SỰ ĐỔI MỚI, SỰ PHỤC HỒI",
        "example": "THE T ALK S ARE INT ENDED TO PAV E THE W AY T O A R ENEWAL O F PEACE NEGOTIATIONS.",
        "exampleTranslation": "CÁC CUỘC HỘI ĐÀM NHẰM MỞ ĐƯỜNG CHO VIỆC ĐỔI MỚI CÁC CUỘC ĐÀM PHÁN HÒA BÌNH.",
        "translations": {
            "vi": "SỰ ĐỔI MỚI, SỰ PHỤC HỒI"
        }
    },
    {
        "id": "ban-68",
        "topic": "Bank",
        "word": "interfere",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CAN THIỆP, QUẤY R ẦY",
        "example": "IT' S THEIR PR OBLEM AND I'M NOT GOING T O INT ERF ER E.",
        "exampleTranslation": "ĐÓ LÀ V ẤN ĐỀ CỦA HỌ V À T ÔI S Ẽ KHÔNG CAN THIỆP.",
        "translations": {
            "vi": "CAN THIỆP, QUẤY R ẦY"
        }
    },
    {
        "id": "ban-69",
        "topic": "Bank",
        "word": "totally",
        "phonetic": "",
        "pos": "adv",
        "meaning": "HOÀN T OÀN",
        "example": "I TOT ALLY AGREE WITH Y OU.",
        "exampleTranslation": "TÔI HOÀN T OÀN ĐỒNG Ý V ỚI BẠN.",
        "translations": {
            "vi": "HOÀN T OÀN"
        }
    },
    {
        "id": "ban-70",
        "topic": "Bank",
        "word": "actually",
        "phonetic": "",
        "pos": "adv",
        "meaning": "THỰC SỰ, QUẢ LÀ, THỰC R A",
        "example": "I DIDN'T ACTUALLY S EE HER - I JUS T HEAR D HER V OIC E.",
        "exampleTranslation": "TÔI KHÔNG THỰC SỰ NHÌN THẤY CÔ ẤY - T ÔI CHỈ NGHE THẤY GIỌNG NÓI CỦA CÔ ẤY.",
        "translations": {
            "vi": "THỰC SỰ, QUẢ LÀ, THỰC R A"
        }
    },
    {
        "id": "ban-71",
        "topic": "Bank",
        "word": "architect",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KIẾN TRÚC S Ư",
        "example": "BEVAN W AS THE AR CHITECT O F THE BRITISH NATIONAL HEALTH SERVICE. ERVIC E.",
        "exampleTranslation": "BEVA N BEVAN LÀ KIẾN TRÚC SƯ CỦA DỊCH VỤ Y T Ế QUỐC GIA ANH. PERMANENT VĨNH CỬU",
        "translations": {
            "vi": "KIẾN TRÚC S Ư"
        }
    },
    {
        "id": "ban-72",
        "topic": "Bank",
        "word": "consist",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BAO GỒM, GỒM C Ó",
        "example": "SUB ST RA TE CAN CONSIS T O F ﬁNE GR AV EL, AQUARIUM S AND OR PO W DER ED LAV A.",
        "exampleTranslation": "CHẤT NỀN CÓ THỂ BAO GỒM S ỎI MỊN, CÁT HỒ CÁ HOẶC DUNG NHAM DẠNG BỘT.",
        "translations": {
            "vi": "BAO GỒM, GỒM C Ó"
        }
    },
    {
        "id": "ban-73",
        "topic": "Bank",
        "word": "community",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CỘNG ĐỒNG, DÂN CHÚNG",
        "example": "HE 'S W ELL KNO WN IN THE LOCAL COMMUNITY.",
        "exampleTranslation": "ANH ẤY NỔI TIẾNG TRONG CỘNG ĐỒNG ĐỊA PHƯƠNG.",
        "translations": {
            "vi": "CỘNG ĐỒNG, DÂN CHÚNG"
        }
    },
    {
        "id": "ban-74",
        "topic": "Bank",
        "word": "contractor",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NHÀ THẦU",
        "example": "W ORKING 24/7 IS SOMETHING IT CONTRACTORS GROW TO IF THEY WANT TO COMPE TE.",
        "exampleTranslation": "LÀM VIỆC 24/7 LÀ ĐIỀU MÀ CÁC NHÀ THẦU CNTT THƯỜNG LÀM NẾU HỌ MUỐN CẠNH TRANH.",
        "translations": {
            "vi": "NHÀ THẦU"
        }
    },
    {
        "id": "ban-75",
        "topic": "Bank",
        "word": "district",
        "phonetic": "",
        "pos": "noun",
        "meaning": "QUẬN, KHU VỰC",
        "example": "VANDALS SMASHED WINDOW S AND OVERTURNED CARS IN THE DO WNTOWN SHOPPING DISTRICT.",
        "exampleTranslation": "NHỮNG KẺ PHÁ HOẠI ĐÃ ĐẬP V Ỡ CỬA S Ổ VÀ LẬT NGƯỢC Ô TÔ TRONG KHU VỰCMUA SẮM Ở TRUNG TÂM THÀNH PHỐ.",
        "translations": {
            "vi": "QUẬN, KHU VỰC"
        }
    },
    {
        "id": "ban-76",
        "topic": "Bank",
        "word": "compulsory",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BẮT BUỘC, CƯỠNG BÁCH",
        "example": "S WIMMING W AS COMPUL SO RY AT MY S CHOOL.",
        "exampleTranslation": "BƠI LỘI LÀ BẮT BUỘC Ở TRƯỜNG HỌC CỦA T ÔI.",
        "translations": {
            "vi": "BẮT BUỘC, CƯỠNG BÁCH"
        }
    },
    {
        "id": "ban-77",
        "topic": "Bank",
        "word": "relocation",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CHUY ỂN CHỖ",
        "example": "WE ARE LIK ELY T O S EE THE T EMPORA RY R ELOCATION O F S OME O F OUR S TAﬀ.",
        "exampleTranslation": "CHÚNG T ÔI CÓ THỂ THẤY MỘT S Ố NHÂN VIÊN CỦA CHÚNG TÔ I PHẢI CHUYỂ N CHỖ TẠM THỜI.",
        "translations": {
            "vi": "SỰ CHUY ỂN CHỖ"
        }
    },
    {
        "id": "ban-78",
        "topic": "Bank",
        "word": "enlarge",
        "phonetic": "",
        "pos": "verb",
        "meaning": "MỞ R ỘNG, KHUẾCH TRƯƠNG",
        "example": "THE Y'V E ENLAR GED THE KIT CHEN BY BUILDING OVER PART O F THE GAR DEN. NG O V ER E GARD E",
        "exampleTranslation": "HỌ ĐÃ MỞ R ỘNG NHÀ BẾP BẰNG CÁCH XÂ Y DỰNG TR ÊN MỘT PHẦN CỦA KHU VƯỜN. ÂY DỰNG TR ÊN MỘ",
        "translations": {
            "vi": "MỞ R ỘNG, KHUẾCH TRƯƠNG"
        }
    },
    {
        "id": "ban-79",
        "topic": "Bank",
        "word": "install",
        "phonetic": "",
        "pos": "verb",
        "meaning": "ĐẶT, LẮP ĐẶT, CÀI ĐẶT",
        "example": "THE PLUMBER IS COMING T OMORR OW TO INST ALL THE NEW WASH I WASHING MACHINE.",
        "exampleTranslation": "NGÀY MAI, THỢ SỬA ỐNG NƯỚC S Ẽ ĐẾN ĐỂ LẮP ĐẶT MÁY GIẶT MỚI.",
        "translations": {
            "vi": "ĐẶT, LẮP ĐẶT, CÀI ĐẶT"
        }
    },
    {
        "id": "ban-80",
        "topic": "Bank",
        "word": "suppose",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIẢ SỬ, CHO R ẰNG",
        "example": "HE F OUND IT A LOT MOR E DIﬃCULT T O GE T A JOB THAN HE SUPPOS ED IT W OULD BE.",
        "exampleTranslation": "ANH ẤY NHẬN THẤY VIỆC KIẾM ĐƯỢC VIỆC LÀM KHÓ HƠN R ẤT NHIỀU S O V ỚI NHỮNG GÌ ANH ẤY CHO R ẰNG.",
        "translations": {
            "vi": "GIẢ SỬ, CHO R ẰNG"
        }
    },
    {
        "id": "ban-81",
        "topic": "Bank",
        "word": "adjacent",
        "phonetic": "",
        "pos": "adj",
        "meaning": "LIỀN K Ề, S ÁT",
        "example": "THE Y W ORK IN ADJACENT BUILDINGS.",
        "exampleTranslation": "HỌ LÀM VIỆC TRONG CÁC T ÒA NHÀ LIỀN K Ề.",
        "translations": {
            "vi": "LIỀN K Ề, S ÁT"
        }
    },
    {
        "id": "ban-82",
        "topic": "Bank",
        "word": "utility",
        "phonetic": "",
        "pos": "noun",
        "meaning": "PHƯƠNG TIỆN DỊCH VỤ CÔNG CỘN G",
        "example": "THE UTILITY O F THIS SUB ST ANCE HAS BEEN PR OVE N IN A S ERIE S O F T ESTS.",
        "exampleTranslation": "CÔNG DỤNG CỦA CHẤT NÀY ĐÃ ĐƯỢC CHỨNG MINH TRONG MỘT LOẠT CÁC THỬ NGHIỆM.",
        "translations": {
            "vi": "PHƯƠNG TIỆN DỊCH VỤ CÔNG CỘN G"
        }
    },
    {
        "id": "ban-83",
        "topic": "Bank",
        "word": "conserve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "BẢO T ỒN, DUY TRÌ",
        "example": "W E MUS T CONS ERV E OUR W OODLANDS F OR FUTURE GENER ATIONS.",
        "exampleTranslation": "CHÚNG T A PHẢI BẢO T ỒN RỪNG CỦA CHÚNG T A CHO CÁC THẾ HỆ TƯƠNG LAI.",
        "translations": {
            "vi": "BẢO T ỒN, DUY TRÌ"
        }
    },
    {
        "id": "ban-84",
        "topic": "Bank",
        "word": "chance",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHẢ NĂNG, SỰ CÓ KHẢ NĂNG",
        "example": "IF Y OU GIV E ME A CHANCE T O SPEAK, I'LL E XPLAIN.",
        "exampleTranslation": "NẾU BẠN CHO T ÔI MỘT KHẢ NĂNG ĐỂ NÓI, T ÔI S Ẽ GIẢI THÍCH.",
        "translations": {
            "vi": "KHẢ NĂNG, SỰ CÓ KHẢ NĂNG"
        }
    },
    {
        "id": "ban-85",
        "topic": "Bank",
        "word": "dispose",
        "phonetic": "",
        "pos": "verb",
        "meaning": "XỬ LÝ, VỨT BỎ, THANH LÝ",
        "example": "THE AGENCY HAS PUT AN END T O NEW Eﬀ ORTS T O DISPOS E OF HAZ AR DOUS W AS TE IN S ENSITIV E ENVIR ONMENT AL AREAS. ST E IN S ENSITIV E EN V NTAL AREAS.",
        "exampleTranslation": "CƠ QUAN NÀY ĐÃ CHẤM DỨT NHỮNG NỖ LỰC MỚI ĐỂ XỬ L Ý C MỚI ĐỂ XỬ LÝ CHẤT THẢI NGUY HẠI TRONG CÁC KHU VỰC MÔI TRƯỜNG NHẠY CẢM.",
        "translations": {
            "vi": "XỬ LÝ, VỨT BỎ, THANH LÝ"
        }
    },
    {
        "id": "ban-86",
        "topic": "Bank",
        "word": "clear",
        "phonetic": "",
        "pos": "adj",
        "meaning": "TRONG, TRONG TR ẺO; R Õ R ÀNG, DỄ HIỂU",
        "example": "OUR NEW T ELE VISION HAS A VERY CLEAR PICTUR E.",
        "exampleTranslation": "CHIẾC TIVI MỚI CỦA CHÚNG T ÔI CÓ HÌNH ẢNH R ẤT R Õ R ÀNG.",
        "translations": {
            "vi": "TRONG, TRONG TR ẺO; R Õ R ÀNG, DỄ HIỂU"
        }
    },
    {
        "id": "ban-87",
        "topic": "Bank",
        "word": "solution",
        "phonetic": "",
        "pos": "noun",
        "meaning": "GIẢI PHÁP, ĐÁP ÁN",
        "example": "THER E' S NO EAS Y S OLUTION T O THIS PR OBLEM.",
        "exampleTranslation": "KHÔNG CÓ GIẢI PHÁP DỄ DÀNG CHO V ẤN ĐỀ NÀY.",
        "translations": {
            "vi": "GIẢI PHÁP, ĐÁP ÁN"
        }
    },
    {
        "id": "ban-88",
        "topic": "Bank",
        "word": "preserve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GIỮ GÌN, BẢO T ỒN",
        "example": "WE W ANT T O PR ES ERV E THE CHAR ACT ER O F THE T OW N WHILE IMPR O VING THE F ACILITIE S.",
        "exampleTranslation": "CHÚNG T ÔI MUỐN BẢO T ỒN NÉ T ĐẶC TRƯNG CỦA THỊ TR ẤN TRONG KHI CẢI THIỆN CƠ S Ở V ẬT CHẤT.",
        "translations": {
            "vi": "GIỮ GÌN, BẢO T ỒN"
        }
    },
    {
        "id": "ban-89",
        "topic": "Bank",
        "word": "consistent",
        "phonetic": "",
        "pos": "adj",
        "meaning": "KIÊN ĐỊNH, NHẤT QUÁN, PHÙ HỢP",
        "example": "THER E HAS BEEN A CONSI ST ENT IMPR OVEMENT IN HER AT TITUDE.",
        "exampleTranslation": "ĐÃ CÓ MỘT SỰ CẢI THIỆN NHẤT QUÁN TRONG THÁI ĐỘ CỦA CÔ ẤY.",
        "translations": {
            "vi": "KIÊN ĐỊNH, NHẤT QUÁN, PHÙ HỢP"
        }
    },
    {
        "id": "ban-90",
        "topic": "Bank",
        "word": "continually",
        "phonetic": "",
        "pos": "adv",
        "meaning": "LIÊN TỤC, KHÔNG NGỚ T",
        "example": "THE T EACHER W AS ANGRY BECAU SE A S TUDENT CONTINUALLY INT ERRUPT ED HIM DURING THE LE SSON.",
        "exampleTranslation": "GIÁO VIÊN TỨC GIẬN VÌ MỘT HỌC SINH LIÊN TỤC NGẮT LỜI MÌNH TRONG GIỜ HỌC.",
        "translations": {
            "vi": "LIÊN TỤC, KHÔNG NGỚ T"
        }
    },
    // ==========================================
    // TOPIC 26: ENVIRONMENT (env-01 → env-38)
    // ==========================================
    {
        "id": "env-01",
        "topic": "Environment",
        "word": "intensively",
        "phonetic": "",
        "pos": "adv",
        "meaning": "MẠNH MẼ, S ÂU S ẮC",
        "example": "SHE IS S TUDYING INT ENSIV ELY, W ORKING T OWAR D HER DEGR EE.",
        "exampleTranslation": "CÔ ẤY ĐANG HỌC T ẬP CHUY ÊN S ÂU, LÀM VIỆC ĐỂ HƯỚNG T ỚI BẰNG CẤP CỦA MÌNH.",
        "translations": {
            "vi": "MẠNH MẼ, S ÂU S ẮC"
        }
    },
    {
        "id": "env-02",
        "topic": "Environment",
        "word": "disturb",
        "phonetic": "",
        "pos": "verb",
        "meaning": "QUẤY R ẦY, LÀM PHIỀN",
        "example": "PLEAS E DON 'T DIS TURBY OUR SIS TE R - SH E' S TRYING T O DO HER HOMEWORK.",
        "exampleTranslation": "XIN ĐỪNG LÀM PHIỀN EM GÁI CỦA BẠN - CÔ ẤY ĐANG CỐ GẮNG LÀM BÀI T ẬP V Ề NHÀ CỦA MÌNH.",
        "translations": {
            "vi": "QUẤY R ẦY, LÀM PHIỀN"
        }
    },
    {
        "id": "env-03",
        "topic": "Environment",
        "word": "pollutant",
        "phonetic": "",
        "pos": "noun",
        "meaning": "CHẤT GÂY Ô NHIỄM",
        "example": "SULPHUR DIO XIDE IS ONE O F S EVE R AL POLLUT ANT S THAT ARE R ELEAS ED INT O THE ATMOSPHER E BY COAL-ﬁR ED POWER S T ATIONS.",
        "exampleTranslation": "SULFUR DIO XIDE LÀ MỘT TRONG S Ố CÁC CHẤT Ô NHIỄM ĐƯỢC THẢI V ÀO KHÍ QUY ỂN BỞI CÁC NHÀ MÁY NHIỆ T ĐIỆN THAN.",
        "translations": {
            "vi": "CHẤT GÂY Ô NHIỄM"
        }
    },
    {
        "id": "env-04",
        "topic": "Environment",
        "word": "dense",
        "phonetic": "",
        "pos": "adj",
        "meaning": "DÀY ĐẶC, ĐÔNG ĐÚC",
        "example": "THE BODY W AS FOUND HIDDEN IN DENSE UNDERGROWTH.",
        "exampleTranslation": "THI THỂ ĐƯỢC TÌM THẤY ẨN TRONG LỚP CÂY CỐI RẬM R ẠP.",
        "translations": {
            "vi": "DÀY ĐẶC, ĐÔNG ĐÚC"
        }
    },
    {
        "id": "env-05",
        "topic": "Environment",
        "word": "environmental",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THUỘC VỀ MÔI TRƯỜNG",
        "example": "P EOPLE ARE BECOMING FAR MORE AWARE OF ENVIRONMENTAL ISSUES.",
        "exampleTranslation": "MỌI NGƯỜI NGÀY CÀNG NHẬN THỨC RÕ HƠN V Ề CÁC VẤN ĐỀ GN HẬN THUỘC VỀ MÔI TRƯỜNG.",
        "translations": {
            "vi": "THUỘC VỀ MÔI TRƯỜNG"
        }
    },
    {
        "id": "env-06",
        "topic": "Environment",
        "word": "leak",
        "phonetic": "",
        "pos": "noun",
        "meaning": "LỖ THỦNG, SỰ RÒ RỈ",
        "example": "THERE'S WATER ON THE ﬂOOR - WE MUST HAVE A LEAK.",
        "exampleTranslation": "CÓ NƯỚC TRÊN SÀN - CHÚNG TA PHẢI CÓ MỘT CHỖ RÒ RỈ. CONTAMINATE (BẨN, BỆNH)",
        "translations": {
            "vi": "LỖ THỦNG, SỰ RÒ RỈ"
        }
    },
    {
        "id": "env-07",
        "topic": "Environment",
        "word": "disaster",
        "phonetic": "",
        "pos": "noun",
        "meaning": "THẢM HOẠ",
        "example": "IT W OULD BE A DIS AS TER F OR ME IF I LOS T MY JOB.",
        "exampleTranslation": "SẼ LÀ MỘT THẢM HỌA CHO T ÔI NẾU T ÔI BỊ MẤT VIỆC LÀM.",
        "translations": {
            "vi": "THẢM HOẠ"
        }
    },
    {
        "id": "env-08",
        "topic": "Environment",
        "word": "discharge",
        "phonetic": "",
        "pos": "verb",
        "meaning": "THẢI R A, TUÔN R A, CHẢY R A",
        "example": "RAIN WA T ER COLLECT S HER E AND THEN DIS CHAR GE S INTO THE RIV ER K ENNE T T.",
        "exampleTranslation": "NƯỚC MƯA THU THẬP Ở ĐÂY V À S AU ĐÓ THẢI R A S ÔNG K ENNE TT.",
        "translations": {
            "vi": "THẢI R A, TUÔN R A, CHẢY R A"
        }
    },
    {
        "id": "env-09",
        "topic": "Environment",
        "word": "resource",
        "phonetic": "",
        "pos": "noun",
        "meaning": "NGUỒN, NGUỒN T ÀI NGUYÊ N",
        "example": "THE COUNTRY' S GR EAT EST R ES OUR CE IS THE DEDICATION O F ITS W ORK ER S.",
        "exampleTranslation": "NGUỒN LỰC LỚN NHẤT CỦA ĐẤT NƯỚC LÀ SỰ CỐNG HIẾN CỦA NGƯỜI LAO ĐỘNG.",
        "translations": {
            "vi": "NGUỒN, NGUỒN T ÀI NGUYÊ N"
        }
    },
    {
        "id": "env-10",
        "topic": "Environment",
        "word": "deplete",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM SUY Y ẾU, LÀM CẠN KIỆ T",
        "example": "THE ILLNE SS DEPLE TE S THE BODY O F IMPOR TA NT VIT AMINS. RT ANT VIT A",
        "exampleTranslation": "BỆNH LÀM C Ơ BỆNH LÀM CƠ THỂ CẠN KIỆ T CÁC VIT AMIN QUAN TR ỌNG.",
        "translations": {
            "vi": "LÀM SUY Y ẾU, LÀM CẠN KIỆ T"
        }
    },
    {
        "id": "env-11",
        "topic": "Environment",
        "word": "purify",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LỌC, LÀM S ẠCH",
        "example": "ONE O F THE FUNCTIONS O F THE KIDNE Y S IS TO PURIF Y THE BLOOD.",
        "exampleTranslation": "MỘT TRONG NHỮNG CHỨC NĂNG CỦA THẬN LÀ LỌC MÁU.",
        "translations": {
            "vi": "LỌC, LÀM S ẠCH"
        }
    },
    {
        "id": "env-12",
        "topic": "Environment",
        "word": "endangered",
        "phonetic": "",
        "pos": "adj",
        "meaning": "BỊ ĐE DOẠ",
        "example": "SOCIAL W ORK ER S WHO LOOK AF TER ABUS ED OR ENDANGER ED CHILDR EN O FT EN HAVE S TR ESSFUL DAY S AT W ORK.",
        "exampleTranslation": "NHÂN VIÊN X Ã HỘI CHĂM S ÓC TR Ẻ EM BỊ LẠM DỤNG HOẶC CÓ NGUY CƠ BỊ ĐE DỌA THƯỜNG CÓ NHỮNG NGÀY CĂNG THẲNG",
        "translations": {
            "vi": "BỊ ĐE DOẠ"
        }
    },
    {
        "id": "env-13",
        "topic": "Environment",
        "word": "drought",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HẠN HÁN",
        "example": "THIS Y EAR (A) S EVE RE DR OUGHT HAS RUINED THE CRO PS.",
        "exampleTranslation": "NĂM NAY (A) HẠN HÁN NGHIÊM TR ỌNG ĐÃ T ÀN PHÁ MÙA MÀNG.",
        "translations": {
            "vi": "HẠN HÁN"
        }
    },
    {
        "id": "env-14",
        "topic": "Environment",
        "word": "migration",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ DI CƯ, SỰ CHUY ỂN",
        "example": "SOME OLD R OADS F OLLO W THE PATHS O F S EAS ONAL ANIMAL MIGR ATIONS.",
        "exampleTranslation": "MỘT S Ố CON ĐƯỜNG CŨ TIẾP NỐI NHỮNG CON ĐƯỜNG DI CƯ CỦA ĐỘNG V ẬT THEO MÙA.",
        "translations": {
            "vi": "SỰ DI CƯ, SỰ CHUY ỂN"
        }
    },
    {
        "id": "env-15",
        "topic": "Environment",
        "word": "ecology",
        "phonetic": "",
        "pos": "noun",
        "meaning": "HỆ SINH THÁI, SINH THÁI HỌC",
        "example": "SHE HOPE S T O S TUDY ECOLOGY AT COLLEGE.",
        "exampleTranslation": "CÔ HY V ỌNG S Ẽ THEO HỌC NGÀNH SINH THÁI HỌC T ẠI TRƯỜNG ĐẠI HỌC. EO HỌC NGÀNH SIN H",
        "translations": {
            "vi": "HỆ SINH THÁI, SINH THÁI HỌC"
        }
    },
    {
        "id": "env-16",
        "topic": "Environment",
        "word": "habitat",
        "phonetic": "",
        "pos": "noun",
        "meaning": "MÔI TRƯỜNG S ỐNG, NƠI S ỐNG",
        "example": "WITH S O MANY AREAS O F W OODLAND BEING CUT DO WN, A LOT O F WILDLIF E IS LOSING IT S NATUR AL HABIT AT.",
        "exampleTranslation": "VỚI R ẤT NHIỀU DIỆN TÍCH RỪNG BỊ CHẶT PHÁ, R ẤT NHIỀU LOÀI ĐỘNG V ẬT HOANG DÃ ĐANG MẤT DẦN MÔI TRƯỜNG",
        "translations": {
            "vi": "MÔI TRƯỜNG S ỐNG, NƠI S ỐNG"
        }
    },
    {
        "id": "env-17",
        "topic": "Environment",
        "word": "checkup",
        "phonetic": "",
        "pos": "noun",
        "meaning": "KHÁM SỨC KHOẺ",
        "example": "SHE GOE S TO HER DOCTOR FOR REGULAR CHECKUPS.",
        "exampleTranslation": "CÔ ẤY ĐẾN BÁC SĨ ĐỂ KIỂM TRA SỨC KHỎE THƯỜNG XUYÊN.",
        "translations": {
            "vi": "KHÁM SỨC KHOẺ"
        }
    },
    {
        "id": "env-18",
        "topic": "Environment",
        "word": "physician",
        "phonetic": "",
        "pos": "noun",
        "meaning": "BÁC SĨ",
        "example": "IN THE EPIDEMIC OF 1916, PHYSICIANS COULD DO LITTLE MORE FOR THE THOUSANDS WHO FELL ILL THAN ADVISE BED REST.",
        "exampleTranslation": "TRONG TRẬN DỊCH NĂM 1916, CÁC BÁC SĨ KHÔNG THỂ LÀM GÌ NHIỀU HƠN CHO HÀNG NGÀN NGƯỜI BỊ BỆNH NGOÀI VIỆC KHUYÊN",
        "translations": {
            "vi": "BÁC SĨ"
        }
    },
    {
        "id": "env-19",
        "topic": "Environment",
        "word": "diagnosis",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ CHUẨN ĐOÁN, LỜI CHẨN ĐOÁN",
        "example": "THE DOCTOR HAS MADE AN INITIAL DIAGNOSIS.",
        "exampleTranslation": "BÁC SĨ ĐÃ ĐƯA RA SỰ CHẨN ĐOÁN BAN ĐẦU.",
        "translations": {
            "vi": "SỰ CHUẨN ĐOÁN, LỜI CHẨN ĐOÁN"
        }
    },
    {
        "id": "env-20",
        "topic": "Environment",
        "word": "prescribe",
        "phonetic": "",
        "pos": "verb",
        "meaning": "CHO THUỐC, KÊ ĐƠN",
        "example": "THE DRUG IS OFTEN PRESCRIBED FOR ULCERS.",
        "exampleTranslation": "THUỐC THƯỜNG ĐƯỢC KÊ ĐƠN CHO CÁC TRƯỜNG HỢP LOÉT.",
        "translations": {
            "vi": "CHO THUỐC, KÊ ĐƠN"
        }
    },
    {
        "id": "env-21",
        "topic": "Environment",
        "word": "recognize",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NHẬN RA, CÔNG NHẬN",
        "example": "I HADN'T SEEN HER FOR 20 YEARS, BUT I RECOGNIZED HER IMMEDIATELY.",
        "exampleTranslation": "T ÔI ĐÃ KHÔNG GẶP CÔ ẤY TRONG 20 NĂM, NHƯNG TÔI NHẬN RA CÔ ẤY NGAY LẬP TỨC.",
        "translations": {
            "vi": "NHẬN RA, CÔNG NHẬN"
        }
    },
    {
        "id": "env-22",
        "topic": "Environment",
        "word": "join",
        "phonetic": "",
        "pos": "verb",
        "meaning": "NỐI LIỀN, GIA NHẬP, THAM GIA",
        "example": "A LONG SUSPENSION BRIDGE JOINS THE TWO ISLANDS.",
        "exampleTranslation": "MỘT CÂY CẦU TREO DÀI NỐI LIỀN HAI HÒN ĐẢO.",
        "translations": {
            "vi": "NỐI LIỀN, GIA NHẬP, THAM GIA"
        }
    },
    {
        "id": "env-23",
        "topic": "Environment",
        "word": "recommend",
        "phonetic": "",
        "pos": "verb",
        "meaning": "KHUY ÊN, GIỚI THIỆU, TIẾN CỬ",
        "example": "I CAN R ECOMMEND THE CHICK EN IN MUSHR OOM S AUCE - IT'S DELICIOUS.",
        "exampleTranslation": "TÔI CÓ THỂ GIỚI THIỆU MÓN GÀ S ỐT NẤM - NÓ R ẤT NGON.",
        "translations": {
            "vi": "KHUY ÊN, GIỚI THIỆU, TIẾN CỬ"
        }
    },
    {
        "id": "env-24",
        "topic": "Environment",
        "word": "necessary",
        "phonetic": "",
        "pos": "adj",
        "meaning": "CẦN THIẾ T, THIẾ T Y ẾU",
        "example": "HE LACK S THE NEC ESSA RY SKILLS F OR THE JOB.",
        "exampleTranslation": "ANH T A THIẾU C Á ANH T A THIẾU CÁC KỸ NĂNG CẦN THIẾ T CHO CÔNG VIỆ C.",
        "translations": {
            "vi": "CẦN THIẾ T, THIẾ T Y ẾU"
        }
    },
    {
        "id": "env-25",
        "topic": "Environment",
        "word": "reaction",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ PHẢN ỨNG",
        "example": "I LOVE T O W AT CH PEOPLE 'S R EACTIONS WHEN I S AY WHO I AM.",
        "exampleTranslation": "T ÔI THÍCH XEM PHẢN ỨNG CỦA MỌI NGƯỜI KHI T ÔI NÓI T ÔI LÀ AI.",
        "translations": {
            "vi": "SỰ PHẢN ỨNG"
        }
    },
    {
        "id": "env-26",
        "topic": "Environment",
        "word": "simple",
        "phonetic": "",
        "pos": "adj",
        "meaning": "ĐƠN GIẢN",
        "example": "THE INS TRUCTIONS WERE WRITTEN IN SIMPLE ENGLISH.",
        "exampleTranslation": "NHỮNG HƯỚNG DẪN ĐƯỢC VIẾ T BẰNG TIẾNG ANH ĐƠN GIẢN. COVERAGE SỰ ĐƯA TIN (BÁO CHÍ )",
        "translations": {
            "vi": "ĐƠN GIẢN"
        }
    },
    {
        "id": "env-27",
        "topic": "Environment",
        "word": "exposure",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ PHƠI BÀY, SỰ BỐC TR ẦN",
        "example": "THE E XPOSUR E O F THE POLITICIAN'S LOVE Aﬀ AIR F OR CED HIM R F OR CED HI M TO R ES IGN.",
        "exampleTranslation": "SỰ BỐC TR ẦN CHUY ỆN TÌNH CỦA CHÍNH TRỊ GIA BUỘC ÔNG PHẢI TỪ CHỨC.",
        "translations": {
            "vi": "SỰ PHƠI BÀY, SỰ BỐC TR ẦN"
        }
    },
    {
        "id": "env-28",
        "topic": "Environment",
        "word": "fatigue",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ MỆ T MỎI, CÔNG VIỆC MỆ T NHỌC",
        "example": "SHE W AS SUﬀ ERING FR OM F ATIGUE.",
        "exampleTranslation": "CÔ ĐANG BỊ MỆ T MỎI.",
        "translations": {
            "vi": "SỰ MỆ T MỎI, CÔNG VIỆC MỆ T NHỌC"
        }
    },
    {
        "id": "env-29",
        "topic": "Environment",
        "word": "symptom",
        "phonetic": "",
        "pos": "noun",
        "meaning": "TRIỆU CHỨNG",
        "example": "HE ' S COMPLAINING O F ALL THE ﬂU S YMPT OMS - A HIGH T EMPER ATURE, HEADACHE, AND S O ON. RE C OVE RY",
        "exampleTranslation": "CHÚNG T ÔI R ẤT TIẾC KHI BIẾ T BẠN BỊ ỐM V À CHÚC BẠN NHANH CHÓNG BÌNH PHỤC.",
        "translations": {
            "vi": "TRIỆU CHỨNG"
        }
    },
    {
        "id": "env-30",
        "topic": "Environment",
        "word": "examination",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ KIỂM TR A, SỰ THĂM KHÁM",
        "example": "I THOUGHT IT W AS PAINT AT ﬁR ST, BUT ON CLOS ER E X AMINATION I R EALIZ ED IT W AS DRIED BLOOD.",
        "exampleTranslation": "LÚC ĐẦU T ÔI NGHĨ ĐÓ LÀ S ƠN, NHƯNG KHI KIỂM TR A KỸ HƠN, T ÔI NHẬN R A ĐÓ LÀ MÁU KHÔ.",
        "translations": {
            "vi": "SỰ KIỂM TR A, SỰ THĂM KHÁM"
        }
    },
    {
        "id": "env-31",
        "topic": "Environment",
        "word": "easily",
        "phonetic": "",
        "pos": "adv",
        "meaning": "DỄ DÀNG, THOẢI MÁI",
        "example": "I CAN EASILY BE HOME EARLY T ONIGHT, IF Y OU W ANT. OME EARLY TONIGHT, IF U WANT.",
        "exampleTranslation": "T ÔI CÓ THỂ DỄ DÀNG VỀ NHÀ SỚM T ỐI NAY, NẾU BẠN MUỐN. NG V Ề NHÀ SỚM T ỐI NA",
        "translations": {
            "vi": "DỄ DÀNG, THOẢI MÁI"
        }
    },
    {
        "id": "env-32",
        "topic": "Environment",
        "word": "dental",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THUỘC VỀ RĂNG/NHA KHOA",
        "example": "SHE HAD TO CANCEL HER DENTAL APPOINTMENT.",
        "exampleTranslation": "CÔ ĐÃ PHẢI HỦY BỎ CUỘC HẸN KHÁM RĂNG.",
        "translations": {
            "vi": "THUỘC VỀ RĂNG/NHA KHOA"
        }
    },
    {
        "id": "env-33",
        "topic": "Environment",
        "word": "pharmaceutical",
        "phonetic": "",
        "pos": "adj",
        "meaning": "THUỘC DƯỢC PHẨM",
        "example": "THE BRITISH PHARMACEUTICAL GIANT ASTR/A001ZENECA EMPLOYS ABOUT 5,000 PEOPLE IN THE TOWN.",
        "exampleTranslation": "TẬP ĐOÀN THUỘC DƯỢC PHẨM KHỔNG LỒ ASTR/A001ZENECA CỦA ANH SỬ DỤNG KHOẢNG 5.0 00 NHÂN VIÊN TRONG THỊ TRẤN.",
        "translations": {
            "vi": "THUỘC DƯỢC PHẨM"
        }
    },
    {
        "id": "env-34",
        "topic": "Environment",
        "word": "relieve",
        "phonetic": "",
        "pos": "verb",
        "meaning": "LÀM DỊU, LÀM GIẢM BỚT",
        "example": "SHE WAS GIVEN A SHOT OF MORPHINE TO RELIEVE THE PAIN.",
        "exampleTranslation": "CÔ ĐƯỢC TIÊM MỘT MŨI MORPHIN ĐỂ LÀM DỊU CƠN ĐAU.",
        "translations": {
            "vi": "LÀM DỊU, LÀM GIẢM BỚT"
        }
    },
    {
        "id": "env-35",
        "topic": "Environment",
        "word": "induce",
        "phonetic": "",
        "pos": "verb",
        "meaning": "GÂY RA, ĐEM LẠI",
        "example": "THEY INDUCED HER TO TAKE THE JOB BY PROMISING EDITORIAL FREEDOM.",
        "exampleTranslation": "HỌ ĐÃ DỤ DỖ CÔ ẤY NHẬN CÔNG VIỆC BẰNG CÁCH HỨA HẸN TỰ DO BIÊN TẬP.",
        "translations": {
            "vi": "GÂY RA, ĐEM LẠI"
        }
    },
    {
        "id": "env-36",
        "topic": "Environment",
        "word": "insurance",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ BẢO HIỂM",
        "example": "YOU MUST MAKE SURE YOU TAKE OUT INSURANCE ON THE CONTENTS OF YOUR HOUSE.",
        "exampleTranslation": "BẠN PHẢI CHẮC CHẮN RẰNG BẠN ĐÃ MUA BẢO HIỂM CHO CÁC VẬT DỤNG TRONG NHÀ CỦA BẠN.",
        "translations": {
            "vi": "SỰ BẢO HIỂM"
        }
    },
    {
        "id": "env-37",
        "topic": "Environment",
        "word": "nutrition",
        "phonetic": "",
        "pos": "noun",
        "meaning": "SỰ NUÔI DƯỠNG, DINH DƯỠN G",
        "example": "GOOD NUTRITION IS E SSENTIAL IF PATIENT S ARE T O MAK E A QUICK R EC OVE RY.",
        "exampleTranslation": "DINH DƯỠNG T ỐT LÀ ĐIỀU CẦN THIẾ T NẾU BỆNH NHÂN MUỐN PHỤC HỒI NHANH CHÓNG.",
        "translations": {
            "vi": "SỰ NUÔI DƯỠNG, DINH DƯỠN G"
        }
    },
    {
        "id": "env-38",
        "topic": "Environment",
        "word": "susceptible",
        "phonetic": "",
        "pos": "adj",
        "meaning": "NHẠY CẢM, DỄ BỊ, DỄ MẮC",
        "example": "SHE ISN 'T VERY SUS CEPTIBLE T O ﬂATTE RY.",
        "exampleTranslation": "CÔ ẤY KHÔNG DỄ BỊ XU NỊNH.",
        "translations": {
            "vi": "NHẠY CẢM, DỄ BỊ, DỄ MẮC"
        }
    }
];
