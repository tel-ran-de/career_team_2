-- import.sql

-- CATEGORY_TYPE
insert into CATEGORY_TYPE (ID, NAME) values (1, 'majors');
insert into CATEGORY_TYPE (ID, NAME) values (2, 'industry');
insert into CATEGORY_TYPE (ID, NAME) values (3, 'company size');


-- CATEGORY
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (1, 'Micro-enterprises', 3);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (2, 'Small enterprises', 3);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (3, 'Medium-sized enterprises', 3);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (4, 'Large enterprises', 3);

insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (5, 'Aerospace and Defense', 2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (6, 'Automotive', 2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (7, 'Aviation', 2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (8, 'Banking, financial services and insurance (BFSI)',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (9, 'E-commerce',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (10, 'Educational Services',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (11, 'Energy',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (12, 'Entertainment & Media',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (13, 'Food & Agricultural industries',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (14, 'Healthcare & Social Assistance',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (15, 'IT & Telecom',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (16, 'Legal',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (17, 'Manufacturing',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (18, 'Non-Profit',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (19, 'Pharmaceuticals and Life sciences',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (20, 'Public Services',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (21, 'Real Estate & Leasing',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (22, 'Retail & FMCG',2);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (23, 'Transportation & Logistics',2);

insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (24, 'Business', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (25, 'Health Professions', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (26, 'Social Sciences & History', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (27, 'Engineering', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (28, 'Biological & Biomedical Sciences', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (29, 'Psychology', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (30, 'Communication & Journalism', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (31, 'Visual & Performing Arts', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (32, 'Computer & Information Sciences', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (33, 'Education', 1);

insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (34, 'Finance',1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (35, 'Managment', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (36, 'Nursing', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (37, 'Marketing', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (38, 'Legal Studies', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (39, 'Healthcare Administration', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (40, 'Mechanical Engineering', 1);
insert into CATEGORY (ID, NAME, CATEGORY_TYPE_ID) values (41, 'Nursing, Business, Public Relations', 1);



---- PROFESSION
insert into PROFESSION (ID, NAME) values (1, 'Quantitative Analyst');
insert into PROFESSION (ID, NAME) values (2, 'Financial Analyst');
insert into PROFESSION (ID, NAME) values (3, 'Software Engineer');
insert into PROFESSION (ID, NAME) values (4, 'Compliance Officer');
insert into PROFESSION (ID, NAME) values (5, 'Project Manager');
insert into PROFESSION (ID, NAME) values (6, 'Nurse');
insert into PROFESSION (ID, NAME) values (7, 'Marketing Manager');
insert into PROFESSION (ID, NAME) values (8, 'Growth Manager');
insert into PROFESSION (ID, NAME) values (9, 'Talent Acquisition');
insert into PROFESSION (ID, NAME) values (10, 'Corporate Lawyer');
insert into PROFESSION (ID, NAME) values (11, 'Business Development Manager');
insert into PROFESSION (ID, NAME) values (12, 'Quality Assurance');
insert into PROFESSION (ID, NAME) values (13, 'Flight Attendant');

---- VIDEO
--- Quantitative Analyst -1 / Finance - 34
insert into VIDEO (ID, VIDEO_URL, NAME) values (1, 'https://youtu.be/Qd2Kh80ZK6k', 'Interview with a Quant from Two Sigma');
insert into VIDEO (ID, VIDEO_URL, NAME) values (2, 'https://youtu.be/J9nV8U8gLec', 'Quantitative Researcher Interview at Citadel');
insert into VIDEO (ID, VIDEO_URL, NAME) values (3, 'https://youtu.be/VLPRxRe42kM', 'A career as a Quant (Quantitative Analyst)');
--- Financial Analyst -2 Finance - 8
insert into VIDEO (ID, VIDEO_URL, NAME) values (4, 'https://youtu.be/QcCWRXzrnRk', 'Day in the Life of a Financial Analyst in Corporate Finance');
insert into VIDEO (ID, VIDEO_URL, NAME) values (5, 'https://youtu.be/OmPkgkoKniA', 'A Day In The Life Of Financial Analyst');
insert into VIDEO (ID, VIDEO_URL, NAME) values (6, 'https://youtu.be/mWlRwKnVgfw', 'DAY IN THE LIFE of a Financial Analyst');
-- Software Engineer -3 / IT - 15
insert into VIDEO (ID, VIDEO_URL, NAME) values (7, 'https://youtu.be/deLf6eynC40', 'A Day In The Life Of An Amazon Software Engineer');
insert into VIDEO (ID, VIDEO_URL, NAME) values (8, 'https://youtu.be/j1fc0FlCjyI', 'A REAL Day in the Life of a Software Engineer');
insert into VIDEO (ID, VIDEO_URL, NAME) values (9, 'https://youtu.be/9qIRJZnoeWE', 'A Productive Day in the Life of a Google Software Engineer');
insert into VIDEO (ID, VIDEO_URL, NAME) values (10, 'https://youtu.be/LGDughLj1Oo', 'An ACTUAL Day in the Life of a Software Engineer');
insert into VIDEO (ID, VIDEO_URL, NAME) values (11, 'https://youtu.be/1LSXEC0Clow', 'A Day in the Life of a Software Engineer');
--- Compliance Officer
insert into VIDEO (ID, VIDEO_URL, NAME) values (12, 'https://youtu.be/94O725eWuXs', 'Compliance at an Investment Bank');
insert into VIDEO (ID, VIDEO_URL, NAME) values (13, 'https://youtu.be/akloeARw-Xs', 'Compliance Officer for Danske Bank');
insert into VIDEO (ID, VIDEO_URL, NAME) values (14, 'https://youtu.be/aDLRMcoBxY8', 'Chief Compliance Officer Role');

--- Project Manager
insert into VIDEO (ID, VIDEO_URL, NAME) values (15, 'https://youtu.be/AzQ3Xso7sLA', 'A Day in the Life of a Project Manager');
insert into VIDEO (ID, VIDEO_URL, NAME) values (16, 'https://youtu.be/_LDEHVlWV18', 'Day in the Life of a Project Manager');
insert into VIDEO (ID, VIDEO_URL, NAME) values (17, 'https://youtu.be/HTJxsrW_Kow', 'Day In The Life of A Project Manager');
insert into VIDEO (ID, VIDEO_URL, NAME) values (18, 'https://youtu.be/rpdjz75zmH0', 'A day in the life of a Project Manager');

---Nurse
insert into VIDEO (ID, VIDEO_URL, NAME) values (19, 'https://youtu.be/4ihHeSps6mY', 'A Day in the Life of a Nurse Practitioner');
insert into VIDEO (ID, VIDEO_URL, NAME) values (20, 'https://youtu.be/MII2rqttl1k', 'My 12 hour nurse shift');
insert into VIDEO (ID, VIDEO_URL, NAME) values (21, 'https://youtu.be/Qy6LnAByZo4', 'Day In The Life Of A NICU Nurse');
insert into VIDEO (ID, VIDEO_URL, NAME) values (22, 'https://youtu.be/DREvmmE7wlg', 'Day in the Life of an ICU Nurse');
--Marketing Manager
insert into VIDEO (ID, VIDEO_URL, NAME) values (23, 'https://youtu.be/vOZ-VFnYvuA', 'Day In The Life of a Marketing Manager');
insert into VIDEO (ID, VIDEO_URL, NAME) values (24, 'https://youtu.be/ydvowqCgiRo', 'A Day in the Life of a Marketing Manager');
insert into VIDEO (ID, VIDEO_URL, NAME) values (25, 'https://youtu.be/b0_RAe_Arr8', 'What I *actually* do as a marketing manager');
insert into VIDEO (ID, VIDEO_URL, NAME) values (26, 'https://youtu.be/dOXKf7FlzIM', 'Day in the Life of a Marketing Specialist');
--Growth Manager
insert into VIDEO (ID, VIDEO_URL, NAME) values (27, 'https://youtu.be/XmS-QbYx18A', 'Day in the Life of a Community Growth Manager');
insert into VIDEO (ID, VIDEO_URL, NAME) values (28, 'https://youtu.be/f_2B2WQHWAU', 'A day in the life of a growth marketer in Finland');
insert into VIDEO (ID, VIDEO_URL, NAME) values (29, 'https://youtu.be/PtOo9hkznhE', 'Insights on Growth Marketing with Googles Fab Dolan');
--Talent Acquisition
insert into VIDEO (ID, VIDEO_URL, NAME) values (30, 'https://youtu.be/kpqHNVInSaQ', 'Day in The Life: Talent Acquisition');
insert into VIDEO (ID, VIDEO_URL, NAME) values (31, 'https://youtu.be/BqaRa-w1b5A', 'Day In My Life: What Does a Headhunter/ Recruiter Do?');
insert into VIDEO (ID, VIDEO_URL, NAME) values (32, 'https://youtu.be/yF0z09S1CtU', 'work day in my life in the TECH INDUSTRY (as a recruiter)');
--Corporate Lawyer
insert into VIDEO (ID, VIDEO_URL, NAME) values (33, 'https://youtu.be/FsJqRRWtkjM', 'Day In The Life Of A Corporate Lawyer');
insert into VIDEO (ID, VIDEO_URL, NAME) values (34, 'https://youtu.be/lKERxB77fH0', 'Day in the Life of a Lawyer | Big Law');
insert into VIDEO (ID, VIDEO_URL, NAME) values (35, 'https://youtu.be/U0zIdwhCf4g', 'WORK WEEK IN MY LIFE AS A LAWYER IN TECH');
--Business Development Manager
insert into VIDEO (ID, VIDEO_URL, NAME) values (36, 'https://youtu.be/eRNo4RKsumE', 'Day in the Life of an SDR | SaaS Business/Sales Development Rep Daily Routine');
insert into VIDEO (ID, VIDEO_URL, NAME) values (37, 'https://youtu.be/CJrxyFLvx34', 'A DAY IN THE LIFE OF A MEDICAL SALES REP');
insert into VIDEO (ID, VIDEO_URL, NAME) values (38, 'https://youtu.be/-Tj-v4wjqRc', 'Tech Sales - Day In The Life Working In Tech Sales at a SaaS Company');
--Quality Assurance
insert into VIDEO (ID, VIDEO_URL, NAME) values (39, 'https://youtu.be/VUA1V2qF_EE', 'Christine Moore Quality Assurance Auditor - A Day in the Life');
insert into VIDEO (ID, VIDEO_URL, NAME) values (40, 'https://youtu.be/8wd_f58VQNA', 'How To Become A Software Quality Assurance Engineer?');
insert into VIDEO (ID, VIDEO_URL, NAME) values (41, 'https://youtu.be/ChhYCujkMZ0', 'A Day In The Life of a QA Tester at a Software Development Company');
insert into VIDEO (ID, VIDEO_URL, NAME) values (42, 'https://youtu.be/cE_rxK-Pmco', 'A day in the life of a quality assurance technician');
--Flight Attendant
insert into VIDEO (ID, VIDEO_URL, NAME) values (43, 'https://youtu.be/MSmm5OXC27Q', 'A Day In The Life Of A FLIGHT ATTENDANT');
insert into VIDEO (ID, VIDEO_URL, NAME) values (44, 'https://youtu.be/lhVEddhkLbQ', 'INSIDE an EMIRATES FLIGHT as CABIN CREW');
insert into VIDEO (ID, VIDEO_URL, NAME) values (45, 'https://youtu.be/eklmtDGUZBI', 'A Day In The Life Of A Flight Attendant');

---- VIDEO_CATEGORY
-- Finance/BFSI/Large Co - 1,2,3,5 - 34/8/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (1, 8); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (1, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (2, 8); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (2, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (3, 8); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (3, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (5, 8); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (5, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (1, 34);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (2, 34);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (3, 34);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (5, 34);


-- Finance/Energy/Large Co -- 4 ---- 81/11/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (4, 34); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (4, 11);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (4, 4);

-- Finance/IT/Small Co -- 6 ---- 81/15/2
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (6, 34); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (6, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (6, 2);

-- IT/Ecommerce/Large Co -- 7 15/9/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (7, 15); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (7, 9);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (7, 4);

--8 IT/NA/Small Co 15/2
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (8, 15); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (11, 2);

--9, 10 IT/IT/Large Co 15/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (9, 15); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (9, 2);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (10, 15); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (10, 2);

--11 IT/NA/NA 15
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (11, 15);

--12 - 14 Finance/BFSI/Large Co 34/8/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (12, 34); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (12, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (12, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (13, 34); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (13, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (13, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (14, 34); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (14, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (14, 4);

--15 Management/Entertainment&Media/Medium Sized Co 35/12/3
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (15, 12); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (15, 3);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (15, 35);

--16 Management/Entertainment&Media/Small Co 35/12/2
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (16, 12); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (16, 3);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (16, 35);

--17 Management/IT/NA 35/15
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (17, 35); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (17, 15);

--18 Management/Energy/Large Co 35/11/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (18, 35); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (18, 11);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (18, 4);
--
--19-22 Nursing/Public Service/Large Co 36/20/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (19, 36); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (19, 20);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (19, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (20, 36); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (20, 20);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (20, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (21, 36); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (21, 20);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (21, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (22, 36); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (22, 20);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (22, 4);
--
--23 Marketing/BFSI/Micro Co 37/8/1
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (23, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (23, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (23, 1);

--24 Marketing/Non-Profit/Small Co 37/18/2
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (24, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (24, 18);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (24, 2);

--25 Marketing/IT/Micro Co 37/8/1
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (25, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (25, 8);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (25, 1);

--26 Marketing/Retail & FMCG/Large Co 37/22/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (26, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (26, 22);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (26, 4);

--27 Marketing/Entertainment&Media/Micro Co 37/12/1
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (27, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (27, 12);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (27, 1);

--28 Marketing/IT/Small Co 37/15/2
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (28, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (28, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (28, 2);

--29 Marketing/IT/Large Co 37/15/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (29, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (27, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (29, 4);

--30 Management/IT/Large Co 35/15/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (30, 35); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (30, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (30, 4);

--31 Management/NA/Large Co 35/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (31, 35); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (31, 4);

--32 Management/IT/Large Co 35/15/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (32, 35); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (32, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (32, 4);

--33 Legal Studies/Legal/Large Co  38/16/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (33, 38); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (33, 16);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (33, 4);

--34 Legal Studies/Legal/Large Co 38/16/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (34, 38); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (38, 16);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (34, 4);

--35 Legal Studies/IT/Large Co 38/15/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (35, 38); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (35, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (35, 4);

--36 Marketing/IT/Medium Sized Co 37/15/2
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (36, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (36, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (36, 2);

--37 Marketing/Pharmaceuticals and Life Sciences/LargeCo 37/19/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (37, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (37, 19);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (37, 4);

--38 Marketing/IT/Large Co 37/15/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (38, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (38, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (38, 4);

--39 Marketing/IT/Micro Co 37/15/1
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (39, 37); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (39, 15);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (39, 1);

--40 Healthcare Administration/Pharmaceuticals and Life Sciences/Large Co 39/19/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (40, 39); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (40, 19);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (40, 4);

--41-42 IT/IT/Large Co 15/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (41, 15); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (41, 4);

--43 Mechanical Engineering/Aerospace and Defense/Large Co 40//4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (42, 40); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (42, 19);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (42, 4);

--44 -46 Nursing, Business, Public Relations/Aviation/Large Co 41/5/4
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (43, 41); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (43, 5);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (43, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (44, 41); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (44, 5);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (44, 4);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (45, 41); insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (45, 5);
insert into VIDEO_CATEGORY (VIDEO_ID, CATEGORY_ID) values (45, 4);
--Profession
--1-3 Quantitative Analyst  - 1
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (1, 1);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (2, 1);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (3, 1);

-- 4-6 Financial Analyst - 2
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (4, 2);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (5, 2);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (6, 2);

--7 - 11 Software Engineer - 3
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (7, 3);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (8, 3);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (9, 3);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (10, 3);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (11, 3);

--12 - 14 Compliance Officer - 4
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (12, 4);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (13, 4);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (14, 4);

--15 - 18 Project Manager - 5
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (15, 5);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (16, 5);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (17, 5);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (18, 5);

-- 19 - 22 NUrse - 6
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (19, 6);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (20, 6);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (21, 6);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (22, 6);

--23-26 Marketing Manager - 7
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (23, 7);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (24, 7);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (25, 7);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (26, 7);

-- 27 - 29 Growth Manager - 8
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (27, 8);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (28, 8);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (29, 8);

--30- 32 Talent Acquisition - 9
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (30, 9);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (31, 9);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (32, 9);

--33-35 Corporate Lawyer 10
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (33, 10);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (34, 10);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (35, 10);

--36-39 Business Development Manager - 11
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (36, 11);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (37, 11);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (38, 11);

--39-42 Quality Assurance 12
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (39, 12);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (40, 12);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (41, 12);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (42, 12);

--43-45 Flight Attendant - 13
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (43, 13);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (44, 13);
insert into VIDEO_PROFESSION (VIDEO_ID, PROFESSION_ID) values (45, 13);


